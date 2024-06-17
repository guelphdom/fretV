var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codeSubSchema = new Schema({
   


   code: {type: String, required: true},
   mformat: {type: String, required: true},
   time: {type: String, required: true},
   


  

});

module.exports = mongoose.model('CodeSub', codeSubSchema);