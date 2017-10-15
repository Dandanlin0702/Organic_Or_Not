const express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose"),
    http = require('http'),
    MessagingResponse = require('twilio').twiml.MessagingResponse,
    twilio = require('twilio'),
    NotOrganic = require("./models/not_organic_do"),
    Clarifai   = require('clarifai'),
    seedDB     = require("./seeds");

// Get rid of deprecated promise warning
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://hunter:hunter@ds121225.mlab.com:21225/organic-or-not_development", {useMongoClient: true});
//mongoose.connect("mongodb://localhost/organic-or-not_development");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//seedDB();

// Public folder
app.use(express.static('./public'));

// Clarifai API
const appClarifai = new Clarifai.App({
 apiKey: 'e2ff146e44ba4f1da89a037d3f251b27'
});

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({layoutsDir: './views/layouts', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);


    // Load up all of the controllers
    const controllers = require('./controllers');
    app.use(controllers);


    //Recieving SMS
    app.post('/sms', (req, res) => {
        //console.log(JSON.stringify(req.body));
        const msgFrom = req.body.From;
        const msgBody = req.body.Body;
        const numOfMedia = req.body.NumMedia;

        if(numOfMedia == 0) {                                           //no images
            if(isNaN(msgBody)){                                         //check if it is a zipcode
                res.send(`
                    <Response>
                        <Message>
                            Hello ${msgFrom}. You have to send an image or zipcode. :D Try again!
                        </Message>
                    </Response>
                `);
            } else {
                res.send(`
                    <Response>
                        <Message>
                            Hello ${msgFrom}. Zipcode!
                        </Message>
                    </Response>
                `);
            }
        } else if(numOfMedia > 1) {                                     //too many images
            res.send(`
                <Response>
                    <Message>
                        NO! You sent too many images!! Try again! :O
                    </Message>
                </Response>
            `);
        } else if(numOfMedia == 1) {                                    //one image send
            var image = req.body.MediaUrl0;

            appClarifai.models.predict(Clarifai.GENERAL_MODEL, image).then(
              function(response) {
                var tags = [];
                for (i = 0; i < 10; i++)
                  tags.push(response.outputs[0].data.concepts[i].name);
                console.log(tags);
              },
              function(err) {
                  console.error(err);
              }
            );

            res.send(`
                <Response>
                    <Message>
                        Hello ${msgFrom}. You sent this image: ${image}
                    </Message>
                </Response>
            `);
        }
    });

    app.listen(5000);
