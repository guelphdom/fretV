const mongoose = require('mongoose');


var vouchReportSchema = new mongoose.Schema({


hostel:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
term:{type:Number},
date:{type:String, required:true},
type:{type:String, required:true}
})

module.exports = mongoose.model('Vouch Report', vouchReportSchema);