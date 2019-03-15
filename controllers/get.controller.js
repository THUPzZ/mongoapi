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

exports.tolist = (req, res) => {
    db.collection('tolist').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};

exports.type = (req, res) => {
    db.collection('type').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};

exports.unit = (req, res) => {
    db.collection('unit').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};

exports.approve_sec_user = (req, res) => {
    db.collection('approve_sec_user').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};

exports.approve_user = (req, res) => {
    db.collection('approve_user').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
/////////////////////////////////////////////////////////////////////
exports.medicalsupplies = (req, res) => {
    db.collection('medicalsupplies').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.nonMedicalSupplies = (req, res) => {
    db.collection('nonMedicalSupplies').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.Housework = (req, res) => {
    db.collection('houseWork').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
        //console.log(result)
    })
};
exports.OfficeMaterial = (req, res) => {
    db.collection('officeMaterial').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.ComputerMaterial = (req, res) => {
    db.collection('computerMaterial').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.DisinfectantWater = (req, res) => {
    db.collection('disinfectantWater').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.PrintedForm = (req, res) => {
    db.collection('printedForm').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};
exports.Saline = (req, res) => {
    db.collection('saline').find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
};

