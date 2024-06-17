const mongoose = require('mongoose');


var attendanceRegHostelSchema = new mongoose.Schema({


    uid:{type:String, required:true},
    fullname:{type:String, required:true},
    photo:{type:String, required:true},
    grade:{type:Number, required:true},
    room:{type:String, required:true},
    floor:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:String, required:true},
    day:{type:String},
    month:{type:String, required:true},
    mformat:{type:String, required:true},
    type:{type:String,required:true},
    year:{type:Number, required:true},
    term:{type:Number, required:true},
    hostel:{type:String, required:true},
    head:{type:String, required:true},
    status:{type:String, required:true},
    comments:{type:String, required:true},
    companyId:{type:String},
    regId:{type:String},
    regCode:{type:String},
    size:{type:Number},
    aggDays:{type:Number},
    aggPresent:{type:Number},
    aggAbsent:{type:Number},



})

module.exports = mongoose.model('Attendance Hostel Register', attendanceRegHostelSchema);