const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var nameSchema = new Schema({
 Name: String,
 task: String,
 created_date : {
   type:Date,
   default: Date.now
 }

});

module.exports = nameSchema;
