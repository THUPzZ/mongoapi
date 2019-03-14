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

exports.insertMedicalsupplies = (req, res) => {
    var value = req.params.value;
    db.collection('medicalsupplies').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertnonMedicalSupplies = (req, res) => {
    var value = req.params.value;
    db.collection('nonMedicalSupplies').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertHousework = (req, res) => {
    var value = req.params.value;
    db.collection('houseWork').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertOfficeMaterial = (req, res) => {
    var value = req.params.value;
    db.collection('officeMaterial').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}
exports.insertComputerMaterial = (req, res) => {
    var value = req.params.value;
    db.collection('computerMaterial').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertDisinfectantWater = (req, res) => {
    var value = req.params.value;
    db.collection('disinfectantWater').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertPrintedForm = (req, res) => {
    var value = req.params.value;
    db.collection('printedForm').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}

exports.insertSaline = (req, res) => {
    var value = req.params.value;
    db.collection('saline').insert([{"value":value}], function(err, docs) {
		res.send('Add new ' + docs.name + ' Completed!');
	})
}