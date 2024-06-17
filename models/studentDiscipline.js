const mongoose = require('mongoose');


var disciplineStudentSchema = new mongoose.Schema({


name:{type:String, required:true},
mark:{type:Number, required:true},
level:{type:String, required:true},
class1:{type:String, required:true},
grade:{type:Number, required:true},
type:{type:String, required:true},
code:{type:String,required:true},
studentName:{type:String, required:true},
studentId:{type:String, required:true},
hostelHead:{type:String, required:true},
hostel:{type:String, required:true},
room:{type:String, required:true},
date:{type:String, required:true},
mformat:{type:String, required:true},
month:{type:String, required:true},
year:{type:Number, required:true},
comments:{type:String, required:true},
idX:{type:String, required:true},







})

module.exports = mongoose.model('Student Discipline', disciplineStudentSchema);