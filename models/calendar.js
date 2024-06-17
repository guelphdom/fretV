const mongoose = require('mongoose');


var calendarSchema = new mongoose.Schema({


title:{type:String, required:true},
start:{type:String, required:true},
end:{type:String, required:true},
duration:{type:Number, required:true},
venue:{type:String, required:true},
slide:{type:Number, required:true},
style:{type:String, required:true},
style2:{type:String, required:true},
time:{type:String, required:true},
status:{type:String,required:true},
mformat:{type:String,required:true},
mformat2:{type:String,required:true},
dateValue:{type:Number, required:true},
userRole:{type:String, required:true},
companyId:{type:String},


})

module.exports = mongoose.model('Calendar', calendarSchema);