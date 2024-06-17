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
var InvoiceCode = require('../models/invoiceCode');
var InvoiceFiles = require('../models/invoiceFiles');
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
        fees.receiptNumber = receiptNumber;
 
      
      
      
        fees.save()
          .then(fee =>{
            User.find({uid:uid},function(err,docs){
              let parentEmail =docs[0].parentEmail
             User.findByIdAndUpdate(xId,{$set:{studentId:studentId,amount:amount,receiptNumber:receiptNumber,paymentCode:fee._id,parentEmail:parentEmail}},function(err,gocs){
            
  
  console.log('xId',xId)
  
              balance = docs[0].balance;
              newBalance = balance + fees.amount;
  
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

    
var m = moment()
var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  var studentId = req.user.studentId
 // console.log(arr,'arr')
/*console.log(arr,'iiii')*/

//User.findById(studentId,function(err,docs){
  User.findById(studentId).lean().then(docs=>{
let uid = docs.uid
console.log(uid,'uid')
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



const content = await compile('receipt3',docs)

await page.setContent(content, { waitUntil: 'networkidle0'});

 await page.setContent(content)
  //await page.setContent(content, { waitUntil: "domcontentloaded"});
//await page.addStyleTag({ path: `./public/hurlings/feesReceipt.css`});
//create a pdf document
//await page.setContent(html, { waitUntil: "domcontentloaded"});
await page.setContent(content, { waitUntil: 'networkidle2'});


//await page.addStyleTag({ path: './public/hurlings/feesReceipt.css'});
//create a pdf document

await page.pdf({
  path:(`./finance/${year}/${month}/${uid}`+'.pdf'),
format:"A4",
printBackground:true
})

console.log("Done creating pdf",uid)
res.redirect('/clerk/print')
/*await browser.close()

process.exit()*/

}catch(e) {

console.log(e)
}

}) ()


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



        
  
  
  
  
  
  

  
  
router.get('/subscriptions',isLoggedIn,function(req,res){
  var pro = req.user

  Subscriptions.find({},(err, docs) => {

  res.render('clerk/subscriptions1',{doc:docs[0],pro:pro})

  })
})

router.get('/startup',isLoggedIn,function(req,res){
  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var m = moment()
  var id  = req.user._id
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].startup
    pollCount = docs[0].startupCount
    duration = docs[0].startupDuration
     
      console.log(amount,'money')
 /*
  Subscriptions.find({},function(err,docs){
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
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
})
})

//startup A
router.get('/startupA',isLoggedIn,function(req,res){
  var m = moment()
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var id  = req.user._id

  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].startupA
    pollCount = docs[0].startupCount
    duration = docs[0].startupAduration
     
  
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
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount,duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
  })
})


//advanced Q
router.get('/advanced',isLoggedIn, function(req,res){
  var m = moment()
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var id  = req.user._id

  var count = 100
  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].advanced
    pollCount = docs[0].advancedCount
    duration = docs[0].advancedDuration
    
  
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
        poll.package = "Advanced Quartely Package"
        poll.date = date;
        poll.amount = amount
        poll.count = pollCount
        poll.duration = duration
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
  })
})

//advanced A
router.get('/advancedA',isLoggedIn, function(req,res){
  var m = moment()
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var id  = req.user._id
 
  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].advancedA
        pollCount = docs[0].advancedCount
        duration = docs[0].advancedAduration
     
  
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
        poll.package = "Advanced Quartely Package"
        poll.date = date;
        poll.amount = amount
        poll.count = pollCount
        poll.duration = duration
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
  })
})

//enterprise Q
router.get('/enterprise',isLoggedIn, function(req,res){
  var m = moment()
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var id  = req.user._id
 
  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].enterprise
    pollCount = docs[0].enterpriseCount
    duration = docs[0].enterpriseDuration
      
  
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
        poll.package = "Enterprise Quartely Package"
        poll.date = date;
        poll.amount = amount
        poll.count = pollCount
        poll.duration = duration
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount,duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
  })
})

//enterprise A
router.get('/enterpriseA',isLoggedIn, function(req,res){
  var m = moment()
  var companyId = req.user.companyId;
  var schoolName = req.user.schoolName;
  var date = moment().toString();
  var id  = req.user._id

  const { Paynow } = require("paynow");
  // Create instance of Paynow class
  let paynow = new Paynow(14808, "e351cf17-54bc-4549-81f2-b66feed63768");
  var amount , pollCount, duration
  Subscriptions.find({},function(err,docs){
    amount = docs[0].enterprise
    pollCount = docs[0].enterpriseCount
    duration = docs[0].enterpriseAduration
     
  
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
        poll.package = "Enterprise Annual Package"
        poll.date = date;
        poll.amount = amount
        poll.count = pollCount
        poll.duration = duration
        poll.save()
           .then(poll =>{
           
            User.findByIdAndUpdate(id,{$set:{pollUrl2:pollUrl,paynow:amount,pollCount:pollCount, duration:duration}},function(err,docs){
               
               
                 
               
            })
        



              res.redirect(link)
           })
    }
    else{
res.redirect('/clerk/subscriptions')
    }
  })
  })
})
  



router.get('/subsPoll',isLoggedIn, (req, res) => {
  var pro = req.user 
  var companyId = req.user.companyId 
  var set = moment()
  var m2 = moment(req.user.expStr)
  
  var msg ="Package Expired"
  var days=m2.diff(set,"days");
  console.log(days)
  var les = days<=0;
  console.log(les)
  var mor = days>0;
  Poll2.find({companyId:companyId}, (err, doc) => {
      if (!err) {
      
          res.render("clerk/subPoll", {
             
              list: doc, pro:pro, msg:msg, days:days, les:les, mor:mor
            
              
          });
        
      }
  });
  });

  
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


router.get('/addCables',isLoggedIn, function(req,res){

  var pro = req.user
 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
 res.render('abc/addCables',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
  //res.render('abc/addCables')
})

/*
router.post('/addCables',isLoggedIn,function(req,res){
  //var i =0
  //console.log(req.body,'num')
var num = req.body.num
num++
console.log(num,'num')
  for(var i = 0;i<num;i++){
    console.log(req.body,'body')
    console.log(req.body[`null-${i}`],'kranko')

    ar = req.body[`null-${i}`]
    //ar.filter(Boolean)
    console.log(ar,'arr')
    ar = ar.filter(v=>v!='')
    console.log(ar.length,'ar')
    if(ar.length > 2){

   
    let name = ar[0]
    let category = ar[1]
    let price = ar[2]

    
   
     Product.findOne({'name':name})
     .then(bk =>{
         if(bk){ 
       // req.session.errors = errors
         //req.success.user = false;
     
        i++
        
         
   }
   
                 else  {   


    
    var book = new Product();
    book.name = name
    book.category = category
    book.barcodeNumber = 'null'
    book.photo ='null'
    book.vatPrice = 0
    book.quantity = 0
    book.description = 'null'
   
    book.rate = 0
    book.zwl = 0
    book.price = price
   
    book.save()
              .then(title =>{
console.log(title,'title')

              })
            }
          })
  }

}    
  req.flash('success', 'Cable(s) added Successfully!');
 
  res.redirect('/clerk/addCables') 


ar = req.body[`null-${i}`]

console.log(ar.length)

})
*/


router.post('/addCables',isLoggedIn,function(req,res){
  //var i =0
  console.log(req.body,'num')
  ar = req.body['name[]']
  ar1 = req.body['category[]']
  ar2=req.body['price[]']
  console.log(typeof ar,'length')

 // ar = ar.filter(v=>v!='')
if(typeof ar != "string"){
  for(var i = 0; i<ar.length;i++){
   
    ar.filter(v=>v!='')
   
    //ar.filter(Boolean)
    console.log(ar,'arr')

    

    console.log(ar[i])
    let name = ar[i]
   

    
   
     Product.findOne({'name':name})
     .then(bk =>{
         if(bk){ 
       // req.session.errors = errors
         //req.success.user = false;
     
        i++
        
         
   }
   
                 else  {   


    
    var book = new Product();
    book.name = name
    book.category = ar1
    book.barcodeNumber = 'null'
    book.photo ='null'
    book.vatPrice = 0
    book.quantity = 0
    book.description = 'null'
   
    book.rate = 0
    book.zwl = 0
    book.price = ar2
    book.size = i
   
    book.save()
              .then(title =>{
console.log(title,'title')



let pId = title._id
console.log(pId,"idd")

let size = title.size

console.log(size,'size')
let category = ar1[size]
let price = ar2[size]
console.log(price,'price')
      Product.findByIdAndUpdate(pId,{$set:{category:category,price:price}},function(err,ocs){
      
      })

              })
                 }
          })
  

}  
}  else{
  console.log('ma horror')


  req.check('name','Enter Name of Product').notEmpty();
  req.check('category','Enter Category').notEmpty();
  req.check('price', 'Enter Price').notEmpty();

  
var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;

 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/addCables');

}
   else{
   
  var book = new Product();
  book.name = name
  book.category = ar1
  book.barcodeNumber = 'null'
  book.photo ='null'
  book.vatPrice = 0
  book.quantity = 0
  book.description = 'null'
 
  book.rate = 0
  book.zwl = 0
  book.price = ar2
  book.size = i
 
  book.save()
            .then(title =>{


            })
          }
}
  /*req.flash('success', 'Cable(s) added Successfully!');
 
  res.redirect('/clerk/addCables') */


/*ar = req.body[`null-${i}`]

console.log(ar.length)*/

})


/*

router.post('/addCables',isLoggedIn,function(req,res){
  //var i =0
  //console.log(req.body,'num')
var num = req.body.num
num++
console.log(num,'num')
  for(var i = 0;i<num;i++){
    console.log(req.body,'body')
    console.log(req.body[`null-${i}`],'kranko')

    ar = req.body[`null-${i}`]
    //ar.filter(Boolean)
    console.log(ar,'arr')
    ar = ar.filter(v=>v!='')
    console.log(ar.length,'ar')
    if(ar.length > 2){

   
    let name = ar[0]
    let category = ar[1]
    let price = ar[2]

    
   
     Product.findOne({'name':name})
     .then(bk =>{
         if(bk){ 
       // req.session.errors = errors
         //req.success.user = false;
     
        i++
        
         
   }
   
                 else  {   


    
    var book = new Product();
    book.name = name
    book.category = category
    book.barcodeNumber = 'null'
    book.photo ='null'
    book.vatPrice = 0
    book.quantity = 0
    book.description = 'null'
   
    book.rate = 0
    book.zwl = 0
    book.price = price
   
    book.save()
              .then(title =>{
console.log(title,'title')

              })
            }
          })
  }

}    
  req.flash('success', 'Cable(s) added Successfully!');
 
  res.redirect('/clerk/addCables') 


/*ar = req.body[`null-${i}`]

console.log(ar.length)

})
*/




 //importing teachers details from excel
  
 router.get('/importProducts',isLoggedIn, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Products"

  

  
 res.render('imports/products',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importProducts',isLoggedIn, uploadX.single('file'),function(req,res){
   var term = req.user.term;
   var m = moment()
   var year = m.format('YYYY')
   var id =   req.user._id
 
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
               res.render('imports/products', {message:req.session.message,pro:pro
                    
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
           let category = record.category;
           let price = record.price
           let vatPrice = record.vatPrice;
    





          req.body.name = record.name  
req.body.category = record.category
req.body.price = record.price 
req.body.vatPrice = record.vatPrice 

          

       req.check('name','Enter Product Name').notEmpty();
req.check('category','Enter Category').notEmpty();
0
req.check('price','Enter Price').notEmpty()
req.check('vatPrice','Enter VAT price ').notEmpty();
;
   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/clerk/importProducts');

}

else


           {
             Product.findOne({'category':category,'name':name})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Product already in the system');

                 res.redirect('/clerk/importProducts') 
 
                 //res.redirect('/records/import')
               
           }
           else





           var book = new Product();
           book.name = name
           book.category = category
           book.barcodeNumber = 'null'
           book.photo = "null";
           book.vatPrice = vatPrice
           book.quantity = 0
           book.description = 'null'
          
           book.rate = 0
           book.zwl = 0
           book.price = price
          
           book.save()
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
 
               res.redirect('/clerk/importProducts') 
     
       }
     }
 
 })



//productList


router.get('/productList',isLoggedIn,(req, res) => {
  var pro = req.user
  
  
   Product.find((err, docs) => {
       if (!err) {
           res.render("abc/list22", {
               listX: docs, pro:pro    
           });
       }
       else {
           console.log('Error in retrieving Student list :' + err);
       }
   });
 });

                         
router.get('/client', isLoggedIn,function(req,res){
  var pro = req.user
  res.render('abc/client',{pro:pro})
})



router.post('/client',isLoggedIn, function(req,res){
  var pro = req.user
  var clientName = req.body.clientName

  var clientEmail = req.body.clientEmail
  var clientAddress = req.body.clientAddress
  var city = req.body.city
  var country = req.body.country
  var mobile = req.body.mobile
        req.check('clientName','Enter Client Name').notEmpty();
            
               req.check('clientEmail','Enter Email').notEmpty();
               req.check('clientAddress','Address').notEmpty();
               req.check('city', 'Enter City').notEmpty();
               req.check('country', 'Enter Country').notEmpty();
               req.check('mobile', 'Enter Phone Number').notEmpty();

               var errors = req.validationErrors();
  
 if (errors) {
            
                     req.session.errors = errors;
                     req.session.success = false;
                     res.render('abc/client',{ errors:req.session.errors,pro:pro})
              
                 }

                 else
                 {
                  Client.findOne({'clientName':clientName})
                  .then(bk =>{
                      if(bk){ 
                    // req.session.errors = errors
                      //req.success.user = false;
                  
                     req.session.message = {
                       type:'errors',
                       message:'code/book already in the system'
                     }     
                     
                        res.render('abc/client', {
                            message:req.session.message, pro:pro   }) 
                     
                      
                }
                
                              else  {   
             

        
              
 
        
                var book = new Client();
                  book.clientName = clientName
                  book.clientEmail = clientEmail
                  book.clientAddress = clientAddress
                  book.city = city
                 
                  book.country = country
                  book.mobile = mobile
            
                      
                       
                        book.save()
                          .then(title =>{
                          
                            req.session.message = {
                              type:'success',
                              message:'Client added'
                            }  
                            res.render('abc/client',{message:req.session.message,pro:pro});
                          
                        
                        })
                         
                        
                      }
                        })
                      }
                        
                         });

  

                         router.get('/clientList',isLoggedIn,(req, res) => {
                          var pro = req.user
                          
                          
                           Client.find((err, docs) => {
                               if (!err) {
                                   res.render("abc/clientList", {
                                       listX: docs, pro:pro    
                                   });
                               }
                               else {
                                   console.log('Error in retrieving Student list :' + err);
                               }
                           });
                         });


                                             
router.get('/company', isLoggedIn,function(req,res){
  var pro = req.user
  res.render('abc/company',{pro:pro})
})



router.post('/company',isLoggedIn, function(req,res){
  var pro = req.user
  var clientName = req.body.companyName

  var clientEmail = req.body.companyEmail
  var clientAddress = req.body.companyAddress
  var city = req.body.companyCity
  var country = req.body.companyCountry
  var id = req.user._id
  //var mobile = req.body.mobile
        req.check('companyName','Enter Company Name').notEmpty();
            
               req.check('companyEmail','Enter Email').notEmpty();
               req.check('companyAddress','Address').notEmpty();
               req.check('companyCity', 'Enter City').notEmpty();
               req.check('companyCountry', 'Enter Country').notEmpty();
              

               var errors = req.validationErrors();
  
 if (errors) {
            
                     req.session.errors = errors;
                     req.session.success = false;
                     res.render('abc/company',{ errors:req.session.errors,pro:pro})
              
                 }

                 else{

          User.findByIdAndUpdate(id,{$set:{companyName:clientName,companyEmail:clientEmail,companyAddress:clientAddress,companyCity:city,companyCountry:country}},function(err,docs){

          })


               res.redirect('/clerk/company')
                 }

                
                       
                        
                         });
                         router.get('/viewBooks',isLoggedIn, (req, res) => {
                          var pro = req.user
                          Book.find({},(err, docs) => {
                              if (!err) {
                                  res.render("abc/list3", {
                                     list:docs,pro:pro
                                    
                                  });
                              }
                          });
                          });



//Autocomplete for student details when recording school fees
router.get('/autocompleteX/',isLoggedIn, function(req, res, next) {
  var code

    var regex= new RegExp(req.query["term"],'i');
   
    var bookFilter =Book.find({},{'code':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    bookFilter.exec(function(err,data){
   
 
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(book=>{
 
        
     
  
          
         let obj={
           id:book._id,
           label: book.code

       
     
       
         
          
  
           
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
      var code = req.body.code

  
      
     
      Book.find({code:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
      })
    
    
    })


router.get('/invoiceCode',isLoggedIn,function(req,res){
  var id = req.user._id
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
var prefix = req.user.prefix
var num = req.user.num

var code = prefix+num

var codex = new InvoiceCode();

codex.code = code
codex.mformat = mformat

     
             
codex.save()
.then(title =>{
  num++
User.findByIdAndUpdate(id,{$set:{invoCode:code,num:num}},function(err,docs){

})

res.redirect('/clerk/invoice')

})


})





router.get('/invoice', isLoggedIn,function(req,res){
  var pro = req.user
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var successMsg = req.flash('success')[0];
  res.render('abc/create',{successMsg: successMsg, noMessages: !successMsg,pro:pro,companyAddress:companyAddress,
  companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile})
})

/* router.post('/invoice',function(req,res){
console.log(req.body['name[]'],req.body['quantity[]'],req.body['price[]'])

})*/





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

/*router.get('/invoiceQ',isLoggedIn,function(req,res){
 var id = req.user._id
  var m2 = moment()
  var year = m2.format('YYYY')
  var month = m2.format('MMMM')
  var status = "not saved"
  var code = req.user.invoCode
  var item = req.query.item
  var qty = req.query.qty
  var price = req.query.price

  var total = price * qty
  var itemId=req.query.itemId
  var date = req.query.date
  var dueDate = req.query.dueDate
  var itemId = req.query.itemId
  var companyName = req.query.companyName
  var companyEmail = req.query.companyEmail
  var companyClerk = req.query.companyClerk
  //var notes = req.query.notes
  var clientName= req.query.clientName
  var clientEmail = req.query.clientEmail
  var invoiceDescription = req.query.invoiceDescription
  console.log(companyName,companyEmail,companyClerk,clientName,clientEmail,date,dueDate,'3333')
  
  var book = new InvoiceSub();
  book.item = item
  book.itemId = itemId
  book.qty = qty
  book.price = price
  book.total = total
  book.companyName = companyName
  book.companyEmail = companyEmail
  book.companyClerk = companyClerk
  book.date = date
  book.clientName = clientName
  book.clientEmail = clientEmail
  book.invoiceDescription = invoiceDescription
  book.status = status
  book.code = code
  book.month = month
  book.year = year
 


      
       
        book.save()
          .then(title =>{
let client = title.clientName
console.log(client,'client')
            User.findByIdAndUpdate(id,{$set:{clientName:client}},function(err,docs){
              res.send(docs)
            })
           
          })

})
*/


///////
/*
router.post('/invoiceQ',isLoggedIn,function(req,res){
  var id = req.user._id
   var m2 = moment()
   var year = m2.format('YYYY')
   var month = m2.format('MMMM')
   var status = "not saved"
   var code = req.user.invoCode
   var item = req.body.item
   var qty = req.body.qty
   var price = req.body.price
 
   var total = price * qty
   var itemId=req.body.itemId
   var date = req.body.date
   var dueDate = req.body.dueDate
   var itemId = req.body.itemId
   var companyName = req.body.companyName
   var companyEmail = req.body.companyEmail
   var companyClerk = req.body.companyClerk
   //var notes = req.query.notes
   var clientName= req.body.clientName
   var clientEmail = req.body.clientEmail
   var invoiceDescription = req.body.invoiceDescription
   console.log(companyName,companyEmail,companyClerk,clientName,clientEmail,date,dueDate,'3333')
   
   var book = new InvoiceSub();
   book.item = item
   book.itemId = itemId
   book.qty = qty
   book.price = price
   book.total = total
   book.companyName = companyName
   book.companyEmail = companyEmail
   book.companyClerk = companyClerk
   book.date = date
   book.clientName = clientName
   book.clientEmail = clientEmail
   book.invoiceDescription = invoiceDescription
   book.status = status
   book.code = code
   book.month = month
   book.year = year
  
 
 
       
        
         book.save()
           .then(title =>{
 let client = title.clientName
 console.log(client,'client')
             User.findByIdAndUpdate(id,{$set:{clientName:client}},function(err,docs){
               res.send(docs)
             })
            
           })
 
 })
 */

router.get('/invoiceProcess',isLoggedIn,function(req,res){

var code =req.user.invoCode
console.log(code,'code')

InvoiceSub.find({code:code},function(err,docs){
for(var i = 0;i<docs.length;i++){
let id = docs[i]._id
InvoiceSub.findByIdAndUpdate(id,{$set:{status:"saved"}},function(err,locs){

})


}
res.redirect('/clerk/invoiceSubTotal')
})


})

router.get('/invoiceSubTotal',isLoggedIn,function(req,res){
 var number1 = 0
 var arrSub = []
  var code =req.user.invoCode
  InvoiceSub.find({code:code},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arrSub.push(hods[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arrSub) { number1 += arrSub[z]; }
        for(var i = 0;i<hods.length;i++){

      let id = hods[i]._id
console.log(id,'333')
        InvoiceSub.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){

        })
      }

        res.redirect('/clerk/arrInvoice')

      })





})



router.get('/arrInvoice',isLoggedIn,function(req,res){
var code = req.user.invoCode

InvoiceCode.find({code:code},function(err,docs){
for(var i=0;i<docs.length;i++){
let code= docs[i].code
 arr[code]=[]
}
})

res.redirect('/clerk/invoiceGeneration')

})




router.get('/invoiceGeneration',isLoggedIn,function(req,res){

var code = req.user.invoCode


//console.log(docs[i].uid,'ccc')

//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
InvoiceSub.find({code:code}).lean().sort({code:1}).then(vocs=>{


for(var x = 0;x<vocs.length;x++){


if( arr[code].length > 0 && arr[code].find(value => value.code == code) ){

arr[code].push(vocs[x])

    }
    
     
    
    
    else{
      arr[code].push(vocs[x])
          
      } 


 

     

}  
    })
    
    res.redirect('/clerk/invoiceGeneration2')
  

/*})*/

})






router.get('/invoiceGeneration2',isLoggedIn,function(req,res){

var m = moment()
var mformat = m.format('L')
var month = m.format('MMMM')
var year = m.format('YYYY')
var code = req.user.invoCode
var clientName = req.user.clientName
/*console.log(arr,'iiii')*/


//console.log(docs,'docs')

const compile = async function (templateName, arr){
const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

const html = await fs.readFile(filePath, 'utf8')

return hbs.compile(html)(arr)

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
const content = await compile('invoice',arr[code])

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
path:(`./invoiceReports/${year}/${clientName}_${code}`+'.pdf'),
/*format:"A4",
width:'30cm',
height:'21cm',*/
height: height + 'px',
  printBackground:true

})



var repo = new InvoiceFiles();

repo.clientName = clientName
repo.month = month;
repo.code = code;
repo.filename = clientName+'.pdf';
repo.year = year;
repo.date = mformat
repo.type = "Invoice"
repo.save().then(poll =>{
console.log("Done creating pdf",clientName)
})


/*await browser.close()

process.exit()*/
req.flash('success', 'Report Generation Successful');

res.redirect('/clerk/generatedInvoice');


}catch(e) {

console.log(e)


}


}) ()




//res.redirect('/hostel/discList')

})



router.get('/generatedInvoice',isLoggedIn,function(req,res){
  var code = req.user.invoCode


  InvoiceSub.find({code:code},function(err,docs){
    res.render('abc/invoiceFile',{listX:docs,doc:docs[0]})
  })
})


router.get('/emailInvoice/:id',isLoggedIn,function(req,res){
  var code = req.params.id

  InvoiceSub.find({code:code},function(err,docs){
 
if(docs){
     let email = docs[0].clientEmail
     let companyName = docs[0].companyName
     
 
 
 
 
 
             
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
         path:`./invoiceReports/${year}/${month}/${companyName}.pdf`
       }
     ]
   };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Reports Not Emailed!');
  
res.redirect('/clerk/quote')
     }else{
       console.log('Email sent successfully')
       req.flash('success', 'Reports Emailed Successfully!');
  
res.redirect('/clerk/quote')
     }
   })
 
 }
 })
 
 })

/////////////Quotations



router.get('/quoteCode',isLoggedIn,function(req,res){
  var id = req.user._id
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
var prefix = req.user.prefix
var num = req.user.num

var code = prefix+num

var codex = new QuoteCode();

codex.code = code
codex.mformat = mformat

     
             
codex.save()
.then(title =>{
  num++
User.findByIdAndUpdate(id,{$set:{quoteCode:code,num:num}},function(err,docs){

})

res.redirect('/clerk/quote')

})


})





router.get('/quote', isLoggedIn,function(req,res){
  var pro = req.user
  var companyAddress = req.user.companyAddress
  var companyCity = req.user.companyCity
  var companyMobile = req.user.companyMobile
  var companyCountry = req.user.companyCountry
  var companyEmail = req.user.companyEmail
  var companyName = req.user.companyName
  var successMsg = req.flash('success')[0];
  res.render('abc/quote',{successMsg: successMsg, noMessages: !successMsg,pro:pro,companyAddress:companyAddress,
  companyCity:companyCity,companyCountry:companyCountry,companyEmail:companyEmail,companyName:companyName,companyMobile:companyMobile})
})

/* router.post('/invoice',function(req,res){
console.log(req.body['name[]'],req.body['quantity[]'],req.body['price[]'])

})*/





router.post('/quote',isLoggedIn,function(req,res){

 

  
  var id = req.user._id
  var code = req.user.quoteCode
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
         
          
  res.redirect('/clerk/quote');
}


else{


for(var i = 0; i<ar.length-2;i++){
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
  book.month = month
  book.year = year
  book.type = "Quote"
  book.size = i
 


      
       
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

res.redirect('/clerk/quoteProcess')
      }
})

router.get('/quoteProcess',isLoggedIn,function(req,res){

var code =req.user.quoteCode
console.log(code,'code')

InvoiceSub.find({code:code,status:"not saved"},function(err,docs){
for(var i = 0;i<docs.length;i++){
let id = docs[i]._id
InvoiceSub.findByIdAndUpdate(id,{$set:{status:"saved"}},function(err,locs){

})


}
res.redirect('/clerk/quoteSubTotal')
})


})

router.get('/quoteSubTotal',isLoggedIn,function(req,res){
 var number1 = 0
 var arrSub = []
  var code =req.user.quoteCode
  InvoiceSub.find({code:code,status:"saved"},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arrSub.push(hods[q].total)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arrSub) { number1 += arrSub[z]; }
        for(var i = 0;i<hods.length;i++){

      let id = hods[i]._id
console.log(id,'333')
        InvoiceSub.findByIdAndUpdate(id,{$set:{subtotal:number1}},function(err,locs){

        })
      }

        res.redirect('/clerk/arrQuote')

      })





})



router.get('/arrQuote',isLoggedIn,function(req,res){
var code = req.user.quoteCode

QuoteCode.find({code:code},function(err,docs){
for(var i=0;i<docs.length;i++){
let code= docs[i].code
 arr2[code]=[]
}
})

res.redirect('/clerk/quoteGeneration')

})




router.get('/quoteGeneration',isLoggedIn,function(req,res){

var code = req.user.quoteCode


//console.log(docs[i].uid,'ccc')

//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
InvoiceSub.find({code:code}).lean().sort({code:1}).then(vocs=>{


for(var x = 0;x<vocs.length;x++){


if( arr2[code].length > 0 && arr2[code].find(value => value.code == code) ){

arr2[code].push(vocs[x])

    }
    
     
    
    
    else{
      arr2[code].push(vocs[x])
          
      } 


 

     

}  
    })
    
    res.redirect('/clerk/quoteGeneration2')
  

/*})*/

})






router.get('/quoteGeneration2',isLoggedIn,function(req,res){

var m = moment()
var mformat = m.format('L')
var month = m.format('MMMM')
var year = m.format('YYYY')
var code = req.user.quoteCode
var clientName = req.user.clientName
/*console.log(arr,'iiii')*/


//console.log(docs,'docs')

const compile = async function (templateName, arr2){
const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

const html = await fs.readFile(filePath, 'utf8')

return hbs.compile(html)(arr2)

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
const content = await compile('quote',arr2[code])

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
path:(`./quoteReports/${year}/${clientName}_${code}`+'.pdf'),
/*format:"A4",
width:'30cm',
height:'21cm',*/
height: height + 'px',
printBackground:true

})



var repo = new InvoiceFiles();

repo.clientName = clientName
repo.month = month;
repo.code = code;
repo.type = 'Quote';
repo.filename = clientName+'.pdf';
repo.year = year;
repo.date = mformat
repo.save().then(poll =>{
console.log("Done creating pdf",clientName)
})


/*await browser.close()

process.exit()*/
req.flash('success', 'Report Generation Successful');

res.redirect('/clerk/generatedQuote');


}catch(e) {

console.log(e)


}


}) ()




//res.redirect('/hostel/discList')

})





router.get('/generatedQuote',isLoggedIn,function(req,res){
  var code = req.user.quoteCode


  InvoiceSub.find({code:code},function(err,docs){
    res.render('abc/quoteFile',{listX:docs,doc:docs[0]})
  })
})


router.get('/emailQuote/:id',isLoggedIn,function(req,res){
  var code = req.params.id

  InvoiceSub.find({code:code},function(err,docs){
 
if(docs){
     let email = docs[0].clientEmail
     let companyName = docs[0].companyName
     
 
 
 
 
 
             
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
                 subject: "Quote",
     //text:"Node js testing",
     attachments: [
       {
         filename:'document.pdf',
         path:`./quoteReports/${year}/${month}/${companyName}.pdf`
       }
     ]
   };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Quote Not Emailed!');
  
res.redirect('/clerk/quote')
     }else{
       console.log('Email sent successfully')
       req.flash('success', 'Reports Emailed Successfully!');
  
res.redirect('/clerk/quote')
     }
   })
 
 }
 })
 
 })



router.get('/autocompleteXN/', function(req, res, next) {
  var code

    var regex= new RegExp(req.query["term"],'i');
   
    var bookFilter =Product.find({},{'name':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    bookFilter.exec(function(err,data){
   
 
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(book=>{
 
        
     
  
          
         let obj={
           id:book._id,
           label: book.name

       
     
       
         
          
  
           
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

  
      
     
      Product.find({name:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
      })
    
    
    })

    



    

router.get('/autocompleteClient/', function(req, res, next) {
  var code

    var regex= new RegExp(req.query["term"],'i');
   
    var bookFilter =Client.find({},{'clientName':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    bookFilter.exec(function(err,data){
   
 
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(book=>{
 
        
     
  
          
         let obj={
           id:book._id,
           label: book.clientName

       
     
       
         
          
  
           
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

  
      
     
      Client.find({clientName:code},function(err,docs){
     if(docs == undefined){
       res.redirect('/')
     }else
    
        res.send(docs[0])
      })
    
    
    })

    ///////////folders invoic


    router.get('/folderReg',isLoggedIn,function(req,res){
      var pro = req.user
      var id = req.user._id
     
    
              res.render('abcInvoiceFolder/folders2',{pro:pro,id:id,})
     
    })
    



    ///monthly

router.get('/folderMonthlyInvoiceReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('abcInvoiceFolder/fileMonthly',{listX:docs,pro:pro})

        
  })
})




router.get('/invoiceSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('abcInvoiceFolder/month',{pro:pro,listX:docs,id:id})

  })
  
})

router.get('/viewMonthlyInvoiceFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  var year = req.user.hostelYear

  

   InvoiceFiles.find({year:year,month:id},function(err,docs){
     if(docs){

   



res.render('abcInvoiceFolder/filesMonth',{listX:docs,pro:pro,id:id,year:year})
}
})
    


})




//download invoice file

router.get('/downloadInvoice/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = req.user.hostelMonth
  var year = req.user.hostelYear
  var mformat = m.format('L')
  InvoiceFiles.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
  
    res.download( './invoiceReports/'+year+'/'+name, name)
  })  
  
  })
  

///Quotations

  ///monthly

  router.get('/folderMonthlyQuoteReg/',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var arr = []
  
   /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){
  
    })*/
  
  
    Year.find({}).sort({year:1}).then(docs=>{
       
            res.render('abcQuoteFolder/fileMonthly',{listX:docs,pro:pro})
  
          
    })
  })
  
  
  
  
  router.get('/quoteSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var arr = []
    User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){
  
    })
  
    Month.find({}).sort({num:1}).then(docs=>{
       
            res.render('abcQuoteFolder/month',{pro:pro,listX:docs,id:id})
  
    })
    
  })
  
  router.get('/viewMonthlyQuoteFile/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var pro = req.user
    var hostel = req.user.hostel
    var floor = req.user.hostelFloor
    var year = req.user.hostelYear
  
    
  
     InvoiceFiles.find({year:year,month:id},function(err,docs){
       if(docs){
  
     
  
  
  
  res.render('abcQuoteFolder/filesMonth',{listX:docs,pro:pro,id:id,year:year})
  }
  })
      
  
  
  })
  
  
  
  
  //download invoice file
  
  router.get('/downloadQuote/:id',isLoggedIn,function(req,res){
    var m = moment()
    var month = req.user.hostelMonth
    var year = req.user.hostelYear
    var mformat = m.format('L')
    InvoiceFiles.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      //res.download( './public/uploads/'+name, name)
    
      res.download( './invoiceReports/'+year+'/'+name, name)
    })  
    
    })
    
  


//invoice


router.post('/invoice9',isLoggedIn,function(req,res){
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
let amountX9 = req.body.amountX
let amountX3 = 0 - amountX9
//let amountPaid = req.body.amountX
let amountX4 = req.body.amountX


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
let newBalance = studentBalance - amountX4
if(newBalance > 0){

totalAmountOwing = newBalance

}else{
  totalAmountOwing = 0
}
for(var i = 0; i<ar.length;i++){
  console.log(ar[i])
  let id = ar[i]

  InvoiceFile.findById(id,function(err,doc){
    let amountDue = doc.amountDue 
    let invoiceNumber = doc.invoiceNumber
    let studentBal = doc.studentBalance + amountX2
    if(amount >= amountDue){
       status = 'paid'
      balance = 0
      
      InvoiceFile.findByIdAndUpdate(id,{$set:{amountPaid:amountDue,amountDue:0,status:'paid',receiptNumber:receiptNumber,css:"success",remainingBalance:totalAmountOwing}},function(err,docs){

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
  res.redirect('/clerk/arrReceipt')
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