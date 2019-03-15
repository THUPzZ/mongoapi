var express = require('express');
var config = require('../config/db');
var mongoose = require('mongoose');
mongoose.connect(config.db);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open', function(){
    console.log('connection to mongodb');
});
db.on('error',function(err){
      console.log(err);
});

exports.medicalsupplies = (req, res) => {
  let value = req.body.value
  let type = req.body.type
  db.collection('medicalsupplies').insert([{"type":type,"value":value}], function(err, docs) {
		res.json(docs).status(200)
	})
}

exports.nonMedicalSupplies = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('nonMedicalSupplies').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}

exports.Housework = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('houseWork').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}

exports.OfficeMaterial = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('officeMaterial').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}
exports.ComputerMaterial = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('computerMaterial').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}

exports.DisinfectantWater = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('disinfectantWater').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}

exports.PrintedForm = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('printedForm').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}

exports.Saline = (req, res) => {
  let value = req.body.value
  let type = req.body.type
    db.collection('saline').insert([{"type":type,"value":value}], function(err, docs) {
      res.json(docs).status(200)
	})
}