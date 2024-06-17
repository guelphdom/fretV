const mongoose = require('mongoose');


var attendanceRegSchema = new mongoose.Schema({


    uid:{type:String, required:true},
    fullname:{type:String, required:true},
    photo:{type:String, required:true},
    grade:{type:Number, required:true},
    class1:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:String, required:true},
    day:{type:String},
    month:{type:String, required:true},
    mformat:{type:String, required:true},
    color:{type:String, required:true},
    style:{type:String, required:true},
    icon:{type:String,required:true},
    type:{type:String,required:true},
    year:{type:Number, required:true},
    term:{type:Number, required:true},
    teacher:{type:String, required:true},
    teacherId:{type:String, required:true},
    subject:{type:String, required:true},
    subjectCode:{type:String, required:true},
    status:{type:String, required:true},
    comments:{type:String, required:true},
    companyId:{type:String},
    regId:{type:String},
    size:{type:Number},


})

module.exports = mongoose.model('Attendance Register', attendanceRegSchema);