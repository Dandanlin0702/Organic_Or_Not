var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),  //body-parser
    mongoose   = require("mongoose");
    //models = require('./models')


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    mongoose.connect("mongodb://localhost/organic-or-not_development");

    const exphbs = require('express-handlebars');
    app.engine('handlebars', exphbs({
      layoutsDir: './views/layouts',
      defaultLayout: 'main',
    }));
    app.set('view engine', 'handlebars');
    app.set('views', `${__dirname}/views/`);

    // Load up all of the controllers
    const controllers = require('./controllers');
    app.use(controllers);



    app.listen((process.env.PORT || 5000), function(){
      console.log("The App Server Has Started!!!")
    });
