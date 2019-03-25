var express = require('express');
var config = require('../config/db');
var mongoose = require('mongoose');
mongoose.connect(config.db);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open', function(){
   // console.log('connection to mongodb');
});
db.on('error',function(err){
      console.log(err);
});
exports.index = (req, res) => {
    res.send('hello world');
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









