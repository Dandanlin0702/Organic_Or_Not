const express = require('express');
const mongoose = require("mongoose");
const Locations = require("../models/locations.js");

const router = express.Router();

router.get('/info', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('info');
});

router.get('/', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('index');
});

router.get('/zipcode', (req, res) => {
  res.render('zipcode');
});

router.post('/zipcode', (req, res) => {
  const zip = req.body.zipcode;
  var message = "Scrap Dropoffs Near You!\n\n";
  Locations.find({zip: zip}, (err, location) => {
    if(err){
      console.log(err);
    } else {
      for(var i = 0; i < location.length; i++){
        message = message + "Name: " + location[i].name + "\nAddress: " + location[i].address + "\nOpen: " + location[i].open + "\n\n";
      }
    }

  });
});


router.post('/', (req, res) => {
res.json({msg: "Successful POST to '/' route"});
});

router.put('/:id', (req, res) => {
res.json({msg: "Successful PUT to '/' route", id: req.params.id});
});

router.delete('/:id', (req, res) => {
res.json({msg: "Successful DELETE to '/' route", id: req.params.id});
});

module.exports = router;
