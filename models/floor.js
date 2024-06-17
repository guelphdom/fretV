var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var floorSchema = new Schema({
   


   hostel: {type: String, required: true},
   rooms: {type: Number, required: true},
   floor: {type: String, required: true},
  
   


  

});

module.exports = mongoose.model('Floor', floorSchema);