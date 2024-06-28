require('dotenv').config();
require("../config5/keys")
var express = require('express');
var router = express.Router();
const Year =require('../models/year')
const Product =require('../models/product')
const Month =require('../models/month')
var QuoteCode = require('../models/quoteCode');
var QuoteSub = require('../models/quoteSub');
var QuoteFiles = require('../models/quoteFiles');
var InvoiceSub = require('../models/invoiceSub');
const Level =require('../models/level');
var InvoiceSubBatch = require('../models/invoiceSubBatch');
var InvoiceCode = require('../models/invoiceCode');
var InvoCode = require('../models/invoCode');
var Learn = require('../models/learn');
var IncStatement = require('../models/incStatement');
var IncFiles = require('../models/incomeFiles');
var InvoiceSubFile = require('../models/invoiceSubFile');
var Stock = require('../models/stock');
var StockV = require('../models/stockV');
var InvoNum = require('../models/invoNum');
var RecNum = require('../models/recNum');
var Receipt = require('../models/receipt');
var InvoiceFiles = require('../models/invoiceFiles');
var InvoiceFile = require('../models/invoiceFile');
var ReceiptFile = require('../models/receiptFile');
var Category = require('../models/category');
var ExpCategory = require('../models/expCategory');
var BStats = require('../models/bookStats');
var CStats = require('../models/categoryStats');
var nodemailer = require('nodemailer');
var Book = require('../models/book');
var Client = require('../models/clients');
const User =require('../models/user')
const puppeteer = require('puppeteer')
var hbs = require('handlebars');
const Setup =require('../models/setup')
const Class1 =require('../models/class');
const Subject =require('../models/subject');
const Student =require('../models/studentStats');
const Fees =require('../models/fees');
const Num =require('../models/num');
const Poll2 =require('../models/poll2');
const Grade =require('../models/grade');
const { Paynow } = require("paynow");
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
var Message = require('../models/message');
var Recepient = require('../models/recepients');
var Note = require('../models/note');
const Pass =require('../models/passRate');
const PassX =require('../models/passRateX');
const TeacherClassRate = require('../models/tcPassRateX')
const TeacherExamRate = require('../models/tcPassRate')
const Expenses = require('../models/expenses')
const FeesUpdate =require('../models/feesUpdate');
const StudentSub =require('../models/studentSubject');
const TeacherSub =require('../models/teacherSubject');
const Room =require('../models/room');
const NoteW =require('../models/notew');
const Truck = require('../models/truck');
const Report = require('../models/reports');
const Report2 = require('../models/reportsT');
const ReportAtt = require('../models/reportsAtt');
var Quiz = require('../models/quiz');
const stripe = require('stripe')('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');
const keys = require('../config1/keys')
var mongoose = require('mongoose')
var mongodb = require('mongodb');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
var nodemailer = require('nodemailer');
var passport = require('passport')
var xlsx = require('xlsx')
var multer = require('multer')
var Axios = require('axios')
const fs = require('fs-extra')
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
var moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
const { countReset } = require('console');
var FormData = require('form-data')
var GridStore = require('mongoose-gridstore')
var storageX = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,'./public/uploads/')
  },
  filename:(req,file,cb)=>{
      cb(null,file.originalname)
  }
})



var uploadX = multer({
  storage:storageX
})


const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const arr = {}
const arr2 = {}
const arr9 ={}
const arrInvoice = {}
const arrSingle = {}
const arrSingleUpdate = {}
const arrReceipt = {}
const arrSub = {}
const arrStatement = {}
const arrV = []
let pdfX
//const data = require('../data.json')

var storageX = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,'./public/uploads/')
  },
  filename:(req,file,cb)=>{
      cb(null,file.originalname)
  }
})



var uploadX = multer({
  storage:storageX
})

/*
User.find(function(err,docs){
 for(var i = 0;i<docs.length;i++){
   //data.push(docs[i])
   data.users.push(docs[i]); 
 }
})*/

const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/euritDB';

const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream

  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  })
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
router.get('/pass',isLoggedIn, (req, res) => {
  var pro = req.user
 
    User.findById(req.user._id, (err, doc) => {
        if (!err) {
            res.render("clerk/change", {
               
                user: doc,pro:pro
              
            });
        }
    });
  });
  
  
  
  router.post('/pass',isLoggedIn, function(req,res){
    var user = new User();
    req.check('password','Enter New Password').notEmpty();
  
    req.check('confirmPassword', 'Confirm Password').notEmpty();
  
  
  req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
  var errors = req.validationErrors();
  
  
  
  
   if (errors) {
  
   
  
      req.session.errors = errors;
      req.session.success = false;
      res.render('clerk/change',{ title: 'User Update', user:req.body, errors:req.session.errors, pro:pro
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
        res.render('clerk/change',{message:req.session.message, user:req.user, pro:pro
         }); }
      else {
        console.log('error'+err)
  
      }
    
  })
  }
  
  
  
  })
  
  
  
      
      

  router.get('/idUp',isLoggedIn,function(req,res){
    var id = req.user._id
  
    var total, total2
    var num
    var idNumX = req.user.idNumX
    
    
    User.find({},function(err,docs){
    num = docs.length
    total = idNumX + docs.length;
    
    
    
    User.findByIdAndUpdate(id,{$set:{actualCount:num }},function(err,locs){
    
    })
    
    res.redirect('/clerk/classCheck')
    
    })
    
    
    })
  
  
  
  
  
    
  
      
    
      
  
  
  
  
  
  router.get('/classCheck',isLoggedIn,function(req,res){
    
    Class1.find({},function(err,docs){
  
  
      for(var i= 0;i<docs.length;i++){
        let classX = docs[i].class1
        let id = docs[i]._id
        User.find({class1:docs[i].class1},function(err,gocs){
  let students = gocs.length;
  User.find({ class1:classX, status:'paid'},function(err,yocs){
    let paid = yocs.length;
  
    User.find({class1:classX,status:'owing'},function(err,locs){
      let unpaid= locs.length
  
      User.find({ class1:classX,gender:'male'},function(err,xocs){
        let male= xocs.length
  
        User.find({ class1:classX,gender:'female'},function(err,zocs){
          let female= zocs.length
  
      Class1.findByIdAndUpdate(id,{$set:{numberOfStudents:students, paid:paid,unpaid:unpaid,male:male,female:female}},function(err,vocs){
  
      })
    })
    })
  })
  })
        })
      }
      res.redirect('/clerk/std')
    })
    
  })
  
  
  
  router.get('/upCheck',function(req,res){
   User.find(function(err,focs){
  for(var i = 0;i<focs.length; i++){
  
  let id = focs[i]._id
  
    User.findByIdAndUpdate(id,{$set:{admissionYear:2021,startYear:2021, stdYearCount:1,currentYearCount:1}},{multi:true},function(err,docs){
  
    })
  }
  })
  })
  
  router.get('/std',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = m.format('YYYY')
    var currCount = req.user.currentYearCount
    var startYear = req.user.startYear
    Student.find({}, function(err,locs){
      if(locs.length == 0){
  var std = Student();
  std.year1 = 0;
  std.year2 = 0;
  std.year3 = 0;
  std.year4 = 0;
  std.year5 = 0;
  std.year6 = 0;
  std.year7 = 0;
  std.year8 = 0;
  std.year9 = 0;
  std.year10 = 0;
  std.count = 0;
  std.startYear = 0;
  
  
  std.save()
  .then(std=>{
  
    User.find({  role:'student',stdYearCount:currCount},function(err,docs){
      let total = docs.length;
     if(currCount == 0){
       Student.findByIdAndUpdate(std._id,{$set:{year1:total,count:currCount,startYear:startYear}},function(err,locs){
  
       })
     } else if(currCount == 1){
      Student.findByIdAndUpdate(std._id,{$set:{year2:total,count:currCount,startYear:startYear}},function(err,locs){
  
      })
     }else if(currCount == 2){
      Student.findByIdAndUpdate(std._id,{$set:{year3:total,count:currCount,startYear:startYear}},function(err,locs){
  
      })
  
     }
     res.redirect('/clerk/adminMonthInc')
      
        })
  
  
  })
  
      }else{
  Student.find({},function(err,docs){
    
    User.find({  role:'student',stdYearCount:currCount},function(err,nocs){
      if(nocs){
  
     
      let total = nocs.length;
  
    
  let id = docs[0]._id;
  
  
  if(currCount == 0){
    Student.findByIdAndUpdate(id,{$set:{year1:total,count:currCount,startYear:startYear}},function(err,locs){
  
    })
  } 
  
       else if(currCount == 1){
          Student.findByIdAndUpdate(id,{$set:{year2:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
        else if (currCount == 2){
          Student.findByIdAndUpdate(id,{$set:{year3:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
  
         else if (currCount == 3){
          Student.findByIdAndUpdate(id,{$set:{year4:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
  
        else if (currCount == 4){
          Student.findByIdAndUpdate(id,{$set:{year5:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
  
        else if (currCount == 5){
          Student.findByIdAndUpdate(id,{$set:{year6:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
  
        else if (currCount == 6){
          Student.findByIdAndUpdate(id,{$set:{year7:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
  
        else if (currCount == 7){
          Student.findByIdAndUpdate(id,{$set:{year8:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
        else if (currCount == 8){
          Student.findByIdAndUpdate(id,{$set:{year9:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
        else if (currCount == 9){
          Student.findByIdAndUpdate(id,{$set:{year10:total,count:currCount,startYear:startYear}},function(err,locs){
     
          })
        } 
      }else{
        console.log('flint')
      }
      })
      res.redirect('/clerk/adminMonthInc')
      })
      }
    })
    
  
  })
  
  
   
      
      
    
    
  
  
  
  
  
  //Monthly Income Stats
  
  router.get('/adminMonthInc', isLoggedIn,  function(req,res){
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var fees
    var arr1=[]
    var number1
    var totalStudents, students, passRate
   
  
  
    MonthIncome.find({year:year,month:month},function(err,docs){
  
      Fees.find({year:year,month:month},function(err,hods){
  
  
      
  
      if(docs.length == 0  && hods.length == 0){
  
        
  
        var inc = MonthIncome();
              inc.amount = 0;
              inc.month = month;
              inc.year = year
              
  
              inc.save()
      .then(incX =>{
  
        res.redirect('/clerk/adminMonthExp2')
  
      })
  
      }
      else
      MonthIncome.find({year:year,month:month},function(err,docs){
  
        var id3 = docs[0]._id
      Fees.find({ year:year,month:month},function(err,hods){
  
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
  
  
  
            MonthIncome.findByIdAndUpdate(id3,{$set:{amount:number1}},function(err,kocs){
  
            })
            
        
  
  
  
            res.redirect('/clerk/adminMonthExp2')
  
  
      })
    })
  
  
  
  
  
    })
  
  
  })
  
  
  
  })
  
  
  
  
  
  router.get('/adminMonthExp2', isLoggedIn,  function(req,res){
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var fees
    var arr1=[]
    var number1
    var totalStudents, students, passRate
    
  
  
    MonthExpense.find({  year:year,month:month},function(err,docs){
  
      Expenses.find({year:year,month:month},function(err,hods){
  
  
      
  
      if(docs.length == 0  && hods.length == 0){
  
        
  
        var exp = MonthExpense();
              exp.amount = 0;
              exp.month = month;
              exp.year = year
            
  
              exp.save()
      .then(incX =>{
  
        res.redirect('/clerk/adminDashInc')
  
      })
  
      }
      else
      MonthExpense.find({ year:year,month:month},function(err,docs){
  
        var id3 = docs[0]._id
      Expenses.find({  year:year,month:month},function(err,hods){
  
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
  
  
  
            MonthExpense.findByIdAndUpdate(id3,{$set:{amount:number1}},function(err,kocs){
  
            })
            
        
  
  
  
            res.redirect('/clerk/adminDashInc')
  
  
      })
    })
  
  
  
  
  
    })
  
  
  })
  
  
  
  })
  
  
  
  
  
  router.get('/adminDashInc',isLoggedIn,function(req,res){
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var fees
    var arr1=[]
    var number1
    var totalStudents, students, passRate
  
  
  
    Income.find({ year:year},function(err,docs){
  
      Fees.find({  term:term,year:year},function(err,hods){
  
  
      
  
      if(docs.length == 0  && hods.length == 0){
  
        
  
        var inc = Income();
              inc.firstTermIncome = 0;
              inc.firstTermExpense = 0;
              inc.secondTermIncome = 0;
              inc.secondTermExpense = 0
              inc.thirdTermIncome = 0
              inc.thirdTermExpense = 0
              inc.year = year
              
  
              inc.save()
      .then(incX =>{
  
        res.redirect('/clerk/adminDashExp')
  
      })
  
      }
      else
      Income.find({year:year},function(err,docs){
  
        var id3 = docs[0]._id
      Fees.find({ term:term,year:year},function(err,hods){
  
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
  
  
            
        if(term == 1){
  
    
          Income.findByIdAndUpdate(id3,{$set:{firstTermIncome:number1}},function(err,kocs){
       
          
          })
        }else if(term == 2){
        
          Income.findByIdAndUpdate(id3,{$set:{secondTermIncome:number1}},function(err,kocs){
        
              
              })
            }else{
              Income.findByIdAndUpdate(id3,{$set:{thirdTermIncome:number1}},function(err,kocs){
              
                  
                  })
            }
  
  
  
            res.redirect('/clerk/adminDashExp')
  
  
      })
    })
  
  
  
  
  
    })
  
  
  })
  
  
  
  })
  
  
  
  
  router.get('/adminDashExp',isLoggedIn,function(req,res){
  
    let arrX = []
    let totalX
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var fees
    var arr1=[]
    var number1
  
  
    Expenses.find({ term:term,year:year},function(err,hods){
  
      if(hods.length == 0){
  
        res.redirect('/clerk/passRate')
      }
  else
  Income.find({  year:year},function(err,docs){
     var incX = docs[0]._id
  for(var q = 0;q<hods.length; q++){
            
    arrX.push(hods[q].amount)
    }
    //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
     totalX=0;
    for(var z in arrX) { totalX += arrX[z]; }
    
    
    if(term == 1){
    
    
    Income.findByIdAndUpdate(incX,{$set:{firstTermExpense:totalX}},function(err,kocs){
  
    
    })
    }else if(term == 2){
    
    Income.findByIdAndUpdate(incX,{$set:{secondTermExpense:totalX}},function(err,kocs){
  
      
      })
    }else{
      Income.findByIdAndUpdate(incX,{$set:{thirdTermExpense:totalX}},function(err,kocs){
        
          
          })
    }
    res.redirect('/clerk/passRate')
  })
    })
  
  
  })
  
  
  
  
  
  
  
  //Exam Pass Rate
  
  router.get('/passRate',isLoggedIn, function(req,res){
    var totalStudents, students, passRate
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    
  
  
    Pass.find({ year:year,type:'Final Exam'},function(err,docs){
  
      TestX.find({ term:term,year:year,type:'Final Exam'},function(err,hods){
  
    
      if(docs.length == 0 && hods.length == 0){
  
        var pass = Pass();
        pass.firstTerm = 0;
        pass.secondTerm= 0;
        pass.thirdTerm = 0
        pass.year = year
  
  
        pass.save()
        .then(pas =>{
  
          res.redirect('/clerk/passRateX')
        })
  
      }
      else
  
      
    Pass.find({ year:year},function(err,docs){
   var idX = docs[0]._id;
      TestX.find({term:term,year:year,type:'Final Exam'},function(err,hods){
  
        TestX.find({term:term,year:year, result:'pass', type:'Final Exam'},function(err,lods){
  
        totalStudents = hods.length;
        students = lods.length
        //console.log(students,totalStudents,'%%%%%%%')
        let pRate = students / totalStudents * 100
        passRate = Math.round(pRate)
        passRate.toFixed(2)
  
        if(term == 1){
   
     
          Pass.findByIdAndUpdate(idX,{$set:{firstTerm:passRate}},function(err,kocs){
       
          
          })
        }else if(term == 2){
        
          Pass.findByIdAndUpdate(idX,{$set:{secondTerm:passRate}},function(err,kocs){
        
              
              })
            }else{
              Pass.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate}},function(err,kocs){
              
                  
                  })
                }
  
  res.redirect('/clerk/passRateX')
              })
      })
  
    })
  
    })
    })
  
  })
  
  
  
  
  //Class Test
  
  router.get('/passRateX',isLoggedIn, function(req,res){
    var totalStudents, students, passRate;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    
  
    PassX.find({year:year,type3:'class'},function(err,docs){
  
      TestX.find({term:term,year:year,type:'class'},function(err,hods){
  
    
      if(docs.length == 0 && hods.length == 0){
  
        var pass = PassX();
        pass.firstTerm = 0;
        pass.secondTerm= 0;
        pass.thirdTerm = 0
        pass.year = year
    
  
        pass.save()
        .then(pas =>{
  
          res.redirect('/clerk/adminGender')
        })
  
      }
      else
  
      
    PassX.find({year:year},function(err,docs){
   var idX = docs[0]._id;
   console.log('class testX',idX)
      TestX.find({term:term,year:year, type3:'class'},function(err,hods){
  
        TestX.find({term:term,year:year, result:'pass', type3:'class'},function(err,lods){
  
        totalStudents = hods.length;
        students = lods.length
     
        let pRate = students / totalStudents * 100
        passRate = Math.round(pRate)
        passRate.toFixed(2)
        console.log('pass Rate68', passRate)
  
        if(term == 1){
   
     
          PassX.findByIdAndUpdate(idX,{$set:{firstTerm:passRate}},function(err,kocs){
       
          
          })
        }else if(term == 2){
        
          PassX.findByIdAndUpdate(idX,{$set:{secondTerm:passRate}},function(err,kocs){
        
              
              })
            }else{
              PassX.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate}},function(err,kocs){
              
                  
                  })
                }
  
  res.redirect('/clerk/adminGender')
              })
      })
  
    })
  
    })
    })
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  //student gender
  
  
  router.get('/adminGender',isLoggedIn,function(req,res){
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var male, female
    var fees
    var arr1=[]
    var number1
    var totalStudents, students, passRate
  
  
  
    Gender.find({},function(err,docs){
  
      User.find({role:'student'},function(err,hods){
  
  
      
  
      if(docs.length == 0  && hods.length == 0){
  
        
  
        var gen = Gender();
              gen.male = 0;
              gen.female = 0;
  
              gen.save()
      .then(genX =>{
  
        //res.redirect('/clerk/dashX')
        res.redirect('/clerk/pollCheck')
  
      })
  
      }
      else
      Gender.find({},function(err,docs){
  
        var id3 = docs[0]._id
        console.log('id3',id3)
        User.find({role:'student',gender:'male'},function(err,hods){
  
        User.find({role:'student', gender:'female'},function(err,pods){
  
         male = hods.length;
         female = pods.length
            
         console.log('male',male)
         console.log('female',female)
      
      
  
        Gender.findByIdAndUpdate(id3,{$set:{male:male, female:female}},function(err,docs){
              
                  
        })
  
      
  
        //res.redirect('clerk/dashX')
        res.redirect('/clerk/pollCheck')
  
         
  
  
      })
      })
    })
  
  
  
  
  
  
    })
  
  
  })
  
  
  
  })
  
  
  //dashboard
  /*
  router.get('/dash',isLoggedIn,adminX, function(req,res){
    var pro = req.user
    const arr = []
    var arr2 = []
  const m = moment();
  var term = req.user.term
  var year = m.format('YYYY')
   var id =req.user._id
  
   Recepient.find({recepientId:id,statusCheck:'not viewed'},function(err,rocs){
    let lgt = rocs.length
    var gt = lgt > 0
  
        console.log(req.user._id)
        console.log(req.user.email)
          Note.find({recId:req.user._id},function(err,docs){
           // console.log(docs,'docs')
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
       
  
          TestX.find({year:year,term:term},function(err,qocs) {
            for(var i = 0;i<qocs.length;i++){
              //size = docs.length
      
                
               if(arr2.length > 0 && arr2.find(value => value.subject == qocs[i].subject)){
                      console.log('true')
                     arr2.find(value => value.subject == qocs[i].subject).percentage += qocs[i].percentage;
                     arr2.find(value => value.subject == qocs[i].subject).size++;
                    }else{
                      arr2.push(qocs[i])
                      let subject = qocs[i].subject
                      
                        //element.size = 0
                        if(arr2.find(value => value.subject == subject)){
                   
                         
                               arr2.find(value => value.subject == subject).size++;
                 
                        }
                        //element.size = element.size + 1
                          
                     
                          }
        
            
            }
            let result = arr2.map(function(element){
              element.percentage  = element.percentage / element.size
         
              let num = Math.round(element.percentage)
              num.toFixed(2)
              element.percentage =num
              console.log(element.mark,'mark')
              if(element.percentage < 50){
                element.color = "progress-bar bg-danger"
              }else{
                element.color = "progress-bar bg-success"
              }
            })
         
          res.render('dashboard/index',{pro:pro,list:arr,listX:arr2, les:les,gt:gt })
          })
        })
        })
        })
  
      })
  
  
   
  })*/
  
  
   //notifications & messages
  
   router.post('/dashChartXX3',isLoggedIn,function(req,res){
                       
    var term = req.user.term
  
   
    var m = moment()
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
  
    
  
  
  
    TestX.find({year:year,term:term},function(err,docs) {
      for(var i = 0;i<docs.length;i++){
     
    
          
         if(arr.length > 0 && arr.find(value => value.class1 == docs[i].class1)){
                
               arr.find(value => value.class1 == docs[i].class1).percentage += docs[i].percentage;
               arr.find(value => value.class1 == docs[i].class1).size++
               //console.log(arr,i)
              
              }else{
                arr.push(docs[i])
                let class1= docs[i].class1
                
                  //element.size = 0
                  if(arr.find(value => value.class1 == class1)){
             
                   
                         arr.find(value => value.class1 == class1).size++;
           
                  }
                  //element.size = element.size + 1
                    
               
                    }
          
          }
          let result = arr.map(function(element){
            console.log(element.percentage,element.size,element.subject,'mark0')
            element.percentage = element.percentage / element.size
            console.log(element.percentage,element.size,'markX')
  
            let num = Math.round(element.percentage)
              num.toFixed(2)
              element.percentage =num
           
          })
     // console.log(arr,'arr')
      res.send(arr)
    })
  
  })
  



router.get('/pollCheck',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')



User.find({role:"student"},function(err,docs){
for(var i = 0; i<docs.length;i++){
if(docs[i].pollUrl === "null"){
i++;

}else{

let pollUrl = docs[i].pollurl;
let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");

paynow.pollTransaction(pollUrl).then(transaction => {
  if(transaction.status === 'awaiting delivery') {
    // User showed us the doe
    let amount = docs[i].paynow;
    let uid = docs[i].uid;
    let balance = docs[i].balance
    let receiptNumber = 'paynow'
    let class1 = docs[i].class1
    let term = docs[i].term
    let id = docs[i]._id
    let newBalance;
    var fees = new Fees();

    fees.date = m.toString();
    fees.uid = uid;
    fees.class1 = class1;
    fees.fullname = fullname;
    fees.amount= amount;
    fees.term = term;
    fees.year = year;
    fees.month = month;
    fees.method = 'paynow';
    fees.paymentId = pollUrl
    fees.receiptNumber = 'paynow';
  
  
  
    fees.save()
      .then(fee =>{
 

         User.findByIdAndUpdate(id,{$set:{studentId:uid,amount:amount,receiptNumber:'paynow'}},function(err,gocs){




      
          newBalance = balance + fees.amount;

          if(newBalance >= 0){
  
            User.findByIdAndUpdate(id,{$set:{balance:newBalance, status:"paid", term:term, year:year,balanceCarriedOver:balance,paynow:0,pollUrl:'null'}},function(err,docs){
          
      
            
          
            })
        
          }else
          
          User.findByIdAndUpdate(id,{$set:{balance:newBalance, status:"owing", term:term, year:year,balanceCarriedOver:balance,paynow:0,pollUrl:'null'}},function(err,docs){
          
          
            
          

          })
          })
          
        })

    

         }
        })

}





}
res.redirect('/clerk/stats')




})



})
















router.get('/stats',isLoggedIn, function(req,res){
    var students, teachers, paid, unpaid, depts, class1
 
    var m = moment()
    var year = m.format('YYYY')
  User.find({role:'student'},function(err,focs){
    students = focs.length
    
  User.find({role:'teacher'},function(err,nocs){
    teachers = nocs.length;
    User.find({role:'student',status:'paid'},function(err,jocs){
   paid = jocs.length;
  
   User.find({role:'student',status:'owing'},function(err,klocs){
     unpaid = klocs.length

     Dept.find({},function(err,pocs){
      depts = pocs.length;
     
      Class1.find({},function(err,locs){
        class1 = locs.length

  
     Stats.find({year:year},function(err,docs){
  
  if(docs == 0){
  
  
  var stat = new Stats();
  stat.students = students;
  stat.teachers = teachers
  stat.paid = paid;
  stat.unpaid = unpaid
  stat.depts = depts
  stat.class1 = class1
  stat.year = year

  
  
  stat.save()
  .then(sta =>{
  
    //res.redirect('/clerk/dashInc')
  
  })
  }
  else
 
  var id = docs[0]._id
  
  Stats.findByIdAndUpdate(id,{$set:{students:students, teachers:teachers,paid:paid, unpaid:unpaid, class1:class1, depts:depts}},function(err,sox){
    


  })
  
  res.redirect('/clerk/dashInc')

  
  
  })
  
    
})
     })
     
   })
  
  
    })
  })
  
  })
  
    
  })
  













  router.get('/dashInc',isLoggedIn,function(req,res){
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var fees
    var arr1=[]
    var number1
    var totalStudents, students, passRate
   
  
  
    Income.find({year:year},function(err,docs){
  
      Fees.find({term:term,year:year},function(err,hods){
  
  
      
  
      if(docs.length == 0 ){
  
        
  
        var inc = Income();
              inc.firstTermIncome = 0;
              inc.firstTermExpense = 0;
              inc.secondTermIncome = 0;
              inc.secondTermExpense = 0
              inc.thirdTermIncome = 0
              inc.thirdTermExpense = 0
              inc.year = year
          
  
              inc.save()
      .then(incX =>{
  
        res.redirect('/clerk/dashExp')
  
      })
  
      }
      else
      Income.find({year:year},function(err,docs){
  
        var id3 = docs[0]._id
      Fees.find({term:term,year:year},function(err,hods){
  
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
  
  
            
        if(term == 1){
  
    
          Income.findByIdAndUpdate(id3,{$set:{firstTermIncome:number1}},function(err,kocs){
       
          
          })
        }else if(term == 2){
        
          Income.findByIdAndUpdate(id3,{$set:{secondTermIncome:number1}},function(err,kocs){
        
              
              })
            }else{
              Income.findByIdAndUpdate(id3,{$set:{thirdTermIncome:number1}},function(err,kocs){
              
                  
                  })
            }
  
  
  
            res.redirect('/clerk/dashExp')
  
  
      })
    })
  
  
  
  
  
    })
  
  
  })
  
  
  
  })
  
  
  
  
  router.get('/dashExp',isLoggedIn,function(req,res){
  
    let arrX = []
    let totalX
    var term = req.user.term
    var m = moment()
    var year = m.format('YYYY')
    var fees
    var arr1=[]
    var number1

  
    Expenses.find({term:term,year:year},function(err,hods){
  
      if(hods.length == 0){
  
        res.redirect('/clerk/dashX')
      }
  else
  Income.find({year:year},function(err,docs){
    var incX = docs[0]._id
    Expenses.find({term:term,year:year},function(err,pods){
    
    
  for(var q = 0;q<pods.length; q++){
            
    arrX.push(pods[q].amount)
    }
    //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
     totalX=0;
    for(var z in arrX) { totalX += arrX[z]; }
    
    
    if(term == 1){
    
    
    Income.findByIdAndUpdate(incX,{$set:{firstTermExpense:totalX}},function(err,kocs){
  
    
    })
    }else if(term == 2){
    
    Income.findByIdAndUpdate(incX,{$set:{secondTermExpense:totalX}},function(err,kocs){
  
      
      })
    }else{
      Income.findByIdAndUpdate(incX,{$set:{thirdTermExpense:totalX}},function(err,kocs){
        
          
          })
        
    }
    res.redirect('/clerk/adminMonthInc2')
  })
  })
    })
  
  
  })
  
  





//Monthly Income Stats

router.get('/adminMonthInc2', isLoggedIn,  function(req,res){
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var fees
  var arr1=[]
  var number1
  var totalStudents, students, passRate
  


  MonthIncome.find({year:year,month:month},function(err,docs){

    Fees.find({year:year,month:month},function(err,hods){


    

    if(docs.length == 0  && hods.length == 0){

      

      var inc = MonthIncome();
            inc.amount = 0;
            inc.month = month;
            inc.year = year
        

            inc.save()
    .then(incX =>{

      res.redirect('/clerk/adminMonthExp')

    })

    }
    else
    MonthIncome.find({year:year,month:month},function(err,docs){

      var id3 = docs[0]._id
    Fees.find({year:year,month:month},function(err,hods){

      for(var q = 0;q<hods.length; q++){
          
        arr1.push(hods[q].amount)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr1) { number1 += arr1[z]; }



          MonthIncome.findByIdAndUpdate(id3,{$set:{amount:number1}},function(err,kocs){

          })
          
      



          res.redirect('/clerk/adminMonthExp')


    })
  })





  })


})



})





router.get('/adminMonthExp', isLoggedIn,  function(req,res){
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var fees
  var arr1=[]
  var number1
  var totalStudents, students, passRate



  MonthExpense.find({year:year,month:month},function(err,docs){

    Expenses.find({year:year,month:month},function(err,hods){


    

    if(docs.length == 0  && hods.length == 0){

      

      var exp = MonthExpense();
            exp.amount = 0;
            exp.month = month;
            exp.year = year
    

            exp.save()
    .then(incX =>{

      res.redirect('/clerk/dashX')

    })

    }
    else
    MonthExpense.find({year:year,month:month},function(err,docs){

      var id3 = docs[0]._id
    Expenses.find({year:year,month:month},function(err,hods){

      for(var q = 0;q<hods.length; q++){
          
        arr1.push(hods[q].amount)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr1) { number1 += arr1[z]; }



          MonthExpense.findByIdAndUpdate(id3,{$set:{amount:number1}},function(err,kocs){

          })
          
      



          res.redirect('/clerk/dashX')


    })
  })





  })


})



})










/*
router.get('/fUpdate',isLoggedIn,function(req,res){

  var feeX = req.user.fees
  var annual = req.user.annual
  var companyId = req.user.companyId
  var term = req.user.term
  var year = req.user.year
  var feeId = req.user.feesUpdate


User.find({companyId:companyId,role:"student"},function(err,docs){
  if(docs.length == 0){
    res.redirect('/clerk/dashX')
  }else
     
    for(var i  = 0; i< docs.length; i++){
      let balanceX;
      let balance
      let balanceCarriedOver
    balanceX = docs[i].balance 
    balance = balanceX - feeX
    balanceCarriedOver = docs[i].balance
  
    console.log('balance',balance)
    console.log('balanceX', balanceX)
    console.log('fees',feeX)
  
    if(balance > 0){
      
      User.findByIdAndUpdate(docs[i]._id,{$set:{balance:balance, status:"paid", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:feeId,annual:annual,fees:feeX}},function(err,docs){
    
    
      
    
      })
  
    }else
    
    User.findByIdAndUpdate(docs[i]._id,{$set:{balance:balance, status:"owing", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:feeId,annual:annual,fees:feeX}},function(err,docs){
    
    
      
    
    })
    
    }
    res.redirect('/clerk/dashX')
    })

    })








*/

  
 /* router.get('/dashX',isLoggedIn,function(req,res){
    var pro = req.user
      res.render('dashboard/clerk',{pro:pro})
  })*/
  router.get('/dashX',isLoggedIn, function(req,res){
    var pro = req.user
    const arr = []
    var arr2 = []
  const m = moment();
  var term = req.user.term
  var year = m.format('YYYY')
   var id =req.user._id
  
   Recepient.find({recepientId:id,statusCheck:'not viewed'},function(err,rocs){
    let lgt = rocs.length
    var gt = lgt > 0
  
        console.log(req.user._id)
        console.log(req.user.email)
          Note.find({recId:req.user._id},function(err,docs){
           // console.log(docs,'docs')
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
       
  
          TestX.find({year:year,term:term},function(err,qocs) {
            for(var i = 0;i<qocs.length;i++){
              //size = docs.length
      
                
               if(arr2.length > 0 && arr2.find(value => value.subject == qocs[i].subject)){
                      console.log('true')
                     arr2.find(value => value.subject == qocs[i].subject).percentage += qocs[i].percentage;
                     arr2.find(value => value.subject == qocs[i].subject).size++;
                    }else{
                      arr2.push(qocs[i])
                      let subject = qocs[i].subject
                      
                        //element.size = 0
                        if(arr2.find(value => value.subject == subject)){
                   
                         
                               arr2.find(value => value.subject == subject).size++;
                 
                        }
                        //element.size = element.size + 1
                          
                     
                          }
        
            
            }
            let result = arr2.map(function(element){
              element.percentage  = element.percentage / element.size
         
              let num = Math.round(element.percentage)
              num.toFixed(2)
              element.percentage =num
              console.log(element.mark,'mark')
              if(element.percentage < 50){
                element.color = "progress-bar bg-danger"
              }else{
                element.color = "progress-bar bg-success"
              }
            })
         
          res.render('dashboard/clerkIndex',{pro:pro,list:arr,listX:arr2, les:les,gt:gt })
          })
        })
        })
        })
  
      })
  
  
   
  })
  


  router.get('/dash',isLoggedIn, function(req,res){
    res.redirect('/clerk/stats')
    })



  
     router.post('/statChart',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')


        Stats.find({year:year},function(err,docs){
          if(docs == undefined){
            res.redirect('/clerk/dash')
          }else
      
             res.send(docs)
         
          
           })
      
      })
      //calendar
  
      router.post('/calendarChart',isLoggedIn,function(req,res){
    
        Calendar.find({},function(err,docs){
          if(docs == undefined){
            res.redirect('/clerk/dash')
          }else
      
             res.send(docs)
         
          
           })
      
      
        })







        

        router.post('/statChart',isLoggedIn,function(req,res){
          var m = moment()
          var year = m.format('YYYY')
     
                Stats.find({year:year},function(err,docs){
                  if(docs == undefined){
                    res.redirect('/dash')
                  }else
              
                     res.send(docs)
                 
                  
                   })
              
              })





//Income Chart for School terms

        router.post('/incomeChart',isLoggedIn, function(req,res){
          var m = moment()
          var year = m.format('YYYY')
      
                Income.find({year:year},function(err,docs){
                  if(docs == undefined){
                    res.redirect('/dash')
                  }else
              
                     res.send(docs)
                 
                  
                   })
              
              })
      
      
 //feesMonthIncomeChart             
      router.post('/feesChart',isLoggedIn, function(req,res){
          var m = moment()
          var year = m.format('YYYY')
          
                MonthIncome.find({year:year},function(err,docs){
                  if(docs == undefined){
                    res.redirect('/dash')
                  }else
              
                     res.send(docs)
                 
                  
                   })
              
              })


                   
 //expenseMonthIncomeChart             
      router.post('/expenseChart',isLoggedIn, function(req,res){
        var m = moment()
        var year = m.format('YYYY')
       
              MonthExpense.find({year:year},function(err,docs){
                if(docs == undefined){
                  res.redirect('/dash')
                }else
            
                   res.send(docs)
               
                
                 })
            
            })












            router.get('/msgUpdate',isLoggedIn,function(req,res){
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
              
              router.get('/sentUpdate',isLoggedIn,function(req,res){
                var id = req.user._id
              
                Message.find({senderId:id},function(err,docs){
                  let size = docs.length
                  User.findByIdAndUpdate(id,{$set:{sent:size}},function(err,nocs){
              
                  })
                })
              })
              
            
            
            
            
            
            
            
            
            
            
            
            
             router.get('/msgX',isLoggedIn,function(req,res){
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
            
            res.redirect('/clerk/msg')
            })
            
            })
            
            
            
            
            
            
            
            
            
            
            
            
            router.get('/msg',isLoggedIn,function(req,res){
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
            res.render('messagesClerk/inbox',{list:list, num:num,sent:sent,pro:pro})
            })
            
            })
            
            
            
            
            
            //on click dashboard icon & msg redirect
            router.post('/msg/:id',isLoggedIn,function(req,res){
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
            
            
            router.get('/sentXX',isLoggedIn,function(req,res){
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
            res.redirect('/clerk/sent')
            })
            
            })
            
            
            
            
            
            router.get('/sent',isLoggedIn,function(req,res){
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
            
            
            res.render('messagesClerk/sent',{list:list, num:num,sent:sent,pro:pro})
            })
            
            })
            
            
            
            router.get('/archiveXX',isLoggedIn,function(req,res){
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
            res.redirect('/clerk/archive')
            
            })
            
            })
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            router.get('/archive',isLoggedIn,function(req,res){
            var id = req.user.id
            const list2 =[]
            const list = []
            var num = req.user.inboxNo
            var sent = req.user.sent
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
            
            res.render('messagesClerk/sent',{list:list, num:num,sent:sent,pro:pro})
                 
            })
            
            })
            
            
            
            
            router.post('/marked',isLoggedIn,function(req,res){
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
            
            router.post('/archiveX',isLoggedIn,function(req,res){
            
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{archive:'yes',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
            
            router.post('/readX',isLoggedIn,function(req,res){
            
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{read:'yes',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
            
            
            
            
            
            
            router.post('/delete',isLoggedIn,function(req,res){
            
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{status:'deleted',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
            router.get('/compose',isLoggedIn,  function(req,res){
              var num = req.user.inboxNo
              var pro = req.user
              var sent = req.user.sent
              res.render('messagesClerk/compose',{num:num,sent:sent,pro:pro})
            })
            
            
            router.post('/userX',isLoggedIn,function(req,res){
              var id =req.user._id
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
            
            
            
            router.post('/dataX',isLoggedIn,function(req,res){
            var m = moment()
            var year = m.format('YYYY')
            var numDate = m.valueOf()
            var date = m.toString()
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
            
            router.get('/reply/:id', isLoggedIn, function(req,res){
            var id = req.params.id
            var uid = req.user._id
            console.log(id,'id')
            var arr = []
            
            var num = req.user.inboxNumber
            var sent = req.user.sent
            Message.find({msgId:id},function(err,tocs){
            console.log(tocs,'tocs')
            arr.push(tocs[0].senderEmail)
            let sub = tocs[0].subject
            Message.find({msgId:id,status:'reply',},function(err,docs){
            Recepient.find({msgId:id,},function(err,nocs){
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
            
            res.render('messagesClerk/reply',{list:docs,id:id, arr:arr, subject:sub,num:num,sent:sent})
            })
            
            })
            })
            })
            
            
            
            router.post('/reply/:id', isLoggedIn, function(req,res){
            var m = moment()
            var year = m.format('YYYY')
            var numDate = m.valueOf()
            var id = req.params.id
            var senderId = req.user._id
            var senderName = req.user.fullname
            var senderEmail = req.user.email
            var sub = req.body.compose_subject
            let msg = 'vocal tone'
            
            Message.findById({msgId:id},function(err,docs){
            
            
            
            
            
            
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
            
            
            
            
            router.post('/replyX/:id',isLoggedIn,function(req,res){
            console.log(req.body.code1,'code1')
            console.log(req.body['compose_to[]'],'compose_to')
            let code = req.body.code1
            var sub = req.body.code1
            let id = req.params.id
            var arr = []
            Message.find({msgId:id},function(err,tocs){
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
            
            
            router.post('/replyX2/:id',isLoggedIn,function(req,res){
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
            
            
            
            router.post('/replyX3/:id',isLoggedIn,function(req,res){
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
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
             
          
          
          





router.get('/invoice2',function(req,res){
  res.render('accounts/receipt2')
})











router.get('/siblings',isLoggedIn,function(req,res){
 
  User.find({role:"student"},function(err,docs){
   
for(var i = 0; i<docs.length;i++){

  let surname = docs[i].surname
  console.log(surname,'surname')

  User.find({surname:surname},function(err,locs){
    if(locs.length > 1){
      //console.log(locs)
      for(var i = 0; i< locs.length;i++){
        let id = locs[i]._id
      User.findByIdAndUpdate(id,{$set:{sibling:"true"}},function(err,pocs){

      })
      }
      
     // console.log(locs,'locs')
    }
  })
}
//res.redirect('/clerk/viewSurname')
//res.render('acc2/list2',{listX:arrV})
  })


})


router.get('/analytics',isLoggedIn,function(req,res){
  var pro = req.user
  Subject.find({},function(err,docs){
    Class1.find({},function(err,locs){

 
    res.render('clerkAdmin/classAn',{listX:docs,arr1:locs,pro:pro})
  })
})
})



router.get('/appraisal',isLoggedIn,function(req,res){
  var pro = req.user
  User.find({role:'teacher'},function(err,docs){
    res.render('clerkAdmin/list5',{listX:docs,pro:pro})
  })
 
})
router.get('/teacherAnalytics/:id',isLoggedIn,function(req,res){
  console.log(req.params.id,'iiiiii')
  var pro = req.user
  User.findById(req.params.id,function(err,voc){
    if(voc){


   
   let uid = voc.uid
   let fullname = voc.fullname
  
  Class1.find({},function(err,locs){
    TeacherSub.find({teacherId:uid},function(err,docs){


      res.render('clerkAdmin/teacherAn',{arr1:locs,listX:docs,fullname:fullname,uid:uid,pro:pro})
    })
  })
}
  })

  })



router.get('/viewSurname',isLoggedIn,function(req,res){
 // console.log(arrV,'arrV')
 User.find({sibling:"true"},function(err,docs){
  res.render('acc2/list2',{listX:docs})
})
})

  //profile
  router.get('/profile',isLoggedIn ,function(req,res){
    var pro = req.user
    res.render('clerk/overview',{pro:pro})
  })


  
router.post('/profile',isLoggedIn,upload.single('file'),function(req,res){
  var pro = req.user


  if(!req.file){
   req.session.message = {
     type:'errors',
     message:'Select Picture'
   }     
     res.render('clerk/overview', {
          user:req.body, message:req.session.message,pic:req.user.photo,user:req.user , pro:pro
      }) 
   
  } else
  var imageFile = req.file.filename;
  var id  = req.user._id;
 console.log(imageFile)
 console.log(id)
  User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
  
  
    
  
  
  })
 
  res.redirect('/clerk/profile')

     //res.render('uploads/index',{title:'Upload File',records:data, success:success})


   

  
 
})


router.get('/profileNew',isLoggedIn,function(req,res){
  var pro = req.user
  User.find({role:"student"},function(err,docs){
res.render('acc2/profile2',{listX:docs,pro:pro})

})
})

     
   
router.get('/invoiceCode',isLoggedIn,function(req,res){
  var id = req.user._id
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
var prefix = req.user.prefix
var num = req.user.number

var code = prefix+num

var codex = new InvoiceCode();

codex.code = code
codex.mformat = mformat

     
             
codex.save()
.then(title =>{
  num++
User.findByIdAndUpdate(id,{$set:{invoCode:code,num:num}},function(err,docs){

})

res.redirect('/clerk/addFees')

})


})


  
  
  
  
  //role admin
  //capturing school fees
  router.get('/addFees',isLoggedIn,clerk, function(req,res){
    var day = moment().toString()
    var pro = req.user
    res.render('students/addFees',{day:day, pro:pro})
  })
  
  
  
  
  
  router.post('/incomeChart',isLoggedIn,function(req,res){
      var m = moment()
      var year = m.format('YYYY')
      var term = req.user.term
     
            Income.find({year:year, term:term},function(err,docs){
              if(docs == undefined){
                res.redirect('/clerk/dash')
              }else
          
                 res.send(docs)
             
              
               })
          
          })
  
  
  
  router.post('/addFees',isLoggedIn,clerk, function(req,res){
    var pro = req.user
  var m = moment()
  var code = req.user.invoCode
  var xId = req.user._id;
  var uid = req.body.uid;
  var studentId = req.body.idN
  var fullname = req.body.fullname;
  var class1 = req.body.class1;
  var date = moment().toString();
  var term = req.body.term;
  var amount = req.body.amount;
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var receiptNumber = req.body.receiptNumber;
  var method = 'cash payment'
  var day = moment().toString()

  console.log(studentId,'studentId')
  
    req.check('uid','Enter Student ID').notEmpty();
    req.check('fullname','Enter Student Name').notEmpty();
    req.check('date','Enter Date').notEmpty();
    req.check('term','Enter Term').notEmpty();
    req.check('amount','Enter Fees Amount').notEmpty();
    req.check('receiptNumber','Enter Receipt Number').notEmpty();
    
  
    var errors = req.validationErrors();
       
    if (errors) {
      
      req.session.errors = errors;
      req.session.success = false
      res.render('students/addFees',{errors:req.session.errors,pro:pro})
    }
  else
  {
    User.findOne({'uid':uid})
    .then(user=>{
      if(user){
  
  
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
        fees.paymentId = 'null'
        fees.invoCode = code
        fees.receiptNumber = receiptNumber;
 
      
      
      
        fees.save()
          .then(fee =>{
            User.find({uid:uid},function(err,docs){
             // console.log(docs,'docs')
              let parentEmail =docs[0].parentEmail
              let idS = docs[0]._id
             User.findByIdAndUpdate(xId,{$set:{studentId:idS,amount:amount,receiptNumber:receiptNumber,paymentCode:fee._id,parentEmail:parentEmail}},function(err,gocs){
            

  console.log('xId',xId)
  
              balance = docs[0].balance;
              newBalance = docs[0].balance + fee.amount;
  console.log(balance,'balance',fee.amount,'amount',newBalance,'newBalance')
              if(newBalance >= 0){
      
                User.findByIdAndUpdate(docs[0]._id,{$set:{balance:newBalance, status:"paid", term:term,amount:amount, year:year,balanceCarriedOver:balance,receiptNumber:fee._id}},function(err,docs){
              
          
                
              
                })
            
              }else
              
              User.findByIdAndUpdate(docs[0]._id,{$set:{balance:newBalance, status:"owing",amount:amount, term:term, year:year,balanceCarriedOver:balance,receiptNumber:fee._id}},function(err,docs){
              
              
                
              
              })
              
              
  
  
  
            })
  
          })
  
          })
  
  
  
      }
      
    res.redirect('/clerk/printX')
  })
  }
   
  })
  
  
  router.get('/printX',isLoggedIn,function(req,res){
var code = req.user.invoCode
    var term= req.user.term
var m = moment()
var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  var studentId = req.user.studentId
  console.log(studentId,'arr')
/*console.log(arr,'iiii')*/

//User.findById(studentId,function(err,docs){
  User.findById(studentId).lean().then(docs=>{
    //console.log(docs,'uid')
let uid = docs.uid
let name = docs.fullname

const compile = async function (templateName, docs){
const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

const html = await fs.readFile(filePath, 'utf8')

return hbs.compile(html)(docs)

};




(async function(){

try{
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });

const page = await browser.newPage()



//const content = await compile('receipt3',docs)
const content = await compile('receipt3',docs)

await page.setContent(content, { waitUntil: 'networkidle2'});
//await page.setContent(content)
//create a pdf document
await page.emulateMediaType('screen')
let height = await page.evaluate(() => document.documentElement.offsetHeight);
await page.evaluate(() => matchMedia('screen').matches);
await page.setContent(content, { waitUntil: 'networkidle0'});
//console.log(await page.pdf(),'7777')

await page.pdf({
  path:(`./finance/${year}/${month}/${name}_${code}`+'.pdf'),
  height: height + 'px',
printBackground:true
})
var repo = new ReceiptFile();
      
      repo.studentName =name
      repo.month = month;
      repo.code = code;
      repo.studentId = studentId;
      repo.term = term;
      repo.type = 'Invoice';
      repo.filename = code+'.pdf';
      repo.year = year;
      repo.date = mformat
      repo.save().then(poll =>{
      console.log("Done creating pdf",)
      })
res.redirect('/clerk/print')
/*await browser.close()

process.exit()*/

}catch(e) {

console.log(e)
}

}) ()


})




  })
  

  router.get('/emailInvoice/:id',isLoggedIn,function(req,res){
    var uid = req.params.id
    var month = m.format('MMMM')
var year = m.format('YYYY')

  
    User.find({uid:uid},function(err,docs){
   
  if(docs){
       let email = docs[0].parentEmail
   
       
   
   
   
   
   
               
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       port:465,
       secure:true,
       logger:true,
       debug:true,
       secureConnection:false,
       auth: {
           user: "kratosmusasa@gmail.com",
           pass: "znbmadplpvsxshkg",
       },
       tls:{
         rejectUnAuthorized:true
       }
       //host:'smtp.gmail.com'
     });
     let mailOptions ={
       from: '"Admin" <kratosmusasa@gmail.com>', // sender address
                   to: email, // list of receivers
                   subject: "Invoice",
       //text:"Node js testing",
       attachments: [
         {
           filename:'document.pdf',
           path:`./finance/${year}/${month}/${name}_${code}`+'.pdf'
         }
       ]
     };
     transporter.sendMail(mailOptions, function (error,info){
       if(error){
         console.log(error)
         req.flash('danger', 'Reports Not Emailed!');
    
  res.redirect('/clerk/addFees')
       }else{
         console.log('Email sent successfully')
         req.flash('success', 'Invoice Emailed Successfully!');
    
  res.redirect('/clerk/addFees')
       }
     })
   
   }
   })
   
   })
router.get('/genEmail2',isLoggedIn,function(req,res){
  //User.find({role:"parent"},function(err,docs){
 let email= req.user.parentEmail
 let uid = req.user.studentUid
  /* for(var i = 0;i<docs.length;i++){
     let email = docs[i].email
     let studentId = docs[i].studentId*/
 
 
 
 
 
             
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     port:465,
     secure:true,
     logger:true,
     debug:true,
     secureConnection:false,
     auth: {
         user: "kratosmusasa@gmail.com",
         pass: "znbmadplpvsxshkg",
     },
     tls:{
       rejectUnAuthorized:true
     }
     //host:'smtp.gmail.com'
   });
   let mailOptions ={
     from: '"Admin" <kratosmusasa@gmail.com>', // sender address
                 to: email, // list of receivers
                 subject: "Fees Receipt",
     //text:"Node js testing",
     attachments: [
       {
         filename:'document.pdf',
         path:(`./finance/${year}/${month}/${uid}`+'.pdf')
       }
     ]
   };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Receipt Not Emailed!');
  
       res.redirect('/clerk/print')
     }else{
       console.log('Email sent successfully')
       req.flash('success', 'Receipt Emailed Successfully!');
  
       res.redirect('/clerk/print')
     }
   })
 

 
 })



  router.get('/print',isLoggedIn,function(req,res){
    var uid =req.user.studentId;
  var day = moment().toString();
  var amount = req.user.amount
  var receiptNumber = req.user.paymentCode
    
    User.findById(uid,function(err,zocs){
  
      
         
         res.render('accounts/receipt3', {
           date:day,uid:uid,user:zocs, clerk:req.user.fullname, amount:amount,receiptNumber:receiptNumber,})
     
    })
  })
  
  

  router.get('/arrInvoice',isLoggedIn,function(req,res){
  
    
    User.find({role:"student"},function(err,docs){
    for(var i=0;i<docs.length;i++){
    let code= docs[i].uid
     arrInvoice[code]=[]
    }
    })
    
    res.redirect('/clerk/invoiceProcess')
    
    })
    
    




    router.get('/invoiceProcess',isLoggedIn,function(req,res){

     
      User.find({role:"student"}).lean().then(vocs=>{
      
      
      for(var x = 0;x<vocs.length;x++){
      let code = vocs[x].uid
      console.log(code,'code')
      if( arrInvoice[code].length > 0 && arrInvoice[code].find(value => value.uid == code) ){
      
      arrInvoice[code].push(vocs[x])
      
          }
          
           
          
          
          else{
            arrInvoice[code].push(vocs[x])
                
            } 
      
      
       
      
           
      
      }  
          })
          
          res.redirect('/clerk/invoiceGeneration')
        
      
      /*})*/
      
      })
      
      
      
      





    router.get('/invoiceGeneration',isLoggedIn,function(req,res){
console.log(arrInvoice,'arrInvoice')
      var m = moment()
      var mformat = m.format('L')
      var month = m.format('MMMM')
      var year = m.format('YYYY')
      var term = req.user.term
    
      /*console.log(arr,'iiii')*/
      User.find({role:'student'},function(err,docs){
        for(var i = 0; i< docs.length;i++){
        
        
        let code = docs[i].uid
        let name = docs[i].fullname
      
      //console.log(docs,'docs')
      
      const compile = async function (templateName, arrInvoice){
      const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
      
      const html = await fs.readFile(filePath, 'utf8')
      
      return hbs.compile(html)(arrInvoice)
      
      };
      
      
      
      
      (async function(){
      
      try{
      //const browser = await puppeteer.launch();
      const browser = await puppeteer.launch({
      headless: true,
      args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
      ],
      executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
      });
      
      const page = await browser.newPage()
      
      
      
      //const content = await compile('report3',arr[uid])
      const content = await compile('invoice2',arrInvoice[code])
      
      //const content = await compile('index',arr[code])
      
      await page.setContent(content, { waitUntil: 'networkidle2'});
      //await page.setContent(content)
      //create a pdf document
      await page.emulateMediaType('screen')
      
      await page.evaluate(() => matchMedia('screen').matches);
      await page.setContent(content, { waitUntil: 'networkidle0'});
      //console.log(await page.pdf(),'7777')
      
      await page.pdf({
      //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
      path:(`./public/invoiceReports/${year}/${code}`+'.pdf'),
    format:"A4",
      width:'30cm',
      height:'21cm',
    
      printBackground:true
      
      })
      
      
      
      var repo = new InvoiceFile();
      
      repo.studentName =name
      repo.month = month;
      repo.code = code;
      repo.term = term;
      repo.type = 'Invoice';
      repo.filename = code+'.pdf';
      repo.year = year;
      repo.date = mformat
      repo.save().then(poll =>{
      console.log("Done creating pdf",)
      })
      
      
      /*await browser.close()
      
      process.exit()*/
      req.flash('success', 'Report Generation Successful');
      
      //res.redirect('/clerk/generatedQuote');
      
      
      }catch(e) {
      
      console.log(e)
      
      
      }
      
      
      }) ()
      
      
      
      
      //res.redirect('/hostel/discList')
    }
    })
      })
      
      
      

    
      
      

router.get('/folderTermInvoiceReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('invoiceFolderReg/fileClass3',{listX:docs,pro:pro})

        
  })
})

//
router.get('/invoiceSelectTermFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })


     
          res.render('invoiceFolderReg/term',{pro:pro,year:id})

        
  
})



router.get('/folderCodeInvoiceReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  var  year = req.user.hostelYear
  User.findByIdAndUpdate(uid,{$set:{hostelTerm:id}},function(err,locs){

  })
 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  InvoCode.find({year:year,term:id}).then(docs=>{
     
          res.render('invoiceFolderReg/fileClass4',{listX:docs,pro:pro,year:year,term:id})

        
  })
})

//////x2



////view files
router.get('/viewTermlyInvoiceFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var term = req.user.hostelTerm
  
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var year = req.user.hostelYear
  

  

   InvoiceFile.find({year:year,term:term,invoiceCode:id},function(err,docs){
     if(docs){

   
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }


res.render('invoiceFolderReg/filesTerm',{listX:arr,pro:pro,code:id,year:year,term:term,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
}
})
    


})
//


//download voucher annual file

/*router.get('/downloadTermlyInvoiceReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')

  var mformat = m.format('L')
  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
    //res.download( './public/uploads/'+name, name)
 
    res.download( './public/invoiceReports/'+year+'/'+term+'/'+name, name)
  })  

})*/

        
  
  router.get('/downloadTermlyInvoiceReport/:id',(req,res)=>{
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
  
  
//email invoice



router.get('/emailInvoiceFile/:id',isLoggedIn,function(req,res){
  var code = req.params.id

  InvoiceFile.findById(req.params.id,function(err,doc){
 /*
if(doc){
  let term = doc.term
  let year = doc.year
  let invoNumber = doc.invoiceNumber

  User.find({uid:doc.code},function(err,docs){
*/
  
     let email = doc.studentEmail
     let name = doc.studentName
     let uid = doc.studentId
     let invoNumber = doc.invoiceNumber
     let year = doc.year
     let term = doc.term
   
     var mongo = require('mongodb');
  var Grid = require('gridfs-stream');
  
  // create or use an existing mongodb-native db instance
  var db = new mongo.Db('euritDB', new mongo.Server("0.0.0.0:27017", 27017));
  var gfs = Grid(db, mongo);
  console.log('4444')
  // streaming to gridfs
  /*var writestream = gfs.createWriteStream({
      filename: filename
  });*/
  
 var rstream = gfs.createReadStream(filename);
 var bufs = [];
 console.log(777)
 rstream.on('data', function (chunk) {
     bufs.push(chunk);
 }).on('error', function () {
     res.send();
 })
 .on('end', function () { // done
 
             var fbuf = Buffer.concat(bufs);
 
             var File = (fbuf.toString('base64'));
 
             //res.send(File);
 
  });  
  
 
 
 
     const transporter = nodemailer.createTransport({
      host: 'mail.steuritinternationalschool.org',
      port:465,
      secureConnection:true,
      logger:true,
      debug:true,
      secureConnection:false,
      auth: {
          user: "admin@steuritinternationalschool.org",
          pass: "steurit2024",
      },
      tls:{
        rejectUnAuthorized:true
      }
      //host:'smtp.gmail.com'
    });
    
  
   let mailOptions ={
    from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `  Invoice ${invoNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your invoice-${invoNumber} for 690.00 is attached.Please remit payment
       at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+name+'_'+'Invoice'+'.pdf',
           path:File
         }
       ]
     };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Invoice Not Emailed!');
  
res.redirect('/clerk/viewTermlyInvoiceFile/'+term)
     }else{
       console.log('Email sent successfully',uid)
      /* req.flash('success', 'Email sent successfully');
  
res.redirect('/clerk/viewTermlyInvoiceFile/'+term)*/
     }
   })
  })
 
 
 })

///monthly Folder

router.get('/folderMonthlyInvoiceReg/',isLoggedIn,function(req,res){
  var pro = req.user


 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('invoiceMonthlyFolderReg/fileMonthly',{listX:docs,pro:pro})

        
  })
})


////
router.get('/invoSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('invoiceMonthlyFolderReg/month',{pro:pro,listX:docs,id:id})

  })
  
})

router.get('/viewMonthlyInvoiceFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var pro = req.user
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  

  

  InvoiceFile.find({year:year,month:id,type1:"single",type:"Invoice"},function(err,docs){
     if(docs){

      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }



res.render('invoiceMonthlyFolderReg/filesMonth',{listX:arr,pro:pro,id:id,year:year,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
}
})
    


})


/*
router.get('/downloadMonthlyInvoiceReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')

  var mformat = m.format('L')
  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
    //res.download( './public/uploads/'+name, name)
 
    res.download( './public/invoiceReports/'+year+'/'+term+'/'+name, name)
  })  

})*/


       
  
router.get('/downloadMonthlyInvoiceReport/:id',(req,res)=>{
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

router.get('/emailMonthlyInvoiceFile99/:id',isLoggedIn,function(req,res){

  var fileId = req.params.id
  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
  

    const rstream = bucket.openDownloadStream(files[0]._id);
       // readStream.pipe(res);

   
       // var rstream = gfs.createWriteStream({ filename: filename});
      //  console.log(rstream,'rstream')
       // rstream.pipe(res)
        var bufs = []
        rstream.on('data',function(chunk){
          bufs.push(chunk);
          console.log('I dont luv em')
        }).on('error',function(){
          res.send
        })
        .on('end',function(){
          var fbuf = Buffer.concat(bufs);
          // File = (fbuf.toString('base64'))
   
           console.log(File,'File')
           console.log('I dont luv em2')
        })

  })


})

 
router.get('/emailMonthlyInvoiceFile/:id',isLoggedIn,function(req,res){
  var code = req.params.id

  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  InvoiceFile.findById(req.params.id,function(err,doc){
    const fs = require("fs");
 /*
if(doc){
  let term = doc.term
  let year = doc.year
  let invoNumber = doc.invoiceNumber

  User.find({uid:doc.code},function(err,docs){
*/ /*var mongo = require('mongodb');
var Grid = require('gridfs-stream');*/
  
// create or use an existing mongodb-native db instance
/*var db = new mongo.Db('euritDB', new mongo.Server("0.0.0.0:27017", 27017));
var gfs = Grid(db, mongo);
console.log('4444')*/
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});
var File


  
     let email = doc.studentEmail
     let name = doc.studentName
     let uid = doc.studentId
     let invoNumber = doc.invoiceNumber
     let year = doc.year
     let term = doc.term
     let month = doc.month
     let filename = doc.filename
     let fileId = doc.fileId
     console.log(filename,'flename')


     gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {

     //var ws = fs.createReadStream({_id:fileId});
    var rstream =  bucket.openDownloadStream(files[0]._id);
    // var rstream = gfs.createWriteStream({ filename: filename});
   //  console.log(rstream,'rstream')
     //rstream.pipe(res)
     var bufs = []
     rstream.on('data',function(chunk){
       bufs.push(chunk);
       console.log('I dont luv em')
     }).on('error',function(){
       res.send
     })
     .on('end',function(){
       var fbuf = Buffer.concat(bufs);
        File = (fbuf.toString('base64'))

       // console.log(File,'File')
        console.log('I dont luv em2')
   
         // readStream.pipe(res);
  

     const transporter = nodemailer.createTransport({
      host: 'mail.steuritinternationalschool.org',
      port:465,
      secureConnection:true,
      logger:true,
      debug:true,
      secureConnection:false,
      auth: {
          user: "admin@steuritinternationalschool.org",
          pass: "steurit2024",
      },
      tls:{
        rejectUnAuthorized:true
      }
      //host:'smtp.gmail.com'
    });
    
  
   let mailOptions ={
    from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `  Invoice ${invoNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your invoice-${invoNumber} for 690.00 is attached.Please remit payment
       at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:filename,
           content: File,
           encoding: 'base64'
           /*path:fbuf*/
         }
       ]
     };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Invoice Not Emailed!');
  
res.redirect('/clerk/viewMonthlyInvoiceFile/'+month)
     }else{
       console.log('Email sent successfully',uid)
       req.flash('success', 'Email sent successfully');
  
res.redirect('/clerk/viewMonthlyInvoiceFile/'+month)
     }
   })
  })
     })
})

})
  
 

///receipts repo


router.get('/folderMonthlyReceiptReg/',isLoggedIn,function(req,res){
  var pro = req.user


 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('receiptMonthlyFolderReg/fileMonthly',{listX:docs,pro:pro})

        
  })
})


////
router.get('/receiptSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('receiptMonthlyFolderReg/month',{pro:pro,listX:docs,id:id})

  })
  
})

router.get('/viewMonthlyReceiptFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var pro = req.user
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  

  

 InvoiceFile.find({year:year,month:id,type:"Receipt"},function(err,docs){
     if(docs){

   



res.render('receiptMonthlyFolderReg/filesMonth',{listX:docs,pro:pro,id:id,year:year,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
}
})
    


})


/*
router.get('/downloadMonthlyReceiptReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')

  var mformat = m.format('L')
  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
    //res.download( './public/uploads/'+name, name)
 
    res.download( './public/receiptReports/'+year+'/'+term+'/'+name, name)
  })  

})*/


  
router.get('/downloadMonthlyReceiptReport/:id',(req,res)=>{
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
router.get('/openReceiptFile/:id', function (req, res) {

  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
  var filePath = "./receiptReports/"+year+'/'+term+'/'+name;

  fs.readFile(__dirname + filePath , function (err,data){
      res.contentType("application/pdf");
      res.send(data);
  });
})
});*/




/*
router.get('/openReceiptFile/:id', function (req, res) {

  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
  var path = "./public/receiptReports/"+year+'/'+term+'/'+name;

 // const path = './public/images/1.pdf'
  if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      fs.createReadStream(path).pipe(res)
  } else {
      res.status(500)
      console.log('File not found')
      res.send('File not found')
  }
})
});*/

  

router.get('/openReceiptFile/:id',(req,res)=>{
  var fileId = req.params.id
    const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
    gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
    
  
      const readStream = bucket.openDownloadStream(files[0]._id);
          readStream.pipe(res);
  
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })
  
  
router.get('/chunkUpdate',function(req,res){
  let filename = "10586_Blessing Musasa.pdf"
  //const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
 /* gfs.files.find().toArray((err, files) => {
for(var i =0;i<files.length;i++){
  let fileId = files[i]._id
  let filename = files[i].filename
  InvoiceFile.find({filename:filename},function(err,docs){
    let invoId = docs[0]._id
  InvoiceFile.findByIdAndUpdate(invoId,{$set:{fileId:fileId}},function(err,locs){

  })
  })
}
  })*/
  var mongo = require('mongodb');
  var Grid = require('gridfs-stream');
  
  // create or use an existing mongodb-native db instance
  var db = new mongo.Db('euritDB', new mongo.Server("0.0.0.0:27017", 27017));
  var gfs = Grid(db, mongo);
  console.log('4444')
  // streaming to gridfs
  /*var writestream = gfs.createWriteStream({
      filename: filename
  });*/
  
 var rstream = gfs.createReadStream(filename);
 var bufs = [];
 console.log(777)
 rstream.on('data', function (chunk) {
     bufs.push(chunk);
 }).on('error', function () {
     res.send();
 })
 .on('end', function () { // done
 
             var fbuf = Buffer.concat(bufs);
 
             var File = (fbuf.toString('base64'));
 
             res.send(File);
 
  });
 
})

router.get('/chunkUpdate2',function(req,res){
  var mongo = require('mongodb');
  var Grid = require('gridfs-stream');
  
  // create or use an existing mongodb-native db instance
  const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/euritDB';

  const conn = mongoose.createConnection(mongoURI);
  var fileId = mongoose.Types.ObjectId("542e684a8a1cec178a172671");
  var gridStore = new GridStore(db, fileId, 'r');

  gridStore.open(function (err, gridStore) {
      //console.log(gridStore.currentChunk.data.buffer);
      gridStore.read(function (error,data){
          console.log(data, 'binary');
          res.writeHead(200, {'Content-Type': 'image/png'});
          var s = gridStore.stream(true);
          console.log(s);
      });
  });
})
  


router.get('/chunkUpdateX',function(req,res){
  let filename = "10586_Blessing Musasa.pdf"
  var mongo = require('mongodb');
  var Grid = require('gridfs-stream');
  
  // create or use an existing mongodb-native db instance
  const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/euritDB';

  const conn = mongoose.createConnection(mongoURI);
  
  // Init gfs
  let gfs;
  
  conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });
  
  // streaming to gridfs
  var writestream = gfs.createWriteStream({
      filename: '10586_Blessing Musasa.pdf'
  });
  fs.createReadStream('/some/path').pipe(writestream);
  
  // streaming from gridfs
  var readstream = gfs.createReadStream({
    filename: '10586_Blessing Musasa.pdf'
  });
  
  //error handling, e.g. file does not exist
  readstream.on('error', function (err) {
    console.log('An error occurred!', err);
    throw err;
  });
  
  readstream.pipe(response);

})
router.get('/openInvoiceFile/:id',(req,res)=>{
var fileId = req.params.id
  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
  

    const readStream = bucket.openDownloadStream(files[0]._id);
        readStream.pipe(res);

  })
 //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})


 /*
router.get('/openInvoiceFile/:id',(req,res)=>{
var fileId = req.params.id
grid = require('gridfs-stream');
const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/euritDB';

const conn = mongoose.createConnection(mongoURI);
let gfs, gridfsBucket; // declare one more variable with name gridfsBucket
//const conn = mongoose.connection;
conn.once('open', () => {
    // Add this line in the code
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});
//const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
 
  console.log(files,'files')
res.set('Content-Type', files[0].contentType);
gfs.createReadStream({
    filename: files[0].filename+files[0]
}).pipe(res);
 //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})

})*/



/*router.get('/openInvoiceFile/:id', function (req, res) {

  InvoiceFile.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
  var path = "./public/invoiceReports/"+year+'/'+term+'/'+name;

 // const path = './public/images/1.pdf'
  if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      fs.createReadStream(path).pipe(res)
  } else {
      res.status(500)
      console.log('File not found')
      res.send('File not found')
  }
})
});*/

router.get('/emailMonthlyReceiptFile/:id',isLoggedIn,function(req,res){
  var code = req.params.id
  
  InvoiceFile.findById(req.params.id,function(err,doc){
 /*
if(doc){
  let term = doc.term
  let year = doc.year
  let invoNumber = doc.invoiceNumber

  User.find({uid:doc.code},function(err,docs){
*/
  
     let email = doc.studentEmail
     let name = doc.studentName
     let uid = doc.studentId
     let receiptNumber = doc.receiptNumber
     let year = doc.year
     let term = doc.term
     let month = doc.month
     let amount = doc.invoiceAmountPaid
     let filename = doc.filename
     let fileId = doc.fileId
   
     
 
 
 
 
     const transporter = nodemailer.createTransport({
      host: 'mail.steuritinternationalschool.org',
      port:465,
      secureConnection:true,
      logger:true,
      debug:true,
      secureConnection:false,
      auth: {
          user: "admin@steuritinternationalschool.org",
          pass: "steurit2024",
      },
      tls:{
        rejectUnAuthorized:true
      }
      //host:'smtp.gmail.com'
    });
    
  
   let mailOptions ={
    from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `  Payment Receipt ${receiptNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your payment receipt-${receiptNumber} for ${amount} is attached. <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+name+'_'+'Receipt'+'.pdf',
           path:`./public/receiptReports/${year}/${term}/${invoNumber}_${name}.pdf`
         }
       ]
     };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Receipt Not Emailed!');
  
res.redirect('/clerk/viewMonthlyReceiptFile/'+month)
     }else{
       console.log('Email sent successfully',uid)
       req.flash('success', 'Email sent successfully');
  
res.redirect('/clerk/viewMonthlyReceiptFile/'+month)
     }
   })
  })
 
 
 })








    //role admin
    //Autocomplete for student details when recording school fees
    router.get('/autocompleteX/',isLoggedIn, function(req, res, next) {
      var name,uid, surname

        var regex= new RegExp(req.query["term"],'i');
       
        var uidFilter =User.find({uid:regex, role:"student"},{'uid':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
      
        
        uidFilter.exec(function(err,data){
       
     
      console.log('data',data)
      
      var result=[];
      
      if(!err){
         if(data && data.length && data.length>0){
           data.forEach(user=>{
     
            
         
      
              
             let obj={
               id:user._id,
               label: user.uid
    
           
         
           
             
              
      
               
             };
            
             result.push(obj);
          
         
           });
      
         }
       
         res.jsonp(result);
    
        }
      
      })
     
      });
    
    //role admin
  //this route autopopulates info of the title selected from the autompleteX route
      router.post('/autoX',isLoggedIn,function(req,res){
          var uid = req.body.code
       
      
          
         
          User.find({uid:uid},function(err,docs){
         if(docs == undefined){
           res.redirect('/clerk/addFees')
         }else
        
            res.send(docs[0])
          })
        
        
        })
        
      
      
      
  
  
  
       /* router.get('/feesRecords',isLoggedIn, (req, res) => {
          var pro = req.user
          var companyId = req.user.companyId
          Fees.find({companyId:companyId},(err, docs) => {
              if (!err) {
                  res.render("clerk/feesRecord", {
                     list:docs, pro:pro
                    
                  });
              }
          });
        });*/

        
   
  router.get('/feesRecords',isLoggedIn, function(req,res){
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
   
   
   
    Fees.find(function(err,docs){
     
      res.render('clerk/filesFinance',{listX:docs,pro:pro})
 
  })
    
  })



  
  router.get('/downloadFinanceReport/:id',isLoggedIn,function(req,res){
    var m = moment()
  //var month = m.format('MMMM')
  //var year = m.format('YYYY')
    Fees.findById(req.params.id,function(err,doc){
      var name = doc.uid;
      var month = doc.month
      var year = doc.year
      res.download( './finance/'+year+'/'+month+'/'+name+'.pdf', name+'.pdf')
    })  
  
  })




  router.get('/clients',isLoggedIn,(req, res) => {
    var pro = req.user
    
    
     User.find({role:"student"},(err, docs) => {
         if (!err) {
             res.render("acc2/clientList", {
                 listX: docs, pro:pro    
             });
         }
         else {
             console.log('Error in retrieving Student list :' + err);
         }
     });
   });
 
        
  router.get('/debtors',isLoggedIn,(req, res) => {
    var pro = req.user
    var hostel = req.user.hostel
    
     User.find({role:"student",status:"owing"},(err, docs) => {
         if (!err) {
             res.render("acc2/debtors", {
                 listX: docs, pro:pro    
             });
         }
         else {
             console.log('Error in retrieving Student list :' + err);
         }
     });
   });
 


   router.get('/creditors',isLoggedIn,(req, res) => {
    var pro = req.user

    
     User.find({role:"student",status:"paid"},(err, docs) => {
         if (!err) {
             res.render("acc2/creditors", {
                 listX: docs, pro:pro    
             });
         }
         else {
             console.log('Error in retrieving Student list :' + err);
         }
     });
   });
 
  
  
  
  

 router.get('/studentProfile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  User.findById(id,function(err,doc){
    
 
  //var pro = req.user
  res.render('acc2/overview2',{doc:doc,id:id,pro:pro})
  
})
  })

  router.get('/studentPayments/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      InvoiceFile.find({studentId:uid,type:"Receipt"},function(err,locs){
        res.render('acc2/receipts',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })
  
  router.get('/studentInvoices/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      InvoiceFile.find({studentId:uid,type:"Invoice"},function(err,locs){
        res.render('acc2/invoices',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })

  router.get('/balanceUpdate',isLoggedIn,function(req,res){
    User.find({role:"student"},function(err,docs){
      for(var i =0;i<docs.length;i++){
        let id = docs[i]._id
        let balance = docs[i].balance
       console.log(balance,'balance')
        if(balance <= 0){
          User.findByIdAndUpdate(id,{$set:{status:"paid"}},function(err,locs){

          })
        }else{
          User.findByIdAndUpdate(id,{$set:{status:"owing"}},function(err,pocs){

          })
        }
      }
    })
  })
  

  router.get('/downloadStudentInvoiceReport/:id',isLoggedIn,function(req,res){
    var m = moment()
    var month = m.format('MMMM')
  
    var mformat = m.format('L')
    InvoiceFile.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      var year = doc.year
      var term = doc.term
      //res.download( './public/uploads/'+name, name)
   
      res.download( './invoiceReports/'+year+'/'+term+'/'+name, name)
    })  
  
  })


  router.get('/studentEmailInvoiceFile/:id',isLoggedIn,function(req,res){
    var code = req.params.id
  
    InvoiceFile.findById(req.params.id,function(err,doc){
   /*
  if(doc){
    let term = doc.term
    let year = doc.year
    let invoNumber = doc.invoiceNumber
  
    User.find({uid:doc.code},function(err,docs){
  */
    
       let email = doc.studentEmail
       let name = doc.studentName
       let uid = doc.studentId
       let invoNumber = doc.invoiceNumber
       let year = doc.year
       let term = doc.term
       let id2 = doc.studentId2
     
       
   
   
   
   
       const transporter = nodemailer.createTransport({
        host: 'mail.steuritinternationalschool.org',
        port:465,
        secureConnection:true,
        logger:true,
        debug:true,
        secureConnection:false,
        auth: {
            user: "admin@steuritinternationalschool.org",
            pass: "steurit2024",
        },
        tls:{
          rejectUnAuthorized:true
        }
        //host:'smtp.gmail.com'
      });
      
    
     let mailOptions ={
      from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                     to:email, // list of receivers
                     subject: `  Invoice ${invoNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
         html:`Dear ${name}: <br> <br> Your invoice-${invoNumber} for 690.00 is attached.Please remit payment
         at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
         Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
         attachments: [
           {
             filename:uid+'_'+name+'_'+'Invoice'+'.pdf',
             path:`./invoiceReports/${year}/${term}/${invoNumber}_${name}.pdf`
           }
         ]
       };
     transporter.sendMail(mailOptions, function (error,info){
       if(error){
         console.log(error)
         req.flash('danger', 'Invoice Not Emailed!');
    
  res.redirect('/clerk/studentInvoices/'+id2)
       }else{
         console.log('Email sent successfully',uid)
        /* req.flash('success', 'Email sent successfully');
    
  res.redirect('/clerk/viewTermlyInvoiceFile/'+term)*/
       }
     })
    })
   
   
   })




   //receipts
   
  //role admin
  //adding expenses
  router.get('/expenses',isLoggedIn,clerk, function(req,res){
       var pro = req.user
    var days = moment().toString()
    res.render('accounts/expenses',{days:days, pro:pro})
  })
  
  
      
    router.post('/expenses',isLoggedIn,clerk, function(req,res){
         var pro = req.user
      var m = moment()
      var n = moment().toString()
      var description = req.body.description;
      var type = req.body.type;
      var amount = req.body.amount;
      var voucherNumber = req.body.voucherNumber;
      var status = req.body.status;
      var term = req.user.term;
      var payment = req.body.payment;
      var year = m.format('YYYY')
      var month = m.format('MMMM')
      var days = moment().toString()
      var voucherNumber = req.body.voucherNumber

  
  
  
      req.check('description','Enter Description').notEmpty();
      req.check('type','Enter Expense Type').notEmpty();
      req.check('amount','Enter Amount').notEmpty();
      req.check('voucherNumber','Enter Voucher #').notEmpty();
      req.check('status','Enter Status').notEmpty();
      req.check('payment','Enter payment method').notEmpty();
    
  
      var errors = req.validationErrors();
      if (errors) {
     
        req.session.errors = errors;
        req.session.success = false;
        res.render('accounts/expenses',{errors:req.session.errors, pro:pro})
     
      
     }
     else
     Expenses.findOne({'companyId':companyId,'voucherNumber':voucherNumber})
    .then(exp=>{
      if(exp){
        req.session.message = {
          type:'errors',
          message:'Expense already Recorded'
        }     
           res.render('accounts/expenses', {
              message:req.session.message,days:days, pro:pro })
           }
           else
  
     var expenses = new Expenses();
      
     expenses.date = n;
     expenses.description = description;
     expenses.type = type;
     expenses.amount= amount;
     expenses.term = term;
     expenses.year = year;
     expenses.voucherNumber = voucherNumber;
     expenses.status = status;
     expenses.payment = payment;
     expenses.month = month;
    
   
   
     expenses.save()
       .then(expense =>{
  
       
        req.session.message = {
          type:'success',
          message:'Expense Recorded'
        }     
           res.render('accounts/expenses', {
              message:req.session.message,days:days, pro:pro })
       })
  
   
    })
  })
           
     
  
  router.get('/expenseList',isLoggedIn, (req, res) => {
    var pro = req.user

    Expenses.find({},(err, docs) => {
        if (!err) {
            res.render("clerk/expenseRecord", {
               list:docs, pro:pro
              
            });
        }
    });
  });
  
    
  
  


 //new term fees update
 router.get('/feesUpdate',isLoggedIn,clerk, function(req,res){
   var pro = req.user
    var id = req.user.feesUpdate;
    var m = moment()
    var day = moment().toString()
    var days, endDate;
    var user = req.user.feesUpdate

    if(user == 'null'){
    

    
        res.render('clerk/feesUpdate',{pro:pro})

    }
    else
    

    
    FeesUpdate.find({_id:id},function(err,docs){
      let readonly
      try{
        
    
    if(!docs){
      throw new SyntaxError('No data')
    }
    
      endDate = moment(docs[0].endDate);
      //moment(endDate)
      days = endDate.diff(m,'days')
    console.log(days,'days')
      if(days >  0){
    readonly = 'readonly'
    title = days + '' + ' '+ 'days left until you can add new term'
        res.render('clerk/feesUpdate2',{readonly:readonly,day:day, title:title,pro:pro,doc:docs[0]})
    
      }else
    
      readonly = " ";
      console.log(readonly)
    title = ' Update '
        res.render('clerk/feesUpdate',{readonly:readonly,day:day,title:title,pro:pro})
      
      }catch(e){
        res.send(e.message)
       }
    
    
    })
      })
      
      router.post('/feesUpdate',isLoggedIn,clerk,  function(req,res){
      var startDate = req.body.startDate;
      var endDate = req.body.endDate;
      var balanceX, status, term, year, balanceCarriedOver, balance
      var id = req.user._id
      var m = moment()
      var date = moment().toString()
      term = req.body.term
      year = m.format('YYYY')
      var feeX = req.body.fees
      var annual = req.body.annual
      var companyId = req.user.companyId
      
     
      
      b =moment(startDate).valueOf()
      bs = moment(b).toString()
      console.log('startDate',b)
      f = moment(endDate).valueOf()
      fstr = moment(f)
      console.log('fstr',fstr)
      console.log('endDate',f)
     //var days = f.diff(b,"days")
     var days = m.diff(bs,'days')
     
       
     console.log(days,'days')
     req.check('startDate','Enter Start of Term').notEmpty();
     req.check('endDate','Enter End of Term').notEmpty();
     req.check('fees','Enter Fees').notEmpty().isNumeric();
     req.check('annual','Enter Annual Fees').notEmpty().isNumeric();
     req.check('term','Enter Term').notEmpty();
    
     var errors = req.validationErrors();
     if (errors) {
    
       req.session.errors = errors;
       req.session.success = false;
       res.render('clerk/feesUpdate',{errors:req.session.errors,pro:pro})
    
     
    }
    
      var fees = new FeesUpdate();
        
      fees.date = date;
      fees.startDate = startDate;
      fees.endDate = endDate;
      fees.fees= req.body.fees;
      fees.annual = annual;
      fees.term = term;
      fees.year = year
      fees.companyId = companyId
    
      fees.person = req.user.fullname
    
    
      fees.save()
        .then(fee =>{
       var adminBal = 0 - fee.fees
          User.findByIdAndUpdate(id,{$set:{feesUpdate:fee._id,term:term,balance:adminBal,fees:feeX,annual:annual}},function(err,docs){
    
    
          })
    
    
      User.find({companyId:companyId,role:"student"},function(err,nocs){
      
      for(var i  = 0; i< nocs.length; i++){
      balanceX = nocs[i].balance 
      balance = balanceX - feeX
      balanceCarriedOver = nocs[i].balance
    
      console.log('balance',balance)
      console.log('balanceX', balanceX)
      console.log('fees',feeX)
    
      if(balance > 0){
        
        User.findByIdAndUpdate(nocs[i]._id,{$set:{balance:balance, status:"paid", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:fee._id,annual:annual,fees:feeX}},function(err,docs){
      
      
        
      
        })
    
      }else
      
      User.findByIdAndUpdate(nocs[i]._id,{$set:{balance:balance, status:"owing", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:fee._id,annual:annual,fees:feeX}},function(err,docs){
      
      
        
      
      })
      
      }
      res.redirect('/clerk/feesUpdateX')
      })
    })
      
      })
    


router.get('/feesUpdateX',isLoggedIn,function(req,res){
  res.redirect('/clerk/feesUpdate')
})


////invoice

router.get('/stDelete',function(req,res){
  User.find({role:"student"},function(err,docs){
    for(var i = 0;i<docs.length;i++){
    let id = docs[i]._id
    User.findByIdAndRemove(id,function(err,locs){

    })

  }
  })
})

router.get('/chunks',isLoggedIn,function(req,res){
  var count = req.user.countN 
  var count2 = count * 10
  var n = count2 - 10
  console.log(n,'nnn')
  console.log(count,'count')
var chunk = count * 20

var id = req.user._id

 
  User.find({role:'student',teacherId:"sent"}).sort({studentNumber:1}).then(docs=>{
    if(count2>docs.length){
      let newCount = count2 - docs.length
for(var i = n; i<docs.length;i++ ){
  let studentId = docs[i].uid
  arr9[studentId]=[]
}

count++
User.findByIdAndUpdate(id,{$set:{countN:count}},function(err,docs){

})
console.log(arr9,'arr90')


    }else{
      for(var i = n; i<count2;i++ ){
        let studentId = docs[i].uid
        arr9[studentId]=[]
      }
      
      count++
      User.findByIdAndUpdate(id,{$set:{countN:count}},function(err,docs){
      
      })
    }



    res.redirect('/clerk/invoiceNumberUpdate2')
  })






})


//aggStudentTerm

//monthly student voucher reports
router.get('/arrInvoiceUpdate',isLoggedIn,function(req,res){

  
 User.find({role:"student"},function(err,docs){
    for(var i=0;i<docs.length;i++){
      let studentId = docs[i].uid
       arr9[studentId]=[]
    }
  })
  
  res.redirect('/clerk/invoiceNumberUpdate2')
  
  })
  
//aggTerm

router.get('/invoiceNumberUpdate2',isLoggedIn,function(req,res){
  var id = req.user._id
  var count = req.user.countN - 1
  let count2 = count * 10
  var n = count2 - 10
  console.log(n,'nnn')
  console.log(count,'count')
    InvoNum.find(function(err,doc){
      let invoNum = doc[0].num
      let invoId = doc[0]._id
 
        console.log('yessssssss')
      User.find({role:'student',teacherId:"sent"}).sort({studentNumber:1}).then(rocs=>{

        if(count2 > rocs.length){
//count2 = rocs.length
let newCount = count2 - rocs.length
     
for(var i = n;i<rocs.length;i++){
//console.log(rocs[i],'rocks')
let uid=rocs[i]._id
 
  User.findByIdAndUpdate(uid,{$set:{invoNumber:invoNum}},function(err,docs){
  
  })
  invoNum++
  InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
  
  })




}
  /*
  InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
  
  })
  */

}else{
  for(var i = n;i<count2;i++){
    //console.log(rocs[i],'rocks')
    let uid=rocs[i]._id
     
      User.findByIdAndUpdate(uid,{$set:{invoNumber:invoNum}},function(err,docs){
      
      })
      invoNum++
      InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
      
      })
    
    
    
    
    }
}
    })

  
    res.redirect('/clerk/invoProcess')
  
  })

  })
  

 //aggg
//aggVouchers

router.get('/invoProcess',isLoggedIn,function(req,res){
  var count = req.user.countN - 1
  var count2 = count * 10
  var n = count2 - 10
  console.log(n,'nnn')
  console.log(count,'count')
  
  console.log(count,'countProcess')
  //console.log(docs[i].uid,'ccc')
  
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    
      User.find({role:'student',teacherId:"sent"}).lean().sort({studentNumber:1}).then(vocs=>{
        if(count2 > vocs.length){
          let newCount = count2 - vocs.length
  for(var x = n;x<vocs.length;x++){

    let uid = vocs[x].uid
  
  
  if( arr9[uid].length > 0 && arr9[uid].find(value => value.uid == uid) ){
  
  arr9[uid].push(vocs[x])
  
      }
      
       
      
      
      else{
        arr9[uid].push(vocs[x])
            
        } 
  
  
   
  
       
  
  }
}else{


  for(var x = n;x<count2;x++){

    let uid = vocs[x].uid
  
  
  if( arr9[uid].length > 0 && arr9[uid].find(value => value.uid == uid) ){
  
  arr9[uid].push(vocs[x])
  
      }
      
       
      
      
      else{
        arr9[uid].push(vocs[x])
            
        } 
  
  
   
  
       
  
  }



}
  

      })

    
      
      res.redirect('/clerk/invoGeneration2')
    
  
  /*})*/
  
  })
  
  


  router.get('/invoGeneration2',isLoggedIn,function(req,res){
    var idX  =req.user._id
    var count = req.user.countN - 1
    var count2 = count * 10
    var n = count2 - 10
    console.log(n,'nnn')
    console.log(count,'count')
  //console.log(arr9,'arr9')
    var m = moment()
    var mformat = m.format('L')
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var term = req.user.term
      var xId = req.user._id
    
  /*console.log(arr,'iiii')*/
  
    User.find({role:'student',teacherId:"sent"}).lean().sort({studentNumber:1}).then(locs=>{

      if(count2>locs.length){
       
        let newCount = count2 - locs.length
        let newCount2 = newCount * 10
        console.log('eheeee',count2,locs.length,newCount,newCount2)
    for(var x = n; x<locs.length;x++){
      let uid= locs[x].uid
     
      let name = locs[x].fullname
      let fees = 690
      let invoNum = locs[x].invoNumber
    
    
    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arr9){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arr9)
   
  };
  
  
  
  
   (async function(){
  
  try{
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  
  const page = await browser.newPage()
  
  
  
   //const content = await compile('report3',arr[uid])
   const content = await compile('euritInvoice',arr9[uid])
  

  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./public/invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
    //format:"A4",
    /*width:'30cm',
  height:'21cm',*/
  height: height + 'px',
    printBackground:true
  })
  
  
  var repo = new InvoiceFile();
      
      repo.studentName =name
      repo.month = month;
      repo.code = uid;
      repo.term = term;
      repo.type = 'Invoice';
      repo.type1 = "batch"
      repo.filename = uid+'_'+name+'.pdf';
      repo.year = year;
      repo.date = mformat
      repo.invoiceNumber = invoNum
      repo.status = "unpaid"
      repo.amountPaid = 0
      repo.amountDue= fees
      repo.datePaid = "null"
      repo.save().then(poll =>{
      console.log("Done creating pdf",)




      })
  
  

  /*await browser.close()
  
  process.exit()*/

 
  
  /*req.flash('success', 'Report Generation Success');
 
  res.redirect('/clerk/dash');*/
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  

}


User.findByIdAndUpdate(xId,{$set:{countN:1}},function(err,focs){

})
      }
      else{

        for(var x = n; x<count2;x++){
          let uid= locs[x].uid
         
          let name = locs[x].fullname
          let fees = 690
          let invoNum = locs[x].invoNumber
        
        
        
      //console.log(docs,'docs')
      
      const compile = async function (templateName, arr9){
        const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
      
        const html = await fs.readFile(filePath, 'utf8')
      
        return hbs.compile(html)(arr9)
       
      };
      
      
      
      
       (async function(){
      
      try{
      //const browser = await puppeteer.launch();
      const browser = await puppeteer.launch({
        headless: true,
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
      });
      
      const page = await browser.newPage()
      
      
      
       //const content = await compile('report3',arr[uid])
       const content = await compile('euritInvoice',arr9[uid])
      
    
      await page.setContent(content, { waitUntil: 'networkidle2'});
       //await page.setContent(content)
      //create a pdf document
      await page.emulateMediaType('screen')
      let height = await page.evaluate(() => document.documentElement.offsetHeight);
      await page.evaluate(() => matchMedia('screen').matches);
      await page.setContent(content, { waitUntil: 'networkidle0'});
      //console.log(await page.pdf(),'7777')
      
      await page.pdf({
        //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
        path:(`./public/invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
        //format:"A4",
        /*width:'30cm',
      height:'21cm',*/
      height: height + 'px',
        printBackground:true
      })
      
      
      var repo = new InvoiceFile();
          
          repo.studentName =name
          repo.month = month;
          repo.code = uid;
          repo.term = term;
          repo.type = 'Invoice';
          repo.filename = uid+'_'+name+'.pdf';
          repo.year = year;
          repo.date = mformat
          repo.invoiceNumber = invoNum
          repo.status = "unpaid"
          repo.amountPaid = 0
          repo.amountDue= fees
          repo.datePaid = "null"
          repo.save().then(poll =>{
          console.log("Done creating pdf",)
          })
      
      
      /*await browser.close()
      
      process.exit()*/
    
      
      
      /*req.flash('success', 'Report Generation Success');
     
      res.redirect('/clerk/dash');*/
      
      }catch(e) {
      
        console.log(e)
      
      
      }
    
      
      }) ()
    
    
      
    
    }





      }

}) 
  

  })



/*
  router.get('/genEmailInvo',isLoggedIn,function(req,res){
    var m = moment()
    var mformat = m.format('L')
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var term = req.user.term
  
  
    User.find({role:"student"},function(err,docs){
   
     for(var i = 0;i<docs.length;i++){
       let email = docs[i].email
       let uid = docs[i].uid
       let name = docs[i].fullname
       let invoNumber = docs[i].invoNumber
   
   
   
   
   
               
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       port:465,
       secure:true,
       logger:true,
       debug:true,
       secureConnection:false,
       auth: {
           user: "kratosmusasa@gmail.com",
           pass: "znbmadplpvsxshkg",
       },
       tls:{
         rejectUnAuthorized:true
       }
       //host:'smtp.gmail.com'
     });
     let mailOptions ={
       from: '"St Eurit International School" <kratosmusasa@gmail.com>', // sender address
                   to: email, // list of receivers
                   subject: `  Invoice ${invoNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your invoice-${invoNumber} for 690.00 is attached.Please remit payment
       at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+name+'_'+'Invoice'+'.pdf',
           path:`./invoiceReports/${year}/${term}/${uid}_${name}.pdf`
         }
       ]
     };
     transporter.sendMail(mailOptions, function (error,info){
       if(error){
         console.log(error)
         req.flash('danger', 'Reports Not Emailed!');
    
  res.redirect('/clerk/dashX')
       }else{
         console.log('Email sent successfully')
         req.flash('success', 'Reports Emailed Successfully!');
    
  res.redirect('/clerk/dashX')
       }
     })
   
   }
   })
   
   })
*/

router.get('/pushPdf',isLoggedIn,function(req,res){


})

   router.get('/genEmailInvo',isLoggedIn,function(req,res){
    var m = moment()
    var mformat = m.format('L')
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var id= req.user._id
    var term = req.user.term
    /*var count = req.user.countN
    count + 1
    let email = 'kratosmusasa@gmail.com'
    let uid = req.user.studentId
    let name = req.user.studentName
    let invoNumber = 3490*/
  
     const transporter = nodemailer.createTransport({
       host: 'mail.steuritinternationalschool.org',
       port:465,
       secureConnection:true,
       logger:true,
       debug:true,
       secureConnection:false,
       auth: {
           user: "admin@steuritinternationalschool.org",
           pass: "steurit2024",
       },
       tls:{
         rejectUnAuthorized:true
       }
       //host:'smtp.gmail.com'
     });
     
   

             
  
  (async function(){
  

    
    try{   

       User.find({role:"student",class:"ECD-B "},async function(err,docs){
   
      for(var i = 50;i<56;i++){
        let email = docs[i].email
        let uid = docs[i].uid
        let name = docs[i].fullname
        let invoNumber = docs[i].invoNumber 
     let mailOptions ={
       from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `  Invoice ${invoNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your invoice-${invoNumber} for 690.00 is attached.Please remit payment
       at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+name+'_'+'Invoice'+'.pdf',
           path:`./public/invoiceReports/${year}/${term}/${uid}_${name}.pdf`
         }
       ]
     };
   await  transporter.sendMail(mailOptions, function (error,info){
       if(error){
         //console.log(error)
        /* req.flash('danger', 'Reports Not Emailed!');
    
  res.redirect('/clerk/dashX')*/
       }else{
      /*   console.log('Email sent successfully')
         req.flash('success', 'Reports Emailed Successfully!');
    
  res.redirect('/clerk/dashX')*/
       }
          
   console.log(email,'email')
     })

    }
  })
    }catch(e) {
    
      console.log(e)
    
    
    }
  
    
    }) ()
  
   
    
   
   })


router.get('/emailRoute2',function(req,res){
  res.redirect('/clerk/emailRoute' )

  
  
  (async function(){
  
    try{
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });
    
    const page = await browser.newPage()
    
    
    
     //const content = await compile('report3',arr[uid])
     const content = await compile('euritInvoice',arr9[uid])
    
  
    await page.setContent(content, { waitUntil: 'networkidle2'});
     //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    let height = await page.evaluate(() => document.documentElement.offsetHeight);
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
      //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
      path:(`./public/invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
      //format:"A4",
      /*width:'30cm',
    height:'21cm',*/
    height: height + 'px',
      printBackground:true
    })
    
    
    var repo = new InvoiceFile();
        
        repo.studentName =name
        repo.month = month;
        repo.code = uid;
        repo.term = term;
        repo.type = 'Invoice';
        repo.filename = uid+'_'+name+'.pdf';
        repo.year = year;
        repo.date = mformat
        repo.invoiceNumber = invoNum
        repo.status = "unpaid"
        repo.amountPaid = 0
        repo.amountDue= fees
        repo.datePaid = "null"
        repo.save().then(poll =>{
        console.log("Done creating pdf",)
  
  
  
  
        })
    
    
    /*await browser.close()
    
    process.exit()*/
  
    
    
    /*req.flash('success', 'Report Generation Success');
   
    res.redirect('/clerk/dash');*/
    
    }catch(e) {
    
      console.log(e)
    
    
    }
  
    
    }) ()
  
})





router.get('/send',function(req,res){
  var mail = require("nodemailer").mail;

  mail({
      from: "Fred Foo ✔ <kratosmusasa@gmail>", // sender address
      to: "kratosmusasa94@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world ✔", // plaintext body
      html: "<b>Hello world ✔</b>" // html body
  });
})



  
router.get('/uploadInvoice',isLoggedIn, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];



  

  
 res.render('imports/invoices',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })


   
  router.post('/uploadInvoice',upload.single('file'),(req,res,nxt)=>{
    var fileId = req.file.id
    console.log(fileId,'fileId')
    var filename = req.file.filename
    console.log(filename,'filename')
InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){



  //console.log(docs,'docs')
  let id = docs[0]._id
  InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

  })

}
  res.redirect('/clerk/uploadInvoice')
})
 
  })



  
router.get('/importYears',isLoggedIn, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Years"

  

  
 res.render('imports/years',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importYears',isLoggedIn, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
 
   var pro = req.user


 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('imports/years', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile(`./public/uploads/` + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
    
       
        
     
         
      
      
     
           let name = record.name;
        





          req.body.name = record.name


       req.check('name','Enter Year').notEmpty();

   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importYears');

}

else


           {
             Year.findOne({'year':name})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Room already in the system');

                 res.redirect('/clerk/importYears') 
 
                 //res.redirect('/records/import')
               
           }
           else





           var user = new Year();
           user.year = name
          
          
          
           user.save()
             .then(user =>{
              
             
                 
             /*  req.session.message = {
                 type:'success',
                 message:'Account Registered'
               }  
               res.render('imports/teacherX',{message:req.session.message});*/
             })

           })
         }
                  
                   // .catch(err => console.log(err))
                 
               
                   
                 
                 
        
                 
                 
                 
                   
                   
       
                  
       
                  
            
               })
               
               req.flash('success', 'File Imported Successfully!');
 
               res.redirect('/clerk/importYears') 
     
       }
     }
 
 })
 //import month
 
  
 router.get('/importMonth',isLoggedIn,function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Month"

  

  
 res.render('imports/month',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importMonth',isLoggedIn, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
   var year = m.format('YYYY')
   var id =   req.user._id
   var idNumber = req.user.idNumber
   var pro = req.user


 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('imports/month', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile(`./public/uploads/` + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
    
       
        
     
         
      
      
     
           let month = record.month;
        
           let num = record.num;




          req.body.month = record.month 
          req.body.num = record.num   


       req.check('month','Enter Month').notEmpty();

   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importMonth');

}

else


           {
             Month.findOne({'month':month})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Month already in the system');

                 res.redirect('/clerk/importMonth') 
 
                 //res.redirect('/records/import')
               
           }
           else





           var user = new Month();
           user.month = month
           user.num = num
          
          
          
           user.save()
             .then(user =>{
              
             
                 
             /*  req.session.message = {
                 type:'success',
                 message:'Account Registered'
               }  
               res.render('imports/teacherX',{message:req.session.message});*/
             })

           })
         }
                  
                   // .catch(err => console.log(err))
                 
               
                   
                 
                 
        
                 
                 
                 
                   
                   
       
                  
       
                  
            
               })
               
               req.flash('success', 'File Imported Successfully!');
 
               res.redirect('/clerk/importMonth') 
     
       }
     }
 
 })





  router.get('/euritInvoice',function(req,res){
    res.render('acc2/receiptNum')
  })






  router.get('/import',isLoggedIn,function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('imports/products',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })
  

  
  

  
  router.post('/import',isLoggedIn,uploadX.single('file'),  (req,res)=>{
    var count = req.user.actualCount
    var m = moment()
 
    
    
    var pro = req.user
    var id =   req.user._id
   
  
  /*  if(!req.file){
        req.session.message = {
          type:'errors',
          message:'Select File!'
        }     
          res.render('imports/students', {message:req.session.message,pro:pro}) */
     if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
            req.session.message = {
                type:'errors',
                message:'Upload Excel File'
              }     
                res.render('imports/products', {message:req.session.message,pro:pro
                     
                 }) 
  
  
  
        }
          
        else{
     

        
           const file = req.file.filename;
    
            
                var wb =  xlsx.readFile('./public/uploads/' + file)

             
         
                 var sheets = wb.Sheets;
                 var sheetNames = wb.SheetNames;
     
                 var sheetName = wb.SheetNames[0];
     var sheet = wb.Sheets[sheetName ];
     
        for (var i = 0; i < wb.SheetNames.length; ++i) {
         var sheet = wb.Sheets[wb.SheetNames[i]];
     
         console.log(wb.SheetNames.length)
         var data =xlsx.utils.sheet_to_json(sheet)
             
         var newData = data.map(function (record){
     
        
       
      
          
         
        
           
            let status = record.status
            let type = record.type;
            let item = record.item
            let code = record.code;
            let account = record.account;
            let cogs = record.cogs
            let assetAccount = record.assetAccount;
            let accumulatedDepreciation= record.accumulatedDepreciation
            let purchaseDescription = record.purchaseDescription
            let qty = record.qty
            let cost = record.cost
            let price = record.price
            let grossPrice = record.grossPrice
            let amountsIncludeVat = record.amountsIncludeVat;
          
            let purchasedForResale = record.purchasedForResale
          
          

req.body.type = record.type  
req.body.status = record.status 
req.body.item = record.item
req.body.code = record.code
req.body.price= record.price

//req.body.photo = record.photo          

            
        
            
              req.check('type','Enter Type').notEmpty();
              //req.check('name','Enter Name').notEmpty();
              req.check('status','Enter Status').notEmpty();
              req.check('item','Enter Item').notEmpty();
              req.check('code','Enter Code').notEmpty()
             // req.check('dob','Enter Date Of Birth').notEmpty();
              //req.check('address','Enter Address').notEmpty();
              req.check('price','Enter Price').notEmpty();
             

              var errors = req.validationErrors();
  
              if (errors) {
                
                req.session.errors = errors;
                req.session.success = false;
                req.flash('danger', req.session.errors[0].msg);
       
        
                res.redirect('/clerk/import');
              
          }
else


{
  Product.findOne({'item':item})
  .then(user =>{
      if(user){ 
    // req.session.errors = errors
      //req.success.user = false;



      req.flash('danger', 'Itemalready in the system');
  
      res.redirect('/clerk/import')
}
else{



 
          
  var product = new Product();
  product.status = status;
  product.type = type;
  product.item = item;
  product.code= code;
  product.account = account;
  product.cogs = cogs;
  product.qty = 0;
  product.cost = cost;
  product.price = price;
  product.assetAccount= assetAccount;
  product.accumulatedDepreciation = accumulatedDepreciation;
  product.amountsIncludeVat = amountsIncludeVat;
  product.purchasedForResale = purchasedForResale;
  
  product.save()
    .then(user =>{
  
  
    })
  
}
  
  })




}     
                 
                     
   
                    // .catch(err => console.log(err))
             
                 
                    })
                  
                    req.flash('success', 'File Successfully!');
  
                    res.redirect('/clerk/import')  
         
                  }
                  
                  
                    
                    
        
                   
        
                    
             
                }
      
        
  
  
  })












  router.get('/receiptNumberUpdate',isLoggedIn,function(req,res){
    var id = req.user._id
      RecNum.find(function(err,doc){
        let recNum = doc[0].num
        let recId = doc[0]._id
    
    
    User.findByIdAndUpdate(id,{$set:{recNumber:recNum}},function(err,docs){
    
    })
    recNum++
    
    RecNum.findByIdAndUpdate(recId,{$set:{num:recNum}},function(err,tocs){
    
    })

    res.redirect('/clerk/invoice')
    
      })
    
    })
    
    




  router.get('/invoice', isLoggedIn,function(req,res){
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    let dateValue = m.valueOf()
    var year = m.format('YYYY')
    var mformat = m.format('L')
    var companyAddress = req.user.companyAddress
    var companyCity = req.user.companyCity
    var companyMobile = req.user.companyMobile
    var companyCountry = req.user.companyCountry
    var companyEmail = req.user.companyEmail
    var companyName = req.user.companyName
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('abc/create',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,
    companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile})
  })


  router.post('/invoice',isLoggedIn,function(req,res){
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var date = m.format('L')
    var dateValue =m.valueOf()
    var term = req.user.term
    var studentName= req.body.clientName
    var studentEmail = req.body.clientEmail
    var studentAddress = req.body.clientAddress
    var studentMobile = req.body.mobile
    var studentId = req.body.uid
    var studentBalance = req.body.balance
    var id2 = req.body.studentId2
    var clerk1 = req.user.fullname
  var type = 'Receipt'
    ar = req.body['id[]']  
    console.log(ar)
    ar = ar.filter(v=>v!='')
  let amountD = req.body.amountX
  let amountX9 = req.body.amountX
  let amountX3 = 0 - amountX9
  //let amountPaid = req.body.amountX
  let amountX4 = req.body.amountX
  let regD = /\d+\.*\d*/g;  
  let resultD = amountD.match(regD)
  let amount= Number(resultD)
  
  let class1 = req.body.class1
  let grade = req.body.grade
  let status, balance
  var receiptNumber = req.user.recNumber
  let totalAmountOwing
  console.log(ar,'iwee')
  let reg = /\d+\.*\d*/g;  
  let result = amountX9.match(reg)
  let amountX2= Number(result)
  
  
  req.check('amountX','Enter Amount').notEmpty();
               
  
  var errors = req.validationErrors();
  
  if (errors) {
    
    req.session.errors = errors;
    req.session.success = false;
    req.flash('danger', req.session.errors[0].msg);
  
  
    res.redirect('/clerk/invoice');
  
  }
 
    else{

     if(studentBalance <0){
      let regBal = /\d+\.*\d*/g;  
      let resultBal = studentBalance.match(regBal)
      let studentBal= Number(resultBal)


      amount = amount + studentBal
      for(var i = 0; i<ar.length;i++){
    
        console.log(ar[i],'arX',i)
        let id = ar[i]
     
      
  InvoiceFile.findById(id,function(err,doc){
    let amountDue = doc.amountDue 
    let invoiceNumber = doc.invoiceNumber


    if(amount >= amountDue){
      status = 'paid'

amount = amount - amountDue
      InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amountDue,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success",remainingBalance:0}},function(err,docs){

      })


      User.findByIdAndUpdate(id2,{$set:{balance:amount}},function(err,docs){

      })

    

      var receipt = new InvoiceFile();
receipt.studentName = studentName;
receipt.studentId = studentId;
receipt.studentId2 = id2;
receipt.studentEmail = studentEmail;
receipt.studentAddress = studentAddress;
receipt.studentMobile = studentMobile;
receipt.clerk = clerk1;
receipt.class1 = class1;
receipt.term = term
receipt.grade = grade;
receipt.month= month;
receipt.filename = receiptNumber+'_'+studentName+'.pdf';
receipt.year = year;
receipt.date = date;
receipt.dateValue = dateValue;
receipt.type = type;
receipt.type1 = 'single';
receipt.name = "PMT";
receipt.invoiceNumber= invoiceNumber;
receipt.amountDue= amountDue;
receipt.receiptNumber = receiptNumber;
receipt.status = 'paid';

receipt.studentBalance = amount;
receipt.amountPaid = amountX2;
receipt.typeAmount = amountX2
receipt.remainingBalance = 0;
receipt.datePaid = date;
receipt.invoiceAmountPaid=amountDue;
receipt.invoiceAmountDue= 0;



receipt.save()
  .then(user =>{
          
    InvoiceFile.findById(id,function(err,doc){

      //console.log(doc,'try docc')
      let amountDue = doc.amountDue 
      let invoiceNumber = doc.invoiceNumber
      InvoiceSubBatch.find({invoNumber:invoiceNumber},function(err,tocs){
        for(var i = 0;i<tocs.length;i++){
          console.log(tocs[i],'tocsi')
       
          let code = tocs[i].code
    Product.find({code:code},function(err,focs){
      console.log(focs,'focs')
      if(focs[0].account == "Product Sales"){

        console.log('true')
      
            let subQty = focs[0].qty
      let idN = focs[0]._id
       
      let  rqty =  focs[0].qty
      console.log(rqty,subQty,'tryy')
      let rnQty = rqty - subQty
    // let newQuantity = rnty * focs[0].unitCases
      Product.findByIdAndUpdate(idN,{$set:{qty:rnQty}},function(err,vocs){

      })

     
    }
    })
  }
  
})
  })

 

  })
    }else{
      status = 'unpaid'
      balance = amountDue - amount

     

      InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amount,amountDue:balance,status:'unpaid',receiptNumber:receiptNumber,remainingBalance:balance}},function(err,docs){

      })

      User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){
        
      })




      var receipt = new InvoiceFile();
      receipt.studentName = studentName;
      receipt.studentId = studentId;
      receipt.studentId2 = id2;
      receipt.studentEmail = studentEmail;
      receipt.studentAddress = studentAddress;
      receipt.studentMobile = studentMobile;
      receipt.clerk = clerk1;
      receipt.class1 = class1;
      receipt.grade = grade;
      receipt.month= month;
      receipt.filename = receiptNumber+'_'+studentName+'.pdf';
      receipt.year = year;
      receipt.date = date;
      receipt.dateValue = dateValue;
      receipt.type = type;
      receipt.type1 = 'single';
      receipt.name = "PMT";
      receipt.term= term;
      receipt.invoiceNumber= invoiceNumber;
      receipt.amountDue= amountDue;
      receipt.receiptNumber = receiptNumber;
      receipt.status = 'paid';
      receipt.studentBalance = balance;
      receipt.amountPaid = amountX2;
      receipt.typeAmount = amountX2
      receipt.remainingBalance = balance;
      receipt.datePaid = date;
     
      receipt.invoiceAmountPaid=amount;
      receipt.invoiceAmountDue= balance;

      
      
      receipt.save()
        .then(user =>{
              
          InvoiceFile.findById(id,function(err,doc){

            //console.log(doc,'try docc')
            let amountDue = doc.amountDue 
            let invoiceNumber = doc.invoiceNumber
            InvoiceSubBatch.find({invoNumber:invoiceNumber},function(err,tocs){
              for(var i = 0;i<tocs.length;i++){
                console.log(tocs[i],'tocsi')
                let code = tocs[i].code
             
          Product.find({code:code},function(err,focs){
            console.log(focs,'focs')
            if(focs[0].account == "Product Sales"){
      
              console.log('true')
                
                  let subQty = focs[0].qty
            let idN = focs[0]._id
             
            let  rqty =  focs[0].qty
            console.log(rqty,subQty,'tryy')
            let rnQty = rqty - subQty
          // let newQuantity = rnty * focs[0].unitCases
            Product.findByIdAndUpdate(idN,{$set:{qty:rnQty}},function(err,vocs){
      
            })
      
           
          }
          })
        }
        
      })
        })
       
      
        })
      
    }


  })
}
      
     }else{
      let newBalance = studentBalance - amountX4
      if(newBalance >= 0){
      
      totalAmountOwing = newBalance
      
      }else{
        totalAmountOwing = 0
      }

      for(var i = 0; i<ar.length;i++){
      
        console.log(ar[i],'ar',i)
        let id = ar[i]

      
      
        InvoiceFile.findById(id,function(err,doc){
          let amountDue = doc.amountDue 
          let invoiceNumber = doc.invoiceNumber
         // let studentBal = doc.studentBalance + amountX2
          if(amount >= amountDue){
             status = 'paid'
            balance = 0
            let invoiceTotal = doc.invoiceTotal
            InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:invoiceTotal,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success",remainingBalance:totalAmountOwing}},function(err,docs){
      
            })
      
            User.findByIdAndUpdate(id2,{$set:{balance:newBalance}},function(err,docs){
      
            })

          
           // amount = amount - amountDue
      var receipt = new InvoiceFile();
      receipt.studentName = studentName;
      receipt.studentId = studentId;
      receipt.studentId2 = id2;
      receipt.studentEmail = studentEmail;
      receipt.studentAddress = studentAddress;
      receipt.studentMobile = studentMobile;
      receipt.clerk = clerk1;
      receipt.class1 = class1;
      receipt.grade = grade;
      receipt.month= month;
      receipt.filename = receiptNumber+'_'+studentName+'.pdf';
      receipt.year = year;
      receipt.date = date;
      receipt.dateValue = dateValue;
      receipt.type = type;
      receipt.type1 = 'single';
      receipt.name = "PMT";
      receipt.term= term;
      receipt.invoiceNumber= invoiceNumber;
      receipt.amountDue= amountDue;

      receipt.receiptNumber = receiptNumber;
      receipt.status = 'paid';
      receipt.studentBalance = newBalance;
      receipt.amountPaid = amountX2;
      receipt.typeAmount = amountX2
      receipt.remainingBalance = totalAmountOwing;
      receipt.datePaid = date;
      receipt.invoiceAmountPaid=amountDue;
      receipt.invoiceAmountDue= 0;
      
      
      
      receipt.save()
        .then(user =>{
             
          InvoiceFile.findById(id,function(err,doc){

            //console.log(doc,'try docc')
            let amountDue = doc.amountDue 
            let invoiceNumber = doc.invoiceNumber
            InvoiceSubBatch.find({invoNumber:invoiceNumber},function(err,tocs){
              for(var i = 0;i<tocs.length;i++){
                console.log(tocs[i],'tocsi')
                let code = tocs[i].code
                let subQty = tocs[i].qty
          Product.find({code:code},function(err,focs){
            console.log(focs,'focs')
            if(focs[0].account == "Product Sales"){
      
              console.log('true')
               
             
            let idN = focs[0]._id
             
            let  rqty =  focs[0].qty
            console.log(rqty,subQty,'tryy')
            let rnQty = rqty - subQty
          // let newQuantity = rnty * focs[0].unitCases
            Product.findByIdAndUpdate(idN,{$set:{qty:rnQty}},function(err,vocs){
      
            })
      
           
          }
          })
        }
        
      })
        })
       
      
        })
          }else{
            status = 'unpaid'
            balance = amountDue - amount
          
      
            InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amount,amountDue:balance,status:'unpaid',receiptNumber:receiptNumber,remainingBalance:totalAmountOwing}},function(err,docs){
      
            })
            
      
            User.findByIdAndUpdate(id2,{$set:{balance:newBalance}},function(err,docs){
              
            })
            
            var receipt = new InvoiceFile();
            receipt.studentName = studentName;
            receipt.studentId = studentId;
            receipt.studentId2 = id2;
            receipt.studentEmail = studentEmail;
            receipt.studentAddress = studentAddress;
            receipt.studentMobile = studentMobile;
            receipt.clerk = clerk1;
            receipt.class1 = class1;
            receipt.grade = grade;
            receipt.month= month;
            receipt.filename = receiptNumber+'_'+studentName+'.pdf';
            receipt.year = year;
            receipt.date = date;
            receipt.dateValue = dateValue;
            receipt.type = type;
            receipt.type1 = 'single';
            receipt.name = "PMT";
            receipt.term= term;
            receipt.invoiceNumber= invoiceNumber;
            receipt.amountDue= amountDue;
            receipt.receiptNumber = receiptNumber;
            receipt.status = 'paid';
            receipt.studentBalance = newBalance;
            receipt.amountPaid = amountX2;
            receipt.typeAmount = amountX2
            receipt.remainingBalance = totalAmountOwing;
            receipt.datePaid = date;
            receipt.invoiceAmountPaid=amount;
        
            receipt.invoiceAmountDue= balance;
      
            
            
            receipt.save()
              .then(user =>{
               
               
                InvoiceFile.findById(id,function(err,doc){

                  //console.log(doc,'try docc')
                  let amountDue = doc.amountDue 
                  let invoiceNumber = doc.invoiceNumber
                  InvoiceSubBatch.find({invoNumber:invoiceNumber},function(err,tocs){
                    for(var i = 0;i<tocs.length;i++){
                      console.log(tocs[i],'tocsi')
                   
                      let code = tocs[i].code
                Product.find({code:code},function(err,focs){
                  console.log(focs,'focs')
                  if(focs[0].account == "Product Sales"){
            
                    console.log('true')
                        
                        let subQty = focs[0].qty
                  let idN = focs[0]._id
                   
                  let  rqty =  focs[0].qty
                  console.log(rqty,subQty,'tryy')
                  let rnQty = rqty - subQty
                // let newQuantity = rnty * focs[0].unitCases
                  Product.findByIdAndUpdate(idN,{$set:{qty:rnQty}},function(err,vocs){
            
                  })
            
                 
                }
                })
              }
              
            })
              })
            
              })
            
      
          }
          amount = amount - amountDue
          if(amount < 0 ){
            amount = 0
          }
      
         
      
      
      
        
          
         // InvoiceFile.findByIdAndUpdate(id,{$set:{}})
        })
      }
     }
    // res.redirect('/clerk/arrReceipt')

     res.redirect('/clerk/receiptUpdate')
      

    }
    })
  
  





router.get('/receiptUpdate',isLoggedIn,function(req,res){
  var code = req.user.recNumber

  InvoiceFile.find({receiptNumber:code,type:"Receipt"},function(err,docs){
    if(docs.length > 0){
      let id = docs[0]._id
      InvoiceFile.findByIdAndUpdate(id,{$set:{statement:"true"}},function(err,locs){

      })
    }
    res.redirect('/clerk/arrReceipt')
  })
})







router.get('/arrReceipt',isLoggedIn,function(req,res){
  var code = req.user.recNumber
  

   arrReceipt[code]=[]

  res.redirect('/clerk/receiptProcess')
  
  
  
  
  })
  
  
router.get('/receiptProcess',isLoggedIn,function(req,res){
  var code = req.user.recNumber
  console.log(code,'receiptNumber')
  //console.log(docs[i].uid,'ccc')
  console.log(arrReceipt,'arrReceipt')
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    
      InvoiceFile.find({receiptNumber:code,type:"Invoice"}).lean().then(vocs=>{
   console.log(vocs.length,'vocs')
        for(var x = 0; x < vocs.length;x++){
  
  if( arrReceipt[code].length > 0 && arrReceipt[code].find(value => value.receiptNumber == code) ){
  
    arrReceipt[code].push(vocs[x])
  
      }
      
       
      
      
      else{
        arrReceipt[code].push(vocs[x])
            
        } 
  
  
      }
  
 
      res.redirect('/clerk/receiptGeneration')

      })

    
      

    
  
  /*})*/
  
  })
  
  
  
router.get('/receiptGeneration',isLoggedIn,function(req,res){

  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
  //var year = m.format('YYYY')
  var code = req.user.recNumber
  var clientName = req.user.clientName
  /*console.log(arr,'iiii')*/
  var term =arrReceipt[code][0].term
  var year = arrReceipt[code][0].year
  var studentName = arrReceipt[code][0].studentName
  var receiptNumber = arrReceipt[code][0].receiptNumber
  
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrReceipt){
  const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
  const html = await fs.readFile(filePath, 'utf8')
  
  return hbs.compile(html)(arrReceipt)
  
  };
  
  
  
  
  (async function(){
  
  try{
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
  headless: true,
  args: [
  "--disable-setuid-sandbox",
  "--no-sandbox",
  "--single-process",
  "--no-zygote",
  ],
  executablePath:
  process.env.NODE_ENV === "production"
    ? process.env.PUPPETEER_EXECUTABLE_PATH
    : puppeteer.executablePath(),
  });
  
  const page = await browser.newPage()
  
  
  
  //const content = await compile('report3',arr[uid])
  const content = await compile('euritReceipt',arrReceipt[code])
  
  //const content = await compile('index',arr[code])
  
  await page.setContent(content, { waitUntil: 'networkidle2'});
  //await page.setContent(content)
  //create a pdf document
  
           
  await page.emulateMediaType('screen')
  let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}`+'.pdf'),
 /* format:"A4",
  width:'30cm',
  height:'21cm',*/
  height: height + 'px',
    printBackground:true
  
  })
  let filename = receiptNumber+'_'+studentName+'.pdf';
  //console.log('pdf successful')

  const file = await fs.readFile(`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}`+'.pdf');
  const form = new FormData();
  form.append("file", file,filename);
 //const headers = form.getHeaders();
  //Axios.defaults.headers.cookie = cookies;
  //console.log(form)
await Axios({
    method: "POST",
    //url: 'http://localhost:9500/clerk/uploadReceipt',
    url: 'https://portal.steuritinternationalschool.org/clerk/uploadReceipt',
    headers: {
      "Content-Type": "multipart/form-data"  
    },
    data: form
  });
  //res.redirect('/clerk/invoice')
  res.redirect('/clerk/genEmailReceipt')
  
 
  
  /*await browser.close()
  
  process.exit()*/
 
  
  
  }catch(e) {
  
  console.log(e)
  
  
  }
  
  
  }) ()
  
  
  
  
  //
  
  
  
  
  
  
  
  })
  

  router.post('/uploadReceipt',upload.single('file'),(req,res,nxt)=>{
    var fileId = req.file.id
    console.log(fileId,'Receipt fileId')
    var filename = req.file.filename
    console.log(filename,'filename')
InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){


  //console.log(docs,'docs')
  let id = docs[0]._id
  InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

  })


}
 // res.redirect('/clerk/genEmailReceipt')
 res.redirect('/clerk/invoice')
})

  })











  
  router.get('/genEmailReceipt',isLoggedIn,function(req,res){
    var m = moment()
    var mformat = m.format('L')
    var month = m.format('MMMM')
   // var year = m.format('YYYY')
    var id= req.user._id
    var code = req.user.recNumber
   // var term = req.user.term
    //var uid = "ST3104"
    /*let studentName = arrReceipt[code][0].studentName
    let studentEmail = arrReceipt[code][0].studentEmail
    let studentId = arrReceipt[code][0].studentId
    let receiptNumber = arrReceipt[code][0].receiptNumber*/
  
    /*var count = req.user.countN
    count + 1
    let email = 'kratosmusasa@gmail.com'
    let uid = req.user.studentId
    let name = req.user.studentName
    let invoNumber = 3490*/
  
     const transporter = nodemailer.createTransport({
       host: 'mail.steuritinternationalschool.org',
       port:465,
       secureConnection:true,
       logger:true,
       debug:true,
       secureConnection:false,
       auth: {
           user: "admin@steuritinternationalschool.org",
           pass: "steurit2024",
       },
       tls:{
         rejectUnAuthorized:true
       }
       //host:'smtp.gmail.com'
     });
     
   

             
  
  (async function(){
  

    
    try{   

       InvoiceFile.find({type:"Receipt",receiptNumber:code},async function(err,docs){
   let size = docs.length - 1
 
        let email = docs[size].studentEmail
        let uid = docs[size].studentId
        let studentName = docs[size].studentName
        let receiptNumber = docs[size].receiptNumber
        let year = docs[size].year
        let term = docs[size].term
        let amount = docs[size].amountPaid
      //  let invoNumber = docs[i].invoNumber 
      
     let mailOptions ={
       from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `Your Payment  Receipt from ST. EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${studentName}: <br> <br> Your Payment  Receipt ${receiptNumber} for ${amount} is attached . <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+studentName+'_'+'Receipt'+'.pdf',
           path:`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}.pdf`
         }
       ]
     };
   await  transporter.sendMail(mailOptions, function (error,info){
       if(error){
         //console.log(error)
        /* req.flash('danger', 'Reports Not Emailed!');
    
  res.redirect('/clerk/dashX')*/
  res.redirect('/clerk/printReceipt')
       }else{
      /*   console.log('Email sent successfully')*/
         req.flash('success', 'Receipt Emailed Successfully!');
    
  res.redirect('/clerk/printReceipt')
       }
          
   console.log(email,'email')
     })

    
  })
    }catch(e) {
    
      console.log(e)
    
    
    }
  
    
    }) ()
  
   
    
   
   })
/*

   router.get('/printReceipt',isLoggedIn, function (req, res) {
    var code = req.user.recNumber
    var pro = req.user
    InvoiceFile.find({receiptNumber:code,type:'Receipt'},function(err,docs){
      let size = docs.length - 1
    if(docs){
      let name = docs[size].filename
  
      var year = docs[size].year
      var term = docs[size].term
    var path = "./public/receiptReports/"+year+'/'+term+'/'+name;
  
   // const path = './public/images/1.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
  }
  })
  });
*/

  router.get('/recentFiles',isLoggedIn,function(req,res){
   
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    var mformat = m.format('L')
    var n = moment()
    var year = n.format('YYYY')
    InvoiceFile.find({date:mformat,type:"Receipt"},function(err,docs){
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }
      res.render('receiptMonthlyFolderReg/recent',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg, listX:arr,pro:pro})
    })
  
  })


  router.get('/recentFilesInvoice',isLoggedIn,function(req,res){
   
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    var mformat = m.format('L')
    var n = moment()
    var year = n.format('YYYY')
    InvoiceFile.find({date:mformat,type:"Invoice"},function(err,docs){
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }
      res.render('receiptMonthlyFolderReg/recentInvo',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg, listX:arr,pro:pro})
    })
  
  })
   
  router.get('/printReceipt',isLoggedIn,function(req,res){
    var code = req.user.recNumber
    var pro = req.user
InvoiceFile.find({receiptNumber:code,type:'Receipt'},function(err,docs){
  let size = docs.length - 1
if(docs){
  let receiptNumber = docs[size].receiptNumber
  let studentName = docs[size].studentName
  let studentAddress = docs[size].studentAddress
  let date = docs[size].date
  let amountPaid = docs[size].amountPaid
  let amountDue = docs[size].remainingBalance
  
  let list = arrReceipt[code]
    res.render('accounts/euritReceipt',{listX:list,amountPaid:amountPaid,amountDue:amountDue,date:date,pro:pro,receiptNumber:receiptNumber,studentName:studentName,studentAddress:studentAddress})
}
  })

})

  
  
  /* router.post('/invoice',function(req,res){
  console.log(req.body['name[]'],req.body['quantity[]'],req.body['price[]'])
  
  })*/
  
  
  
  
  /*
  router.post('/invoice',isLoggedIn,function(req,res){
  
   
  
    
    var id = req.user._id
    var code = req.user.invoCode
    var m2 = moment()
    var year = m2.format('YYYY')
    var month = m2.format('MMMM')
    var date = req.body.invoice_date
    var dueDate = req.body.invoice_due_date
    var itemId = req.body.itemId
    var companyName = req.body.businessName
    var companyEmail = req.body.companyEmail
    var companyCity = req.body.companyCity
    var companyAddress = req.body.companyAddress
    var companyMobile = req.body.companyMobile
    var companyClerk = "Munashe"
    let c = -1
    //var notes = req.query.notes
    var clientName= req.body.clientName
    var clientEmail = req.body.clientEmail
    var clientAddress = req.body.clientAddress
    var clientMobile = req.body.mobile
    var clientCity = req.body.clientCity
    var invoiceDescription = 'cables'
    ar = req.body['name[]']
    ar1 = req.body['quantity[]']
    ar2=req.body['price[]']
  console.log(ar,ar1,ar2,'000000')
  req.check('clientName','Enter Client Name').notEmpty();            
  req.check('clientEmail','Enter Client Email').notEmpty();
  req.check('invoice_due_date','Enter Due Date').notEmpty();
  req.check('invoice_date', 'Enter Date').notEmpty();
  
  
  
  
  
  
  
  var errors = req.validationErrors();
     
  if (errors) {
  
    req.session.errors = errors;
    req.session.success = false;
    req.flash('danger', req.session.errors[0].msg);
           
            
    res.redirect('/clerk/invoice');
  }
  
  
  else{
  /*for(let a in ar){
    if(ar[a]=== ''){
      delete ar[a]
    }
  }*/
  /*
  
  ar = ar.filter(v=>v!='')
  
  console.log(ar,'iwee')
  for(var i = 0; i<ar.length;i++){
    console.log(ar[i])
    let item = ar[i]
    
  
  
  var book = new InvoiceSub();
    book.item = item
    book.itemId = 'cccc'
    book.qty = 0
    book.price = 0
    book.total = 0
    book.companyName = companyName
    book.companyEmail = companyEmail
    book.companyCity = companyCity
    book.companyAddress = companyAddress
    book.companyMobile = companyMobile
    book.date = date
    book.clientName = clientName
    book.clientEmail = clientEmail
    book.clientAddress = clientAddress
    book.clientCity = clientCity
    book.clientMobile = clientMobile
    book.invoiceDescription = invoiceDescription
    book.status = 'not saved'
    book.code = code
    book.type = "Invoice"
    book.month = month
    book.year = year
    book.size = i
    book.subtotal = 0
   
  
  
        
         
          book.save()
            .then(title =>{
  let client = title.clientName
  console.log(client,'client')
  let pId = title._id
  console.log(pId,"idd")
  
  let size = title.size
  
  console.log(size,'size')
  let qty = ar1[size]
  let price = ar2[size]
  let total = qty * price
        InvoiceSub.findByIdAndUpdate(pId,{$set:{qty:qty,price:price,total:total}},function(err,ocs){
        
        })
        
              
          
                
  
  
             
            })
          }
  
  res.redirect('/clerk/invoiceProcess')
        }
  })
*/











  

router.get('/autocompleteXN/', function(req, res, next) {
  var code

    var regex= new RegExp(req.query["term"],'i');
   
    var bookFilter =Product.find({item:regex,},{'item':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    bookFilter.exec(function(err,data){
   
 
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(book=>{
 
        
     
  
          
         let obj={
           id:book._id,
           label: book.item

       
     
       
         
          
  
           
         };
        
         result.push(obj);
      
     
       });
  
     }
   
     res.jsonp(result);

    }
  
  })
 
  });
///
router.get('/productUpdate',function(req,res){
  Product.find(function(err,docs){
    if(docs.length > 0){

      for(var i = 0;i<docs.length;i++){
        let id = docs[i]._id
        Product.findByIdAndUpdate(id,{$set:{qty:1}},function(err,locs){

        })
      }
    }
  })
})
//role admin
//this route autopopulates info of the title selected from the autompleteX route
  router.post('/autoXN',function(req,res){
      var code = req.body.code
console.log(code,'code2222')
  
      
     
      Product.find({item:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
      })
    
    
    })


    router.get('/autocompleteInvoiceX/', function(req, res, next) {
      var code
    
        var regex= new RegExp(req.query["term"],'i');
       
        var bookFilter =InvoiceFile.find({invoiceNumberText:regex},{'invoiceNumber':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
      
        
        bookFilter.exec(function(err,data){
       
     
      console.log('data',data)
      
      var result=[];
      
      if(!err){
         if(data && data.length && data.length>0){
           data.forEach(book=>{
     
            
         
      
              
             let obj={
               id:book._id,
               label: book.invoiceNumber
    
           
         
           
             
              
      
               
             };
            
             result.push(obj);
          
         
           });
      
         }
       
         res.jsonp(result);
    
        }
      
      })
     
      });
    
    //role admin
    //this route autopopulates info of the title selected from the autompleteX route
      router.post('/autoInvoiceX',function(req,res){
          var code = req.body.code
    
      
          
         
          InvoiceFile.find({invoiceNumber:code},function(err,docs){
         if(docs == undefined){
           res.redirect('/')
         }else
        
            res.send(docs[0])
          })
        
        
        })
    






    

        router.post('/autoInvoUpdate',isLoggedIn,function(req,res){
          var code = req.body.code
          var term = req.user.term
    
      
          
         
       // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
          InvoiceSubBatch.find({ invoiceId:code/*studentId:code,term:term,status:"unpaid"*/}).lean().sort({code:1}).then(docs=>{
  
          var c = {_id:"",code:"",item:"",description:"",invoiceNumber:"",_id:"",amountDue:0} 
         if(docs.length > 1){

          
          docs.push(c)
          }
    
         if(docs == undefined){
           res.redirect('/')
         }else
    
            res.send(docs)
          })
        
        
        })
    

    
    

router.get('/autocompleteClient/', function(req, res, next) {
  var code

    var regex= new RegExp(req.query["term"],'i');
   
    var bookFilter =User.find({fullname:regex,role:"student"},{'fullname':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    bookFilter.exec(function(err,data){
   
 
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(book=>{
 
        
     
  
          
         let obj={
           id:book._id,
           label: book.fullname

       
     
       
         
          
  
           
         };
        
         result.push(obj);
      
     
       });
  
     }
   
     res.jsonp(result);

    }
  
  })
 
  });

//role admin
//this route autopopulates info of the title selected from the autompleteX route
  router.post('/autoClient',function(req,res){
      var code = req.body.code

  
      
     
      User.find({fullname:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
      })
    
    
    })

   

    router.post('/autoClientProfile',function(req,res){
      var code = req.body.code

  
      
  User.findById(code,function(err,doc){
     if(doc == undefined){
       res.redirect('/')
     }else
    
        res.send(doc)
      })
    
    
    })

    router.post('/autoClientInvoices',function(req,res){
      var code = req.body.code

  
      
 InvoiceFile.find({studentId:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs)
      })
    
    
    })





    router.post('/autoInvo',isLoggedIn,function(req,res){
      var code = req.body.code
      var term = req.user.term

  
      
     
   // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
      InvoiceFile.find({studentId:code,term:term,status:"unpaid"}).lean().sort({code:1}).then(docs=>{
if(docs.length > 0){
  
      let amount =  docs[0].amountDue 
      var c = {type:" ",invoiceNumber:"",_id:"",amountDue:amount} 
        docs.push(c)
}
     if(docs == undefined){
       res.redirect('/')
     }else

        res.send(docs)
      })
    
    
    })

   

    router.post('/autoInvoCode',function(req,res){

      var id = req.body.code

  console.log(id,'code')
      
     
    InvoiceFile.findById(id,function(err,doc){
     if(doc == undefined){
       res.redirect('/')
     }else
    
        res.send(doc)
      })
    
    
    })


    router.get('/invoiceList',isLoggedIn, (req, res) => {
      var pro = req.user
    
     InvoiceFile.find({},(err, docs) => {
          if (!err) {
              res.render("acc2/list", {
                 listX:docs, pro:pro
                
              });
          }
      });
    });


    
    router.get('/invoiceDuplicates',isLoggedIn, (req, res) => {
      var pro = req.user
    
     InvoiceFile.find({type:"Invoice"},(err, docs) => {
          if (!err) {
for(var i = 0; i<docs.length;i++){
         let invoiceNumber = docs[i].invoiceNumber
      InvoiceFile.find({invoiceNumber:invoiceNumber},function(err,locs){

        if(locs.length>1){
          console.log(locs)
        }
     
             /* res.render("acc2/list3", {
                 listX:docs, pro:pro
                
              });*/

            })
            }
          }
      });
    });




    router.post('/autoInvo2',function(req,res){
     // var ar = req.body['username[]']
      var c = {type:" ",invoiceNumber:"",_id:"",amountDue:"0.00"} 
     code = req.body.code

       InvoiceFile.find({studentId:code,status:"unpaid"},function(err,docs){


          
        res.send(docs)
        

        })
    
      

      
           
         // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
            /*InvoiceFile.find({term:code,datePaid:"now"}).lean().sort({code:1}).then(docs=>{
              docs.push(c)
           if(docs == undefined){
             res.redirect('/')
           }else
      
              res.send(docs)
            })*/
          
    })





    router.post('/autoInvo3',function(req,res){
      // var ar = req.body['username[]']
      
      code = req.body.code
 
        InvoiceSubBatch.findById(code,function(err,doc){
 
 
           
         res.send(doc)
         
 
         })
     
       
 
       
            
          // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
             /*InvoiceFile.find({term:code,datePaid:"now"}).lean().sort({code:1}).then(docs=>{
               docs.push(c)
            if(docs == undefined){
              res.redirect('/')
            }else
       
               res.send(docs)
             })*/
           
     })
 
router.get('/invoiceGenerationX',isLoggedIn,function(req,res){
  res.render('acc2/create')
})



router.get('/invoiceBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('acc2/invoBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })




  router.post('/invoiceBatch',isLoggedIn,  function(req,res){
  var id =req.user._id
    var code = req.body.code
    var date = req.body.date
    var to  = req.body.to
    var m2 = moment()
    var mformat = m2.format('L')
    var pro = req.user
var term = req.user.term
var year  = 2024
    
    

    req.check('code','Enter  Code').notEmpty();
    req.check('date','Enter Date').notEmpty();
    req.check('to','Enter Grade').notEmpty();

  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
      //res.render('admin/classBatch',{ errors:req.session.errors,pro:pro})

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/clerk/invoiceBatch');
    
    }
    
    else 
    
    InvoCode.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/clerk/invoiceBatch');
    }else{

      var truck = new  InvoCode()
      truck.code = code
      truck.to = to
      truck.year = year
      truck.term = term
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{invoiceId:code,invoUrl:pro._id,invoiceGrade:to}}, function(err,coc){
          
        
      })


    })

    }

    res.redirect('/clerk/invoiceGenNumberUpdate')
    
    })
    
    
    })
  


    router.get('/invoiceGenNumberUpdate',isLoggedIn,function(req,res){
      var id = req.user._id

        InvoNum.find(function(err,doc){
          let invoNum = doc[0].num
          let invoId = doc[0]._id
      
      
      User.findByIdAndUpdate(id,{$set:{invoNumber:invoNum}},function(err,docs){
      
      })
      invoNum++
      
      InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
      
      })
      res.redirect('/clerk/invoiceGenNumberUpdate2')
      
        })
      
      })




      router.get('/invoiceGenNumberUpdate2',isLoggedIn,function(req,res){
        var id = req.user._id
        var invoiceGrade = req.user.invoiceGrade
      
          InvoNum.find(function(err,doc){
            let invoNum = doc[0].num
            let invoId = doc[0]._id
       
              console.log('yessssssss')
            User.find({role:'student',grade:invoiceGrade}).sort({studentNumber:1}).then(rocs=>{
      
           
      for(var i = 0;i<rocs.length;i++){
      //console.log(rocs[i],'rocks')
      let uid=rocs[i]._id
       
        User.findByIdAndUpdate(uid,{$set:{invoNumber:invoNum}},function(err,docs){
        
        })
        invoNum++
        InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
        
        })
      
      
      
      
      }
        
          })
      
        
          res.redirect('/clerk/invoiceGen')
        
        })
      
        })











      

router.get('/invoiceGen', isLoggedIn,function(req,res){
  var pro = req.user
  var invoiceGrade = req.user.invoiceGrade
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var invoiceId = req.user.invoiceId
  var clerk = req.user.fullname
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('acc2/create',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,invoiceId:invoiceId,clerk:clerk,
  companyCity:companyCity,invoiceGrade:invoiceGrade,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile})
})



router.post('/invoiceGen',isLoggedIn,function(req,res){

 

  
  var id = req.user._id
  var code = req.user.invoCode
  var m2 = moment()
  var year = m2.format('YYYY')
  var month = m2.format('MMMM')
  var date = req.body.invoice_date
  var dueDate = req.body.invoice_due_date
  var itemId = req.body.itemId
  var companyName = req.body.businessName
  var companyEmail = req.body.companyEmail
  var companyCity = req.body.companyCity
  var companyAddress = req.body.companyAddress
  var companyMobile = req.body.companyMobile
  var companyClerk = req.user.fullname
  let c = -1
  //var notes = req.query.notes
  var grade= req.body.grade
  var term = req.body.term
  //var year = req.body.year
  var description = req.body.description2
  var invoiceCode = req.user.invoiceId
  var invoiceId = req.user.invoUrl
   let subtotal = 0
  ar = req.body['code[]']
  ar1 = req.body['quantity[]']
  ar2=req.body['price[]']
  ar3=req.body['description[]']
console.log(ar,ar1,ar2,'000000')
req.check('grade','Select Grade').notEmpty();            
req.check('term','Select Term').notEmpty();
req.check('year','Select Year').notEmpty();
req.check('description2','Enter Description').notEmpty();
req.check('invoice_due_date','Enter Due Date').notEmpty();
req.check('invoice_date', 'Enter Date').notEmpty();







var errors = req.validationErrors();
   
if (errors) {

  req.session.errors = errors;
  req.session.success = false;
  req.flash('danger', req.session.errors[0].msg);
         
          
  res.redirect('/clerk/invoiceGen');
}


else{
/*for(let a in ar){
  if(ar[a]=== ''){
    delete ar[a]
  }
}*/

ar = ar.filter(v=>v!='')
ar1 = ar1.filter(v=>v!='')
ar2 = ar2.filter(v=>v!='')
ar3 = ar3.filter(v=>v!='')

console.log(ar,'iwee')
console.log(ar1,'iwee1')
console.log(ar2,'iwee2')
console.log(ar3,'iwee3')
for(var i = 0; i<ar.length;i++){
  console.log(ar[i])
  let code = ar[i]
  


var book = new InvoiceSubBatch();
  book.item = "null"
  book.code = code
  book.itemId = 'cccc'
  book.qty = 0
  book.price = 0
  book.total = 0
  book.companyName = companyName
  book.companyEmail = companyEmail
  book.companyCity = companyCity
  book.companyAddress = companyAddress
  book.companyMobile = companyMobile
  book.date = date
  book.invoiceDescription = description
  book.status = 'not saved'
  book.invoiceCode = invoiceCode
  book.invoiceId = invoiceId
  book.type = "Invoice"
  book.month = month
  book.year = year
  book.grade = grade
  book.term = term
  book.size = i
  book.subtotal = 0
 


      
       
        book.save()
          .then(title =>{
//let client = title.clientName

let pId = title._id
console.log(pId,"idd")

let size = title.size

console.log(size,'size')
let qty = ar1[size]
let price = ar2[size]
let item = ar3[size]
let total = qty * price
subtotal += total
InvoiceSubBatch.findByIdAndUpdate(pId,{$set:{qty:qty,price:price,total:total,subtotal:subtotal,item:item}},function(err,ocs){
      
      })
          })
        }
      }
      res.redirect('/clerk/subtotalUpdate')
})




router.get('/subtotalUpdate',isLoggedIn,function(req,res){
var invoiceId = req.user.invoiceId
console.log(invoiceId)
let subtotal
let arr16 = []
InvoiceSubBatch.find({invoiceCode:invoiceId},function(err,hods){

  for(var q = 0;q<hods.length; q++){
      
    arr16.push(hods[q].total)
      }
      //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
       number1=0;
      for(var z in arr16) { number1 += arr16[z]; }

 InvoiceSubBatch.find({invoiceCode:invoiceId},function(err,docs){
for(var i = 0;i <docs.length;i++){
  let id =  docs[i]._id
  InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,focs){

  })
}
})

//aggVouchers

res.redirect('/clerk/invoiceSubFile')
     
})

})  



router.get('/invoiceSubFile',isLoggedIn,function(req,res){
  let invoiceCode = req.user.invoiceId
  let invoiceGrade = req.user.invoiceGrade
InvoiceSubBatch.find({invoiceCode:invoiceCode},function(err,docs){

  for(var i = 0; i<docs.length;i++){
    let item = docs[i].item
    let code = docs[i].code
    let qty = docs[i].qty
    let price = docs[i].price
    let total = docs[i].total
   
    let month = docs[i].month
    let year = docs[i].year
    let date = docs[i].date
    let term = docs[i].term
    let invoiceDescription = docs[i].invoiceDescription
    let invoiceCode = docs[i].invoiceCode
    let invoiceId = docs[i].invoiceId
    let subtotal = docs[i].subtotal

    User.find({class1:invoiceGrade},function(err,locs){
      for(var x = 0;x<locs.length;x++){


        let studentName = locs[x].fullname
        let studentId = locs[x].uid
        let studentAddress = locs[x].address
        let studentEmail = locs[x].email
        let studentMobile = locs[x].mobile
        let class1 = locs[x].class1
        let grade = locs[x].grade
        let id2 = locs[i]._id
        let invoiceNumber = locs[x].invoNumber

        var invo = new InvoiceSubFile();
        invo.studentName = studentName
        invo.studentId = studentId
        invo.studentId2 = id2
        invo.studentAddress = studentAddress
        invo.studentEmail = studentEmail
        invo.studentMobile = studentMobile
        invo.class1 = class1
        invo.grade = grade
        invo.invoiceNumber = invoiceNumber
        invo.item =item
        invo.code = code
        invo.qty = qty
        invo.price = price
        invo.total = total
        invo.month = month
        invo.year = year
        invo.date = date
        invo.term = term
        invo.description = invoiceDescription
        invo.invoiceCode = invoiceCode
        invo.invoiceId = invoiceId
        invo.subtotal = subtotal
        
        invo.save()
  .then(user =>{
   
   
 

  })
        


      }
    })

  }
  res.redirect('/clerk/arrInvoiceSubUpdate')
})


})


router.get('/arrInvoiceSubUpdate',isLoggedIn,function(req,res){

  var grade = req.user.invoiceGrade
  User.find({class1:grade},function(err,docs){
     for(var i=0;i<docs.length;i++){
       let studentId = docs[i].uid
        arrSub[studentId]=[]
     }
   })
   
   res.redirect('/clerk/invoiceSubProcess')
   
   })


router.get('/invoiceSubProcess',isLoggedIn,function(req,res){
  let invoiceCode = req.user.invoiceId
 // console.log(code,'receiptNumber')
  //console.log(docs[i].uid,'ccc')

  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    
    InvoiceSubFile.find({invoiceCode:invoiceCode}).lean().then(vocs=>{
   console.log(vocs.length,'vocs')
        for(var x = 0; x < vocs.length;x++){
  
          let uid=vocs[x].studentId
  if( arrSub[uid].length > 0 && arrSub[uid].find(value => value.studentId == uid) ){
  
    arrSub[uid].push(vocs[x])
  
      }
      
       
      
      
      else{
        arrSub[uid].push(vocs[x])
            
        } 
  
  
      }
  
 
     res.redirect('/clerk/invoiceSubGeneration')

      })

    
      

    
  
  /*})*/
  
  })
  
router.get('/loopTest',function(res,req){
  let uid = 'ST3101'
 console.log(arrSub[uid].length)
 console.log(arrSub[uid][0],'vv8')

})



  router.get('/invoiceSubGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    let dateValue = m.valueOf()
    var year = req.user.hostelYear
var grade = req.user.invoiceGrade
//var term = req.user.invoiceTerm
    
  /*console.log(arr,'iiii')*/


  User.find({class1:grade},function(err,docs){
    if(docs.length > 0){
    for(var i = 0; i< docs.length;i++){
  
    
      let uid = docs[i].uid

      let studentName = arrSub[uid][0].studentName
      let studentAddress = arrSub[uid][0].studentAddress
      let studentEmail = arrSub[uid][0].studentEmail
      let studentMobile = arrSub[uid][0].studentMobile
      let studentId = arrSub[uid][0].studentId
      let class1 = docs[i].class1
      let grade = docs[i].grade
      let invoiceNumber = docs[i].invoNumber
      let type = 'Invoice'
      let amountPaid = 0
      let amountDue = arrSub[uid][0].subtotal
      let term = arrSub[uid][0].term
      let month = arrSub[uid][0].month
      let year = arrSub[uid][0].year
      let date = arrSub[uid][0].date
      let invoiceId = arrSub[uid][0].invoiceId
      let invoiceCode= arrSub[uid][0].invoiceCode

    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrSub){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arrSub)
   
  };
  
  
  
  const docHeight = () => {
    const body = document.body
    const html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
   (async function(){
  
  try{
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  
  const page = await browser.newPage()
  
  
  
   //const content = await compile('report3',arr[uid])
   const content = await compile('euritInvoice',arrSub[uid])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  //let height = await page.evaluate(() => document.documentElement.offsetHeight);
  const height = await page.evaluate(docHeight);
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf'),
    /*format:"A4",
    width:'30cm',
  height:'21cm',*/
  height: height + 'px',
    printBackground:true
  })
  
  
  
  var repo = new InvoiceFile();
   
  repo.studentName = studentName;
  repo.studentId = studentId
  repo.studentEmail = studentEmail
  repo.studentAddress = studentAddress
  repo.studentMobile = studentMobile
  repo.class1 = class1
  repo.grade = grade;
  repo.filename = invoiceNumber+'_'+studentName+'.pdf';
  repo.year = year;
  repo.term = term
  repo.date = date
  repo.dateValue = dateValue
  repo.type = type
  repo.css = 'danger'
  repo.type1 = 'batch'
  repo.amountPaid= amountPaid
  repo.amountDue = amountDue
  repo.month = month
  repo.invoiceId = invoiceId
  repo.invoiceCode = invoiceCode
  repo.invoiceNumber = invoiceNumber
  repo.receiptNumber = "null"
  repo.status = "unpaid"
  repo.datePaid = "null"
  repo.save().then(poll =>{
    console.log("Done creating pdf",uid)
  })
  
  
  /*await browser.close()
  
  process.exit()*/

  
  
 req.flash('success', 'Report Generation Success');
 
  res.redirect('/clerk/invoiceBatch');
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  }


}
})  

  })

 
  router.get('/invoiceSingleCode',isLoggedIn,function(req,res){
    var id = req.user._id

        InvoNum.find(function(err,doc){
          let invoNum = doc[0].num
          let invoId = doc[0]._id
      
      
      User.findByIdAndUpdate(id,{$set:{invoNumber:invoNum}},function(err,docs){
      
      })
      invoNum++
      
      InvoNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
      
      })
      res.redirect('/clerk/studentInvoice')
      
        })
  
  
  })
 
 router.get('/updateStatement',function(req,res){

  InvoiceFile.find({type:"Invoice"},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let id = docs[i]._id
      InvoiceFile.findByIdAndUpdate(id,{$set:{statement:"true"}},function(err,locs){

      })
    }
  })
 })
/*
  router.get('/invoiceSingleCode',isLoggedIn,function(req,res){
    var id = req.user._id
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('acc2/invoiceNumber',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  
  
  })
  
  


  router.post('/invoiceSingleCode',isLoggedIn,  function(req,res){
    var id =req.user._id
    var invoiceNumber = req.body.invoiceNumber
    var date = req.body.date
   
    var m2 = moment()
    var mformat = m2.format('L')
    var pro = req.user

      
      

 
    
    req.check('invoiceNumber','Enter Invoice Number').notEmpty();
      
    
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
       // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})
  
       req.flash('danger', req.session.errors[0].msg);
         
          
       res.redirect('/clerk/invoiceSingleCode');
  
  
      
      }
      
      else {
      
     
        User.findByIdAndUpdate(id,{$set:{invoNumber:invoiceNumber}},function(err,docs){
      
        })

        res.redirect('/clerk/studentInvoice')
    }
      
      
      })
    
  
 */


 


router.get('/exp',isLoggedIn,function(req,res){
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var pro = req.user
  res.render('acc2/expenses',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,})
})




  
router.post('/exp',isLoggedIn,function(req,res){
  
   
  var pro = req.user
    var term = req.user.term
  var id = req.user._id
  var invoNumber = req.user.invoNumber
  var m2 = moment()
  var year = m2.format('YYYY')
  var month = m2.format('MMMM')
  //var date = req.body.invoice_date
  var dueDate = req.body.invoice_due_date
  var date = m2.format('L')
  

  
  let c = -1
  //var notes = req.query.notes
 

ar = req.body['code[]']
ar1 = req.body['quantity[]']
ar2=req.body['price[]']
ar3=req.body['description[]']
console.log(ar,ar1,ar2,'000000')

req.check('invoice_due_date','Enter Due Date').notEmpty();
req.check('invoice_date', 'Enter Date').notEmpty();







var errors = req.validationErrors();
   
if (errors) {

  req.session.errors = errors;
  req.session.success = false;
 
         
          
  req.flash('danger', req.session.errors[0].msg);
           
            
  res.redirect('/clerk/exp');
}


else{

ar = ar.filter(v=>v!='')
ar1 = ar1.filter(v=>v!='')
ar2 = ar2.filter(v=>v!='')
ar3 = ar3.filter(v=>v!='')

for(var i = 0; i<ar.length;i++){
console.log(ar[i])
let code = ar[i]
let description = ar3[i]
let price = ar2[i]
let quantity = ar1[i]
let total = quantity * price


var book = new Expenses();
book.item = code
book.category = description
book.price = price
book.qty = quantity
book.date = date
book.totalExpense = total
book.month = month
book.year = year
book.term = term




    
     
      book.save()
        .then(title =>{
//let client = title.clientName

           
          })
        }

//res.redirect('/clerk/invoiceSingleProcess')
req.flash('success', "Expenses Successfully Captured");
           
            
res.redirect('/clerk/exp');
      }
})




  router.get('/studentInvoice', isLoggedIn,function(req,res){
    var pro = req.user
    var companyAddress = req.user.companyAddress
    var companyCity = req.user.companyCity
    var companyMobile = req.user.companyMobile
    var companyCountry = req.user.companyCountry
    var companyEmail = req.user.companyEmail
    var companyName = req.user.companyName
    var invoiceNumber = req.user.invoNumber
    var m = moment()
    var mformat = m.format('L')
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('acc2/singleInvoice',{invoiceNumber:invoiceNumber,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,
    companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile,mformat:mformat})
  })
  
  /* router.post('/invoice',function(req,res){
  console.log(req.body['name[]'],req.body['quantity[]'],req.body['price[]'])
  
  })*/
  
  
  
  
  
  router.post('/studentInvoice',isLoggedIn,function(req,res){
  
   
  
    
    var id = req.user._id
    var invoNumber = req.user.invoNumber
    var m2 = moment()
    var year = m2.format('YYYY')
    var month = m2.format('MMMM')
    //var date = req.body.invoice_date
    var dueDate = req.body.invoice_due_date
    var date = m2.format('L')
    var itemId = req.body.itemId
    var companyAddress = req.user.companyAddress
    var companyCity = req.user.companyCity
    var companyMobile = req.user.companyMobile
    var companyCountry = req.user.companyCountry
    var companyEmail = req.user.companyEmail
    var companyName = req.user.companyName
    var companyClerk = req.user.fullname
    
    let c = -1
    //var notes = req.query.notes
    var studentName= req.body.clientName
    var studentEmail = req.body.clientEmail
    var studentAddress = req.body.clientAddress
    var studentMobile = req.body.mobile
    var studentId = req.body.uid
    var studentId2 = req.body.studentId2
    var description = req.body.description2
    var grade = req.body.grade
    var class1 = req.body.class1
    var term = req.user.term
    let balance = req.body.balance
  
  ar = req.body['code[]']
  ar1 = req.body['quantity[]']
  ar2=req.body['price[]']
  ar3=req.body['description[]']
  console.log(ar,ar1,ar2,'000000')
  req.check('clientName','Enter Client Name').notEmpty();            
  req.check('clientEmail','Enter Client Email').notEmpty();
  req.check('invoice_due_date','Enter Due Date').notEmpty();
  req.check('invoice_date', 'Enter Date').notEmpty();
  
  
  
  
  
  
  
  var errors = req.validationErrors();
     
  if (errors) {
  
    req.session.errors = errors;
    req.session.success = false;
    req.flash('danger', req.session.errors[0].msg);
           
            
    res.redirect('/clerk/studentInvoice');
  }
  
  
  else{
  
ar = ar.filter(v=>v!='')
ar1 = ar1.filter(v=>v!='')
ar2 = ar2.filter(v=>v!='')
ar3 = ar3.filter(v=>v!='')

console.log(ar,'iwee')
console.log(ar1,'iwee1')
console.log(ar2,'iwee2')
console.log(ar3,'iwee3')
for(var i = 0; i<ar.length;i++){
  console.log(ar[i])
  let code = ar[i]
  


var book = new InvoiceSubBatch();
  book.item = "null"
  book.code = code
  book.invoNumber = invoNumber
  book.itemId = 'cccc'
  book.qty = 0
  book.price = 0
  book.total = 0
  book.companyName = companyName
  book.companyEmail = companyEmail
  book.companyCity = companyCity
  book.companyAddress = companyAddress
  book.companyMobile = companyMobile
  book.studentName = studentName
  book.studentEmail = studentEmail
  book.studentAddress =studentAddress
  book.studentMobile = studentMobile
  book.studentId = studentId
  book.studentId2 = studentId2
  book.date = date
  book.balance = balance
  book.invoiceDescription = "null"  //description
  book.status = 'not saved'
  book.invoiceCode = invoNumber
  book.invoiceCodeText = invoNumber
  book.invoiceId = invoNumber
  book.type = "Invoice"
  book.month = month
  book.year = year
  book.grade =  grade
  book.class = class1
  book.term = term
  book.size = i
  book.subtotal = 0
  book.amountBefore = 0


      
       
        book.save()
          .then(title =>{
//let client = title.clientName

let pId = title._id
console.log(pId,"idd")

let size = title.size

console.log(size,'size')
let qty = ar1[size]
let price = ar2[size]
let item = ar3[size]
let total = qty * price

InvoiceSubBatch.findByIdAndUpdate(pId,{$set:{qty:qty,price:price,total:total,item:item,invoiceDescription:item,amountBefore:total}},function(err,ocs){
      
})
        
              
          
                
  
  
             
            })
          }
  
  res.redirect('/clerk/invoiceSingleProcess')
        }
  })
  
  
  
  router.get('/invoiceSingleProcess',isLoggedIn,function(req,res){
  
  var code =req.user.invoNumber
  console.log(code,'code')
  
  InvoiceSubBatch.find({invoNumber:code},function(err,docs){
  for(var i = 0;i<docs.length;i++){
  let id = docs[i]._id
  InvoiceSubBatch.findByIdAndUpdate(id,{$set:{status:"saved"}},function(err,locs){
  
  })
  
  
  }
  res.redirect('/clerk/invoiceSingleSubTotal')
  })
  
  
  })
  
  router.get('/invoiceSingleSubTotal',isLoggedIn,function(req,res){
   let number1 = 0
   var arr7= []
    var code =req.user.invoNumber
    let balance 
    InvoiceSubBatch.find({invoNumber:code},function(err,hods){
  
      for(var q = 0;q<hods.length; q++){
          
        arr7.push(hods[q].total)
        console.log(arr7,'arr7')
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           
          for(var z in arr7) { number1 += arr7[z]; }
          console.log(number1,'number01')
          for(var i = 0;i<hods.length;i++){
            let id2 = hods[i].studentId2
            console.log(number1,'number1')
  balance=hods[i].balance + number1
        let id = hods[i]._id
  console.log(id,'333')
          InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){
  
          })

          User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){

          })
        }
  
         // res.redirect('/clerk/arrSingleInvoice')
         res.redirect('/clerk/invoiceSingleSubTotal2')
  
        })
  
  
  
  
  
  })
  
  

  router.get('/invoiceSingleSubTotal2',isLoggedIn,function(req,res){
    let number1 = 0
    var arr7= []
     var code =req.user.invoNumber
     let balance 
     InvoiceSubBatch.find({invoNumber:code},function(err,hods){
   console.log(hods[0].subtotal,'subtotal9')
if(hods[0].subtotal == 0){

       for(var q = 0;q<hods.length; q++){
           
         arr7.push(hods[q].total)
         console.log(arr7,'arr7')
           }
           //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
            
           for(var z in arr7) { number1 += arr7[z]; }
           console.log(number1,'number01')
           for(var i = 0;i<hods.length;i++){
             let id2 = hods[i].studentId2
             console.log(number1,'number1')
   balance=hods[i].balance + number1
         let id = hods[i]._id
   console.log(id,'333')
           InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){
   
           })
 
           User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){
 
           })
         }
        }
           res.redirect('/clerk/arrSingleInvoice')
        
         })
   
   
   
   
   
   })
  
  router.get('/arrSingleInvoice',isLoggedIn,function(req,res){
  var code = req.user.invoNumber
  

  
  arrSingle[code]=[]
 
  
  res.redirect('/clerk/invoiceSingleGeneration')
  
  })
  
  
  
  
  router.get('/invoiceSingleGeneration',isLoggedIn,function(req,res){
  
  var code = req.user.invoNumber
  
  
  //console.log(docs[i].uid,'ccc')
  
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
  InvoiceSubBatch.find({invoNumber:code}).lean().then(vocs=>{
  
  
  for(var x = 0;x<vocs.length;x++){
  
  let studentId = vocs[x].studentId
  if( arrSingle[code].length > 0 && arrSingle[code].find(value => value.studentId == studentId) ){
  
    arrSingle[code].push(vocs[x])
  
      }
      
       
      
      
      else{
        arrSingle[code].push(vocs[x])
            
        } 
  
  
   
  
       
  
  }  
      })
      
      res.redirect('/clerk/invoiceSingleGeneration2')
    
  
  /*})*/
  
  })
  
  
  
  
  
  
  router.get('/invoiceSingleGeneration2',upload.single('file'),isLoggedIn,function(req,res){
  
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
  let dateValue = m.valueOf()
  var year = m.format('YYYY')
  var code = req.user.invoNumber
  var uid = req.user.invoNumber
  /*console.log(arr,'iiii')*/
  
  
  let studentName = arrSingle[uid][0].studentName
  let studentAddress = arrSingle[uid][0].studentAddress
  let studentEmail = arrSingle[uid][0].studentEmail
  let studentMobile = arrSingle[uid][0].studentMobile
  let studentId = arrSingle[uid][0].studentId
  let amountDue = arrSingle[uid][0].subtotal
  let balance = arrSingle[uid][0].balance
  let bf = balance + amountDue
 // let term = arrSingle[uid][0].term
  let term = 2
  let description = arrSingle[uid][0].invoiceDescription
  let id2 = arrSingle[uid][0].studentId2
  let class1 =arrSingle[uid][0].class1
  let grade =arrSingle[uid][0].grade
  let invoiceNumber =code
  let date = arrSingle[uid][0].date
  let invoiceId = code
  let invoiceCode= code
  let type = 'Invoice'
  let amountPaid = 0
  let statement = "true"
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrSingle){
  const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
  const html = await fs.readFile(filePath, 'utf8')
  
  return hbs.compile(html)(arrSingle)
  
  };
  
  
  
  
  (async function(){
  
  try{
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({

    ignoreHTTPSErrors: true,
  headless: true,
  args: [
  "--disable-setuid-sandbox",
  "--no-sandbox",
  "--single-process",
  "--no-zygote",
  ],
  executablePath:
  process.env.NODE_ENV === "production"
    ? process.env.PUPPETEER_EXECUTABLE_PATH
    : puppeteer.executablePath(),
  });
  
  const page = await browser.newPage()
  
  
  
  //const content = await compile('report3',arr[uid])
  const content = await compile('euritInvoice',arrSingle[code])
  
  //const content = await compile('index',arr[code])
  
  await page.setContent(content, { waitUntil: 'networkidle2'});
  //await page.setContent(content)
 //create a pdf document
 await new Promise(function(resolve) {setTimeout(resolve, 2000)});

 await page.emulateMediaType('print');
 await page.emulateMediaType('screen')
 //let height = await page.evaluate(() => document.documentElement.offsetHeight);
 await page.evaluate(() => matchMedia('screen').matches);
 await page.setContent(content, { waitUntil: 'networkidle0'});
 
  //console.log(await page.pdf(),'7777')
  
 let pdf =  await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf'),
  format:"A4",
 /* width:'30cm',
height:'21cm',
  //height: height + 'px',*/
    printBackground:true,

  
  })

 

 
 
let filename = invoiceNumber+'_'+studentName+'.pdf'

    //upload.single(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf')
  var repo = new InvoiceFile();
   
  repo.studentName = studentName;
  repo.studentId =studentId
  repo.studentId2 =id2
  repo.studentEmail = studentEmail
  repo.studentAddress = studentAddress
  repo.studentMobile = studentMobile
  repo.class1 = class1
  repo.grade = grade;
  repo.filename = invoiceNumber+'_'+studentName+'.pdf';
  repo.fileId = "null"
  repo.year = year;
  repo.css = "danger";
  repo.term = term
  repo.description = description
  repo.date = date
  repo.studentBalance = bf
  repo.type = type
  repo.type1 = "single"
  repo.amountPaid= amountPaid
  repo.amountDue = amountDue
  repo.invoiceTotal = amountDue
  repo.typeAmount = amountDue
  repo.month = month
  repo.invoiceId = invoiceId
  repo.invoiceCode = invoiceCode
  repo.invoiceNumber = invoiceNumber
  repo.invoiceNumberText = invoiceNumber
  repo.receiptNumber = 0
  repo.dateValue = dateValue
  repo.name = "INV #"+invoiceNumber+" "+"Due"+" "+date;
  repo.status = "unpaid"
  repo.datePaid = "null"
  repo.statement = statement
  repo.save().then(poll =>{
    console.log("Done creating pdf",uid)

    //req.flash('success', 'Invoice Generation Successful');
   /* router.post('/testX',upload.single(pdf),function(req,res){
console.log(req.file,'fileeeeeeeee')
    })*/

pdfX = pdf
   // res.redirect(308, '/clerk/testX');
   /* var request = require('request');
    request.post({ headers: {  'enctype': "multipart/form-data",  'content-type' : 'application/json'}
                   ,  json: {
                    file:pdf,
                  
                      } , url: 'http://localhost:8500/clerk/testX'}
                   , function(error, response, body){
     //  console.log(response,body,'nothing'); 
    }); */

  

  /*router.post('/testX',upload.single(pdf),function(req,res){
    console.log(req.file,'fileeeeeeeee')
        })*/
//console.log(pdf,'pdf')


  //req.flash('success', 'Invoice Emailed Successfully!');

  //res.redirect('/clerk/genEmailInvoice');
  
  })
//const data = await fs.readFile(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf');
 const file = await fs.readFile(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf');
  const form = new FormData();
  form.append("file", file,filename);
 //const headers = form.getHeaders();
  //Axios.defaults.headers.cookie = cookies;
  //console.log(form)
await Axios({
    method: "POST",
  url: 'https://portal.steuritinternationalschool.org/clerk/wafaX',
    //url: 'http://localhost:9500/clerk//wafaX',
    headers: {
      "Content-Type": "multipart/form-data"  
    },
    data: form
  });
  
  
  /*await browser.close()
  
  /*process.exit()*/

  //res.redirect('/clerk/invoiceSingleCode')
    
 res.redirect('/clerk/genEmailInvoice');
  
  }catch(e) {
  
  console.log(e)
  
  
  }
  
  
  }) ()
  
  
  
  
  //res.redirect('/hostel/discList')
  
  })
  
  
  router.post('/wafaX',upload.single('file'),(req,res,nxt)=>{
    var fileId = req.file.id
    console.log(fileId,'fileId')
    var filename = req.file.filename
    console.log(filename,'filename')
InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){



  //console.log(docs,'docs')
  let id = docs[0]._id
  InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

  })

}
  res.redirect('/clerk/genEmailInvoice')

  //req.flash('success', 'Invoice Generation Successful');

  //res.redirect('/clerk/invoiceSingleCode')
})
  //res.redirect('http://localhost:8500/clerk/dashX')

 
/*try{
if(req.file){

  const promises = req.files.map(async (file)=>{
    const fileStream = fs.createReadStream(file.path)

    const gridFile = new GridFsStorage({filename:file.originalname})
    await gridFile.upload(fileStream)

    fs.unlinkSync(file.path)

  })
  await Promise.all(promises)
}
res.sendStatus(201)
}catch(err){

}*/
//res.redirect('/clerk/genEmailInvoice');
  })


  


  
  router.get('/genEmailInvoice',isLoggedIn,function(req,res){
    var m = moment()
    var mformat = m.format('L')
    var month = m.format('MMMM')
   // var year = m.format('YYYY')
    var id= req.user._id
    var code = req.user.invoNumber
    console.log(code,'code')
   // var term = req.user.term
    //var uid = "ST3104"
    /*let studentName = arrReceipt[code][0].studentName
    let studentEmail = arrReceipt[code][0].studentEmail
    let studentId = arrReceipt[code][0].studentId
    let receiptNumber = arrReceipt[code][0].receiptNumber*/
  
    /*var count = req.user.countN
    count + 1
    let email = 'kratosmusasa@gmail.com'
    let uid = req.user.studentId
    let name = req.user.studentName
    let invoNumber = 3490*/
  
     const transporter = nodemailer.createTransport({
       host: 'mail.steuritinternationalschool.org',
       port:465,
       secureConnection:true,
       logger:true,
       debug:true,
       secureConnection:false,
       auth: {
           user: "admin@steuritinternationalschool.org",
           pass: "steurit2024",
       },
       tls:{
         rejectUnAuthorized:true
       }
       //host:'smtp.gmail.com'
     });
     
   

             
  
  

       InvoiceFile.find({type:"Invoice",invoiceNumber:code}, function(err,docs){
         console.log(docs.length,'length')
  if(docs.length > 0){
    let email = docs[0].studentEmail
    let uid = docs[0].studentId
    let studentName = docs[0].studentName
    let invoiceNumber = docs[0].invoiceNumber
    let amount = docs[0].amountDue
    let year = docs[0].year
    let term = docs[0].term

      //  let invoNumber = docs[i].invoNumber 
      
     let mailOptions ={
      from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                     to:email, // list of receivers
                     subject: `  Invoice ${invoiceNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
         html:`Dear ${studentName}: <br> <br> Your invoice-${invoiceNumber} for ${amount} is attached.Please remit payment
         at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
         Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
         attachments: [
          {
            filename:uid+'_'+studentName+'_'+'Invoice'+'.pdf',
            path:`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}.pdf`
          }
        ]
     };
     transporter.sendMail(mailOptions, function (error,info){
       if(error){
         //console.log(error)
         req.flash('danger', 'Invoice Not Emailed!');
         res.redirect('/clerk/invoiceSingleCode')
  /*res.redirect('/clerk/dashX')*/
  //res.redirect('/clerk/printInvoice')
       }else{
  /*console.log('Email sent successfully')*/
  req.flash('success', 'Invoice Emailed Successfully!');    
  //res.redirect('/clerk/printInvoice')

  res.redirect('/clerk/invoiceSingleCode')
       }
          
   console.log(email,'email')
     })

    }
  }) 
   })


   
   router.get('/printInvoice',isLoggedIn, function (req, res) {
    var code =  req.user.invoNumber
    var pro = req.user
    InvoiceFile.find({ivoiceNumber:code,type:'Invoice'},function(err,docs){
      let size = docs.length - 1
    if(docs){
      let name = docs[size].filename
  
      var year = docs[size].year
      var term = docs[size].term
    var path = "./public/invoiceReports/"+year+'/'+term+'/'+name;
  
   // const path = './public/images/1.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
  }
  })
  });

  //////

  
  router.get('/invoices', isLoggedIn,function(req,res){
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var mformat = m.format('L')
    var companyAddress = req.user.companyAddress
    var companyCity = req.user.companyCity
    var companyMobile = req.user.companyMobile
    var companyCountry = req.user.companyCountry
    var companyEmail = req.user.companyEmail
    var companyName = req.user.companyName
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('abc/invoList',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,
    companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile})
  })


///////////////////invoiceUpdate



router.get('/studentInvoiceUpdate/:id', isLoggedIn,function(req,res){
  var pro = req.user
  var invoiceNumber = req.params.id
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var m = moment()
  var mformat = m.format('L')
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('acc2/singleInvoUpdate1',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,invoiceNumber:invoiceNumber,pro:pro,companyAddress:companyAddress,
  companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile,mformat:mformat})
})

/* router.post('/invoice',function(req,res){
console.log(req.body['name[]'],req.body['quantity[]'],req.body['price[]'])

})*/





router.post('/studentInvoiceUpdate/:id',isLoggedIn,function(req,res){
  let bal,grade,class1,amountDue
  var invoNumberW = req.body.invoNumber
  var studentId = req.body.uid
  var studentId2 = req.body.studentId2
  let studentObId
  let invoiceAmount
  
	
	  let regTotalX3 = /\d+\.*\d*/g;  
    let resultTotalX3 =invoNumberW.match(regTotalX3)
    let invoNumber= Number(resultTotalX3)
  //var studentId3 =new ObjectId(studentId2)
  InvoiceSubBatch.find({invoiceCode:invoNumber},function(err,docs){
    if(docs.length >0){
      for(var i = 0; i<docs.length;i++){
      let id = docs[i]._id
      InvoiceSubBatch.findByIdAndRemove(id,function(err,locs){

      })
      console.log('batch deleted')
    }
    }



  /*InvoiceFile.find({invoiceCode:invoNumber},function(err,docs){
    if(docs.length >0){
      for(var i = 0; i<docs.length;i++){
      let invoiceAmount = docs[i].amountDue
      console.log(invoiceAmount,'invoiceAmount')
 
  }
    }*/



  InvoiceFile.find({invoiceNumber:invoNumber},function(err,docs){
    if(docs.length >0){
      for(var i = 0; i<docs.length;i++){
      let id = docs[i]._id
      amountDue = docs[i].amountDue
      InvoiceFile.findByIdAndRemove(id,function(err,locs){

      })
    }
    console.log('invoice deleted')
    }




  User.find({uid:studentId},function(err,doc){
    console.log(doc[0],'docccccc',amountDue,'amountDue',studentId2)
    bal = doc[0].balance - amountDue
    let obId = doc[0]._id
    studentObId = doc[0]._id
    console.log(bal,'bal')
    grade = doc[0].grade
    class1 = doc[0].class1
    User.findByIdAndUpdate(obId,{$set:{balance:bal}},function(err,tocs){

    })

 
console.log('balance Updated => 0')

  var id = req.user._id


  User.findByIdAndUpdate(id,{$set:{invoNumber:invoNumber}},function(err,docs){

  })

   var m2 = moment()
  var year = m2.format('YYYY')
  var month = m2.format('MMMM')
  //var date = req.body.invoice_date
  var dueDate = req.body.invoice_due_date
  var date = m2.format('L')
  var itemId = req.body.itemId
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var companyClerk = req.user.fullname
  
  let c = -1
  //var notes = req.query.notes
  var studentName= req.body.clientName
  var studentEmail = req.body.clientEmail
  var studentAddress = req.body.clientAddress
  var studentMobile = req.body.mobile

  var description = req.body.description2
 // var grade = req.body.grade
 // var class1 = req.body.class1
  var term = req.user.term
  let balance = req.body.balance
ar = req.body['code[]']
ar1 = req.body['quantity[]']
ar2=req.body['price[]']
ar3=req.body['description[]']
ar4=req.body['discount[]']
console.log(ar,ar1,ar2,'000000')

ar = ar.filter(v=>v!='')
ar1 = ar1.filter(v=>v!='')
ar2 = ar2.filter(v=>v!='')
ar3 = ar3.filter(v=>v!='')
ar4 = ar4.filter(v=>v!='')
req.check('clientName','Enter Client Name').notEmpty();            
req.check('clientEmail','Enter Client Email').notEmpty();
req.check('invoice_due_date','Enter Due Date').notEmpty();
req.check('invoice_date', 'Enter Date').notEmpty();







var errors = req.validationErrors();
   
if (errors) {

  req.session.errors = errors;
  req.session.success = false;
  req.flash('danger', req.session.errors[0].msg);
         
          
  res.redirect('/clerk/studentInvoiceUpdate');
}


else{
  ar = ar.filter(v=>v!='')
  ar1 = ar1.filter(v=>v!='')
  ar2 = ar2.filter(v=>v!='')
  ar3 = ar3.filter(v=>v!='')
  ar4 = ar4.filter(v=>v!='')
console.log(ar,'code')
console.log(ar1,'quantity')
console.log(ar2,'price')
console.log(ar3,'description')
console.log(ar4,'discount')

console.log(ar.length,'ar.length')
for(var i = 0; i<ar.length;i++){
console.log(ar[i])
let code = ar[i]
console.log(code,bal,amountDue,'balInvo')


var book = new InvoiceSubBatch();
book.item = "null"
book.code = code
book.invoNumber = invoNumber
book.itemId = 'cccc'
book.qty = 0
book.price = 0
book.total = 0
book.companyName = companyName
book.companyEmail = companyEmail
book.companyCity = companyCity
book.companyAddress = companyAddress
book.companyMobile = companyMobile
book.studentName = studentName
book.studentEmail = studentEmail
book.studentAddress =studentAddress
book.studentMobile = studentMobile
book.studentId = studentId
book.studentId2 = studentObId
book.date = date
book.balance = 0
book.invoiceAmount =0
book.invoiceDescription = "null"  //description
book.status = 'not saved'
book.invoiceCode = invoNumber
book.invoiceCodeText = invoNumber
book.invoiceId = invoNumber
book.type = "Invoice"
book.month = month
book.year = year
book.grade =  grade
book.class = class1
book.term = term
book.size = i
book.subtotal = 0
book.discount = 0



    
     
      book.save()
        .then(title =>{
//let client = title.clientName

let pId = title._id
console.log(pId,"idd")
console.log(title.size,'size')
let size = title.size

console.log(size,'size')
let qty = ar1[size]
let price = ar2[size]
let item = ar3[size]
let total = qty * price



let discount = ar4[size]
let percentage = discount / 100
let discounted = total * percentage

total -= discounted

console.log(qty,price,item,total,discount,percentage,discounted,'apprentice')

InvoiceSubBatch.findByIdAndUpdate(pId,{$set:{qty:qty,balance:bal,invoiceAmount:total,price:price,total:total,discount:discount,item:item,invoiceDescription:item}},function(err,ocs){
    
    })


  

         
          })
        }

res.redirect('/clerk/invoiceSingleProcessUpdate')
      }
    })
    })

  
})

})

router.get('/invoiceSingleProcessUpdate',isLoggedIn,function(req,res){

var code =req.user.invoNumber
console.log(code,'code')

InvoiceSubBatch.find({invoNumber:code},function(err,docs){
for(var i = 0;i<docs.length;i++){
let id = docs[i]._id
InvoiceSubBatch.findByIdAndUpdate(id,{$set:{status:"saved"}},function(err,locs){

})


}
res.redirect('/clerk/invoiceSingleSubTotalUpdate')
})


})

router.get('/invoiceSingleSubTotalUpdate',isLoggedIn,function(req,res){
 var number1 = 0
 var arr7= []
  var code =req.user.invoNumber
  let balance 
  InvoiceSubBatch.find({invoNumber:code},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arr7.push(hods[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr7) { number1 += arr7[z]; }
        for(var i = 0;i<hods.length;i++){
          let id2 = hods[i].studentId2
balance=hods[i].balance + number1
      let id = hods[i]._id
console.log(id,'333')
console.log(balance,'balance')
        InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){

        })

        User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){

        })
      }

        res.redirect('/clerk/invoiceSingleSubTotalUpdate2')

      })


})



router.get('/invoiceSingleSubTotalUpdate2',isLoggedIn,function(req,res){
  let number1 = 0
  var arr7= []
   var code =req.user.invoNumber
   let balance 
   InvoiceSubBatch.find({invoNumber:code},function(err,hods){
 console.log(hods[0].subtotal,'subtotal9')
if(hods[0].subtotal == 0){

     for(var q = 0;q<hods.length; q++){
         
       arr7.push(hods[q].total)
       console.log(arr7,'arr7')
         }
         //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
          
         for(var z in arr7) { number1 += arr7[z]; }
         console.log(number1,'number01')
         for(var i = 0;i<hods.length;i++){
           let id2 = hods[i].studentId2
           console.log(number1,'number1')
 balance=hods[i].balance + number1
       let id = hods[i]._id
 console.log(id,'333')
         InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){
 
         })

         User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){

         })
       }
      }
         res.redirect('/clerk/arrSingleInvoiceUpdate')
      
       })
 
 
 
 
 
 })


router.get('/arrSingleInvoiceUpdate',isLoggedIn,function(req,res){
var code = req.user.invoNumber



arrSingleUpdate[code]=[]


res.redirect('/clerk/invoiceSingleGenerationUpdate')

})




router.get('/invoiceSingleGenerationUpdate',isLoggedIn,function(req,res){

var code = req.user.invoNumber


//console.log(docs[i].uid,'ccc')

//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
InvoiceSubBatch.find({invoNumber:code}).lean().then(vocs=>{


for(var x = 0;x<vocs.length;x++){

let studentId = vocs[x].studentId
if( arrSingleUpdate[code].length > 0 && arrSingleUpdate[code].find(value => value.studentId == studentId) ){

  arrSingleUpdate[code].push(vocs[x])

    }
    
     
    
    
    else{
      arrSingleUpdate[code].push(vocs[x])
          
      } 


 

     

}  
    })
    
    res.redirect('/clerk/invoiceSingleGeneration2Update')
  

/*})*/

})






router.get('/invoiceSingleGeneration2Update',isLoggedIn,function(req,res){
console.log(arrSingleUpdate,'arrSingleUpdate')
var m = moment()
let dateValue = m.valueOf()
var mformat = m.format('L')
var month = m.format('MMMM')
var year = m.format('YYYY')
var code = req.user.invoNumber
var uid = req.user.invoNumber
/*console.log(arr,'iiii')*/


let studentName = arrSingleUpdate[uid][0].studentName
let studentAddress = arrSingleUpdate[uid][0].studentAddress
let studentEmail = arrSingleUpdate[uid][0].studentEmail
let studentMobile = arrSingleUpdate[uid][0].studentMobile
let studentId = arrSingleUpdate[uid][0].studentId
let amountDue = arrSingleUpdate[uid][0].subtotal
let balance = arrSingleUpdate[uid][0].balance
console.log(balance,amountDue,'bal-amountDue')
let bf = balance + amountDue
// let term = arrSingle[uid][0].term
let term = 2
let description = arrSingleUpdate[uid][0].invoiceDescription
let id2 = arrSingleUpdate[uid][0].studentId2
let class1 =arrSingleUpdate[uid][0].class1
let grade =arrSingleUpdate[uid][0].grade
let invoiceNumber =code
let date = arrSingleUpdate[uid][0].date
let invoiceId = code
let invoiceCode= code
let type = 'Invoice'
let amountPaid = 0
//console.log(docs,'docs')

const compile = async function (templateName, arrSingleUpdate){
const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

const html = await fs.readFile(filePath, 'utf8')

return hbs.compile(html)(arrSingleUpdate)

};




(async function(){

try{
//const browser = await puppeteer.launch();
const browser = await puppeteer.launch({
headless: true,
args: [
"--disable-setuid-sandbox",
"--no-sandbox",
"--single-process",
"--no-zygote",
],
executablePath:
process.env.NODE_ENV === "production"
  ? process.env.PUPPETEER_EXECUTABLE_PATH
  : puppeteer.executablePath(),
});

const page = await browser.newPage()



//const content = await compile('report3',arr[uid])
const content = await compile('euritInvoice',arrSingleUpdate[code])

//const content = await compile('index',arr[code])

await page.setContent(content, { waitUntil: 'networkidle2'});
//await page.setContent(content)
//create a pdf document
await page.emulateMediaType('screen')
await page.evaluate(() => matchMedia('screen').matches);
await page.setContent(content, { waitUntil: 'networkidle0'});
//console.log(await page.pdf(),'7777')

await page.pdf({
//path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
path:(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf'),
format:"A4",
/*width:'30cm',
height:'21cm',*/
//height: height + 'px',
printBackground:true

})


//upload.single('3400_Blessing_Musasa.pdf')
var repo = new InvoiceFile();
 
repo.studentName = studentName;
repo.studentId =studentId
repo.studentId2 =id2
repo.studentEmail = studentEmail
repo.studentAddress = studentAddress
repo.studentMobile = studentMobile
repo.class1 = class1
repo.grade = grade;
repo.filename = invoiceNumber+'_'+studentName+'.pdf';
repo.year = year;
repo.css = "danger";
repo.term = term
repo.fileId="null"
repo.description = description
repo.date = date
repo.studentBalance = bf
repo.type = type
repo.type1 = "single"
repo.amountPaid= amountPaid
repo.amountDue = amountDue
repo.invoiceTotal = amountDue
repo.typeAmount = amountDue
repo.month = month
repo.invoiceId = invoiceId
repo.invoiceCode = invoiceCode
repo.invoiceNumber = invoiceNumber
repo.invoiceNumberText = invoiceNumber
repo.receiptNumber = 0
repo.receiptNumber = dateValue
repo.statement = "true"
repo.name = "INV #"+invoiceNumber+" "+"Due"+" "+date;
repo.status = "unpaid"
repo.datePaid = "null"
repo.save().then(poll =>{
  console.log("Done creating pdf",uid)

 // req.flash('success', 'Invoice Generation Successful');

  //res.redirect('/clerk/genEmailInvoiceUpdate');

  //res.redirect('/clerk/printInvoiceUpdate')
  
 /* req.flash('success', 'Invoice Emailed Successfully!');
    
  //res.redirect('/clerk/invoiceSingleCode')*/
})


/*await browser.close()

/*process.exit()*/ 
let filename = invoiceNumber+'_'+studentName+'.pdf';

const file = await fs.readFile(`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf');
  const form = new FormData();
  form.append("file", file,filename);
 //const headers = form.getHeaders();
  //Axios.defaults.headers.cookie = cookies;
  //console.log(form)
await Axios({
    method: "POST",
    url: 'https://portal.steuritinternationalschool.org/clerk/uploadUpdate/'+studentId,
    headers: {
      "Content-Type": "multipart/form-data"  
    },
    data: form
  });
  
  
  /*await browser.close()
  
  /*process.exit()*/

  //res.redirect('/clerk/invoiceSingleCode')
    
  res.redirect('/clerk/receiptNumberUpdateDisc/'+studentId);

}catch(e) {

console.log(e)


}


}) ()




//res.redirect('/hostel/discList')

})


router.post('/uploadUpdate/:id',upload.single('file'),(req,res,nxt)=>{
  var fileId = req.file.id
  console.log(fileId,'fileId')
  var filename = req.file.filename
  console.log(filename,'filename')
  var id = req.params.id
InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){


//console.log(docs,'docs')
let id = docs[0]._id
InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

})

}
//res.redirect('/clerk/invoice')
res.redirect('/clerk/receiptNumberUpdateDisc/'+id);
})

})





router.get('/genEmailInvoiceUpdate',isLoggedIn,function(req,res){
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
 // var year = m.format('YYYY')
  var id= req.user._id
  var code = req.user.invoNumber
  console.log(code,'code')
 // var term = req.user.term
  //var uid = "ST3104"
  /*let studentName = arrReceipt[code][0].studentName
  let studentEmail = arrReceipt[code][0].studentEmail
  let studentId = arrReceipt[code][0].studentId
  let receiptNumber = arrReceipt[code][0].receiptNumber*/

  /*var count = req.user.countN
  count + 1
  let email = 'kratosmusasa@gmail.com'
  let uid = req.user.studentId
  let name = req.user.studentName
  let invoNumber = 3490*/

   const transporter = nodemailer.createTransport({
     host: 'mail.steuritinternationalschool.org',
     port:465,
     secureConnection:true,
     logger:true,
     debug:true,
     secureConnection:false,
     auth: {
         user: "admin@steuritinternationalschool.org",
         pass: "steurit2024",
     },
     tls:{
       rejectUnAuthorized:true
     }
     //host:'smtp.gmail.com'
   });
   
 

           



     InvoiceFile.find({type:"Invoice",invoiceNumber:code}, function(err,docs){
       console.log(docs.length,'length')
if(docs.length > 0){
  let email = docs[0].studentEmail
  let uid = docs[0].studentId
  let studentName = docs[0].studentName
  let invoiceNumber = docs[0].invoiceNumber
  let amount = docs[0].amountDue
  let year = docs[0].year
  let term = docs[0].term

    //  let invoNumber = docs[i].invoNumber 
    
   let mailOptions ={
    from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `  Invoice ${invoiceNumber} from ST.EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${studentName}: <br> <br> Your invoice-${invoiceNumber} for ${amount} is attached.Please remit payment
       at your earliest convenience. <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
        {
          filename:uid+'_'+studentName+'_'+'Invoice'+'.pdf',
          path:`./public/invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}.pdf`
        }
      ]
   };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       //console.log(error)
       req.flash('danger', 'Reports Not Emailed!');
  
/*res.redirect('/clerk/dashX')*/
res.redirect('/clerk/printInvoiceUpdate')
     }else{
/*console.log('Email sent successfully')*/
req.flash('success', 'Invoice Emailed Successfully!');    
res.redirect('/clerk/printInvoiceUpdate')

//res.redirect('/clerk/invoiceSingleCode')
     }
        
 console.log(email,'email')
   })

  }
}) 
 })
///////////////////





router.get('/receiptNumberUpdateDisc/:id',isLoggedIn,function(req,res){
  var id = req.user._id
  var id2 = req.params.id
    RecNum.find(function(err,doc){
      let recNum = doc[0].num
      let recId = doc[0]._id
  
  
  User.findByIdAndUpdate(id,{$set:{recNumber:recNum}},function(err,docs){
  
  })
  recNum++
  
  RecNum.findByIdAndUpdate(recId,{$set:{num:recNum}},function(err,tocs){
  
  })

  res.redirect('/clerk/invoice/'+id2)
  
    })
  
  })

 /////////////////////////
 


 router.get('/invoice/:id', isLoggedIn,function(req,res){
  var pro = req.user
 
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var id = req.params.id
  User.find({uid:id},function(err,doc){
  let fullname = doc[0].fullname
 
  res.render('abc/createDisc',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,
  companyCity:companyCity,id:id,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile,fullname:fullname})
})
})


router.post('/invoice/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var date = m.format('L')
  let dateValue = m.valueOf()
  var term = req.user.term
  var studentName= req.body.clientName
  var studentEmail = req.body.clientEmail
  var studentAddress = req.body.clientAddress
  var studentMobile = req.body.mobile
  var studentId = req.body.uid
  var studentBalance = req.body.balance
  var id2 = req.body.studentId2
  var clerk1 = req.user.fullname
var type = 'Receipt'
  ar = req.body['id[]']  
  console.log(ar)
  ar = ar.filter(v=>v!='')
let amountD = req.body.amountX
let amountX9 = req.body.amountX
let amountX3 = 0 - amountX9
//let amountPaid = req.body.amountX
let amountX4 = req.body.amountX
let regD = /\d+\.*\d*/g;  
let resultD = amountD.match(regD)
let amount= Number(resultD)

let class1 = req.body.class1
let grade = req.body.grade
let status, balance
var receiptNumber = req.user.recNumber
let totalAmountOwing
console.log(ar,'iwee')
let reg = /\d+\.*\d*/g;  
let result = amountX9.match(reg)
let amountX2= Number(result)


req.check('amountX','Enter Amount').notEmpty();
             

var errors = req.validationErrors();

if (errors) {
  
  req.session.errors = errors;
  req.session.success = false;
  req.flash('danger', req.session.errors[0].msg);


  res.redirect('/clerk/invoice/'+id);

}

  else{

   if(studentBalance <0){
    let regBal = /\d+\.*\d*/g;  
    let resultBal = studentBalance.match(regBal)
    let studentBal= Number(resultBal)


    amount = amount + studentBal
    for(var i = 0; i<ar.length;i++){
  
      console.log(ar[i],'arX',i)
      let id = ar[i]
   
    
InvoiceFile.findById(id,function(err,doc){
  let amountDue = doc.amountDue 
  let invoiceNumber = doc.invoiceNumber


  if(amount >= amountDue){
    status = 'paid'

amount = amount - amountDue
    InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amountDue,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success",remainingBalance:0}},function(err,docs){

    })


    User.findByIdAndUpdate(id2,{$set:{balance:amount}},function(err,docs){

    })

  

    var receipt = new InvoiceFile();
receipt.studentName = studentName;
receipt.studentId = studentId;
receipt.studentId2 = id2;
receipt.studentEmail = studentEmail;
receipt.studentAddress = studentAddress;
receipt.studentMobile = studentMobile;
receipt.clerk = clerk1;
receipt.class1 = class1;
receipt.term = term
receipt.grade = grade;
receipt.month= month;
receipt.filename = receiptNumber+'_'+studentName+'.pdf';
receipt.year = year;
receipt.date = date;
receipt.dateValue = dateValue;
receipt.type = type;
receipt.type1 = 'single';
receipt.name = "PMT";
receipt.invoiceNumber= invoiceNumber;
receipt.amountDue= amountDue;
receipt.receiptNumber = receiptNumber;
receipt.status = 'paid';

receipt.studentBalance = amount;
receipt.amountPaid = amountX2;
receipt.typeAmount = amountX2
receipt.remainingBalance = 0;
receipt.datePaid = date;
receipt.invoiceAmountPaid=amountDue;
receipt.invoiceAmountDue= 0;



receipt.save()
.then(user =>{
 
 


})
  }else{
    status = 'unpaid'
    balance = amountDue - amount

   

    InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amount,amountDue:balance,status:'unpaid',receiptNumber:receiptNumber,remainingBalance:balance}},function(err,docs){

    })

    User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){
      
    })




    var receipt = new InvoiceFile();
    receipt.studentName = studentName;
    receipt.studentId = studentId;
    receipt.studentId2 = id2;
    receipt.studentEmail = studentEmail;
    receipt.studentAddress = studentAddress;
    receipt.studentMobile = studentMobile;
    receipt.clerk = clerk1;
    receipt.class1 = class1;
    receipt.grade = grade;
    receipt.month= month;
    receipt.filename = receiptNumber+'_'+studentName+'.pdf';
    receipt.year = year;
    receipt.date = date;
    receipt.type = type;
    receipt.type1 = 'single';
    receipt.name = "PMT";
    receipt.term= term;
    receipt.invoiceNumber= invoiceNumber;
    receipt.amountDue= amountDue;
    receipt.receiptNumber = receiptNumber;
    receipt.status = 'paid';
    receipt.studentBalance = balance;
    receipt.amountPaid = amountX2;
    receipt.typeAmount = amountX2
    receipt.remainingBalance = balance;
    receipt.datePaid = date;
    receipt.dateValue = dateValue;
   
    receipt.invoiceAmountPaid=amount;
    receipt.invoiceAmountDue= balance;

    
    
    receipt.save()
      .then(user =>{
       
       
     
    
      })
    
  }


})
}
    
   }else{
    let newBalance = studentBalance - amountX4
    if(newBalance >= 0){
    
    totalAmountOwing = newBalance
    
    }else{
      totalAmountOwing = 0
    }

    for(var i = 0; i<ar.length;i++){
    
      console.log(ar[i],'ar',i)
      let id = ar[i]

    
    
      InvoiceFile.findById(id,function(err,doc){
        let amountDue = doc.amountDue 
        let invoiceNumber = doc.invoiceNumber
       // let studentBal = doc.studentBalance + amountX2
        if(amount >= amountDue){
           status = 'paid'
          balance = 0
          let invoiceTotal = doc.invoiceTotal
          InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:invoiceTotal,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success",remainingBalance:totalAmountOwing}},function(err,docs){
    
          })
    
          User.findByIdAndUpdate(id2,{$set:{balance:newBalance}},function(err,docs){
    
          })

        
         // amount = amount - amountDue
    var receipt = new InvoiceFile();
    receipt.studentName = studentName;
    receipt.studentId = studentId;
    receipt.studentId2 = id2;
    receipt.studentEmail = studentEmail;
    receipt.studentAddress = studentAddress;
    receipt.studentMobile = studentMobile;
    receipt.clerk = clerk1;
    receipt.class1 = class1;
    receipt.grade = grade;
    receipt.month= month;
    receipt.filename = receiptNumber+'_'+studentName+'.pdf';
    receipt.year = year;
    receipt.date = date;
    receipt.type = type;
    receipt.type1 = 'single';
    receipt.name = "PMT";
    receipt.term= term;
    receipt.invoiceNumber= invoiceNumber;
    receipt.amountDue= amountDue;

    receipt.receiptNumber = receiptNumber;
    receipt.status = 'paid';
    receipt.studentBalance = newBalance;
    receipt.amountPaid = amountX2;
    receipt.typeAmount = amountX2
    receipt.remainingBalance = totalAmountOwing;
    receipt.datePaid = date;
    receipt.invoiceAmountPaid=amountDue;
    receipt.invoiceAmountDue= 0;
    
    
    
    receipt.save()
      .then(user =>{
       
       
     
    
      })
        }else{
          status = 'unpaid'
          balance = amountDue - amount
        
    
          InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amount,amountDue:balance,status:'unpaid',receiptNumber:receiptNumber,remainingBalance:totalAmountOwing}},function(err,docs){
    
          })
          
    
          User.findByIdAndUpdate(id2,{$set:{balance:newBalance}},function(err,docs){
            
          })
          
          var receipt = new InvoiceFile();
          receipt.studentName = studentName;
          receipt.studentId = studentId;
          receipt.studentId2 = id2;
          receipt.studentEmail = studentEmail;
          receipt.studentAddress = studentAddress;
          receipt.studentMobile = studentMobile;
          receipt.clerk = clerk1;
          receipt.class1 = class1;
          receipt.grade = grade;
          receipt.month= month;
          receipt.filename = receiptNumber+'_'+studentName+'.pdf';
          receipt.year = year;
          receipt.date = date;
          receipt.type = type;
          receipt.type1 = 'single';
          receipt.name = "PMT";
          receipt.term= term;
          receipt.invoiceNumber= invoiceNumber;
          receipt.amountDue= amountDue;
          receipt.receiptNumber = receiptNumber;
          receipt.status = 'paid';
          receipt.studentBalance = newBalance;
          receipt.amountPaid = amountX2;
          receipt.typeAmount = amountX2
          receipt.remainingBalance = totalAmountOwing;
          receipt.datePaid = date;
          receipt.invoiceAmountPaid=amount;
      
          receipt.invoiceAmountDue= balance;
    
          
          
          receipt.save()
            .then(user =>{
             
             
           
          
            })
          
    
        }
        amount = amount - amountDue
        if(amount < 0 ){
          amount = 0
        }
    
       
    
    
    
      
        
       // InvoiceFile.findByIdAndUpdate(id,{$set:{}})
      })
    }
   }
  // res.redirect('/clerk/arrReceipt')

   res.redirect('/clerk/receiptUpdateDisc')
    

  }
  })







router.get('/receiptUpdateDisc',isLoggedIn,function(req,res){
var code = req.user.recNumber

InvoiceFile.find({receiptNumber:code,type:"Receipt"},function(err,docs){
  if(docs.length > 0){
    let id = docs[0]._id
    InvoiceFile.findByIdAndUpdate(id,{$set:{statement:"true"}},function(err,locs){

    })
  }
  res.redirect('/clerk/arrReceiptDisc')
})
})







router.get('/arrReceiptDisc',isLoggedIn,function(req,res){
var code = req.user.recNumber


 arrReceipt[code]=[]

res.redirect('/clerk/receiptProcessDisc')




})


router.get('/receiptProcessDisc',isLoggedIn,function(req,res){
var code = req.user.recNumber
console.log(code,'receiptNumber')
//console.log(docs[i].uid,'ccc')
console.log(arrReceipt,'arrReceipt')
//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
  
    InvoiceFile.find({receiptNumber:code,type:"Invoice"}).lean().then(vocs=>{
 console.log(vocs.length,'vocs')
      for(var x = 0; x < vocs.length;x++){

if( arrReceipt[code].length > 0 && arrReceipt[code].find(value => value.receiptNumber == code) ){

  arrReceipt[code].push(vocs[x])

    }
    
     
    
    
    else{
      arrReceipt[code].push(vocs[x])
          
      } 


    }


    res.redirect('/clerk/receiptGenerationDisc')

    })

  
    

  

/*})*/

})



router.get('/receiptGenerationDisc',isLoggedIn,function(req,res){

var m = moment()
var mformat = m.format('L')
var month = m.format('MMMM')
//var year = m.format('YYYY')
var code = req.user.recNumber
var clientName = req.user.clientName
/*console.log(arr,'iiii')*/
var term =arrReceipt[code][0].term
var year = arrReceipt[code][0].year
var studentName = arrReceipt[code][0].studentName
var receiptNumber = arrReceipt[code][0].receiptNumber

//console.log(docs,'docs')

const compile = async function (templateName, arrReceipt){
const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

const html = await fs.readFile(filePath, 'utf8')

return hbs.compile(html)(arrReceipt)

};




(async function(){

try{
//const browser = await puppeteer.launch();
const browser = await puppeteer.launch({
headless: true,
args: [
"--disable-setuid-sandbox",
"--no-sandbox",
"--single-process",
"--no-zygote",
],
executablePath:
process.env.NODE_ENV === "production"
  ? process.env.PUPPETEER_EXECUTABLE_PATH
  : puppeteer.executablePath(),
});

const page = await browser.newPage()



//const content = await compile('report3',arr[uid])
const content = await compile('euritReceipt',arrReceipt[code])

//const content = await compile('index',arr[code])

await page.setContent(content, { waitUntil: 'networkidle2'});
//await page.setContent(content)
//create a pdf document

         
await page.emulateMediaType('screen')
let height = await page.evaluate(() => document.documentElement.offsetHeight);
await page.evaluate(() => matchMedia('screen').matches);
await page.setContent(content, { waitUntil: 'networkidle0'});
//console.log(await page.pdf(),'7777')

await page.pdf({
//path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
path:(`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}`+'.pdf'),
/* format:"A4",
width:'30cm',
height:'21cm',*/
height: height + 'px',
  printBackground:true

})

console.log('pdf successful')
let filename = receiptNumber+'_'+studentName+'.pdf';
  //console.log('pdf successful')

  const file = await fs.readFile(`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}`+'.pdf');
  const form = new FormData();
  form.append("file", file,filename);
 //const headers = form.getHeaders();
  //Axios.defaults.headers.cookie = cookies;
  //console.log(form)
await Axios({
    method: "POST",
    url: 'https://portal.steuritinternationalschool.org/clerk/uploadReceiptDisc',
    headers: {
      "Content-Type": "multipart/form-data"  
    },
    data: form
  });








res.redirect('/clerk/genEmailReceiptDisc')



/*await browser.close()

process.exit()*/



}catch(e) {

console.log(e)


}


}) ()




//







})


router.post('/uploadReceiptDisc',upload.single('file'),(req,res,nxt)=>{
  var fileId = req.file.id
  console.log(fileId,'Receipt fileId')
  var filename = req.file.filename
  console.log(filename,'filename')
InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){


//console.log(docs,'docs')
let id = docs[0]._id
InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

})


}
res.redirect('/clerk/genEmailReceiptDisc')
})

})











router.get('/genEmailReceiptDisc',isLoggedIn,function(req,res){
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
 // var year = m.format('YYYY')
  var id= req.user._id
  var code = req.user.recNumber
 // var term = req.user.term
  //var uid = "ST3104"
  /*let studentName = arrReceipt[code][0].studentName
  let studentEmail = arrReceipt[code][0].studentEmail
  let studentId = arrReceipt[code][0].studentId
  let receiptNumber = arrReceipt[code][0].receiptNumber*/

  /*var count = req.user.countN
  count + 1
  let email = 'kratosmusasa@gmail.com'
  let uid = req.user.studentId
  let name = req.user.studentName
  let invoNumber = 3490*/

   const transporter = nodemailer.createTransport({
     host: 'mail.steuritinternationalschool.org',
     port:465,
     secureConnection:true,
     logger:true,
     debug:true,
     secureConnection:false,
     auth: {
         user: "admin@steuritinternationalschool.org",
         pass: "steurit2024",
     },
     tls:{
       rejectUnAuthorized:true
     }
     //host:'smtp.gmail.com'
   });
   
 

           

(async function(){


  
  try{   

     InvoiceFile.find({type:"Receipt",receiptNumber:code},async function(err,docs){
 let size = docs.length - 1

      let email = docs[size].studentEmail
      let uid = docs[size].studentId
      let studentName = docs[size].studentName
      let receiptNumber = docs[size].receiptNumber
      let year = docs[size].year
      let term = docs[size].term
      let amount = docs[size].amountPaid
    //  let invoNumber = docs[i].invoNumber 
    
   let mailOptions ={
     from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                 to:email, // list of receivers
                 subject: `Your Payment  Receipt from ST. EURIT INTERNATIONAL SCHOOL `,
     html:`Dear ${studentName}: <br> <br> Your Payment  Receipt ${receiptNumber} for ${amount} is attached . <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
     Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
     attachments: [
       {
         filename:uid+'_'+studentName+'_'+'Receipt'+'.pdf',
         path:`./public/receiptReports/${year}/${term}/${receiptNumber}_${studentName}.pdf`
       }
     ]
   };
 await  transporter.sendMail(mailOptions, function (error,info){
     if(error){
       //console.log(error)
      /* req.flash('danger', 'Reports Not Emailed!');
  
res.redirect('/clerk/dashX')*/
res.redirect('/clerk/printReceipt')
     }else{
    /*   console.log('Email sent successfully')*/
       req.flash('success', 'Receipt Emailed Successfully!');
  
res.redirect('/clerk/printReceipt')
     }
        
 console.log(email,'email')
   })

  
})
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()

 
  
 
 })

 
 router.get('/printInvoiceUpdate',isLoggedIn, function (req, res) {
  var code =  req.user.invoNumber
  var pro = req.user
  InvoiceFile.find({ivoiceNumber:code,type:'Invoice'},function(err,docs){
    let size = docs.length - 1
  if(docs){
    let name = docs[size].filename

    var year = docs[size].year
    var term = docs[size].term
  var path = "./public/invoiceReports/"+year+'/'+term+'/'+name;

 // const path = './public/images/1.pdf'
  if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      fs.createReadStream(path).pipe(res)
  } else {
      res.status(500)
      console.log('File not found')
      res.send('File not found')
  }
}
})
});












  



  router.get('/pass',isLoggedIn, (req, res) => {
    var pro = req.user
     User.findById(req.user._id, (err, doc) => {
         if (!err) {
             res.render("abc/change", {
                
                 user: doc,pro:pro
               
             });
         }
     });
   });
   





  
router.post('/pass',isLoggedIn, function(req,res){
  var user = new User();
  var pro = req.user
  req.check('password','Enter New Password').notEmpty();

  req.check('confirmPassword', 'Confirm Password').notEmpty();


req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
var errors = req.validationErrors();




 if (errors) {

 

    req.session.errors = errors;
    req.session.success = false;
    res.render('abc/change',{ title: 'User Update', user:req.body, errors:req.session.errors, pro:pro
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
      res.render('abc/change',{message:req.session.message, user:req.user, pro:pro
       }); }
    else {
      console.log('error'+err)

    }
  
})
}



})

//add Student

router.get('/addStudent',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var prefix = req.user.prefix
  var title, readonly
  var idNum=req.user.idNumber
  idNum++
  var uid = prefix+idNum
  
  //if(actualCount < count){
  
    Class1.find({},function(err,docs){
      Level.find({},function(err,gocs){
  
     var arr = gocs
      var arr1 = docs;
   
     var classes = docs.length;
      /*if(classes == 0){
        res.redirect('/hurlings/addClass')
      }else{*/
      res.render('acc2/admit',{arr1:arr1,arr:arr,pro:pro,uid1:uid,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
      
      })
    })

    
  })





 /////////////post2
  
 router.post('/addStudent',isLoggedIn,upload.single('file'),function(req, res, next) {
  var m = moment()
  var m = moment()
  var year = m.format('YYYY')
  var pro = req.user
  var idNum=req.user.idNumber
  var prefix = req.user.prefix
  idNum++
  var uid7 = prefix+idNum
    var adminBal = req.user.balance
    var uid = req.body.uid;
    var grade = req.body.grade
    var name = req.body.name;
    var surname = req.body.surname;
    var fullname= name +" "+ surname
    var role = 'student';
    var suffix = 'null';
    var expdate = req.user.expdate
    var expStr = req.user.expStr
    var address = req.body.address
    var address2 = req.body.address2
    var mobile = req.body.mobile;
    var mobile2 = req.body.mobile2
    var gender = req.body.gender;
    var dob = req.body.dob;
  var email = req.body.email
  var email2 = req.body.email2
    var class1 = req.body.class1;
  

    var idNumber = req.user.idNumber;
    var schoolName = req.user.schoolName;
    //var password = req.body.password;
    var term = req.user.term
    idNumber++

    var prefix = req.user.prefix
    var photo = req.body.file
    var id = req.user._id
    var count = req.user.count
    var actualCount = req.user.actualCount
   var uid1 = prefix+idNumber
  var password = "password"
   console.log(grade,'gradeX')
  

  
   
    req.check('name','Enter Name').notEmpty();
    req.check('surname','Enter Surname').notEmpty();
    req.check('email','Enter email').notEmpty().isEmail();
    req.check('dob','Enter Date Of Birth').notEmpty();
    req.check('address','Enter Address').notEmpty();
    req.check('grade','Enter Grade/Form').notEmpty();
    req.check('uid','Enter Student ID').notEmpty();
    req.check('class1','Enter Class').notEmpty();
    req.check('gender','Enter Gender').notEmpty();
    req.check('mobile', 'Enter Phone Number').notEmpty()
   
 
  
   
  
        
          
       
    var errors = req.validationErrors();

        if (errors) {
           
  Class1.find({},function(err,docs){
    Level.find({},function(err,gocs){

   var arr = gocs
    var arr1 = docs;
  
          req.session.errors = errors;
          req.session.success = false;
          res.render('acc2/admit',{uid1:uid7, errors:req.session.errors,arr:arr, arr1:arr1,pro:pro, user:req.body})

        /* req.flash('danger', req.session.errors[0].msg);
       
        
          res.redirect('/records/addStudent');*/

    })
  })
  
        
      }
      else
    
      {
        User.findOne({'uid':uid})
        .then(user =>{
            if(user){ 
          // req.session.errors = errors
            //req.success.user = false;
            Class1.find({}, function(err,docs){
              Level.find({},function(err,gocs){

                var arr = gocs
                 var arr1 = docs;
              var arr1 = docs;
           req.session.message = {
             type:'errors',
             message:'student already in the system'
           }     
           
              res.render('acc2/admit', {
                   message:req.session.message,uid1:uid7, arr:arr,arr1:arr1,pro:pro,user:req.body}) 
            })
            })
      }
      
                    else  {   
                      var user = new User();
                      user.uid = uid;
                      user.name = name;
                      user.fullname = fullname;
                      user.surname = surname;
                      user.role = 'student';
                      user.gender = gender;
                      user.dob = dob;
                      user.studentId = 'null'
                      user.grade = grade;
                      user.class1 = class1;
                      user.mobile = mobile;
                      user.mobile2 = mobile2
                      user.classLength = 0;
                      user.studentNum = 0;
                      user.uidNum = 0;
                      user.teacherId = 'null';
                      user.teacherName = 'null';
                      user.classNo = 0
                      user.examDate = 'null';
                      user.feeStatus = 'null';
                      user.feesUpdate = 'null';
                      user.term = term;
                      user.amount = 0;
                      user.idNumber = idNumber;
                      user.schoolName = 'null';
                      user.receiptNumber = 0;
                      user.year = year;
                      user.prefix = prefix
                      user.balance = adminBal;
                      user.balanceCarriedOver = 0;
                      user.status = 'owing';
                      user.status4 = 'null';
                      user.number = 0;
                      user.paymentId = 'null';
                      user.suffix = suffix;
                      user.photo = "propic.jpg";
                      user.level = 0;
                      user.levelX = 'normal';
                      user.pollUrl ='null';
                      user.annual = 0;
                      user.fees = 0;
                      user.state = 'new'
                   
                      user.idNumber = 0;
                      user.idNumX = 0
                      user.recNumber=0
                      user.type = 'null';
                      user.address = address;
                      user.address1 = address2
                      user.email = email
                      user.email2 = email2
                      user.category = 'null';
                      user.subject = 0;
                      user.subjects = 'null'
                      user.subjectCode = 'null'
                      user.dept = 'null';
                      user.paynow = 0
                      user.password = user.encryptPassword(password)
                      user.expdate=expdate;
                      user.expStr = expStr;    
                      user.status3 = "null"
                      user.pollUrl2 = "null"
                      user.possibleMark = 0;
                      user.count=count
                      user.pollCount = 0
                      user.actualCount = actualCount
                      user.startYear = year
                      user.possibleMark = 0;
                      user.topic = 'null';
                      user.currentYearCount = 0
                      user.stdYearCount = 0
                      user.admissionYear = year 
                      user.icon = 'null'
                      user.subjectNo = 0
                      user.quizDuration = 0
                      user.inboxNo = 0
                      user.quizNo = 0
                      user.quizBatch = 0
                      user.quizId = 'null'
                      user.testId = 'null'
                      user.industry = 'null'
                      user.text = password
                      user.parentId = 'null'
                      user.save()
                        .then(user =>{
                       
                     
                          User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,locs){
                          
                            req.flash('success', 'Student Registered Successfully');
                          res.redirect('/clerk/addStudent')
                          
                          })
                       
                      
    
                    })
                    }
    
                        })
                      }
                  
                     
                   
    
                      
    })
    





//change id number 
//adding lessons to timetable
router.get('/idEdit',isLoggedIn,function(req,res){
  var pro = req.user
  res.render('clerkRecords/idNum',{pro:pro})
  
  })
  
  router.post('/idEdit',isLoggedIn, function(req,res){
       var pro = req.user
  var idNumber = req.body.idNumber;
  var id = req.user._id

  
    req.check('idNumber','Enter ID Number').notEmpty();
   
   
    var errors = req.validationErrors();
    if (errors) {
   
      req.session.errors = errors;
      req.session.success = false;
      res.render('clerkRecords/idNum',{errors:req.session.errors,pro:pro})
   
    
   }
   else
  User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){
    req.flash('success', 'ID sequence changed successfully');
    res.redirect('/clerk/addStudent')
  })

  })









  router.get('/invoUpdate33',isLoggedIn,function(req,res){

    User.find({role:"student"},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let id = docs[i]._id
        let uid = docs[i].uid
        let balance = docs[i].balance
        InvoiceFile.find({studentId:uid},function(err,locs){
          if(locs.length == 1){
            let invoId = locs[0]._id
            InvoiceFile.findByIdAndUpdate(invoId,{$set:{studentBalance:balance}},function(err,nocs){

            })
          }
        })
      }
    })
  })


router.get('/importInvo',isLoggedIn,function(req,res){
  res.render('imports/invoices')
})
  router.post('/importInvo',upload.single('file'),function(req,res){
console.log(req.file,'cccc')
console.log(req,'req')
  })







router.get('/oldInvoice',isLoggedIn,function(req,res){
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('acc2/oldInvoices',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
})

router.post('/oldInvoice',isLoggedIn,function(req,res){

var studentName = req.body.fullname
var studentId = req.body.uid
let status = req.body.status
var date = req.body.date
var m = moment(date)
var dateValue = m.valueOf()
var mformat = m.format('L')
var year = m.format('YYYY')
var month = m.format('MMMM')
console.log(year,month,dateValue,mformat,'rtv')
var invoiceTotal = req.body.invoiceTotal
var studentBalance = req.body.studentBalance
var amountPaid = req.body.amountPaid
var invoiceNumber = req.body.invoiceNumber
var datePaid = req.body.datePaid
var remainingBalance = req.body.remainingBalance
var studentId2 = req.body.id2
var email = req.body.email
var address = req.body.address
var mobile = req.body.mobile
var grade = req.body.grade
var month = req.body.month
var dueDate = mformat
var class1 = req.body.class1
var term = req.body.term
var type = "Invoice"
let css
if(status == 'paid'){
  css = 'success'
}else{
  css= 'danger'
}

  req.check('fullname','Enter StudentName').notEmpty();            
  req.check('uid','Enter StudentId').notEmpty();
  req.check('status','Enter Status').notEmpty();
  req.check('date','Enter Date').notEmpty();
  req.check('invoiceTotal','Enter Invoice Total').notEmpty();
  req.check('studentBalance', 'Enter Student Balance').notEmpty();
  req.check('amountPaid','Enter Amount Paid').notEmpty();
  req.check('invoiceNumber','Enter Invoice Number').notEmpty();
  req.check('datePaid','Enter Date Paid').notEmpty();
  req.check('remainingBalance','Enter Remaining Balance').notEmpty();
  
  
  
  var errors = req.validationErrors();
     
  if (errors) {
  
    req.session.errors = errors;
    req.session.success = false;
    req.flash('danger', req.session.errors[0].msg);
           
            
    res.redirect('/clerk/oldInvoice');
  }


  else{


  
  var repo = new InvoiceFile();
   
  repo.studentName = studentName;
  repo.studentId = studentId
  repo.studentEmail = email
  repo.studentAddress = address
  repo.studentMobile = mobile
  repo.class1 = class1
  repo.grade = grade;
  repo.fileId = "null"
  repo.filename = invoiceNumber+'_'+studentName+'.pdf';
  repo.year = year;
  repo.term = term
  repo.date = mformat
  repo.type = type
  repo.css = css
  repo.type1 = 'single'
  repo.type2 = 'old'
  repo.amountPaid= amountPaid
  repo.amountDue = remainingBalance
  repo.month = month
  repo.invoiceId = invoiceNumber
  repo.invoiceCode = invoiceNumber
  repo.invoiceNumber = invoiceNumber
  repo.receiptNumber = 0
  repo.status = status
  repo.datePaid = datePaid
  repo.dueDate = dueDate
  repo.dateValue = dateValue
  repo.studentBalance = studentBalance
  repo.invoiceTotal = invoiceTotal
  repo.save().then(poll =>{
    //console.log("Done creating pdf",uid)

    req.flash('success', 'Invoice Success');
 
    res.redirect('/clerk/oldInvoice');
  })


}
})


router.get('/receiptSingleCode',isLoggedIn,function(req,res){
  var id = req.user._id

      RecNum.find(function(err,doc){
        let invoNum = doc[0].num
        let invoId = doc[0]._id
    
    
    User.findByIdAndUpdate(id,{$set:{recNum:invoNum}},function(err,docs){
    
    })
    invoNum++
    
    RecNum.findByIdAndUpdate(invoId,{$set:{num:invoNum}},function(err,tocs){
    
    })
    res.redirect('/clerk/oldReceipts')
    
      })


})

router.get('/oldReceipts',isLoggedIn,function(req,res){
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var recNum = req.user.recNum
  console.log(recNum)
  res.render('acc2/oldReceipts',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,recNum:recNum})
})

router.post('/oldReceipts',isLoggedIn,function(req,res){

  var studentName = req.body.fullname
  var studentId = req.body.uid
  let status = req.body.status
  var date = req.body.date
  var m = moment(date)
var dateValue = m.valueOf()
var mformat = m.format('L')
var year = m.format('YYYY')
var month = m.format('MMMM')
  var amountOwing = req.body.amountOwing

  var studentBalance = req.body.studentBalance
  var amountPaid = req.body.amountPaid
  var amountOwing = req.body.amountOwing
  var datePaid = req.body.date
  var receiptNumber = req.body.receiptNumber
  var studentId2 = req.body.id2
  var email = req.body.email
  var address = req.body.address
  var mobile = req.body.mobile
  var grade = req.body.grade
  
  var term = req.body.term

  var class1 = req.body.class1
  var type = "Receipt"
  let css = "success"
 

  req.check('fullname','Enter StudentName').notEmpty();            
  req.check('uid','Enter StudentId').notEmpty();
  req.check('status','Enter Status').notEmpty();
  req.check('date','Enter Date').notEmpty();
 
  req.check('studentBalance', 'Enter Student Balance').notEmpty();
  req.check('amountPaid','Enter Amount Paid').notEmpty();

  
 
  
  
  
  var errors = req.validationErrors();
     
  if (errors) {
  
    req.session.errors = errors;
    req.session.success = false;
    req.flash('danger', req.session.errors[0].msg);
           
            
    res.redirect('/clerk/oldReceipts');
  }


  else{


  
  var repo = new InvoiceFile();
   
  repo.studentName = studentName;
  repo.studentId = studentId
  repo.studentEmail = email
  repo.studentAddress = address
  repo.studentMobile = mobile

  repo.grade = grade;
  repo.fileId = "null"
  repo.filename = receiptNumber+'_'+studentName+'.pdf';
  repo.year = year;
  repo.term = term
  repo.date = mformat
  repo.dateValue = dateValue
  repo.type = type
  repo.css = css
  repo.name = "PMT"
  repo.type1 = 'single'
  repo.type2 = 'old'
  repo.amountPaid= amountPaid
  repo.amountDue = amountOwing
  repo.remainingBalance = amountOwing
  repo.month = month
 
  repo.receiptNumber = receiptNumber
  repo.status = status


  repo.studentBalance = studentBalance

  repo.save().then(poll =>{
    //console.log("Done creating pdf",uid)

    req.flash('success', 'Receipt Success');
 
    res.redirect('/clerk/receiptSingleCode');
  })

  }


})





  //year autocomplete

  
  router.get('/autocompleteXMYear/',isLoggedIn, function(req, res, next) {
    
     
    var regex= new RegExp(req.query["term"],'i');
    var uidFilter =Year.find({year:regex},{'year':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  console.log(sub,'roman')
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.year,
           
  
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
  
           
         };
        
         result.push(obj);
         console.log('object',obj.id)
       });
  
     }
   
     res.jsonp(result);
     console.log('Result',result)
    }
  
  })
  
  });
  
  // role admin
  //this routes autopopulates teachers info from the id selected from automplet1
  router.post('/autoXMYear',isLoggedIn,function(req,res){
    var codeX = req.body.codeX
  
  
  
    Year.find({year:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  //autocomplete month

  /////floor autocomplete
  
  router.get('/autocompleteXMonth/',isLoggedIn, function(req, res, next) {
    
     
    var regex= new RegExp(req.query["term"],'i');
    var uidFilter =Month.find({month:regex},{'month':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  console.log(sub,'roman')
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.month,
           
  
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
  
           
         };
        
         result.push(obj);
         console.log('object',obj.id)
       });
  
     }
   
     res.jsonp(result);
     console.log('Result',result)
    }
  
  })
  
  });
  
  // role admin
  //this routes autopopulates teachers info from the id selected from automplet1
  router.post('/autoXMonth',isLoggedIn,function(req,res){
    var codeX = req.body.codeX
  
  
  
    Month.find({month:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
router.get('/statement',function(req,res){
  res.render('eurit/ntable')
})


router.get('/arrStatement/:id',isLoggedIn,function(req,res){
  //var code = req.user.invoNumber
  //var code = "Tiana Madzima"
var id = req.params.id
User.findById(id,function(err,doc){
  let uid = doc.uid

  

  
  arrStatement[uid]=[]
 
  
  res.redirect('/clerk/arrStatementProcess/'+uid)
})
  })



   
  router.get('/arrStatementProcess/:id',isLoggedIn,function(req,res){
  console.log(arrStatement,'arrStat')
    //var code = "Tiana Madzima"

    var code = req.params.id
    
    console.log(code,'code')
    //console.log(docs[i].uid,'ccc')
    
    //let uid = "SZ125"
    
    
    //TestX.find({year:year,uid:uid},function(err,vocs) {
    InvoiceFile.find({studentId:code}).lean().sort({dateValue:1}).then(vocs=>{
    console.log(vocs.length,'vocs')
    
    for(var x = 0;x<vocs.length;x++){
    let size = vocs.length - 1
    let studentBalance = vocs[size].studentBalance
    let studentName = vocs[x].studentName
    if( arrStatement[code].length > 0 && arrStatement[code].find(value => value.studentId == code) ){
      arrStatement[code].find(value => value.studentId == code).typeBalance = studentBalance;
      arrStatement[code].push(vocs[x])
    
        }
        
         
        
        
        else{
          arrStatement[code].push(vocs[x])
          arrStatement[code].find(value => value.studentId == code).typeBalance = studentBalance;
          } 
    
    
     
    
         
    
    }  
        })
        
        res.redirect('/clerk/statementGen/'+code)
      
    
    /*})*/
    
    })
    

router.get('/statementGen/:id',isLoggedIn,function(req,res){
  console.log(arrStatement,'arrSingleUpdate')
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var term = 2
  //var code ="Tiana Madzima"
  var code = req.params.id

  //var studentName = 'Tiana Madzima'
  var studentName = req.params.id
  /*console.log(arr,'iiii')*/
  
  
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrStatement){
  const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
  const html = await fs.readFile(filePath, 'utf8')
  
  return hbs.compile(html)(arrStatement)
  
  };
  
  
  
  
  (async function(){
  
  try{
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
  headless: true,
  args: [
  "--disable-setuid-sandbox",
  "--no-sandbox",
  "--single-process",
  "--no-zygote",
  ],
  executablePath:
  process.env.NODE_ENV === "production"
    ? process.env.PUPPETEER_EXECUTABLE_PATH
    : puppeteer.executablePath(),
  });
  
  const page = await browser.newPage()
  
  
  
  //const content = await compile('report3',arr[uid])
  const content = await compile('statement2',arrStatement[code])
  
  //const content = await compile('index',arr[code])
  
  await page.setContent(content, { waitUntil: 'networkidle2'});
  //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  //let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
   
let filename = 'statement'+'_'+studentName+'.pdf'
  await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./public/statements/${year}/${term}/statement_${studentName}`+'.pdf'),
  format:"A4",
  width:'30cm',
  height:'21cm',
  //height: height + 'px',
  printBackground:true
  
  })
  
  
  //upload.single('3400_Blessing_Musasa.pdf')

  
  
  /*await browser.close()
  
  /*process.exit()*/
  
  const file = await fs.readFile(`./public/statements/${year}/${term}/statement_${studentName}`+'.pdf');
  const form = new FormData();
  form.append("file", file,filename);
 //const headers = form.getHeaders();
  //Axios.defaults.headers.cookie = cookies;
  //console.log(form)
await Axios({
    method: "POST",
   url: 'https://portal.steuritinternationalschool.org/clerk/uploadStatement',
    // url: 'http://localhost:9500/clerk/uploadStatement',
    headers: {
      "Content-Type": "multipart/form-data"  
    },
    data: form
  });
  

  
  res.redirect('/clerk/fileId/'+filename);
  
  
  }catch(e) {
  
  console.log(e)
  
  
  }
  
  
  }) ()
  
  
  
  
  //res.redirect('/hostel/discList')
  
  })
  
  

  
  router.post('/uploadStatement',upload.single('file'),(req,res,nxt)=>{
    var fileId = req.file.id
    console.log(fileId,'fileId')
    var filename = req.file.filename
    console.log(filename,'filename')
/*InvoiceFile.find({filename:filename},function(err,docs){
if(docs.length>0){


  //console.log(docs,'docs')
  let id = docs[0]._id
  InvoiceFile.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

  })

}*/
  res.redirect('/clerk/fileId/'+filename)
//})
  
  })


router.get('/fileId/:id',function(req,res){
console.log(req.params.id)
var id = req.params.id

res.redirect('/clerk/openStatement/'+id)

})


  router.get('/openStatement/:id',(req,res)=>{
    var filename = req.params.id
    console.log(filename,'fileId')
      const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
      gfs.files.find({filename: filename}).toArray((err, files) => {
      console.log(files[0])
    
        const readStream = bucket.openDownloadStream(files[0]._id);
            readStream.pipe(res);
    
      })
     //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
    })

    /*router.get('/openStatement/:id',(req,res)=>{
      var fileId = req.params.id
        const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
        gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
        
      
          const readStream = bucket.openDownloadStream(files[0]._id);
              readStream.pipe(res);
      
        })
       //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
      })*/




router.get('/dateUpdate',function(req,res){
InvoiceFile.find({statement:"true"},function(err,docs){
  for(var i = 0;i<docs.length;i++){
    let date = docs[i].date
    let id = docs[i]._id
    let m = moment(date)
          
    console.log(m,'date')
    let dateValue = m.valueOf()

    InvoiceFile.findByIdAndUpdate(id,{$set:{dateValue:dateValue}},function(err,locs){

    })
 
  }
})

})




router.get('/nameUpdate',function(req,res){
InvoiceFile.find({statement:"true",type:"Invoice"},function(err,docs){
  for(var i = 0;i<docs.length;i++){
    let date = docs[i].date
    let id = docs[i]._id
    let invoiceNumber = docs[i].invoiceNumber
    let name = "INV #"+invoiceNumber+" "+"Due"+" "+date;

    InvoiceFile.findByIdAndUpdate(id,{$set:{name:name}},function(err,locs){
      
    })
 
  }
})

})

  
  
router.get('/importInvoices',isLoggedIn, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   

  

  
 res.render('imports/invoices',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importInvoices',isLoggedIn, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
 
   var pro = req.user


 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('imports/invoices', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile(`./public/uploads/` + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
    
       
        
     
         
      
      
     
          // let studentName = record.studentName
           let studentId = record.studentId
           let invoiceNumber = record.invoiceNumber
           let date = record.date
         //  let datePaid = record.datePaid
           let status = record.status
           let amountPaid = record.amountPaid
           let invoiceTotal = record.invoiceTotal
           let studentBalance = record.studentBalance
           let term = record.term
          /* let id2 = record.id2
           let email = record.email
           let address = record.address
           let mobile = record.mobile
           let class1 = record.class1
           let name = record.name;*/
           let type = "Invoice"

          let dateX = new Date(Date.UTC(0, 0, date - 1));
           console.log(dateX,'date1')
           let m = moment(dateX)
          
           console.log(m,'date')
           let dateValue = m.valueOf()
           let mformat = m.format('L')
           let year = m.format('YYYY')
           let month = m.format('MMMM')
           let remainingBalance = invoiceTotal - amountPaid
           let css
console.log(dateValue,year,'dateValue,year')
           if(status == 'paid'){
              css = "success"
           }else{
             css= "danger"
           }




          req.body.studentId = record.studentId


       req.check('studentId','Enter Student ID').notEmpty();

   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importInvoices');

}



     /*else


           {
             InvoiceFile.findOne({'invoiceNumber':invoiceNumber})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Invoice already in the system');

                 res.redirect('/clerk/importInvoices') 
 
                 //res.redirect('/records/import')
               
           }*/
           else{

User.find({uid:studentId},function(err,docs){
let id2 = docs[0]._id
let email = docs[0].email
let address = docs[0].address
let mobile = docs[0].mobile
let class1 = docs[0].class1
let studentName = docs[0].fullname



           var repo = new InvoiceFile();
   
           repo.studentName = studentName;
           repo.studentId = studentId
           repo.studentId2 = id2
           repo.studentEmail = email
           repo.studentAddress = address
           repo.studentMobile = mobile
           repo.class1 = class1
           
           repo.fileId = "null"
           repo.filename = invoiceNumber+'_'+studentName+'.pdf';
           repo.year = year;
           repo.term = term
           repo.date = mformat
           repo.type = "Invoice"
           repo.css = css
           repo.type1 = 'single'
           repo.type2 = 'old'
           repo.amountPaid= amountPaid
           repo.typeAmount = invoiceTotal
           repo.amountDue = remainingBalance
           repo.month = month
           repo.invoiceId = invoiceNumber
           repo.invoiceCode = invoiceNumber
           repo.invoiceNumber = invoiceNumber
           repo.receiptNumber = 0
           repo.status = status
           repo.datePaid = "null"
           repo.dueDate = mformat
           repo.dateValue = dateValue
           repo.studentBalance = studentBalance
           repo.invoiceTotal = invoiceTotal
           repo.typeAmount = invoiceTotal
           
           repo.name = "INV #"+invoiceNumber+" "+"Due"+" "+mformat;
           repo.save().then(poll =>{
             //console.log("Done creating pdf",uid)
         
           })

         /* })
          }*/

           })
         }
                  
                   // .catch(err => console.log(err))
                 
               
                   
                 
                 
        
                 
                 
                 
                   
                   
       
                  
       
                  
            
               })
               
              
             req.flash('success', 'Invoice Success');
          
             res.redirect('/clerk/importInvoices');
     
       }
     }
 
 })
  

 router.get('/deleteInvo',function(req,res){
res.render('acc2/uid')
 })
  
 router.post('/deleteInvo',function(req,res){

  var uid = req.body.uid
  InvoiceFile.find({studentId:uid,type2:"old"},function(err,docs){
for(var i = 0; i< docs.length;i++){
  let id = docs[i]._id
  InvoiceFile.findByIdAndRemove(id,function(err,locs){

  })
}
  })
 })
/////////////////
 
router.get('/importReceipts',isLoggedIn, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   

  

  
 res.render('imports/receipts',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importReceipts',isLoggedIn, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
 
   var pro = req.user


 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('imports/receipts', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile(`./public/uploads/` + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
  
      
     
           let studentName = record.studentName
           let studentId = record.studentId
           let receiptNumber = record.receiptNumber
           let date = record.date
           let datePaid = record.datePaid
           let status = record.status
           let amountPaid = record.amountPaid
          // let totalAmountOwing = record.totalAmountOwing
           let studentBalance = record.studentBalance
           let term = record.term
           let id2 = record.id2
           let email = record.email
           let address = record.address
           let mobile = record.mobile
           let class1 = record.class1
           let name = "PMT";
           let type = "Receipt";
       
           let dateX = new Date(Date.UTC(0, 0, date - 1));
           console.log(dateX,'date1')
           let m = moment(dateX)
          
           console.log(m,'date')
           let dateValue = m.valueOf()
           let mformat = m.format('L')
           let year = m.format('YYYY')
           let month = m.format('MMMM')
          
           let css

           if(status == 'paid'){
              css = "success"
           }else{
             css= "danger"
           }




          req.body.studentId = record.studentId


       req.check('studentId','Enter Student ID').notEmpty();

   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importReceipt');

}


           else{



            User.find({uid:studentId},function(err,docs){
              let id2 = docs[0]._id
              let email = docs[0].email
              let address = docs[0].address
              let mobile = docs[0].mobile
              let class1 = docs[0].class1
              let studentName = docs[0].fullname
          
  var repo = new InvoiceFile();
   
  repo.studentName = studentName;
  repo.studentId = studentId
  repo.studentId2 = id2
  repo.studentEmail = email
  repo.studentAddress = address
  repo.studentMobile = mobile
  repo.class1 = class1


  repo.fileId = "null"
  repo.filename = receiptNumber+'_'+studentName+'.pdf';
  repo.year = year;
  repo.term = term
  repo.date = mformat
  repo.dateValue = dateValue
  repo.type = type
  repo.css = css
  repo.name = "PMT"
  repo.type1 = 'single'
  repo.type2 = 'old'
  repo.amountPaid= amountPaid
  repo.typeAmount = amountPaid
  repo.amountDue =0
  repo.remainingBalance = 0
  repo.month = month
 
  repo.receiptNumber = receiptNumber
  repo.status = status


  repo.studentBalance = studentBalance

           repo.save().then(poll =>{
             //console.log("Done creating pdf",uid)
         
           })
          })
          }

           })
         }
                  
                   // .catch(err => console.log(err))
                 
               
                   
                 
                 
        
                 
                 
                 
                   
                   
       
                  
       
                  
            
               
               
              
             req.flash('success', 'Invoice Success');
          
             res.redirect('/clerk/importReceipts');
     
       
     }
 
 })
  


  
router.get('/updateTerm',function(req,res){
  User.find(function(err,docs){
    for(var i= 0;i<docs.length;i++){
      let id = docs[i]._id
      User.findByIdAndUpdate(id,{$set:{term:2}},function(err,locs){
        
      })
    }
  })
})


router.get('/stockBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('acc2/batchTruck',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })




  router.post('/stockBatch',isLoggedIn,  function(req,res){
  var id =req.user._id
    var code = req.body.code
    var date = req.body.date
    var time  = req.body.time
    var m2 = moment()
    var mformat = m2.format('L')
    var pro = req.user

    
    

    req.check('code','Enter Truck Code').notEmpty();
    req.check('date','Enter Date').notEmpty();
    req.check('time','Enter Time').notEmpty();
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
      //res.render('product/batchTruck',{ errors:req.session.errors,pro:pro})

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/clerk/stockBatch');
    
    }
    
    else 
    
    Truck.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Truck Code already in use');
 
      res.redirect('/clerk/stockBatch');
    }else{

      var truck = new Truck()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{truckCode:code,truckId:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/clerk/addStock2')

    })

    }
    
    })
    
    
    })
  












  

router.get('/addStock2',isLoggedIn,function(req,res){
  var pro = req.user
  var code = req.user.truckCode
  if(code == 'null'){
    res.redirect('/clerk/stockBatch')
  }else
  
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
 res.render('acc2/stock2',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
 //res.render('barcode/stock',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
})




router.post('/addStock2',isLoggedIn, function(req,res){
  var pro = req.user
  var truckId = req.user.truckId
  //var barcodeNumber = req.body.barcodeNumber;
  var name = req.body.name;
  var m = moment()
  var year = m.format('YYYY')
  var dateValue = m.valueOf()
  var date = m.toString()
  var numDate = m.valueOf()
var month = m.format('MMMM')
var code = req.user.truckCode
var mformat = m.format("L")
  var receiver = req.user.fullname
  var qty = req.body.qty
  var availableQty = req.body.availableQty
  /*var unitCases = req.body.unitCases
  var casesReceived = req.body.casesReceived

var quantity  = casesReceived * unitCases*/

  
  req.check('name','Enter Product Name').notEmpty();
  req.check('qty','Enter Qty Rcvd').notEmpty();
 
  

  
  
  var errors = req.validationErrors();
   
  if (errors) {

    req.session.errors = errors;
    req.session.success = false;
   // res.render('product/stock',{ errors:req.session.errors,pro:pro})
   req.flash('danger', req.session.errors[0].msg);
       
        
   res.redirect('/clerk/addStock2');
  
  }
  else

 {

  Product.findOne({'item':name})
  .then(hoc=>{

    if(hoc){
  var book = new StockV();
  book.name = name
  book.mformat = mformat
  book.code =  code
  book.availableQty = availableQty
  book.qty = qty
  book.truckId = truckId

  book.status = 'null'


      
       
        book.save()
          .then(pro =>{

            StockV.find({mformat:mformat,code:code,status:'null'},(err, docs) => {
              let size = docs.length - 1
              console.log(docs[size],'fff')
              res.send(docs[size])
                      })
        })
       
      
      }
    }) 

      }
})





router.post('/addStock3',isLoggedIn, (req, res) => {
  var pro = req.user
  var code = req.user.truckCode
  StockV.find({code:code,status:'null'},(err, docs) => {
 
    res.send(docs)
            })

  }); 








router.get('/verify',isLoggedIn, (req, res) => {
  var pro = req.user
  var m = moment()
var year = m.format('YYYY')
var dateValue = m.valueOf()
var mformat = m.format("L")
var date = m.toString()
  Stock.find({mformat:mformat},(err, docs) => {
      if (!err) {
          res.render("product/listChange", {
             list:docs,pro:pro
            
          });
      }
  });
  }); 





  
  
  router.post('/verify/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var quantity = req.body.code
    var arr = []
    var m = moment()
    var year = m.format('YYYY')
    var dateValue = m.valueOf()
    var mformat = m.format("L")
    var oldQty
    let reg = /\d+\.*\d*/g;
  
    let result = quantity.match(reg)
    let rcvdQuantity = Number(result)
  /* Stock.find({barcodeNumber:barcodeNumber,mformat:mformat},function(err,joc){
        if(arr.length > 0 && arr.find(value => value.barcodeNumber == joc[i].barcodeNumber)){
          console.log('true')
         arr.find(value => value.barcodeNumber == docs[i].barcodeNumber).quantity += docs[i].quantity;
    }else{
arr.push(joc[i])
    }
      })*/ 

      console.log(rcvdQuantity,'rcvd')

    Stock.findById(id,function(err,doc){
      let barcodeNumber = doc.barcodeNumber
     

oldQty = doc.cases
let quantity = doc.unitCases * rcvdQuantity

    Stock.findByIdAndUpdate(id,{$set:{cases:rcvdQuantity, quantity:quantity}},function(err,locs){
    
    })


    Stock.find({barcodeNumber:barcodeNumber,mformat:mformat},function(err,joc){
      for(var i = 0;i<joc.length;i++){

    
      if(arr.length > 0 && arr.find(value => value.barcodeNumber == joc[i].barcodeNumber)){
        console.log('true')
       arr.find(value => value.barcodeNumber ==joc[i].barcodeNumber).cases += joc[i].cases;
  }else{
arr.push(joc[i])
  }

}


  
  Product.find({barcodeNumber:barcodeNumber},function(err,locs){
    console.log(arr[0].unitCases,'arr')
  let proId = locs[0]._id
 
 // let opQuantity = arr[0].cases - oldQty
  //let nqty  =opQuantity + rcvdQuantity
    //let nqty = opQuantity + arr[0].quantity
  //  let openingQty = nqty - arr[0].cases

   
let nqty2 = arr[0].cases * locs[0].unitCases
    Product.findByIdAndUpdate(proId,{$set:{rcvdQuantity:arr[0].cases, cases:arr[0].cases,openingQuantity:0, quantity:nqty2}},function(err,koc){

    })

  })
    })



    /*Dispatch.find({barcodeNumber:barcodeNumber,mformat:mformat},function(err,noc){
if(noc){
for(var i = 0;i<noc.length;i++){
Dispatch.findByIdAndRemove(noc[i]._id,function(err,poc){

})
}
}
})*/
    })
  
  
  })
  
  
  router.post('/stock/update/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var pro = req.user
 
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var dateValue = m.valueOf()
    var mformat = m.format("L")
    var date = m.toString()
    var quan = req.body.code
    StockV.findById(id,function(err,doc){
    
    
     // if(doc.stockUpdate == "no"){
    
    
      let reg = /\d+\.*\d*/g;
    
      let result = quan.match(reg)
      let cases = Number(result)
    
     
   StockV.findByIdAndUpdate(id,{$set:{qty:qty}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })




//saveBatch3

router.get('/saveBatch/:id',isLoggedIn, function(req,res){
var pro = req.user
var receiver = req.user.fullname
var code = req.params.id
var uid = req.user._id

var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
var dateValue = m2.valueOf()
var date = m2.toString()
var numDate = m2.valueOf()
var month = m2.format('MMMM')


//var mformat = m.format("L")



StockV.find({code:code,status:'null'},function(err,locs){

for(var i=0;i<locs.length;i++){

let quantity = locs[i].qty
let date3 = locs[i].mformat
let m = moment(date3)
let year = m.format('YYYY')
let dateValue = m.valueOf()
let date = m.toString()
let numDate = m.valueOf()
let month = m.format('MMMM')
let idN = locs[i]._id
let item = locs[i].name


StockV.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

})


console.log(item,'item')

Product.findOne({'item':item})
.then(hoc=>{

if(hoc){
var book = new Stock();

book.name = hoc.item
book.mformat = date3
book.month = month
book.year = year 
book.stockUpdate = 'no'
book.receiver = receiver;
book.date  = date
book.dateValue = dateValue
book.quantity = quantity

book.price = 0

 
  book.save()
    .then(pro =>{

      Product.find({item:item},function(err,docs){
       let nqty = pro.quantity + docs[0].qty
        let id = docs[0]._id
       Product.findByIdAndUpdate(id,{$set:{qty:nqty}},function(err,nocs){

       })

      })

      

console.log(i,'ccc')
         /*  req.session.message = {
        type:'success',
        message:'Product added'
      }  
      res.render('product/stock',{message:req.session.message,pro:pro});*/
    
  
  })

 /* req.flash('success', 'Stock Received Successfully');
  res.redirect('/rec/addStock')*/
}  /* else{
  req.flash('danger', 'Product Does Not Exist');

  res.redirect('/rec/addStock');
}*/
}) 


}

User.find({role:'clerk'},function(err,ocs){

for(var i = 0; i<ocs.length;i++){



let id = ocs[i]._id
var not = new NoteW();
not.role = 'receiver'
not.subject = 'Stock Received';
not.message = code+" "+'Truck Code'+" "+"received"+" "+'on'+" "+wformat
not.status = 'not viewed';
not.link = 'http://'+req.headers.host+'/viewStockRcvd/'+code;
not.status1 = 'new';
not.user = receiver;
not.type = 'receiving'
not.status2 = 'new'
not.status3 = 'new'
not.status4 = 'null'
not.date = m2
not.dateViewed = 'null'
not.recId = ocs[i]._id
not.recRole = 'admin'
not.senderPhoto = req.user.photo
not.numDate = numDate
not.customer = 'null'
not.shop = 'null'




not.save()
.then(user =>{
User.findByIdAndUpdate(uid,{$set:{truckCode:'null'}},function(err,doc){

})
})

}
})


req.flash('success', 'Stock Received Successfully');
res.redirect('/clerk/stockBatch')
}) 
})










//Autocomplete for customer
router.get('/autocomplete/',isLoggedIn, function(req, res, next) {
var id = req.user._id

var regex= new RegExp(req.query["term"],'i');

var shopFilter =Shop.find({customer:regex},{'customer':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);


shopFilter.exec(function(err,data){


console.log('data',data)

var result=[];

if(!err){
 if(data && data.length && data.length>0){
   data.forEach(shop=>{
   let customer = shop.customer
    User.findByIdAndUpdate(id,{$set:{autoCustomer:customer}},function(err,docs){

    })
 

      
     let obj={
       id:shop._id,
       label: shop.customer

   
 
   
     
      

       
     };
    
     result.push(obj);
  
   
   });

 }

 res.jsonp(result);

}

})

});







router.get('/nList',isLoggedIn,function(req,res){
var id = req.user._id
var m = moment()
console.log(m.valueOf(),'crap')
Note.find({recId:id},function(err,docs){
if(!err){


res.render('notList',{list:docs})

}
})
})

router.get('/notify/:id', isLoggedIn, function(req,res){
var id = req.params.id
var uid = req.user._id
console.log(id,'id')
var arr = []
Note.find({recId:uid,_id:id},function(err,tocs){

let subject = tocs[0].subject
let message = tocs[0].message




res.render('notView',{message:message, subject:subject})
})

})



//autocomplete product
router.get('/autocompleteProductStock/',isLoggedIn, function(req, res, next) {
var id = req.user._id

var regex= new RegExp(req.query["term"],'i');

var productFilter =Product.find({item:regex},{'item':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);


productFilter.exec(function(err,data){


console.log('data',data)

var result=[];

if(!err){
 if(data && data.length && data.length>0){
   data.forEach(pro=>{
 
 

      
     let obj={
       id:pro._id,
       label: pro.item

   
 
   
     
      

       
     };
    
     result.push(obj);
  
   
   });

 }

 res.jsonp(result);

}

})

});


//this route autopopulates info of the customer
router.post('/autoProductStock',isLoggedIn,function(req,res){
  var code = req.body.code


  
 
  Product.find({item:code},function(err,docs){
 if(docs == undefined){
   res.redirect('/')
 }else

    res.send(docs[0])
  })


})


router.get('/delete/:id',isLoggedIn, (req, res) => {
  StockV.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.redirect('/rec/addStock2');
    }
    else { console.log('Error in deleting stock :' + err); }
  });
  });







  router.get('/viewStockRcvd/',isLoggedIn, (req, res) => {
    var pro = req.user
    var arr = []
    var id = req.params.id
    Truck.find({},(err, docs) => {

      for(var i = docs.length - 1; i>=0; i--){

        arr.push(docs[i])
      }
        if (!err) {
            res.render("acc2/truckListA", {
               listX:arr,pro:pro
              
            });
        }
    });
    });

   

   router.get('/viewStockRcvd/:id',isLoggedIn, (req, res) => {
    var pro = req.user
    var id = req.params.id
    console.log(id,'333')
    StockV.find({code:id},(err, docs) => {
        if (!err) {
            res.render("product/productList3", {
               listX:docs,pro:pro
              
            });
        }
    });
    });



    router.get('/viewProducts',isLoggedIn, (req, res) => {
      var pro = req.user
      Product.find({account:"Product Sales"},(err, docs) => {
          if (!err) {
              res.render("acc2/listXX", {
                 list:docs,pro:pro
                
              });
          }
      });
      });


      router.get('/viewServices',isLoggedIn, (req, res) => {
        var pro = req.user
        Product.find({account:"Services Income"},(err, docs) => {
            if (!err) {
                res.render("acc2/listXXX",
                 {
                   list:docs,pro:pro
                  
                });
            }
        });
        });







      router.get('/info', isLoggedIn,function(req,res){
        var pro = req.user
 
        res.render('acc2/addProduct',{pro:pro})
      
      })
      
      
      
      router.post('/info',isLoggedIn, function(req,res){
        var pro = req.user
        var name = req.body.name
        var code = req.body.code
        var account = req.body.account
        var cost = req.body.cost
        var price = req.body.price
        var type = req.body.type
        
        
              req.check('name','Enter Product Name').notEmpty();
                  
                     req.check('code','Enter Code').notEmpty();
                     req.check('account','Enter Account').notEmpty();
                 
                     req.check('cost', 'Enter Cost').notEmpty();
                     req.check('price', 'Enter Price').notEmpty();
                     req.check('type', 'Enter Type').notEmpty();
                  
                     var errors = req.validationErrors();
        
              
                   
                 if (errors) {
                  
                           req.session.errors = errors;
                           req.session.success = false;
                           req.flash('danger', req.session.errors[0].msg);
       
        
                         res.redirect('/clerk/info');
                       }
      
                       else
                       {
                        Product.findOne({'item':name})
                        .then(bk =>{
                            if(bk){ 
                          // req.session.errors = errors
                            //req.success.user = false;
                        
                            req.flash('danger', "Product/Service Exists");
       
        
                            res.redirect('/clerk/info');
                            
                      }
                      
                                    else  {   
                   
      
              
                    
                
             
              
                      var book = new Product();
                        book.item =name
                        book.type = type
                        book.code = code
                        book.account = account
                        book.cogs = 'null'
                        book.assetAccount = assetAccount
                        book.accumulatedDepreciation = 0
                        book.purchasedDescription = "No"
                       
          
                        book.qty = 0
                        book.cost = cost
                        book.price = price
                        book.grossPrice = 0
                        book.amountsIncludeVat = "No"
                        book.openingQuantity = 0
                        book.rcvdQuantity = 0
                        book.purchasedForResale = "No"
                        book.status = "Active"
                        book.quantity = 0
                            
                             
                              book.save()
                                .then(title =>{
                                
                                  req.flash('success', "Product/Service Added Successfully");
       
        
                                  res.redirect('/clerk/info');
                              
                              })
                               
                              
                            }
                              })
                            }
                              
                               });













//folders


router.get('/teachersFiles',isLoggedIn,function(req,res){
  var pro = req.user

  User.find({role:"teacher"},function(err,docs){
    res.render('adminClerk/folders2',{listX:docs,pro:pro})

  })

})
router.get('/classFiles',isLoggedIn,function(req,res){
  var pro = req.user

  Class1.find({},function(err,docs){
    res.render('adminClerk/folders',{listX:docs,pro:pro})

  })

})

router.get('/subjectFile/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []

  User.findById(id,function(err,doc){
    if(doc){

   
    let uid = doc.uid
    let teacherName = doc.fullname
    TeacherSub.find({teacherId:uid},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileSubjects2',{listX:arr,pro:pro,id:id,teacherName:teacherName})

    })
  }
  })
})




router.get('/teacherClass/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []

  TeacherSub.findById(id,function(err,doc){
    if(doc){

   
    let subjectCode = doc.subjectCode
    let uid = doc.teacherId
    let subject = doc.subjectName
    let teacherName = doc.teacherName
    User.find({uid:uid},function(err,ocs){

    
    let id2 = ocs[0]._id
    StudentSub.find({subjectCode:subjectCode},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.class1 == docs[i].class1)){
                console.log('true')
               arr.find(value => value.class1 == docs[i].class1).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject,teacherName:teacherName})

    })
  })
}
  })
})


router.get('/teacherClassAssignment/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var adminId = req.user._id

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
  User.findByIdAndUpdate(adminId,{$set:{reportId:id}},function(err,pvocs){

  })


    res.render('adminClerk/fileAssgt22',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })
})
  })
}
})
})




router.get('/teacherReportsYear/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var year = req.params.id
  var id = req.user.reportId
  var adminId = req.user._id
  console.log(year,id,"illest")
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
User.findByIdAndUpdate(adminId,{$set:{year:year}},function(err,klops){

})



    res.render('adminClerk/fileAssgtReports',{id:id,year:year,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
 
  })
})
  })
}
})
})


router.get('/teacherReports/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){



//fileAssgtReportsYear
    res.render('adminClerk/fileAssgtReportsYear',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
 
  })
})
  })
}
})
})



router.get('/monthlyReports/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var year = req.user.year

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


  Report2.find({subjectCode:subjectCode,year:year,type:"Monthly Assessment"},function(er,hocs){
    res.render('adminClerk/filesMonthly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })

})
})
  })
}
})
})




router.get('/termlyReports/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var year = req.user.year
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


  Report2.find({subjectCode:subjectCode,year:year,type:"Final Exam"},function(er,hocs){
    res.render('adminClerk/filesTermly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })

})
})
  })
}
})
})


router.get('/downloadMonthlyReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  Report2.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
 
    res.download( './reports2/'+year+'/'+month+'/'+name, name)
  })  

})


router.get('/downloadTermlyReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  Report2.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
 
    res.download( './reportsExam2/'+year+'/'+month+'/'+name, name)
  })  

})


router.get('/teacherMarks/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){



    res.render('adminClerk/fileAssgt2',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })
})
  })
}
})
})

router.get('/teacherClassTest/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user
  const arr=[]

  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName
    TeacherSub.find({subjectCode:subjectCode},function(err,poc){
      let teacherId =poc[0].teacherId
      let teacherSubId = poc[0]._id
      let teacherName = poc[0].teacherName
      User.find({uid:teacherId},function(err,zocs){
        let userId = zocs[0]._id
        let class1 = zocs[0].class1
     
 
  
 
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,locs){
      for(var i = locs.length - 1; i>=0; i--){
      
        arr.push(locs[i])
      }
   
      res.render('adminClerk/assgtX1',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,id:id,
        subjectName:subjectName,teacherName:teacherName,class1:class1})
    })
  })

  
})
}
})
  
  })
  


  
router.post('/teacherClassTest/:id',isLoggedIn,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
var teacherId = req.user.uid
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

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName
    TeacherSub.find({subjectCode:subjectCode},function(err,poc){
      let teacherId =poc[0].teacherId
      let teacherSubId = poc[0]._id
      let teacherName = poc[0].teacherName
      User.find({uid:teacherId},function(err,zocs){
        let userId = zocs[0]._id
        let class1 = zocs[0].class1

  Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err, docs){
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
        res.render("adminClerk/assgtX1", {
          listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,id:id,
        subjectName:subjectName,teacherName:teacherName,class1:class1
          
        });
    
});
    
  })
    })
  }
  })
})

  router.get('/teacherClassAssignment2/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var arr =[]
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var pro = req.user

    StudentSub.findById(id,function(err,doc){
         if(doc){

        
      let studentSubId = doc._id
      let subjectCode = doc.subjectCode
      let subject = doc.subjectName
      TeacherSub.find({subjectCode:subjectCode},function(err,poc){
        let teacherId =poc[0].teacherId
        let teacherSubId = poc[0]._id
        User.find({uid:teacherId},function(err,zocs){
          let userId = zocs[0]._id
          let class1 = zocs[0].class1
          let teacherName = zocs[0].fullname
      
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,locs){
        for(var i = locs.length - 1; i>=0; i--){
      
          arr.push(locs[i])
        }
        res.render('adminClerk/assgtX2',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
          class1:class1,teacherName:teacherName,subject:subject,id:id
        })
      })
    
    })
    
  })
}
  })
    
    })

 
    router.post('/teacherClassAssignment2/:id',isLoggedIn,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term

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
          TeacherSub.find({subjectCode:subjectCode},function(err,poc){
            let teacherId =poc[0].teacherId
            let teacherSubId = poc[0]._id
            User.find({uid:teacherId},function(err,zocs){
              let userId = zocs[0]._id
              let class1 = zocs[0].class1
              let teacherName = zocs[0].fullname
          
          Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,docs){
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
            res.render("adminClerk/assgtX2", {
              listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
              class1:class1,teacherName:teacherName,subject:subject,id:id
              
            });
        
    });
        
      })
        })
      }
      })
    })
    

    router.get('/teacherFinalExam/:id',isLoggedIn,function(req,res){
      var id = req.params.id
      var term = req.user.term
      var m = moment()
      var month = m.format('MMMM')
      var year = m.format('YYYY')
      var pro = req.user
      
      StudentSub.findById(id,function(err,doc){
        if(doc){

      
        let class1 = doc.class1
        let studentSubId = doc._id
        let subjectCode = doc.subjectCode
        let subject = doc.subjectName
        TeacherSub.find({subjectCode:subjectCode},function(err,poc){
          let teacherId =poc[0].teacherId
          let teacherSubId = poc[0]._id
          let teacherName = poc[0].teacherName
          User.find({uid:teacherId},function(err,zocs){
            let userId = zocs[0]._id
            let class1 = zocs[0].class1

      
       
        Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,locs){
          let arr=[]
          for(var i = locs.length - 1; i>=0; i--){
      
            arr.push(locs[i])
          }
          res.render('adminClerk/assgtX3',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
          teacherName:teacherName,class1:class1,subject:subject,id:id})
        
      })
      })
      
    })
      }
    })
      
      })


      router.post('/teacherFinalExam/:id',isLoggedIn,function(req,res){
        var pro =req.user
      var id = req.params.id
        var date = req.body.date
        var arr = []
        var term = req.user.term

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
            TeacherSub.find({subjectCode:subjectCode},function(err,poc){
              let teacherId =poc[0].teacherId
              let teacherSubId = poc[0]._id
              User.find({uid:teacherId,companyId:companyId},function(err,zocs){
                let userId = zocs[0]._id
                let class1 = zocs[0].class1
                let teacherName = zocs[0].fullname
            
            Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,docs){
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
              res.render("adminClerk/assgtX3", {
                listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
                teacherName:teacherName,class1:class1,subject:subject,id:id
                
              });
          
      });
          
        })
          })
        }
        })
      })
      

      router.get('/teacherViewTest/:id',isLoggedIn,function(req,res){
        var id = req.params.id
        var pro = req.user
        var m = moment()
        var month = m.format('MMMM')
        var year = m.format('YYYY')
      Test.findById(id,function(err,loc){
        if(loc){

      
        let teacherId = loc.teacherId
        let teacherName = loc.teacherName
        let subjectCode = loc.subjectCode
      let subject = loc.subject
   
     User.find({uid:teacherId},function(err,cok){
       let user = cok[0]._id
        
       User.findById(user,function(err,doc){
    let uid = doc.uid
     let userId = doc._id
     let class1 = doc.class1
     TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
       let teacherSubId = locs[0]._id
   
       StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
         let studentSubId = tocs[0]._id
       TestX.find({quizId:id},function(err,docs){
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
     
      res.render('adminClerk/assgtList',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
      class1:class1})
        })
      })
    })
    })
    })
  }
      })
    })


    router.post('/teacherViewTest/:id',isLoggedIn,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term

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
    
      Test.findById(id,function(err,loc){
        if(loc){

      
        let teacherId = loc.teacherId
        let teacherName = loc.teacherName
        let subjectCode = loc.subjectCode
      let subject = loc.subject
    
        console.log(teacherId,'teacherId')
     User.find({uid:teacherId},function(err,cok){
       let user = cok[0]._id
        
       User.findById(user,function(err,doc){
    let uid = doc.uid
     let userId = doc._id
     let class1 = doc.class1
     TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
       let teacherSubId = locs[0]._id
   
       StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
         let studentSubId = tocs[0]._id
         TestX.find({quizId:id},function(err,docs){
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
            res.render("adminClerk/assgtList", {
              listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
              class1:class1
              
            });
        
    });
        
      })
    })
  })
        })
      }
      })
    })
    

    router.get('/teacherViewAssignments/:id',isLoggedIn,function(req,res){
      var id = req.params.id
      var pro = req.user

    Test.findById(id,function(err,loc){
      if(loc){

   
      let teacherId = loc.teacherId
      let teacherName = loc.teacherName
      let subjectCode = loc.subjectCode
    let subject = loc.subject
  
      console.log(teacherId,'teacherId')
   User.find({uid:teacherId},function(err,cok){
     let user = cok[0]._id
      
     User.findById(user,function(err,doc){
  let uid = doc.uid
   let userId = doc._id
   let class1 = doc.class1
   TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
     let teacherSubId = locs[0]._id
 
     StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
       let studentSubId = tocs[0]._id
     TestX.find({quizId:id},function(err,docs){
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }
   
    res.render('adminClerk/assgtList2',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
    class1:class1})
      })
    })
  })
  })
  })
}
    })
  })


  
  router.post('/teacherViewAssignments/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term

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
  
    Test.findById(id,function(err,loc){
      if(loc){

    
      let teacherId = loc.teacherId
      let teacherName = loc.teacherName
      let subjectCode = loc.subjectCode
    let subject = loc.subject
  
      console.log(teacherId,'teacherId')
   User.find({uid:teacherId},function(err,cok){
     let user = cok[0]._id
      
     User.findById(user,function(err,doc){
  let uid = doc.uid
   let userId = doc._id
   let class1 = doc.class1
   TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
     let teacherSubId = locs[0]._id
 
     StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
       let studentSubId = tocs[0]._id
       TestX.find({quizId:id},function(err,docs){
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
          res.render("adminClerk/assgtList2", {
            listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
            class1:class1
            
          });
      
  });
      
    })
  })
})
      })
    }
    })
  })
  


  
  router.get('/teacherViewExam/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
  Test.findById(id,function(err,loc){
    if(loc){

   
    let teacherId = loc.teacherId
    let teacherName = loc.teacherName
    let subjectCode = loc.subjectCode
  let subject = loc.subject

    console.log(teacherId,'teacherId')
 User.find({uid:teacherId},function(err,cok){
   let user = cok[0]._id
    
   User.findById(user,function(err,doc){
let uid = doc.uid
 let userId = doc._id
 let class1 = doc.class1
 TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
   let teacherSubId = locs[0]._id

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){

    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
  res.render('adminClerk/assgtList3',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
  class1:class1})
    })
  })
})
})
})
}
  })
})



router.post('/teacherViewExam/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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

  Test.findById(id,function(err,loc){
    if(loc){

  
    let teacherId = loc.teacherId
    let teacherName = loc.teacherName
    let subjectCode = loc.subjectCode
  let subject = loc.subject

    console.log(teacherId,'teacherId')
 User.find({uid:teacherId},function(err,cok){
   let user = cok[0]._id
    
   User.findById(user,function(err,doc){
let uid = doc.uid
 let userId = doc._id
 let class1 = doc.class1
 TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
   let teacherSubId = locs[0]._id

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
     TestX.find({quizId:id},function(err,docs){
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
        res.render("adminClerk/assgtList3", {
          listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
          class1:class1
          
        });
    
});
    
  })
})
})
    })
  }
  })
})



router.get('/classSubjects/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  Class1.findById(id,function(err,doc){
    if(doc){

   
    let name = doc.class1
    StudentSub.find({class1:name},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileSubjects',{listX:arr,pro:pro,id:id,class1:name})

    })
  }
  })
})
//staff List

router.get('/classAssignment/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var userId = req.user._id
  var id = req.params.id

StudentSub.findById(id,function(err,doc){
  if(doc){

 
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  Class1.find({class1:class1},function(err,nocs){
    let classId = nocs[0]._id
 

    res.render('adminClerk/fileAssgt',{studentSubId:id,pro:pro,classId:classId,class1:class1,subject:subject})
  })
}
  })
})


router.get('/classTest/:id',isLoggedIn,adminX,function(req,res){
var id = req.params.id
var term = req.user.term
var m = moment()
var month = m.format('MMMM')
var year = m.format('YYYY')

var pro = req.user
StudentSub.findById(id,function(err,doc){
  if(doc){

  
  let class1 = doc.class1
  let id1 = doc._id
  let subject = doc.subjectName
  let subjectCode = doc.subjectCode
  Class1.find({class1:class1},function(err,kocs){

  let id2 = kocs[0]._id
  Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,locs){
    let arr=[]
    for(var i = locs.length - 1; i>=0; i--){

      arr.push(locs[i])
    }
    res.render('adminClerk/assgt1',{listX:arr,pro:pro,studentSubId:id,id1:id1,classId:id2,class1:class1,subject:subject,id:id})
  })
})
}
})



})



  
router.post('/classTest/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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
  
    
    let class1 = doc.class1
    let id1 = doc._id
    let subject = doc.subjectName
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,docs){
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
        res.render("adminClerk/assgt1", {
          listX:arr,pro:pro,studentSubId:id,id1:id1,classId:id2,class1:class1,subject:subject
          
        });
      })
});
    

  }
  })
})


router.get('/classAssgt/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user
 
  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let id1 = doc._id
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/assgt2',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
    })
  })
}
  })
   
  
  })

  router.post('/classTest/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term

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
    
      
      let class1 = doc.class1
      let id1 = doc._id
      let subject = doc.subjectName
      let subjectCode = doc.subjectCode
      Class1.find({class1:class1},function(err,kocs){
    
      let id2 = kocs[0]._id
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,docs){
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
          res.render("adminClerk/assgt2", {
            listX:arr,pro:pro,id1:id1,id2:id2,id:id
            
          });
        })
  });
      
  
    }
    })
  })
  



  
router.get('/finalExam/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user

  StudentSub.findById(id,function(err,doc){
    if(doc){

  
    let class1 = doc.class1
    let id1 = doc._id
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/assgt3',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
    })
  })

}
  })
  
  
  
  })



  router.post('/finalExam/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
  
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
    
      
      let class1 = doc.class1
      let id1 = doc._id
      let subject = doc.subjectName
      let subjectCode = doc.subjectCode
      Class1.find({class1:class1},function(err,kocs){
    
      let id2 = kocs[0]._id
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,docs){
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
      res.render('adminClerk/assgt3',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
        })
  });
      
  
    }
    })
  })
  





  router.get('/viewClassTest/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user
    
  Test.findById(id,function(err,loc){
        if(loc){

       
    let subjectCode = loc.subjectCode
  let subject = loc.subject
  let class1 = loc.class1
console.log(subjectCode,subject,'yaita')
  
 Class1.find({class1:class1},function(err,cok){
   let classId = cok[0]._id
    
 
 

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
 
  res.render('adminClerk/assgtListC1',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
  class1:class1})
    })
  })
})
}  
})

})





router.post('/viewClassTest/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
  
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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
    res.render('adminClerk/assgtListC1',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})


  

  router.get('/viewClassAssignments/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user

  Test.findById(id,function(err,loc){
   if(loc){

 
    let subjectCode = loc.subjectCode
  let subject = loc.subject
  let class1 = loc.class1

  
 Class1.find({class1:class1},function(err,cok){
   let classId = cok[0]._id
    
 
 

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
 
  res.render('adminClerk/assgtListC2',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
  class1:class1})
    })
  })
})
}
})

})


router.post('/viewClassAssignments/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
  
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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
 
    res.render('adminClerk/assgtListC2',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})


  




router.get('/viewExam/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var pro = req.user

Test.findById(id,function(err,loc){
 if(loc){


  let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1


Class1.find({class1:class1},function(err,cok){
 let classId = cok[0]._id
  



 StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
   let studentSubId = tocs[0]._id
 TestX.find({quizId:id},function(err,docs){
  let arr=[]
          for(var i = docs.length - 1; i>=0; i--){
      
            arr.push(docs[i])
          }

res.render('adminClerk/assgtListC3',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
class1:class1})
  })
})
})
}
})

})





router.post('/viewExam/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
 
    res.render('adminClerk/assgtListC3',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})



////learning material


router.get('/teacherLearningMaterial/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user


  StudentSub.findById(id,function(err,vocs){
    if(vocs){
    let class1 = vocs.class1
    let subjectCode = vocs.subjectCode
    let id2 = vocs._id    

  TeacherSub.find({subjectCode:subjectCode},function(err,doc){
       if(doc){

      
    let  teacherSubId = doc[0]._id
    let teacherName = doc[0].teacherName
    let subject = doc[0].subjectName
    
    
   

    Learn.find({subjectCode:subjectCode,term:term,year:year,class1:class1},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/files2',{listX:arr,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,teacherName:teacherName
      })
   
    
})

      }

  
})
    }
})
  
  })



  

router.get('/teacherOnlineAssignmentFiles/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user


  StudentSub.findById(id,function(err,vocs){
    if(vocs){
    let class1 = vocs.class1
    let subjectCode = vocs.subjectCode
    let id2 = vocs._id    

  TeacherSub.find({subjectCode:subjectCode},function(err,doc){
       if(doc){

      
    let  teacherSubId = doc[0]._id
    let teacherName = doc[0].teacherName
    let subject = doc[0].subjectName
    
    
   

    Test.find({subjectCode:subjectCode,term:term,year:year,type2:'online assignment attached',class1:class1},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      
      res.render('adminClerk/files3',{listX:arr,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,teacherName:teacherName
      })
   
    
})

      }

  
})
    }
})
  
  })



/////////xxxxxxxxxxxxxxxx






router.get('/teachersFiles',isLoggedIn,adminX,function(req,res){
  var pro = req.user

  User.find({role:"teacher"},function(err,docs){
    res.render('adminClerk/folders2',{listX:docs,pro:pro})

  })

})
router.get('/classFiles',isLoggedIn,function(req,res){
  var pro = req.user

  Class1.find({},function(err,docs){
    res.render('adminClerk/folders',{listX:docs,pro:pro})

  })

})

router.get('/subjectFile/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []

  User.findById(id,function(err,doc){
    if(doc){

   
    let uid = doc.uid
    let teacherName = doc.fullname
    TeacherSub.find({teacherId:uid},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileSubjects2',{listX:arr,pro:pro,id:id,teacherName:teacherName})

    })
  }
  })
})




router.get('/teacherClass/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []

  TeacherSub.findById(id,function(err,doc){
    if(doc){

   
    let subjectCode = doc.subjectCode
    let uid = doc.teacherId
    let subject = doc.subjectName
    let teacherName = doc.teacherName
    User.find({uid:uid},function(err,ocs){

    
    let id2 = ocs[0]._id
    StudentSub.find({subjectCode:subjectCode},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.class1 == docs[i].class1)){
                console.log('true')
               arr.find(value => value.class1 == docs[i].class1).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject,teacherName:teacherName})

    })
  })
}
  })
})


router.get('/teacherClassAssignment/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var adminId = req.user._id

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
  User.findByIdAndUpdate(adminId,{$set:{reportId:id}},function(err,pvocs){

  })


    res.render('adminClerk/fileAssgt22',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })
})
  })
}
})
})




router.get('/teacherReportsYear/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var year = req.params.id
  var id = req.user.reportId
  var adminId = req.user._id
  console.log(year,id,"illest")
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
User.findByIdAndUpdate(adminId,{$set:{year:year}},function(err,klops){

})



    res.render('adminClerk/fileAssgtReports',{id:id,year:year,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
 
  })
})
  })
}
})
})


router.get('/teacherReports/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){



//fileAssgtReportsYear
    res.render('adminClerk/fileAssgtReportsYear',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
 
  })
})
  })
}
})
})



router.get('/monthlyReports/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var year = req.user.year

StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


  Report2.find({subjectCode:subjectCode,year:year,type:"Monthly Assessment"},function(er,hocs){
    res.render('adminClerk/filesMonthly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })

})
})
  })
}
})
})




router.get('/termlyReports/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var year = req.user.year
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


  Report2.find({subjectCode:subjectCode,year:year,type:"Final Exam"},function(er,hocs){
    res.render('adminClerk/filesTermly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })

})
})
  })
}
})
})


router.get('/downloadMonthlyReport/:id',isLoggedIn,adminX,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  Report2.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
 
    res.download( './reports2/'+year+'/'+month+'/'+name, name)
  })  

})


router.get('/downloadTermlyReport/:id',isLoggedIn,adminX,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  Report2.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
 
    res.download( './reportsExam2/'+year+'/'+month+'/'+name, name)
  })  

})


router.get('/teacherMarks/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  
StudentSub.findById(id,function(err,doc){
  if(doc){
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
  User.find({uid:teacherId},function(err,nocs){
    let id2 = nocs[0]._id
 User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){



    res.render('adminClerk/fileAssgt2',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
  })
})
  })
}
})
})

router.get('/teacherClassTest/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user
  const arr=[]

  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName
    TeacherSub.find({subjectCode:subjectCode},function(err,poc){
      let teacherId =poc[0].teacherId
      let teacherSubId = poc[0]._id
      let teacherName = poc[0].teacherName
      User.find({uid:teacherId},function(err,zocs){
        let userId = zocs[0]._id
        let class1 = zocs[0].class1
     
 
  
 
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,locs){
      for(var i = locs.length - 1; i>=0; i--){
      
        arr.push(locs[i])
      }
   
      res.render('adminClerk/assgtX1',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,id:id,
        subjectName:subjectName,teacherName:teacherName,class1:class1})
    })
  })

  
})
}
})
  
  })
  


  
router.post('/teacherClassTest/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
var teacherId = req.user.uid
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

   
    let class1 = doc.class1
    let studentSubId = doc._id
    let subjectCode = doc.subjectCode
    let subjectName = doc.subjectName
    TeacherSub.find({subjectCode:subjectCode},function(err,poc){
      let teacherId =poc[0].teacherId
      let teacherSubId = poc[0]._id
      let teacherName = poc[0].teacherName
      User.find({uid:teacherId},function(err,zocs){
        let userId = zocs[0]._id
        let class1 = zocs[0].class1

  Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err, docs){
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
        res.render("adminClerk/assgtX1", {
          listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,id:id,
        subjectName:subjectName,teacherName:teacherName,class1:class1
          
        });
    
});
    
  })
    })
  }
  })
})

  router.get('/teacherClassAssignment2/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var arr =[]
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var pro = req.user

    StudentSub.findById(id,function(err,doc){
         if(doc){

        
      let studentSubId = doc._id
      let subjectCode = doc.subjectCode
      let subject = doc.subjectName
      TeacherSub.find({subjectCode:subjectCode},function(err,poc){
        let teacherId =poc[0].teacherId
        let teacherSubId = poc[0]._id
        User.find({uid:teacherId},function(err,zocs){
          let userId = zocs[0]._id
          let class1 = zocs[0].class1
          let teacherName = zocs[0].fullname
      
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,locs){
        for(var i = locs.length - 1; i>=0; i--){
      
          arr.push(locs[i])
        }
        res.render('adminClerk/assgtX2',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
          class1:class1,teacherName:teacherName,subject:subject,id:id
        })
      })
    
    })
    
  })
}
  })
    
    })

 
    router.post('/teacherClassAssignment2/:id',isLoggedIn,adminX,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term

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
          TeacherSub.find({subjectCode:subjectCode},function(err,poc){
            let teacherId =poc[0].teacherId
            let teacherSubId = poc[0]._id
            User.find({uid:teacherId},function(err,zocs){
              let userId = zocs[0]._id
              let class1 = zocs[0].class1
              let teacherName = zocs[0].fullname
          
          Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,docs){
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
            res.render("adminClerk/assgtX2", {
              listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
              class1:class1,teacherName:teacherName,subject:subject,id:id
              
            });
        
    });
        
      })
        })
      }
      })
    })
    

    router.get('/teacherFinalExam/:id',isLoggedIn,adminX,function(req,res){
      var id = req.params.id
      var term = req.user.term
      var m = moment()
      var month = m.format('MMMM')
      var year = m.format('YYYY')
      var pro = req.user
      
      StudentSub.findById(id,function(err,doc){
        if(doc){

      
        let class1 = doc.class1
        let studentSubId = doc._id
        let subjectCode = doc.subjectCode
        let subject = doc.subjectName
        TeacherSub.find({subjectCode:subjectCode},function(err,poc){
          let teacherId =poc[0].teacherId
          let teacherSubId = poc[0]._id
          let teacherName = poc[0].teacherName
          User.find({uid:teacherId},function(err,zocs){
            let userId = zocs[0]._id
            let class1 = zocs[0].class1

      
       
        Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,locs){
          let arr=[]
          for(var i = locs.length - 1; i>=0; i--){
      
            arr.push(locs[i])
          }
          res.render('adminClerk/assgtX3',{listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
          teacherName:teacherName,class1:class1,subject:subject,id:id})
        
      })
      })
      
    })
      }
    })
      
      })


      router.post('/teacherFinalExam/:id',isLoggedIn,adminX,function(req,res){
        var pro =req.user
      var id = req.params.id
        var date = req.body.date
        var arr = []
        var term = req.user.term

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
            TeacherSub.find({subjectCode:subjectCode},function(err,poc){
              let teacherId =poc[0].teacherId
              let teacherSubId = poc[0]._id
              User.find({uid:teacherId,companyId:companyId},function(err,zocs){
                let userId = zocs[0]._id
                let class1 = zocs[0].class1
                let teacherName = zocs[0].fullname
            
            Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,docs){
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
              res.render("adminClerk/assgtX3", {
                listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
                teacherName:teacherName,class1:class1,subject:subject,id:id
                
              });
          
      });
          
        })
          })
        }
        })
      })
      

      router.get('/teacherViewTest/:id',isLoggedIn,adminX,function(req,res){
        var id = req.params.id
        var pro = req.user
        var m = moment()
        var month = m.format('MMMM')
        var year = m.format('YYYY')
      Test.findById(id,function(err,loc){
        if(loc){

      
        let teacherId = loc.teacherId
        let teacherName = loc.teacherName
        let subjectCode = loc.subjectCode
      let subject = loc.subject
   
     User.find({uid:teacherId},function(err,cok){
       let user = cok[0]._id
        
       User.findById(user,function(err,doc){
    let uid = doc.uid
     let userId = doc._id
     let class1 = doc.class1
     TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
       let teacherSubId = locs[0]._id
   
       StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
         let studentSubId = tocs[0]._id
       TestX.find({quizId:id},function(err,docs){
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
     
      res.render('adminClerk/assgtList',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
      class1:class1})
        })
      })
    })
    })
    })
  }
      })
    })


    router.post('/teacherViewTest/:id',isLoggedIn,adminX,function(req,res){
      var pro =req.user
    var id = req.params.id
      var date = req.body.date
      var arr = []
      var term = req.user.term

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
    
      Test.findById(id,function(err,loc){
        if(loc){

      
        let teacherId = loc.teacherId
        let teacherName = loc.teacherName
        let subjectCode = loc.subjectCode
      let subject = loc.subject
    
        console.log(teacherId,'teacherId')
     User.find({uid:teacherId},function(err,cok){
       let user = cok[0]._id
        
       User.findById(user,function(err,doc){
    let uid = doc.uid
     let userId = doc._id
     let class1 = doc.class1
     TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
       let teacherSubId = locs[0]._id
   
       StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
         let studentSubId = tocs[0]._id
         TestX.find({quizId:id},function(err,docs){
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
            res.render("adminClerk/assgtList", {
              listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
              class1:class1
              
            });
        
    });
        
      })
    })
  })
        })
      }
      })
    })
    

    router.get('/teacherViewAssignments/:id',isLoggedIn,adminX,function(req,res){
      var id = req.params.id
      var pro = req.user

    Test.findById(id,function(err,loc){
      if(loc){

   
      let teacherId = loc.teacherId
      let teacherName = loc.teacherName
      let subjectCode = loc.subjectCode
    let subject = loc.subject
  
      console.log(teacherId,'teacherId')
   User.find({uid:teacherId},function(err,cok){
     let user = cok[0]._id
      
     User.findById(user,function(err,doc){
  let uid = doc.uid
   let userId = doc._id
   let class1 = doc.class1
   TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
     let teacherSubId = locs[0]._id
 
     StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
       let studentSubId = tocs[0]._id
     TestX.find({quizId:id},function(err,docs){
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }
   
    res.render('adminClerk/assgtList2',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
    class1:class1})
      })
    })
  })
  })
  })
}
    })
  })


  
  router.post('/teacherViewAssignments/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term

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
  
    Test.findById(id,function(err,loc){
      if(loc){

    
      let teacherId = loc.teacherId
      let teacherName = loc.teacherName
      let subjectCode = loc.subjectCode
    let subject = loc.subject
  
      console.log(teacherId,'teacherId')
   User.find({uid:teacherId},function(err,cok){
     let user = cok[0]._id
      
     User.findById(user,function(err,doc){
  let uid = doc.uid
   let userId = doc._id
   let class1 = doc.class1
   TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
     let teacherSubId = locs[0]._id
 
     StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
       let studentSubId = tocs[0]._id
       TestX.find({quizId:id},function(err,docs){
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
          res.render("adminClerk/assgtList2", {
            listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
            class1:class1
            
          });
      
  });
      
    })
  })
})
      })
    }
    })
  })
  


  
  router.get('/teacherViewExam/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
  Test.findById(id,function(err,loc){
    if(loc){

   
    let teacherId = loc.teacherId
    let teacherName = loc.teacherName
    let subjectCode = loc.subjectCode
  let subject = loc.subject

    console.log(teacherId,'teacherId')
 User.find({uid:teacherId},function(err,cok){
   let user = cok[0]._id
    
   User.findById(user,function(err,doc){
let uid = doc.uid
 let userId = doc._id
 let class1 = doc.class1
 TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
   let teacherSubId = locs[0]._id

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){

    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
  res.render('adminClerk/assgtList3',{listX:arr,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
  class1:class1})
    })
  })
})
})
})
}
  })
})



router.post('/teacherViewExam/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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

  Test.findById(id,function(err,loc){
    if(loc){

  
    let teacherId = loc.teacherId
    let teacherName = loc.teacherName
    let subjectCode = loc.subjectCode
  let subject = loc.subject

    console.log(teacherId,'teacherId')
 User.find({uid:teacherId},function(err,cok){
   let user = cok[0]._id
    
   User.findById(user,function(err,doc){
let uid = doc.uid
 let userId = doc._id
 let class1 = doc.class1
 TeacherSub.find({teacherId:uid,subjectCode:subjectCode},function(err,locs){
   let teacherSubId = locs[0]._id

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
     TestX.find({quizId:id},function(err,docs){
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
        res.render("adminClerk/assgtList3", {
          listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
          class1:class1
          
        });
    
});
    
  })
})
})
    })
  }
  })
})



router.get('/classSubjects/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var id = req.params.id
  var arr = []
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  Class1.findById(id,function(err,doc){
    if(doc){

   
    let name = doc.class1
    StudentSub.find({class1:name},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('adminClerk/fileSubjects',{listX:arr,pro:pro,id:id,class1:name})

    })
  }
  })
})
//staff List

router.get('/classAssignment/:id',isLoggedIn,adminX,function(req,res){
  var pro = req.user
  var userId = req.user._id
  var id = req.params.id

StudentSub.findById(id,function(err,doc){
  if(doc){

 
  let class1 = doc.class1
  let subjectCode = doc.subjectCode
  let subject = doc.subjectName

  Class1.find({class1:class1},function(err,nocs){
    let classId = nocs[0]._id
 

    res.render('adminClerk/fileAssgt',{studentSubId:id,pro:pro,classId:classId,class1:class1,subject:subject})
  })
}
  })
})


router.get('/classTest/:id',isLoggedIn,adminX,function(req,res){
var id = req.params.id
var term = req.user.term
var m = moment()
var month = m.format('MMMM')
var year = m.format('YYYY')

var pro = req.user
StudentSub.findById(id,function(err,doc){
  if(doc){

  
  let class1 = doc.class1
  let id1 = doc._id
  let subject = doc.subjectName
  let subjectCode = doc.subjectCode
  Class1.find({class1:class1},function(err,kocs){

  let id2 = kocs[0]._id
  Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,locs){
    let arr=[]
    for(var i = locs.length - 1; i>=0; i--){

      arr.push(locs[i])
    }
    res.render('adminClerk/assgt1',{listX:arr,pro:pro,studentSubId:id,id1:id1,classId:id2,class1:class1,subject:subject,id:id})
  })
})
}
})



})



  
router.post('/classTest/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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
  
    
    let class1 = doc.class1
    let id1 = doc._id
    let subject = doc.subjectName
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Test'},function(err,docs){
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
        res.render("adminClerk/assgt1", {
          listX:arr,pro:pro,studentSubId:id,id1:id1,classId:id2,class1:class1,subject:subject
          
        });
      })
});
    

  }
  })
})



router.get('/classAssgt/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user
 
  StudentSub.findById(id,function(err,doc){
    if(doc){

   
    let class1 = doc.class1
    let id1 = doc._id
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/assgt2',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
    })
  })
}
  })
   
  
  })

  router.post('/classTest/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term

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
    
      
      let class1 = doc.class1
      let id1 = doc._id
      let subject = doc.subjectName
      let subjectCode = doc.subjectCode
      Class1.find({class1:class1},function(err,kocs){
    
      let id2 = kocs[0]._id
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Class Assignment'},function(err,docs){
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
          res.render("adminClerk/assgt2", {
            listX:arr,pro:pro,id1:id1,id2:id2,id:id
            
          });
        })
  });
      
  
    }
    })
  })
  



  
router.get('/finalExam/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user

  StudentSub.findById(id,function(err,doc){
    if(doc){

  
    let class1 = doc.class1
    let id1 = doc._id
    let subjectCode = doc.subjectCode
    Class1.find({class1:class1},function(err,kocs){
  
    let id2 = kocs[0]._id
    Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/assgt3',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
    })
  })

}
  })
  
  
  
  })



  router.post('/finalExam/:id',isLoggedIn,adminX,function(req,res){
    var pro =req.user
  var id = req.params.id
    var date = req.body.date
    var arr = []
    var term = req.user.term
  
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
    
      
      let class1 = doc.class1
      let id1 = doc._id
      let subject = doc.subjectName
      let subjectCode = doc.subjectCode
      Class1.find({class1:class1},function(err,kocs){
    
      let id2 = kocs[0]._id
      Test.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Final Exam'},function(err,docs){
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
      res.render('adminClerk/assgt3',{listX:arr,pro:pro,id1:id1,id2:id2,id:id})
        })
  });
      
  
    }
    })
  })
  





  router.get('/viewClassTest/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user
    
  Test.findById(id,function(err,loc){
        if(loc){

       
    let subjectCode = loc.subjectCode
  let subject = loc.subject
  let class1 = loc.class1
console.log(subjectCode,subject,'yaita')
  
 Class1.find({class1:class1},function(err,cok){
   let classId = cok[0]._id
    
 
 

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
 
  res.render('adminClerk/assgtListC1',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
  class1:class1})
    })
  })
})
}  
})

})





router.post('/viewClassTest/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
  
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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
    res.render('adminClerk/assgtListC1',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})


  

  router.get('/viewClassAssignments/:id',isLoggedIn,adminX,function(req,res){
    var id = req.params.id
    var pro = req.user

  Test.findById(id,function(err,loc){
   if(loc){

 
    let subjectCode = loc.subjectCode
  let subject = loc.subject
  let class1 = loc.class1

  
 Class1.find({class1:class1},function(err,cok){
   let classId = cok[0]._id
    
 
 

   StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
     let studentSubId = tocs[0]._id
   TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
 
  res.render('adminClerk/assgtListC2',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
  class1:class1})
    })
  })
})
}
})

})


router.post('/viewClassAssignments/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term
  
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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
 
    res.render('adminClerk/assgtListC2',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})


  




router.get('/viewExam/:id',isLoggedIn,adminX,function(req,res){
  var id = req.params.id
  var pro = req.user

Test.findById(id,function(err,loc){
 if(loc){


  let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1


Class1.find({class1:class1},function(err,cok){
 let classId = cok[0]._id
  



 StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
   let studentSubId = tocs[0]._id
 TestX.find({quizId:id},function(err,docs){
  let arr=[]
          for(var i = docs.length - 1; i>=0; i--){
      
            arr.push(docs[i])
          }

res.render('adminClerk/assgtListC3',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
class1:class1})
  })
})
})
}
})

})





router.post('/viewExam/:id',isLoggedIn,adminX,function(req,res){
  var pro =req.user
var id = req.params.id
  var date = req.body.date
  var arr = []
  var term = req.user.term

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

  Test.findById(id,function(err,loc){
    if(loc){

   
let subjectCode = loc.subjectCode
let subject = loc.subject
let class1 = loc.class1
console.log(subjectCode,subject,'yaita')

Class1.find({class1:class1},function(err,cok){
let classId = cok[0]._id




StudentSub.find({subjectCode:subjectCode,class1:class1},function(err,tocs){
 let studentSubId = tocs[0]._id
TestX.find({quizId:id},function(err,docs){
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
 
    res.render('adminClerk/assgtListC3',{listX:arr,studentSubId:studentSubId,pro:pro,id:id,subject:subject,classId:classId,
      class1:class1})
    

    
 
})
})
    })
  }
  })
})



////learning material


router.get('/teacherLearningMaterial/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user


  StudentSub.findById(id,function(err,vocs){
    if(vocs){
    let class1 = vocs.class1
    let subjectCode = vocs.subjectCode
    let id2 = vocs._id    

  TeacherSub.find({subjectCode:subjectCode},function(err,doc){
       if(doc){

      
    let  teacherSubId = doc[0]._id
    let teacherName = doc[0].teacherName
    let subject = doc[0].subjectName
    
    
   

    Learn.find({subjectCode:subjectCode,term:term,year:year,class1:class1},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('adminClerk/files2',{listX:arr,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,teacherName:teacherName
      })
   
    
})

      }

  
})
    }
})
  
  })



  

router.get('/teacherOnlineAssignmentFiles/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user


  StudentSub.findById(id,function(err,vocs){
    if(vocs){
    let class1 = vocs.class1
    let subjectCode = vocs.subjectCode
    let id2 = vocs._id    

  TeacherSub.find({subjectCode:subjectCode},function(err,doc){
       if(doc){

      
    let  teacherSubId = doc[0]._id
    let teacherName = doc[0].teacherName
    let subject = doc[0].subjectName
    
    
   

    Test.find({subjectCode:subjectCode,term:term,year:year,type2:'online assignment attached',class1:class1},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      
      res.render('adminClerk/files3',{listX:arr,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,teacherName:teacherName
      })
   
    
})

      }

  
})
    }
})
  
  })

///////////////////////////////////////
































  
router.get('/studentList',isLoggedIn,records,(req, res) => {
  var pro = req.user
  
   User.find({role:"student"},(err, docs) => {
       if (!err) {
           res.render("clerkRecords/list", {
               listX: docs, pro:pro
               
           });
       }
       else {
           console.log('Error in retrieving Student list :' + err);
       }
   });
 });

 router.get('/studentProfile/:id',isLoggedIn,records,function(req,res){
   var id = req.params.id
   var pro = req.user
   User.findById(id,function(err,doc){
     
  
   //var pro = req.user
   res.render('clerkRecords/overview2',{doc:doc,id:id,pro:pro})
   
 })
   })

   router.get('/studentSubjects/:id',isLoggedIn,records,function(req,res){
     var id = req.params.id
     console.log(id,'idd')
     var pro = req.user
     User.findById(id,function(err,doc){
       let uid = doc.uid
   
       StudentSub.find({studentId:uid},function(err,locs){
         res.render('clerkRecords/subjects3',{listX:locs,pro:pro,doc:doc,id:id})
       })
     })
    
   })
   


   router.get('/teacherSubjects/:id',isLoggedIn,records,function(req,res){
     var id = req.params.id
     console.log(id,'idd')
     var pro = req.user
     User.findById(id,function(err,doc){
       let uid = doc.uid
   
       TeacherSub.find({studentId:uid},function(err,locs){
         res.render('clerkRecords/subjects4',{listX:locs,pro:pro,doc:doc,id:id})
       })
     })
    
   })
   
   
   router.get('/teacherProfile/:id',isLoggedIn,records,function(req,res){
     var id = req.params.id
     User.findById(id,function(err,doc){
       pro = req.user
    
     //var pro = req.user
     res.render('clerkRecords/overview3',{pro:pro,id:id,doc:doc})
     
   })
     })
 

    //view profile
    router.get('/prof/:id',isLoggedIn,records,function(req,res){
     var pro = req.user
     User.findById(req.params.id, (err, doc) => {
       if (!err) {
       
           res.render("clerkRecords/overviewStudent", {
              
               doc: doc,pro:pro
             
               
           });
         
       }
   });
   
   
   
   })
   

   router.post('/prof',isLoggedIn,records,upload.single('file'),function(req,res){

     var pro = req.user
     var id = req.body.id
     console.log(id)
   
     if(!req.file){
      req.session.message = {
        type:'errors',
        message:'Select Picture'
      }     
        res.render('clerkRecords/overviewStudent', {
        message:req.session.message, pro:pro 
         }) 
      
     } else
     var imageFile = req.file.filename;
    
    console.log(imageFile)
    console.log(id)
     User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
     
     
       
     
     
     })
    
     res.redirect('/clerk/prof/'+id)
   
        //res.render('uploads/index',{title:'Upload File',records:data, success:success})
   
   
      
   
     
    
   })


   router.get('/studentReport',isLoggedIn,records,function(req,res){

     
     const output = `
  


     
     
  

     
     `;
     var nodemailer = require('nodemailer');
     var os = require("os");
     var hostname = os.hostname();
     
     var originalFile = 'studentReport.html';
     var baseDir = './views/';
     var recipient = 'kratosmusasa@gmail.com';
     
     var Styliner = require('styliner');
     
     
     var uncDrive = '\\\\' + hostname + '\\DevTC';
     var uncPath = baseDir.replace(/.*DevTC/gi, uncDrive);
     
     
     // prependUNCPath is a function called by Styliner for every
     // link that is found in the HTML.
     function prependUNCPath(path, type) {
         return uncPath + path;
     }
     
     // See http://styliner.slaks.net/#about for Styliner options
     var options = { url : prependUNCPath, noCSS : true };
     var styliner = new Styliner(baseDir, options);
    
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: "cashreq00@gmail.com",
           pass: "itzgkkqtmchvciik",
       },
     });
     
     // Step 2

/*
     // send mail with defined transport object
     const mailOptions = {
         from: '"Admin" <cashreq00@gmail.com>', // sender address
         to: 'kratosmusasa@gmail.com', // list of receivers
         subject: "Account Verification ✔", // Subject line
       
         html:source,
          // html body
     };

   transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
           console.log(error)
      
  
   
         }
         else {
             console.log('Mail sent : %s', info.response);
     
          
          
         }*/
         var fs = require('fs')

// Do the reading of the original index.html, and kick everything off.
fs.readFile(originalFile, 'utf8', function (err, data) {
   if (err) {
       return console.log(err);
   }

   styliner.processHTML(data)
   .then(function (source)
        {

       sendEmail(source);

       fs.writeFile("studentReport.html", source, function (err) {
           if (err) {
               return console.log(err);
           }

           console.log("The file was saved!");
       });

     }

   );

});
       })
     
//adding student grades/levels
/*router.get('/addlevel',isLoggedIn,records, function(req,res){
 var pro = req.user
 res.render('students/levels',{pro:pro})
})



router.post('/addlevel',isLoggedIn,records,  function(req,res){
 var grade = req.body.grade;

var pro = req.user
   
   req.check('grade','Enter Form Level').notEmpty();
 
   
   var errors = req.validationErrors();
        
   if (errors) {
   
     req.session.errors = errors;
     req.session.success = false;
     res.render('students/levels',{ errors:req.session.errors,pro:pro})
   
 }
 else{
   
     Level.findOne({'grade':grade})
     .then(clax =>{
         if(clax){ 

        req.session.message = {
         type:'errors',
          message:'Grade/Level  already exists'
        }     
           res.render('students/levels', {
              message:req.session.message ,pro:pro
           })
         }else
 
   var level = new Level();
 
 
   level.grade = grade;
   level.levelX = 'normal'
  
 
 
   level.save()
     .then(clas =>{
      
Level.find({},function(err,focs){
for(var i=0; i<focs.length;i++){

 for(var x = 0;x<focs.length;x++){

if(focs[i].grade>focs[x].grade){
 let id =focs[x]._id
 Level.findByIdAndUpdate(focs[i]._id,{$set:{levelX:'last'}},function(err,pocs){

   Level.findByIdAndUpdate(id,{$set:{levelX:'normal'}},function(err,locs){

    

   })
  

 })



}
   

 }
}


})

       req.session.message = {
         type:'success',
         message:'Grade/Level added'
       }  
       res.render('students/levels',{message:req.session.message,pro:pro});
   
 
   })
 
     .catch(err => console.log(err))
   
 
   })
 }
 
 
 
 
 
 
 })

*/




/*
router.get('/classUpdate',isLoggedIn,records,function(req,res){
 Class1.find(function(err,docs){
   for(var i = 0;i<docs.length;i++){
     let class1 = docs[i].class1
     let id = docs[i]._id
     User.find({class1:class1},function(err,nocs){
for(var c = 0; c<3;c++){
 if(c == 0){
   console.log(id,'cc')
   Class1.findByIdAndUpdate(id,{$set:{pic1:nocs[c].photo}},function(err,locs){

   })
 }else if(c == 1){
   console.log(id,'kk')
   Class1.findByIdAndUpdate(id,{$set:{pic2:nocs[c].photo}},function(err,locs){

   })
 }else if(c == 2){
   console.log(id,'yy')
   Class1.findByIdAndUpdate(id,{$set:{pic3:nocs[c].photo}},function(err,locs){

   })
 }
}
     })
   }
 })
})

*/




  //adding student classes
  /*
  router.get('/addClass',isLoggedIn,records, function(req,res){
   var pro = req.user
   var arr=[]
   
   Level.find({},function(err,docs){
     arr = docs
     if(docs.length == 0){
       res.redirect('/records/addLevel')
     }else
     res.render('students/classX',{pro:pro,arr1:arr})
   })
   
 })
 
 
 
 router.post('/addClass',isLoggedIn, records, function(req,res){
   var class1 = req.body.class1;
 var pro = req.user
 var arr = []

     req.check('class1','Enter Class Name').notEmpty();
     req.check('grade','Enter Form Level').notEmpty();
   
     
     var errors = req.validationErrors();
          
     if (errors) {
       Level.find({},function(err,docs){
         arr = docs
       req.session.errors = errors;
       req.session.success = false;
       res.render('students/classX',{ errors:req.session.errors,pro:pro, arr1:arr})
       })
     
   }
   else{
     
       Class1.findOne({'class1':class1})
       .then(clax =>{
           if(clax){ 
             Level.find({},function(err,docs){
               arr = docs
          req.session.message = {
           type:'errors',
            message:'Class already exists'
          }     
             res.render('students/classX', {
                message:req.session.message ,pro:pro, arr1:arr
             })
           })
           }else
   
     var clas = new Class1();
   
     clas.class1 = req.body.class1;
     clas.numberOfStudents = 0;
     clas.level = 0;
     clas.paid = 0;
     clas.pic1 = 'propic.jpg'
     clas.pic2 = 'propic.jpg'
     clas.pic3 = 'propic.jpg'
     clas.avgMark =0
     clas.unpaid = 0;
     clas.male = 0;
     clas.female = 0;
     clas.grade = req.body.grade;
   
   
   
     clas.save()
       .then(clas =>{
         Level.find({companyId:companyId},function(err,docs){
           arr = docs
         req.session.message = {
           type:'success',
           message:'Class added'
         }  
         res.render('students/classX',{message:req.session.message,pro:pro, arr1:arr});
       })
   
     })
   
       .catch(err => console.log(err))
     
     
     })
   }
   
   
   
   
   
   
   })
 
 */
 
 
 
 //class list
router.get('/classList',isLoggedIn,records, (req, res) => {
var pro = req.user

 Class1.find({},(err, docs) => {
     if (!err) {
         res.render("clerkRecords/list22", {
            listX:docs, pro:pro
           
         });
     }
 });
});

 
router.get('/class/:id',isLoggedIn,records,function(req,res,next){
 var id = req.params.id
 var pro = req.user
Class1.findById(id,function(err,doc){
let class1 = doc.class1
User.find({class1:class1},function(err,docs){
res.render('clerkRecords/classStudents',{listX:docs,pro:pro})

})
})
 //var successMsg = req.flash('success')[0]

 
})
//////////////////////level

//////////////////////

router.get('/levelBatch',isLoggedIn,  function(req,res){
 var pro = req.user
 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];
 res.render('clerkRecords/levelBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
 })




 router.post('/levelBatch',isLoggedIn,  function(req,res){
 var id =req.user._id
   var code = req.body.code
   var date = req.body.date
   var time  = req.body.time
   var m2 = moment()
   var mformat = m2.format('L')
   var pro = req.user

   
   

   req.check('code','Enter  Code').notEmpty();
   req.check('date','Enter Date').notEmpty();
   req.check('time','Enter Time').notEmpty();
 
   
   var errors = req.validationErrors();
    
   if (errors) {
     req.session.errors = errors;
     req.session.success = false;
     res.render('clerkRecords/levelBatch',{ errors:req.session.errors,pro:pro})

     
 


 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/levelBatch');
   
   }
   
   else 
   
   CodeLevel.findOne({'code':code})
   .then(grower =>{
   if(grower){

     req.flash('danger', 'Code already in use');

     res.redirect('/records/levelBatch');
   }else{

     var truck = new CodeLevel()
     truck.code = code
     truck.time = time
     truck.mformat = mformat

     truck.save()
         .then(pro =>{

     User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
         
       
     })
res.redirect('/clerk/addLevel')

   })

   }
   
   })
   
   
   })
 







//////////////////// add classes X

router.get('/addLevel',isLoggedIn, function(req,res){

 var pro = req.user
 var code = req.user.paymentId
 if(code == 'null'){
   res.redirect('/records/levelBatch')
 }else
 /*var successMsg = req.flash('success')[0];
 res.render('admin/stock2',{pro:pro,successMsg: successMsg, noMessages: !successMsg,code:code})*/
 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];
res.render('clerkRecords/level',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
   
 

 })
 
router.post('/addLevel',isLoggedIn, function(req,res){
 var m = moment()
 var pro = req.user
 var year = m.format('YYYY')

 var grade = req.body.grade

 var code = req.body.code
 var status = "null"
 console.log(grade,code,'squarebob')
 req.check('grade','Enter Grade').notEmpty();



 

 
 
 var errors = req.validationErrors();
  
 if (errors) {

   req.session.errors = errors;
   req.session.success = false;
  // res.render('product/stock',{ errors:req.session.errors,pro:pro})
  req.flash('success', req.session.errors[0].msg);
      
       
  res.redirect('/clerk/levelV');
 
 }
 else

{

 LevelV.findOne({'grade':grade,'status':status})
 .then(hoc=>{

   if(!hoc){
 var book = new LevelV();

 book.grade = grade
 book.code = code

 book.status = 'null'




     
      
       book.save()
         .then(pro =>{

          LevelV.find({grade:grade,code:code,status:'null'},(err, docs) => {
             let size = docs.length - 1
             console.log(docs[size],'fff')
             res.send(docs[size])
                     })
       })
      
     
     }
   }) 

     }
})





router.post('/loadLevelV',isLoggedIn, (req, res) => {
 var pro = req.user
 var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
 var code = req.user.paymentId


LevelV.find({code:code,status:'null'},(err, docs) => {

   res.send(docs)
           })

 }); 

 router.post('/levelV/update/:id',isLoggedIn,function(req,res){
   var id = req.params.id
   console.log(id,'emblem')
   var pro = req.user
 
   var m = moment()
   var year = m.format('YYYY')
   var month = m.format('MMMM')
   var dateValue = m.valueOf()
   var mformat = m.format("L")
   var date = m.toString()
   var grade = req.body.code
   LevelV.findById(id,function(err,doc){
   
   
   
    
LevelV.findByIdAndUpdate(id,{$set:{grade:grade}},function(err,doc){
 
  })     
       
   
   
   
   
   
  /* }else{
     console.log('null')
   
     ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
   
     })
   }*/
   res.send(doc)
 })
   })






router.get('/saveLevelV/:id',isLoggedIn, function(req,res){
 var pro = req.user
var receiver = req.user.fullname
var code = req.params.id
var uid = req.user._id

var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
var dateValue = m2.valueOf()
var date = m2.toString()
var numDate = m2.valueOf()
var month = m2.format('MMMM')


//var mformat = m.format("L")



LevelV.find({code:code},function(err,locs){

for(var i=0;i<locs.length;i++){

let grade = locs[i].grade



let idN = locs[i]._id


 LevelV.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

 })
 

 

 Level.findOne({'grade':grade})
 .then(hoc=>{

   if(!hoc){
     var clas = new Level();
   
     clas.levelX = "null";
     clas.name = 'null'
     clas.grade = grade;
 
   

     
      
     clas.save()
         .then(pro =>{

           User.findByIdAndUpdate(uid,{$set:{paymentId:'null'}},function(err,doc){

   
             Level.find({},function(err,focs){
               for(var i=0; i<focs.length;i++){
               
                 for(var x = 0;x<focs.length;x++){
               
               if(focs[i].grade>focs[x].grade){
                 let id =focs[x]._id
                 Level.findByIdAndUpdate(focs[i]._id,{$set:{levelX:'last'}},function(err,pocs){
               
                   Level.findByIdAndUpdate(id,{$set:{levelX:'normal'}},function(err,locs){
               
                    
               
                   })
                  
               
                 })
               
               
               
               }
                   
               
                 }
               }
               
               
               })




           })


              /*  req.session.message = {
             type:'success',
             message:'Product added'
           }  
           res.render('product/stock',{message:req.session.message,pro:pro});*/
         
       
       })

      /* req.flash('success', 'Stock Received Successfully');
       res.redirect('/rec/addStock')*/
     }  /* else{
       req.flash('danger', 'Product Does Not Exist');
     
       res.redirect('/rec/addStock');
     }*/
   }) 

    
}



req.flash('success', 'Classes Successfully Added');
res.redirect('/clerk/levelBatch')
}) 
})


router.get('/levelBatchDelete/:id',isLoggedIn, (req, res) => {
 LevelV.findByIdAndRemove(req.params.id, (err, doc) => {
   if (!err) {
       res.redirect('/records/levelV');
   }
   else { console.log('Error in deleting stock :' + err); }
 });
 });


//////////////////////

router.get('/classBatch',isLoggedIn,  function(req,res){
 var pro = req.user
 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];
 res.render('clerkRecords/classBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
 })




 router.post('/classBatch',isLoggedIn,  function(req,res){
 var id =req.user._id
   var code = req.body.code
   var date = req.body.date
   var time  = req.body.time
   var m2 = moment()
   var mformat = m2.format('L')
   var pro = req.user

   
   

   req.check('code','Enter  Code').notEmpty();
   req.check('date','Enter Date').notEmpty();
   req.check('time','Enter Time').notEmpty();
 
   
   var errors = req.validationErrors();
    
   if (errors) {
     req.session.errors = errors;
     req.session.success = false;
     res.render('clerkRecords/classBatch',{ errors:req.session.errors,pro:pro})

     
 


 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/classBatch');
   
   }
   
   else 
   
   CodeV.findOne({'code':code})
   .then(grower =>{
   if(grower){

     req.flash('danger', 'Code already in use');

     res.redirect('/clerk/classBatch');
   }else{

     var truck = new CodeV()
     truck.code = code
     truck.time = time
     truck.mformat = mformat

     truck.save()
         .then(pro =>{

     User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
         
       
     })
res.redirect('/clerk/addClass')

   })

   }
   
   })
   
   
   })
 







//////////////////// add classes X

router.get('/addClass',isLoggedIn, function(req,res){

 var pro = req.user
 var code = req.user.paymentId
 if(code == 'null'){
   res.redirect('/records/classBatch')
 }else
 /*var successMsg = req.flash('success')[0];
 res.render('admin/stock2',{pro:pro,successMsg: successMsg, noMessages: !successMsg,code:code})*/
 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];
res.render('clerkRecords/stock2',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
   
 

 })
 
router.post('/addClass',isLoggedIn, function(req,res){
 var m = moment()
 var pro = req.user
 var year = m.format('YYYY')

 var grade = req.body.grade
 var class1 = req.body.class1
 var code = req.body.code

 console.log(grade,class1,code,'squarebob')
 req.check('grade','Enter Grade').notEmpty();
 req.check('class1','Enter Class').notEmpty();


 

 
 
 var errors = req.validationErrors();
  
 if (errors) {

   req.session.errors = errors;
   req.session.success = false;
  // res.render('product/stock',{ errors:req.session.errors,pro:pro})
  req.flash('success', req.session.errors[0].msg);
      
       
  res.redirect('/clerk/classesV');
 
 }
 else

{

 ClassV.findOne({'class1':class1,'code':code})
 .then(hoc=>{

   if(!hoc){
 var book = new ClassV();

 book.grade = grade
 book.code = code
 book.class1 = class1
 book.status = 'null'




     
      
       book.save()
         .then(pro =>{

           ClassV.find({class1:class1,grade:grade,code:code},(err, docs) => {
             let size = docs.length - 1
             console.log(docs[size],'fff')
             res.send(docs[size])
                     })
       })
      
     
     }
   }) 

     }
})





router.post('/loadClassesV',isLoggedIn, (req, res) => {
 var pro = req.user
 var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
 var code = req.user.paymentId


 ClassV.find({code:code,status:'null'},(err, docs) => {

   res.send(docs)
           })

 }); 

 router.post('/classesV/update/:id',isLoggedIn,function(req,res){
   var id = req.params.id
   console.log(id,'emblem')
   var pro = req.user
 
   var m = moment()
   var year = m.format('YYYY')
   var month = m.format('MMMM')
   var dateValue = m.valueOf()
   var mformat = m.format("L")
   var date = m.toString()
   var class1 = req.body.code
   ClassV.findById(id,function(err,doc){
   
   
   
    
 ClassV.findByIdAndUpdate(id,{$set:{class1:class1}},function(err,doc){
 
  })     
       
   
   
   
   
   
  /* }else{
     console.log('null')
   
     ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
   
     })
   }*/
   res.send(doc)
 })
   })






router.get('/saveClassesV/:id',isLoggedIn, function(req,res){
 var pro = req.user
var receiver = req.user.fullname
var code = req.params.id
var uid = req.user._id

var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
var dateValue = m2.valueOf()
var date = m2.toString()
var numDate = m2.valueOf()
var month = m2.format('MMMM')


//var mformat = m.format("L")



ClassV.find({code:code},function(err,locs){

for(var i=0;i<locs.length;i++){

let grade = locs[i].grade
let class1 = locs[i].class1


let idN = locs[i]._id


 ClassV.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

 })
 

 

 Class1.findOne({'class1':class1})
 .then(hoc=>{

   if(!hoc){
     var clas = new Class1();
   
     clas.class1 = class1;
     clas.className = class1
     clas.numberOfStudents = 0;
     clas.level = 0;
     clas.paid = 0;
     clas.pic1 = 'propic.jpg'
     clas.pic2 = 'propic.jpg'
     clas.pic3 = 'propic.jpg'
     clas.avgMark =0
     clas.unpaid = 0;
     clas.male = 0;
     clas.female = 0;
     clas.grade = grade;
 
   

     
      
     clas.save()
         .then(pro =>{

           User.findByIdAndUpdate(uid,{$set:{paymentId:'null'}},function(err,doc){

           })

console.log(i,'ccc')
              /*  req.session.message = {
             type:'success',
             message:'Product added'
           }  
           res.render('product/stock',{message:req.session.message,pro:pro});*/
         
       
       })

      /* req.flash('success', 'Stock Received Successfully');
       res.redirect('/rec/addStock')*/
     }  /* else{
       req.flash('danger', 'Product Does Not Exist');
     
       res.redirect('/rec/addStock');
     }*/
   }) 

    
}



req.flash('success', 'Classes Successfully Added');
res.redirect('/clerk/addClass')
}) 
})


router.get('/classBatchDelete/:id',isLoggedIn, (req, res) => {
 ClassV.findByIdAndRemove(req.params.id, (err, doc) => {
   if (!err) {
       res.redirect('/clerk/classesV');
   }
   else { console.log('Error in deleting stock :' + err); }
 });
 });

//add teachers
router.get('/addTeacher',isLoggedIn,records,  function(req,res){
 var pro = req.user
 var actualCount = req.user.actualCount
 var count = req.user.count
 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];
  var idNum = req.user.idNumber
  idNum++
  var prefix = req.user.prefix
  var uid = prefix+idNum
  


 // if(actualCount < count){
    title = "Add Teachers"
    readonly = ""
   /* Dept.find({},function(err,docs){
      var arr1 = docs;
  
    if(docs.length == 0){
     res.redirect('/dept')
   }
  else*/
   
     res.render('clerkRecords/admit', { pro:pro,uid:uid,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg});
   //  })
  
 // }

})

router.get('/addTeacherX',isLoggedIn,records,function(req,res){
var pro = req.user

var title = ''
var readonly = ''



res.render('clerkRecords/admit',{pro:pro})
})

router.post('/addTeacher',isLoggedIn,records, function(req,res){
var m = moment()
                var year = m.format('YYYY')
                var pro = req.user
              var uid = req.body.uid;
              var name = req.body.name;
              var teacher = 'teacher'
              //var dept = req.body.dept
              var surname = req.body.surname;
              var role = 'teacher';
              var mobile = req.body.mobile;
              var expdate = req.user.expdate
              var expStr = req.user.expStr
              var gender = req.body.gender;
              var dob = req.body.dob;
              var class1 = 'null';
              var fullname = name +" "+ surname 
              var grade = 0
              var id = req.user._id;
              var email = req.body.email
              var password = req.body.password;
              var term = req.user.term;
              var address = req.body.address
              var prefix = req.user.prefix
              var idNum=req.user.idNumber
              idNum++
              var uid1 = prefix+idNum
              var file = req.body.file;
              var companyId = req.user.companyId
              var count = req.user.actualCount           
              var idNumber = req.user.idNumber
              
              req.check('name','Enter Name').notEmpty();
              req.check('surname','Enter Surname').notEmpty();
              req.check('dob','Enter Date Of Birth').notEmpty();
              req.check('email','Enter email').notEmpty().isEmail();
              req.check('uid','Enter Teacher ID').notEmpty();
              
              req.check('gender','Enter Gender').notEmpty();
              req.check('mobile', 'Enter Phone Number').notEmpty();
              req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
                  
              
                    
                 
              var errors = req.validationErrors();
                  if (errors) {
                   
                  
                    req.session.errors = errors;
                    req.session.success = false;
                    req.flash('danger', req.session.errors[0].msg);
     
      
                    res.redirect('/clerk/addTeacher');
                }
                else
              
               {
                  User.findOne({'fullname':fullname, 'role':teacher})
                  .then(user =>{
                      if(user){ 
                    // req.session.errors = errors
                      //req.success.user = false;
                          
    req.flash('danger', 'Email/User already in use');

    res.redirect('/clerk/addTeacher');
                }
                
                              else  {   
             

                
                var user = new User();
                user.uid = uid;
                user.name = name;
                user.fullname = fullname;
                user.surname = surname;
                user.role = role;
                user.gender = gender;
                user.dob = dob;
                user.studentId = 'null'
                user.grade = 0;
                user.class1 = 'null';
                user.mobile = mobile;
                user.classLength = 0;
                user.studentNum = 0;
                user.uidNum = 0;
                user.teacherId = 'null';
                user.teacherName = 'null';
                user.classNo = 0
                user.examDate = 'null';
                user.feeStatus = 'null';
                user.feesUpdate = 'null';
                user.term = term;
                user.amount = 0;
                user.receiptNumber = 0;
                user.year = year;
                user.balance = 0;
                user.idNumber = 0
                user.idNumX = 0
                user.number = 0
                user.schoolName = 'null'
                user.balanceCarriedOver = 0;
                user.status = 'owing';
                user.paymentId = 'null';
                user.prefix = prefix;
                user.photo = "propic.jpg";
                user.level = 0;
                user.pollUrl ='null';
                user.annual = 0;
                user.fees = 0
                user.type = 'null';
                user.address = address;
                user.email = email
                user.category = 'null';
                user.subject = 0;
                user.subjects = 'null'
                user.subjectCode = 'null'
                user.dept = "null";
                user.paynow = 0
               
                user.expdate=expdate;
                user.expStr = expStr; 
                user.status3 = "null"
                user.pollUrl2 = "null"
                user.levelX = 'null';
                user.status4 = 'null';
                user.recNumber = 0
                user.suffix = 'null'
                user.count=0
                user.pollCount = 0
                user.possibleMark = 0;
                user.topic = 'null';
                user.actualCount = 0  
                user.startYear = year
                user.currentYearCount = 0
                user.stdYearCount = 0
                user.admissionYear = year
                user.icon = 'null'
                user.subjectNo = 0
                user.quizDuration = 0
                user.inboxNo = 0
                user.quizNo = 0
                user.quizBatch = 0
                user.quizId = 'null'
                user.testId = 'null'
                user.industry = 'null'
                user.text = password
                user.password = user.encryptPassword(password)

                
                 
            
                 
        
                user.save()
                  .then(user =>{
    /*                const CLIENT_URL = 'http://' + req.headers.host;
    
                    const output = `
                    <h2>Please click on below link to activate your account</h2>
                    <a href="${CLIENT_URL}/">click here to login</a>
                    <h1> User credentials</h1>
                    <p>userID:${uid}</p>
                    <p>password:${password}</p>
                    <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                    `;
              
                   
                    const transporter = nodemailer.createTransport({
                      service: 'gmail',
                      auth: {
                          user: "cashreq00@gmail.com",
                          pass: "itzgkkqtmchvciik",
                      },
                    });*/
                    
              
                    // send mail with defined transport object
                
                })

              
              }
              User.findByIdAndUpdate(id,{$set:{idNumber:idNum}},function(err,locs){
                        
                req.flash('success', 'Teacher Added Successfully');
              res.redirect('/clerk/addTeacher')
              })
                  })
                }
            
               
              
                  
                  
              
               
                

                
})






//importing teachers details from excel
 
router.get('/importTeacher',isLoggedIn,records, function(req,res){
  var pro = req.user
  var actualCount = req.user.actualCount
  var count = req.user.count
  var pro = req.user
  var title, readonly ;
  var prefix = req.user.prefix
  var idNum=req.user.idNumber
  idNum++
 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var uid = prefix+idNum
 /* if(actualCount < count){*/
   title = "Import Teachers"
   readonly = ""
  
   // res.redirect('/records/dept')
  
 res.render('clerkRecords/teacher',{pro:pro,title:title,readonly:readonly,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })
 /*else

res.redirect('/records/importTeacherX')*/

 
 
 
/*
router.get('/importTeacherX',isLoggedIn,function(req,res){
 var pro = req.user
 res.render('imports/teacherX',{pro:pro})
})*/



  
 router.post('/importTeacher',isLoggedIn,records, upload.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
   var year = m.format('YYYY')
   var id =   req.user._id
   var idNumber = req.user.idNumber
   var pro = req.user
   var count = req.user.actualCount
   var expdate = req.user.expdate
var expStr = req.user.expStr
var prefix = req.user.prefix
 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('clerk/teacherX', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile('./public/uploads/' + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
    
       
        
     
         
      
      
     
           let uid = record.uid;
           let name = record.name;
           let surname = record.surname;
           let fullname = name +" "+surname
           let role = 'teacher';
           let address = record.address
           let mobile = record.mobile;
           let gender = record.gender;
           let dob = record.dob;
         let email = record.email
       
          let dept = record.dept
          let num = record.num
           let password = record.password;
           let term = req.user.term
           let photo = record.photo
           let companyId = req.user.companyId
       req.body.uid=record.uid
       req.body.name=record.name
       req.body.surname=record.surname
       req.body.address=record.address
       req.body.mobile=record.mobile
       req.body.gender=record.gender
       req.body.dob=record.dob
       req.body.email=record.email
       req.body.dept=record.dept
       req.body.password=record.password
       req.body.photo = record.photo
     

       req.check('name','Enter Name').notEmpty();
req.check('surname','Enter Surname').notEmpty();
req.check('dob','Enter Date Of Birth').notEmpty();
req.check('email','Enter email').notEmpty().isEmail();
req.check('uid','Enter Teacher ID').notEmpty();
req.check('address','Enter Address').notEmpty();
req.check('gender','Enter Gender').notEmpty();
req.check('photo','Enter Photo').notEmpty();
req.check('mobile', 'Enter Phone Number').notEmpty();
req.check('password', 'Password do not match').notEmpty();
   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importTeacher');

}

else


           {
             User.findOne({'uid':uid})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'User already in the system');
 
                 //res.redirect('/records/import')
               
           }
           else





           var user = new User();
           user.uid = uid;
           user.name = name;
           user.fullname = fullname;
           user.surname = surname;
           user.role = role;
           user.gender = gender;
           user.dob = dob;
           user.studentId = 'null'
           user.grade = 0;
           user.class1 = 'null';
           user.mobile = mobile;
           user.classLength = 0;
           user.studentNum = 0;
           user.uidNum = 0;
           user.teacherId = 'null';
           user.teacherName = 'null';
           user.classNo = 0
           user.examDate = 'null';
           user.feeStatus = 'null';
           user.feesUpdate = 'null';
           user.term = term;
           user.amount = 0;
           user.receiptNumber = 0;
           user.year = year;
           user.balance = 0;
           user.idNumber = 0
           user.idNumX = 0
           user.number = 0
           user.schoolName = 'null'
           user.balanceCarriedOver = 0;
           user.status = 'owing';
           user.paymentId = 'null';
           user.prefix = prefix;
           user.photo = photo;
           user.level = 'null';
           user.pollUrl ='null';
           user.annual = 0;
           user.fees = 0
           user.type = 'null';
           user.address = address;
           user.possibleMark = 0;
           user.topic = 'null';
           user.email = email
           user.category = 'null';
           user.subject = 0;
           user.subjects = 'null'
           user.subjectCode = 'null'
           user.dept = dept;
           user.paynow = 0
        
           user.expdate=expdate;
           user.expStr = expStr; 
           user.status3 = "null"
           user.pollUrl2 = "null"
           user.levelX = 'null';
           user.status4 = 'null';
           user.recNumber = 0
           user.suffix = 'null'
           user.count=0
           user.pollCount = 0
           user.actualCount = 0  
           user.startYear = year
           user.currentYearCount = 0
           user.stdYearCount = 0
           user.admissionYear = year
           user.password = user.encryptPassword(password)   
           user.icon = 'null'
           user.subjectNo = 0
           user.quizDuration = 0
           user.inboxNo = 0
           user.quizNo = 0
           user.quizBatch = 0
           user.quizId = 'null'
           user.testId = 'null'
           user.industry = 'null'
           user.text = password
          
           user.save()
             .then(user =>{
              
             
                 
             /*  req.session.message = {
                 type:'success',
                 message:'Account Registered'
               }  
               res.render('imports/teacherX',{message:req.session.message});*/
             })

           })
         }
                  
                   // .catch(err => console.log(err))
                 
               
                   
                 
                 
        
                 
                 
                 
                   
                   
       
                  
       
       
            
               })
               
               req.flash('success', 'File Successfully!');
 
               res.redirect('/clerk/importTeacher')  
     
       }
     }
 
 })


 /////////////////////////pt2

 router.get('/updateChildren',isLoggedIn,function(req,res){
 User.find({role:"parent"},function(err,docs){
for(var i = 0; i < docs.length; i++){

 let uid = docs[i].uid
 let id = docs[i]._id

 User.find({role:"student",parentId:uid},function(err,locs){
   let num = locs.length


   User.findByIdAndUpdate(id,{$set:{children:num}},function(err,vocs){

   })
 })

}

req.flash('success', 'Parents Successully Linked with Students');
      
       
res.redirect('/clerk/dash');
 })


 })

router.get('/updateParents',isLoggedIn,records,function(req,res){


User.find({role:"student"},function(err,docs){

 for(var i = 0; i< docs.length;i++){

 let studentId = docs[i].uid
 let id = docs[i]._id
 console.log(studentId,id,"external")

User.find({role:"parent"},function(err,locs){

for(var n = 0 ; n<locs.length;n++){
 let psId = locs[n].studentId
 let pId = locs[n].uid

 console.log(psId,pId,'parents')

 if(studentId == psId){

 

 User.findByIdAndUpdate(id,{$set:{parentId:pId}},function(err,vocs){

 })
}
}


})
 }

// req.flash('success', 'Students Successully Linked with Parents');
      
       
 res.redirect('/clerk/updateChildren');
})


})
 
router.get('/importParents',isLoggedIn,records, function(req,res){
 var pro = req.user
 var actualCount = req.user.actualCount
 var count = req.user.count
 var pro = req.user
 var title, readonly ;
 var prefix = req.user.prefix


 var errorMsg = req.flash('danger')[0];
 var successMsg = req.flash('success')[0];


res.render('clerkRecords/parents',{pro:pro,readonly:readonly,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

  })






   
 router.post('/importParents',isLoggedIn,records, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
   var year = m.format('YYYY')
   var id =   req.user._id
   var idNumber = req.user.idNumber
   var pro = req.user
   var count = req.user.actualCount
   var expdate = req.user.expdate
var expStr = req.user.expStr
var prefix = req.user.prefix
 
   
 /*  if(!req.file){
       req.session.message = {
         type:'errors',
         message:'Select File!'
       }     
         res.render('imports/students', {message:req.session.message,pro:pro}) */
         if (!req.file || req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
           req.session.message = {
               type:'errors',
               message:'Upload Excel File'
             }     
               res.render('clerkRecords/parents', {message:req.session.message,pro:pro
                    
                }) 
 
 
 
       }
         
       else{

       
           const file = req.file.filename;
   
           
                var wb =  xlsx.readFile('./public/uploads/' + file)
        
                var sheets = wb.Sheets;
                var sheetNames = wb.SheetNames;
    
                var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName ];
    
       for (var i = 0; i < wb.SheetNames.length; ++i) {
        var sheet = wb.Sheets[wb.SheetNames[i]];
    
        console.log(wb.SheetNames.length)
        var data =xlsx.utils.sheet_to_json(sheet)
            
        var newData = data.map(async function (record){
    
       
        
     
         
      
      
     
           let uid = record.uid;
           let name = record.name;
           let surname = record.surname;
           let fullname = name +" "+surname
           let role = 'parent';
           let address = record.address
           let mobile = record.mobile;
           let gender = record.gender;
           let dob = record.dob;
         let email = record.email
       let studentId = record.studentId

          let num = record.num
           let password = record.password;
           let term = req.user.term
           let photo = record.photo
           let companyId = req.user.companyId
       req.body.uid=record.uid
       req.body.name=record.name
       req.body.surname=record.surname
       req.body.address=record.address
       req.body.mobile=record.mobile
       req.body.gender=record.gender
       req.body.dob=record.dob
       req.body.email=record.email
       req.body.studentId = record.studentId
       req.body.password=record.password
       req.body.photo = record.photo
     

       req.check('name','Enter Name').notEmpty();
req.check('surname','Enter Surname').notEmpty();
req.check('dob','Enter Date Of Birth').notEmpty();
req.check('email','Enter email').notEmpty().isEmail();
req.check('uid','Enter Parent ID').notEmpty();
req.check('address','Enter Address').notEmpty();
req.check('gender','Enter Gender').notEmpty();
req.check('photo','Enter Photo').notEmpty();
req.check('mobile', 'Enter Phone Number').notEmpty();
req.check('studentId', 'Enter Student ID').notEmpty();
req.check('password', 'Password do not match').notEmpty();
   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importTeacher');

}



        
const token = jwt.sign({uid,name,surname,address,mobile,gender,fullname,prefix, dob, photo, term, year, email,role, password,expdate,expStr,studentId }, JWT_KEY, { expiresIn: '100000m' });
const CLIENT_URL = 'http://' + req.headers.host;

const output = `
<h2>Please click on below link to activate your account</h2>
<a href="${CLIENT_URL}/records/activateP/${token}">click here</a>
<h1> User credentials</h1>
<p>userID:${uid}</p>
<p>password:${password}</p>
<p><b>NOTE: </b> The above activation link expires in 1 week.</p>
`;

const transporter = nodemailer.createTransport({
 service: 'gmail',
                       port:465,
                       secure:true,
                       logger:true,
                       debug:true,
                       secureConnection:false,
                       auth: {
                           user: "kratosmusasa@gmail.com",
                           pass: "znbmadplpvsxshkg",
                       },
                       tls:{
                         rejectUnAuthorized:true
                       }
                     });


// send mail with defined transport object
const mailOptions = {
   from: '"Admin" <kratosmusasa@gmail.com>', // sender address
   to: record.email, // list of receivers
   subject: "Account Verification ✔", // Subject line
   html: output, // html body
};

await   transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
     console.log(error)
     req.flash('danger', 'Email not sent');

     res.redirect('/clerk/importParents')


   }
   else {
       console.log('Mail sent : %s', info.response);
       idNumber++
    
       User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,locs){

      
       
       req.flash('success', 'Email  sent');

       res.redirect('/clerk/importParents')

     })
   }
})
 


        
               })
               
               
     
       }
     }
 
 })
 

   //parents List
router.get('/parentsList',isLoggedIn,records,(req, res) => {
 var pro = req.user
 
 User.find({role:"parent"},(err, docs) => {
     if (!err) {
         res.render("clerkRecords/parentsList", {
             listX: docs, pro:pro
             
         });
     }
     else {
         console.log('Error in retrieving Teachers list :' + err);
     }
 });
});



     
//updating parent
router.get('/parent/:id',isLoggedIn,records, (req, res) => {
 var pro = req.user   
var arr1 = []
  Class1.find({},function(err,docs){
    arr1 = docs;
 User.findById(req.params.id, (err, doc) => {
     if (!err) {
     
         res.render("clerkRecords/updateParent", {
            
             user: doc, pro:pro,arr1:arr1
           
             
         });
       
     }
   })
 });
 });
 
 router.post('/parent/:id',isLoggedIn, records,  (req, res) => {
 var user = new User();
 var idX = req.params.id
 var id = req.body._id;
 var name = req.body.name;
 var surname = req.body.surname;
 req.body.fullname = name +" "+ surname

 var dob = req.body.dob
 var pro = req.user
 
    
 req.check('name','Enter Name').notEmpty();
 req.check('surname','Enter Surname').notEmpty();
 req.check('email','Enter email').notEmpty().isEmail();

 req.check('address','Enter Address').notEmpty();

 req.check('uid','Enter Student ID').notEmpty();

 req.check('mobile', 'Enter Phone Number').notEmpty()
 

   
 var errors = req.validationErrors();
 
 
 
  if (errors) {
 
   req.session.errors = errors;
   req.session.success = false;
   req.flash('danger', req.session.errors[0].msg);
      
       
               res.redirect('/clerk/parent/'+idX);
      
      
    
   
   }
 
 else
 {
 
       User.findOneAndUpdate({_id:id},req.body,
         { new: true }, (err, doc) => {
            if (!err) {
            
             req.flash('success', 'User Updated Successfully!');
 
                   res.redirect('/clerk/parentsList')  }
            else {
              console.log('error'+err)
      
            }
          
        })
 
 
   
 }
 
 });
 
 
router.get('/parentProfile/:id',isLoggedIn,records,function(req,res){
 var id = req.params.id
 var pro = req.user
 User.findById(id,function(err,doc){
   

 //var pro = req.user
 res.render('clerkRecords/overview4',{doc:doc,id:id,pro:pro})
 
})
 })



 router.get('/parentChildren/:id',isLoggedIn,records,function(req,res){
   var id = req.params.id
   console.log(id,'idd')
   var pro = req.user
   User.findById(id,function(err,doc){
     let uid = doc.uid
 
     User.find({parentId:uid,role:"student"},function(err,locs){
       res.render('clerkRecords/children',{listX:locs,pro:pro,doc:doc,id:id})
     })
   })
  
 })

   //teacher List
router.get('/teacherList',isLoggedIn,records,(req, res) => {
 var pro = req.user
 
 User.find({role:"teacher"},(err, docs) => {
     if (!err) {
         res.render("clerkRecords/list2", {
             listX: docs, pro:pro
             
         });
     }
     else {
         console.log('Error in retrieving Teachers list :' + err);
     }
 });
});

router.get('/staffList',isLoggedIn,(req, res) => {
 var pro = req.user
 
 User.find({role1:"staff"},(err, docs) => {
     if (!err) {
         res.render("admin/list3", {
             listX: docs, pro:pro
             
         });
     }
     else {
         console.log('Error in retrieving Student list :' + err);
     }
 });
 });
 
 router.get('/profile/:id',isLoggedIn,function(req,res){
   var id = req.params.id
   var pro = req.user
   User.findById(id,function(err,doc){
     
  
   //var pro = req.user
   res.render('clerkRecords/overviewRecords',{doc:doc,id:id,pro:doc})
   
 })
   })


   

 
router.get('/teacherSubjects/:id',isLoggedIn,function(req,res){
 var id = req.params.id
 console.log(id,'idd')
 var pro = req.user

 User.findById(id,function(err,doc){
   let uid = doc.uid

   TeacherSub.find({studentId:uid},function(err,locs){
     res.render('clerkRecords/subjectsRecord',{listX:locs,pro:pro,doc:doc,id:id})
   })
 })

})


router.get('/teacherProfile/:id',isLoggedIn,function(req,res){
 var id = req.params.id
 User.findById(id,function(err,doc){
   pro = req.user

 //var pro = req.user
 res.render('clerkRecords/overviewRecords',{pro:pro,id:id,doc:doc})
 
})
 })

//user account activation route  (teachers)
router.get('/activateP/:token',(req,res)=>{
 const token = req.params.token;
 
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
             const {uid, name,surname,fullname,address, mobile,photo,gender,dob,role,term,year,expdate,expStr,studentId,  email,prefix,suffix, password,} = decodedToken;
             User.findOne({ uid: uid }).then(user => {
                 if (user) {
                     //------------ User already exists ------------//
                 
                     req.session.message = {
                         type:'errors',
                         message:'User already registered! Please log in.'
                       }  
                       res.render('users/login',{message:req.session.message});
              
                     
                 }
                 else  {      

                   var user = new User();
                   user.uid = uid;
                   user.name = name;
                   user.fullname = fullname;
                   user.surname = surname;
                   user.role = role;
                   user.gender = gender;
                   user.dob = dob;
                   user.studentId = 'null'
                   user.grade = 0;
                   user.class1 = 'null';
                   user.mobile = mobile;
                   user.classLength = 0;
                   user.studentNum = 0;
                   user.uidNum = 0;
                   user.teacherId = 'null';
                   user.teacherName = 'null';
                   user.classNo = 0
                   user.examDate = 'null';
                   user.feeStatus = 'null';
                   user.feesUpdate = 'null';
                   user.term = term;
                   user.amount = 0;
                   user.receiptNumber = 0;
                   user.year = year;
                   user.balance = 0;
                   user.idNumber = 0
                   user.idNumX = 0
                   user.number = 0
                   user.schoolName = 'null'
                   user.balanceCarriedOver = 0;
                   user.status = 'owing';
                   user.paymentId = 'null';
                   user.prefix = prefix;
                   user.photo = "propic.jpg";
                   user.level = 0;
                   user.portalBalance = 0
                   user.pollUrl ='null';
                   user.annual = 0;
                   user.fees = 0
                   user.type = 'null';
                   user.address = address;
                   user.email = email
                   user.category = 'null';
                   user.subject = 0;
                   user.subjects = 'null'
                   user.subjectCode = 'null'
                   user.dept = 'null';
                   user.paynow = 0
       
                   user.expdate=expdate;
                   user.expStr = expStr; 
                   user.status3 = "null"
                   user.pollUrl2 = "null"
                   user.levelX = 'null';
                   user.status4 = 'null';
                   user.recNumber = 0
                   user.suffix = 'null'
                   user.count=0
                   user.pollCount = 0
                   user.actualCount = 0 
                   user.possibleMark = 0;
                   user.topic = 'null';
                   user.startYear = year
                   user.currentYearCount = 0
                   user.stdYearCount = 0
                   user.admissionYear = year
                   user.icon = 'null'
                   user.subjectNo = 0
                   user.quizDuration = 0
                   user.inboxNo = 0
                   user.quizNo = 0
                   user.quizBatch = 0
                   user.quizId = 'null'
                   user.testId = 'null'
                   user.industry = 'null'
                   user.children = 0
                   user.parentId = "null"
                   user.text = password
                   user.password = user.encryptPassword(password)   
                  
                   user.save()
                     .then(user =>{
                      
                     
                         
                       req.session.message = {
                         type:'success',
                         message:'Account Registered'
                       }  
                       res.render('users/login',{message:req.session.message});
                     })
                     .catch(err => console.log(err))
                   }
                   
                     })
                    }
             });
           }
 });



//change id number 
//adding lessons to timetable
router.get('/idEdit',isLoggedIn,records,function(req,res){
 var pro = req.user
 res.render('clerkRecords/idNum',{pro:pro})
 
 })
 
 router.post('/idEdit',isLoggedIn, records,function(req,res){
      var pro = req.user
 var idNumber = req.body.idNumber;
 var id = req.user._id

 
   req.check('idNumber','Enter ID Number').notEmpty();
  
  
   var errors = req.validationErrors();
   if (errors) {
  
     req.session.errors = errors;
     req.session.success = false;
     res.render('clerkRecords/idNum',{errors:req.session.errors,pro:pro})
  
   
  }
  else
 User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){
   req.flash('success', 'ID sequence changed successfully');
   res.redirect('/clerk/addStudent')
 })

 })



 router.get('/idEditX',isLoggedIn,records,function(req,res){
   var pro = req.user
   res.render('clerkRecords/idNumX',{pro:pro})
   
   })
   
   router.post('/idEditX',isLoggedIn, records,function(req,res){
        var pro = req.user
   var idNumber = req.body.idNumber;
   var id = req.user._id
  
   
     req.check('idNumber','Enter ID Number').notEmpty();
    
    
     var errors = req.validationErrors();
     if (errors) {
    
       req.session.errors = errors;
       req.session.success = false;
       res.render('clerkRecords/idNumX',{errors:req.session.errors,pro:pro})
    
     
    }
    else
   User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){
     req.flash('success', 'ID sequence changed successfully');
     res.redirect('/clerk/addTeacher')
   })
 
   })



   router.get('/idEditStaff',isLoggedIn,records,function(req,res){
     var pro = req.user
     res.render('clerkRecords/idNumStaff',{pro:pro})
     
     })
     
     router.post('/idEditStaff',isLoggedIn, records,function(req,res){
          var pro = req.user
     var idNumber = req.body.idNumber;
     var id = req.user._id
   
     
       req.check('idNumber','Enter ID Number').notEmpty();
      
      
       var errors = req.validationErrors();
       if (errors) {
      
         req.session.errors = errors;
         req.session.success = false;
         res.render('clerkRecords/idNumStaff',{errors:req.session.errors,pro:pro})
      
       
      }
      else
     User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){
       req.flash('success', 'ID sequence changed successfully');
       res.redirect('/clerk/addStaff')
     })
   
     })
   
     
//activate/deactivate users


 router.get('/usr/activate/:id',isLoggedIn,records,function(req,res){
   var count = req.user.count
   var actualCount = req.user.actualCount
   var id = req.params.id

   if(count <= actualCount){
     res.redirect('/clerk/studentList')
   }
   else


User.findByIdAndUpdate(id,{$set:{status3:"activated",status4:"deactivate"}},function(err,docs){

})
res.redirect('/clerk/studentList')


 })


 router.get('/usr/deactivate/:id',isLoggedIn,records,function(req,res){
   var count = req.user.count
   var actualCount = req.user.actualCount

id = req.params.id

User.findByIdAndUpdate(id,{$set:{status3:"deactivated",status4:"activate"}},function(err,docs){

})
res.redirect('/clerk/studentList')


 })

 //adding departments

router.get('/dept',isLoggedIn,records, function(req,res){
 var pro = req.user
 res.render('clerkRecords/dept',{pro:pro})
})

router.post('/dept',isLoggedIn,  function(req,res){
    var pro = req.user
 var name = req.body.name;


     req.check('name','Enter Name Of Department').notEmpty();

   
     
     var errors = req.validationErrors();
          
     if (errors) {
     
       req.session.errors = errors;
       req.session.success = false;
       res.render('clerkRecords/dept',{ errors:req.session.errors,pro:pro})
     
   }
   else{
     
       Dept.findOne({'name':name})
       .then(dept =>{
           if(dept){ 
 
          req.session.message = {
           type:'errors',
            message:'Department already exists'
          }     
             res.render('clerkRecords/dept', {
                message:req.session.message ,pro:pro
             })
           }else
   
     var dep = new Dept();
   
     dep.name = name;
   
    
  
   
   
     dep.save()
       .then(dep =>{
        
         req.session.message = {
           type:'success',
           message:'Department added'
         }  
         res.render('clerkRecords/dept',{message:req.session.message,pro:pro});
     
   
     })
   
       .catch(err => console.log(err))
     
     
     })
   }
   
   
})


//department List
router.get('/deptList',isLoggedIn,records, (req, res) => {
 var pro = req.user

 Dept.find({},(err, docs) => {
     if (!err) {
         res.render("clerkRecords/deptlist", {
            list:docs,pro:pro
           
         });
     }
 });
});





////////////////////////// files & folders


router.get('/files',isLoggedIn,records,function(req,res){
  var pro = req.user

  Class1.find({},function(err,docs){
    res.render('clerkAdminStudentRecords/folders',{listX:docs,pro:pro})

  })

})


/////////
router.get('/studentReportsYear/:id',isLoggedIn,records,function(req,res){
var pro = req.user
//var year = req.params.id
var id = req.params.id
console.log(id,'id')
var adminId = req.user._id
Class1.findById(id,function(err,doc){
console.log(doc,'doc')
let class1 = doc.class1


User.findByIdAndUpdate(adminId,{$set:{reportClass:class1,classReportId:id}},function(err,tocs){






  res.render('clerkAdminStudentRecords/fileAssgtReportsYear',{id:id,pro:pro,class1:class1})

})
})
})






router.get('/studentReportsMonth/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var year = req.params.id
var id = req.user.reportId
var adminId = req.user._id
var class1 = req.user.reportClass
var classReportId =req.user.classReportId
console.log(classReportId,'classId')


User.findByIdAndUpdate(adminId,{$set:{reportYear:year}},function(err,klocs){






  res.render('clerkAdminStudentRecords/fileAssgtReportsMonth',{id:id,year:year,pro:pro,class1:class1,classReportId:classReportId})

})

})


////
router.get('/studentMonthlyReportFiles/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var month = req.params.id
var class1 =  req.user.reportClass
var year = req.user.reportYear
var adminId = req.user._id
var classId = req.user.classReportId

User.findByIdAndUpdate(adminId,{$set:{reportMonth:month}},function(err,klocs){



Report.find({year:year,month:month,type:"Monthly Assessment",class1:class1},function(er,hocs){
res.render('clerkAdminStudentRecords/filesMonthly',{year:year,listX:hocs,pro:pro,class1:class1,classId:classId,month:month,year:year})
})

})


})


router.get('/studentDownloadMonthlyReport/:id',isLoggedIn,records,function(req,res){
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

})


router.get('/openMonthlyReport/:id',(req,res)=>{
var fileId = req.params.id
const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {


  const readStream = bucket.openDownloadStream(files[0]._id);
      readStream.pipe(res);

})
//gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})


//student examfiles
router.get('/examFiles',isLoggedIn,records,function(req,res){
var pro = req.user

Class1.find({},function(err,docs){
res.render('clerkAdminStudentExamRecords/folders',{listX:docs,pro:pro})

})

})


/////////
router.get('/studentExamReportsYear/:id',isLoggedIn,records,function(req,res){
var pro = req.user
//var year = req.params.id
var id = req.params.id
console.log(id,'id')
var adminId = req.user._id
Class1.findById(id,function(err,doc){
console.log(doc,'doc')
let class1 = doc.class1


User.findByIdAndUpdate(adminId,{$set:{reportClass:class1,classReportId:id}},function(err,tocs){






res.render('clerkAdminStudentExamRecords/fileAssgtReportsYear',{id:id,pro:pro,class1:class1})

})
})
})






router.get('/studentExamReportsMonth/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var year = req.params.id
var id = req.user.reportId
var adminId = req.user._id
var class1 = req.user.reportClass
var classReportId =req.user.classReportId
console.log(classReportId,'classId')


User.findByIdAndUpdate(adminId,{$set:{reportYear:year}},function(err,klocs){






res.render('clerkAdminStudentExamRecords/fileAssgtReportsMonth',{id:id,year:year,pro:pro,class1:class1,classReportId:classReportId})

})

})


////
router.get('/studentTermlyReportFiles/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var term = req.params.id
var class1 =  req.user.reportClass
var year = req.user.reportYear
var adminId = req.user._id
var classId = req.user.classReportId

//User.findByIdAndUpdate(adminId,{$set:{reportMonth:month}},function(err,klocs){



Report.find({year:year,term:term,type:"Final Exam",class1:class1},function(er,hocs){
res.render('clerkAdminStudentExamRecords/filesMonthly',{year:year,listX:hocs,pro:pro,class1:class1,classId:classId,year:year,term:term})
})

//})


})




router.get('/studentDownloadTermlyReport/:id',isLoggedIn,records,function(req,res){
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

})



router.get('/openStudentTermlyReport/:id',(req,res)=>{
var fileId = req.params.id
const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {


  const readStream = bucket.openDownloadStream(files[0]._id);
      readStream.pipe(res);

})
//gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})
//teacher reports


router.get('/teachersRepo',isLoggedIn,records,function(req,res){
var pro = req.user

User.find({role:"teacher"},function(err,docs){
res.render('clerkAdminRecords/folders2',{listX:docs,pro:pro})

})

})


router.get('/subjectFile/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id
var arr = []

User.findById(id,function(err,doc){
if(doc){


let uid = doc.uid
let teacherName = doc.fullname
TeacherSub.find({teacherId:uid},function(err,docs){
  for(var i = 0;i<docs.length;i++){
    
 
      
     if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
            console.log('true')
           arr.find(value => value.subjectName == docs[i].subjectName).year += docs[i].year;

          }else{
  arr.push(docs[i])


          }
  
      
      }

      res.render('clerkAdminRecords/fileSubjects2',{listX:arr,pro:pro,id:id,teacherName:teacherName})

})
}
})
})




router.get('/teacherClass/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id
var arr = []

TeacherSub.findById(id,function(err,doc){
if(doc){


let subjectCode = doc.subjectCode
let uid = doc.teacherId
let subject = doc.subjectName
let teacherName = doc.teacherName
User.find({uid:uid},function(err,ocs){


let id2 = ocs[0]._id
StudentSub.find({subjectCode:subjectCode},function(err,docs){
  for(var i = 0;i<docs.length;i++){
    
 
      
     if(arr.length > 0 && arr.find(value => value.class1 == docs[i].class1)){
            console.log('true')
           arr.find(value => value.class1 == docs[i].class1).year += docs[i].year;

          }else{
  arr.push(docs[i])


          }
  
      
      }

      res.render('clerkAdminRecords/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject,teacherName:teacherName})

})
})
}
})
})


router.get('/teacherClassAssignment/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id
var adminId = req.user._id

StudentSub.findById(id,function(err,doc){
if(doc){
let class1 = doc.class1
let subjectCode = doc.subjectCode
let subject = doc.subjectName

TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
User.find({uid:teacherId},function(err,nocs){
let id2 = nocs[0]._id
User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
User.findByIdAndUpdate(adminId,{$set:{reportId:id}},function(err,pvocs){

})


res.render('clerkAdminRecords/fileAssgt22',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
})
})
})
}
})
})




router.get('/teacherReportsYear/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var year = req.params.id
var id = req.user.reportId
var adminId = req.user._id
console.log(year,id,"illest")
StudentSub.findById(id,function(err,doc){
if(doc){
let class1 = doc.class1
let subjectCode = doc.subjectCode
let subject = doc.subjectName

TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
User.find({uid:teacherId},function(err,nocs){
let id2 = nocs[0]._id
User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){
User.findByIdAndUpdate(adminId,{$set:{year:year}},function(err,klops){

})



res.render('clerkAdminRecords/fileAssgtReports',{id:id,year:year,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})

})
})
})
}
})
})


router.get('/teacherReports/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id

StudentSub.findById(id,function(err,doc){
if(doc){
let class1 = doc.class1
let subjectCode = doc.subjectCode
let subject = doc.subjectName

TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
User.find({uid:teacherId},function(err,nocs){
let id2 = nocs[0]._id
User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){



//fileAssgtReportsYear
res.render('clerkAdminRecords/fileAssgtReportsYear',{id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})

})
})
})
}
})
})



router.get('/monthlyReports/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id
var year = req.user.year

StudentSub.findById(id,function(err,doc){
if(doc){
let class1 = doc.class1
let subjectCode = doc.subjectCode
let subject = doc.subjectName

TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
User.find({uid:teacherId},function(err,nocs){
let id2 = nocs[0]._id
User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


Report2.find({subjectCode:subjectCode,year:year,type:"Monthly Assessment"},function(er,hocs){
res.render('clerkAdminRecords/filesMonthly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
})

})
})
})
}
})
})




router.get('/termlyReports/:id',isLoggedIn,records,function(req,res){
var pro = req.user
var id = req.params.id
var year = req.user.year
StudentSub.findById(id,function(err,doc){
if(doc){
let class1 = doc.class1
let subjectCode = doc.subjectCode
let subject = doc.subjectName

TeacherSub.find({subjectCode:subjectCode},function(err,hocs){
let teacherId = hocs[0].teacherId
let id3 = hocs[0]._id
let teacherName = hocs[0].teacherName
User.find({uid:teacherId},function(err,nocs){
let id2 = nocs[0]._id
User.findByIdAndUpdate(id2,{$set:{class1:class1}},function(err,voc){


Report2.find({subjectCode:subjectCode,year:year,type:"Final Exam"},function(er,hocs){
res.render('clerkAdminRecords/filesTermly',{year:year,listX:hocs,id:id,pro:pro,id2:id2,id3:id3,teacherName:teacherName,subject:subject,class1:class1})
})

})
})
})
}
})
})


router.get('/downloadMonthlyReport/:id',isLoggedIn,records,function(req,res){
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

})


router.get('/downloadTermlyReport/:id',isLoggedIn,records,function(req,res){
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

})


router.get('/openTermlyReport/:id',(req,res)=>{
var fileId = req.params.id
const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {


  const readStream = bucket.openDownloadStream(files[0]._id);
      readStream.pipe(res);

})
//gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})




router.get('/openMonthlyReports/:id',(req,res)=>{
var fileId = req.params.id
  const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
  gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
  

    const readStream = bucket.openDownloadStream(files[0]._id);
        readStream.pipe(res);

  })
 //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
})


router.get('/teacherSubList',isLoggedIn,records, (req, res) => {
   var pro = req.user

  TeacherSub.find({},(err, docs) => {
      if (!err) {
          res.render("clerkRecords/teacherSubList", {
             list:docs, pro:pro
            
          });
      }
  });
});    








router.get('/category',isLoggedIn,records, function(req,res){
  var pro = req.user
  res.render('subject/category',{pro:pro})
})

router.post('/category',isLoggedIn,  function(req,res){
     var pro = req.user
  var name = req.body.name;

 
      req.check('name','Enter Category').notEmpty();

    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('subject/category',{ errors:req.session.errors,pro:pro})
      
    }
    else{
      
        ExpCategory.findOne({'name':name})
        .then(dept =>{
            if(dept){ 
  
           req.session.message = {
            type:'errors',
             message:'Category already exists'
           }     
              res.render('subject/category', {
                 message:req.session.message ,pro:pro
              })
            }else
    
      var dep = new ExpCategory();
    
      dep.name = name;
    
     
   
    
    
      dep.save()
        .then(dep =>{
         
          req.session.message = {
            type:'success',
            message:'Category added'
          }  
          res.render('subject/category',{message:req.session.message,pro:pro});
      
    
      })
    
        .catch(err => console.log(err))
      
      
      })
    }
    
    
})

//allo month batch
router.get('/alloMonthBatchInc',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('incStat/alloMonthBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloMonthBatchInc',isLoggedIn,  function(req,res){
  var id =req.user._id
  var month = req.body.month
  var year = req.body.year
  var pro = req.user

    
    

  req.check('month','Enter  Month').notEmpty();
  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/clerk/alloMonthBatchInc');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
      Month.findOne({'month':month})
      .then(lock=>{
        if(lock){
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelMonth:month}},function(err,docs){

})
IncStatement.find({month:month,year:year},function(err,locs){
  for(var i = 0; i<locs.length;i++){
    let id = locs[i]._id
    IncStatement.findByIdAndRemove(id,function(err,vocs){

    })
  }
})

 
res.redirect('/clerk/incCat');
        
          
          
          
        }
      })

    

    
    }else{

      req.flash('danger', 'Month/Year dont exist');
 
      res.redirect('/clerk/alloMonthBatchInc');


    

    }
    
    })
    
  }
    })


router.get('/incCat',isLoggedIn,function(req,res){
  

  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var arrD = []
  let number1
  var arr16=[]
  var id = req.user._id

  /*ExpCategory.find(function(err,locs){
    //if(locs){
      for(var i = 0;i<locs.length;i++){

      
     let category = locs[i].name*/
  
  
     InvoiceSubBatch.find({year:year,month:month},function(err,docs) {
      if(docs){

    
      //.log(docs,'docs')
      for(var i = 0;i<docs.length;i++){
  //size = docs.length
     
          
         if(arrD.length > 0 && arrD.find(value => value.item == docs[i].item)){
                console.log('true')
               arrD.find(value => value.item == docs[i].item).total += docs[i].total;
               
              }else{
      arrD.push(docs[i])


          }
  
      
      }
 

    
    console.log(arrD,'arr')
    for(var i = 0;i< arrD.length;i++){

    

      var dep = new IncStatement();
    
      dep.category = arrD[i].item;
      dep.type = "Ancome";
      dep.month = month;
      dep.year = year;
      dep.total = arrD[i].total;
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{

        })

      }
    }


    for(var q = 0;q<arrD.length; q++){
      
      arr16.push(arrD[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr16) { number1 += arr16[z]; }



        var inc = new IncStatement();
    
        
        inc.type = "Ancome3";
        inc.month = month;
        inc.year = year;
        inc.style = "border: 1;"
        inc.total = number1
      
        //dep.category = arrD[i].category;
      
       
     
      
      
        inc.save()
          .then(dep =>{
    
          })


    var dep = new IncStatement();
    
    dep.category= "Income";
    dep.type = "Anc";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
      res.redirect('/clerk/expCat')
    })
      /*}
     
  })*/
  })
  





  router.get('/expCat',isLoggedIn,function(req,res){
  

    var m = moment()
    var year = req.user.hostelYear
    var month = req.user.hostelMonth
    var arrD = []
    let number1
    var arr16=[]
    var id = req.user._id
  
    /*ExpCategory.find(function(err,locs){
      //if(locs){
        for(var i = 0;i<locs.length;i++){
  
        
       let category = locs[i].name*/
    
    
      Expenses.find({year:year,month:month},function(err,docs) {
        if(docs){
  
      
        //.log(docs,'docs')
        for(var i = 0;i<docs.length;i++){
    //size = docs.length
       
            
           if(arrD.length > 0 && arrD.find(value => value.category == docs[i].category)){
                  console.log('true')
                 arrD.find(value => value.category == docs[i].category).totalExpense += docs[i].totalExpense;
                 
                }else{
        arrD.push(docs[i])
  
  
            }
    
        
        }
   
  
      
      console.log(arrD,'arr')
      for(var i = 0;i< arrD.length;i++){
  
      
  
        var dep = new IncStatement();
      
        dep.category = arrD[i].category;
        dep.type = "Expense";
        dep.month = month;
        dep.year = year;
        dep.totalExpense = arrD[i].totalExpense;
        //dep.category = arrD[i].category;
      
       
     
      
      
        dep.save()
          .then(dep =>{
  
          })
  
        }
      }
  
  
      for(var q = 0;q<arrD.length; q++){
        
        arr16.push(arrD[q].totalExpense)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr16) { number1 += arr16[z]; }
  
  
  
          var inc = new IncStatement();
      
          
          inc.type = "Expense3";
          inc.month = month;
          inc.year = year;
          inc.style = "border: 1;"
          inc.totalExpense = number1
        
          //dep.category = arrD[i].category;
        
         
       
        
        
          inc.save()
            .then(dep =>{
      
            })
  
  
      var dep = new IncStatement();
      
      dep.category= "Expenses";
      dep.style = "font-weight: bold"
      dep.type = "Expens";
      dep.month = month;
      dep.year = year;
    
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{
  
        })

        res.redirect('/clerk/profitLoss')
      })
        /*}
       
    })*/
    })







router.get('/profitLoss',function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth

  IncStatement.find({month:month,year:year,type:"Ancome3"},function(err,mocs){
    let income = mocs[0].total
  IncStatement.find({month:month,year:year,type:"Expense3"},function(err,pocs){
    let expenses = pocs[0].totalExpense

    //let net = income - expenses
    let net = mocs[0].total - pocs[0].totalExpense

    
    var dep = new IncStatement();
      
    dep.category= "Profit/Loss";
    dep.type = "Net";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
    dep.total = net
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
  })
  res.redirect('/clerk/euritIncome')
  })
})

  router.get('/euritIncome',isLoggedIn,function(req,res){
    //console.log(arrSingleUpdate,'arrSingleUpdate')
    var m = moment()
    let dateValue = m.valueOf()
    var mformat = m.format('L')
    var year = req.user.hostelYear
    var month = req.user.hostelMonth
    //var term = req.user.term
  
    //console.log(docs,'docs')
    
  IncStatement.find({month:month,year:year}).lean().sort({"type":1}).then(docs=>{
    const compile = async function (templateName, docs){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
    
    const html = await fs.readFile(filePath, 'utf8')
    
    return hbs.compile(html)(docs)
    
    };
    
    
    
    
    (async function(){
    
    try{
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
    headless: true,
    args: [
    "--disable-setuid-sandbox",
    "--no-sandbox",
    "--single-process",
    "--no-zygote",
    ],
    executablePath:
    process.env.NODE_ENV === "production"
      ? process.env.PUPPETEER_EXECUTABLE_PATH
      : puppeteer.executablePath(),
    });
    
    const page = await browser.newPage()
    
    
    
    //const content = await compile('report3',arr[uid])
    const content = await compile('euritIncome',docs)
    
    //const content = await compile('index',arr[code])
    
    await page.setContent(content, { waitUntil: 'networkidle2'});
    //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./public/incStatements/monthly/${year}/${month}/income_statement_${month}`+'.pdf'),
    format:"A4",
    /*width:'30cm',
    height:'21cm',*/
    //height: height + 'px',
    printBackground:true
    
    })

let filename = `income_statement_${month}`+'.pdf'

    var repo = new IncFiles();
   
    repo.filename = filename;
    repo.fileId = "null";
    repo.month = month;
    repo.year = year;
    
    console.log('done')
    
    repo.save().then(poll =>{

    })




    const file = await fs.readFile(`./public/incStatements/monthly/${year}/${month}/income_statement_${month}`+'.pdf');
    const form = new FormData();
    form.append("file", file,filename);
   //const headers = form.getHeaders();
    //Axios.defaults.headers.cookie = cookies;
    //console.log(form)
  await Axios({
      method: "POST",
    //url: 'https://portal.steuritinternationalschool.org/clerk/uploadMonthInc',
      url: 'http://localhost:9500/clerk/uploadMonthInc',
      headers: {
        "Content-Type": "multipart/form-data"  
      },
      data: form
    });
    
    
    req.flash('success', 'Income Statement Generated Successfully');
      
   res.redirect('/clerk/alloMonthBatchInc');
     
    
    }catch(e) {
    
    console.log(e)
    
    
    }
    
    
    }) ()
    
    
  })
    
   
    
    })
    
    



    router.post('/uploadMonthInc',upload.single('file'),(req,res,nxt)=>{
      var fileId = req.file.id
      console.log(fileId,'fileId')
      var filename = req.file.filename
      console.log(filename,'filename')
      IncFiles.find({filename:filename},function(err,docs){
  if(docs.length>0){
  
  
  
    //console.log(docs,'docs')
    let id = docs[0]._id
    IncFiles.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){
  
    })
  
  }
    res.redirect('/clerk/alloMonthBatchInc')
  
  
  })
  
    })
  



///annual

router.get('/alloYearBatchInc',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('incStat/alloYearBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloYearBatchInc',isLoggedIn,  function(req,res){
  var id =req.user._id
  var month = req.body.month
  var year = req.body.year
  var pro = req.user

    
    

  req.check('month','Enter  Month').notEmpty();
  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/clerk/alloYearBatchInc');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
      Month.findOne({'month':month})
      .then(lock=>{
        if(lock){
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelMonth:month}},function(err,docs){

})

 
res.redirect('/clerk/incYearCat');
        
          
          
          
        }
      })

    

    
    }else{

      req.flash('danger', 'Month/Year dont exist');
 
      res.redirect('/clerk/alloYearBatchInc');


    

    }
    
    })
    
  }
    })


router.get('/incYearCat',isLoggedIn,function(req,res){
  

  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var arrD = []
  let number1
  var arr16=[]
  var id = req.user._id

  /*ExpCategory.find(function(err,locs){
    //if(locs){
      for(var i = 0;i<locs.length;i++){

      
     let category = locs[i].name*/
  
  
     InvoiceSubBatch.find({year:year,month:month},function(err,docs) {
      if(docs){

    
      //.log(docs,'docs')
      for(var i = 0;i<docs.length;i++){
  //size = docs.length
     
          
         if(arrD.length > 0 && arrD.find(value => value.item == docs[i].item)){
                console.log('true')
               arrD.find(value => value.item == docs[i].item).total += docs[i].total;
               
              }else{
      arrD.push(docs[i])


          }
  
      
      }
 

    
    console.log(arrD,'arr')
    for(var i = 0;i< arrD.length;i++){

    

      var dep = new IncStatement();
    
      dep.category = arrD[i].item;
      dep.type = "Ancome";
      dep.month = month;
      dep.year = year;
      dep.total = arrD[i].total;
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{

        })

      }
    }


    for(var q = 0;q<arrD.length; q++){
      
      arr16.push(arrD[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr16) { number1 += arr16[z]; }



        var inc = new IncStatement();
    
        
        inc.type = "Ancome3";
        inc.month = month;
        inc.year = year;
        inc.style = "border: 1;"
        inc.total = number1
      
        //dep.category = arrD[i].category;
      
       
     
      
      
        inc.save()
          .then(dep =>{
    
          })


    var dep = new IncStatement();
    
    dep.category= "Income";
    dep.type = "Anc";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
      res.redirect('/clerk/expYearCat')
    })
      /*}
     
  })*/
  })
  





  router.get('/expYearCat',isLoggedIn,function(req,res){
  

    var m = moment()
    var year = req.user.hostelYear
    var month = req.user.hostelMonth
    var arrD = []
    let number1
    var arr16=[]
    var id = req.user._id
  
    /*ExpCategory.find(function(err,locs){
      //if(locs){
        for(var i = 0;i<locs.length;i++){
  
        
       let category = locs[i].name*/
    
    
      Expenses.find({year:year,month:month},function(err,docs) {
        if(docs){
  
      
        //.log(docs,'docs')
        for(var i = 0;i<docs.length;i++){
    //size = docs.length
       
            
           if(arrD.length > 0 && arrD.find(value => value.category == docs[i].category)){
                  console.log('true')
                 arrD.find(value => value.category == docs[i].category).totalExpense += docs[i].totalExpense;
                 
                }else{
        arrD.push(docs[i])
  
  
            }
    
        
        }
   
  
      
      console.log(arrD,'arr')
      for(var i = 0;i< arrD.length;i++){
  
      
  
        var dep = new IncStatement();
      
        dep.category = arrD[i].category;
        dep.type = "Expense";
        dep.month = month;
        dep.year = year;
        dep.totalExpense = arrD[i].totalExpense;
        //dep.category = arrD[i].category;
      
       
     
      
      
        dep.save()
          .then(dep =>{
  
          })
  
        }
      }
  
  
      for(var q = 0;q<arrD.length; q++){
        
        arr16.push(arrD[q].totalExpense)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr16) { number1 += arr16[z]; }
  
  
  
          var inc = new IncStatement();
      
          
          inc.type = "Expense3";
          inc.month = month;
          inc.year = year;
          inc.style = "border: 1;"
          inc.totalExpense = number1
        
          //dep.category = arrD[i].category;
        
         
       
        
        
          inc.save()
            .then(dep =>{
      
            })
  
  
      var dep = new IncStatement();
      
      dep.category= "Expenses";
      dep.style = "font-weight: bold"
      dep.type = "Expens";
      dep.month = month;
      dep.year = year;
    
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{
  
        })

        res.redirect('/clerk/profitLossYear')
      })
        /*}
       
    })*/
    })







router.get('/profitLossYear',function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth

  IncStatement.find({month:month,year:year,type:"Ancome3"},function(err,mocs){
    let income = mocs[0].total
  IncStatement.find({month:month,year:year,type:"Expense3"},function(err,pocs){
    let expenses = pocs[0].totalExpense

    //let net = income - expenses
    let net = mocs[0].total - pocs[0].totalExpense

    
    var dep = new IncStatement();
      
    dep.category= "Profit/Loss";
    dep.type = "Net";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
    dep.total = net
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
  })
  res.redirect('/clerk/euritYearIncome')
  })
})

  router.get('/euritYearIncome',isLoggedIn,function(req,res){
    //console.log(arrSingleUpdate,'arrSingleUpdate')
    var m = moment()
    let dateValue = m.valueOf()
    var mformat = m.format('L')
    var year = req.user.hostelYear
    var month = req.user.hostelMonth
    //var term = req.user.term
  
    //console.log(docs,'docs')
    
  IncStatement.find({year:year}).lean().sort({"type":1}).then(docs=>{
    const compile = async function (templateName, docs){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
    
    const html = await fs.readFile(filePath, 'utf8')
    
    return hbs.compile(html)(docs)
    
    };
    
    
    
    
    (async function(){
    
    try{
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
    headless: true,
    args: [
    "--disable-setuid-sandbox",
    "--no-sandbox",
    "--single-process",
    "--no-zygote",
    ],
    executablePath:
    process.env.NODE_ENV === "production"
      ? process.env.PUPPETEER_EXECUTABLE_PATH
      : puppeteer.executablePath(),
    });
    
    const page = await browser.newPage()
    
    
    t
    //const content = await compile('report3',arr[uid])
    const content = await compile('euritIncome',docs)
    
    //const content = await compile('index',arr[code])
    
    await page.setContent(content, { waitUntil: 'networkidle2'});
    //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./public/incStatements/annual/${year}/income_statement_${year}`+'.pdf'),
    format:"A4",
    /*width:'30cm',
    height:'21cm',*/
    //height: height + 'px',
    printBackground:true
    
    })
    
let filename = `income_statement_${year}`+'.pdf'

    var repo = new IncFiles();
   
    repo.filename = filename;
    repo.fileId = "null";
   
    repo.year = year;
    
    console.log('done')
    
    repo.save().then(poll =>{

    })




    const file = await fs.readFile(`./public/incStatements/annual/${year}/income_statement_${year}`+'.pdf');
    const form = new FormData();
    form.append("file", file,filename);
   //const headers = form.getHeaders();
    //Axios.defaults.headers.cookie = cookies;
    //console.log(form)
  await Axios({
      method: "POST",
    //url: 'https://portal.steuritinternationalschool.org/clerk/uploadMonthInc',
      url: 'http://localhost:9500/clerk/uploadYearInc',
      headers: {
        "Content-Type": "multipart/form-data"  
      },
      data: form
    });
    
    
    req.flash('success', 'Income Statement Generated Successfully');
      
   res.redirect('/clerk/alloYearInc');
     
    
    }catch(e) {
    
    console.log(e)
    
    
    }
    
    
    }) ()
    
    
  })
    
   
    
    })
    
    



    router.post('/uploadYearInc',upload.single('file'),(req,res,nxt)=>{
      var fileId = req.file.id
      console.log(fileId,'fileId')
      var filename = req.file.filename
      console.log(filename,'filename')
      IncFiles.find({filename:filename},function(err,docs){
  if(docs.length>0){
  
  
  
    //console.log(docs,'docs')
    let id = docs[0]._id
    IncFiles.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){
  
    })
  
  }
    res.redirect('/clerk/alloYearBatchInc')
  
  
  })
  
    })
  




//termly

router.get('/alloTermlyBatchInc',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('incStat/alloYearBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloTermlyBatchInc',isLoggedIn,  function(req,res){
  var id =req.user._id
  var term = req.body.term
  var year = req.body.year
  var pro = req.user

    
    

  req.check('term','Enter  Term').notEmpty();
  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/clerk/alloTermBatchInc');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
     /* Month.findOne({'month':month})
      .then(lock=>{
        if(lock){*/
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelTerm:term}},function(err,docs){

})

 
res.redirect('/clerk/incTermCat');
        
          
          
          
        /*}
      })*/

    

    
    }else{

      req.flash('danger', 'Month/Year dont exist');
 
      res.redirect('/clerk/alloTermBatchInc');


    

    }
    
    })
    
  }
    })


router.get('/incTermCat',isLoggedIn,function(req,res){
  

  var m = moment()
  var year = req.user.hostelYear
  var term= req.user.hostelTerm
  var arrD = []
  let number1
  var arr16=[]
  var id = req.user._id

  /*ExpCategory.find(function(err,locs){
    //if(locs){
      for(var i = 0;i<locs.length;i++){

      
     let category = locs[i].name*/
  
  
     InvoiceSubBatch.find({year:year,term:term},function(err,docs) {
      if(docs){

    
      //.log(docs,'docs')
      for(var i = 0;i<docs.length;i++){
  //size = docs.length
     
          
         if(arrD.length > 0 && arrD.find(value => value.item == docs[i].item)){
                console.log('true')
               arrD.find(value => value.item == docs[i].item).total += docs[i].total;
               
              }else{
      arrD.push(docs[i])


          }
  
      
      }
 

    
    console.log(arrD,'arr')
    for(var i = 0;i< arrD.length;i++){

    

      var dep = new IncStatement();
    
      dep.category = arrD[i].item;
      dep.type = "Ancome";
      dep.month = month;
      dep.year = year;
      dep.total = arrD[i].total;
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{

        })

      }
    }


    for(var q = 0;q<arrD.length; q++){
      
      arr16.push(arrD[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr16) { number1 += arr16[z]; }



        var inc = new IncStatement();
    
        
        inc.type = "Ancome3";
        inc.month = month;
        inc.year = year;
        inc.style = "border: 1;"
        inc.total = number1
      
        //dep.category = arrD[i].category;
      
       
     
      
      
        inc.save()
          .then(dep =>{
    
          })


    var dep = new IncStatement();
    
    dep.category= "Income";
    dep.type = "Anc";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
      res.redirect('/clerk/exTermCat')
    })
      /*}
     
  })*/
  })
  





  router.get('/expTermCat',isLoggedIn,function(req,res){
  

    var m = moment()
    var year = req.user.hostelYear
    var term = req.user.hostelTerm
    var arrD = []
    let number1
    var arr16=[]
    var id = req.user._id
  
    /*ExpCategory.find(function(err,locs){
      //if(locs){
        for(var i = 0;i<locs.length;i++){
  
        
       let category = locs[i].name*/
    
    
      Expenses.find({year:year,term:term},function(err,docs) {
        if(docs){
  
      
        //.log(docs,'docs')
        for(var i = 0;i<docs.length;i++){
    //size = docs.length
       
            
           if(arrD.length > 0 && arrD.find(value => value.category == docs[i].category)){
                  console.log('true')
                 arrD.find(value => value.category == docs[i].category).totalExpense += docs[i].totalExpense;
                 
                }else{
        arrD.push(docs[i])
  
  
            }
    
        
        }
   
  
      
      console.log(arrD,'arr')
      for(var i = 0;i< arrD.length;i++){
  
      
  
        var dep = new IncStatement();
      
        dep.category = arrD[i].category;
        dep.type = "Expense";
        dep.month = month;
        dep.year = year;
        dep.totalExpense = arrD[i].totalExpense;
        //dep.category = arrD[i].category;
      
       
     
      
      
        dep.save()
          .then(dep =>{
  
          })
  
        }
      }
  
  
      for(var q = 0;q<arrD.length; q++){
        
        arr16.push(arrD[q].totalExpense)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr16) { number1 += arr16[z]; }
  
  
  
          var inc = new IncStatement();
      
          
          inc.type = "Expense3";
          inc.month = month;
          inc.year = year;
          inc.style = "border: 1;"
          inc.totalExpense = number1
        
          //dep.category = arrD[i].category;
        
         
       
        
        
          inc.save()
            .then(dep =>{
      
            })
  
  
      var dep = new IncStatement();
      
      dep.category= "Expenses";
      dep.style = "font-weight: bold"
      dep.type = "Expens";
      dep.month = month;
      dep.year = year;
    
      //dep.category = arrD[i].category;
    
     
   
    
    
      dep.save()
        .then(dep =>{
  
        })

        res.redirect('/clerk/profitLossTerm')
      })
        /*}
       
    })*/
    })







router.get('/profitLossYear',function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm

  IncStatement.find({term:term,year:year,type:"Ancome3"},function(err,mocs){
    let income = mocs[0].total
  IncStatement.find({term:term,year:year,type:"Expense3"},function(err,pocs){
    let expenses = pocs[0].totalExpense

    //let net = income - expenses
    let net = mocs[0].total - pocs[0].totalExpense

    
    var dep = new IncStatement();
      
    dep.category= "Profit/Loss";
    dep.type = "Net";
    dep.style = "font-weight: bold"
    dep.month = month;
    dep.year = year;
    dep.total = net
  
    //dep.category = arrD[i].category;
  
   
 
  
  
    dep.save()
      .then(dep =>{

      })
  })
  res.redirect('/clerk/euritTermIncome')
  })
})

  router.get('/euritTermIncome',isLoggedIn,function(req,res){
    //console.log(arrSingleUpdate,'arrSingleUpdate')
    var m = moment()
    let dateValue = m.valueOf()
    var mformat = m.format('L')
    var year = req.user.hostelYear
    var term = req.user.hostelTerm
    //var term = req.user.term
  
    //console.log(docs,'docs')
    
  IncStatement.find({term:term,year:year}).lean().sort({"type":1}).then(docs=>{
    const compile = async function (templateName, docs){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
    
    const html = await fs.readFile(filePath, 'utf8')
    
    return hbs.compile(html)(docs)
    
    };
    
    
    
    
    (async function(){
    
    try{
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
    headless: true,
    args: [
    "--disable-setuid-sandbox",
    "--no-sandbox",
    "--single-process",
    "--no-zygote",
    ],
    executablePath:
    process.env.NODE_ENV === "production"
      ? process.env.PUPPETEER_EXECUTABLE_PATH
      : puppeteer.executablePath(),
    });
    
    const page = await browser.newPage()
    
    
    t
    //const content = await compile('report3',arr[uid])
    const content = await compile('euritIncome',docs)
    
    //const content = await compile('index',arr[code])
    
    await page.setContent(content, { waitUntil: 'networkidle2'});
    //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./public/incStatements/termly/${year}/${term}/income_statement_term_${term}`+'.pdf'),
    format:"A4",
    /*width:'30cm',
    height:'21cm',*/
    //height: height + 'px',
    printBackground:true
    
    })
    
     
let filename = `income_statement_term_${term}`+'.pdf'

var repo = new IncFiles();

repo.filename = filename;
repo.fileId = "null";
repo.term = term
repo.year = year;

console.log('done')

repo.save().then(poll =>{

})




const file = await fs.readFile(`./public/incStatements/termly/${year}/${term}/income_statement_term_${term}`+'.pdf');
const form = new FormData();
form.append("file", file,filename);
//const headers = form.getHeaders();
//Axios.defaults.headers.cookie = cookies;
//console.log(form)
await Axios({
  method: "POST",
//url: 'https://portal.steuritinternationalschool.org/clerk/uploadMonthInc',
  url: 'http://localhost:9500/clerk/uploadTermInc',
  headers: {
    "Content-Type": "multipart/form-data"  
  },
  data: form
});


req.flash('success', 'Income Statement Generated Successfully');
  
res.redirect('/clerk/alloTermInc');
 

}catch(e) {

console.log(e)


}


}) ()


})



})





router.post('/uploadTermInc',upload.single('file'),(req,res,nxt)=>{
  var fileId = req.file.id
  console.log(fileId,'fileId')
  var filename = req.file.filename
  console.log(filename,'filename')
  IncFiles.find({filename:filename},function(err,docs){
if(docs.length>0){



//console.log(docs,'docs')
let id = docs[0]._id
IncFiles.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){

})

}
res.redirect('/clerk/alloTermBatchInc')


})

})

router.get('/incFiles',isLoggedIn,function(req,res){
  var pro = req.user
  res.render('incReg/file',{pro:pro})
})



  router.get('/folderIncReg',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.user._id
   
  
            res.render('incReg/folders2',{pro:pro,id:id,})
   
  })


  router.get('/folderYearIncReg/',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var arr = []
  
   /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){
  
    })*/
  
  
    Year.find({}).sort({year:1}).then(docs=>{
       
            res.render('incReg/fileClass2',{listX:docs,pro:pro})
  
          
    })
  })


//files
router.get('/viewAnnualIncFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  
Year.findById(id,function(err,loc){
  if(loc){


  let year = loc.year
  

   IncFiles.find({year:year},function(err,docs){
     if(docs){

   



res.render('incReg/files2',{listX:docs,year:year,pro:pro,id:id})
}
})
    
}
  })

})
//download voucher annual file
router.get('/downloadAnnualIncReport/:id',(req,res)=>{
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



router.get('/openAnnualIncReport/:id',(req,res)=>{
  var fileId = req.params.id
    const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
    gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
    
  
      const readStream = bucket.openDownloadStream(files[0]._id);
          readStream.pipe(res);
  
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })



//termly


router.get('/folderTermIncReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('incReg/fileClass3',{listX:docs,pro:pro})

        
  })
})

//



//////x2

router.get('/incSelectTermFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })


     
          res.render('incReg/term',{pro:pro,year:id})

        
  
})


////view files
router.get('/viewTermlyIncFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var year = req.user.hostelYear
  

  

   IncFiles.find({year:year,term:id},function(err,docs){
     if(docs){

   



res.render('incReg/filesTerm',{listX:docs,pro:pro,id:id,year:year})
}
})
    


})
//


//download voucher annual file

  
router.get('/downloadTermlyIncReport/:id',(req,res)=>{
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




router.get('/openTermlyIncReport/:id',(req,res)=>{
  var fileId = req.params.id
    const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
    gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
    
  
      const readStream = bucket.openDownloadStream(files[0]._id);
          readStream.pipe(res);
  
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })







//monthly

router.get('/folderMonthlyIncReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('incReg/fileMonthly',{listX:docs,pro:pro})

        
  })
})


////
router.get('/incSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('incReg/month',{pro:pro,listX:docs,id:id})

  })
  
})

router.get('/viewMonthlyIncFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user

  var year = req.user.hostelYear

  

   IncFiles.find({year:year,month:id},function(err,docs){
     if(docs){

   



res.render('incReg/filesMonth',{listX:docs,pro:pro,id:id,year:year})
}
})
    


})


  
router.get('/downloadMonthlyIncReport/:id',(req,res)=>{
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




router.get('/openMonthlyIncReport/:id',(req,res)=>{
  var fileId = req.params.id
    const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
    gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
    
  
      const readStream = bucket.openDownloadStream(files[0]._id);
          readStream.pipe(res);
  
    })
   //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
  })


//attendance repo

  router.get('/folderRegFiles',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var class1 = req.user.class1
    var arr = []
    var m = moment()
      var year = m.format('YYYY')
   
      res.render('attRepo/fileAssgt2',{id:id,pro:pro,class1:class1})
  
  
    
  })
  
  router.get('/classAtt',isLoggedIn,function(req,res){
    var pro = req.user
  
    Class1.find({},function(err,docs){
      res.render('attRepo/folders',{listX:docs,pro:pro})
  
    })
  
  })
  router.get('/typeFolderClassMonthlyRegFiles/:id',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var arr = []
    var m = moment()
      var year = m.format('YYYY')
    User.findByIdAndUpdate(uid,{$set:{class1:id}},function(err,locs){
  
    })
  
    Month.find({}).sort({num:1}).then(docs=>{
       
            res.render('attRepo/month',{pro:pro,listX:docs,id:id})
  
    })
    
  })
  
  
  
  
  
  
  
  router.get('/typeFolderMonthlyRegFiles/:id',isLoggedIn,function(req,res){
    var arr = []
    var month = req.params.id
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
     var term = req.user.term
     var m = moment()
     var pro = req.user
     var class1 = req.user.class1
     var year = m.format('YYYY')
  
     var date = req.user.invoCode
   ReportAtt.find({year:year,month:month,class1:class1},function(err,docs){
       if(docs){
   
     
        let arr=[]
        for(var i = docs.length - 1; i>=0; i--){
    
          arr.push(docs[i])
        }
   
   
   res.render('attRepo/filesTerm2',{listX:arr,class1:class1,month:month,pro:pro,year:year,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
   }
   })
      
   })
   
  
  
  
  router.get('/typeFolderDailyRegFiles/',isLoggedIn,function(req,res){
   var arr = []
   var errorMsg = req.flash('danger')[0];
   var successMsg = req.flash('success')[0];
    var term = req.user.term
    var m = moment()
    var pro = req.user
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var date = req.user.invoCode
  ReportAtt.find({year:year,date:date},function(err,docs){
      if(docs){
  
    
       let arr=[]
       for(var i = docs.length - 1; i>=0; i--){
   
         arr.push(docs[i])
       }
  
  
  res.render('attRepo/filesTerm',{listX:arr,pro:pro,year:year,term:term,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
  }
  })
     
  })
  
  
  
  router.get('/downloadDailyAttReport/:id',(req,res)=>{
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
  
  
  
  router.get('/openDailyAttReport/:id',(req,res)=>{
    var fileId = req.params.id
      const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
      gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
      
    
        const readStream = bucket.openDownloadStream(files[0]._id);
            readStream.pipe(res);
    
      })
     //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
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

function adminX(req,res,next){
  if(req.user.role == "clerk"){
    return next()
  }
  res.render('errors/access')
  }  

function clerk(req,res,next){
    if(req.user.role == "clerk"){
      return next()
    }
    res.render('errors/access')
    }  



    function records(req,res,next){
      if(req.user.role == "clerk"){
        return next()
      }
      res.render('errors/access')
      }  