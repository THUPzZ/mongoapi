var config = require('../config/db');
var mongoose = require('mongoose');
mongoose.connect(config.db);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
//db.once('open', function(){});
db.on('error',function(err){
      console.log(err);
});
var dbName = 'printedForm'

exports.getPrintedForm = (req, res) => {
    db.collection(dbName).find().toArray(function (err, result) {
        if (err) throw err
        res.json(result).status(200)
    })
}

exports.postPrintedForm = (req, res) => {
    let value = req.body.value
    let type = req.body.type
      db.collection(dbName).insert([{"type":type,"value":value}], function(err, docs) {
        res.json(docs).status(200)
      })
}

  exports.delPrintedForm = (req, res) => {
    let value = req.body.value
    db.collection(dbName).deleteOne({ "value": value }, function(err, docs) {
		res.json("delete success")
	})
}