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





