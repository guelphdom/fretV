require('dotenv').config();
require("../config5/keys")
var express = require('express');
var router = express.Router();
const User =require('../models/user')
const Setup =require('../models/setup')
const Class1 =require('../models/class');
const Subject =require('../models/subject');
const Fees =require('../models/fees');
const Num =require('../models/num');
const Poll2 =require('../models/poll2');
const Grade =require('../models/grade');
const Subscriptions =require('../models/subscriptions');
const Dept =require('../models/dept');
const Test =require('../models/classTest');
const Lesson =require('../models/lesson');
const Exam =require('../models/exam');
const Income =require('../models/incomeX');
const MonthIncome =require('../models/incomeMonth');
const MonthExpense =require('../models/expenseMonth');
const TestX =require('../models/classTestX');
const Stats =require('../models/stats');
const Gender =require('../models/gender');
const Pass =require('../models/passRate');
const PassX =require('../models/passRateX');
const TeacherClassRate = require('../models/tcPassRateX')
const TeacherExamRate = require('../models/tcPassRate')
const Expenses = require('../models/expenses')
const FeesUpdate =require('../models/feesUpdate');
const StudentSub =require('../models/studentSubject');
const TeacherSub =require('../models/teacherSubject');
const Room =require('../models/room');
var Quiz = require('../models/quiz');
const stripe = require('stripe')('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');
const keys = require('../config1/keys')
var mongoose = require('mongoose')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
var nodemailer = require('nodemailer');
var passport = require('passport')
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
var moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
const { Paynow } = require("paynow");
// Create instance of Paynow class









//startup
router.get('/startup',function(req,res){
 

    res.render('landing/steps1')
    
    })
    
    
    router.post('/startup', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
      
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps1', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/startup/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps1',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps1', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                    })
                      
                        })
                       
      })
      
      
      
    
    //admin account activation route
    
    router.get('/startup/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
        var amount , pollCount, duration
        Subscriptions.find({},function(err,docs){
         // amount = docs[0].startup
         amount = 100
          pollCount = docs[0].startupCount
          duration = docs[0].startupDuration
       
           
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
    
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Startup Quartely Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Startup Quarterly Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                        
                            
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
             
      });
    

      

      //multi steps
router.get('/startupA',function(req,res){
 

    res.render('landing/steps2')
    
    })
    
    
    router.post('/startupA', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
   
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
     
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps2', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/startupA/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps2',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps2', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                    })
                        })
      })
      
      
      
    
    //admin account activation route
    
    router.get('/startupA/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
      var amount , pollCount, duration
      Subscriptions.find({},function(err,docs){
      //  amount = docs[0].startupA
      amount = 100
        pollCount = docs[0].startupCount
        duration = docs[0].startupAduration
       
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
    
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Startup Annual Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Startup Annual Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount,duration:duration}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                        console.log('fuckk')
                            
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
      });
    






















//advanced
router.get('/advanced',function(req,res){
 

    res.render('landing/steps3')
    
    })
    
    
    router.post('/advanced', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
      
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps3', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/advanced/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps3',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps3', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                    })
                        })
                       
      })
      
      
      
    
    //admin account activation route
    
    router.get('/advanced/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
      var amount , pollCount,duration
      Subscriptions.find({},function(err,docs){
       // amount = docs[0].advanced
       amount = 100
        pollCount = docs[0].advancedCount
        duration = docs[0].advancedDuration
       
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
    
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Advanced Quartely Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Advanced Quarterly Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                        console.log('fuckk')
                            
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
      });
    



      //multi advanced
router.get('/advancedA',function(req,res){
 

    res.render('landing/steps4')
    
    })
    
    
    router.post('/advancedA', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
     
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps4', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/advancedA/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps4',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps4', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                    })
                        })
      })
      
      
      
    
    //admin account activation route
    
    router.get('/advancedA/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
      var amount , pollCount, duration
      Subscriptions.find({},function(err,docs){
       // amount = docs[0].advancedA
       amount = 100
        pollCount = docs[0].advancedCount
        duration = docs[0].advancedAduration
         
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
    
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Advanced Annual Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Advanced Annual Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount,duration:duration}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                        console.log('fuckk')
                            
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
      });
    












//advanced
router.get('/enterprise',function(req,res){
 

    res.render('landing/steps5')
    
    })
    
    
    router.post('/enterprise', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
    
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps5', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/enterprise/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps5',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps5', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                      
                        })
                      })
                       
      })
      
      
      
    
    //admin account activation route
    
    router.get('/enterprise/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
      var amount , pollCount, duration
      Subscriptions.find({},function(err,docs){
       // amount = docs[0].enterprise
       amount = 100
        pollCount = docs[0].enterpriseCount
        duration = docs[0].enterpriseDuration
       
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Enterprise Quartely Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Enterprise Quarterly Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                        console.log('fuckk')
                            
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
      });
    






      


//advanced Annual
router.get('/enterpriseA',function(req,res){
 

    res.render('landing/steps6')
    
    })
    
    
    router.post('/enterpriseA', function(req,res){
      var accountType = req.body.account_type;
      var size = req.body.account_team_size;
      var accountName = req.body.account_name;
      var schoolName = req.body.school_name;
      var schoolType = req.body.school_type;
      var businessEmail = req.body.business_email
      var prefix = req.body.prefix;
      var suffix = req.body.suffix;
      var adminName = req.body.admin_name;
      var adminSurname = req.body.admin_surname;
      var fullname = adminName +" "+ adminSurname
      var role = 'admin'
      var email = req.body.business_email
      var accountNumber,idNumber ;
    
      var id //= req.body._id
    
      var password = req.body.password
    var uid
      
      
      Num.find(function(err,docs){
    accountNumber = docs[0].accountNumber
    idNumber=docs[0].idNumber
    id = docs[0]._id
     uid = prefix + idNumber 
      
      
    
     
    
      
      
        Setup.findOne({'schoolName':schoolName})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            
           req.session.message = {
             type:'errors',
             message:'school already in the system'
           }     
           
              res.render('landing/steps6', {
                  user:req.body, message:req.session.message 
              }) 
            
      }
      
                    else  {   
                 
      
                       var companyId = accountNumber
                          const token = jwt.sign({adminName,adminSurname,email,schoolName, fullname,prefix,suffix,uid,companyId,role,id, password,accountNumber,idNumber }, JWT_KEY, { expiresIn: '100000m' });
                          const CLIENT_URL = 'http://' + req.headers.host;
                    
                          const output = `
                          <h2>Please click on below link to activate your account</h2>
                          <a href="${CLIENT_URL}/package/enterpriseA/${token}">click here</a>
                          <h1> User credentials</h1>
                          <p>userId:${uid}</p>
                          <p>password:${password}</p>
                          <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                          `;
                    
                          const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "cashreq00@gmail.com",
                                pass: "itzgkkqtmchvciik",
                            },
                            port:465,
                            host:'smtp.gmail.com'
                          });
                          
                    
                          // send mail with defined transport object
                          const mailOptions = {
                              from: '"Admin" <cashreq00@gmail.com>', // sender address
                              to: email, // list of receivers
                              subject: "Account Verification ✔", // Subject line
                              html: output, // html body
                          };
                    
                          transporter.sendMail(mailOptions, (error, info) => {
                              if (error) {
                                console.log(error)
                           req.session.message = {
                             type:'errors',
                             message:'confirmation email not sent'
                           }
                           
                           res.render('landing/steps6',{message:req.session.message,
                           
                        })
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
    
                                  
                      var set = new Setup();
                      set.accountType = accountType;
                      set.size = size;
                      set.accountName = accountName;
                      set.accountNumber = accountNumber;
                      set.schoolName = schoolName;
                      set.schoolType = schoolType;
                      set.business_email = businessEmail;
                      set.prefix = prefix;
                      set.suffix = suffix;
                      set.name = adminName;
                 
                      set.surname = adminSurname;
                      set.password = set.encryptPassword(password)
    
                    
      
                      
                       
                  
                       
              
                      set.save()
                        .then(user =>{
                                  accountNumber++
                                 
                                  Num.findByIdAndUpdate(id,{$set:{accountNumber:accountNumber}},function(err,locs){
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation email sent'
                                  }     
                                  
                                     res.render('landing/steps6', {
                                          message:req.session.message 
                                      
                                     })
                                    }) 
                                  })
                              }
                          })
                         // res.redirect('/multi')
                     
                                    
                      }
                      
                        })
                      })
                       
      })
      
      
      
    
    //admin account activation route
    
    router.get('/enterpriseA/:token',(req,res)=>{
      const { Paynow } = require("paynow");
      // Create instance of Paynow class
      let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
      const token = req.params.token;
      var a = moment();
      var year = a.format('YYYY')
      var date = moment().toString();
      var amount , pollCount, duration
      Subscriptions.find({},function(err,docs){
       // amount = docs[0].enterprise
       amount = 100
        pollCount = docs[0].enterpriseCount
        duration = docs[0].enterpriseAduration
         
                            
      let errors = [];
      if (token) {
          jwt.verify(token, JWT_KEY, (err, decodedToken) => {
              if (err) {
                  
                  req.session.message = {
                      type:'errors',
                      message:'Incorrect or expired link! Please register again'
                    } 
                    res.render('users/login',{message:req.session.message});
              }
              else {
                const { adminName,adminSurname,fullname,prefix,email,accountNumber, suffix,companyId,role,uid, password,schoolName,idNumber } = decodedToken;
                  User.findOne({ uid: uid }).then(user => {
                      if (user) {
                          //------------ User already exists ------------//
                      
                          req.session.message = {
                              type:'errors',
                              message:'User  already registered! Please log in.'
                            }  
                            res.render('users/login',{message:req.session.message});
                   
                          
                      }
                      else  {      
                        var user = new User();
                        user.uid = uid;
                        user.name = adminName;
                        user.surname = adminSurname;
                        user.fullname = fullname;
                        user.email = email;
                        user.role = role;
                        user.prefix = prefix;
                        user.suffix = suffix;
                        user.companyId = companyId;
                        user.schoolName = schoolName;
                        user.recNumber = 0
                        user.gender = 'null';
                        user.dob = 'null';
                        user.studentId = 'null'
                        user.teacherName='null'
                        user.teacherId = 'null'
                        user.grade = 0;
                        user.class1 = 'null';
                        user.mobile = 'null';
                        user.classLength = 0;
                        user.classNo = 0
                        user.studentNum = 0;
                        user.uidNum = 309;
                        user.number = accountNumber;
                        user.idNumber = idNumber
                        user.examDate = 'null';
                        user.feeStatus = 'null';
                        user.feesUpdate = 'null';
                        user.term = 1;
                        user.amount = 0;
                        user.receiptNumber = 0;
                        user.year = year;
                        user.balance = 0;
                        user.balanceCarriedOver = 0;
                        user.status = 'null';
                        user.paymentId = 'null';
                      
                        user.photo = 'propic.jpg';
                        user.level = 'null';
                        user.pollUrl='null'
                        user.annual =0
                        user.fees = 0
                        user.paynow = amount
                        user.type = 'null';
                        user.address = 'null';
                        user.dept = 'null';
                        user.subject = 0;
                        user.subjectCode = 'null'
                        user.subjects = 'null'
                        user.dept = 'null';
                        user.expdate=a.valueOf();
                        user.expStr = a.toString();
                   
                        user.status3 = "null"
                        user.pollUrl2 = "null"
                        user.count=0
                        user.pollCount = pollCount
                        user.actualCount = 0     
                        user.idNumX = 0;
                        user.duration = duration

                        user.status4 = "null"
                        user.levelX = "null"
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = 0  
                        user.password = user.encryptPassword(password)
                        user.save()
                          .then(user =>{
                    
                              
                       
                          
                            
  
                           /* Subscriptions.find({},function(err,docs){
                          amount = docs[0].startup
                            })*/

                            let payment = paynow.createPayment("Subscription");

  
                            // Add items to the payment list passing in the name of the item and it's price
                            payment.add("Enterprise Annual Package", amount);
                            // Send off the payment to Paynow
                            paynow.send(payment).then( (response) => {
                            
                                if(response.success) {
                                    // Get the link to redirect the user to, then use it as you see fit
                                    let link = response.redirectUrl;
                            
                                    let pollUrl = response.pollUrl;
                            
                                    var poll = new Poll2();
                             
                                    poll.pollUrl = pollUrl;
                                    poll.companyId = companyId;
                                    poll.schoolName = schoolName;
                                    poll.date = date;
                                    poll.package = "Enterprise Annual Package"
                                    poll.amount = amount
                                    poll.count = pollCount
                                    poll.duration = duration
                                    poll.save()
                                       .then(poll =>{
                                       
                                        User.findByIdAndUpdate(user._id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount}},function(err,docs){
                                           
                                           
                                             
                                           
                                        })
                                
                            
                            
                                          res.redirect(link)
                                       })
                                    }
                                  /*  else{
                                res.redirect('/land')
                                    }*/
                                  })
    
    
                      })
                       
                        }
                        
                          })
                         }
                  });
                }
              })
      });
    
































    
    
    module.exports = router;









