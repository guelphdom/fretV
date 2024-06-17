var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteCodeSchema = new Schema({
   


   code: {type: String, required: true},
   mformat: {type: String, required: true},

   


  

});

module.exports = mongoose.model('QuoteCode', quoteCodeSchema);