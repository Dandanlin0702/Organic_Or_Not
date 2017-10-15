const express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose"),
    NotOrganic    = require("./models/not_organic_do"),
    seedDB     = require("./seeds"),
    http = require('http'),
    MessagingResponse = require('twilio').twiml.MessagingResponse,
    twilio = require('twilio');

mongoose.connect("mongodb://hunter:hunter@ds121225.mlab.com:21225/organic-or-not_development");
//mongoose.connect("mongodb://localhost/organic-or-not_development");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

seedDB();

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({layoutsDir: './views/layouts', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

// Load up all of the controllers
//const controllers = require('./controllers');
//app.use(controllers);

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