const express = require('express');
const mongoose = require("mongoose");
const Locations = require("../models/locations.js");

const router = express.Router();


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
  console.log(zip);
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
