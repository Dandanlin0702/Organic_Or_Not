const express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose"),
    NotOrganic    = require("./models/not_organic_do"),
    seedDB     = require("./seeds");

// Get rid of deprecated promise warning
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://hunter:hunter@ds121225.mlab.com:21225/organic-or-not_development", {useMongoClient: true});
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



    app.listen((process.env.PORT || 5000), function(){
      console.log("The App Server Has Started!!!")
    });
