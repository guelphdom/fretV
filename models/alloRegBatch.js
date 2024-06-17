var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alloRegBatchSchema = new Schema({
   


   code: {type: String, required: true},
   mformat: {type: String, required: true},
   start: {type: String, required: true},
   end: {type: String, required: true},
  dateValueOf: {type: Number, required: true},
   


  

});

module.exports = mongoose.model('AlloRegBatch', alloRegBatchSchema);