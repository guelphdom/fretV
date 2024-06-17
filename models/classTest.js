const mongoose = require('mongoose');


var testSchema = new mongoose.Schema({


    class1:{type:String, required:true},
    subjectCode:{type:String, required:true},
    subject:{type:String, required:true},
    question:{type:String, required:true},
    possibleMark:{type:Number,required:true},
    displayFormat:{type:String,required:true},
    icon:{type:String,required:true},
    grade:{type:Number, required:true},
    term:{type:Number, required:true},
    type:{type:String, required:true},
    type2:{type:String, required:true},
    type3:{type:String, required:true},
    topic:{type:String, required:true},
    date:{type:String, required:true},
    month:{type:String, required:true},
    filename:{type:String,required:true},
    fileId:{type:String,required:true},
    mformat:{type:String, required:true},
    numDate:{type:Number, required:true},
    dateValue:{type:Number, required:true},
    dateValue2:{type:Number, required:true},
    duration:{type:Number, required:true},
    year:{type:Number, required:true},
    quizId:{type:String, required:true},
    quizBatch:{type:Number, required:true},
    quizNo:{type:Number, required:true},
    highScore:{type:Number, required:true},
    lowestScore:{type:Number, required:true},
    numPasses:{type:Number, required:true},
    avgMark:{type:Number, required:true},
    numberOfStudents:{type:Number, required:true},
    teacherName:{type:String, required:true},
    teacherId:{type:String, required:true},
    time:{type:String, required:true},
    examLink:{type:String, required:true},
    examStatus:{type:String, required:true},
    timeLeft:{type:String, required:true},
    status:{type:String, required:true},
    status2:{type:String, required:true},
    status3:{type:String, required:true},
companyId:{type:String},



})

module.exports = mongoose.model('Test', testSchema);