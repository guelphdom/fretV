const mongoose = require('mongoose');


var attendanceSchema = new mongoose.Schema({


   
    grade:{type:Number, required:true},
    class1:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:String, required:true},
    day:{type:String},
    month:{type:String, required:true},
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
    mformat:{type:String, required:true},
    status:{type:String, required:true},
    companyId:{type:String},
    regId:{type:String},


})

module.exports = mongoose.model('Attendance', attendanceSchema);