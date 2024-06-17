const mongoose = require('mongoose');


var attendanceHostelSchema = new mongoose.Schema({


   

    floor:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:String, required:true},
    day:{type:String},
    month:{type:String, required:true},
    hostel:{type:String, required:true},
    head:{type:String, required:true},
    year:{type:Number, required:true},
    term:{type:Number, required:true},
    regCode:{type:String},
    type:{type:String},
    status:{type:String},
    regId:{type:String},
    aggDays:{type:Number},
    aggPresent:{type:Number},
    aggAbsent:{type:Number},


})

module.exports = mongoose.model('Attendance Hostel', attendanceHostelSchema);