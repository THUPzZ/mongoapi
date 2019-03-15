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
exports.index = (req, res) => {
    res.send('Web Application Programing Interface');
};

exports.medicalsupplies = (req, res) => {
    let value = req.body.value
    db.collection('medicalsupplies').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.nonMedicalSupplies = (req, res) => {
    let value = req.body.value
    db.collection('nonMedicalSupplies').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.Housework = (req, res) => {
    let value = req.body.value
    db.collection('Housework').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.OfficeMaterial = (req, res) => {
    let value = req.body.value
    db.collection('OfficeMaterial').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.ComputerMaterial = (req, res) => {
    let value = req.body.value
    db.collection('ComputerMaterial').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.DisinfectantWater = (req, res) => {
    let value = req.body.value
    db.collection('DisinfectantWater').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.PrintedForm = (req, res) => {
    let value = req.body.value
    db.collection('PrintedForm').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};
exports.Saline = (req, res) => {
    let value = req.body.value
    db.collection('Saline').deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
};

