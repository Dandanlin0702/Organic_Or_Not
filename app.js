  const express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose"),
    http = require('http'),
    MessagingResponse = require('twilio').twiml.MessagingResponse,
    twilio = require('twilio'),
    Clarifai   = require('clarifai'),
    seedDB     = require("./seeds"),
    MongoClient = require('mongodb').MongoClient,
    Organic = require("./models/organic_do.js"),
    Locations = require("./models/locations.js"),
    Promise = require('promise'),
    Bluebird = require('bluebird');

// Get rid of deprecated promise warning
mongoose.Promise = global.Promise;
var url = "mongodb://hunter:hunter@ds121225.mlab.com:21225/organic-or-not_development";
mongoose.connect(url, {useMongoClient: true});
//mongoose.connect("mongodb://localhost/organic-or-not_development");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//seedDB();


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
        const numOfMedia = 1;

        var message = "";

        if(numOfMedia == 0) {                                           //no images
            if(isNaN(msgBody)){                                         //check if it is a zipcode
                res.send(`
                    <Response>
                        <Message>
                            Hello! You have to send an image or zipcode. :D Try again!
                        </Message>
                    </Response>
                `);
            } else {
                var message = "The closest scrap drop off location near you is \n\n";
              Locations.find({zip: msgBody}, (err, location) => {
                if(err){
                  console.log(err);
                } else {
                    console.log(location);
                    message = message + "Name: " + location[0].name + "\nAddress: " + location[0].address + "\nOpen: " + location[0].open + "\n";
                    res.send(`
                    <Response>
                        <Message>
                            Hello ${msgFrom}. ${message}
                        </Message>
                    </Response>
                    `);
                }
              });



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

            var image = req.body.MediaUrl0;                                 //get image url
            var finish = false;

            appClarifai.models.predict(Clarifai.GENERAL_MODEL, image).then(
              function(response) {
                var tags = [];
                for (i = 0; i < 10; i++)
                  tags.push(response.outputs[0].data.concepts[i].name);


                //check if organic
                for ( i = 0 ; i < tags.length; i++) {
                    Organic.count({ category_tags: tags[i]}, (err, count) => {
                        if (count == 1){
                            res.send(`
                                <Response>
                                    <Message>
                                        It's Organic! 🤗 Compost it up! Give me your zipcode if you want to know your closest scrap drop off location.
                                    </Message> 
                                </Response>
                            `);
                        }
                    });
                }
              },
              function(err) {
                  console.error(err);
              }
            )
        }
    });

    app.listen(process.env.PORT || 5000);
