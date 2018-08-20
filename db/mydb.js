var mongoose = require('mongoose');

//Connect to mongoDB server
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
    console.log('Connected to mongod server!')

});

mongoose.connect('mongodb://localhost/whod_db');

//Define MODEL
var Diary = require('../models/user');

module.exports = Diary;