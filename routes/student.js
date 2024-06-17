require('dotenv').config();

var express = require('express');
var router = express.Router();
const User =require('../models/user')
const Class1 =require('../models/class');
const Subject =require('../models/subject');
const Fees =require('../models/fees');
const Assignment =require('../models/assignment')
const Grade =require('../models/grade');
const StudentDB =require('../models/studentDB');
var Message = require('../models/message');
var Recepient = require('../models/recepients');
const Test =require('../models/classTest');
const Calendar =require('../models/calendar');
const Lesson =require('../models/lesson');
const Poll = require('../models/poll');
const Report = require('../models/reports');
const { Paynow } = require("paynow");
var Note = require('../models/note');
const Exam =require('../models/exam');
const Question =require('../models/question');
const TestX =require('../models/classTestX');
const StudentExamRate =require('../models/stdPassRate');
const SubRate =require('../models/subPassRate');
const SubRateX =require('../models/subPassRateX');
const StudentClassRate =require('../models/stdPassRateX');
const Expenses = require('../models/expenses')
const FeesUpdate =require('../models/feesUpdate');
const StudentSub =require('../models/studentSubject');
const Learn = require('../models/learn')
//const stripe = require('stripe')('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');
const stripe = require('stripe')(' sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol');
const keys = require('../config1/keys')
var mongoose = require('mongoose')
var mongodb = require('mongodb');
var passport = require('passport')
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
var moment = require('moment')
/*
var bcrypt = require('bcrypt-nodejs');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})



var upload = multer({
    storage:storage
})
*/


const crypto = require('crypto');

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');



//upload asignment
var uploadModel = require('../models/upload');
const Voucher = require('../models/voucher');

var router = express.Router();

var imageData= uploadModel.find({})


var StorageX = multer.diskStorage({
  destination:'./public/uploads/',
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

var uploadX = multer({
  storageX:StorageX
}).single('file');
//student Dashboard



const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/euritDB';

const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create mongo connection
/*
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});*/


/* Create storage engine*/
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = file.originalname;
  
        const fileInfo = {
          filename: filename,
     
          bucketName: 'uploads'
        };
        resolve(fileInfo);
    });
  }
});

const upload = multer({ storage })

// change password
router.get('/pass',isLoggedIn,student, (req, res) => {
  var pro = req.user
    User.findById(req.user._id, (err, doc) => {
        if (!err) {
            res.render("students/change", {
               
                user: doc, pro:pro
              
            });
        }
    });
  });
  
  
  
  router.post('/pass',isLoggedIn,student, function(req,res){
    var user = new User();
    var pro = req.user
    req.check('password','Enter New Password').notEmpty();
  
    req.check('confirmPassword', 'Confirm Password').notEmpty();
  
  
  req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
  var errors = req.validationErrors();
  
  
  
  
   if (errors) {
  
   
  
      req.session.errors = errors;
      req.session.success = false;
      res.render('students/change',{ title: 'User Update', user:req.body, errors:req.session.errors, pro:pro
     })
  
    
    
  
  
  }
  else if (req.body.password === req.body.confirmPassword && !req.validationErrors()){
    user.password=req.body.password=encryptPassword(req.body.password)
  
  
  
  
  
  User.findOneAndUpdate({_id:req.body._id},req.body,
   { new: true }, (err, doc) => {
      if (!err) {
      
        req.session.message = {
          type:'success',
          message:'Password Change Successful'
        }  
        res.render('students/change',{message:req.session.message, user:req.user, pro:pro
         }); }
      else {
        console.log('error'+err)
  
      }
    
  })
  }
  
  
  
  })
  
  

  router.get('/card',isLoggedIn,student,function(req,res){
    var id = req.user._id
var term =  req.user.term
var m = moment()
var year = m.format('YYYY')

var uid = req.user.uid
var id = req.user._id
console.log('zzz')

StudentDB.find({year:year,term:term,uid:uid},function(err,docs){

  if(docs.length == 0){
    var student =StudentDB();
    student.avgMark = 0;
    student.subjects = 0
    student.pendingAssignments = 0
    student.pendingQuiz = 0
    student.term = term
    student.year = year
    student.studentId = id
    student.uid = uid
 

    student.save()
.then(pas =>{
StudentSub.find({studentId:uid},function(err,nocs){
  let subjects = nocs.length
  console.log(subjects,'card')
  let pendingAssignments 
  let pendingAssignments2
  let pendingQuiz
  TestX.find({uid:uid,type2:'online assignment',submissionStatus:'pending',status3:"null",term:term,year:year},function(err,locs){
pendingAssignments2 = locs.length
console.log(pendingAssignments2,'pending1')
Test.find({type2:'online assignment attached',term:term,year:year,status3:"null"},function(err,kocs){
  pendingAssignments = locs.length + kocs.length
Test.find({type2:'online quiz',term:term,year:year,status2:"active"},function(err,tocs){
  pendingQuiz = tocs.length


  StudentDB.findByIdAndUpdate(pas._id,{$set:{subjects:subjects,pendingAssignments:pendingAssignments2,pendingQuiz:pendingQuiz}},function(err,kocs){

  })
})
  })
 
})
})
})
  }else{
    let idn = docs[0]._id

    StudentSub.find({studentId:uid},function(err,nocs){
      let subjects = nocs.length
      console.log(subjects,'card')
      let pendingAssignments 
      let pendingAssignments2
      let pendingQuiz
      TestX.find({uid:uid,type2:'online assignment',submissionStatus:'pending',status3:"null",term:term,year:year},function(err,locs){
    pendingAssignments2 = locs.length
    console.log(pendingAssignments2,'pending2')
    Test.find({type2:'online assignment attached',term:term,year:year,status3:"null"},function(err,kocs){
      pendingAssignments = locs.length + kocs.length
      console.log(kocs,"kocs")
    Test.find({type2:'online quiz',status2:"active",term:term,year:year},function(err,tocs){
      pendingQuiz = tocs.length
    
    
      StudentDB.findByIdAndUpdate(idn,{$set:{subjects:subjects,pendingAssignments:pendingAssignments2,pendingQuiz:pendingQuiz}},function(err,kocs){
    
      })
    })
      })
    })
    })
   // res.redirect('/records/avgMarkUpdate')
  }
res.redirect('/student/avgMarkUpdate')
})

  })





  router.get('/avgMarkUpdate',isLoggedIn,student,function(req,res){
    
    var term = req.user.term
    var uid = req.user.uid       
                       
                       
    var m = moment()
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
  
    
  
  
  
    TestX.find({year:year,term:term,uid:uid},function(err,docs) {
      for(var i = 0;i<docs.length;i++){
        size = docs.length
     
          
         if(arr.length > 0 && arr.find(value => value.term == docs[i].term)){
                console.log('true')
               arr.find(value => value.term == docs[i].term).percentage += docs[i].percentage;
               arr.find(value => value.term == docs[i].term).size++;
              }else{
      arr.push(docs[i])

      let resultX = arr.map(function(element){
        element.size = 0
        element.size = element.size + 1
          })
              }
      
          
          }
          let result = arr.map(function(element){
            element.percentage = element.percentage / size
            console.log(element.mark,'mark')
            let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
            let mark = element.percentage
            StudentDB.find({year:year,term:term,uid:uid},function(err,docs){
              if(docs){
                let id = docs[0]._id
                
                StudentDB.findByIdAndUpdate(id,{$set:{avgMark:mark}},function(err,gocs){

                })
              }
            })
          })
      //console.log(arr,'arr')
    // res.send(arr)
   res.redirect('/student/passRate')
    })
  
  })
router.get('/passRate',isLoggedIn,student,function(req,res){
  let totalexams, examsPassed, passRate;
  let numberOfMarks, totalMarks, avgMark;
  var m = moment()
  var year = m.format('YYYY')
  var term = req.user.term
  var uid = req.user.uid
  var fullname = req.user.fullname;

  var studentId = req.user.uid
  var clas6 = req.user.class1
   var m = moment()
   var year = m.format('YYYY')
   var marks, marks2
   var arr1=[]
   var number1
console.log(studentId, 'studentId')
    
   StudentExamRate.find({year:year,term:term, studentId:studentId, class1:clas6},function(err,docs){
 
     if(docs.length == 0){
 
       TestX.find({term:term,year:year,uid:studentId, type:'Final Exam' },function(err,hods){
 
         TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Final Exam'},function(err,lods){
       /*  if(hods.length >=1){*/
 
 
          totalexams = hods.length;
          examsPassed = lods.length
          let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
          numberOfMarks = hods.length;
          console.log('numberOfMarks',numberOfMarks)

          for(var q = 0;q<hods.length; q++){
  
            arr1.push(hods[q].percentage)
              }
              //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
               totalMarks=0;
              for(var z in arr1) { totalMarks += arr1[z]; }
 
              let  avgMarkX = totalMarks / numberOfMarks
                   
                avgMark = Math.round(avgMarkX)
                avgMark.toFixed(2)
             
             var pass =StudentExamRate();
             pass.firstTerm = 0;
             pass.firstAvgMark = 0
             pass.secondTerm= 0;
             pass.secondAvgMark = 0
             pass.thirdTerm = 0
             pass.thirdAvgMark=0;
             pass.studentId = studentId;
             pass.class1 = clas6
             pass.term = term
             pass.type = 'Final Exam';
             pass.year = year
             
 
             pass.save()
     .then(pas =>{
       id3 = pas._id;
 
       if(term == 1){
 
   
         StudentExamRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
      
         
         })
       }else if(term == 2){
       
         StudentExamRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
       
             
             })
           }else{
             StudentExamRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
             
                 
                 })
              }
 
               })
              /* }*/
               
               })
               
             })
           }
           else
 
         var  idX  = docs[0]._id
 
         TestX.find({term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6},function(err,shods){
 
          TestX.find({term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6},function(err,slods){
        /*  if(shods.length >=1){*/
console.log(shods)
console.log(slods)
  
           totalexams = shods.length;
           examsPassed = slods.length
           let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
           numberOfMarks = shods.length;
 
           for(var q = 0;q<shods.length; q++){
   
             arr1.push(shods[q].percentage)
               }
               //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                totalMarks=0;
               for(var z in arr1) { totalMarks += arr1[z]; }
  
               let  avgMarkX = totalMarks / numberOfMarks
                   
               avgMark = Math.round(avgMarkX)
               avgMark.toFixed(2)
 console.log(totalMarks, numberOfMarks, examsPassed, passRate, avgMark, idX)
              if(term == 1){
 
   
               StudentExamRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
            
               
               })
             }else if(term == 2){
             
               StudentExamRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
             
                   
                   })
                 }else{
                   StudentExamRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                   
                       
                       })
                     }
   
            /* }*/
     
    
           })
           
        
         })    
         res.redirect('/student/passRateX')
       
 
         })
   
    
        
        
      
  
         
         
 
   })

  

   
router.get('/passRateX',isLoggedIn,student,function(req,res){
  let totalexams, examsPassed, passRate;
  let numberOfMarks, totalMarks, avgMark;
  var m = moment()
  var year = m.format('YYYY')
  var term = req.user.term
  var uid = req.user.uid
  var fullname = req.user.fullname;
  var studentId = req.user.uid
  var clas6 = req.user.class1
  console.log(clas6,"class++")
 
   var marks, marks2
   var arr1=[]
   var number1
  





    
   StudentClassRate.find({year:year,term:term, studentId:studentId, class1:clas6, type:"Class Test"},function(err,docs){
 //console.log(docs,'buda')
     if(docs.length == 0){
  
 
       TestX.find({term:term,year:year,uid:studentId, type:'Class Test', class1:clas6},function(err,hods){
 
         TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Class Test'},function(err,lods){
       /*  if(hods.length >=1){*/
 
 
          totalexams = hods.length;
          examsPassed = lods.length
          let pRate = examsPassed / totalexams * 100
          passRate = Math.round(pRate)
          passRate.toFixed(2)
          numberOfMarks = hods.length;
          console.log('numberOfMarks',numberOfMarks)

          for(var q = 0;q<hods.length; q++){
  
            arr1.push(hods[q].percentage)
              }
              
               totalMarks=0;
              for(var z in arr1) { totalMarks += arr1[z]; }
 
              let  avgMarkX = totalMarks / numberOfMarks
                   
              avgMark = Math.round(avgMarkX)
              avgMark.toFixed(2)
             
             var pass =StudentClassRate();
             pass.firstTerm = 0;
             pass.firstAvgMark = 0
             pass.secondTerm= 0;
             pass.secondAvgMark = 0
             pass.thirdTerm = 0
             pass.thirdAvgMark=0;
             pass.studentId = studentId;
             pass.class1 = clas6
             pass.term = term
             pass.type = 'Class Test';
             pass.year = year
     
 
             pass.save()
     .then(pas =>{
       id3 = pas._id;
 
       if(term == 1){
 
   
        StudentClassRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
      
         
         })
       }else if(term == 2){
       
        StudentClassRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
       
             
             })
           }else{
            StudentClassRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
             
                 
                 })
               }
 
               })
              /* }*/
               
               })
               
             })
           }
           else
 
         var  idX  = docs[0]._id
 
         TestX.find({term:term,year:year,uid:studentId, type:"Class Test",class1:clas6, },function(err,hods){
 
          TestX.find({term:term,year:year, result:'pass',uid:studentId, type:"Class Test",class1:clas6},function(err,lods){
         /* if(hods.length >=1){*/
  
  
           totalexams = hods.length;
           examsPassed = lods.length
           let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
           numberOfMarks = hods.length;
 
           for(var q = 0;q<hods.length; q++){
   
             arr1.push(hods[q].percentage)
               }
               //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                totalMarks=0;
               for(var z in arr1) { totalMarks += arr1[z]; }
  
               let  avgMarkX = totalMarks / numberOfMarks
                   
               avgMark = Math.round(avgMarkX)
               avgMark.toFixed(2)
 
              if(term == 1){
 
   
                StudentClassRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
            
               
               })
             }else if(term == 2){
             
              StudentClassRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
             
                   
                   })
                 }else{
                   StudentClassRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                   
                       
                       })
                     }
   
         /*    }*/
     
    
           })
           
        
         })    
       
         res.redirect('/student/passRateY')
 
         })
   
    
        
        
     
  
         
         
 
   })

  



   router.get('/passRateY',isLoggedIn,student,function(req,res){
    let totalexams, examsPassed, passRate;
    let numberOfMarks, totalMarks, avgMark;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    var uid = req.user.uid
    var fullname = req.user.fullname;
    var studentId = req.user.uid
    var clas6 = req.user.class1
     var m = moment()
     var year = m.format('YYYY')
     var marks, marks2
     var arr1=[]
     var number1

  console.log(studentId, 'studentId')
      
     StudentExamRate.find({year:year, studentId:studentId, class1:clas6},function(err,docs){
   
       if(docs.length == 0){
   
         TestX.find({term:term,year:year,uid:studentId, type:'Final Exam' },function(err,hods){
   
           TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Final Exam'},function(err,lods){
         /*  if(hods.length >=1){*/
   
   
            totalexams = hods.length;
            examsPassed = lods.length
            let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
            numberOfMarks = hods.length;
            console.log('numberOfMarks',numberOfMarks)
  
            for(var q = 0;q<hods.length; q++){
    
              arr1.push(hods[q].prcentage)
                }
                //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                 totalMarks=0;
                for(var z in arr1) { totalMarks += arr1[z]; }
   
                let  avgMarkX = totalMarks / numberOfMarks
                   
                avgMark = Math.round(avgMarkX)
                avgMark.toFixed(2)
               
               var pass =StudentExamRate();
               pass.firstTerm = 0;
               pass.firstAvgMark = 0
               pass.secondTerm= 0;
               pass.secondAvgMark = 0
               pass.thirdTerm = 0
               pass.thirdAvgMark=0;
               pass.studentId = studentId;
               pass.class1 = clas6
               pass.term = term
               pass.type = 'Final Exam';
               pass.year = year
               pass.companyId = companyId
   
               pass.save()
       .then(pas =>{
         id3 = pas._id;
   
         if(term == 1){
   
     
           StudentExamRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
        
           
           })
         }else if(term == 2){
         
           StudentExamRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
         
               
               })
             }else{
               StudentExamRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
               
                   
                   })
                }
   
                 })
                /* }*/
                 
                 })
                 
               })
             }
             else
   
           var  idX  = docs[0]._id
   
           TestX.find({term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6},function(err,shods){
   
            TestX.find({term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6},function(err,slods){
          /*  if(shods.length >=1){*/

    
             totalexams = shods.length;
             examsPassed = slods.length
             let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
             numberOfMarks = shods.length;
   
             for(var q = 0;q<shods.length; q++){
     
               arr1.push(shods[q].percentage)
                 }
                 //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                  totalMarks=0;
                 for(var z in arr1) { totalMarks += arr1[z]; }
                 let  avgMarkX = totalMarks / numberOfMarks
                   
                 avgMark = Math.round(avgMarkX)
                 avgMark.toFixed(2)
   console.log(totalMarks, numberOfMarks, examsPassed, passRate, avgMark, idX)
                if(term == 1){
   
     
                 StudentExamRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
              
                 
                 })
               }else if(term == 2){
               
                 StudentExamRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
               
                     
                     })
                   }else{
                     StudentExamRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                     
                         
                         })
                       }
     
              /* }*/
       
      
             })
             
          
           })    
           res.redirect('/student/passRateYY')
         
   
           })
     
      
          
          
        
    
           
           
   
     })
  
    
  
     
  router.get('/passRateYY',isLoggedIn,student,function(req,res){
    let totalexams, examsPassed, passRate;
    let numberOfMarks, totalMarks, avgMark;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    var uid = req.user.uid
    var fullname = req.user.fullname;
    var studentId = req.user.uid
    var clas6 = req.user.class1
     var m = moment()
     var year = m.format('YYYY')
     var marks, marks2
     var arr1=[]
     var number1
     
  
  
  
  
  
      
     StudentClassRate.find({year:year, studentId:studentId, class1:clas6},function(err,docs){
   
       if(docs.length == 0){
   
         TestX.find({term:term,year:year,uid:studentId, type:'Class Test', class1:clas6},function(err,hods){
   
           TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Class Test'},function(err,lods){
         /*  if(hods.length >=1){*/
   
   
            totalexams = hods.length;
            examsPassed = lods.length
            let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
            numberOfMarks = hods.length;
            console.log('numberOfMarks',numberOfMarks)
  
            for(var q = 0;q<hods.length; q++){
    
              arr1.push(hods[q].percentage)
                }
                //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                 totalMarks=0;
                for(var z in arr1) { totalMarks += arr1[z]; }
   
                avgMark = totalMarks / numberOfMarks
               
               var pass =StudentClassRate();
               pass.firstTerm = 0;
               pass.firstAvgMark = 0
               pass.secondTerm= 0;
               pass.secondAvgMark = 0
               pass.thirdTerm = 0
               pass.thirdAvgMark=0;
               pass.studentId = studentId;
               pass.class1 = clas6
               pass.term = term
               pass.type = 'Class Test';
               pass.year = year
               
   
               pass.save()
       .then(pas =>{
         id3 = pas._id;
   
         if(term == 1){
   
     
          StudentClassRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
        
           
           })
         }else if(term == 2){
         
          StudentClassRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
         
               
               })
             }else{
              StudentClassRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
               
                   
                   })
                 }
   
                 })
                /* }*/
                 
                 })
                 
               })
             }
             else
   
           var  idX  = docs[0]._id
   
           TestX.find({term:term,year:year,uid:studentId, type:"Class Test",class1:clas6, },function(err,hods){
   
            TestX.find({term:term,year:year, result:'pass',uid:studentId, type:"Class Test",class1:clas6},function(err,lods){
           /* if(hods.length >=1){*/
    
    
             totalexams = hods.length;
             examsPassed = lods.length
             let pRate = examsPassed / totalexams * 100
             passRate = Math.round(pRate)
             passRate.toFixed(2)
             numberOfMarks = hods.length;
   
             for(var q = 0;q<hods.length; q++){
     
               arr1.push(hods[q].percentage)
                 }
                 //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                  totalMarks=0;
                 for(var z in arr1) { totalMarks += arr1[z]; }
    
                 let  avgMarkX = totalMarks / numberOfMarks
                   
                 avgMark = Math.round(avgMarkX)
                 avgMark.toFixed(2)
   
                if(term == 1){
   
     
                  StudentClassRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
              
                 
                 })
               }else if(term == 2){
               
                StudentClassRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
               
                     
                     })
                   }else{
                     StudentClassRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                     
                         
                         })
                       }
     
           /*    }*/
       
      
             })
             
          
           })    
         
           res.redirect('/student//subRate')
   
           })
     
           
   
     })
  



   /*  router.get('/feesCheck',isLoggedIn,function(req,res){
      
      if(req.user.pollUrl === "null"){
        res.redirect('/student/dash')


      }else{

      var pollUrl = req.user.pollUrl;
    
       // Create instance of Paynow class
       let paynow = new Paynow("14628", "0b05a9bd-6779-4a6f-9da7-48e03cb96a67");
      
        paynow.pollTransaction(pollUrl).then(transaction => {
          if(transaction.status === 'paid') {
            // User showed us the doe
            var amount = transaction.amount;
            User.find({uid:uid},function(err,docs){
       
              balance = docs[0].balance;
              newBalance = balance + amount;
    
              if(balance >= 0){
      
                User.findByIdAndUpdate(docs[0]._id,{$set:{balance:newBalance, status:"paid", term:term, year:year,balanceCarriedOver:balance,paymentId:paymentId,pollUrl:"null"}},function(err,docs){
              
              
                
              
                })
            
              }else
              
              User.findByIdAndUpdate(docs[0]._id,{$set:{balance:newBalance, status:"owing", term:term, year:year,balanceCarriedOver:balance,paymentId:paymentId}},function(err,docs){
              
              
                
              
              })
              res.redirect('/student/dash')
            })
          }
      
          })
        }
       
    })*/




    router.get('/feesCheck',isLoggedIn,student,function(req,res){
      var uid = req.user.uid
      var fullname = req.user.fullname
      var class1 = req.user.class1
      var term = req.user.term

      var method = 'paynow'
      var paymentId = req.user.pollUrl
      var xId = req.user._id
      var m = moment()
      var date = moment().toString()
      var year = m.format('YYYY')
      var month = m.format('MMMM')
      if(req.user.pollUrl === "null"){
        res.redirect('/student/dash')


      }else{
        var pollUrl = req.user.pollUrl;
         var amount = req.user.paynow  
     
    
       // Create instance of Paynow class
       let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      
        paynow.pollTransaction(pollUrl).then(transaction => {
          if(transaction.status === 'paid') {
            // User showed us the doe
           
           
            var fees = new Fees();
      
            fees.date = date;
            fees.uid = uid;
            fees.class1 = class1;
            fees.fullname = fullname;
            fees.amount= amount;
            fees.term = term;
            fees.year = year;
            fees.month = month;
            fees.method = method;
            fees.paymentId = paymentId
            fees.receiptNumber = 'paynow';
            fees.companyId = companyId
          
          
          
            fees.save()
              .then(fee =>{
               
      
                 User.findByIdAndUpdate(xId,{$set:{studentId:uid,amount:amount,receiptNumber:'paynow'}},function(err,gocs){
      
      
      
      
                  balance = req.user.balance;
                  newBalance = balance + fee.amount;
                  console.log('new',newBalance)
      
                  if(newBalance >= 0){
          
                    User.findByIdAndUpdate(xId,{$set:{balance:newBalance, status:"paid", term:term, year:year,balanceCarriedOver:balance,paynow:0,pollUrl:'null'}},function(err,docs){
                  
              
                    
                  
                    })
                
                  }else
                  
                  User.findByIdAndUpdate(xId,{$set:{balance:newBalance, status:"owing", term:term, year:year,balanceCarriedOver:balance,paynow:0,pollUrl:'null'}},function(err,docs){
                  
                  
                    
                  

                  })
                  })
                  
                })
      
                
      
                 }
             
     // res.redirect('/student/dash')
     res.redirect('/student/eventUpdateX')
                })
      
        }
       
    })



  

    router.get('/subRate',isLoggedIn,student,function(req,res){
      let totalexams, examsPassed, passRate;
      let numberOfMarks, totalMarks, avgMark;
      var m = moment()
      var year = m.format('YYYY')
      var term = req.user.term
      var uid = req.user.uid
      var fullname = req.user.fullname;
   
      var studentId = req.user.uid
      var clas6 = req.user.class1
       var m = moment()
       var year = m.format('YYYY')
       var marks, marks2
       var arr1=[]
       var number1
    console.log(studentId, 'studentId')
        
    StudentSub.find({studentId:uid},function(err,atc){

      for(var j = 0; j<atc.length; j++){
        let subjectCode = atc[j].subjectCode
        let subjectName = atc[j].subjectName
        let icon = atc[j].icon
 
     console.log(subjectCode,'subjectCode')
       SubRate.find({year:year,term:term, studentId:studentId, class1:clas6,subjectCode:subjectCode},function(err,docs){
     
         if(docs.length == 0){
     
           TestX.find({term:term,year:year,uid:studentId, type:'Class Test',subjectCode:subjectCode },function(err,hods){
     
             TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Class Test',subjectCode:subjectCode},function(err,lods){
           /*  if(hods.length >=1){*/
     
     
              totalexams = hods.length;
              examsPassed = lods.length
              let pRate = examsPassed / totalexams * 100
              passRate = Math.round(pRate)
              passRate.toFixed(2)
              numberOfMarks = hods.length;
              console.log('numberOfMarks',numberOfMarks)
    
              for(var q = 0;q<hods.length; q++){
      
                arr1.push(hods[q].percentage)
                  }
                  //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                   totalMarks=0;
                  for(var z in arr1) { totalMarks += arr1[z]; }
     
                  let  avgMarkX = totalMarks / numberOfMarks
                   
                  avgMark = Math.round(avgMarkX)
                  avgMark.toFixed(2)
                 
                 var pass =SubRate();
                 pass.firstTerm = 0;
                 pass.firstAvgMark = 0
                 pass.secondTerm= 0;
                 pass.secondAvgMark = 0
                 pass.thirdTerm = 0
                 pass.thirdAvgMark=0;
                 pass.studentId = studentId;
                 pass.class1 = clas6
                 pass.icon = icon
                 pass.subject = subjectName
                 pass.subjectCode = subjectCode
                 pass.term = term
                 pass.type = 'Class Test';
                 pass.year = year
          
     
                 pass.save()
         .then(pas =>{
           id3 = pas._id;
     
           if(term == 1){
     
       
            SubRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
          
             
             })
           }else if(term == 2){
           
            SubRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
           
                 
                 })
               }else{
                SubRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
                 
                     
                     })
                  }
     
                   })
                  /* }*/
                   
                   })
                   
                 })
               }
               else
     
             var  idX  = docs[0]._id
     
             TestX.find({term:term,year:year,uid:studentId, type:"Class Test",class1:clas6,subjectCode:subjectCode},function(err,shods){
     
              TestX.find({term:term,year:year, result:'pass',uid:studentId,type:"Class Test",class1:clas6,subjectCode:subjectCode},function(err,slods){
            /*  if(shods.length >=1){*/

      
               totalexams = shods.length;
               examsPassed = slods.length
               let pRate = examsPassed / totalexams * 100
               passRate = Math.round(pRate)
               passRate.toFixed(2)
               numberOfMarks = shods.length;
     
               for(var q = 0;q<shods.length; q++){
       
                 arr1.push(shods[q].percentage)
                   }
                   //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                    totalMarks=0;
                   for(var z in arr1) { totalMarks += arr1[z]; }
      
                   let  avgMarkX = totalMarks / numberOfMarks
                   
                   avgMark = Math.round(avgMarkX)
                   avgMark.toFixed(2)
     console.log(totalMarks, numberOfMarks, examsPassed, passRate, avgMark, idX)
                  if(term == 1){
     
       
                    SubRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
                
                   
                   })
                 }else if(term == 2){
                 
                  SubRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
                 
                       
                       })
                     }else{
                      SubRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                       
                           
                           })
                         }
       
                /* }*/
         
        
               })
               
            
             })   
              
    
           
     
             })
       
        
            
            
          
            }
            res.redirect('/student/subRateX')
          })
             
             
     
       })
    




       router.get('/subRateX',isLoggedIn,student,function(req,res){
        let totalexams, examsPassed, passRate;
        let numberOfMarks, totalMarks, avgMark;
        var m = moment()
        var year = m.format('YYYY')
        var term = req.user.term
        var uid = req.user.uid
        var fullname = req.user.fullname;
  
        var studentId = req.user.uid
        var clas6 = req.user.class1
         var m = moment()
         var year = m.format('YYYY')
         var marks, marks2
         var arr1=[]
         var number1
      console.log(studentId, 'studentId')
          
      StudentSub.find({studentId:uid},function(err,atc){
  
        for(var j = 0; j<atc.length; j++){
          let subjectCode = atc[j].subjectCode
          let subjectName = atc[j].subjectName
          let icon = atc[j].icon
   
       console.log(subjectCode,'subjectCode')
         SubRateX.find({year:year,term:term, studentId:studentId, class1:clas6,subjectCode:subjectCode},function(err,docs){
       
           if(docs.length == 0){
       
             TestX.find({term:term,year:year,uid:studentId, type:'Final Exam',subjectCode:subjectCode },function(err,hods){
       
               TestX.find({term:term,year:year,uid:studentId, result:'pass', type:'Final Exam',subjectCode:subjectCode},function(err,lods){
             /*  if(hods.length >=1){*/
       
       
                totalexams = hods.length;
                examsPassed = lods.length
                let pRate = examsPassed / totalexams * 100
            passRate = Math.round(pRate)
            passRate.toFixed(2)
                numberOfMarks = hods.length;
                console.log('numberOfMarks',numberOfMarks)
      
                for(var q = 0;q<hods.length; q++){
        
                  arr1.push(hods[q].percentage)
                    }
                    //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                     totalMarks=0;
                    for(var z in arr1) { totalMarks += arr1[z]; }
       
                    let  avgMarkX = totalMarks / numberOfMarks
                   
                    avgMark = Math.round(avgMarkX)
                    avgMark.toFixed(2)
                   
                   var pass =SubRateX();
                   pass.firstTerm = 0;
                   pass.firstAvgMark = 0
                   pass.secondTerm= 0;
                   pass.secondAvgMark = 0
                   pass.thirdTerm = 0
                   pass.thirdAvgMark=0;
                   pass.studentId = studentId;
                   pass.class1 = clas6
                   pass.icon = icon
                   pass.subject = subjectName
                   pass.subjectCode = subjectCode
                   pass.term = term
                   pass.type = 'Final Exam';
                   pass.year = year
               
       
                   pass.save()
           .then(pas =>{
             id3 = pas._id;
       
             if(term == 1){
       
         
              SubRateX.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
            
               
               })
             }else if(term == 2){
             
              SubRateX.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
             
                   
                   })
                 }else{
                  SubRateX.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
                   
                       
                       })
                    }
       
                     })
                    /* }*/
                     
                     })
                     
                   })
                 }
                 else
       
               var  idX  = docs[0]._id
       
               TestX.find({term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6,subjectCode:subjectCode},function(err,shods){
       
                TestX.find({term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6,subjectCode:subjectCode},function(err,slods){
              /*  if(shods.length >=1){*/
     
        
                 totalexams = shods.length;
                 examsPassed = slods.length
                 let pRate = examsPassed / totalexams * 100
                 passRate = Math.round(pRate)
                 passRate.toFixed(2)
                 numberOfMarks = shods.length;
       
                 for(var q = 0;q<shods.length; q++){
         
                   arr1.push(shods[q].percentage)
                     }
                     //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                      totalMarks=0;
                     for(var z in arr1) { totalMarks += arr1[z]; }
        
                     let  avgMarkX = totalMarks / numberOfMarks
                   
                     avgMark = Math.round(avgMarkX)
                     avgMark.toFixed(2)
       console.log(totalMarks, numberOfMarks, examsPassed, passRate, avgMark, idX)
                    if(term == 1){
       
         
                      SubRateX.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:avgMark}},function(err,kocs){
                  
                     
                     })
                   }else if(term == 2){
                   
                    SubRateX.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:avgMark}},function(err,kocs){
                   
                         
                         })
                       }else{
                        SubRateX.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:avgMark}},function(err,kocs){
                         
                             
                             })
                           }
         
                  /* }*/
           
          
                 })
                 
              
               })   
                
      
             
       
               })
         
          
              
              
            
              }
             // res.redirect('/student/dash')
             res.redirect('/student/eventUpdateX')
            })
               
               
       
         })
      
  
  
         router.get('/eventUpdateX',isLoggedIn,student,function(req,res){
          console.log('mbare')
       
          Calendar.find({status:'active'},function(err,docs){
            console.log(docs.length,'invested')
            for(var i = 0;i<docs.length;i++){
              let id = docs[i]._id
              if(i == 0){
                console.log('true')
    Calendar.findByIdAndUpdate(id,{$set:{slide:i,style:"active ms-1",style2:"carousel-item active show"}},function(err,noc){
    
    })
              }else{
    
                Calendar.findByIdAndUpdate(id,{$set:{slide:i,style:"ms-1",style2:"carousel-item"}},function(err,noc){
    
                })
                console.log('false')
              }
            }
            res.redirect('/student/lessonUpdateX')
          })
        })


        router.get('/lessonUpdateX',isLoggedIn,student,function(req,res){
          console.log('mbare')
          var m = moment()
          var mformat = m.format("L")
          var class1 = req.user.class1
          Lesson.find({class1:class1,mformat2:mformat},function(err,docs){
            console.log(docs.length,'invested')
            for(var i = 0;i<docs.length;i++){
              let id = docs[i]._id
              if(i == 0){
                console.log('true')
    Lesson.findByIdAndUpdate(id,{$set:{slide:i,style:"active ms-1",style2:"carousel-item active show"}},function(err,noc){
    
    })
              }else{
    
                Lesson.findByIdAndUpdate(id,{$set:{slide:i,style:"ms-1",style2:"carousel-item"}},function(err,noc){
    
                })
                console.log('false')
              }
            }
            res.redirect('/student/dash')
          })
        })
    
  

       router.post('/subChart',isLoggedIn,student,function(req,res){
        var m = moment()
        var year = m.format('YYYY')
        var term = req.user.term
        var uid = req.user.uid
     
              SubRate.find({year:year,studentId:uid, term:term},function(err,docs){
                if(docs == undefined){
                  res.redirect('/dash')
                }else
            
                   res.send(docs)
               
                
                 })
            
            })
      
      //passChartX
            router.post('/subChartX',isLoggedIn,student,function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var term = req.user.term
              var uid = req.user.uid
             
                    SubRateX.find({year:year,studentId:uid, term:term},function(err,docs){
                      if(docs == undefined){
                        res.redirect('/dash')
                      }else
                  
                         res.send(docs)
                     
                      
                       })
                  
                  })





                  router.post('/dashChart1',isLoggedIn,student,function(req,res){
                    var uid = req.user.uid
                    var size
              
                    var m = moment()
                    var year = m.format('YYYY')
                    var arr = []
                    var id = req.user._id
                    var term = req.user.term
                
                     
                    
                 
                    
                    
                      TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                       // console.log(docs,'docs')
                        for(var i = 0;i<docs.length;i++){
                    size = docs.length
                       
                            
                           if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                  console.log('true')
                                 arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                                 arr.find(value => value.month == docs[i].month).size++;
                                }else{
                                  arr.push(docs[i])
                                  let month = docs[i].month
                                  
                                    //element.size = 0
                                    if(arr.find(value => value.month == month)){
                               
                                     
                                           arr.find(value => value.month == month).size++;
                             
                                    }
                                    //element.size = element.size + 1
                                      
                                 
                                      }
                            
                            }
                            let result = arr.map(function(element){
                              element.percentage  = element.percentage / element.size
                              console.log(element.mark,'mark')
                              let num = Math.round(element.percentage)
          num.toFixed(2)
          element.percentage =num
                            })
                        //console.log(arr,'arr')
                       res.send(arr)
                      })
                  
                    })
                    


                    router.post('/dashChart02',isLoggedIn,student,function(req,res){
                      var uid = req.user.uid
                      var size
                
                      var m = moment()
                      var year = m.format('YYYY')
                      var arr = []
                      var id = req.user._id
                      var term = req.user.term
                  
                       StudentSub.find({studentId:uid},function(err,locs){
                         if(locs){
                           let subjectCode = locs[0].subjectCode
                       
                   
                      
                      
                        TestX.find({year:year,subjectCode:subjectCode,term:term,uid:uid},function(err,docs) {
                          //console.log(docs,'docs')
                          for(var i = 0;i<docs.length;i++){
                      size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                    console.log('true')
                                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                                   arr.find(value => value.month == docs[i].month).size++;
                                  }else{
                                    arr.push(docs[i])
                                    let month = docs[i].month
                                    
                                      //element.size = 0
                                      if(arr.find(value => value.month == month)){
                                 
                                       
                                             arr.find(value => value.month == month).size++;
                               
                                      }
                                      //element.size = element.size + 1
                                        
                                   
                                        }
                              
                              }
                              let result = arr.map(function(element){
                                element.percentage  = element.percentage / element.size
                                console.log(element.mark,'mark')
                                let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                              })
                          //console.log(arr,'arr')
                         res.send(arr)
                        })
                      }
                    })
                   
                      })
                      
                      router.post('/dashChart3',isLoggedIn,student,function(req,res){
                     
                        var term = req.user.term
                        var uid = req.user.uid
                       
                       
                        var m = moment()
                        var year = m.format('YYYY')
                        var arr = []
                        var id = req.user._id
                      
                        
                      
                      
                      
                        TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                          for(var i = 0;i<docs.length;i++){
                            size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                    console.log('true')
                                   arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                   arr.find(value => value.subject == docs[i].subject).size++;
                                 
                                  }else{
                                    arr.push(docs[i])
                                    let subject = docs[i].subject
                                    
                                      //element.size = 0
                                      if(arr.find(value => value.subject == subject)){
                                 
                                       
                                             arr.find(value => value.subject == subject).size++;
                               
                                      }
                                      //element.size = element.size + 1
                                        
                                   
                                        }
                          
                              
                              }
                              let result = arr.map(function(element){
                                element.percentage  = element.percentage / element.size
                                console.log(element.mark,'mark')
                                let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                              })
                          //console.log(arr,'arr')
                         res.send(arr)
                        })
                      
                      })
              

                      router.post('/dashChart4',isLoggedIn,student,function(req,res){
                     
                        var term = req.user.term
                        
                       var uid = req.user.uid
                       
                        var m = moment()
                        var year = m.format('YYYY')
                        var arr = []
                        var id = req.user._id
                      
                        
                      
                      
                      
                        TestX.find({year:year,term:term,type:'Class Test',uid:uid},function(err,docs) {
                          for(var i = 0;i<docs.length;i++){
                            size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                    console.log('true')
                                   arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                   arr.find(value => value.subject == docs[i].subject).size++;
                                  }else{
                                    arr.push(docs[i])
                                    let subject = docs[i].subject
                                    
                                      //element.size = 0
                                      if(arr.find(value => value.subject == subject)){
                                 
                                       
                                             arr.find(value => value.subject == subject).size++;
                               
                                      }
                                      //element.size = element.size + 1
                                        
                                   
                                        }
                          
                              
                              }
                              let result = arr.map(function(element){
                                element.percentage  = element.percentage / element.size
                                console.log(element.mark,'mark')
                                let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                              })
                          //console.log(arr,'arr')
                         res.send(arr)
                        })
                      
                      })
              
              
              
                      router.post('/dashChart05',isLoggedIn,student,function(req,res){
                        var uid = req.user.uid
                       
                     
                       StudentSub.find({studentId:uid},function(err,locs){

                        if(locs){
                          let subjectCode = locs[0].subjectCode
                       
                       
                        var m = moment()
                        var year = m.format('YYYY')
                        var arr = []
                        var id = req.user._id
                        var term= req.user.term
                        
                      
                      
                      
                        TestX.find({year:year,term:term,subjectCode:subjectCode,uid:uid},function(err,docs) {
                          if(docs){

                     
                          for(var i = 0;i<docs.length;i++){
                            size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.topic == docs[i].topic)){
                                    console.log('true')
                                   arr.find(value => value.topic == docs[i].topic).percentage += docs[i].percentage;
                                   arr.find(value => value.topic == docs[i].topic).size++;
                                  }else{
                                    arr.push(docs[i])
                                    let topic = docs[i].topic
                                    
                                      //element.size = 0
                                      if(arr.find(value => value.topic == topic)){
                                 
                                       
                                             arr.find(value => value.topic == topic).size++;
                               
                                      }
                                      //element.size = element.size + 1
                                        
                                   
                                        }
                      
                          
                          }
                          let result = arr.map(function(element){
                            element.percentage  = element.percentage / element.size
                            console.log(element.mark,'mark')
                            let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                          })
                          //console.log(arr,'arr')
                         res.send(arr)
                        }
                        })
                      }
                    })
                      })
              
              
              

                    router.post('/dashChartP1',isLoggedIn,student,function(req,res){
                      var uid = req.user.uid
                      var size
                
                      var m = moment()
                      var year = m.format('YYYY')
                      var arr = []
                      var id = req.user._id
                      var term = req.body.term
                  
                       
                      
                   
                      
                      
                        TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                          //console.log(docs,'docs')
                          for(var i = 0;i<docs.length;i++){
                      size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                    console.log('true')
                                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                                   arr.find(value => value.month == docs[i].month).size++;
                                  }else{
                                    arr.push(docs[i])
                                    let month = docs[i].month
                                    
                                      //element.size = 0
                                      if(arr.find(value => value.month == month)){
                                 
                                       
                                             arr.find(value => value.month == month).size++;
                               
                                      }
                                      //element.size = element.size + 1
                                        
                                   
                                        }
                              
                              }
                              let result = arr.map(function(element){
                                element.percentage  = element.percentage / element.size
                                console.log(element.mark,'mark')
                                let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                              })
                          //console.log(arr,'arr')
                         res.send(arr)
                        })
                    
                      })
                      
                      router.post('/dashChartP2',isLoggedIn,student,function(req,res){
                        var uid = req.user.uid
                        var size
                  
                        var m = moment()
                        var year = m.format('YYYY')
                        var arr = []
                        var id = req.user._id
                        var term = req.body.term
                        var subjectCode = req.body.subject
                    
                    console.log(term,subjectCode,'wwwww')
                         
                     
                        
                        
                          TestX.find({year:year,subjectCode:subjectCode,term:term,uid:uid},function(err,docs) {
                            //console.log(docs,'docs')
                            for(var i = 0;i<docs.length;i++){
                        size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                      console.log('true')
                                     arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                                     arr.find(value => value.month == docs[i].month).size++;
                                    }else{
                                      arr.push(docs[i])
                                      let month = docs[i].month
                                      
                                        //element.size = 0
                                        if(arr.find(value => value.month == month)){
                                   
                                         
                                               arr.find(value => value.month == month).size++;
                                 
                                        }
                                        //element.size = element.size + 1
                                          
                                     
                                          }
                            
                                
                                }
                                let result = arr.map(function(element){
                                  element.percentage  = element.percentage / element.size
                                  console.log(element.mark,'mark')
                                  let num = Math.round(element.percentage)
              num.toFixed(2)
              element.percentage =num
                                })
                            //console.log(arr,'arr')
                           res.send(arr)
                          })
                      
                     
                        })
                        
  


                        router.post('/dashChartP3',isLoggedIn,student,function(req,res){
                     
                          var term = req.body.term
                          
                          var uid = req.user.uid
                         
                          var m = moment()
                          var year = m.format('YYYY')
                          var arr = []
                          var id = req.user._id
                        
                          
                        
                        
                        
                          TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                            for(var i = 0;i<docs.length;i++){
                              size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                      console.log('true')
                                     arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                     arr.find(value => value.subject == docs[i].subject).size++;
                                    }else{
                                      arr.push(docs[i])
                                      let subject = docs[i].subject
                                      
                                        //element.size = 0
                                        if(arr.find(value => value.subject == subject)){
                                   
                                         
                                               arr.find(value => value.subject == subject).size++;
                                 
                                        }
                                        //element.size = element.size + 1
                                          
                                     
                                          }
                        
                            
                            }
                            let result = arr.map(function(element){
                              element.percentage  = element.percentage / element.size
                              console.log(element.mark,'mark')
                              let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                            })
                            //console.log(arr,'arr')
                           res.send(arr)
                          })
                        
                        })
                
                

                        router.post('/dashChartP5',isLoggedIn,student,function(req,res){
                     
                          var term = req.body.term
                          let type = req.body.type
                         var uid = req.user.uid
                         console.log(term,type,'faya')
                          var m = moment()
                          var year = m.format('YYYY')
                          var arr = []
                          var id = req.user._id
                        
                          
                        
                        
                        
                          TestX.find({year:year,term:term,type:type,uid:uid},function(err,docs) {
                            if(docs){

                           
                            for(var i = 0;i<docs.length;i++){
                              size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                      console.log('true')
                                     arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                     arr.find(value => value.subject == docs[i].subject).size++;
                                    }else{
                                      arr.push(docs[i])
                                      let subject = docs[i].subject
                                      
                                        //element.size = 0
                                        if(arr.find(value => value.subject == subject)){
                                   
                                         
                                               arr.find(value => value.subject == subject).size++;
                                 
                                        }
                                        //element.size = element.size + 1
                                          
                                     
                                          }
                            
                            }
                            let result = arr.map(function(element){
                              element.percentage  = element.percentage / element.size
                              console.log(element.mark,'mark')
                              let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                            })
                            //console.log(arr,'arr')
                           res.send(arr)
                          }
                          })
                        
                        })
                
                


                        router.post('/dashChartP6',isLoggedIn,student,function(req,res){
                     
                          var term = req.body.term
                          let type = req.body.type
                          var uid = req.user.uid
                         
                         
                          var m = moment()
                          var year = m.format('YYYY')
                          var arr = []
                          var id = req.user._id
                        
                          
                        
                        
                        
                          TestX.find({year:year,term:term,type:type,uid:uid},function(err,docs) {
                            if(docs){

                       
                            for(var i = 0;i<docs.length;i++){
                              size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                      console.log('true')
                                     arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                     arr.find(value => value.subject == docs[i].subject).size++;
                                    }else{
                                      arr.push(docs[i])
                                      let subject = docs[i].subject
                                      
                                        //element.size = 0
                                        if(arr.find(value => value.subject == subject)){
                                   
                                         
                                               arr.find(value => value.subject == subject).size++;
                                 
                                        }
                                        //element.size = element.size + 1
                                          
                                     
                                          }
                            
                            }
                            let result = arr.map(function(element){
                              element.percentage  = element.percentage / element.size
                              console.log(element.mark,'mark')
                              let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                            })
                            //console.log(arr,'arr')
                           res.send(arr)
                          }
                          })
                        
                        })
                
                
        
                        

                        

                        router.post('/dashChartP7',isLoggedIn,student,function(req,res){
                     
                          var term = req.body.term
                          let subjectCode = req.body.subjectCode
                          var uid = req.user.uid
                         
                         
                          var m = moment()
                          var year = m.format('YYYY')
                          var arr = []
                          var id = req.user._id
                        
                          
                        
                        
                        
                          TestX.find({year:year,term:term,subjectCode:subjectCode,uid:uid},function(err,docs) {
                            if(docs){

                       
                            for(var i = 0;i<docs.length;i++){
                              size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.topic == docs[i].topic)){
                                      console.log('true')
                                     arr.find(value => value.topic == docs[i].topic).percentage += docs[i].percentage;
                                     arr.find(value => value.topic == docs[i].topic).size++;
                                    }else{
                                      arr.push(docs[i])
                                      let topic = docs[i].topic
                                      
                                        //element.size = 0
                                        if(arr.find(value => value.topic == topic)){
                                   
                                         
                                               arr.find(value => value.topic == topic).size++;
                                 
                                        }
                                        //element.size = element.size + 1
                                          
                                     
                                          }
                            
                            }
                            let result = arr.map(function(element){
                              element.percentage  = element.percentage / element.size
                              console.log(element.mark,'mark')
                              let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                            })
                            //console.log(arr,'arr')
                           res.send(arr)
                          }
                          })
                        
                        })
                
                
                
                

     router.get('/dash',isLoggedIn,student, function(req,res){
      var pro = req.user
      var name = req.user.name
      const arr = []
    const m = moment();
    const n = moment();
    var year = m.format('YYYY')
    var uid = req.user.uid
    var class1 = req.user.class1
      var id =req.user._id
      var term = req.user.term
      var mformat = m.format("L")
      var mformat2 = n.format("L")
      console.log(mformat2,'mformat3333')
        Recepient.find({recepientId:id,statusCheck:'not viewed'},function(err,rocs){
          let lgt = rocs.length
          var gt = lgt > 0
        
              console.log(req.user._id)
              console.log(req.user.email)
                Note.find({recId:req.user._id},function(err,docs){
                  //console.log(docs,'docs')
               for(var i = 0;i<docs.length;i++){
        
               
                 let date = docs[i].date
                 let id = docs[i]._id
                 let timeX = moment(date)
                 let timeX2 =timeX.fromNow()
                 console.log(timeX2,'timex2')
        
                 Note.findByIdAndUpdate(id,{$set:{status4:timeX2}},function(err,locs){
        
                 
                 
                // Format relative time using negative value (-1).
        
                  
                })
              }
        
              Note.find({recId:req.user._id,status1:'new'},function(err,flocs){
                var les 
             
                Note.find({recId:req.user._id,status:'not viewed'},function(err,jocs){
                 les = jocs.length > 0
              
                for(var i = flocs.length - 1; i>=0; i--){
            
                  arr.push(flocs[i])
                }
                Lesson.find({mformat2:mformat},function(err,vocs){
                  console.log(vocs.length,'vocs')
                  var productChunks = [];
                  var chunkSize = 1;
                  for (var c = 0; c < vocs.length; c += chunkSize) {
                      productChunks.push(vocs.slice(c, c + chunkSize));
                  }
        StudentDB.find({uid:uid,term:term,year:year},function(err,shocs){
     let avgMark = shocs[0].avgMark
     let subjects = shocs[0].subjects
     let pendingAssignments = shocs[0].pendingAssignments
     let pendingQuiz = shocs[0].pendingQuiz
      
             
                  Calendar.find({userRole:"all"},function(err,yocs){
                    var productChunksX = [];
                    var chunkSizeX = 1;
                    for (var i = 0; i <5; i += chunkSizeX) {
                        productChunksX.push(yocs.slice(i, i + chunkSizeX));
                    }
                //console.log(productChunks,'chunksX')
                res.render('dashboard/student',{pro:pro,list:arr,listX:vocs, les:les,gt:gt,products: productChunks,events:productChunksX,avgMark:avgMark,
                subjects:subjects,pendingAssignments:pendingAssignments,pendingQuiz:pendingQuiz,name:name })
        
              })
            })
              
              })
            })
            })
          })
        
     
      })
    })
    

      //student perfomance2
router.get('/parent',isLoggedIn,student,function(req,res){
  var uid = req.user.uid
  console.log(uid)
  StudentSub.find({studentId:uid},function(err,docs){

    res.render('dashboard/student2',{listX:docs})
  })

  })





    
  router.get('/dash02',isLoggedIn,student,function(req,res){
   
  var uid = req.user.uid
   
   
    var m = moment()
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
    var term = req.user.term
  
    
  
  
  
    TestX.find({year:year,uid:uid,term:term},function(err,docs) {
      for(var i = 0;i<docs.length;i++){
        //size = docs.length
     console.log(docs,'yes')
          
         if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                console.log('true')
               arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
               arr.find(value => value.subject == docs[i].subject).size++;
              }else{
                arr.push(docs[i])
                let subject = docs[i].subject
                
                  //element.size = 0
                  if(arr.find(value => value.subject == subject)){
             
                   
                         arr.find(value => value.subject == subject).size++;
           
                  }
                  //element.size = element.size + 1
                    
               
                    }
  
      
      }
      let result = arr.map(function(element){
        element.percentage = element.percentage / element.size
        console.log(element.mark,'mark')
        if(element.percentage  < 50){
          element.color = "progress-bar bg-danger"
        }else{
          element.color = "progress-bar bg-success"
        }
      })
      console.log(arr,'arr')
    // res.send(arr)
    res.render('dashboard/student2',{listX:arr})
    })
  
  })
  //student perfomance
router.get('/analytics',isLoggedIn,student,function(req,res){
  var uid = req.user.uid
  var pro = req.user
  StudentSub.find({studentId:uid},function(err,docs){
    res.render('students/index3',{arr:docs,listX:docs,pro:pro})
  })

})
//Final Exam

     router.post('/studentPassChart',isLoggedIn,student,function(req,res){
      var m = moment()
      var year = m.format('YYYY')
      var uid = req.user.uid
      var term = req.user.term
     
            StudentExamRate.find({year:year, term:term, studentId:uid},function(err,docs){
              if(docs == undefined){
                res.redirect('/student/dash')
              }else
          
                 res.send(docs)
             
              
               })
          
          })


  //Class Test
          router.post('/studentPassChart2',isLoggedIn,student,function(req,res){
            var m = moment()
            var year = m.format('YYYY')
            var uid = req.user.uid
            var term = req.user.term
           
                  StudentClassRate.find({year:year, term:term,studentId:uid},function(err,docs){
                    if(docs == undefined){
                      res.redirect('/student/dash')
                    }else
                
                       res.send(docs)
                   
                    
                     })
                
                })
      


                router.get('/testUpdate',function(req,res){
                  Test.find(function(err,docs){
                    //console.log(docs,'docs')
                    for(var i = 0;i<docs.length;i++){
                         
                      let date = docs[i].date
                      let id = docs[i]._id
                      let ndate = moment().valueOf()//current date
                      let timeX = moment(date).valueOf()//start time
                      let timeXX = moment(date)
                      let newTime = timeXX.add(docs[i].duration,'minutes')
                      let timeX3 = moment(newTime).valueOf()//end time
                      let timeX4 = newTime - timeX
                
                      if(ndate >= timeX && ndate < timeX3){
                  Test.findByIdAndUpdate(id,{$set:{status:'activated'}},function(err,nocs){
                
                  })
                  Question.find(function(err,nocs){
                    for(var x = 0; x < nocs.length; x++){
                      Question.findByIdAndUpdate(nocs[x]._id,{$set:{status2:'activated'}},function(err,locs){
                
                      })
                    }
                  })
                      }
                      else if( ndate < timeX){
                        Test.findByIdAndUpdate(id,{$set:{status:'unactivated'}},function(err,tocs){
                
                        })
                
                        Question.find(function(err,nocs){
                          for(var x = 0; x < nocs.length; x++){
                            Question.findByIdAndUpdate(nocs[x]._id,{$set:{status2:'unactivated'}},function(err,locs){
                      
                            })
                          }
                        })
                      }
                      else{
                        Test.findByIdAndUpdate(id,{$set:{status:'expired'}},function(err,locs){
                
                        })
                        Question.find(function(err,nocs){
                          for(var x = 0; x < nocs.length; x++){
                            Question.findByIdAndUpdate(nocs[x]._id,{$set:{status2:'expired'}},function(err,locs){
                      
                            })
                          }
                        })
                      }
                     // console.log(timeX3,'iwe')
                    //  let timeX2 =timeX.fromNow()
                      //console.log(timeX2,'timex2')
                    }
                    res.redirect('/student/testUpdate2')
                  })
                })


                
                router.get('/testUpdate2',function(req,res){
                  var m = moment()
             
var year = m.format('YYYY')
                  var dateValue = m.valueOf()
                  Test.find({year:year},function(err,docs){
                    //console.log(docs,'docs')
                    for(var i = 0;i<docs.length;i++){
                         
                      let date = docs[i].date
                      let id = docs[i]._id
                      let ndate = docs[i].dateValue2//current date
                      
                      if(dateValue > ndate){
                  Test.findByIdAndUpdate(id,{$set:{status2:'expired'}},function(err,nocs){
                
                  })
                  Question.find(function(err,nocs){
                    for(var x = 0; x < nocs.length; x++){
                      Question.findByIdAndUpdate(nocs[x]._id,{$set:{status2:'activated'}},function(err,locs){
                
                      })
                    }
                  })
                      }
                    }
                      res.redirect('/student/onlineQuiz')
                  })
                })





                router.get('/testUpdate3',function(req,res){
                  var m = moment()
                  var m6 = moment()
var year = m.format('YYYY')
                  var dateValue = m.valueOf()
                  TestX.find({year:year,type2:'online assignment'},function(err,docs){
                    //console.log(docs,'docs')
                    for(var i = 0;i<docs.length;i++){
                         
                      let date = docs[i].date
                      let id = docs[i]._id
                      let ndate = docs[i].dateValueD//current date
                      
                      if(dateValue > ndate){
                  TestX.findByIdAndUpdate(id,{$set:{status3:'expired'}},function(err,nocs){
                
                  })
                
                      }
                    }
                      res.redirect('/student/assignments')
                  })
                })

                router.get('/assignments',isLoggedIn,student,function(req,res){
                  var uid = req.user.uid
                  var pro = req.user
                 TestX.find({uid:uid,type2:'online assignment',submissionStatus:"pending",status3:'null'},function(err,docs){
                    res.render('students/assgt',{listX:docs,pro:pro})
                  })
                
                })


                router.get('/assignmentsFiles',isLoggedIn,student,function(req,res){
                  var m = moment()
                  var year = m.format('YYYY')
                  var uid = req.user.uid
                  var class1= req.user.class1
                  const arr2= []

                  var pro = req.user

                  StudentSub.find({studentId:uid},function(err,locs){
                      
                    for(var i = 0; i< locs.length;i++){
                    
                   let subject= locs[i].subjectName
                 Test.find({year:year,subject:subject,class1:class1,type2:'online assignment attached',status3:'null'},function(err,docs){
                  
                  if(docs.length > 0){
                    console.log(subject,'subject')

                  
                  console.log(docs[0])
                  arr2.push(docs[0])
                  //console.log(arr2[0],'arr2')
                  }
                  })
                
                }
         
                 res.render('students/assgtList',{listX:arr2,pro:pro})
                  })
                  //res.render('students/assgtList',{listX:arr2,pro:pro})
                })


                router.get('/downloadF/:id',isLoggedIn,student,function(req,res){
                  Test.findById(req.params.id,function(err,doc){
                    var name = doc.filename;
                    res.download( './public/uploads/'+name, name)
                  })  
                
                })

                router.get('/onlineQuiz',isLoggedIn,student,function(req,res){
                  var m = moment()
var year = m.format('YYYY')
                  var uid = req.user.uid
                  var class1 = req.user.class1
                  var arr = []
                  var pro = req.user
                  Test.find({year:year,class1:class1,type2:'online quiz',status2:'active'},function(err,locs){
                    res.render('students/quiz',{listX:locs,pro:pro})
                  })


                })


                router.get('/downloadAssgtFile/:id',(req,res)=>{
                  var fileId = req.params.id
                  
                
                
                //const bucket = new GridFsStorage(db, { bucketName: 'uploads' });
                const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
                gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
                
                  console.log(files[0].filename,'files9')
                let filename = files[0].filename
                let contentType = files[0].contentType
                
                
                    res.set('Content-disposition', `attachment; filename="${filename}"`);
                    res.set('Content-Type', contentType);
                    bucket.openDownloadStreamByName(filename).pipe(res);
                  })
                 //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
                })
                




/*
                router.get('/onlineQuiz',isLoggedIn,function(req,res){
                  var uid = req.user.uid
                  var class1 = req.user.class1
                  var arr = []
                  Test.find({class1:class1,type2:'online quiz',status:'unactivated'},function(err,locs){
                      for(var i = 0;i<locs.length;i++){
                        let subjectCode = locs[i].subjectCode

                        StudentSub.find({studentId:uid,subjectCode:subjectCode},function(err,tocs){
                          if(tocs){
                        for(var x = 0; x<tocs.length;x++){
                         if(subjectCode == tocs[x].subjectCode){
                           arr.push(tocs[i])
                         }
                        }

                          }
                        })
                      }
                      console.log(arr,'arr')
                      res.render('students/quiz',{listX:arr})
                  })
                 /*Test.find({uid:uid,type2:'online quiz',submissionStatus:'pending'},function(err,docs){
                    res.render
                    ('students/assgt',{listX:arr})
                  })*/
                /*
                })*/

/*
                router.get('/assignments/:id',isLoggedIn,function(req,res){
                  res.render('students/uploads')
                })
*/


router.get('/assignments/:id',isLoggedIn,student,function(req,res,next){
  var m = moment()
var year = m.format('YYYY')
  var id = req.params.id
  console.log(id,'id')
  var pro = req.user
  var successMsg = req.flash('success')[0];
  
   
      res.render('students/uploads',{id:id,successMsg: successMsg,noMessages: !successMsg,pro:pro})

})

router.post('/assignments/:id',upload.single('file'),isLoggedIn,function(req,res){
  var id = req.params.id
  var m = moment()
  var filename = req.file.filename;
  var fileId = req.file.id
  var mformat = m.format("L")
  var displayFormat = m.format('MMMM Do YYYY')
  var dateValueOf = m.valueOf()

 TestX.findByIdAndUpdate(id,{$set:{filename:filename,fileId:fileId,dateValueS:dateValueOf,displayFormatS:displayFormat,submissionStatus:'submitted'}},function(err,docs){

  })


  req.flash('success', 'Assignment Uploaded Successfully!');
  
    res.redirect('/student/assignments/'+id)
})

/*GET home page*/
/*
router.post('/assignments/:id',isLoggedIn,upload,function(req,res,next){
  var m = moment()
  var id = req.params.id
  var success = req.file.filename+ "uploaded successfully";
   var imageFile = req.file.filename;

   var imageDetails = new uploadModel({
    imagename:imageFile,
    companyId:req.user.companyId,
    studentId:req.user.uid,
    studentName:req.user.fullname,
    date:m,
    mformat:m.format('L')
   })
   
  
  imageDetails.save(function(err,doc){
    if(err) 
    {
      req.session.message = {
          type:'error',
          message:'upload failed'
        } 
        res.render("students/uploads", {message:req.session.message,
         
      });
      req.session.message = null;
      }
    imageData.exec(function(err,data){
      if(err) {
    throw err;
  }
else{
  req.session.message = {
    type:'success',
    message:'upload successful'
  } 

   

   res.redirect('/student/assignments')


    
  
    }
  })
})
})*/
      //res.render('uploads/index',{title:'Upload File',records:data, success:success})

  






























                router.get('/msgUpdate',isLoggedIn,student,function(req,res){
                  var id = req.user._id
                  var arr = []
                  Recepient.find({recepientId:id},function(err,docs){
                //  
                  if(docs.length > 0){
                    for(var i = 0; i<docs.length;i++){
                    let msgId = docs[0].msgId
                    Message.find({msgId:msgId},function(err,tocs){
                      if(tocs.length >= 1){
                        arr.push(tocs[0])
                      }
                      let size = arr.length
                      console.log(size,'size')
                      User.findByIdAndUpdate(id,{$set:{inboxNo:size}},function(err,locs){
                  
                      })
                    
                    })
                  }
                  }
                  
                  })
                  })
                  
                  router.get('/sentUpdate',isLoggedIn,student,function(req,res){
                    var id = req.user._id
                    Message.find({senderId:id},function(err,docs){
                      let size = docs.length
                      User.findByIdAndUpdate(id,{$set:{sent:size}},function(err,nocs){
                  
                      })
                    })
                  })
                  













                router.get('/msgX',isLoggedIn,student,function(req,res){
                  var id = req.user.id
                  var list = []
                  var num
              Recepient.find({recepientId :id},function(err,nocs){
              
              for(var i = 0 ; i<nocs.length;i++){
              
              let recId = nocs[i].msgId
              
                  Message.find({status:'reply',msgId:recId},function(err,docs){
                    for(var i = 0; i<docs.length;i++){
                      let date = docs[i].date
                      let Vid = docs[i]._id
                      let timeX = moment(date)
                      let timeX2 =timeX.fromNow()
                      let timeX3 =timeX.format("LLL")
                      console.log(timeX2,'timex2')
              
                
                      Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
                
                      
                      
                     // Format relative time using negative value (-1).
                
                       
                     })
                    }
              
                  
                  })
                }
                
              res.redirect('/student/msg')
              })
              
              })
              
              
              
              
              
              
              
              
              
              
              
              
              router.get('/msg',isLoggedIn,student,function(req,res){
              var id = req.user.id
              const list2 =[]
              const list = []
              var num = req.user.inboxNo
              var sent = req.user.sent
              var pro = req.user
               
              Recepient.find({recepientId :id, status:'active', statusXX:'null'},function(err,klocs){
              
              //var recFilter =Recepient.find({recepientId :id}).sort({"numDate":-1});
              //recFilter.exec(function(err,klocs){
                for(var c = 0 ; c <klocs.length;c++){
              
                let recIdX = klocs[c].msgId
              
                      Message.find({status:'reply',msgId:recIdX},function(err,  docs){
              
                       // var bookFilter =Message.find({status:'reply',msgId:recIdX}).sort({"numDate":-1});
              
              
              // bookFilter.exec(function(err,docs){
              
              console.log(docs.length,'mainstream')
              
              let x = docs.length - 1
              for(var i = x ;i>=0; i--){
              console.log(i,'b')
              if(docs[i].senderId !=id){
              //console.log(docs[i],'black skinhead')
              
              list.push(docs[i])
              list.sort((x, y) =>  y.numDate - x.numDate)
              console.log(list,'list yacho')
              
              
              }
              
              num  = docs.length
              }
              })  
              
              //})
              
              }
              res.render('messagesStudents/inbox',{list:list, num:num,pro:pro, sent:sent})
              })
              
              })
              
              
              
              
              
              //on click dashboard icon & msg redirect
              router.post('/msg/:id',isLoggedIn,student,function(req,res){
                var m = moment()
                var date = m.toString()
              
              var id = req.params.id
                Recepient.find({recepientId:id},function(err,docs){
                  for(var i = 0; i<docs.length; i++){
                    let nId = docs[i]._id
              
                    Recepient.findByIdAndUpdate(nId,{$set:{statusCheck:'viewed'}},function(err,locs){
              
                      
                    })
                  }
              
                  res.send('success')
                })
              })
              
              
              router.get('/sentXX',isLoggedIn,student,function(req,res){
              var id = req.user.id
              var list = []
              var num
              
              
              Message.find({senderId:id},function(err,docs){
                for(var i = 0; i<docs.length;i++){
                  let date = docs[i].date
                  let Vid = docs[i]._id
                  let timeX = moment(date)
                  let timeX2 =timeX.fromNow()
                  let timeX3 =timeX.format("LLL")
                  console.log(timeX2,'timex2')
              
              
                  Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
              
              
              
                   
                 })
                }
              res.redirect('/student/sent')
              })
              
              })
              
              
              
              
              
              router.get('/sent',isLoggedIn,student,function(req,res){
              var id = req.user.id
              const list2 =[]
              const list = []
              var num = req.user.inboxNo
              var pro = req.user
              var sent = req.user.sent
               
              Message.find({senderId :id},function(err,docs){
              
              
              
              console.log(docs.length,'mainstream')
              if(docs.length > 1){
              
              let x = docs.length - 1
              for(var i = x ;i>=0; i--){
              console.log(i,'b')
              
              //console.log(docs[i],'black skinhead')
              
              list.push(docs[i])
              list.sort((x, y) =>  y.numDate - x.numDate)
              console.log(list,'list yacho')
              
              
              
              
              
              num  = docs.length
              }
              
              }else if(docs.length == 1){
              
              list.push(docs[0])
              console.log(list,'list')
              }else{
              console.log('inquisition')
              }
              //})
              
              
              res.render('messagesStudents/sent',{list:list, num:num,sent:sent,pro:pro})
              })
              
              })
              
              
              
              router.get('/archiveXX',isLoggedIn,student,function(req,res){
              var id = req.user.id
              var list = []
              var num
              
              Recepient.find({recepientId :id, status:'active', statusXX:'yes', archive:'yes'},function(err,klocs){
              
                for(var c = 0 ; c <klocs.length;c++){
                
                  let recIdX = klocs[c].msgId
                
                        Message.find({msgId:recIdX},function(err,  docs){
                for(var i = 0; i<docs.length;i++){
                  let date = docs[i].date
                  let Vid = docs[i]._id
                  let timeX = moment(date)
                  let timeX2 =timeX.fromNow()
                  let timeX3 =timeX.format("LLL")
                  console.log(timeX2,'timex2')
              
              
                  Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
              
                  
                  
                 // Format relative time using negative value (-1).
              
                   
                 })
                }
              })
              }
              res.redirect('/student/archive')
              
              })
              
              })
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              router.get('/archive',isLoggedIn,student,function(req,res){
              var id = req.user.id
              const list2 =[]
              const list = []
              var pro = req.user
              var num = req.user.inboxNo
              
              Recepient.find({recepientId :id, status:'active', statusXX:'yes', archive:'yes'},function(err,klocs){
              
              for(var c = 0 ; c <klocs.length;c++){
              
                let recIdX = klocs[c].msgId
              
                      Message.find({msgId:recIdX},function(err,  docs){
              
              console.log(docs.length,'mainstream')
              if(docs.length > 1){
              
              let x = docs.length - 1
              for(var i = x ;i>=0; i--){
              console.log(i,'b')
              
              //console.log(docs[i],'black skinhead')
              
              list.push(docs[i])
              list.sort((x, y) =>  y.numDate - x.numDate)
              console.log(list,'list yacho')
              
              
              
              
              
              num  = docs.length
              }
              
              }else{
              
              list.push(docs[0])
              console.log(list,'list')
              }
              //})
              })
              }      
              
              res.render('messagesStudents/sent',{list:list, num:num,sent:sent,pro:pro})
                     
              })
              
              })
              
              
              
              
              router.post('/marked',isLoggedIn,student,function(req,res){
              let code = req.body.code
              console.log(code,'code')
              let id = req.user.id
              Recepient.find({ msgId:code, recepientId:id },function(err,docs){
              let nId = docs[0]._id
              if(docs[0].statusX == 'unmarked'){
              Recepient.findByIdAndUpdate(nId,{$set:{statusX:'marked'}},function(err,nocs){
              
              })
              }else{
              Recepient.findByIdAndUpdate(nId,{$set:{statusX:'unmarked'}},function(err,nocs){
              
              })
              
              }
              
              })
              })
              
              router.post('/archiveX',isLoggedIn,student,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{archive:'yes',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
              
              router.post('/readX',isLoggedIn,student,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{read:'yes',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
              
              
              
              
              
              
              router.post('/delete',isLoggedIn,student,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{status:'deleted',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
                router.get('/compose',isLoggedIn,student,  function(req,res){
                  var num = req.user.inboxNo
                  var sent = req.user.sent
                  var pro = req.user
                  res.render('messagesStudents/compose',{num:num,sent:sent,pro:pro})
                })
              
               
                router.post('/userX',isLoggedIn,student,function(req,res){
                  var id =req.user.id
                  var arr = []
                  User.find({},function(err,docs){
                    console.log(docs.length,'length')
                    for(var i = 0; i< docs.length;i++){
              if(docs[i]._id != id){
              console.log(docs[i]._id,'success')
              arr.push(docs[i])
              }else
              console.log(docs[i]._id,'failed')
              
                    }
                    res.send(arr)
                  })
                })
              
              
              
              router.post('/dataX',isLoggedIn,student,function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var numDate = m.valueOf()
              var date = m.toString()
              var senderId = req.user._id
              var senderName = req.user.fullname
              var senderPhoto = req.user.photo
              var senderEmail = req.user.email
              var arr = []
            
              
              var uid = req.user._id
              
              
              
              console.log(req.body['code[]'])
              let code = req.body['code[]']
              var sub = req.body.code1
              let msg = req.body.code2
              
              
              
              var ms = new Message()
              
              ms.senderId = senderId
              ms.senderName = senderName
              ms.senderPhoto = senderPhoto
              ms.senderEmail = senderEmail
              ms.msgId = 'null'
              ms.msg = msg
              ms.status = 'reply'
              ms.status4 = 'null'
              ms.status5 = 'null'
              
              ms.type = 'original'
              ms.subject = sub
              ms.numDate = numDate
              ms.date = date
              
              ms.save().then(ms=>{
              
                Message.findByIdAndUpdate(ms._id,{$set:{msgId:ms._id}},function(err,nocs){
              
                })
                for(var i = 0;i<code.length - 1;i++){
                  User.findById(code[i],function(err,doc){
                 
                  let recepientName = doc.fullname
                  let recepientId = doc._id
                  let recepientEmail = doc.email
                  let msgId = ms._id
                  Recepient.find({msgId:ms._id,recepientId:recepientId},function(err,tocs){
                    let size = tocs.length
                 
               
                    if(tocs.length == 0){
                      let rec = new Recepient()
              
                    
                     
                      rec.msgId = msgId
                      rec.recepientName = recepientName
                      rec.recepientId= recepientId
                      rec.numDate = numDate
                      rec.status = 'active'
                      rec.statusX = 'unmarked'
                      rec.statusXX ='null'
                      rec.statusCheck = 'not viewed'
                      rec.read = 'null'
                      rec.archive = 'null'
                      rec.recepientEmail = recepientEmail
                      rec.save()
              
                    }
                   
              
                  })
                })
              }

              res.send(code)
              })
              
              
              
              
              
              })
              
           
router.get('/reply/:id', isLoggedIn,student, function(req,res){
  var id = req.params.id
  var uid = req.user._id
  var pro = req.user
  console.log(id,'id')
  var arr = []
  var num = req.user.inboxNo
  var sent = req.user.sent
  Message.find({msgId:id,},function(err,tocs){
    console.log(tocs,'tocs')
 arr.push(tocs[0].senderEmail)
 let sub = tocs[0].subject
  Message.find({msgId:id,status:'reply'},function(err,docs){
    Recepient.find({msgId:id},function(err,nocs){
for(var i = 0; i<nocs.length;i++){
console.log(nocs[i].recepientEmail,'email')
arr.push(nocs[i].recepientEmail)


let date = nocs[i].date
let Vid = nocs[i]._id
let timeX = moment(date)
let timeX2 =timeX.fromNow()
let timeX3 =timeX.format("LLL")
console.log(timeX2,'timex2')


Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){



// Format relative time using negative value (-1).

 
})

}
 console.log(arr,'arr')
    
    res.render('messagesStudents/reply',{list:docs,id:id, arr:arr,pro:pro, subject:sub,num:num,sent:sent})
  })
  
  })
})
})

              
              
              
              router.post('/reply/:id', isLoggedIn,student, function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var numDate = m.valueOf()
              var id = req.params.id
              var senderId = req.user._id
              var senderName = req.user.fullname
              var senderEmail = req.user.email
              var sub = req.body.compose_subject
              let msg = 'vocal tone'
              
              Message.findById({msgId:id, },function(err,docs){
              
              
              
              
              
              
              var ms = new Message()
              
              ms.senderId = senderId
              ms.senderName = senderName
              ms.senderEmail = senderEmail
              ms.msgId = id
              ms.msg = msg
              ms.status = 'reply'
              ms.status4 = 'null'
              ms.status5 = 'null'
              ms.type = 'reply'
              ms.numDate = numDate
              ms.subject = sub
              ms.date = date
              
              ms.save().then(ms=>{
              console.log(ms._id,'msgId')
              
              
              
              let date = ms.date
              let Vid = ms._id
              let timeX = moment(date)
              let timeX2 =timeX.fromNow()
              let timeX3 =timeX.format("LLL")
              console.log(timeX2,'timex2')
              
              
              Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
              
              
              
              // Format relative time using negative value (-1).
              
              
              })
              
              })
              
              
              
              })
              
              
              
              
              
              })
              
              
              
              
              router.post('/replyX/:id',isLoggedIn,student,function(req,res){
              console.log(req.body.code1,'code1')
              console.log(req.body['compose_to[]'],'compose_to')
              let code = req.body.code1
              var sub = req.body.code1
              let id = req.params.id
              var arr = []
              Message.find({msgId:id,},function(err,tocs){
              console.log(tocs)
              arr.push(tocs[0].senderId)
              
              Recepient.find({msgId:id},function(err,nocs){
              for(var i = 0; i<nocs.length;i++){
              console.log(nocs[i].recepientId,'email')
              arr.push(nocs[i].recepientId)
              
              }
              
              
              res.send(arr)
              })
              
              })
              
              })
              
              
              router.post('/replyX2/:id',isLoggedIn,student,function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var numDate = m.valueOf()
              var date = m.toString()
              var msgId = req.params.id
              var senderId = req.user._id
              var senderName = req.user.fullname
              var senderPhoto = req.user.photo
              var senderEmail = req.user.email
             
              var uid = req.user._id
              
              
              
              console.log(req.body['code[]'])
              let code = req.body['code[]']
              var sub = req.body.code1
              let msg = req.body.code2
              
              
              
              var ms = new Message()
              
              ms.senderId = senderId
              ms.senderName = senderName
              ms.senderPhoto = senderPhoto
              ms.senderEmail = senderEmail
              ms.msgId = msgId
              ms.msg = msg
              ms.status = 'reply'
              ms.status4 = 'null'
              ms.status5 = 'null'
              ms.type = 'reply'
              ms.numDate = numDate
              ms.subject = sub
              ms.date = date
              
              ms.save().then(ms=>{
              
              
                for(var i = 0;i<code.length - 1;i++){
                  User.findById(code[i],function(err,doc){
                 
                  let recepientName = doc.fullname
                  let recepientId = doc._id
                  let recepientEmail = doc.email
                  
                  Recepient.find({msgId:msgId,recepientId:recepientId},function(err,tocs){
                    let size = tocs.length
                 
               
                    if(tocs.length == 0){
                      let rec = new Recepient()
              
                    
                     
                      rec.msgId = msgId
                      rec.recepientName = recepientName
                      rec.recepientId= recepientId
                      rec.numDate = numDate
                      rec.status = 'active'
                      rec.statusX = 'unmarked'
                      rec.statusXX = 'null'
                      rec.read = 'null'
                      rec.statusCheck = 'not viewed'
                      rec.archive = 'null'
                      rec.recepientEmail = recepientEmail
                      rec.save()
                    }else{
                      Recepient.findByIdAndUpdate(tocs[0]._id,{$set:{statusCheck:"not viewed"}},function(err,locs){
              
              
              
                        // Format relative time using negative value (-1).
                        
                         
                        })
              
                    }
                   
              
                  })
                })
              }
              
              let date = ms.date
              let Vid = ms._id
              let timeX = moment(date)
              let timeX2 =timeX.fromNow()
              let timeX3 =timeX.format("LLL")
              console.log(timeX2,'timex2')
              
              
              Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
              
              
              
              // Format relative time using negative value (-1).
              
              
              })
              res.send(code)
              })
              
              
              })
              
              
              
              router.post('/replyX3/:id',isLoggedIn,student,function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var numDate = m.valueOf()
              var date = m.toString()
              var msgId = req.params.id
              var senderId = req.user._id
              var senderName = req.user.fullname
              var senderPhoto = req.user.photo
              var senderEmail = req.user.email
              var arr = [senderId]
             

              var uid = req.user._id
              
              
              
              console.log(req.body['code[]'],'code')
              let code = req.body['code[]']

              console.log(code,'queens new york')
              var sub = req.body.code1
              let msg = req.body.code2
              
              
              
              var ms = new Message()
              
              ms.senderId = senderId
              ms.senderName = senderName
              ms.senderPhoto = senderPhoto
              ms.senderEmail = senderEmail
              ms.msgId = msgId
              ms.msg = msg
              ms.status = 'reply'
              ms.status4 = 'null'
              ms.status5 = 'null'
              ms.type = 'reply'
              ms.numDate = numDate
              ms.subject = sub
              ms.date = date
              
              ms.save().then(ms=>{
              
              
                for(var i = 0;i<code.length - 1;i++){
                  User.findById(code[i],function(err,doc){
                 
                  let recepientName = doc.fullname
                  let recepientId = doc._id
                  let recepientEmail = doc.email
                
                  Recepient.find({msgId:msgId,recepientId:recepientId},function(err,tocs){
                    let size = tocs.length
                 
               
                    if(tocs.length == 0){
                      let rec = new Recepient()
              
                    
                     
                      rec.msgId = msgId
                      rec.recepientName = recepientName
                      rec.recepientId= recepientId
                      rec.numDate = numDate
                      rec.status = 'active'
                      rec.statusX = 'unmarked'
                      rec.statusXX = 'null'
                      rec.statusCheck = 'not viewed'
                      rec.read = 'null'
                      rec.archive = 'null'
                      rec.recepientEmail = recepientEmail
                      rec.save()
              
                    } else{
              
                    Recepient.findByIdAndUpdate(tocs[0]._id,{$set:{statusCheck:"not viewed"}},function(err,locs){
              
              
              
                      // Format relative time using negative value (-1).
                      
                       
                      })
                    }
                   
              
                  })
                })
              }
              
              let date = ms.date
              let Vid = ms._id
              let timeX = moment(date)
              let timeX2 =timeX.fromNow()
              let timeX3 =timeX.format("LLL")
              console.log(timeX2,'timex2')
              
              
              Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
              
              
              
              // Format relative time using negative value (-1).
              
              
              })
              res.send(code)
              
              })
              })
              
              
              
              
              





router.post('/calendarChart',isLoggedIn,student,function(req,res){
  var uid = req.user.uid
  var class1 = req.user.class1
  var arr = []
 Lesson.find({},function(err,docs){
   /* for(var i = 0;i<docs.length;i++){
      let subjectCode = docs[i].subjectCode

      StudentSub.find({subjectCode:subjectCode,studentId:uid},function(err,nocs){
        console.log(nocs.length,'length')
        if(nocs.length > 0){

      arr.push(docs[i])
     
      
        }
      })
  
    }*/
    
    res.send(docs)
   // console.log(arr,'arr')
  })

})













//role student

router.get('/profile',isLoggedIn,student, function(req,res){
  var id = req.user._id
  var pro = req.user
  User.findById(id,function(err,doc){
    
 
  //var pro = req.user
  res.render('students/overview3',{doc:doc,id:id,pro:doc})
  
})
    
      
  })




  router.get('/subjectsProfile/:id',isLoggedIn,student,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      StudentSub.find({studentId:uid},function(err,locs){
        res.render('users/subjects5',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })

  /*

  router.post('/profile',isLoggedIn,upload.single('file'),function(req,res){
 
    var pro = req.user
  
    if(!req.file){
     req.session.message = {
       type:'errors',
       message:'Select Picture'
     }     
       res.render('student/overview', {
            user:req.body, message:req.session.message,pic:req.user.photo,user:req.user, pro:pro 
        }) 
     
    } else
    var imageFile = req.file.filename;
    var id  = req.user._id;
   console.log(imageFile)
   console.log(id)
    User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
    
    
      
    
    
    })
   
    res.redirect('/student/profile')
  
       //res.render('uploads/index',{title:'Upload File',records:data, success:success})
  
  
     
  
    
   
  })*/
  
  
//student registered subjects
  router.get('/subjects',isLoggedIn,student, function(req,res){
    var pro = req.user
    var uid = req.user.uid
    
    StudentSub.find({studentId:uid},(err, docs) => {
      if (!err) {
          res.render('students/subjects', {
             listX:docs, pro:pro
            
          });
      }
  });


    
  })

  


  //student lesson timetable
router.get('/timetable',isLoggedIn,student, (req, res) => {
  var pro = req.user
    var term = req.user.term
    var class1 = req.user.class1
    var uid = req.user.uid
  
            res.render("students/timetable", {
               pro:pro
              
            });
       
  });


  router.get('/examTimetable',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var m = moment()
    var year = m.format('YYYY')
      var term = req.user.term
      var class1 = req.user.class1
      var uid = req.user.uid
    
              res.render("students/timetableExam", {
                 pro:pro
                
              });
         
    });

  router.get('/events',isLoggedIn,student,function(req,res){
    var pro = req.user
    res.render('students/events',{pro:pro})
  })


//exam timetable student
router.get('/examList',isLoggedIn,student,(req, res) => {
  var pro = req.user
  var m = moment()
  var year = m.format('YYYY')
 var grade = req.user.grade


    Exam.find({uid:grade,year:year},(err, docs) => {
        if (!err) {
            res.render("exam/examListStudent", {
               list:docs,pro:pro
              
            });
        }
    });
  });


   //student results
   /*
   router.get('/results',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var uid= req.user.uid
    var companyId = req.user.companyId
     TestX.find({companyId:companyId,uid:uid, type:'Class Test'},(err, docs) => {
         if (!err) {
             res.render("exam/result", {
                list:docs, pro:pro
               
             });
         }
     });
   });*/
   
//marks

   router.get('/onlineAssgtMarks',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var uid= req.user.uid
    var n = moment()
    var year = n.format('YYYY')
    var term = req.user.term
    
     TestX.find({uid:uid,type2:'online assignment',status3:'recorded',year:year},(err, docs) => {
         if (!err) {
          for(var i = docs.length - 1; i>=0; i--){
  
            arr.push(docs[i])
          }
             res.render("exam/productList", {
                listX:arr, pro:pro
               
             });
         }
     });
   })


   router.post('/onlineAssgtMarks',isLoggedIn,student,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
  var uid = req.user.uid
  var n = moment()
  var year = n.format('YYYY')
 
    var m = moment(date)
  
   
  
    console.log(date.split('-')[0])
    var startDate = date.split('-')[0]
    var endDate = date.split('-')[1]
     var startValueA = moment(startDate)
     var startValueB=startValueA.subtract(1,"days");
     var startValue = moment(startValueB).valueOf()
  
     var endValueA = moment(endDate)
     var endValueB = endValueA.add(1,"days");
     var endValue= moment(endValueB).valueOf()
    console.log(startValue,endValue,'output')
  1
  
          TestX.find({uid:uid,type2:'online assignment',status3:'recorded'},function(err, docs){
  console.log(docs,'777')
      if(docs){
  
  
      for(var i = 0;i<docs.length;i++){
        let sdate = docs[i].dateValue
        if(sdate >= startValue && sdate <= endValue){
  arr.push(docs[i])
  console.log(arr,'arr333')
        }
      }
    }
        
      console.log(arr,'arr')
          res.render("exam/productList", {
            listX:arr,pro:pro
            
          });
      
  
    })
  })
  
   router.get('/onlineQuizMarks',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var n = moment()
    var year = n.format('YYYY')
    var term = req.user.term
    var uid= req.user.uid

     TestX.find({uid:uid,type2:'online quiz',status3:'recorded',term:term,year:year},(err, docs) => {
         if (!err) {
          for(var i = docs.length - 1; i>=0; i--){
  
            arr.push(docs[i])
          }
             res.render("exam/productList2", {
                listX:arr, pro:pro
               
             });
         }
     });
   })
   


   router.post('/onlineQuizMarks',isLoggedIn,student,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
   
    var term = req.user.term
  var uid = req.user.uid
  var n = moment()
  var year = n.format('YYYY')
    
    var m = moment(date)
  
   
  
    console.log(date.split('-')[0])
    var startDate = date.split('-')[0]
    var endDate = date.split('-')[1]
     var startValueA = moment(startDate)
     var startValueB=startValueA.subtract(1,"days");
     var startValue = moment(startValueB).valueOf()
  
     var endValueA = moment(endDate)
     var endValueB = endValueA.add(1,"days");
     var endValue= moment(endValueB).valueOf()
    console.log(startValue,endValue,'output')
  
  
  TestX.find({uid:uid,type2:'online quiz',status3:'recorded',term:term,year:year},function(err, docs){
  console.log(docs,'777')
      if(docs){
  
  
      for(var i = 0;i<docs.length;i++){
        let sdate = docs[i].dateValue
        if(sdate >= startValue && sdate <= endValue){
  arr.push(docs[i])
  console.log(arr,'arr333')
        }
      }
    }
        
      console.log(arr,'arr')
          res.render("exam/productList2", {
            listX:arr,pro:pro
            
          });
      
  
    })
  })


   router.get('/offlineAssgtMarks',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var uid= req.user.uid
    var n = moment()
    var year = n.format('YYYY')
    var term = req.user.term

     TestX.find({uid:uid,type3:'class',term:term,year:year/*type2:'offline'*/},(err, docs) => {
         if (!err) {
          for(var i = docs.length - 1; i>=0; i--){
  
            arr.push(docs[i])
          }
             res.render("exam/productList3", {
                listX:arr, pro:pro
               
             });
         }
     });
   })




   router.post('/offlineAssgtMarks',isLoggedIn,student,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
  var uid = req.user.uid
  var n = moment()
  var year = n.format('YYYY')
 
    
    var m = moment(date)
  
   
  
    console.log(date.split('-')[0])
    var startDate = date.split('-')[0]
    var endDate = date.split('-')[1]
     var startValueA = moment(startDate)
     var startValueB=startValueA.subtract(1,"days");
     var startValue = moment(startValueB).valueOf()
  
     var endValueA = moment(endDate)
     var endValueB = endValueA.add(1,"days");
     var endValue= moment(endValueB).valueOf()
    console.log(startValue,endValue,'output')
  
  
    TestX.find({uid:uid,type3:'class',term:term,year:year},function(err, docs){
  //console.log(docs,'777')
      if(docs){
  
  
      for(var i = 0;i<docs.length;i++){
        let sdate = docs[i].dateValue
        if(sdate >= startValue && sdate <= endValue){
  arr.push(docs[i])
  console.log(arr,'arr333')
        }
      }
    }
        
      console.log(arr,'arr')
          res.render("exam/productList3", {
            listX:arr,pro:pro
            
          });
      
  
    })
  })





   router.get('/results',isLoggedIn,student, (req, res) => {
    var pro = req.user
    var m = moment()
    var year = m.format('YYYY')
    var uid= req.user.uid
 
     TestX.find({uid:uid,year:year},(err, docs) => {
         if (!err) {
           let arr = []
          for(var i = docs.length - 1; i>=0; i--){
  
            arr.push(docs[i])
          }
             res.render("exam/productList", {
                list:arr, pro:pro
               
             });
         }
     });
   })
//view assignment

router.get('/viewAssignment/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user.uid
 Test.findById(id,function(err,doc){
res.render('students/assgt2',{doc:doc,pro:pro})
  })

})

   //student results - final exam
   router.get('/examResults',isLoggedIn,student,  (req, res) => {
    var uid= req.user.uid
    var pro = req.user
    var m = moment()
    var year = m.format('YYYY')

     TestX.find({uid:uid, type:'Final Exam',year:year},(err, docs) => {
         if (!err) {
           let arr= []
          for(var i = docs.length - 1; i>=0; i--){
  
            arr.push(docs[i])
          }
             res.render("exam/resultX", {
                list:arr,pro:pro
               
             });
         }
     });
   });
//////////////////////////////////marks

//////marks assessments
router.get('/folder',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
  var arr = []
  User.findById(id,function(err,doc){
    if(doc){

   
    let uid = doc.uid
    let teacherName = doc.fullname
    StudentSub.find({studentId:uid},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('studentFolder/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})


////

router.get('/typeFolder/:id',isLoggedIn,student,function(req,res){
  var pro = req.user
  var id = req.params.id
  
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName


  



    res.render('studentFolder/fileAssgt2',{id:id,pro:pro,subject:subject,class1:class1})



}
})
})


router.get('/typeFolder2/:id',isLoggedIn,student,function(req,res){
  var pro = req.user
  var id = req.params.id
  
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName


  



    res.render('studentFolder/fileAssgt22',{id:id,pro:pro,subject:subject,class1:class1})



}
})
})



router.get('/typeFolderOnlineTest/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var year = 2023
  var pro = req.user
  var uid = req.user.uid
  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName

     
 
  
 
  

    TestX.find({uid:uid,class1:class1,subjectCode:subjectCode,year:year,type2:'online quiz'},(err, docs) => {
      if (!err) {
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
          res.render("studentFolder/assgtX4", {
            listX:arr,pro:pro,studentSubId:studentSubId,id:id,
        subjectName:subjectName,class1:class1
            
          });
      }
  });
 
}
})
  
  })

router.get('/typeFolderTest/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var pro = req.user
  var uid = req.user.uid
  StudentSub.findById(id,function(err,doc){
    if(doc){

      console.log(doc,"doc")
   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName

     
 
  
 
  

    TestX.find({uid:uid,class1:class1,subjectCode:subjectCode,year:year,type:'Class Test',type2:'offline'},(err, docs) => {
      if (!err) {
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
          res.render("studentFolder/assgtX1", {
            listX:arr,pro:pro,studentSubId:studentSubId,id:id,
        subjectName:subjectName,class1:class1
            
          });
      }
  });
 
}
})
  
  })


  

  router.post('/typeFolderTest/:id',isLoggedIn,student,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
    var uid = req.user.uid
 
  var n = moment()
  var year = n.format('YYYY')
    
    var m = moment(date)
  
   
  
    console.log(date.split('-')[0])
    var startDate = date.split('-')[0]
    var endDate = date.split('-')[1]
     var startValueA = moment(startDate)
     var startValueB=startValueA.subtract(1,"days");
     var startValue = moment(startValueB).valueOf()
  
     var endValueA = moment(endDate)
     var endValueB = endValueA.add(1,"days");
     var endValue= moment(endValueB).valueOf()
    console.log(startValue,endValue,'output')
  
    StudentSub.findById(id,function(err,doc){
      if(doc){
  
        let studentSubId = doc._id
        let subjectCode = doc.subjectCode
        let subject = doc.subjectName
      
        TestX.find({uid:uid,class1:class1,subjectCode:subjectCode,year:year,type:'Class Test'},(err, docs) => {
  console.log(docs,'777')
      if(docs){
  
  
      for(var i = 0;i<docs.length;i++){
        let sdate = docs[i].dateValue
        if(sdate >= startValue && sdate <= endValue){
  arr.push(docs[i])
  console.log(arr,'arr333')
        }
      }
    }
        
      console.log(arr,'arr')
      res.render("studentFolder/assgtX1", {
        listX:docs,pro:pro,studentSubId:studentSubId,id:id,
    subjectName:subject
        
      });
      

      })
    }
    })
  })
  


  router.get('/typeFolderClass/:id',isLoggedIn,student,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var m = moment()
var year = m.format('YYYY')
    var pro = req.user
    var uid = req.user.uid
    StudentSub.findById(id,function(err,doc){
      if(doc){
  
     
      let class1 = doc.class1
      let studentSubId = doc._id
      let subjectCode = doc.subjectCode
      let subjectName = doc.subjectName
  
       
   
    
   
    
  
      TestX.find({uid:uid,class1:class1,subjectCode:subjectCode,year:year,type:'Class Assignment'},(err, docs) => {
        if (!err) {
          let arr=[]
          for(var i = docs.length - 1; i>=0; i--){
      
            arr.push(docs[i])
          }
            res.render("studentFolder/assgtX7", {
              listX:arr,pro:pro,studentSubId:studentSubId,id:id,
          subjectName:subjectName,class1:class1
              
            });
        }
    });
   
  }
  })
    
    })
    
/////

router.get('/typeFolderClass2/:id',isLoggedIn,student,function(req,res){
  var pro = req.user
  var id = req.params.id
  
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName


  



    res.render('studentFolder/fileAssgt33',{id:id,pro:pro,subject:subject,class1:class1})



}
})
})



router.get('/typeFolderOnlineAssgt/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var pro = req.user
  var uid = req.user.uid
  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName

     
 
  
 
  

    TestX.find({uid:uid,subjectCode:subjectCode,year:year,type2:'online assignment',status3:'recorded'},(err, docs) => {
      if (!err) {
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
          res.render("studentFolder/assgtX44", {
            listX:arr,pro:pro,studentSubId:studentSubId,id:id,
        subjectName:subjectName,class1:class1
            
          });
      }
  });
 
}
})
  
  })



  

router.get('/typeFolderOffAssgt/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var pro = req.user
  var uid = req.user.uid
  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName

     
 
  
 
  

    TestX.find({uid:uid,subjectCode:subjectCode,year:year,type2:'offline',status3:'recorded'},(err, docs) => {
      if (!err) {
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
          res.render("studentFolder/assgtX55", {
            listX:arr,pro:pro,studentSubId:studentSubId,id:id,
        subjectName:subjectName,class1:class1
            
          });
      }
  });
 
}
})
  
  })


    

    

    router.post('/typeFolderClass/:id',isLoggedIn,student,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term
      var uid = req.user.uid
   
    var n = moment()
    var year = n.format('YYYY')
      
      var m = moment(date)
    
     
    
      console.log(date.split('-')[0])
      var startDate = date.split('-')[0]
      var endDate = date.split('-')[1]
       var startValueA = moment(startDate)
       var startValueB=startValueA.subtract(1,"days");
       var startValue = moment(startValueB).valueOf()
    
       var endValueA = moment(endDate)
       var endValueB = endValueA.add(1,"days");
       var endValue= moment(endValueB).valueOf()
      console.log(startValue,endValue,'output')
    
      StudentSub.findById(id,function(err,doc){
        if(doc){
    
          let studentSubId = doc._id
          let subjectCode = doc.subjectCode
          let subject = doc.subjectName
        
          TestX.find({uid:uid,subjectCode:subjectCode,year:year,type:'Class Assignment'},(err, docs) => {
    console.log(docs,'777')
        if(docs){
    
    
        for(var i = 0;i<docs.length;i++){
          let sdate = docs[i].dateValue
          if(sdate >= startValue && sdate <= endValue){
    arr.push(docs[i])
    console.log(arr,'arr333')
          }
        }
      }
          
        console.log(arr,'arr')
        res.render("studentFolder/assgtX7", {
          listX:docs,pro:pro,studentSubId:studentSubId,id:id,
      subjectName:subject
          
        });
        
  
        })
      }
      })
    })
    
  
  router.get('/typeFolderExam/:id',isLoggedIn,student,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var pro = req.user
    var uid = req.user.uid
    StudentSub.findById(id,function(err,doc){
      if(doc){
  
     
      let class1 = doc.class1
      let studentSubId = doc._id
      let subjectCode = doc.subjectCode
      let subjectName = doc.subjectName
  
       
   
    
   
    
  
      TestX.find({uid:uid,class1:class1,subjectCode:subjectCode,year:year,type:'Final Exam'},(err, docs) => {
        if (!err) {
          let arr=[]
          for(var i = docs.length - 1; i>=0; i--){
      
            arr.push(docs[i])
          }
            res.render("studentFolder/assgtX3", {
              listX:arr,pro:pro,studentSubId:studentSubId,id:id,
          subjectName:subjectName,class1:class1
              
            });
        }
    });
   
  }
  })
    
    })
    



    
  router.post('/typeFolderExam/:id',isLoggedIn,student,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
    var uid = req.user.uid
 
  var n = moment()
  var year = n.format('YYYY')
    
    var m = moment(date)
  
   
  
    console.log(date.split('-')[0])
    var startDate = date.split('-')[0]
    var endDate = date.split('-')[1]
     var startValueA = moment(startDate)
     var startValueB=startValueA.subtract(1,"days");
     var startValue = moment(startValueB).valueOf()
  
     var endValueA = moment(endDate)
     var endValueB = endValueA.add(1,"days");
     var endValue= moment(endValueB).valueOf()
    console.log(startValue,endValue,'output')
  
    StudentSub.findById(id,function(err,doc){
      if(doc){
  
        let studentSubId = doc._id
        let subjectCode = doc.subjectCode
        let subject = doc.subjectName
      
        TestX.find({uid:uid,subjectCode:subjectCode,year:year,type:'Final Exam'},(err, docs) => {
  console.log(docs,'777')
      if(docs){
  
  
      for(var i = 0;i<docs.length;i++){
        let sdate = docs[i].dateValue
        if(sdate >= startValue && sdate <= endValue){
  arr.push(docs[i])
  console.log(arr,'arr333')
        }
      }
    }
        
      console.log(arr,'arr')
      res.render("studentFolder/assgtX3", {
        listX:docs,pro:pro,studentSubId:studentSubId,id:id,
    subjectName:subject
        
      });
      

      })
    }
    })
  })
  


   router.get('/report/:id',isLoggedIn,student,  (req, res) => {
    var uid= req.user.uid
    var id = req.params.id
    var pro = req.user
   
    TestX.find({_id:id},(err,nocs)=>{
let term = nocs[0].term
let year = nocs[0].year
     TestX.find({uid:uid, type:'Final Exam',term:term, year:year},(err, docs) => {
         if (!err) {
             res.render("students/studentReport", {
                list:docs,pro:pro
               
             });
         }
     });
    })
   });



   router.get('/termInfo',isLoggedIn,student,  function(req,res){
    var m = moment()
    var pro = req.user
    var year = m.format('YYYY')
    var term = req.user.term


  
  FeesUpdate.find({term:term, year:year},(err, docs) => {
      if (!err) {
          res.render("students/newTerm", {
             list:docs, pro:pro
            
          });
      }
  });
    
      })

//////type folders


router.get('/repo',isLoggedIn,student,function(req,res){
  var pro = req.user


    res.render('repositoryS/fileAssgt2',{pro:pro})
 

})

router.get('/reports',isLoggedIn,student,function(req,res){
  var pro = req.user


    res.render('repositoryS/fileAssgtReports',{pro:pro})
 

})



/////
router.get('/monthlyReports',isLoggedIn,student,function(req,res){
  var pro = req.user
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  var uid = req.user.uid

    Report.find({uid:uid,year:year,type:"Monthly Assessment"},function(err,docs){

      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }

    res.render('repositoryS/filesMonthly',{pro:pro,listX:arr,month:month,year:year})
 
  })
})

///////////termly reports
router.get('/termlyReports',isLoggedIn,student,function(req,res){
  var pro = req.user
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  var uid = req.user.uid

    Report.find({uid:uid,year:year,type:"Final Exam"},function(err,docs){

      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }

    res.render('repositoryS/filesTermly',{pro:pro,listX:arr,month:month,year:year})
 
  })
})


router.get('/assgtRepo',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
  var arr = []
  User.findById(id,function(err,doc){
    if(doc){

   
    let uid = doc.uid
    let teacherName = doc.fullname
    StudentSub.find({studentId:uid},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('repositoryS/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})


////////////////////////

router.get('/assgtFiles/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
var year = m.format('YYYY')
  var pro = req.user
  StudentSub.findById(id,function(err,doc){
       if(doc){

      
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subject = doc.subjectName
    
    
    Test.find({subjectCode:subjectCode,term:term,year:year,type2:'online assignment attached'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('repositoryS/files',{listX:arr,pro:pro,studentSubId:studentSubId,
        subject:subject,id:id
      })
   
  
})
}
})
  
  })

  /*router.get('/downloadAssgt/:id',isLoggedIn,student,function(req,res){
    Test.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      res.download( './public/uploads/'+name, name)
    })  
  
  })*/
  router.get('/downloadAssgt/:id',(req,res)=>{
    var fileId = req.params.id
    
 
  
  //const bucket = new GridFsStorage(db, { bucketName: 'uploads' });
  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
  
    console.log(files[0].filename,'files9')
  let filename = files[0].filename
  let contentType = files[0].contentType
  

      res.set('Content-disposition', `attachment; filename="${filename}"`);
      res.set('Content-Type', contentType);
      bucket.openDownloadStreamByName(filename).pipe(res);
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })
  
  









  

router.get('/typeFolderMaterial',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
  var arr = []
  User.findById(id,function(err,doc){
    if(doc){

   
    let uid = doc.uid
    let teacherName = doc.fullname
    StudentSub.find({studentId:uid},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('repositoryS/folders3',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})



router.get('/materialFiles/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  let arr=[]
var year = m.format('YYYY')
  var pro = req.user
  StudentSub.findById(id,function(err,doc){
       if(doc){

      
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subject = doc.subjectName
    
    
    Learn.find({subjectCode:subjectCode,term:term,year:year},function(err,locs){
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('repositoryS/filesX',{listX:arr,pro:pro,studentSubId:studentSubId,
        subject:subject,id:id
      })
   
  
})
}
})
  
  })

  

  /*router.get('/downloadMaterial/:id',isLoggedIn,student,function(req,res){
    Learn.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      res.download( './public/uploads/'+name, name)
    })  
  
  })*/


  router.get('/downloadMaterial/:id',(req,res)=>{
    var fileId = req.params.id
    
 
  
  //const bucket = new GridFsStorage(db, { bucketName: 'uploads' });
  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
  
    console.log(files[0].filename,'files9')
  let filename = files[0].filename
  let contentType = files[0].contentType
  

      res.set('Content-disposition', `attachment; filename="${filename}"`);
      res.set('Content-Type', contentType);
      bucket.openDownloadStreamByName(filename).pipe(res);
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })
  
  
  

  router.get('/downloadMonthlyReport/:id',isLoggedIn,student,function(req,res){
    var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
    Report.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      res.download( './reports/'+year+'/'+month+'/'+name, name)
    })  
  
  })


  router.get('/downloadTermlyReport/:id',isLoggedIn,student,function(req,res){
    var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
    Report.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      res.download( './reportsExam/'+year+'/'+month+'/'+name, name)
    })  
  
  })


  router.get('/feesRecord',isLoggedIn,student, function(req,res){
       var pro = req.user
    res.redirect('/student/feesRecordX')
  })
  
  router.get('/feesRecordX',isLoggedIn,student, function(req,res){
    var pro = req.user
    var id = req.user.paymentId
    var uid = req.user.uid
    var use
  
    Fees.find({paymentId:id},function(err,docs){
      User.find({uid:uid},function(err,nocs){
      use = nocs[0]
    
      res.render('accounts/pd',{user:docs[0],use:use, pro:pro})
    })
  })
    
  })
  
  //role - student
  //payment records
  router.get('/paymentRecords',isLoggedIn,student, (req, res) => {
   var id = req.user.uid
      var pro = req.user
     
    Fees.find({uid:id},(err, docs) => {
        if (!err) {
            res.render("accounts/list", {
               list:docs,pro:pro
              
            });
        }
    });
  });
  
  
  router.get('/paymentRecord',isLoggedIn,student,  (req, res) => {
    var id = req.user.uid
    var pro = req.user

     Fees.find({uid:id},(err, docs) => {
         if (!err) {
             res.render("accounts/list", {
                list:docs, pro:pro
               
             });
         }
     });
   });
   
   
  




router.get('/onlinePayment',isLoggedIn,student, function(req,res){
  var id = req.user.feesUpdate
  var fees
  var pro = req.user


res.render('accounts/subscriptions',{fees:fees, pro:pro})

    

 

})


router.get('/onlinePaymentX3',isLoggedIn,student, function(req,res){
  var pro = req.user

  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new  Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      var m = moment()
      var uid = req.user.uid;
      var fullname = req.user.fullname;
      var class1 = req.user.class1;
      var date = moment().toString();
      var term = req.user.term;
      var year = m.format('YYYY')
      var month = m.format('MMMM')
      var amount = req.user.fees
      var receiptNumber = 'null'
      var method = 'paynow';
      var paymentId, id = req.user._id;

      var companyId = req.user.companyId
      let payment = paynow.createPayment("Invoice 35");


// Add items to the payment list passing in the name of the item and it's price
payment.add("fees", amount);
// Send off the payment to Paynow
paynow.send(payment).then( (response) => {

    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;

        var poll = new Poll();
 
        poll.pollUrl = pollUrl;
        poll.studentId = uid;
        poll.fullname = fullname;
        poll.date = date;
        poll.amount = amount
        poll.companyId = companyId
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl:pollUrl,paynow:amount}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
           

    }else{
      console.log("transaction failed")
    }
  })
      
})





router.get('/onlinePaymentX4',isLoggedIn,student, function(req,res){
  var pro = req.user
  var companyId = req.user.companyId

  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new  Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      var m = moment()
      var uid = req.user.uid;
      var fullname = req.user.fullname;
      var class1 = req.user.class1;
      var date = moment().toString();
      var term = req.user.term;
      var year = m.format('YYYY')
      var month = m.format('MMMM')
      var amount = req.user.annual
      var receiptNumber = 'null'
      var method = 'paynow';
      var paymentId, id = req.user._id;


      let payment = paynow.createPayment("Invoice 35");


// Add items to the payment list passing in the name of the item and it's price
payment.add("fees", amount);
// Send off the payment to Paynow
paynow.send(payment).then( (response) => {

    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;

        var poll = new Poll();
 
        poll.pollUrl = pollUrl;
        poll.studentId = uid;
        poll.fullname = fullname;
        poll.date = date;
        poll.amount = amount
        poll.companyId = companyId
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl:pollUrl,paynow:amount}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
           

    }else{
      console.log("transaction failed")
    }
  })
      
})
















router.post('/payNowX',isLoggedIn, function(req,res){

  var companyId = req.user.companyId
    const { Paynow } = require("paynow");
    // Create instance of Paynow class
    let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
        var m = moment()
        var uid = req.user.uid;
        var fullname = req.user.fullname;
        var class1 = req.user.class1;
        var date = moment().toString();
        var term = req.user.term;
        var year = m.format('YYYY')
        var month = m.format('MMMM')
        var amount = req.user.fees
        var receiptNumber = 'null'
        var method = 'paynow';
        var paymentId, id = req.user._id;
  
  
        let payment = paynow.createPayment("Invoice 35");
  
  
  // Add items to the payment list passing in the name of the item and it's price
  payment.add("fees", amount);
  // Send off the payment to Paynow
  paynow.send(payment).then( (response) => {
  
      if(response.success) {
          // Get the link to redirect the user to, then use it as you see fit
          let link = response.redirectUrl;
  
          // Save poll url, maybe (recommended)?
          let pollUrl = response.pollUrl;
  
          var poll = new Poll();
   
          poll.pollUrl = pollUrl;
          poll.studentId = uid;
          poll.fullname = fullname;
          poll.date = date;
          poll.amount = amount;
          poll.companyId = companyId
          poll.save()
             .then(poll =>{
             
              User.findByIdAndUpdate(id,{$set:{pollUrl:pollUrl,paynow:amount}},function(err,docs){
                 
                 
                   
                 
              })
          
  
  
  
                res.redirect(link)
             })
             
  
      }else{
        console.log("transaction failed")
      }
    })
        
  })
  

















router.get('/status',isLoggedIn, function(req,res){

  
  // Create instance of Paynow class
  let paynow = new Paynow("14628", "0b05a9bd-6779-4a6f-9da7-48e03cb96a67");
 let pollUrl="https://www.paynow.co.zw/Interface/CheckPayment/?guid=aff0830e-9275-482a-b5f2-4c6ed0cbc35a";

  let status = paynow.pollTransaction(pollUrl)

  paynow.pollTransaction(pollUrl).then(transaction => {
  console.log(transaction.status)
  console.log(transaction.amount)

    })


})



//
router.post('/dataXX/:id',function(req,res){
  console.log('clone')
  var id = req.params.id
  Test.findById(id,function(err,doc){
res.send(doc)
  })
})
//Online Quiz

router.get('/quiz/:id',isLoggedIn,student,function(req,res){
  var id = req.params.id
  res.render('onlineQuiz/index',{id:id})
})

router.post('/quest',isLoggedIn,student,function(req,res){
var id = req.user._id
var code = req.body.code
Question.find({studentId:id,quizId:code,status2:'activated'},(err,docs)=>{
console.log(docs,'docs')
  res.send(docs)
})
})


router.post('/quest/:id',isLoggedIn,student,function(req,res){
var id = req.params.id
var code = req.body.code
Question.findByIdAndUpdate(id,{$set:{stdAns:code}},function(err,doc){
 console.log(doc,'doc')
let stdAns = doc.stdAns
let answer = doc.answer
let activeNum = doc.stdAns
activeNum++

if(answer == code){
  Question.findByIdAndUpdate(id,{$set:{finalAns:'correct',activeNum:activeNum}},function(err,poc){
console.log('yes')

})
}
else
  {

Question.findByIdAndUpdate(id,{$set:{finalAns:'wrong',activeNum:activeNum}},function(err,not){
  console.log('yes')
      })

    }





res.send(doc)
})
})



router.post('/back/:id',function(req,res){
var id = req.params.id
var arr

Question.findById(id,function(err,doc){

res.send(doc)
})
})


router.post('/fquest/',isLoggedIn,function(req,res){
var code = req.body.code
var arr

console.log(code,'code')
var studentId = req.user._id
var m = moment()
var year = m.format('YYYY')
var month = m.format('MMMM')
var mformat = m.format("L")
var numDate = m.valueOf()
  
  Question.find({quizId:code,finalAns:'correct',studentId:studentId},function(err,docs){
    let mark = docs.length
Question.find({quizId:code,studentId:studentId},function(err,tocs){
let possibleMark = tocs.length
for(var i = 0;i<tocs.length;i++){

  Question.findByIdAndUpdate(tocs[i]._id,{$set:{status:'completed'}},function(err,nocs){

  })
}

Test.find({quizId:code},function(err,vocs){
console.log(vocs,'vocs jt')
let subjectCode = vocs[0].subjectCode
let subject = vocs[0].subject
let topic = vocs[0].topic
let fullname = req.user.fullname
let uid = req.user.uid
let quizId = vocs[0].quizId
let date = vocs[0].date
let grade = vocs[0].grade
let icon = vocs[0].icon
let class1 = vocs[0].class1
let percentageX = mark / possibleMark
let percentage = percentageX * 100
let teacherId = vocs[0].teacherId
let teacherName = vocs[0].teacherName
let term = vocs[0].term
let type = vocs[0].type
var test = new TestX();
test.uid = uid;
test.fullname = fullname;
test.grade = grade;
test.class1 = class1;
test.teacher = teacherName
test.teacherId = teacherId;
test.mark = mark;
test.year = year
test.month = month
test.symbol = 'null';
test.term = term
test.result = "null";
test.subject = subject
test.subjectCode = subjectCode
test.date = date
test.percentage = percentage
test.possibleMark = possibleMark;
test.type = type
test.topic = topic
test.quizId = quizId
test.fileId = "null"
test.filename = "null"

test.type3 = 'class'
test.status3 = 'recorded'
test.displayFormatS = 'null'
test.submissionStatus = 'null'
test.type2 = 'online quiz'
test.color = 'null'
test.style = 'null'
test.icon = icon
test.deadline = 'null'
test.size = 0
test.dateValue = numDate
test.dateValueD =0
test.status = 'null'
test.displayFormat = 'null'
test.mformat = mformat
test.mformatD = 0
test.question = 0;
test.assignmentId = 'null'
test.filename = 'null'
test.mformatS = 'null'
test.dateValueS = 0
test.photo = req.user.photo

test.save()
.then(tes =>{
  
Grade.find({},function(err,qocs){

for(var i = 0; i<qocs.length; i++){
let symbol = qocs[i].symbol
let from = qocs[i].from
let to = qocs[i].to

if(percentage >= from && percentage <= to ){
TestX.findByIdAndUpdate(tes._id,{$set:{symbol:symbol}},function(err,mocs){


})



}
}


})

if(percentage >= 50){

TestX.findByIdAndUpdate(tes._id,{$set:{result:'pass'}},function(err,ocs){


})
}else

TestX.findByIdAndUpdate(tes._id,{$set:{result:'fail'}},function(err,wocs){



})




})





})






})


     res.send(docs)
  })
 


   })
   



router.get('/test',function(req,res){
  Question.find({},(err,docs)=>{
      console.log(docs)
      // res.send(docs)
     })
})












//exam































//notifications

router.post('/not/:id',isLoggedIn,student,function(req,res){
  var m = moment()
  var date = m.toString()

var id = req.params.id
  Note.find({recId:id},function(err,docs){
    for(var i = 0; i<docs.length; i++){
      let nId = docs[i]._id

      Note.findByIdAndUpdate(nId,{$set:{status:'viewed',dateViewed:date}},function(err,locs){

      })
    }

    res.send('success')
  })
})




router.get('/update',isLoggedIn,student,function(req,res){
var m = moment()
let n = m.valueOf()
var id = req.user._id

Note.find({recId:id},function(err,docs){

for(var i = 0; i<docs.length;i++){
let value = docs[i].numDate
let num = n - value
let nId = docs[i]._id

if(num >= 86000000){
  Note.findByIdAndUpdate(nId,{$set:{status1:'old'}},function(err,nocs){


  })
}

}


})



})

router.get('/nots',isLoggedIn,student, function(req,res){
  var m = moment();
var id = req.user._id
  Note.find({recId:id,status:'viewed'},function(err,docs){
    for(var i = 0;i<docs.length;i++){
      let duration =moment(docs[i].dateViewed)
      let days=m.diff(duration,"days");
      let nId = docs[i]._id
console.log(days,'days')
     if(days > 0){
Note.findByIdAndUpdate(nId,{$set:{status2:'expired',status1:'old'}},function(err,nocs){

})
     }
    }
  })


})

router.get('/nList',isLoggedIn,student,function(req,res){
  var id = req.user._id
  var m = moment()
  console.log(m.valueOf(),'crap')
  Note.find({recId:id},function(err,docs){
    if(!err){

   
    res.render('messagesStudents/notList',{list:docs})

    }
  })
})

router.get('/notify/:id', isLoggedIn,student, function(req,res){
  var id = req.params.id
  var uid = req.user._id
  console.log(id,'id')
  var arr = []
  Note.find({recId:uid,_id:id},function(err,tocs){

let subject = tocs[0].subject
let message = tocs[0].message
let type = tocs[0].type
let quizId = tocs[0].quizId
console.log(quizId,'quizId')
if(type == 'exam'){
  res.render('messagesStudents/notView2',{message:message, subject:subject,quizId:quizId})
}

else

    
    res.render('messagesStudents/notView',{message:message, subject:subject})
  })

})








module.exports = router;



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else{
        res.redirect('/')
    }
  }
  
  
  
  
  function student(req,res,next){
    if(req.user.role == 'student'){
      return next()
    }
    res.redirect('/')
    }  

    function status(req,res,next){
      if(req.user.status3 == 'activated'){
        return next()
      }
      res.render('errors/student')
      }  
  
