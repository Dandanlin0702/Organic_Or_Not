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
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('zipcode');
});

router.post('/zipcode', (req, res) => {
  const zip = req.body.zipcode;
  //const zip_parse = zip.toString();

  Locations.findOne({zip: req.body.zipcode }, (err, location) => {
    if(err){
      console.log(err);
    } else {
      console.log("Name: " + location.name + "\nAddress: " + location.address + "\nOpen: " + location.open);
    }
  });

//   Locations.findOne({"zip": 'zip_parse'} , (err, location) => {
//     if(err){
//       console.log(err);
//     } else {
//       console.log(location.address);
//     }
// })
});

router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});


module.exports = router;
