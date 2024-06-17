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
var InvoiceSubBatch = require('../models/invoiceSubBatch');
var InvoiceCode = require('../models/invoiceCode');
var InvoCode = require('../models/invoCode');
var InvoiceSubFile = require('../models/invoiceSubFile');
var InvoNum = require('../models/invoNum');
var RecNum = require('../models/recNum');
var Receipt = require('../models/receipt');
var InvoiceFiles = require('../models/invoiceFiles');
var InvoiceFile = require('../models/invoiceFile');
var ReceiptFile = require('../models/receiptFile');
var Category = require('../models/category');
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
const fs = require('fs-extra')
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
var moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
const { countReset } = require('console');

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
const arrReceipt = {}
const arrSub = {}
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

const mongoURI = process.env.MONGO_URL ||'mongodb://0.0.0.0:27017/smsDB';

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
  
  
  
      
      




router.get('/pollCheck',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var companyId = req.user.companyId


User.find({companyId:companyId,role:"student"},function(err,docs){
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
    res.redirect('/clerk/adminMonthInc')
  })
  })
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

  
  router.get('/dashX',isLoggedIn,function(req,res){
    var pro = req.user
      res.render('dashboard/clerk',{pro:pro})
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
            
          res.redirect('/msg')
          })
          
          })
          
          
          
          
          
          
          
          
          
          
          
          
          router.get('/msg',isLoggedIn,function(req,res){
          var id = req.user.id
          const list2 =[]
          const list = []
          var num
           
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
          res.render('clerkMess/inbox',{list:list, num:num})
          })
          
          })
          
          
          
          
          
          //on click dashboard icon & msg redirect
          router.post('/msg/:id',function(req,res){
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
          res.redirect('/sent')
          })
          
          })
          
          
          
          
          
          router.get('/sent',isLoggedIn,function(req,res){
          var id = req.user.id
          const list2 =[]
          const list = []
          var num
           
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
          
          
          res.render('clerkMess/sent',{list:list, num:num})
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
          res.redirect('/archive')
          
          })
          
          })
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          router.get('/archive',isLoggedIn,function(req,res){
          var id = req.user.id
          const list2 =[]
          const list = []
          var num
          
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
          
          res.render('clerkMess/sent',{list:list, num:num})
                 
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
          
          
            router.get('/comp',isLoggedIn,  function(req,res){
              res.render('clerkMess/compose')
            })
          
           
            router.post('/userX',isLoggedIn,function(req,res){
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
          res.redirect('/sentX')
          })
          
          
          
          
          
          })
          
          router.get('/reply/:id', isLoggedIn, function(req,res){
          var id = req.params.id
          var uid = req.user._id
          console.log(id,'id')
          var arr = []
          Message.find({msgId:id,status:'sent'},function(err,tocs){
          arr.push(tocs[0].senderEmail)
          let sub = tocs[0].subject
          Message.find({msgId:id,status:'reply',recepientId:uid},function(err,docs){
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
          
          res.render('messages/reply',{list:docs,id:id, arr:arr, subject:sub})
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
          
          Message.findById({msgId:id, status:'sent'},function(err,docs){
          
          
          
          
          
          
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
          Message.find({msgId:id,status:'sent'},function(err,tocs){
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
          
          
          })
          })
          
          
          
          
          





router.get('/invoice2',function(req,res){
  res.render('accounts/receipt2')
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
      path:(`./invoiceReports/${year}/${code}`+'.pdf'),
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

   



res.render('invoiceFolderReg/filesTerm',{listX:docs,pro:pro,code:id,year:year,term:term,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
}
})
    


})
//


//download voucher annual file

router.get('/downloadTermlyInvoiceReport/:id',isLoggedIn,function(req,res){
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
  

  

  InvoiceFile.find({year:year,month:id,type1:"single"},function(err,docs){
     if(docs){

   



res.render('invoiceMonthlyFolderReg/filesMonth',{listX:docs,pro:pro,id:id,year:year,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
}
})
    


})



router.get('/downloadMonthlyInvoiceReport/:id',isLoggedIn,function(req,res){
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




router.get('/emailMonthlyInvoiceFile/:id',isLoggedIn,function(req,res){
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
     let month = doc.month
   
     
 
 
 
 
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
  
res.redirect('/clerk/viewMonthlyInvoiceFile/'+month)
     }else{
       console.log('Email sent successfully',uid)
       req.flash('success', 'Email sent successfully');
  
res.redirect('/clerk/viewMonthlyInvoiceFile/'+month)
     }
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
  

  

  Receipt.find({year:year,month:id},function(err,docs){
     if(docs){

   



res.render('receiptMonthlyFolderReg/filesMonth',{listX:docs,pro:pro,id:id,year:year,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
}
})
    


})



router.get('/downloadMonthlyReceiptReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')

  var mformat = m.format('L')
  Receipt.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
    //res.download( './public/uploads/'+name, name)
 
    res.download( './receiptReports/'+year+'/'+term+'/'+name, name)
  })  

})




router.get('/emailMonthlyReceiptFile/:id',isLoggedIn,function(req,res){
  var code = req.params.id
  
  Receipt.findById(req.params.id,function(err,doc){
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
           filename:uid+'_'+name+'_'+'Receipt'+'.pdf',
           path:`./receiptReports/${year}/${term}/${invoNumber}_${name}.pdf`
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
  
      Fees.find({studentId:uid},function(err,locs){
        res.render('acc2/subjects3',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })
  
  router.get('/studentInvoices/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      InvoiceFile.find({studentId:uid},function(err,locs){
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
    path:(`./invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
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
        path:(`./invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
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
           path:`./invoiceReports/${year}/${term}/${uid}_${name}.pdf`
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
      path:(`./invoiceReports/${year}/${term}/${uid}_${name}`+'.pdf'),
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
let amount = req.body.amountX
let amountX2 = req.body.amountX
let amountX3 = 0 - amountX2
let amountX4 = req.body.amountX
let class1 = req.body.class1
let grade = req.body.grade
let status, balance
var receiptNumber = req.user.recNumber
console.log(ar,'iwee')


req.check('amountX','Enter Amount').notEmpty();
             

var errors = req.validationErrors();

if (errors) {
  
  req.session.errors = errors;
  req.session.success = false;
  req.flash('danger', req.session.errors[0].msg);


  res.redirect('/clerk/invoice');

}
let newBalance = studentBalance - amountX4
for(var i = 0; i<ar.length;i++){
  console.log(ar[i])
  let id = ar[i]

  InvoiceFile.findById(id,function(err,doc){
    let amountDue = doc.amountDue 
    let invoiceNumber = doc.invoiceNumber
    if(amount >= amountDue){
       status = 'paid'
      balance = 0

      InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amountDue,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success"}},function(err,docs){

      })
     // amount = amount - amountDue
    }else{
      status = 'unpaid'
      balance = amountDue - amount
    

      InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amount,amountDue:balance,status:'unpaid',receiptNumber:receiptNumber}},function(err,docs){

      })
      

    }
    amount = amount - amountDue
    if(amount < 0 ){
      amount = 0
    }

   



  
          
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
receipt.filename = receiptNumber+'_'+studentName;
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
receipt.amountPaid = amountX3;
receipt.remainingBalance = amount;
receipt.datePaid = date;


receipt.save()
  .then(user =>{
   
   
 

  })
   // InvoiceFile.findByIdAndUpdate(id,{$set:{}})
  })
}
  res.redirect('/clerk/arrReceipt')
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
  path:(`./receiptReports/${year}/${term}/${receiptNumber}_${studentName}`+'.pdf'),
  /*format:"A4",
  width:'30cm',
  height:'21cm',*/
  height: height + 'px',
    printBackground:true
  
  })
  
  console.log('pdf successful')

  res.redirect('/clerk/genEmailReceipt')
  
 
  
  /*await browser.close()
  
  process.exit()*/
 
  
  
  }catch(e) {
  
  console.log(e)
  
  
  }
  
  
  }) ()
  
  
  
  
  //
  
  
  
  
  
  
  
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
    let studentName = arrReceipt[code][0].studentName
    let studentEmail = arrReceipt[code][0].studentEmail
    let studentId = arrReceipt[code][0].studentId
    let receiptNumber = arrReceipt[code][0].receiptNumber
    let year = arrReceipt[code][0].year
    let term = arrReceipt[code][0].term
    let amount = arrReceipt[code][0].amountPaid
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

       User.find({uid:studentId},async function(err,docs){
   
      for(var i = 0;i<docs.length;i++){
        let email = docs[i].email
        let uid = docs[i].uid
        let name = docs[i].fullname
      //  let invoNumber = docs[i].invoNumber 
      
     let mailOptions ={
       from: '"St Eurit International School" <admin@steuritinternationalschool.org>', // sender address
                   to:email, // list of receivers
                   subject: `Your Payment  Receipt from ST. EURIT INTERNATIONAL SCHOOL `,
       html:`Dear ${name}: <br> <br> Your Payment  Receipt ${receiptNumber} for ${amount} is attached . <br> <br> Thank you for your business - we appreciate it very much. <br> <br>
       Sincerely <br> ST.EURIT INTERNATIONAL SCHOOL`,
       attachments: [
         {
           filename:uid+'_'+name+'_'+'Receipt'+'.pdf',
           path:`./receiptReports/${year}/${term}/${receiptNumber}_${studentName}.pdf`
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

    }
  })
    }catch(e) {
    
      console.log(e)
    
    
    }
  
    
    }) ()
  
   
    
   
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

//role admin
//this route autopopulates info of the title selected from the autompleteX route
  router.post('/autoXN',function(req,res){
      var code = req.body.code

  
      
     
      Product.find({item:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
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

   

    router.post('/autoInvo',function(req,res){
      var code = req.body.code
      var term = req.body.term
var c = {type:" ",invoiceNumber:"",_id:"",amountDue:"0.00"} 
  
      
     
   // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
      InvoiceFile.find({studentId:code,term:term}).lean().sort({code:1}).then(docs=>{
        docs.push(c)
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



    router.post('/autoInvo2',function(req,res){
      var code =1
      var c = {type:" ",invoiceNumber:"",_id:"",amountDue:"0.00"} 
        
            
           
         // InvoiceFile.find({term:code,/*code:uid*/datePaid:"now"},function(err,docs){
            InvoiceFile.find({term:code,/*code:"ST3104",*/datePaid:"now"}).lean().sort({code:1}).then(docs=>{
              docs.push(c)
           if(docs == undefined){
             res.redirect('/')
           }else
      
              res.send(docs)
            })
          
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
    path:(`./invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf'),
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
  
  




  router.get('/studentInvoice', isLoggedIn,function(req,res){
    var pro = req.user
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
    res.render('acc2/singleInvoice',{successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg,pro:pro,companyAddress:companyAddress,
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
    var date = req.body.invoice_date
    var dueDate = req.body.invoice_due_date
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
  req.check('description2','Enter Description').notEmpty();
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
  book.invoiceDescription = description
  book.status = 'not saved'
  book.invoiceCode = invoNumber
  book.invoiceId = invoNumber
  book.type = "Invoice"
  book.month = month
  book.year = year
  book.grade =  grade
  book.class = class1
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

InvoiceSubBatch.findByIdAndUpdate(pId,{$set:{qty:qty,price:price,total:total,item:item}},function(err,ocs){
      
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
          InvoiceSubBatch.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){
  
          })

          User.findByIdAndUpdate(id2,{$set:{balance:balance}},function(err,docs){

          })
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
  
  
  
  
  
  
  router.get('/invoiceSingleGeneration2',isLoggedIn,function(req,res){
  
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
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
  let term = arrSingle[uid][0].term
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
  
           
  await page.emulateMediaType('screen')
  let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./invoiceReports/${year}/${term}/${invoiceNumber}_${studentName}`+'.pdf'),
  /*format:"A4",
  width:'30cm',
  height:'21cm',*/
  height: height + 'px',
    printBackground:true
  
  })
  
  
  
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
  repo.description = description
  repo.date = date
  repo.type = type
  repo.type1 = "single"
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
  
  /*process.exit()*/
req.flash('success', 'Invoice Generation Successful');
  
  res.redirect('/clerk/invoiceSingleCode');
  
  
  }catch(e) {
  
  console.log(e)
  
  
  }
  
  
  }) ()
  
  
  
  
  //res.redirect('/hostel/discList')
  
  })
  
  








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




module.exports = router;



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  else{
      res.redirect('/')
  }
}



function clerk(req,res,next){
    if(req.user.role == "clerk"){
      return next()
    }
    res.render('errors/access')
    }  