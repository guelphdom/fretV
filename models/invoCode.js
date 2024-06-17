var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoCodeSchema = new Schema({
   


   code: {type: String, required: true},
   mformat: {type: String, required: true},
   to: {type: String, required: true},
  
   


  

});

module.exports = mongoose.model('InvoCode', invoCodeSchema);