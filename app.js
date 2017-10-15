const express  = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose"),
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



appClarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
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


app.listen((process.env.PORT || 5000), function(){
   console.log("The App Server Has Started!!!")
});
