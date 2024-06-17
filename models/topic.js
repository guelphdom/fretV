const mongoose = require('mongoose');


var topicSubSchema = new mongoose.Schema({


name:{type:String, required:true},
subjectCode:{type:String, required:true},
subjectName:{type:String, required:true},
year:{type:Number, required:true},
grade:{type:Number, required:true},
class1:{type:String, required:true},
teacherId:{type:String, required:true},






})

module.exports = mongoose.model('Topic', topicSubSchema);