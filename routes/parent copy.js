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
//const stripe = require('stripe')('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');
const stripe = require('stripe')(' sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol');
const keys = require('../config1/keys')
var mongoose = require('mongoose')
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




//upload asignment
var uploadModel = require('../models/upload');
const Voucher = require('../models/voucher');

var router = express.Router();

var imageData= uploadModel.find({})


var Storage = multer.diskStorage({
  destination:'./public/uploads/',
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

var upload = multer({
  storage:Storage
}).single('file');
//student Dashboard



// change password
router.get('/pass',isLoggedIn,parent, (req, res) => {
  var pro = req.user
    User.findById(req.user._id, (err, doc) => {
        if (!err) {
            res.render("parents/change", {
               
                user: doc, pro:pro
              
            });
        }
    });
  });
  
  
  
  router.post('/pass',isLoggedIn,parent, function(req,res){
    var user = new User();
    var pro = req.user
    req.check('password','Enter New Password').notEmpty();
  
    req.check('confirmPassword', 'Confirm Password').notEmpty();
  
  
  req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
  var errors = req.validationErrors();
  
  
  
  
   if (errors) {
  
   
  
      req.session.errors = errors;
      req.session.success = false;
      res.render('parents/change',{ title: 'User Update', user:req.body, errors:req.session.errors, pro:pro
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
        res.render('parents/change',{message:req.session.message, user:req.user, pro:pro
         }); }
      else {
        console.log('error'+err)
  
      }
    
  })
  }
  
  
  
  })
  
  
/*
  router.get('/card',isLoggedIn,parent,function(req,res){
    var id = req.user._id
var term =  req.user.term
var m = moment()
var year = m.format('YYYY')
var companyId = req.user.companyId
var uid = req.user.studentId

console.log('zzz')

StudentDB.find({companyId:companyId,year:year,term:term,uid:uid},function(err,docs){

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
    student.companyId = companyId

    student.save()
.then(pas =>{
StudentSub.find({studentId:uid},function(err,nocs){
  let subjects = nocs.length
  console.log(subjects,'card')
  let pendingAssignments 
  let pendingQuiz
  TestX.find({uid:uid,type2:'online assignment',submissionStatus:'pending',term:term,year:year},function(err,locs){
pendingAssignments = locs.length
console.log(pendingAssignments,'pending')
TestX.find({type2:'online quiz',examStatus:'pending',term:term,year:year},function(err,tocs){
  pendingQuiz = tocs.length


  StudentDB.findByIdAndUpdate(pas._id,{$set:{subjects:subjects,pendingAssignments:pendingAssignments,pendingQuiz:pendingQuiz}},function(err,kocs){

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
      let pendingQuiz
      TestX.find({uid:uid,type2:'online assignment',submissionStatus:'pending',term:term,year:year},function(err,locs){
    pendingAssignments = locs.length
    console.log(pendingAssignments,'pending')
    TestX.find({type2:'online quiz',examStatus:'pending',term:term,year:year},function(err,tocs){
      pendingQuiz = tocs.length
    
    
      StudentDB.findByIdAndUpdate(idn,{$set:{subjects:subjects,pendingAssignments:pendingAssignments,pendingQuiz:pendingQuiz}},function(err,kocs){
    
      })
    })
      })
     
    })
  }

  res.redirect('/parent/avgMarkUpdate')
})

  })





  router.get('/avgMarkUpdate',isLoggedIn,function(req,res){
    
    var term = req.user.term
    var uid = req.user.studentId     
                       
                       
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
            element.percentage = element.percentage / element.size
            console.log(element.mark,'mark')
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
   res.redirect('/parent/passRate')
    })
  
  })*/
router.get('/passRate',isLoggedIn,parent,function(req,res){
  let totalexams, examsPassed, passRate;
  let numberOfMarks, totalMarks, avgMark;
  var m = moment()
  var year = m.format('YYYY')
  var term = req.user.term
  var uid = req.user.studentId
  var fullname = req.user.fullname;
  var companyId = req.user.companyId
  var studentId = req.user.uid
  var clas6 = req.user.class1
   var m = moment()
   var year = m.format('YYYY')
   var marks, marks2
   var arr1=[]
   var number1
console.log(studentId, 'studentId')
    
   StudentExamRate.find({companyId:companyId,year:year,term:term, studentId:studentId, class1:clas6},function(err,docs){
 
     if(docs.length == 0){
 
       TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Final Exam' },function(err,hods){
 
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Final Exam'},function(err,lods){
       /*  if(hods.length >=1){*/
 
 
          totalexams = hods.length;
          examsPassed = lods.length
          passRate = examsPassed / totalexams * 100
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
 
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6},function(err,shods){
 
          TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6},function(err,slods){
        /*  if(shods.length >=1){*/
console.log(shods)
console.log(slods)
  
           totalexams = shods.length;
           examsPassed = slods.length
           passRate = examsPassed / totalexams * 100
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
         res.redirect('/parent/passRateX')
       
 
         })
   
    
        
        
      
  
         
         
 
   })

  

   
router.get('/passRateX',isLoggedIn,parent,function(req,res){
  let totalexams, examsPassed, passRate;
  let numberOfMarks, totalMarks, avgMark;
  var m = moment()
  var year = m.format('YYYY')
  var term = req.user.term
  var uid = req.user.uid
  var fullname = req.user.fullname;
  var studentId = req.user.studentId
  var clas6 = req.user.class1
  console.log(clas6,"class++")
 
   var marks, marks2
   var arr1=[]
   var number1
   var companyId = req.user.companyId





    
   StudentClassRate.find({companyId:companyId,year:year,term:term, studentId:studentId, class1:clas6, type:"Class Test"},function(err,docs){
 console.log(docs,'buda')
     if(docs.length == 0){
  
 
       TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Class Test', class1:clas6},function(err,hods){
 
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Class Test'},function(err,lods){
       /*  if(hods.length >=1){*/
 
 
          totalexams = hods.length;
          examsPassed = lods.length
          let pRate = examsPassed / totalexams * 100
          passRate = Math.round(pRate)
          passRate.toFixed(2)
          //element.percentage =num
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
             pass.companyId = companyId
 
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
 
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Class Test",class1:clas6, },function(err,hods){
 
          TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId, type:"Class Test",class1:clas6},function(err,lods){
         /* if(hods.length >=1){*/
  
  
           totalexams = hods.length;
           examsPassed = lods.length
          // passRate = examsPassed / totalexams * 100
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
       
         res.redirect('/parent/passRateY')
 
         })
   
    
        
        
     
  
         
         
 
   })

  



   router.get('/passRateY',isLoggedIn,parent,function(req,res){
    let totalexams, examsPassed, passRate;
    let numberOfMarks, totalMarks, avgMark;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    var uid = req.user.uid
    var fullname = req.user.fullname;
    var studentId = req.user.studentId
    var clas6 = req.user.class1
     var m = moment()
     var year = m.format('YYYY')
     var marks, marks2
     var arr1=[]
     var number1
     var companyId = req.user.companyId
  console.log(studentId, 'studentId')
      
     StudentExamRate.find({companyId:companyId,year:year, studentId:studentId, class1:clas6},function(err,docs){
   
       if(docs.length == 0){
   
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Final Exam' },function(err,hods){
   
           TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Final Exam'},function(err,lods){
         /*  if(hods.length >=1){*/
   
   
            totalexams = hods.length;
            examsPassed = lods.length
            passRate = examsPassed / totalexams * 100
            numberOfMarks = hods.length;
            console.log('numberOfMarks',numberOfMarks)
  
            for(var q = 0;q<hods.length; q++){
    
              arr1.push(hods[q].prcentage)
                }
                //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                 totalMarks=0;
                for(var z in arr1) { totalMarks += arr1[z]; }
   
                avgMark = totalMarks / numberOfMarks
               
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
   
           TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6},function(err,shods){
   
            TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6},function(err,slods){
          /*  if(shods.length >=1){*/
  console.log(shods)
  console.log(slods)
    
             totalexams = shods.length;
             examsPassed = slods.length
             passRate = examsPassed / totalexams * 100
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
           res.redirect('/parent/passRateYY')
         
   
           })
     
      
          
          
        
    
           
           
   
     })
  
    
  
     
  router.get('/passRateYY',isLoggedIn,parent,function(req,res){
    let totalexams, examsPassed, passRate;
    let numberOfMarks, totalMarks, avgMark;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    var uid = req.user.uid
    var fullname = req.user.fullname;
    var studentId = req.user.studentId
    var clas6 = req.user.class1
     var m = moment()
     var year = m.format('YYYY')
     var marks, marks2
     var arr1=[]
     var number1
     var companyId = req.user.companyId
  
  
  
  
  
      
     StudentClassRate.find({companyId:companyId,year:year, studentId:studentId, class1:clas6},function(err,docs){
   
       if(docs.length == 0){
   
         TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Class Test', class1:clas6},function(err,hods){
   
           TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Class Test'},function(err,lods){
         /*  if(hods.length >=1){*/
   
   
            totalexams = hods.length;
            examsPassed = lods.length
           // passRate = examsPassed / totalexams * 100
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
               pass.companyId = companyId
   
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
   
           TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Class Test",class1:clas6, },function(err,hods){
   
            TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId, type:"Class Test",class1:clas6},function(err,lods){
           /* if(hods.length >=1){*/
    
    
             totalexams = hods.length;
             examsPassed = lods.length
             //passRate = examsPassed / totalexams * 100
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
         
           res.redirect('/parent/subRate')
   
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






  

    router.get('/subRate',isLoggedIn,parent,function(req,res){
      let totalexams, examsPassed, passRate;
      let numberOfMarks, totalMarks, avgMark;
      var m = moment()
      var year = m.format('YYYY')
      var term = req.user.term
      var uid = req.user.studentId
      var fullname = req.user.fullname;
      var companyId = req.user.companyId
      var studentId = req.user.studentId
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
 
     console.log(subjectCode,'subjectCode')
       SubRate.find({companyId:companyId,year:year,term:term, studentId:studentId, class1:clas6,subjectCode:subjectCode},function(err,docs){
     
         if(docs.length == 0){
     
           TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Class Test',subjectCode:subjectCode },function(err,hods){
     
             TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Class Test',subjectCode:subjectCode},function(err,lods){
           /*  if(hods.length >=1){*/
     
     
              totalexams = hods.length;
              examsPassed = lods.length
              //passRate = examsPassed / totalexams * 100
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
                 
                 var pass =SubRate();
                 pass.firstTerm = 0;
                 pass.firstAvgMark = 0
                 pass.secondTerm= 0;
                 pass.secondAvgMark = 0
                 pass.thirdTerm = 0
                 pass.thirdAvgMark=0;
                 pass.studentId = studentId;
                 pass.class1 = clas6
                 pass.subject = subjectName
                 pass.subjectCode = subjectCode
                 pass.term = term
                 pass.type = 'Class Test';
                 pass.year = year
                 pass.companyId = companyId
     
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
     
             TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Class Test",class1:clas6,subjectCode:subjectCode},function(err,shods){
     
              TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId,type:"Class Test",class1:clas6,subjectCode:subjectCode},function(err,slods){
            /*  if(shods.length >=1){*/
    console.log(shods)
    console.log(slods)
      
               totalexams = shods.length;
               examsPassed = slods.length
               //passRate = examsPassed / totalexams * 100
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
            res.redirect('/parent/subRateX')
          })
             
             
     
       })
    




       router.get('/subRateX',isLoggedIn,parent,function(req,res){
        let totalexams, examsPassed, passRate;
        let numberOfMarks, totalMarks, avgMark;
        var m = moment()
        var year = m.format('YYYY')
        var term = req.user.term
        var uid = req.user.studentId
        var fullname = req.user.fullname;
        var companyId = req.user.companyId
        var studentId = req.user.studentId
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
   
       console.log(subjectCode,'subjectCode')
         SubRateX.find({companyId:companyId,year:year,term:term, studentId:studentId, class1:clas6,subjectCode:subjectCode},function(err,docs){
       
           if(docs.length == 0){
       
             TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:'Final Exam',subjectCode:subjectCode },function(err,hods){
       
               TestX.find({companyId:companyId,term:term,year:year,uid:studentId, result:'pass', type:'Final Exam',subjectCode:subjectCode},function(err,lods){
             /*  if(hods.length >=1){*/
       
       
                totalexams = hods.length;
                examsPassed = lods.length
                passRate = examsPassed / totalexams * 100
                numberOfMarks = hods.length;
                console.log('numberOfMarks',numberOfMarks)
      
                for(var q = 0;q<hods.length; q++){
        
                  arr1.push(hods[q].percentage)
                    }
                    //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                     totalMarks=0;
                    for(var z in arr1) { totalMarks += arr1[z]; }
       
                    avgMark = totalMarks / numberOfMarks
                   
                   var pass =SubRateX();
                   pass.firstTerm = 0;
                   pass.firstAvgMark = 0
                   pass.secondTerm= 0;
                   pass.secondAvgMark = 0
                   pass.thirdTerm = 0
                   pass.thirdAvgMark=0;
                   pass.studentId = studentId;
                   pass.class1 = clas6
                   pass.subject = subjectName
                   pass.subjectCode = subjectCode
                   pass.term = term
                   pass.type = 'Final Exam';
                   pass.year = year
                   pass.companyId = companyId
       
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
       
               TestX.find({companyId:companyId,term:term,year:year,uid:studentId, type:"Final Exam",class1:clas6,subjectCode:subjectCode},function(err,shods){
       
                TestX.find({companyId:companyId,term:term,year:year, result:'pass',uid:studentId,type:"Final Exam",class1:clas6,subjectCode:subjectCode},function(err,slods){
              /*  if(shods.length >=1){*/
      console.log(shods)
      console.log(slods)
        
                 totalexams = shods.length;
                 examsPassed = slods.length
                 passRate = examsPassed / totalexams * 100
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
             res.redirect('/parent/dash')
            })
               
               
       
         })
      
  
       router.post('/subChart',isLoggedIn,parent,function(req,res){
        var m = moment()
        var year = m.format('YYYY')
        var term = req.user.term
        var uid = req.user.studentId
        var companyId = req.user.companyId
              SubRate.find({companyId:companyId,year:year,studentId:uid, term:term},function(err,docs){
                if(docs == undefined){
                  res.redirect('/dash')
                }else
            
                   res.send(docs)
               
                
                 })
            
            })
      
      //passChartX
            router.post('/subChartX',isLoggedIn,parent,function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var term = req.user.term
              var uid = req.user.studentId
              var companyId = req.user.companyId
                    SubRateX.find({companyId:companyId,year:year,studentId:uid, term:term},function(err,docs){
                      if(docs == undefined){
                        res.redirect('/dash')
                      }else
                  
                         res.send(docs)
                     
                      
                       })
                  
                  })





                  router.post('/dashChart1',isLoggedIn,parent,function(req,res){
                    var uid = req.user.studentId
                    var size
              
                    var m = moment()
                    var year = m.format('YYYY')
                    var arr = []
                    var id = req.user._id
                    var term = req.user.term
                
                     
                    
                 
                    
                    
                      TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                        console.log(docs,'docs')
                        for(var i = 0;i<docs.length;i++){
                    size = docs.length
                       
                            
                           if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                  console.log('true')
                                 arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                            }else{
                    arr.push(docs[i])
                            }
                    
                        
                        }
                      let result = arr.map(function(element){
                        element.percentage  = element.percentage / size
                        console.log(element.mark,'mark')
                        let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                      })
                        //console.log(arr,'arr')
                       res.send(arr)
                      })
                  
                    })
                    


                    router.post('/dashChart02',isLoggedIn,parent,function(req,res){
                      var uid = req.user.studentId
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
                          console.log(docs,'docs')
                          for(var i = 0;i<docs.length;i++){
                      size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                    console.log('true')
                                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                              }else{
                      arr.push(docs[i])
                              }
                      
                          
                          }
                        let result = arr.map(function(element){
                          element.percentage  = element.percentage / size
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
                      
                      router.post('/dashChart3',isLoggedIn,parent,function(req,res){
                     
                        var term = req.user.term
                        var uid = req.user.studentId
                       
                       
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
  
                          let resultX = arr.map(function(element){
                            element.size = 0
                            element.size = element.size + 1
                              })
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
              

                      router.post('/dashChart4',isLoggedIn,parent,function(req,res){
                     
                        var term = req.user.term
                        var uid = req.user.studentId
                       
                       
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
  
                          let resultX = arr.map(function(element){
                            element.size = 0
                            element.size = element.size + 1
                              })
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
              
              
              
                      router.post('/dashChart05',isLoggedIn,parent,function(req,res){
                        var uid = req.user.studentId
                       
                     
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

                      let resultX = arr.map(function(element){
                        element.size = 0
                        element.size = element.size + 1
                          })
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
              
              
              

                    router.post('/dashChartP1',isLoggedIn,parent,function(req,res){
                      var uid = req.user.studentId
                      var size
                
                      var m = moment()
                      var year = m.format('YYYY')
                      var arr = []
                      var id = req.user._id
                      var term = req.body.term
                  
                       
                      
                   
                      
                      
                        TestX.find({year:year,term:term,uid:uid},function(err,docs) {
                          console.log(docs,'docs')
                          for(var i = 0;i<docs.length;i++){
                      size = docs.length
                         
                              
                             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                    console.log('true')
                                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                              }else{
                      arr.push(docs[i])
                              }
                      
                          
                          }
                        let result = arr.map(function(element){
                          element.percentage  = element.percentage / size
                          console.log(element.mark,'mark')
                          let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                        })
                          //console.log(arr,'arr')
                         res.send(arr)
                        })
                    
                      })
                      
                      router.post('/dashChartP2',isLoggedIn,parent,function(req,res){
                        var uid = req.user.studentId
                        var size
                  
                        var m = moment()
                        var year = m.format('YYYY')
                        var arr = []
                        var id = req.user._id
                        var term = req.body.term
                        var subjectCode = req.body.subject
                    
                    console.log(term,subjectCode,'wwwww')
                         
                     
                        
                        
                          TestX.find({year:year,subjectCode:subjectCode,term:term,uid:uid},function(err,docs) {
                            console.log(docs,'docs')
                            for(var i = 0;i<docs.length;i++){
                        size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                                      console.log('true')
                                     arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                                }else{
                        arr.push(docs[i])
                                }
                        
                            
                            }
                          let result = arr.map(function(element){
                            element.percentage  = element.percentage / size
                            console.log(element.mark,'mark')
                            let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
                          })
                            //console.log(arr,'arr')
                           res.send(arr)
                          })
                      
                     
                        })
                        
  


                        router.post('/dashChartP3',isLoggedIn,function(req,res){
                     
                          var term = req.body.term
                          
                         var uid = req.user.studentId
                         
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

                        let resultX = arr.map(function(element){
                          element.size = 0
                          element.size = element.size + 1
                            })
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
                
                

                        router.post('/dashChartP5',isLoggedIn,parent,function(req,res){
                          var uid = req.user.studentId
                          var term = req.body.term
                          let type = req.body.type
                         
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

                        let resultX = arr.map(function(element){
                          element.size = 0
                          element.size = element.size + 1
                            })
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
                
                


                        router.post('/dashChartP6',isLoggedIn,parent,function(req,res){
                          var uid = req.user.studentId
                          var term = req.body.term
                          let type = req.body.type
                         
                         
                          var m = moment()
                          var year = m.format('YYYY')
                          var arr = []
                          var id = req.user._id
                        
                          
                        
                        
                        
                          TestX.find({year:year,term:term,type:type},function(err,docs) {
                            if(docs){

                       
                            for(var i = 0;i<docs.length;i++){
                              size = docs.length
                           
                                
                               if(arr.length > 0 && arr.find(value => value.subject == docs[i].subject)){
                                      console.log('true')
                                     arr.find(value => value.subject == docs[i].subject).percentage += docs[i].percentage;
                                     arr.find(value => value.subject == docs[i].subject).size++;
                                }else{
                        arr.push(docs[i])

                        let resultX = arr.map(function(element){
                          element.size = 0
                          element.size = element.size + 1
                            })
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
                
                
        
                        

                        

                        router.post('/dashChartP7',isLoggedIn,parent,function(req,res){
                          var uid = req.user.studentId
                          var term = req.body.term
                          let subjectCode = req.body.subjectCode
                         
                         
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

                        let resultX = arr.map(function(element){
                          element.size = 0
                          element.size = element.size + 1
                            })
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
                
                
                
                
/*
     router.get('/dash',isLoggedIn, function(req,res){
      var pro = req.user
      const arr = []
    const m = moment();
    var uid = req.user.studentId
    var class1 = req.user.class1
      var id =req.user._id
      var mformat = m.format("L")
        Recepient.find({recepientId:id,statusCheck:'not viewed'},function(err,rocs){
          let lgt = rocs.length
          var gt = lgt > 0
        
              console.log(req.user._id)
              console.log(req.user.email)
                Note.find({recId:req.user._id},function(err,docs){
                  console.log(docs,'docs')
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
                Calendar.find({userRole:"all"},function(err,yocs){
                  var productChunksX = [];
                  var chunkSizeX = 1;
                  for (var i = 0; i <5; i += chunkSizeX) {
                      productChunksX.push(yocs.slice(i, i + chunkSizeX));
                  }
        
                Lesson.find({class1:class1},function(err,vocs){
                  var productChunks = [];
                  var chunkSize = 1;
                  for (var i = 0; i <5; i += chunkSize) {
                      productChunks.push(vocs.slice(i, i + chunkSize));
                  }
                res.render('parents/student',{pro:pro,list:arr,listX:vocs, les:les,gt:gt,products: productChunks,events:productChunksX })
        
              })
            })
              
              })
            })
            })
        
        
     
      })
    })
    */

      //student perfomance2
      /*
router.get('/parent',isLoggedIn,function(req,res){
  var uid = req.user.studentId
  console.log(uid)
  StudentSub.find({studentId:uid},function(err,docs){

    res.render('parents/student2',{listX:docs})
  })

  })*/





    
  router.get('/dash',isLoggedIn,parent,function(req,res){
   
  var uid = req.user.studentId
   var pro = req.user
   
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
  let resultX = arr.map(function(element){
element.size = 0
element.size = element.size + 1
  })
          }
  
      
      }
      let result = arr.map(function(element){
        element.percentage  = element.percentage / element.size
        console.log(element.mark,'mark')
        if(element.percentage < 50){
          element.color = "progress-bar bg-danger"
        }else{
          element.color = "progress-bar bg-success"
        }
      })
      console.log(arr,'arr')
    // res.send(arr)
    res.render('dashboard/parent',{listX:arr,pro:pro})
    })
  
  })
  //student perfomance
router.get('/analytics',isLoggedIn,parent,function(req,res){
  var uid = req.user.studentId
  StudentSub.find({studentId:uid},function(err,docs){
    res.render('parents/index3',{arr:docs,listX:docs})
  })

})
//Final Exam

     router.post('/studentPassChart',isLoggedIn,parent,function(req,res){
      var m = moment()
      var year = m.format('YYYY')
      var uid = req.user.studentId
      var term = req.user.term
      var companyId = req.user.companyId
            StudentExamRate.find({companyId:companyId,year:year, term:term, studentId:uid},function(err,docs){
              if(docs == undefined){
                res.redirect('/parent/dash')
              }else
          
                 res.send(docs)
             
              
               })
          
          })


  //Class Test
          router.post('/studentPassChart2',isLoggedIn,parent,function(req,res){
            var m = moment()
            var year = m.format('YYYY')
            var uid = req.user.studentId
            var term = req.user.term
            var companyId = req.user.companyId
                  StudentClassRate.find({companyId:companyId,year:year, term:term,studentId:uid},function(err,docs){
                    if(docs == undefined){
                      res.redirect('/parent/dash')
                    }else
                
                       res.send(docs)
                   
                    
                     })
                
                })
      



                router.get('/assignments',isLoggedIn,parent,function(req,res){
                  var uid = req.user.studentId
                  var pro = req.user
                 TestX.find({uid:uid,type2:'online assignment',submissionStatus:'pending'},function(err,docs){
                    res.render('parents/assgt',{listX:docs,pro:pro})
                  })
                
                })

                router.get('/onlineQuiz',isLoggedIn,parent,function(req,res){
                  var uid = req.user.uid
                  var pro = req.user
                  var class1 = req.user.class1
                  var arr = []
                  Test.find({class1:class1,type2:'online quiz',status:'unactivated'},function(err,locs){
                    res.render('parents/quiz',{listX:locs,pro:pro})
                  })


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
                    res.render('students/assgt',{listX:arr})
                  })*/
                /*
                })*/

/*
                router.get('/assignments/:id',isLoggedIn,function(req,res){
                  res.render('students/uploads')
                })
*/


router.get('/assignments/:id',isLoggedIn,parent,function(req,res,next){
  var id = req.params.id
  var pro = req.user
  console.log(id,'id')
  var successMsg = req.flash('success')[0];
  
   
      res.render('students/uploads',{id:id,successMsg: successMsg,noMessages: !successMsg,pro:pro})

  
})

router.post('/assignments/:id',upload,isLoggedIn,parent,function(req,res){
  var id = req.params.id
  var m = moment()
  var filename = req.file.filename;
  var mformat = m.format("L")
  var displayFormat = m.format('MMMM Do YYYY')
  var dateValueOf = m.valueOf()

 TestX.findByIdAndUpdate(id,{$set:{filename:filename,dateValueS:dateValueOf,displayFormatS:displayFormat,submissionStatus:'submitted'}},function(err,docs){

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

  






























                router.get('/msgUpdate',isLoggedIn,parent,function(req,res){
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
                  
                  router.get('/sentUpdate',isLoggedIn,parent,function(req,res){
                    var id = req.user._id
                    Message.find({senderId:id},function(err,docs){
                      let size = docs.length
                      User.findByIdAndUpdate(id,{$set:{sent:size}},function(err,nocs){
                  
                      })
                    })
                  })
                  













                router.get('/msgX',isLoggedIn,parent,function(req,res){
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
                
              res.redirect('/parent/msg')
              })
              
              })
              
              
              
              
              
              
              
              
              
              
              
              
              router.get('/msg',isLoggedIn,parent,function(req,res){
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
              res.render('messagesParents/inbox',{list:list, num:num, sent:sent,pro:pro})
              })
              
              })
              
              
              
              
              
              //on click dashboard icon & msg redirect
              router.post('/msg/:id',isLoggedIn,parent,function(req,res){
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
              
              
              router.get('/sentXX',isLoggedIn,parent,function(req,res){
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
              res.redirect('/parent/sent')
              })
              
              })
              
              
              
              
              
              router.get('/sent',isLoggedIn,parent,function(req,res){
              var id = req.user.id
              const list2 =[]
              const list = []
              var num = req.user.inboxNo
              var sent = req.user.sent
               var pro = req.user
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
              
              
              res.render('messagesParents/sent',{list:list, num:num,sent:sent,pro:pro})
              })
              
              })
              
              
              
              router.get('/archiveXX',isLoggedIn,parent,function(req,res){
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
              res.redirect('/parent/archive')
              
              })
              
              })
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              router.get('/archive',isLoggedIn,parent,function(req,res){
              var id = req.user.id
              const list2 =[]
              const list = []
              var num = req.user.inboxNo
              var pro = req.user
              
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
              
              res.render('messagesParents/sent',{list:list, num:num,sent:sent,pro:pro})
                     
              })
              
              })
              
              
              
              
              router.post('/marked',isLoggedIn,parent,function(req,res){
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
              
              router.post('/archiveX',isLoggedIn,parent,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{archive:'yes',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
              
              router.post('/readX',isLoggedIn,parent,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{read:'yes',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
              
              
              
              
              
              
              router.post('/delete',isLoggedIn,parent,function(req,res){
              
              let id = req.user.id
              Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
              
              for(var i = 0; i<docs.length;i++){
              
              
              Recepient.findByIdAndUpdate(docs[i]._id,{$set:{status:'deleted',statusXX:'yes'}},function(err,nocs){
              
              })
              
              }
              
              res.send(docs)
              })
              })
              
              
                router.get('/compose',isLoggedIn,parent,  function(req,res){
                  var num = req.user.inboxNo
                  var sent = req.user.sent
                  var pro = req.user
                  res.render('messagesParents/compose',{num:num,sent:sent,pro:pro})
                })
              
               
                router.post('/userX',isLoggedIn,parent,function(req,res){
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
              
              
              
              router.post('/dataX',isLoggedIn,parent,function(req,res){
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
              
           
router.get('/reply/:id', isLoggedIn,parent, function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user._id
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
    
    res.render('messagesParents/reply',{list:docs,id:id, arr:arr, subject:sub,num:num,sent:sent,pro:pro})
  })
  
  })
})
})

              
              
              
              router.post('/reply/:id', isLoggedIn,parent, function(req,res){
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
              
              
              
              
              router.post('/replyX/:id',isLoggedIn,parent,function(req,res){
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
              
              
              router.post('/replyX2/:id',isLoggedIn,parent,function(req,res){
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
              
              
              
              router.post('/replyX3/:id',isLoggedIn,parent,function(req,res){
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
              
              
              
      
router.get('/files',isLoggedIn,parent,function(req,res){
  var pro = req.user
  var studentId = req.user.studentId
  StudentSub.find({studentId:studentId},function(err,docs){
    res.render('parents/folders2',{listX:docs,pro:pro})

  })

})
        
              
router.get('/classAssignment/:id',isLoggedIn,parent,function(req,res){
  var pro = req.user
  var id = req.params.id
StudentSub.findById(id,function(err,doc){
  if(doc){

 
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

 


    res.render('parents/fileAssgt2',{id:id,pro:pro,subject:subject,class1:class1})
  }
  })

})








/*
router.get('/classTest/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var year = 2023
  var pro = req.user
  StudentSub.findById(id,function(err,doc){
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName
    
  
     
 
  
 
    Test.find({class1:class1,   subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,locs){
      
      res.render('parents/assgtX1',{listX:locs,pro:pro,id:id,
        subjectName:subjectName,class1:class1})
    })
  })

  
})*/

router.get('/viewTest/:id',isLoggedIn,parent,function(req,res){
  var id = req.params.id
  var pro = req.user
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var studentId = req.user.studentId
StudentSub.findById(id,function(err,loc){
if(loc){


  let subjectCode = loc.subjectCode
let subject = loc.subjectName
let studentId = loc.studentId




 TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Class Test'},function(err,docs){


res.render('parents/assgtList',{listX:docs,id:id,pro:pro,id:id,subject:subject,subjectCode:subjectCode})


})
}
})
})


router.post('/viewTest/:id',isLoggedIn,parent,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
var studentId = req.user.studentId
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

  StudentSub.findById(id,function(err,loc){
    if(loc){
    

      let subjectCode = loc.subjectCode
    let subject = loc.subjectName
    let studentId = loc.studentId
    console.log(subjectCode,'code')


  TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Class Test'},function(err, docs){
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
        res.render("parents/assgtList", {
          listX:arr,id:id,pro:pro,id:id,subject:subject
          
        });
    
});
    }
  })
  })
  




    router.get('/viewClassAssignment/:id',isLoggedIn,parent,function(req,res){
      var id = req.params.id
      var pro = req.user
      var term = req.user.term
      var m = moment()
      var year = m.format('YYYY')
      var studentId = req.user.studentId
    StudentSub.findById(id,function(err,loc){
    if(loc){

    
      let subjectCode = loc.subjectCode
    let subject = loc.subjectName
    let studentId = loc.studentId
    
    
    
    
     TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Class Assignment'},function(err,docs){
    
    
    res.render('parents/assgtList2',{listX:docs,id:id,pro:pro,id:id,subject:subject})
    
    })
  }
    })
    })
    



    router.post('/viewClassAssignment/:id',isLoggedIn,parent,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term
    var studentId = req.user.studentId
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
    
      StudentSub.findById(id,function(err,loc){
        if(loc){
        
    
          let subjectCode = loc.subjectCode
        let subject = loc.subjectName
        let studentId = loc.studentId
        console.log(subjectCode,'code')
    
    
      TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Class Assignment'},function(err, docs){
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
            res.render("parents/assgtList2", {
              listX:arr,id:id,pro:pro,id:id,subject:subject
              
            });
        
    });
        }
      })
      })
      

      router.get('/viewExam/:id',isLoggedIn,parent,function(req,res){
        var id = req.params.id
        var pro = req.user
        var term = req.user.term
        var m = moment()
        var year = m.format('YYYY')
        var studentId = req.user.studentId
      StudentSub.findById(id,function(err,loc){
      if(loc){

     
        let subjectCode = loc.subjectCode
      let subject = loc.subjectName
      let studentId = loc.studentId
      
      
      
      
       TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Exam'},function(err,docs){
      
      
      res.render('parents/assgtList3',{listX:docs,id:id,pro:pro,id:id,subject:subject})
      
      })
    }
      })
      })
      


      router.post('/viewExam/:id',isLoggedIn,parent,function(req,res){
        var pro =req.user
      var id = req.params.id
        var date = req.body.date
        var arr = []
        var term = req.user.term
      var studentId = req.user.studentId
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
      
        StudentSub.findById(id,function(err,loc){
          if(loc){
          
      
            let subjectCode = loc.subjectCode
          let subject = loc.subjectName
          let studentId = loc.studentId
          console.log(subjectCode,'code')
      
      
        TestX.find({uid:studentId,term:term,year:year,subjectCode:subjectCode,type:'Class Assignment'},function(err, docs){
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
              res.render("parents/assgtList3", {
                listX:arr,id:id,pro:pro,id:id,subject:subject
                
              });
          
      });
          }
        })
        })
        


router.post('/calendarChart',isLoggedIn,parent,function(req,res){
  var uid = req.user.uid
  var class1 = req.user.class1
  var arr = []
 Lesson.find({class1:class1},function(err,docs){
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

router.get('/profile',isLoggedIn,parent, function(req,res){
   
  var pro = req.user
      res.render('parents/overview2',{pro:pro})
    
      
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
  router.get('/subjects',isLoggedIn,parent, function(req,res){
    var pro = req.user
    var uid = req.user.studentId
    var companyId = req.user.companyId
    StudentSub.find({companyId:companyId,studentId:uid},(err, docs) => {
      if (!err) {
          res.render('parents/subjects', {
             listX:docs, pro:pro
            
          });
      }
  });


    
  })

  


  //student lesson timetable
router.get('/timetable',isLoggedIn,parent, (req, res) => {
  var pro = req.user
    var term = req.user.term
    var class1 = req.user.class1
    var uid = req.user.studentId
  
            res.render("parents/timetable", {
               pro:pro
              
            });
       
  });


  router.get('/examTimetable',isLoggedIn,parent, (req, res) => {
    var pro = req.user
      var term = req.user.term
      var class1 = req.user.class1
      var uid = req.user.studentId
    
              res.render("parents/timetableExam", {
                 pro:pro
                
              });
         
    });

  router.get('/events',isLoggedIn,parent,function(req,res){
    var pro = req.user
    res.render('parents/events',{pro:pro})
  })


//exam timetable student
router.get('/examList',isLoggedIn,parent,(req, res) => {
  var pro = req.user
 var grade = req.user.grade
 var companyId = req.user.companyId
    Exam.find({companyId:companyId,grade:grade},(err, docs) => {
        if (!err) {
            res.render("parents/examListStudent", {
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
   


   router.get('/results',isLoggedIn,parent, (req, res) => {
    var pro = req.user
    var uid= req.user.studentId
    var companyId = req.user.companyId
     TestX.find({companyId:companyId,uid:uid},(err, docs) => {
         if (!err) {
             res.render("parents/productList", {
                list:docs, pro:pro
               
             });
         }
     });
   })
//view assignment

router.get('/viewAssignment/:id',isLoggedIn,parent,function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user.studentId
 Test.findById(id,function(err,doc){
res.render('parents/assgt2',{doc:doc,pro:pro})
  })

})

   //student results - final exam
   router.get('/examResults',isLoggedIn,parent,  (req, res) => {
    var uid= req.user.studentId
    var pro = req.user
    var companyId = req.user.companyId
     TestX.find({companyId:companyId,uid:uid, type:'Final Exam'},(err, docs) => {
         if (!err) {
             res.render("parents/resultX", {
                list:docs,pro:pro
               
             });
         }
     });
   });


   router.get('/report/:id',isLoggedIn,parent,  (req, res) => {
    var uid= req.user.uid
    var id = req.params.id
    var pro = req.user
    var companyId = req.user.companyId
    TestX.find({_id:id},(err,nocs)=>{
let term = nocs[0].term
let year = nocs[0].year
     TestX.find({companyId:companyId,uid:uid, type:'Final Exam',term:term, year:year},(err, docs) => {
         if (!err) {
             res.render("students/studentReport", {
                list:docs,pro:pro
               
             });
         }
     });
    })
   });



   router.get('/termInfo',isLoggedIn, parent, function(req,res){
    var m = moment()
    var pro = req.user
    var year = m.format('YYYY')
    var term = req.user.term
    var companyId = req.user.companyId

  
  FeesUpdate.find({companyId:companyId,term:term, year:year},(err, docs) => {
      if (!err) {
          res.render("students/newTerm", {
             list:docs, pro:pro
            
          });
      }
  });
    
      })


  
  router.get('/feesRecord',isLoggedIn, function(req,res){
       var pro = req.user
    res.redirect('/student/feesRecordX',{pro:pro})
  })
  
  router.get('/feesRecordX',isLoggedIn, function(req,res){
    var pro = req.user
    var id = req.user.paymentId
    var uid = req.user.uid
    var use
    var companyId = req.user.companyId
    Fees.find({companyId:companyId,paymentId:id},function(err,docs){
      User.find({uid:uid},function(err,nocs){
      use = nocs[0]
    
      res.render('accounts/pd',{user:docs[0],use:use, pro:pro})
    })
  })
    
  })
  
  //role - student
  //payment records
  router.get('/paymentRecords',isLoggedIn, (req, res) => {
   var id = req.user.uid
      var pro = req.user
      var companyId = req.user.companyId
    Fees.find({companyId:companyId,uid:id},(err, docs) => {
        if (!err) {
            res.render("accounts/list", {
               list:docs,pro:pro
              
            });
        }
    });
  });
  
  
  router.get('/paymentRecord',isLoggedIn, (req, res) => {
    var id = req.user.uid
    var pro = req.user
    var companyId = req.user.companyId
     Fees.find({companyId:companyId,uid:id},(err, docs) => {
         if (!err) {
             res.render("accounts/list", {
                list:docs, pro:pro
               
             });
         }
     });
   });
   
   
  




router.get('/onlinePayment',isLoggedIn, function(req,res){
  var id = req.user.feesUpdate
  var fees
  var pro = req.user


res.render('accounts/subscriptions',{fees:fees, pro:pro})

    

 

})


router.get('/onlinePaymentX3',isLoggedIn, function(req,res){
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





router.get('/onlinePaymentX4',isLoggedIn, function(req,res){
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



router.get('/testUpdate',function(req,res){
  Test.find(function(err,docs){
    console.log(docs,'docs')
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

router.get('/quiz/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  res.render('onlineQuiz/index',{id:id})
})

router.post('/quest',isLoggedIn,function(req,res){
var id = req.user._id
var code = req.body.code
Question.find({studentId:id,quizId:code,status2:'activated'},(err,docs)=>{
console.log(docs,'docs')
  res.send(docs)
})
})


router.post('/quest/:id',isLoggedIn,function(req,res){
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
var companyId = req.user.companyId
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
test.companyId= companyId


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

router.post('/not/:id',isLoggedIn,parent,function(req,res){
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




router.get('/update',isLoggedIn,parent,function(req,res){
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

router.get('/nots',isLoggedIn,parent, function(req,res){
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

router.get('/nList',isLoggedIn,parent,function(req,res){
  var id = req.user._id
  var pro = req.user
  var m = moment()
  console.log(m.valueOf(),'crap')
  Note.find({recId:id},function(err,docs){
    if(!err){

   
    res.render('messagesParents/notList',{list:docs,pro:pro})

    }
  })
})

router.get('/notify/:id', isLoggedIn,parent, function(req,res){
  var id = req.params.id
  var uid = req.user._id
  var pro = req.user
  console.log(id,'id')
  var arr = []
  Note.find({recId:uid,_id:id},function(err,tocs){

let subject = tocs[0].subject
let message = tocs[0].message
let type = tocs[0].type
let quizId = tocs[0].quizId
console.log(quizId,'quizId')
if(type == 'exam'){
  res.render('messagesParents/notView2',{message:message, subject:subject,quizId:quizId,pro:pro})
}

else

    
    res.render('messagesParents/notView',{message:message, subject:subject,pro:pro})
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
  
  
  
  
  function parent(req,res,next){
    if(req.user.role == 'parent'){
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
  
