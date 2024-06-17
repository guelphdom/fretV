require('dotenv').config();
require("../config5/keys")
var express = require('express');
var router = express.Router();
const Floor =require('../models/floor')
const Attendance = require('../models/attendanceHostel');
const AttendanceReg = require('../models/attendanceRegHostel');
const User =require('../models/user')
const AttendanceReport =require('../models/attReport')
const Class1 =require('../models/class');
const Hostel =require('../models/hostel')
const Discipline =require('../models/discipline')
const DiscSub =require('../models/discSub')
const StudentDisc =require('../models/studentDiscipline')
const StudentDiscReport =require('../models/studentDiscReport')
const Float =require('../models/float')
const Year =require('../models/year')
const Month =require('../models/month')
const FloatVoucher =require('../models/floatVoucher')
const HostelHeadAllocation =require('../models/hostelHeadAllocation')
const HostelAllo =require('../models/hostelAllocation')
const AlloRegBatch =require('../models/alloRegBatch')
const StudentHostelAllo =require('../models/studentHostel')
const AlloHostelBatch =require('../models/alloHostelBatch')
const HostelFloat =require('../models/hostelFloat')
const HostelRegister =require('../models/hostelRegister')
const HostelRoom =require('../models/hostelRooms')
const RoomAllo =require('../models/roomAllocation')
const RoomAlloSub =require('../models/roomAllocationSub')
const RoomTransfer =require('../models/roomTransfer')
const TopUp =require('../models/topUp')
const Voucher =require('../models/voucher')
const ClassV =require('../models/classV');
const CodeV =require('../models/codev');
const AlloCode =require('../models/alloCode');
const Disc =require('../models/discipline');
const AlloSub =require('../models/alloSub');
const CodeSub =require('../models/codeSub');
const CodeDisc =require('../models/codeDisc');
const SubV =require('../models/subV');
const CodeLevel =require('../models/codeLevel');
const LevelV =require('../models/levelV');
const Subject =require('../models/subject');
const Fees =require('../models/fees');
const Report = require('../models/reports');
const VouchReport = require('../models/vouchReport');
const VouchStudentReport = require('../models/vouchStudentReport');
const Calendar =require('../models/calendar');
var Message = require('../models/message');
var Recepient = require('../models/recepients');
const Student =require('../models/studentStats');
let pdf = require('html-pdf');
const Report2 = require('../models/reportsT');
const Grade =require('../models/grade');
var Note = require('../models/note');
const Level =require('../models/level');
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
const fs = require('fs-extra')
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var hbs = require('handlebars');
const puppeteer = require('puppeteer')
var passport = require('passport')
var moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const arr = {}
const arr2 = {}
const arr3 = {}
const arrA ={}
const arrB ={}
const arrC ={}


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
/*
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});*/

const upload = multer({ storage })



router.get('/genEmail2',isLoggedIn,function(req,res){
  User.find({role:"parent"},function(err,docs){
 
   for(var i = 0;i<docs.length;i++){
     let email = docs[i].email
     let studentId = docs[i].studentId
 
 
 
 
 
             
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
                 subject: "Monthly Assessment Reports",
     //text:"Node js testing",
     attachments: [
       {
         filename:'document.pdf',
         path:`./reports/${year}/${month}/${studentId}.pdf`
       }
     ]
   };
   transporter.sendMail(mailOptions, function (error,info){
     if(error){
       console.log(error)
       req.flash('danger', 'Reports Not Emailed!');
  
res.redirect('/records/dash')
     }else{
       console.log('Email sent successfully')
       req.flash('success', 'Reports Emailed Successfully!');
  
res.redirect('/records/dash')
     }
   })
 
 }
 })
 
 })

 
 router.get('/classNameUpdate',function(req,res){
   Class1.find({class1:"12B"},function(err,docs){
     for(var i=0;i<docs.length;i++){
       let id = docs[i]._id
       Class1.findByIdAndUpdate(id,{$set:{className:"B"}},function(err,tocs){

       })
     }
   })
 })


  
  router.get('/dash',isLoggedIn,records,function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    const arr = []
  const m = moment();
   var id =req.user._id
   Recepient.find({recepientId:id,statusCheck:'not viewed'},function(err,rocs){
    let lgt = rocs.length
    var gt = lgt > 0
  
        //console.log(req.user._id)
        //console.log(req.user.email)
          Note.find({recId:req.user._id},function(err,docs){
           // console.log(docs,'docs')
         for(var i = 0;i<docs.length;i++){
  
         
           let date = docs[i].date
           let id = docs[i]._id
           let timeX = moment(date)
           let timeX2 =timeX.fromNow()
           //console.log(timeX2,'timex2')
  
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
       
  
         
          res.render('dashboard/records',{pro:pro,list:arr, les:les,gt:gt,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg })
  
        })
        })
        })
  
      })
  

  })
  



     
 router.get('/msgUpdate',isLoggedIn,records,function(req,res){
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

router.get('/sentUpdate',isLoggedIn,records,function(req,res){
  var id = req.user._id
  Message.find({senderId:id},function(err,docs){
    let size = docs.length
    User.findByIdAndUpdate(id,{$set:{sent:size}},function(err,nocs){

    })
  })
})








      router.get('/msgX',isLoggedIn,records,function(req,res){
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

      res.redirect('/records/msg')
      })
      
      })
      
      
      
      
      
      
      
      
      
      
      
      
      router.get('/msg',isLoggedIn,records,function(req,res){
      var id = req.user._id
      const list2 =[]
      const list = []
      let num = req.user.inboxNo
      var pro = req.user
      
      Recepient.find({recepientId :id, status:'active', statusXX:'null'},function(err,klocs){
      
      //var recFilter =Recepient.find({recepientId :id}).sort({"numDate":-1});
      //recFilter.exec(function(err,klocs){
      for(var c = 0 ; c <klocs.length;c++){
      
      let recIdX = klocs[c].msgId
      
            Message.find({status:'reply',msgId:recIdX},function(err,  docs){
      
             // var bookFilter =Message.find({status:'reply',msgId:recIdX}).sort({"numDate":-1});
      
            
      // bookFilter.exec(function(err,docs){
    
      
      let x = docs.length - 1
      for(var i = x ;i>=0; i--){
      console.log(i,'b')
      if(docs[i].senderId !=id){
      //console.log(docs[i],'black skinhead')
      
      list.push(docs[i])
      list.sort((x, y) =>  y.numDate - x.numDate)
      console.log(list,'list yacho')
      
     
      
      }
      
      
  
      }
      })  
      
      //})
      
      }

      res.render('messagesRecords/inbox',{list:list,num:num,pro:pro })
      })
      
      })
      
      
      
      
      
      //on click dashboard icon & msg redirect
      router.post('/msg/:id',isLoggedIn,records,function(req,res){
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
      
      
      router.get('/sentXX',isLoggedIn,records,function(req,res){
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
      res.redirect('/records/sent')
      })
      
      })
      
      
      
      
      
      router.get('/sent',isLoggedIn,records,function(req,res){
      var id = req.user.id
      const list2 =[]
      const list = []
      var num = req.user.inboxNo
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
      
      
      res.render('messagesRecords/sent',{list:list, num:num,pro:pro})
      })
      
      })
      
      
      
      router.get('/archiveXX',isLoggedIn,records,function(req,res){
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
      res.redirect('/records/archive')
      
      })
      
      })
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      router.get('/archive',isLoggedIn,records,function(req,res){
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
      
      res.render('messagesRecords/sent',{list:list, num:num,pro:pro})
           
      })
      
      })
      
      
      
      
      router.post('/marked',isLoggedIn,records,function(req,res){
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
      
      router.post('/archiveX',isLoggedIn,records,function(req,res){
      
      let id = req.user.id
      Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
      
      for(var i = 0; i<docs.length;i++){
      
      
      Recepient.findByIdAndUpdate(docs[i]._id,{$set:{archive:'yes',statusXX:'yes'}},function(err,nocs){
      
      })
      
      }
      
      res.send(docs)
      })
      })
      
      
      
      router.post('/readX',isLoggedIn,records,function(req,res){
      
      let id = req.user.id
      Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
      
      for(var i = 0; i<docs.length;i++){
      
      
      Recepient.findByIdAndUpdate(docs[i]._id,{$set:{read:'yes',statusXX:'yes'}},function(err,nocs){
      
      })
      
      }
      
      res.send(docs)
      })
      })
      
      
      
      
      
      
      
      
      router.post('/delete',isLoggedIn,records,function(req,res){
      
      let id = req.user.id
      Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
      
      for(var i = 0; i<docs.length;i++){
      
      
      Recepient.findByIdAndUpdate(docs[i]._id,{$set:{status:'deleted',statusXX:'yes'}},function(err,nocs){
      
      })
      
      }
      
      res.send(docs)
      })
      })
      
      
      router.get('/compose',isLoggedIn,records,  function(req,res){
        var num = req.user.num
        var pro = req.user
        res.render('messagesRecords/compose',{num:num,pro:pro})
      })
      
      
      router.post('/userX',isLoggedIn,records,function(req,res){
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
      
      
      
      router.post('/dataX',isLoggedIn,records,function(req,res){
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
      res.redirect('/records/sentX')
      })
      
      
      
      
      
      })
      
      router.get('/reply/:id', isLoggedIn,records, function(req,res){
      var id = req.params.id
      var pro = req.user
      var uid = req.user._id
      console.log(id,'id')
      var arr = []
      var num = req.user.inboxNo
      Message.find({msgId:id},function(err,tocs){
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
      
      res.render('messagesRecords/reply',{list:docs,id:id,pro:pro, arr:arr, subject:sub,num:num})
      })
      
      })
      })
      })
      
      
      
      router.post('/reply/:id', isLoggedIn,records, function(req,res){
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
      
      
      
      
      router.post('/replyX/:id',isLoggedIn,records,function(req,res){
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
      
      
      router.post('/replyX2/:id',isLoggedIn,records,function(req,res){
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
      
      
      
      router.post('/replyX3/:id',isLoggedIn,records,function(req,res){
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      















      
    //profile
    router.get('/profile',isLoggedIn ,records,function(req,res){
      var pro = req.user
      var user = req.user
      res.render('records/overview',{pro:pro,user:user})
    })


    
  router.post('/profile',isLoggedIn,records,upload.single('file'),function(req,res){
 
  
  var pro = req.user
    if(!req.file){
     req.session.message = {
       type:'errors',
       message:'Select Picture'
     }     
       res.render('records/overview', {
            user:req.body, message:req.session.message,pic:req.user.photo,user:req.user ,pro:pro
        }) 
     
    } else
    var imageFile = req.file.filename;
    var id  = req.user._id;
   console.log(imageFile)
   console.log(id)
    User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
    
    
      
    
    
    })
   
    res.redirect('/records/profile')
  
  
  
  
  })

//setting ID prefix  


  //student List 
  
  
  router.get('/studentList',isLoggedIn,records,(req, res) => {
   var pro = req.user
   var hostel = req.user.hostel
   
    User.find({role:"student",hostel:hostel},(err, docs) => {
        if (!err) {
            res.render("hostel/studentList", {
                listX: docs, pro:pro    
            });
        }
        else {
            console.log('Error in retrieving Student list :' + err);
        }
    });
  });

 

    
  

     //view profile
     router.get('/prof/:id',isLoggedIn,records,function(req,res){
      var pro = req.user
      User.findById(req.params.id, (err, doc) => {
        if (!err) {
        
            res.render("records/overviewStudent", {
               
                doc: doc,pro:pro
              
                
            });
          
        }
    });
    
    
    
    })
    

//add teachers


  /////////////////////////pt2




  router.get('/profile/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var pro = req.user
    User.findById(id,function(err,doc){
      
   
    //var pro = req.user
    res.render('admin/overviewRecords',{doc:doc,id:id,pro:doc})
    
  })
    })


    

//////add hostel

router.get('/hostelBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('admin/subBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })




  router.post('/hostelBatch',isLoggedIn,  function(req,res){
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
     

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/records/subVBatch');
    
    }
    
    else 
    
    CodeSub.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/records/subVBatch');
    }else{

      var truck = new CodeSub()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/records/subject')

    })

    }
    
    })
    
    
    })
  



////add hostel
router.get('/addHostel',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/addHostel',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })







  router.post('/addHostel',isLoggedIn,  function(req,res){
    var id =req.user._id
      var code = req.body.code
      var name = req.body.name
      var capacity  = req.body.capacity
      var gender  = req.body.gender
      var rooms  = req.body.rooms
      var m2 = moment()
      var mformat = m2.format('L')
      var pro = req.user
  
      
      
  
      req.check('code','Enter  Code').notEmpty();
      req.check('name','Enter Hostel Name').notEmpty();
      req.check('capacity','Enter Capacity').notEmpty();
      req.check('gender','Enter Gender').notEmpty();
      req.check('rooms','Enter Number Rooms').notEmpty();
    
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
       
  
        
    
  
  
    req.flash('danger', req.session.errors[0].msg);
         
          
    res.redirect('/records/addHostel');
      
      }
      
      else 
      
      Hostel.findOne({'hostelId':code})
      .then(grower =>{
      if(grower){
  
        req.flash('danger', 'Hostel already in use');
   
        res.redirect('/records/addHostel');
      }else{
  
        var truck = new Hostel()
        truck.hostelId = code
        truck.name = name
        truck.gender = gender
        truck.capacity = capacity
        truck.rooms = rooms
        truck.roomsAvailable = 0
        truck.head = "null"
        truck.studentMaxNo = 0
        truck.balance = 0
  
        truck.save()
            .then(pro =>{

 req.flash('success', 'Hostel added successfully');
  
      
  res.redirect('/records/addHostel')
  
      })
  
      }
      
      })
      
      
      })
    /////////////////add float
    router.get('/cashBal',isLoggedIn,records, function(req,res){
     User.find({role:"student"},function(err,docs){
       for(var i= 0;i<docs.length;i++){
         User.findByIdAndUpdate(docs[i]._id,{$set:{cashBalance:0}},function(err,tocs){

         })
       }
     })
     

      //res.render('hostel/addFloat',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    
      })
    

    router.get('/addFloat',isLoggedIn,records, function(req,res){
      var pro = req.user
     
      var errorMsg = req.flash('danger')[0];
      var successMsg = req.flash('success')[0];
     

      res.render('hostel/addFloat',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    
      })
   
    
    
    
    router.post('/addFloat', isLoggedIn,records, upload.single('file'), function(req,res){
      var pro = req.user
      var term = req.user.term
      var m = moment()
      var month = m.format('MMMM')
      var year = m.format('YYYY')
      var fileId = req.file.id
    var date = m.format("L")
    var studentName = req.body.studentName
    var studentId = req.body.uid
    var gender = req.body.gender
    var balance = req.body.balance
    var amount = req.body.amount;
    var room = req.body.room;
    var hostel = req.user.hostel
    var head = req.user.fullname

    var id = req.user._id

    if (!req.file){
      req.session.message = {
          type:'errors',
          message:'Upload Excel File'
        }     
          res.render('hostel/addFloat', {message:req.session.message,pro:pro
               
           }) 



  }

      
    req.check('studentName','Enter Name Of Student').notEmpty();
    req.check('uid','Enter Student ID').notEmpty();
    req.check('amount','Enter Float').notEmpty();
    req.check('balance','Enter Balance').notEmpty();
    
      
    var errors = req.validationErrors();
    
    
    
     if (errors) {
     
    
       
          req.session.errors = errors;
          req.session.success = false;
          //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
       
          req.flash('danger', req.session.errors[0].msg);
       
        
          res.redirect('/hostel/addFloat');

      }
    else{

  
 FloatVoucher.findOne({'amount':amount,'date':date,  'studentId':studentId,'year':year})
    .then(clax =>{
        if(clax){ 
       
          
        

          req.flash('danger', 'Student already transfered');
 
      res.redirect('/hostel/addFloat');
          
        }
        else{
    
          var filename = req.file.filename;
        
        var teacher = new FloatVoucher();
        teacher.hostel = hostel;
        teacher.head = head;
        teacher.gender = gender;
        teacher.oldBalance = balance
        teacher.amount = amount;
        teacher.studentId = studentId;
        teacher.studentName = studentName;
        teacher.year = year
        teacher.month = month
        teacher.term = term
        teacher.date = date
        teacher.room = room
        teacher.newBalance = 0
        teacher.file= filename
        teacher.fileId= fileId
        teacher.type= "Float Deposit"
        teacher.type2= "Deposited"
        teacher.aggFloat = 0
        teacher.aggVouchers = 0
        teacher.aggBalance = 0
        teacher.iFloat = 0
        teacher.iVouchers = 0
        teacher.iBalance = 0

        
        
        
        teacher.save()
    .then(teach =>{

 let newBalance = teach.amount + teach.oldBalance
 console.log(teach.amount, teach.oldBalance,newBalance,'new balance')
 FloatVoucher.findByIdAndUpdate(teach._id,{$set:{newBalance:newBalance}},function(err,locs){

 })

            User.find({uid:studentId},function(err,docs){
        if(docs){
          User.findByIdAndUpdate(docs[0]._id,{$set:{cashBalance:newBalance}},function(err,locs){

          })



       
      



        }
      })

    


  
                
      req.flash('success', 'Float Added Successfully');
 
      res.redirect('/hostel/addFloat');
   
    
    })
    

    
  }
    
    })
  }
    
    })
  
  







    
    router.get('/cashReq',isLoggedIn,records, function(req,res){
      var pro = req.user
     
      var errorMsg = req.flash('danger')[0];
      var successMsg = req.flash('success')[0];
     

      res.render('hostel/voucher',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    
      })
   
    
    
    
    router.post('/cashReq', isLoggedIn,records, upload.single('file'), function(req,res){
      var pro = req.user
      var term = req.user.term
      var m = moment()
      var month = m.format('MMMM')
      var year = m.format('YYYY')
      var fileId = req.file.id
    var date = m.format("L")
    var studentName = req.body.studentName
    var studentId = req.body.uid
    var gender = req.body.gender
    var balance = req.body.balance
    var amount = req.body.amount;
    var room = req.body.room;
    var hostel = req.user.hostel
    var head = req.user.fullname

    var id = req.user._id

    if (!req.file){
      req.session.message = {
          type:'errors',
          message:'Upload  File'
        }     
          res.render('hostel/voucher', {message:req.session.message,pro:pro
               
           }) 



  }

      
    req.check('studentName','Enter Name Of Student').notEmpty();
    req.check('uid','Enter Student ID').notEmpty();
    req.check('amount','Enter Float').notEmpty();
    req.check('balance','Enter Balance').notEmpty();
    
      
    var errors = req.validationErrors();
    
    
    
     if (errors) {
     
    
       
          req.session.errors = errors;
          req.session.success = false;
          //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
       
          req.flash('danger', req.session.errors[0].msg);
       
        
          res.redirect('/hostel/cashReq');

      }
    else{

  
 FloatVoucher.findOne({'amount':amount,'date':date,  'studentId':studentId,'year':year,'type':'voucher'})
    .then(clax =>{
        if(clax){ 
       
          
        

          req.flash('danger', 'Student already transfered');
 
      res.redirect('/hostel/cashReq');
          
        }
        else{
    
          var filename = req.file.filename;
        
        var teacher = new FloatVoucher();
        teacher.hostel = hostel;
        teacher.head = head;
        teacher.gender = gender;
        teacher.oldBalance = balance
        teacher.amount = amount;
        teacher.studentId = studentId;
        teacher.studentName = studentName;
        teacher.year = year
        teacher.month = month
        teacher.term = term
        teacher.date = date
        teacher.room = room
        teacher.newBalance = 0
        teacher.file= filename
        teacher.fileId= fileId
        teacher.type= 'Cash Withdrawal'
        teacher.type2= "Withdrawn"
        teacher.aggFloat = 0
        teacher.aggVouchers = 0
        teacher.aggBalance = 0

        
        
        
        teacher.save()
    .then(teach =>{

 let newBalance =  teach.oldBalance - teach.amount 
 //console.log(teach.amount, teach.oldBalance,newBalance,'new balance')
 FloatVoucher.findByIdAndUpdate(teach._id,{$set:{newBalance:newBalance}},function(err,locs){

 })

            User.find({uid:studentId},function(err,docs){
        if(docs){
          User.findByIdAndUpdate(docs[0]._id,{$set:{cashBalance:newBalance}},function(err,locs){

          })



       
      



        }
      })

    


  
                
      req.flash('success', 'Cash Requisition Successful');
 
      res.redirect('/hostel/cashReq');
   
    
    })
    

    
  }
    
    })
  }
    
    })
  
  




      router.get('/roomTransfer',isLoggedIn,records, function(req,res){
        var pro = req.user
       
        var errorMsg = req.flash('danger')[0];
        var successMsg = req.flash('success')[0];
       
  
        res.render('hostel/roomTransfer',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
      
        })
     
      
      
      
      router.post('/roomTransfer', isLoggedIn,records, function(req,res){
        var pro = req.user
        var term = req.user.term
        var m = moment()
        var month = m.format('MMMM')
        var year = m.format('YYYY')
   var from = req.body.from
   var to = req.body.to
      var date = m.format("L")
      var studentName = req.body.studentName
      var studentId = req.body.uid
      var gender = req.body.gender
      var reason = req.body.reason
      var hostelHead = req.user.fullname;
      var hostel = req.user.hostel

      var id = req.user._id

        
      req.check('studentName','Enter Name Of Student').notEmpty();
    
      req.check('from','Enter Room').notEmpty();
      
      
        
      var errors = req.validationErrors();
      
      
      
       if (errors) {
       
      
         
            req.session.errors = errors;
            req.session.success = false;
            //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
         
            req.flash('danger', req.session.errors[0].msg);
         
          
            res.redirect('/records/roomTransfer');
  
        }
      else{

    
   RoomTransfer.findOne({'to':to,  'studentId':studentId,'year':year})
      .then(clax =>{
          if(clax){ 
         
            
          
  
            req.flash('danger', 'Student already transfered');
   
        res.redirect('/hostel/roomTransfer');
            
          }
          else{
      
          
          var teacher = new RoomTransfer();
          teacher.hostel = hostel;
          teacher.hostelHead = hostelHead;
          teacher.gender = gender;
          teacher.to = to
          teacher.from = from;
          teacher.studentId = studentId;
          teacher.studentName = studentName;
          teacher.year = year
          teacher.month = month
          teacher.term = term
          teacher.date = date
          teacher.reason = reason

          
          
          
          teacher.save()
      .then(teach =>{

        RoomAllo.find({studentId:studentId,year:year},function(err,docs){
          if(docs){
            RoomAllo.findByIdAndUpdate(docs[0]._id,{$set:{room:to}},function(err,locs){

            })

              User.find({uid:studentId},function(err,docs){
          if(docs){
            User.findByIdAndUpdate(docs[0]._id,{$set:{room:to}},function(err,locs){

            })



          }
        })
        



          }
        })

      


    
                  
        req.flash('success', 'Transfer Successful');
   
        res.redirect('/hostel/roomTransfer');
     
      
      })
      
  
      
    }
      
      })
    }
      
      })
      
      //////mafia
      
     //autocomplete teacherName & uid
   
  router.get('/autocompleteTSHead/',isLoggedIn, function(req, res, next) {
   
  
    var regex= new RegExp(req.query["term"],'i');
   
    var uidFilter =User.find({  role:"hostel head", fullname:regex, },{'fullname':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
  
        
     
  
          
         let obj={
           id:user._id,
           label: user.fullname,
  
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
  
           
         };
        
         result.push(obj);
         console.log('object',obj)
       });
  
     }
   
     res.jsonp(result);
     console.log('Result',result)
    }
  
  })
  
  });
  
  // role admin
  //this routes autopopulates teachers info from the id selected from automplet1
  /*
  router.post('/autoTS',isLoggedIn,function(req,res){
    var fullname = req.body.code
    var companyId = req.user.companyId
   
    User.find({companyId:companyId,fullname:fullname ,role:"teacher"},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/autoTS')
   }else
   console.log(docs[0],'docs[0]')
      res.send(docs[0])
    })
  
  
  })
  */

  router.post('/autoTSHead',isLoggedIn,function(req,res){
    var id = req.body.code

   
    User.findById(id,function(err,doc){
   if(doc== undefined){
     res.redirect('/records/autoTS')
   }else
   console.log(doc,'docs[0]')
      res.send(doc)
    })
  
  
  })
  
  
  
  router.get('/autocompleteXMRoom/',isLoggedIn,records, function(req, res, next) {
    
     
    var regex= new RegExp(req.query["term"],'i');
    var uidFilter =HostelRoom.find({roomName:regex},{'roomName':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  console.log(sub,'roman')
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.roomName,
           
  
       
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
  router.post('/autoXMRoom',isLoggedIn,records,function(req,res){
    var codeX = req.body.codeX
  
  
  
    HostelRoom.find({roomName:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  //hostelName
  
  
  router.get('/autocompleteXMHostel/',isLoggedIn,records, function(req, res, next) {
    
     
    var regex= new RegExp(req.query["term"],'i');
    var uidFilter =Hostel.find({name:regex},{'name':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  console.log(sub,'roman')
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.name,
           
  
       
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
  router.post('/autoXMHostel',isLoggedIn,records,function(req,res){
    var codeX = req.body.codeX
  
  
  
    Hostel.find({name:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ////////allocate rooms to students
  router.get('/allocateRoomBatch',isLoggedIn,  function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('hostel/alloRoomBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    })
  
  
  
  
  
  ////
  
  router.post('/allocateRoomBatch',isLoggedIn,  function(req,res){
    var id =req.user._id
    var room = req.body.room
    var date = req.body.date
   
    var m2 = moment()
    var mformat = m2.format('L')
    var pro = req.user

      
      console.log(room,'x2')
  

 
    
    req.check('room','Enter Room Name').notEmpty();
      
    
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
       // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})
  
       req.flash('danger', req.session.errors[0].msg);
         
          
       res.redirect('/hostel/allocateRoomBatch');
  
  
      
      }
      
      else {
      
     
        HostelRoom.findOne({roomName:room})
        .then(lock=>{
          if(lock){
       
      
                  User.findByIdAndUpdate(id,{$set:{room:room}}, function(err,coc){
            
          
                  })
                  res.redirect('/hostel/studentRoom')
      
          
            
            
            
         
  
      
  
      
      }else{
  
        req.flash('danger', 'Room Does not Exist / already in use');
   
        res.redirect('/hostel/allocateRoomBatch');
  
  
      
  
      }
      
      })
    }
      
      
      })
    
  
  
  

//allocate hostel to students

  
router.get('/studentRoom',isLoggedIn,records, function(req,res){
  var pro = req.user
var room = req.user.room

console.log(room,'999')
  HostelRoom.find({roomName:room},function(err,docs){
    if(docs.length > 0){
      console.log(docs,'docs')
      let occupants = docs[0].occupants
       let capacity = docs[0].capacity
       let state = docs[0].state
       let beds = docs[0].beds
       let floor = docs[0].floor

  
 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


  res.render('hostel/studentsAlloRoom',{occupants:occupants,capacity:capacity,state:state,beds:beds,floor:floor,room:room,pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    }else{
      res.redirect('/hostel/allocateRoomBatch')
    }
  })

})




router.post('/studentRoom', isLoggedIn,records, function(req,res){
  var pro = req.user
  var m = moment()
  var month = m.format('MMMM')
    var year = m.format('YYYY')
var studentId,  grade, id;
var studentName = req.body.studentName;
studentId = req.body.studentId;
var class1 = req.body.class1

var hostelName = req.user.hostel;
var hostelHead = req.user.fullname;
var hostelCapacity = req.body.capacity;
var gender = req.body.gender
grade = req.body.grade

var floor= req.body.floor
var room = req.user.room
var photo = req.body.photo
var status = "null"
var arr, arr1

console.log(photo,'vvv')


  
req.check('studentName','Enter Name Of Student').notEmpty();




  
var errors = req.validationErrors();



 if (errors) {
 

   
      req.session.errors = errors;
      req.session.success = false;
      //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
   
      req.flash('danger', req.session.errors[0].msg);
   
    
      res.redirect('/hostel/studentRoom');

  }
else{
RoomAlloSub.findOne({'studentName':studentName,  'room':room,"year":year})
.then(clax =>{
    if(clax){ 
   console.log('error')
      
     /* Class1.find({},function(err,docs){
        Subject.find({},function(err,locs){
        arr1 = docs;
        arr = locs
      
        req.session.message = {
          type:'errors',
          message:'subject already allocated'
        }   
      res.render('teachers/subjects',{message:req.session.message, arr:arr, arr1:arr1,pro:pro});
        })
      })*/

      req.flash('danger', 'Student already in the hostel');

  res.redirect('/hostel/studentRoom');
      
    }
    else{

var teacher = new RoomAlloSub();
teacher.studentName = studentName;
teacher.studentId = studentId;

teacher.hostelHead = hostelHead;
teacher.hostel = hostelName;

teacher.grade = grade;
teacher.gender = gender;
teacher.room = room
teacher.class1 = class1
teacher.year = year
teacher.photo = photo
teacher.status = status
teacher.floor = floor


teacher.save()
.then(teach =>{
                     
  RoomAlloSub.find({hostel:teach.hostel,status:"null"},(err, docs) => {
    let size = docs.length - 1
    console.log(docs[size],'fff')
    res.send(docs[size])
            })

            console.log('zvaita')

})



    }
  

})
}
})
  
router.post('/loadHostelAllo',isLoggedIn, (req, res) => {
  var pro = req.user
  var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
  var code = req.user.hostel


  RoomAlloSub.find({hostel:code,status:'null'},(err, docs) => {
 
    res.send(docs)
            })

  }); 
  
  
  router.post('/hostelAllo/update/:id',isLoggedIn,function(req,res){
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
    RoomAlloSub.findById(id,function(err,doc){
    
    
    
     
      RoomAlloSub.findByIdAndUpdate(id,{$set:{class1:class1}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })



    router.get('/saveHostelAllo/:id',isLoggedIn, function(req,res){
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
    
    
    
    RoomAlloSub.find({room:code,status:"null"},function(err,locs){
    
    for(var i=0;i<locs.length;i++){
    
    let grade = locs[i].grade
    let gender = locs[i].gender
    let head = locs[i].hostelHead
    let class1 = locs[i].class1
    let hostel = locs[i].hostel
    let room = locs[i].room
    let floor = locs[i].floor
    let photo = locs[i].photo
    let studentName = locs[i].studentName
    let studentId = locs[i].studentId
    let year = locs[i].year
    
    
    let idN = locs[i]._id
    
    
    
    
      
    
      RoomAllo.findOne({'studentId':studentId,'room':room})
      .then(hoc=>{
    
        if(!hoc){
         
        var teacher = new RoomAllo();
        teacher.studentName = studentName;
        teacher.studentId = studentId;
        teacher.room = room
        teacher.hostel = hostel;
        teacher.grade = grade;
        teacher.gender = gender;
        teacher.floor= floor;
        teacher.photo = photo
        teacher.hostelHead = head 
        teacher.year = year
        teacher.class1 = class1
    
        
        
        
        teacher.save()
        .then(teach =>{
                             
        id = teach._id;
        User.findByIdAndUpdate(uid,{$set:{room:'null'}},function(err,doc){
    
        })
        



        User.find({uid:studentId},function(err,locs){
          if(locs){
            let idS = locs[0]._id

            User.findByIdAndUpdate(idS,{$set:{hostel:hostel,room:room}},function(err,tocs){

            })
          }
        })
        /*
        Subject.find({name:subjectName,},function(err,docs){
        subjectCode=docs[0].code;
        grade = docs[0].grade;
        dept = docs[0].dept;
        console.log(subjectCode)
        TeacherSub.findByIdAndUpdate(id,{$set:{subjectCode:subjectCode, grade:grade, dept:dept}},function(err,nocs){
        
        
        
        
        
        })
        })*/
        RoomAlloSub.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){
    
        })
        
            
    
        })
    
           /* req.flash('success', 'Stock Received Successfully');
            res.redirect('/rec/addStock')*/
          }  /* else{
            req.flash('danger', 'Product Does Not Exist');         
            res.redirect('/rec/addStock');
          }*/
        }) 
    
         
    }
    
    
    req.flash('success', 'Students Allocated Successfully');
    res.redirect('/hostel//allocateRoomBatch')
    }) 
    })
    
    
    router.get('/alloSubRoomDelete/:id',isLoggedIn, (req, res) => {
      RoomAlloSub.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/hostel/studentRoom');
        }
        else { console.log('Error in deleting :' + err); }
      });
      });

  
  //student Details
   //autocomplete teacherName & uid
   
   router.get('/autocompleteTStudent/',isLoggedIn, function(req, res, next) {
   
  
    var regex= new RegExp(req.query["term"],'i');
   
    var uidFilter =User.find({  role:"student", fullname:regex, },{'fullname':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
  
        
     
  
          
         let obj={
           id:user._id,
           label: user.fullname,
  
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
  
           
         };
        
         result.push(obj);
         console.log('object',obj)
       });
  
     }
   
     res.jsonp(result);
     console.log('Result',result)
    }
  
  })
  
  });
  
  // role admin
  //this routes autopopulates teachers info from the id selected from automplet1
  /*
  router.post('/autoTS',isLoggedIn,function(req,res){
    var fullname = req.body.code
    var companyId = req.user.companyId
   
    User.find({companyId:companyId,fullname:fullname ,role:"teacher"},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/autoTS')
   }else
   console.log(docs[0],'docs[0]')
      res.send(docs[0])
    })
  
  
  })
  */

  router.post('/autoTStudent',isLoggedIn,function(req,res){
    var id = req.body.code

   
    User.findById(id,function(err,doc){
   if(doc== undefined){
     res.redirect('/records/autoTS')
   }else
   console.log(doc,'docs[0]')
      res.send(doc)
    })
  
  
  })
  
  
  
  
  
  ///discipline codes
  router.get('/alloDiscBatch',isLoggedIn,  function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('hostel/discBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    })
  
  
  
  
    router.post('/alloDiscBatch',isLoggedIn,  function(req,res){
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
       
  
        
    
  
  
    req.flash('danger', req.session.errors[0].msg);
         
          
    res.redirect('/hostel/alloDiscBatch');
      
      }
      
      else 
      
      CodeDisc.findOne({'code':code})
      .then(grower =>{
      if(grower){
  
        req.flash('danger', 'Code already in use');
   
        res.redirect('/hostel/alloDiscBatch');
      }else{
  
        var truck = new CodeDisc()
        truck.code = code
        truck.time = time
        truck.mformat = mformat
  
        truck.save()
            .then(pro =>{
  
        User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
            
          
        })
  res.redirect('/hostel/disc')
  
      })
  
      }
      
      })
      
      
      })

//allocate hostel to students

  
router.get('/disc',isLoggedIn,records, function(req,res){
  var pro = req.user

var code = req.user.paymentId


 
 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  if(code == "null"){

  

  res.render('hostel/discipline',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  }else{
    res.redirect('/hostel/alloDiscBatch')
  }


})




router.post('/disc', isLoggedIn,records, function(req,res){
  var pro = req.user
  var m = moment()
  var month = m.format('MMMM')
    var year = m.format('YYYY')
var code2 = req.user.paymentId
var name = req.body.name;
var type = req.body.type

var mark = req.body.mark;
var level = req.body.level;
var code = req.body.code;

var status = "null"
var arr, arr1



  
req.check('name','Enter Description of Code').notEmpty();
  
req.check('code','Enter  Code').notEmpty();

  
req.check('type','Enter  Type').notEmpty();

  
req.check('level','Enter  Level').notEmpty();

req.check('mark','Enter  Mark').notEmpty();




  
var errors = req.validationErrors();



 if (errors) {
 

   
      req.session.errors = errors;
      req.session.success = false;
      //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
   
      req.flash('danger', req.session.errors[0].msg);
   
    
      res.redirect('/hostel/disc');

  }
else{
DiscSub.findOne({'name':name,  'code':code})
.then(clax =>{
    if(clax){ 
   console.log('error')
      
     /* Class1.find({},function(err,docs){
        Subject.find({},function(err,locs){
        arr1 = docs;
        arr = locs
      
        req.session.message = {
          type:'errors',
          message:'subject already allocated'
        }   
      res.render('teachers/subjects',{message:req.session.message, arr:arr, arr1:arr1,pro:pro});
        })
      })*/

      req.flash('danger', 'Code already in the system');

  res.redirect('/hostel/disc');
      
    }
    else{

var teacher = new DiscSub();
teacher.name = name;
teacher.mark = mark;

teacher.level = level;
teacher.type = type;

teacher.code = code;
teacher.code2 = code2;
teacher.status = status



teacher.save()
.then(teach =>{
                     
  DiscSub.find({code2:code2,status:"null"},(err, docs) => {
    let size = docs.length - 1
    console.log(docs[size],'fff')
    res.send(docs[size])
            })

            console.log('zvaita')

})



    }
  

})
}
})
  
router.post('/loadDiscAllo',isLoggedIn, (req, res) => {
  var pro = req.user
  var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
  var code = req.user.paymentId


  DiscSub.find({code2:code,status:'null'},(err, docs) => {
 
    res.send(docs)
            })

  }); 
  
  
  router.post('/discAllo/update/:id',isLoggedIn,function(req,res){
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
    DiscSub.findById(id,function(err,doc){
    
    
    
     
      DiscSub.findByIdAndUpdate(id,{$set:{class1:class1}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })



    router.get('/saveDiscAllo/:id',isLoggedIn, function(req,res){
      var pro = req.user
     var receiver = req.user.fullname
     var code2 = req.params.id
    
    
    var m2 = moment()
    var wformat = m2.format('L')
    var year = m2.format('YYYY')
    var dateValue = m2.valueOf()
    var date = m2.toString()
    var numDate = m2.valueOf()
    var month = m2.format('MMMM')
    
    
    //var mformat = m.format("L")
    
    
    
   DiscSub.find({code2:code2,status:"null"},function(err,locs){
    
    for(var i=0;i<locs.length;i++){
    
    let name = locs[i].name
    let mark= locs[i].mark
    let level = locs[i].level
    let type = locs[i].type
    let code = locs[i].code
   
    
    
    let idN = locs[i]._id
    
    
    
    
      
    
      Discipline.findOne({'name':name,'code':code2})
      .then(hoc=>{
    
        if(!hoc){
         
        var teacher = new Discipline();
        teacher.name = name;
        teacher.mark = mark;
        teacher.level= level
        teacher.type = type;
        teacher.code = code;
       
    
        
        
        
        teacher.save()
        .then(teach =>{
                             
        id = teach._id;
        User.findByIdAndUpdate(uid,{$set:{paymentId:'null'}},function(err,doc){
    
        })
        



      
        })
    
           /* req.flash('success', 'Stock Received Successfully');
            res.redirect('/rec/addStock')*/
          }  /* else{
            req.flash('danger', 'Product Does Not Exist');         
            res.redirect('/rec/addStock');
          }*/
        }) 
    
         
    }
    
    
    req.flash('success', 'Disciplinary Codes Successfully Added');
    res.redirect('/hostel/alloDiscBatch')
    }) 
    })
    
    
    router.get('/alloSubDiscDelete/:id',isLoggedIn, (req, res) => {
     DiscSub.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/hostel/disc');
        }
        else { console.log('Error in deleting :' + err); }
      });
      });

  
  

router.get('/discList',isLoggedIn,(req,res)=>{
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  //res.render('hostel/discBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  Discipline.find(function(err,docs){
    res.render('hostel/discList',{listX:docs,pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })
})



User.find({role:'student'},function(err,docs){
  for(var i=0;i<docs.length;i++){
    let uid = docs[i].uid
     arr[uid]=[]
  }
})

console.log('vvx')
var m = moment()
var month = m.format('MMMM')
  var year = m.format('YYYY')
console.log(month,'mmmmm')
//var term = req.user.term
User.find({role:"student"},function(err,docs){

for(var i = 0; i<docs.length;i++){

//console.log(docs[i].uid,'ccc')
let uid = docs[i].uid
//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
  StudentDisc.find({year:year,month:month,studentId:uid}).lean().then(vocs=>{

  
for(var x = 0;x<vocs.length;x++){
  //size = docs.length
 // let subject = vocs[x].subject
   
   if( arr[uid].length > 0 && arr[uid].find(value => value.uid == uid) ){
 
    arr[uid].push(vocs[x])
         //console.log(arr,'arrX')
        }
        
         
        
        
        else{
          arr[uid].push(vocs[x])
          // console.log(arr,'push')
          
            //element.size = 0
            /*if(arr[uid].find(value => value.subject == subject)){*/
       
             
                  // arr[uid].find(value => value.subject == subject).size++;


     
            /*}*/
          //  console.log(arr,'ll'+uid)
            //element.size = element.size + 1
              
          } 


         /* arr[uid].forEach((element,index)=>{
            if(element.size > 0) {
              //console.log(element,'element')
            
              //element.percentage  = element.percentage / element.size

              console.log(element.percentage, element.size,'drumless')
              let num = Math.round(element.percentage)
  num.toFixed(2)
  element.percentage =num


            }
        
          })*/

         

}
        })
        }
      })

/*})*/


////////////

router.get('/discPdf3',isLoggedIn,function(req,res){
  console.log(arr,'arr')
  var m = moment()
  var month = m.format('MMMM')
    var year = m.format('YYYY')
    var mformat = m.format('L')
    var hostel = req.user.hostel
    var head = req.user.fullname
/*console.log(arr,'iiii')*/
User.find({role:"student",hostel:hostel},function(err,docs){

  for(var i = 0; i<docs.length;i++){
    let studentId = docs[i].uid

  let uid = docs[i].uid
  let class1 = docs[i].class1
  let term = docs[i].term
  let room = docs[i].room

  let studentName = docs[i].fullname
//console.log(docs,'docs')
console.log(uid,'uid')

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
 const content = await compile('reportF',arr[studentId])

await page.setContent(content, { waitUntil: 'networkidle2'});
 //await page.setContent(content)
//create a pdf document
await page.emulateMediaType('screen')
await page.evaluate(() => matchMedia('screen').matches);
await page.setContent(content, { waitUntil: 'networkidle0'});
//console.log(await page.pdf(),'7777')

await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./studentDiscReports/active/${hostel}/${year}/${uid}`+'.pdf'),
  format:"A4",
  width:'30cm',
height:'21cm',
  printBackground:true
})



var repo = new StudentDiscReport();
 
repo.uid = uid;
repo.studentName = studentName;
repo.month = month;
repo.filename = uid+'.pdf';
repo.year = year;
repo.term = term
repo.date = mformat
repo.hostel = hostel
repo.head = head
repo.room = room
repo.type = "Student Discipline Record"
repo.save().then(poll =>{
  console.log("Done creating pdf",uid)
})





}catch(e) {

  console.log(e)


}

}) ()

}

})
 

})


router.get('/statement',function(req,res){
  //var id = '65e84358a320553bd81708b5';
User.find({u:"SZ120"},function(err,doc){
let docV = doc[0]

 StudentDisc.find({studentId:"SZ120"},function(err,docs){

    res.render('hostel/reportF',{listX:docs,doc:docV})
 })
})
})



    
router.get('/studentRecord/:id',isLoggedIn,(req,res)=>{
  var pro = req.user
  var id = req.params.id
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  //res.render('hostel/discBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  Discipline.findById(id,function(err,doc){
    res.render('hostel/studentRecord',{doc:doc,id:id,pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })
})





router.post('/studentRecord/:id', isLoggedIn,records, function(req,res){
  var pro = req.user
  var m = moment()
  var date2 = req.body.date
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var dateX = moment(date2).format('L')
  var mformat = m.format("L")
var headId;

var head= req.user.fullname;

var gender = req.body.gender
var hostel = req.body.hostel;
var grade = req.body.grade;
var room = req.body.room;
var class1 = req.body.class1;
var type = req.body.type;
var level = req.body.level;
var grade = req.body.grade;
var class1 = req.body.class1;
var mark = req.body.mark;
var code = req.body.code;
var name = req.body.name;
var studentId = req.body.uid;
var studentName = req.body.studentName;
var comments = req.body.comments;
var _id = req.body._id

  
req.check('studentName','Enter Name Of Student').notEmpty();

req.check('uid','Enter Student ID').notEmpty();


req.check('name','Enter Description of Record').notEmpty();

req.check('code','Enter Code of Description').notEmpty();

req.check('comments','Enter Deans Comments').notEmpty();
  
var errors = req.validationErrors();



 if (errors) {
 

   
      req.session.errors = errors;
      req.session.success = false;
      //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
   
      req.flash('danger', req.session.errors[0].msg);
   
    
      res.redirect('/hostel/studentRecord/'+id);

  }
else
StudentDisc.findOne({'studentId':studentId,  'code':code, 'date':date})
.then(clax =>{
    if(clax){ 
   
      

      req.flash('danger', 'Recorded Already in the System');

  res.redirect('/hostel/studentRecord/'+id);
      
    }
    else{

    

    
    var teacher = new StudentDisc();
    teacher.name = name;
    teacher.hostelHead = head;
    teacher.hostel = hostel
    teacher.mark = mark;
    teacher.type = type;
    teacher.code = code;
    teacher.class1 = class1;
    teacher.grade = grade;
    teacher.studentName = studentName;
    teacher.studentId = studentId;
    teacher.room = room;
    teacher.date = dateX;
    teacher.mformat = mformat;
    teacher.month = month;
    teacher.comments = comments;
    teacher.level =level;
    teacher.year = year
    teacher.idX = _id
   

    
    
    
    teacher.save()
.then(teach =>{


  

  


  req.flash('success', 'Record Added Successfully');

  res.redirect('/hostel/discList');

})
}




})

})


//agg Year Float
//allo month batch
router.get('/alloYearBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloYearBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloYearBatch',isLoggedIn,  function(req,res){
  var id =req.user._id
  
  var year = req.body.year
  var pro = req.user

    
    

  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/hostel/alloYearBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
    
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year}},function(err,docs){

})

 
res.redirect('/hostel/aggFloat');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloYearBatch');


    

    }
    
    })
    
  }
    })




//aggFloat
router.get('/aggFloat',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel

  FloatVoucher.find({year:year,type:"Float Deposit",hostel:hostel},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }

FloatVoucher.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggFloat:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggVouchers')


  })




})
//aggVouchers

router.get('/aggVouchers',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel
  FloatVoucher.find({year:year,type:"Cash Withdrawal",hostel:hostel},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }

FloatVoucher.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggVouchers:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggBal')


  })




})
//aggBalance
router.get('/aggBal',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel

FloatVoucher.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    let aggBal = docs[i].aggFloat - docs[i].aggVouchers
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggBalance:aggBal}},function(err,focs){

    })
  }


  //aggVouchers
       
    



        res.redirect('/hostel/generateAnnualVoucherReport1')


  })




})



router.get('/generateAnnualVoucherReport1',function(req,res){

  var year = req.user.hostelYear
  var hostel = req.user.hostel
  var month = req.user.hostelMonth
  //var term = req.user.term
  Hostel.find({name:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let name = docs[i].name
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    FloatVoucher.find({year:year,hostel:name}).lean().then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){
    //size = docs.length
   // let subject = vocs[x].subject
     
     if( arr2[name].length > 0 && arr2[name].find(value => value.name == name) ){
   
      arr2[name].push(vocs[x])
           //console.log(arr,'arrX')
          }
          
           
          
          
          else{
            arr2[name].push(vocs[x])
            // console.log(arr,'push')
            
              //element.size = 0
              /*if(arr[uid].find(value => value.subject == subject)){*/
         
               
                    // arr[uid].find(value => value.subject == subject).size++;
  
  
       
              /*}*/
            //  console.log(arr,'ll'+uid)
              //element.size = element.size + 1
                
            } 
  
  
           /* arr[uid].forEach((element,index)=>{
              if(element.size > 0) {
                //console.log(element,'element')
              
                //element.percentage  = element.percentage / element.size
  
                console.log(element.percentage, element.size,'drumless')
                let num = Math.round(element.percentage)
    num.toFixed(2)
    element.percentage =num
  
  
              }
          
            })*/
  
           
  
  }
          })
          }
          res.redirect('/hostel/voucherAnnualReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/voucherAnnualReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
    var name = req.user.hostel
   
      var mformat = m.format('L')
      var term = req.user.hostelTerm
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
   const content = await compile('reportF2',arr2[name])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./voucherReports/annual/${year}/${name}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
  var repo = new VouchReport();
   
  repo.hostel = name
  repo.month = month;
  repo.filename = name+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Voucher Annual"
  repo.save().then(poll =>{
    console.log("Done creating pdf",name)
  })
  
  
  /*await browser.close()
  
  process.exit()*/
  req.flash('success', 'Report Generation Successful');
 
  res.redirect('/hostel/alloYearBatch');
  
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  
  //res.redirect('/hostel/discList')


  

  
  

  })
  
  
  
//month agg
 //allo month batch
 router.get('/alloMonthBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloMonthBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloMonthBatch',isLoggedIn,  function(req,res){
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
       
        
     res.redirect('/hostel/alloMonthBatch');


    
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

 
res.redirect('/hostel/aggFloatMonth');
        
          
          
          
        }
      })

    

    
    }else{

      req.flash('danger', 'Month/Year dont exist');
 
      res.redirect('/hostel/alloMonthBatch');


    

    }
    
    })
    
  }
    })


    //aggg
    router.get('/aggFloatMonth',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var month = req.user.hostelMonth
      var arr1 = []
      var number1
      var hostel = req.user.hostel
    
      FloatVoucher.find({year:year,month:month,type:"Float Deposit",hostel:hostel},function(err,hods){
    
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
    
    FloatVoucher.find({year:year,month:month,hostel:hostel},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggFloat:number1}},function(err,focs){
    
        })
      }
    })
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/aggVouchersMonth')
    
    
      })
    
    
    
    
    })
    //aggVouchers
    
    router.get('/aggVouchersMonth',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var month = req.user.hostelMonth
      var arr1 = []
      var number1
      var hostel =req.user.hostel
    
      FloatVoucher.find({year:year,month:month,type:"Cash Withdrawal",hostel:hostel},function(err,hods){
    
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
    
    FloatVoucher.find({year:year,month:month,hostel:hostel},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggVouchers:number1}},function(err,focs){
    
        })
      }
    })
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/aggBalMonth')
    
    
      })
    
    
    
    
    })
    //aggBalance
    router.get('/aggBalMonth',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var month = req.user.hostelMonth
      var arr1 = []
      var number1
      var hostel =  req.user.hostel
    
    
    FloatVoucher.find({year:year,month:month,hostel:hostel},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        let aggBal = docs[i].aggFloat - docs[i].aggVouchers
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggBalance:aggBal}},function(err,focs){
    
        })
      }
    
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/generateMonthlyVoucherReport1')
    
    
      })
    
    
    
    
    })

    router.get('/generateMonthlyVoucherReport1',function(req,res){

      var year = req.user.hostelYear
      var month = req.user.hostelMonth
      var hostel = req.user.hostel
      //var term = req.user.term
      Hostel.find({name:hostel},function(err,docs){
      
      for(var i = 0; i<docs.length;i++){
      
      //console.log(docs[i].uid,'ccc')
      let name = docs[i].name
      //let uid = "SZ125"
      
      
      //TestX.find({year:year,uid:uid},function(err,vocs) {
        FloatVoucher.find({year:year,month:month,hostel:name}).lean().then(vocs=>{
      
        
      for(var x = 0;x<vocs.length;x++){
        //size = docs.length
       // let subject = vocs[x].subject
         
         if( arr2[name].length > 0 && arr2[name].find(value => value.name == name) ){
       
          arr2[name].push(vocs[x])
               //console.log(arr,'arrX')
              }
              
               
              
              
              else{
                arr2[name].push(vocs[x])
                // console.log(arr,'push')
                
                  //element.size = 0
                  /*if(arr[uid].find(value => value.subject == subject)){*/
             
                   
                        // arr[uid].find(value => value.subject == subject).size++;
      
      
           
                  /*}*/
                //  console.log(arr,'ll'+uid)
                  //element.size = element.size + 1
                    
                } 
      
      
               /* arr[uid].forEach((element,index)=>{
                  if(element.size > 0) {
                    //console.log(element,'element')
                  
                    //element.percentage  = element.percentage / element.size
      
                    console.log(element.percentage, element.size,'drumless')
                    let num = Math.round(element.percentage)
        num.toFixed(2)
        element.percentage =num
      
      
                  }
              
                })*/
      
               
      
      }
              })
              }
              res.redirect('/hostel/voucherMonthlyReportGeneration')
            })
      
      /*})*/
      
      })
      ////////////
      
      router.get('/voucherMonthlyReportGeneration',isLoggedIn,function(req,res){
      
        var m = moment()
        var year = req.user.hostelYear
        var month = req.user.hostelMonth
          var mformat = m.format('L')
          var term = req.user.hostelTerm
          var name = req.user.hostel
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
       const content = await compile('reportF2HostelMonth',arr2[name])
      
      //console.log(arr[uid],'tamama')
      await page.setContent(content, { waitUntil: 'networkidle2'});
       //await page.setContent(content)
      //create a pdf document
      await page.emulateMediaType('screen')
      await page.evaluate(() => matchMedia('screen').matches);
      await page.setContent(content, { waitUntil: 'networkidle0'});
      //console.log(await page.pdf(),'7777')
      
      await page.pdf({
        //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
        path:(`./voucherReports/monthly/${year}/${month}/${name}`+'.pdf'),
        format:"A4",
        width:'30cm',
      height:'21cm',
        printBackground:true
      })
      
      
      var repo = new VouchReport();
   
  repo.hostel = name
  repo.month = month;
  repo.filename = name+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Voucher Monthly"
  repo.save().then(poll =>{
    console.log("Done creating pdf",name)
  })
      
      
      /*await browser.close()
      
      process.exit()*/

      
      req.flash('success', 'Report Generated Successfully');
 
      res.redirect('/hostel/alloMonthBatch');

      
      
      
      }catch(e) {
      
        console.log(e)
      
      
      }
      
      }) ()
      
     
      
      
      
      })
      
      
      


//aggTerm

router.get('/alloTermBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloTermBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloTermBatch',isLoggedIn,  function(req,res){
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
       
        
     res.redirect('/hostel/alloTermBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
     
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelTerm:term}},function(err,docs){

})

 
res.redirect('/hostel/aggFloatTerm');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloTermBatch');


    

    }
    
    })
    
  }
    })


    //aggg
    router.get('/aggFloatTerm',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var term = req.user.hostelTerm
      var arr1 = []
      var number1
    
      FloatVoucher.find({year:year,term:term,type:"Float Deposit"},function(err,hods){
    
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
    
    FloatVoucher.find({year:year,term:term},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggFloat:number1}},function(err,focs){
    
        })
      }
    })
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/aggVouchersTerm')
    
    
      })
    
    
    
    
    })
    //aggVouchers
    
    router.get('/aggVouchersTerm',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var term = req.user.hostelTerm
      var arr1 = []
      var number1
    
      FloatVoucher.find({year:year,term:term,type:"Cash Withdrawal"},function(err,hods){
    
        for(var q = 0;q<hods.length; q++){
            
          arr1.push(hods[q].amount)
            }
            //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
             number1=0;
            for(var z in arr1) { number1 += arr1[z]; }
    
    FloatVoucher.find({year:year,term:term},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggVouchers:number1}},function(err,focs){
    
        })
      }
    })
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/aggBalTerm')
    
    
      })
    
    
    
    
    })
    //aggBalance
    router.get('/aggBalTerm',isLoggedIn,function(req,res){
      var m = moment()
      var year = req.user.hostelYear
      var term = req.user.hostelTerm
      var arr1 = []
      var number1
    
    
    FloatVoucher.find({year:year,term:term},function(err,docs){
      for(var i = 0;i <docs.length;i++){
        let id =  docs[i]._id
        let aggBal = docs[i].aggFloat - docs[i].aggVouchers
        FloatVoucher.findByIdAndUpdate(id,{$set:{aggBalance:aggBal}},function(err,focs){
    
        })
      }
    
    
      //aggVouchers
           
        
    
    
    
            res.redirect('/hostel/generateTermlyVoucherReport1')
    
    
      })
    
    
    
    
    })

////voucher reports

Hostel.find(function(err,docs){
  for(var i=0;i<docs.length;i++){
    let name = docs[i].name
     arr2[name]=[]
  }
})

router.get('/generateTermlyVoucherReport1',function(req,res){

  var year = req.user.hostelYear
  var term = req.user.hostelTerm
//var term = req.user.term
Hostel.find(function(err,docs){

for(var i = 0; i<docs.length;i++){

//console.log(docs[i].uid,'ccc')
let name = docs[i].name
//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
  FloatVoucher.find({year:year,term:term,hostel:name}).lean().then(vocs=>{

  
for(var x = 0;x<vocs.length;x++){
  //size = docs.length
 // let subject = vocs[x].subject
   
   if( arr2[name].length > 0 && arr2[name].find(value => value.name == name) ){
 
    arr2[name].push(vocs[x])
         //console.log(arr,'arrX')
        }
        
         
        
        
        else{
          arr2[name].push(vocs[x])
          // console.log(arr,'push')
          
            //element.size = 0
            /*if(arr[uid].find(value => value.subject == subject)){*/
       
             
                  // arr[uid].find(value => value.subject == subject).size++;


     
            /*}*/
          //  console.log(arr,'ll'+uid)
            //element.size = element.size + 1
              
          } 


         /* arr[uid].forEach((element,index)=>{
            if(element.size > 0) {
              //console.log(element,'element')
            
              //element.percentage  = element.percentage / element.size

              console.log(element.percentage, element.size,'drumless')
              let num = Math.round(element.percentage)
  num.toFixed(2)
  element.percentage =num


            }
        
          })*/

         

}
        })
        }
        res.redirect('/hostel/voucherTermlyReportGeneration')
      })

/*})*/

})
////////////

router.get('/voucherTermlyReportGeneration',isLoggedIn,function(req,res){

  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
    var mformat = m.format('L')
    var term = req.user.hostelTerm
    var name= req.user.hostel
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
 const content = await compile('reportF2HostelTerm',arr2[name])

//console.log(arr[uid],'tamama')
await page.setContent(content, { waitUntil: 'networkidle2'});
 //await page.setContent(content)
//create a pdf document
await page.emulateMediaType('screen')
await page.evaluate(() => matchMedia('screen').matches);
await page.setContent(content, { waitUntil: 'networkidle0'});
//console.log(await page.pdf(),'7777')

await page.pdf({
  //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
  path:(`./voucherReports/termly/${year}/${term}/${name}`+'.pdf'),
  format:"A4",
  width:'30cm',
height:'21cm',
  printBackground:true
})



var repo = new VouchReport();
   
repo.hostel = name
repo.month = month;
repo.filename = name+'.pdf';
repo.year = year;
repo.term = 1
repo.date = mformat
repo.type = "Voucher Termly"
repo.save().then(poll =>{
  console.log("Done creating pdf",name)
})


/*await browser.close()

process.exit()*/
req.flash('success', 'Report Generated Successfully');
 
res.redirect('/hostel/alloTermBatch');





}catch(e) {

  console.log(e)


}

}) ()





})

router.get('/arrUpdate',isLoggedIn,function(req,res){

var hostel = req.user.hostel
HostelAllo.find({hostel:hostel},function(err,docs){
  for(var i=0;i<docs.length;i++){
    let studentId = docs[i].studentId
     arr3[studentId]=[]
  }
})

res.redirect('/hostel/alloStudentYearBatch')

})

//student voucher year batch
//agg Year Float
//allo month batch
router.get('/alloStudentYearBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloStudentYearBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloStudentYearBatch',isLoggedIn,  function(req,res){
  var id =req.user._id
  
  var year = req.body.year
  var pro = req.user

    
    console.log(arr3,'arr4')

  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/hostel/alloStudentYearBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
    
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year}},function(err,docs){

})

 
res.redirect('/hostel/aggStudentFloat');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloStudentYearBatch');


    

    }
    
    })
    
  }
    })




//aggFloat
router.get('/aggStudentFloat',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
 
console.log(arr3,'arr3')
var hostel = req.user.hostel

HostelAllo.find({hostel:hostel},function(err,docs){
  for(var i = 0; i<docs.length;i++){
    let studentId = docs[i].studentId

  FloatVoucher.find({studentId:studentId,year:year,type:"Float Deposit"},function(err,hods){
 console.log(studentId,hods.length,'show')
 let arr1 = []
 let number1
    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }
    
FloatVoucher.find({year:year,studentId:studentId},function(err,vocs){
 
  for(var n = 0;n <vocs.length;n++){
    let id =  vocs[n]._id
    let uid = vocs[n].studentId
    console.log(n,uid,'n')
    FloatVoucher.findByIdAndUpdate(vocs[n]._id,{$set:{iFloat:number1}},function(err,focs){

    })
  }
  number1=0
})

  //aggVouchers
       
  

  })

}
res.redirect('/hostel/aggStudentVouchers')
})


})
//aggVouchers

router.get('/aggStudentVouchers',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
 
  var hostel = req.user.hostel

  HostelAllo.find({hostel:hostel},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let studentId = docs[i].studentId
      arr1 = []
  FloatVoucher.find({year:year,type:"Cash Withdrawal",studentId:studentId},function(err,hods){
    let arr1 = []
    let number1
    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }

FloatVoucher.find({year:year,studentId:studentId},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    FloatVoucher.findByIdAndUpdate(id,{$set:{iVouchers:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



      


  })
    }
    res.redirect('/hostel/aggStudentBal')
  })



})
//aggBalance
router.get('/aggStudentBal',isLoggedIn,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')


  var hostel = req.user.hostel

  HostelAllo.find({hostel:hostel},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let studentId = docs[i].studentId
   
FloatVoucher.find({year:year,studentId:studentId},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    let aggBal = docs[i].iFloat - docs[i].iVouchers
    FloatVoucher.findByIdAndUpdate(id,{$set:{iBalance:aggBal}},function(err,focs){

    })
  }


  //aggVouchers
       
    



       


  })
    }
    res.redirect('/hostel/generateStudentAnnualVoucherReport1')
  })



})



router.get('/generateStudentAnnualVoucherReport1',function(req,res){

  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var hostel = req.user.hostel
  //var term = req.user.term
  HostelAllo.find({hostel:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let studentId = docs[i].studentId
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    FloatVoucher.find({year:year,hostel:hostel,studentId:studentId}).lean().then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){
    //size = docs.length
   // let subject = vocs[x].subject
     
     if( arr3[studentId].length > 0 && arr3[studentId].find(value => value.studentId == studentId) ){
   
      arr3[studentId].push(vocs[x])
           //console.log(arr,'arrX')
          }
          
           
          
          
          else{
            arr3[studentId].push(vocs[x])
            // console.log(arr,'push')
            
              //element.size = 0
              /*if(arr[uid].find(value => value.subject == subject)){*/
         
               
                    // arr[uid].find(value => value.subject == subject).size++;
  
  
       
              /*}*/
            //  console.log(arr,'ll'+uid)
              //element.size = element.size + 1
                
            } 
  
  
           /* arr[uid].forEach((element,index)=>{
              if(element.size > 0) {
                //console.log(element,'element')
              
                //element.percentage  = element.percentage / element.size
  
                console.log(element.percentage, element.size,'drumless')
                let num = Math.round(element.percentage)
    num.toFixed(2)
    element.percentage =num
  
  
              }
          
            })*/
  
           
  
  }
          })
          }
          res.redirect('/hostel/voucherStudentAnnualReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/voucherStudentAnnualReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
   var hostel = req.user.hostel
      var mformat = m.format('L')
      var term = req.user.hostelTerm
      var head = req.user.fullname
  /*console.log(arr,'iiii')*/
  HostelAllo.find({hostel:hostel},function(err,locs){
    for(var x = 0; x<locs.length;x++){
      let studentId = locs[x].studentId
      let name = locs[x].studentName
  FloatVoucher.find({hostel:hostel,year:year,studentId:studentId},function(err,docs){
    if(docs.length > 0){
    for(var i = 0; i< docs.length;i++){
  
    let room = docs[i].room
    
    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arr3){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arr3)
   
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
   const content = await compile('reportF2Students',arr3[studentId])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./VoucherStudentReports/annual/${year}/${studentId}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
   
    
  var repo = new VouchStudentReport();
   
  repo.uid = studentId;
  repo.studentName = name
  repo.hostel = hostel
  repo.head = head
  repo.room = room
  repo.month = month;
  repo.filename = studentId+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Voucher Student Annual"
  repo.save().then(poll =>{
    console.log("Done creating pdf",studentId)
  })
  
  
  /*await browser.close()
  
  process.exit()*/
  
  
  req.flash('success', 'Report Generation Success');
 
  res.redirect('/hostel/alloStudentYearBatch');
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  }
  //res.redirect('/hostel/discList')
}/*else{

  req.flash('danger', 'Report Generation Failed');
 
  res.redirect('/hostel/alloStudentYearBatch');
}*/
  })
}
})  

  })
  
  
//monthly student voucher reports
router.get('/arrMonthlyUpdate',isLoggedIn,function(req,res){

  var hostel = req.user.hostel
  HostelAllo.find({hostel:hostel},function(err,docs){
    for(var i=0;i<docs.length;i++){
      let studentId = docs[i].studentId
       arr3[studentId]=[]
    }
  })
  
  res.redirect('/hostel/alloStudentMonthlyBatch')
  
  })
  
  //student voucher year batch
  //agg Year Float
  //allo month batch
  router.get('/alloStudentMonthlyBatch',isLoggedIn,  function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('hostel/alloStudentMonthBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    })
  
  
  
  
  
  ////
  
  router.post('/alloStudentMonthlyBatch',isLoggedIn,  function(req,res){
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
         
          
       res.redirect('/hostel/alloStudentMonthlyBatch');
  
  
      
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
  
   
  res.redirect('/hostel/aggStudentMonthlyFloat');
          
            
            
            
          }
        })
  
      
  
      
      }else{
  
        req.flash('danger', 'Month/Year dont exist');
   
        res.redirect('/hostel/alloStudentMonthlyBatch');
  
  
      
  
      }
      
      })
      
    }
      })
  
  
  
  //aggFloat
  router.get('/aggStudentMonthlyFloat',isLoggedIn,function(req,res){
    var m = moment()
    var year = m.format('YYYY')
    var month = req.user.hostelMonth
   
  console.log(arr3,'arr3')
  var hostel = req.user.hostel
  
  HostelAllo.find({hostel:hostel},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let studentId = docs[i].studentId
  
    FloatVoucher.find({studentId:studentId,month:month,year:year,type:"Float Deposit"},function(err,hods){
   console.log(studentId,hods.length,'show')
   let arr1 = []
   let number1
      for(var q = 0;q<hods.length; q++){
          
        arr1.push(hods[q].amount)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr1) { number1 += arr1[z]; }
      
  FloatVoucher.find({year:year,month:month,studentId:studentId},function(err,vocs){
   
    for(var n = 0;n <vocs.length;n++){
      let id =  vocs[n]._id
      let uid = vocs[n].studentId
      console.log(n,uid,'n')
      FloatVoucher.findByIdAndUpdate(vocs[n]._id,{$set:{iFloat:number1}},function(err,focs){
  
      })
    }
    number1=0
  })
  
    //aggVouchers
         
    
  
    })
  
  }
  res.redirect('/hostel/aggStudentMonthlyVouchers')
  })
  
  
  })
  //aggVouchers
  
  router.get('/aggStudentMonthlyVouchers',isLoggedIn,function(req,res){
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
   
    var hostel = req.user.hostel
  
    HostelAllo.find({hostel:hostel},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let studentId = docs[i].studentId
        arr1 = []
    FloatVoucher.find({year:year,type:"Cash Withdrawal",month:month,studentId:studentId},function(err,hods){
      let arr1 = []
      let number1
      for(var q = 0;q<hods.length; q++){
          
        arr1.push(hods[q].amount)
          }
          //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
           number1=0;
          for(var z in arr1) { number1 += arr1[z]; }
  
  FloatVoucher.find({year:year,month:month,studentId:studentId},function(err,docs){
    for(var i = 0;i <docs.length;i++){
      let id =  docs[i]._id
      FloatVoucher.findByIdAndUpdate(id,{$set:{iVouchers:number1}},function(err,focs){
  
      })
    }
  })
  
    //aggVouchers
         
      
  
  
  
        
  
  
    })
      }
      res.redirect('/hostel/aggStudentMonthlyBal')
    })
  
  
  
  })
  //aggBalance
  router.get('/aggStudentMonthlyBal',isLoggedIn,function(req,res){
    var m = moment()
    var year = m.format('YYYY')
    var month = req.user.hostelMonth
  
  
    var hostel = req.user.hostel
  
    HostelAllo.find({hostel:hostel},function(err,docs){
      for(var i = 0; i<docs.length;i++){
        let studentId = docs[i].studentId
     
  FloatVoucher.find({year:year,studentId:studentId,month:month,},function(err,docs){
    for(var i = 0;i <docs.length;i++){
      let id =  docs[i]._id
      let aggBal = docs[i].iFloat - docs[i].iVouchers
      FloatVoucher.findByIdAndUpdate(id,{$set:{iBalance:aggBal}},function(err,focs){
  
      })
    }
  
  
    //aggVouchers
         
      
  
  
  
         
  
  
    })
      }
      res.redirect('/hostel/generateStudentMonthlyVoucherReport1')
    })
  
  
  
  })
  
  
  
  router.get('/generateStudentMonthlyVoucherReport1',function(req,res){
  
    var year = req.user.hostelYear
    var month = req.user.hostelMonth
    var hostel = req.user.hostel
    //var term = req.user.term
    HostelAllo.find({hostel:hostel},function(err,docs){
    
    for(var i = 0; i<docs.length;i++){
    
    //console.log(docs[i].uid,'ccc')
    let studentId = docs[i].studentId
    //let uid = "SZ125"
    
    
    //TestX.find({year:year,uid:uid},function(err,vocs) {
      FloatVoucher.find({year:year,hostel:hostel,month:month,studentId:studentId}).lean().then(vocs=>{
    
      
    for(var x = 0;x<vocs.length;x++){
      //size = docs.length
     // let subject = vocs[x].subject
       
       if( arr3[studentId].length > 0 && arr3[studentId].find(value => value.studentId == studentId) ){
     
        arr3[studentId].push(vocs[x])
             //console.log(arr,'arrX')
            }
            
             
            
            
            else{
              arr3[studentId].push(vocs[x])
              // console.log(arr,'push')
              
                //element.size = 0
                /*if(arr[uid].find(value => value.subject == subject)){*/
           
                 
                      // arr[uid].find(value => value.subject == subject).size++;
    
    
         
                /*}*/
              //  console.log(arr,'ll'+uid)
                //element.size = element.size + 1
                  
              } 
    
    
             /* arr[uid].forEach((element,index)=>{
                if(element.size > 0) {
                  //console.log(element,'element')
                
                  //element.percentage  = element.percentage / element.size
    
                  console.log(element.percentage, element.size,'drumless')
                  let num = Math.round(element.percentage)
      num.toFixed(2)
      element.percentage =num
    
    
                }
            
              })*/
    
             
    
    }
            })
            }
            res.redirect('/hostel/voucherStudentMonthlyReportGeneration')
          })
    
    /*})*/
    
    })
    ////////////
    
    router.get('/voucherStudentMonthlyReportGeneration',isLoggedIn,function(req,res){
    
      var m = moment()
      var year = req.user.hostelYear
     var hostel = req.user.hostel
        var mformat = m.format('L')
        var term = req.user.hostelTerm
        var month = req.user.hostelMonth
        var head = req.user.fullname
    /*console.log(arr,'iiii')*/
    HostelAllo.find({hostel:hostel},function(err,locs){
      for(var x = 0; x<locs.length;x++){
        let studentId = locs[x].studentId
        let studentName = locs[x].studentName
  
    FloatVoucher.find({hostel:hostel,year:year,month:month,studentId:studentId},function(err,docs){
      if(docs.length > 0){
      for(var i = 0; i< docs.length;i++){
        let room = docs[i].room
    
      
      
      
    //console.log(docs,'docs')
    
    const compile = async function (templateName, arr3){
      const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
    
      const html = await fs.readFile(filePath, 'utf8')
    
      return hbs.compile(html)(arr3)
     
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
     const content = await compile('reportF2StudentsMonth',arr3[studentId])
    
    //console.log(arr[uid],'tamama')
    await page.setContent(content, { waitUntil: 'networkidle2'});
     //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
      //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
      path:(`./VoucherStudentReports/monthly/${year}/${month}/${studentId}`+'.pdf'),
      format:"A4",
      width:'30cm',
    height:'21cm',
      printBackground:true
    })
    
    
    
    var repo = new VouchStudentReport();
   
  repo.uid = studentId;
  repo.studentName = studentName
  repo.hostel = hostel
  repo.head = head
  repo.room = room
  repo.month = month;
  repo.filename = studentId+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Voucher Student Monthly"
  repo.save().then(poll =>{
    console.log("Done creating pdf",studentId)
  })
  
    
   
    
    
    req.flash('success', 'Report Generation Successfull');
   
    res.redirect('/hostel/alloStudentMonthlyBatch');
    
    }catch(e) {
    
      console.log(e)
    
    
    }
  
    
    }) ()
  
  
    
    }
    //res.redirect('/hostel/discList')
  }/*else{
  
    req.flash('danger', 'Report Generation Failed');
   
    res.redirect('/hostel/alloStudentYearBatch');
  }*/
    })
  }
  })  
  
    })
    


//aggStudentTerm

//monthly student voucher reports
router.get('/arrTermlyUpdate',isLoggedIn,function(req,res){

  var hostel = req.user.hostel
  HostelAllo.find({hostel:hostel},function(err,docs){
    for(var i=0;i<docs.length;i++){
      let studentId = docs[i].studentId
       arr3[studentId]=[]
    }
  })
  
  res.redirect('/hostel/alloStudentTermlyBatch')
  
  })
  
//aggTerm

router.get('/alloStudentTermlyBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloStudentTermBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloStudentTermlyBatch',isLoggedIn,  function(req,res){
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
       
        
     res.redirect('/hostel/alloStudentTermlyBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
     
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelTerm:term}},function(err,docs){

})

 
res.redirect('/hostel/aggStudentFloatTerm');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloStudentTermlyBatch');


    

    }
    
    })
    
  }
    })

 //aggg
 router.get('/aggStudentFloatTerm',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var arr1 = []
  var number1
  var term = req.user.hostelTerm

  FloatVoucher.find({year:year,term:term,type:"Float Deposit"},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }

FloatVoucher.find({year:year,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggFloat:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggStudentVouchersTerm')


  })




})
//aggVouchers

router.get('/aggStudentVouchersTerm',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var arr1 = []
  var number1
  var term = req.user.hostelTerm

  FloatVoucher.find({year:year,term:term,type:"Cash Withdrawal"},function(err,hods){

    for(var q = 0;q<hods.length; q++){
        
      arr1.push(hods[q].amount)
        }
        //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
         number1=0;
        for(var z in arr1) { number1 += arr1[z]; }

FloatVoucher.find({year:year,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggVouchers:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggStudentBalTerm')


  })




})
//aggBalance
router.get('/aggStudentBalTerm',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = req.user.hostelMonth
  var arr1 = []
  var number1
  var term = req.user.hostelTerm


FloatVoucher.find({year:year,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    let aggBal = docs[i].aggFloat - docs[i].aggVouchers
    FloatVoucher.findByIdAndUpdate(id,{$set:{aggBalance:aggBal}},function(err,focs){

    })
  }


  //aggVouchers
       
    



        res.redirect('/hostel/generateStudentTermlyVoucherReport1')


  })




})

router.get('/generateStudentTermlyVoucherReport1',function(req,res){
  
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
  var hostel = req.user.hostel
  //var term = req.user.term
  HostelAllo.find({hostel:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let studentId = docs[i].studentId
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    FloatVoucher.find({year:year,hostel:hostel,term:term,studentId:studentId}).lean().then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){
    //size = docs.length
   // let subject = vocs[x].subject
     
     if( arr3[studentId].length > 0 && arr3[studentId].find(value => value.studentId == studentId) ){
   
      arr3[studentId].push(vocs[x])
           //console.log(arr,'arrX')
          }
          
           
          
          
          else{
            arr3[studentId].push(vocs[x])
        
            } 
  
  
           
  
  }
          })
          }
          res.redirect('/hostel/voucherStudentTermlyReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/voucherStudentTermlyReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
   var hostel = req.user.hostel
      var mformat = m.format('L')
      var term = req.user.hostelTerm
      var head = req.user.fullname
    
  /*console.log(arr,'iiii')*/
  HostelAllo.find({hostel:hostel},function(err,locs){
    for(var x = 0; x<locs.length;x++){
      let studentId = locs[x].studentId
     
      let name = locs[x].studentName

  FloatVoucher.find({hostel:hostel,year:year,term:term,studentId:studentId},function(err,docs){
    if(docs.length > 0){
    for(var i = 0; i< docs.length;i++){
  
    
      let room = docs[i].room
    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arr3){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arr3)
   
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
   const content = await compile('reportF2StudentsTerm',arr3[studentId])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./VoucherStudentReports/termly/${year}/${term}/${studentId}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
  var repo = new VouchStudentReport();
   
  repo.uid = studentId;
  repo.studentName = name
  repo.hostel = hostel
  repo.head = head
  repo.room = room
  repo.month = month;
  repo.filename = studentId+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Voucher Student Termly"
  repo.save().then(poll =>{
    console.log("Done creating pdf",studentId)
  })
  
  
  /*await browser.close()
  
  process.exit()*/

  
  
  req.flash('success', 'Report Generation Success');
 
  res.redirect('/hostel/alloStudentYearBatch');
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  }
  //res.redirect('/hostel/discList')
}/*else{

  req.flash('danger', 'Report Generation Failed');
 
  res.redirect('/hostel/alloStudentYearBatch');
}*/
  })
}
})  

  })
  
//voucher folders
  router.get('/folderVoucherReg',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.user._id
   
  
            res.render('hostelVoucherFolderReg/folders2',{pro:pro,id:id,})
   
  })
  

  router.get('/folderYearVoucherReg/',isLoggedIn,function(req,res){
    var pro = req.user
    var id = req.params.id
    var uid = req.user._id
    var arr = []
  
   /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){
  
    })*/
  
  
    Year.find({}).sort({year:1}).then(docs=>{
       
            res.render('hostelVoucherFolderReg/fileClass2',{listX:docs,pro:pro})
  
          
    })
  })

//files
router.get('/viewAnnualVoucherFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  
Year.findById(id,function(err,loc){
  if(loc){


  let year = loc.year
  

   VouchReport.find({year:year,type:"Voucher Annual"},function(err,docs){
     if(docs){

   



res.render('hostelVoucherFolderReg/files2',{listX:docs,year:year,pro:pro,id:id})
}
})
    
}
  })

})
//download voucher annual file

router.get('/downloadAnnualVoucherReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var mformat = m.format('L')
  VouchReport.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    //res.download( './public/uploads/'+name, name)
 
    res.download( './voucherReports/annual/'+year+'/'+name, name)
  })  

})


router.get('/folderTermVoucherReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('hostelVoucherFolderReg/fileClass3',{listX:docs,pro:pro})

        
  })
})

//



//////x2

router.get('/vouchSelectTermFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })


     
          res.render('hostelVoucherFolderReg/term',{pro:pro,year:id})

        
  
})


////view files
router.get('/viewTermlyVoucherFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var year = req.user.hostelYear
  

  

   VouchReport.find({year:year,term:id,type:"Voucher Termly"},function(err,docs){
     if(docs){

   



res.render('hostelVoucherFolderReg/filesTerm',{listX:docs,pro:pro,id:id,year:year})
}
})
    


})
//


//download voucher annual file

router.get('/downloadTermlyVoucherReport/:id',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')

  var mformat = m.format('L')
  VouchReport.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    var year = doc.year
    var term = doc.term
    //res.download( './public/uploads/'+name, name)
 
    res.download( './voucherReports/termly/'+year+'/'+term+'/'+name, name)
  })  

})

///monthly

router.get('/folderMonthlyVoucherReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('hostelVoucherFolderReg/fileMonthly',{listX:docs,pro:pro})

        
  })
})


////
router.get('/vouchSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('hostelVoucherFolderReg/month',{pro:pro,listX:docs,id:id})

  })
  
})

router.get('/viewMonthlyVoucherFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  

  

   VouchReport.find({year:year,month:id,type:"Voucher Monthly"},function(err,docs){
     if(docs){

   



res.render('hostelVoucherFolderReg/filesMonth',{listX:docs,pro:pro,id:id,year:year})
}
})
    


})
//student Voucher Reports

router.get('/folderStudentVoucherReg',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
 

          res.render('hostelStVoucherFolderReg/folders2',{pro:pro,id:id,})
 
})


router.get('/folderStudentYearVoucherReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('hostelStVoucherFolderReg/fileClass2',{listX:docs,pro:pro})

        
  })
})

//files
router.get('/viewStudentAnnualVoucherFile/:id',isLoggedIn,function(req,res){
var id = req.params.id
var pro = req.user
var hostel = req.user.hostel
var floor = req.user.hostelFloor

Year.findById(id,function(err,loc){
if(loc){


let year = loc.year


VouchStudentReport.find({year:year,type:"Voucher Student Annual"},function(err,docs){
   if(docs){

 



res.render('hostelStVoucherFolderReg/files2',{listX:docs,year:year,pro:pro,id:id})
}
})
  
}
})

})
//download voucher annual file

router.get('/downloadStudentAnnualVoucherReport/:id',isLoggedIn,function(req,res){
var m = moment()
var month = m.format('MMMM')
var year = m.format('YYYY')
var mformat = m.format('L')
VouchStudentReport.findById(req.params.id,function(err,doc){
  var name = doc.filename;
  //res.download( './public/uploads/'+name, name)

  res.download( './voucherStudentReports/annual/'+year+'/'+name, name)
})  

})


router.get('/folderStudentTermVoucherReg/',isLoggedIn,function(req,res){
var pro = req.user
var id = req.params.id
var uid = req.user._id
var arr = []

/* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

})*/


Year.find({}).sort({year:1}).then(docs=>{
   
        res.render('hostelStVoucherFolderReg/fileClass3',{listX:docs,pro:pro})

      
})
})

//



//////x2

router.get('/vouchStudentSelectTermFolderReg/:id',isLoggedIn,function(req,res){
var pro = req.user
var id = req.params.id
var uid = req.user._id
var arr = []
User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

})


   
        res.render('hostelStVoucherFolderReg/term',{pro:pro,year:id})

      

})


////view files
router.get('/viewStudentTermlyVoucherFile/:id',isLoggedIn,function(req,res){
var id = req.params.id
var pro = req.user
var hostel = req.user.hostel
var year = req.user.hostelYear




VouchStudentReport.find({year:year,term:id,type:"Voucher Student Termly"},function(err,docs){
   if(docs){

 



res.render('hostelStVoucherFolderReg/filesTerm',{listX:docs,pro:pro,id:id,year:year})
}
})
  


})
//


//download voucher annual file

router.get('/downloadStudentTermlyVoucherReport/:id',isLoggedIn,function(req,res){
var m = moment()
var month = m.format('MMMM')

var mformat = m.format('L')
VouchReport.findById(req.params.id,function(err,doc){
  var name = doc.filename;
  var year = doc.year
  var term = doc.term
  //res.download( './public/uploads/'+name, name)

  res.download( './voucherStudentReports/termly/'+year+'/'+term+'/'+name, name)
})  

})

///monthly

router.get('/folderStudentMonthlyVoucherReg/',isLoggedIn,function(req,res){
var pro = req.user
var id = req.params.id
var uid = req.user._id
var arr = []

/* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

})*/


Year.find({}).sort({year:1}).then(docs=>{
   
        res.render('hostelStVoucherFolderReg/fileMonthly',{listX:docs,pro:pro})

      
})
})


////
router.get('/vouchStudentSelectMonthFolderReg/:id',isLoggedIn,function(req,res){
var pro = req.user
var id = req.params.id
var uid = req.user._id
var arr = []
User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

})

Month.find({}).sort({num:1}).then(docs=>{
   
        res.render('hostelStVoucherFolderReg/month',{pro:pro,listX:docs,id:id})

})

})

router.get('/viewStudentMonthlyVoucherFile/:id',isLoggedIn,function(req,res){
var id = req.params.id
var pro = req.user
var hostel = req.user.hostel
var floor = req.user.hostelFloor




VouchStudentReport.find({year:year,month:id,type:"Voucher Student Monthly"},function(err,docs){
   if(docs){

 



res.render('hostelStVoucherFolderReg/filesMonth',{listX:docs,pro:pro,id:id,year:year})
}
})
  


})




////discipline reportsT
router.get('/folderDiscReg',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
 

          res.render('hostelDiscFolderReg/folders2',{pro:pro,id:id,})
 
})


router.get('/folderYearDiscReg/',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []

 /* User.findByIdAndUpdate(uid,{$set:{hostelFolder:'annual'}},function(err,locs){

  })*/


  Year.find({}).sort({year:1}).then(docs=>{
     
          res.render('hostelDiscFolderReg/fileClass2',{listX:docs,pro:pro})

        
  })
})
//////



//files
router.get('/viewDiscFile/:id',isLoggedIn,function(req,res){
var id = req.params.id
var pro = req.user
var hostel = req.user.hostel



Year.findById(id,function(err,doc){

let year = doc.year


StudentDiscReport.find(function(err,docs){
   if(docs){


res.render('hostelDiscFolderReg/files2',{listX:docs,pro:pro,id:id,year:year})
}
})
  

})

})

///

//download voucher annual file

router.get('/downloadDiscReport/:id',isLoggedIn,function(req,res){
var m = moment()
var month = m.format('MMMM')

var mformat = m.format('L')
StudentDiscReport.findById(req.params.id,function(err,doc){
  var name = doc.filename;
  var hostel = doc.hostel
  var year = doc.year


  res.download( './StudentDiscReports/active/'+hostel+'/'+year+'/'+name, name)
})  

})


router.get('/roomUpdate2',function(req,res){


  HostelRoom.find(function(err,docs){

    for(var i = 0; i<docs.length;i++){
      let room = docs[i].roomName
      let id = docs[i]._id

      User.find({room:room},function(err,locs){
        let total = locs.length


    
       
        HostelRoom.findByIdAndUpdate(id,{$set:{occupants:total}},function(err,nocs){

        
      })
    })
    }
  })

})
router.get('/floorUpdate',function(req,res){


  Floor.find(function(err,docs){

    for(var i = 0; i<docs.length;i++){
      let floor = docs[i].floor
      let id = docs[i]._id

      HostelRoom.find({floor:floor},function(err,locs){
        let total = locs.length

        Floor.findByIdAndUpdate(id,{$set:{rooms:total}},function(err,nocs){

        })
      })
    }
  })

})


////

router.get('/floorStudentUpdate',function(req,res){




      RoomAllo.find(function(err,locs){
        for(var i = 0; i <locs.length;i++){
          let floor = locs[i].floor
          let studentId = locs[i].studentId


          User.find({uid:studentId},function(err,docs){
            let id = docs[0]._id
        console.log(floor,studentId)
          User.findByIdAndUpdate(id,{$set:{floor:floor}},function(err,nocs){

          })
        })

        }
  })

})

router.get('/floors',isLoggedIn,records, (req, res) => {
  var pro = req.user

Floor.find({},(err, docs) => {
      if (!err) {
          res.render("hostel/list", {
             listX:docs, pro:pro
            
          });
      }
  });
});
//room update
router.get('/roomUpdate',isLoggedIn,records,function(req,res){
  HostelRoom.find({room:"D12"},function(err,docs){
    for(var i = 0;i<docs.length;i++){
      let room = docs[i].roomName
      console.log(room,'room')
      let hostel = docs[i].hostel

      User.find({role:"student",room:room,hostel:hostel},function(err,nocs){
        let id = docs[i]._id
        console.log(id,'id')
        for(var c = 0; c<nocs.length;c++){
          if(c == 0){
            console.log(nocs[c].photo,'cc')
            HostelRoom.findByIdAndUpdate(id,{$set:{pic1:nocs[c].photo}},function(err,locs){
        
            })
          }else if(c == 1){
            console.log(nocs[c].photo,'kk')
            HostelRoom.findByIdAndUpdate(id,{$set:{pic2:nocs[c].photo}},function(err,locs){
        
            })
          }
        }
              })
            }
            //res.redirect('/records/idUp')
          })
        })

        ///////

        router.get('/roomUpdate3',isLoggedIn,records,function(req,res){
          HostelRoom.find({occupants:0},function(err,docs){
            for(var i = 0;i<docs.length;i++){
              let room = docs[i].roomName
              console.log(room,'room')
              let hostel = docs[i].hostel
              let id = docs[i]._id
        
           
               
                    HostelRoom.findByIdAndUpdate(id,{$set:{pic1:"propic.jpg",pic2:"propic.jpg"}},function(err,locs){
                
                    })
               
               
                
               
                    }
                    //res.redirect('/records/idUp')
                  })
                })
 //class list
 router.get('/rooms/:id',isLoggedIn,records, (req, res) => {
  var pro = req.user
  var id = req.params.id
  Floor.findById(id,function(err,doc){
    let floor = doc.floor
 
   HostelRoom.find({floor:floor},(err, docs) => {
       if (!err) {
           res.render("hostel/list2", {
              listX:docs, pro:pro,floor:floor
             
           });
       }
   });
 });
})
   
 router.get('/occupants/:id',isLoggedIn,records,function(req,res,next){
   var id = req.params.id
   var pro = req.user
 HostelRoom.findById(id,function(err,doc){
 let hostel = doc.hostel
 let room = doc.roomName
 User.find({hostel:hostel,room:room},function(err,docs){
 res.render('hostel/classStudents',{listX:docs,pro:pro,room:room,hostel:hostel})
 
 })
 })
   //var successMsg = req.flash('success')[0]
 
   
 })



 router.get('/studentProfile/:id',isLoggedIn,records,function(req,res){
  var id = req.params.id
  var pro = req.user
  User.findById(id,function(err,doc){
    
 
  //var pro = req.user
  res.render('hostel/overview2',{doc:doc,id:id,pro:pro})
  
})
  })

  router.get('/studentMerits/:id',isLoggedIn,records,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      StudentDisc.find({studentId:uid},function(err,locs){
        res.render('hostel/subjects3',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })
  

  router.get('/demeritUpdates2',function(req,res){
    var arr1 = []
    var number1
    User.find({role:"student",uid:"SZ120"},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        let uid = docs[i].uid
        let id = docs[i]._id
        let mark = docs[i].demerit
        StudentDisc.find({type:"Demerit",studentId:uid},function(err,locs){
          
          
          for(var q = 0;q<locs.length; q++){
        
            arr1.push(locs[q].mark)
              }
          number1=0;
          for(var z in arr1) { number1 += arr1[z]; }
console.log(number1, mark)
    let demerit = number1 + mark
    console.log(demerit)
          User.findByIdAndUpdate(id,{$set:{demerit:demerit}},function(err,vocs){

          })
        })
      }
    })
  })

router.get('/demeritUpdates',function(req,res){
  StudentDisc.find({type:"Demerit"},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let studentId = docs[i].studentId
      let mark = docs[i].mark
      console.log(mark,'mark')
      User.find({uid:studentId},function(err,locs){
        let id = locs[0]._id
        let demerit = locs[0].demerit + mark
        console.log(demerit,'demerit')
        console.log(mark,'mark2')

        User.findByIdAndUpdate(id,{$set:{demerit:demerit}},function(err,pocs){

        })
      })
    }
  })
})


router.get('/meritUpdates',function(req,res){
  StudentDisc.find({type:"Merit"},function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let studentId = docs[i].studentId
      let mark = docs[i].mark
      User.find({uid:studentId},function(err,locs){
        let id = locs[0]._id
        let merit = locs[0].merit + mark

        User.findByIdAndUpdate(id,{$set:{merit:merit}},function(err,pocs){

        })
      })
    }
  })
})



router.get('/attRegUpdate',function(req,res){
  AttendanceReg.find(function(err,docs){
    for(var i = 0; i<docs.length;i++){
      let id = docs[i]._id
      AttendanceReg.findByIdAndUpdate(id,{$set:{size:0}},function(err,locs){

      })
    }
  })
})
router.get('/attendanceList',isLoggedIn,function(req,res){
  var arr = []
  var arr2 = []
  var size, size2
  let status = {
    
  }
  status['load']=[]
  console.log(status,'kkk')
  AttendanceReg.find(function(err,docs){
    if(docs){
      arr2.push(docs)
      // console.log(docs,'docs')
       for(var i = 0;i<docs.length;i++){
   size = docs.length
      let uid = docs[i].uid
     if(arr.length > 4){

     
      status['load'].push(docs[i].status)
            arr.push(status)
          }

    console.log(status,'sss')
    console.log(arr.length,'length')
 
          if(arr.length > 0 && arr.find(value => value.uid == docs[i].uid)){
            console.log('true')
            
            
               //status['load'] = []
               //status.length=0
                //arr.find(value => value.uid == docs[i].uid).size++;
               }else{
                 arr.push(docs[i])
                 let uid = docs[i].uid

              
             
                /* status['load'] = []*/
                 //status['load'].length=0
                   //element.size = 0
                 /*  if(arr.find(value => value.uid == uid)){
              
                    status.push(docs[i])
                    arr.push(status)
                         // arr.find(value => value.uid == uid).size++;
            
                   }*/
                   //element.size = element.size + 1
                     
                
                     }
             
       
       }

       ///


      for(var i=docs.length - 1;i>=0;i--){
        size2 = docs.length
           
                
               if(arr2.length > 0 && arr2.find(value => value.date == docs[i].date)){
                      console.log('true')
                    
                     arr2.find(value => value.date == docs[i].date).size++;
                    }else{
                      arr2.push(docs[i])
                      let date = docs[i].date
                      
                        //element.size = 0
                        if(arr2.find(value => value.date == date)){
                   
                         
                               arr2.find(value => value.date == date).size++;
                 
                        }
                        //element.size = element.size + 1
                          
                     
                          }
                  
            
            }

           
      }
      //console.log(arr,'arr3')
   console.log(arr.length,'arr3')
      res.render('hostel/discList2',{listX:arr,arr2:arr2})
  })
  
})
/////////attendance register

  
  ////////register batch
  router.get('/alloRegBatch',isLoggedIn,  function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('hostel/alloRegBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    })
  
  
  
  
  
  ////
  
  router.post('/alloRegBatch',isLoggedIn,  function(req,res){
    var id =req.user._id
    var m2 = moment()

    var code = req.body.code
    var date2 = req.body.date
    var endDate = req.body.endDate
   var m4 = moment(date2).format('L')
    var m3 = moment(endDate)
    var dateValueOf = moment(endDate).valueOf()
    var mformat = m3.format('L')
    
    var pro = req.user

      
      
  
    req.check('code','Enter  Code').notEmpty();
    req.check('date','Enter Date').notEmpty();
    req.check('endDate','Enter End Date').notEmpty();
   
      
    
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
       // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})
  
       req.flash('danger', req.session.errors[0].msg);
         
          
       res.redirect('/hostel/alloRegBatch');
  
  
      
      }
      
      else {

      
      
      AlloRegBatch.findOne({'end':mformat})
      .then(grower =>{
      if(!grower){
        AlloRegBatch.findOne({code:code})
        .then(lock=>{
          if(!lock){
            var truck = new AlloRegBatch()
            truck.code = code
            truck.start = m4
            truck.dateValueOf = dateValueOf
            truck.end = mformat
            truck.mformat =mformat
      
            truck.save()
                .then(pro =>{
      
                  User.findByIdAndUpdate(id,{$set:{regCode:code}}, function(err,coc){
            
          
                  })

                  req.flash('success', 'Weekly Batch Successfully Added');
                  res.redirect('/hostel/alloFloorBatch')
      
          })
            
            
            
          }
        })
  
      
  
      
      }else{
  
        req.flash('danger', 'Code already in the sytem / Week Active');
   
        res.redirect('/hostel/alloRegBatch');
  
  
      
  
      }
      
      })
      
    }
      })
    
  //bass
    
  ////attendance floor batch
  router.get('/alloFloorBatch',isLoggedIn,  function(req,res){
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    res.render('hostel/alloFloorBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    })
  
  
  
  
  
  ////
  
  router.post('/alloFloorBatch',isLoggedIn,  function(req,res){
    var id =req.user._id
    var m2 = moment()
  var term = req.user.term
    var floor = req.body.floor
    var date = req.body.date
    var time = req.body.time
    var type = "Hostel Register"
    var m4 = moment(date).format('L')
    var hostel = req.user.hostel
    var head = req.user.fullname
    var day = moment(date).format('dddd')
    var year = m2.format('YYYY')
    var month = m2.format('MMMM')
    var mformat = m2.format("L")
    var regCode = req.user.regCode
    var pro = req.user

      
      
  
    req.check('floor','Enter  Floor').notEmpty();
    req.check('date','Enter Date').notEmpty();
    req.check('time','Enter Time').notEmpty();
   
      
    
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
       // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})
  
       req.flash('danger', req.session.errors[0].msg);
         
          
       res.redirect('/hostel/alloFloorBatch');
  
  
      
      }
      
      else {

      
      
      Floor.findOne({'floor':floor})
      .then(grower =>{
      if(grower){
        Attendance.findOne({'date':date,'time':time,'floor':floor})
        .then(lock=>{
          if(!lock){
            

var test = Attendance();

test.floor = floor;
test.head = head;
test.hostel = hostel;
test.year = year;
test.date = date ;
test.month  = month;
test.time = time
test.term = term;
test.day = day
test.type = "Hostel Register"
test.status = 'null'
test.regCode = regCode
test.regId = 'null'



      
            test.save()
                .then(pro =>{
      
                  User.findByIdAndUpdate(id,{$set:{regId:pro._id}}, function(err,trocs){

                  
                    
                    Attendance.findByIdAndUpdate(pro._id,{$set:{regId:pro._id}},function(err,jocs){
                    
                    })
                    
                    })




                    
RoomAllo.find({floor:floor, hostel:hostel},function(err,zoc){
  for(var i = 0; i<zoc.length;i++){
    var test = new AttendanceReg();
test.uid = zoc[i].studentId;
test.fullname = zoc[i].studentName;
test.grade = zoc[i].grade;
test.day = day;
test.date = date
test.time = time;
test.head = head;
test.hostel = hostel;
test.status = 'Present'
test.mformat = mformat
test.comments = "null"
test.year = year
test.month = month
test.term = term
test.regId= pro._id
test.type = type
test.regCode = regCode
test.floor = floor
test.room = zoc[i].room
test.photo = zoc[i].photo
test.save()
.then(tes =>{

})
  }

  res.redirect('/hostel/attReg/'+pro._id)
})


                  
                
      
          })
            
            
            
          }
        })
  
      
  
      
      }else{
  
        req.flash('danger', 'Code already in the sytem / Week Active');
   
        res.redirect('/hostel/alloFloorBatch');
  
  
      
  
      }
      
      })
      
    }
      })
    
  
  
      router.get('/attReg/:id',isLoggedIn,function(req,res){
        var id = req.params.id

        var pro = req.user
       
        AttendanceReg.find({regId:id},function(err,docs){
          res.render('hostel/regUpdate',{     listX:docs,pro:pro})
        })
      
      })



      
router.post('/comment/updateAtt/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user

  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var dateValue = m.valueOf()
  var mformat = m.format("L")
  var date = m.toString()
  var comments = req.body.code
  AttendanceReg.findById(id,function(err,doc){
   
   
    AttendanceReg.findByIdAndUpdate(id,{$set:{comments:comments}},function(err,doc){

 })     
      

  res.send(doc)
})
  })


  router.get('/late/:id',isLoggedIn, (req, res) => {
    var id
 AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Late'}},function(err,docs){
id = docs[0].regId

res.redirect('/teacher/viewAttendanceFile/'+id)
 })

    })
  
  router.get('/absent/:id',isLoggedIn, (req, res) => {
    var id 
 AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Absent'}},function(err,docs){
   console.log(docs,'docs')
  id = docs.regId

  console.log(id,'regId')
  res.redirect('/hostel/viewAttendanceFile/'+id)
 })

    })
 /// register folders
 
router.get('/folderReg',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
  var arr = []
  User.findById(id,function(err,doc){
    if(doc){

   
    let hostel = doc.hostel
    
    Floor.find({hostel:hostel},function(err,docs){
      for(var i = 0;i<docs.length;i++){
        
     
          
         if(arr.length > 0 && arr.find(value => value.floor == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.floor == docs[i].floor).year += docs[i].year;

              }else{
      arr.push(docs[i])
  
 
              }
      
          
          }

          res.render('hostelFolderReg/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})





router.get('/monthFolderReg/:id',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
Floor.findById(id,function(err,doc){
  let floor = doc.floor
  User.findByIdAndUpdate(uid,{$set:{hostelFloor:floor}},function(err,locs){

  })


  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('hostelFolderReg/fileClass2',{listX:docs,pro:pro,id:id,floor:floor})

        })
  })
})
















router.get('/typeFolderHostelReg/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var year = m.format('YYYY')

  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  var arr=[]
 
  Floor.find({floor:floor},function(err,noc){
    let floorId = noc[0]._id
 
  Month.findById(id,function(err,doc){
    let month = doc.month

 
    Attendance.find({month:month,year:year,floor:floor,hostel:hostel},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('hostelFolderReg/assgtX1',{listX:arr,pro:pro,id:id,floorId:floorId,floor:floor,month:month})
  
})
})
  })
})
  

///view lesson

router.get('/viewAttendanceFile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  var pro = req.user
  var hostel = req.user.hostel
  var floor = req.user.hostelFloor
  Floor.find({floor:floor},function(err,noc){
    let floorId = noc[0]._id
Attendance.findById(id,function(err,loc){
  if(loc){


  let regId = loc.regId
  

   AttendanceReg.find({regId:regId},function(err,docs){
     if(docs){

   
let month = docs[0].month

Month.find({month:month},function(err,noc){
  if(noc){

 
  let monthId = noc[0]._id


res.render('hostelFolderReg/assgtList',{listX:docs,pro:pro,floorId:floorId,floor:floor,month:month,monthId:monthId,id:id})
}
})
     }
  })
  }
})
  })

})


//////attendance report


router.get('/arrAttAnnual',isLoggedIn,function(req,res){

  var hostel = req.user.hostel
  Hostel.find(function(err,docs){
    for(var i=0;i<docs.length;i++){
      let name = docs[i].name
       arrA[name]=[]
    }
  })
  
  res.redirect('/hostel/alloAttYearBatch')
  
  })
//agg Year Float
//allo month batch
router.get('/alloAttYearBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  console.log(arrA,'arrA')
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloAttYearBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloAttYearBatch',isLoggedIn,  function(req,res){
  var id =req.user._id
  
  var year = req.body.year
  var pro = req.user

    
    

  req.check('year','Enter Year').notEmpty();
 
 
    
  
    
    var errors = req.validationErrors();
     
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
     // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})

     req.flash('danger', req.session.errors[0].msg);
       
        
     res.redirect('/hostel/alloAttYearBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
    
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year}},function(err,docs){

})

 
res.redirect('/hostel/aggDays');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloAttYearBatch');


    

    }
    
    })
    
  }
    })




//aggFloat
router.get('/aggDays',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel

  Attendance.find({year:year,hostel:hostel},function(err,hods){

   number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggDays:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggPresent')


  })




})
//aggVouchers

router.get('/aggPresent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Present",hostel:hostel},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggPresent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggAbsent')


  })




})


router.get('/aggAbsent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Absent",hostel:hostel},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggAbsent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/generateAnnualAttReport1')


  })




})



router.get('/generateAnnualAttReport1',function(req,res){

  var year = req.user.hostelYear
  var hostel = req.user.hostel
  var month = req.user.hostelMonth
  //var term = req.user.term
  Hostel.find({name:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let name = docs[i].name
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    AttendanceReg.find({year:year,hostel:name,status:"Absent"}).lean().sort({uid:1}).then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){

     
     if( arrA[name].length > 0 && arrA[name].find(value => value.name == name) ){
   
      arrA[name].push(vocs[x])
  
          }
          
           
          
          
          else{
            arrA[name].push(vocs[x])
                
            } 
  
  
       
  
           
  
  }  console.log(arrA,'arrA2')
          })
          }
          res.redirect('/hostel/annualAttReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/annualAttReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
    var name = req.user.hostel
   
      var mformat = m.format('L')
      var term = req.user.hostelTerm
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
   const content = await compile('reportF2HostelAtt',arrA[name])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./voucherReports/annual/${year}/${term}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
  var repo = new AttendanceReport();
   
  repo.hostel = name
  repo.month = month;
  repo.filename = name+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Attendance Annual"
  repo.save().then(poll =>{
    console.log("Done creating pdf",name)
  })
  
  
  /*await browser.close()
  
  process.exit()*/
  req.flash('success', 'Report Generation Successful');
 
  res.redirect('/hostel/alloAttYearBatch');
  
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  
  //res.redirect('/hostel/discList')


  

  
  

  })
  

  //////////22222222222222
  
//////attendance report


router.get('/arrAttTerm',isLoggedIn,function(req,res){

  var hostel = req.user.hostel
  Hostel.find(function(err,docs){
    for(var i=0;i<docs.length;i++){
      let name = docs[i].name
       arrB[name]=[]
    }
  })
  
  res.redirect('/hostel/alloAttTermBatch')
  
  })
//agg Year Float
//allo month batch
//aggTerm

router.get('/alloAttTermBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloAttTermBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloAttTermBatch',isLoggedIn,  function(req,res){
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
       
        
     res.redirect('/hostel/alloAttTermBatch');


    
    }
    
    else {

    
    
    Year.findOne({'year':year})
    .then(grower =>{
    if(grower){
     
   
User.findByIdAndUpdate(id,{$set:{hostelYear:year,hostelTerm:term}},function(err,docs){

})

 
res.redirect('/hostel/aggTermDays');
        
          
          
          
       
    

    
    }else{

      req.flash('danger', 'Year dont exist');
 
      res.redirect('/hostel/alloAttTermBatch');


    

    }
    
    })
    
  }
    })


//aggFloat
router.get('/aggTermDays',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel

  Attendance.find({year:year,hostel:hostel,term:term},function(err,hods){

   number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggDays:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggTermPresent')


  })




})
//aggVouchers

router.get('/aggTermPresent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Present",hostel:hostel,term:term},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggPresent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggTermAbsent')


  })




})


router.get('/aggTermAbsent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var term = req.user.hostelTerm
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Absent",hostel:hostel,term:term},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggAbsent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/generateTermAttReport1')


  })




})



router.get('/generateTermAttReport1',function(req,res){

  var year = req.user.hostelYear
  var hostel = req.user.hostel
  var month = req.user.hostelMonth
  var term = req.user.hostelTerm
  Hostel.find({name:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let name = docs[i].name
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    AttendanceReg.find({year:year,hostel:name,status:"Absent",term:term}).lean().sort({uid:1}).then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){

     
     if( arrB[name].length > 0 && arrB[name].find(value => value.name == name) ){
   
      arrB[name].push(vocs[x])
  
          }
          
           
          
          
          else{
            arrB[name].push(vocs[x])
                
            } 
  
  
       
  
           
  
  }  console.log(arrA,'arrA2')
          })
          }
          res.redirect('/hostel/termAttReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/termAttReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
    var name = req.user.hostel
   
      var mformat = m.format('L')
      var term = req.user.hostelTerm
  /*console.log(arr,'iiii')*/
  
    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrB){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arrB)
   
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
   const content = await compile('reportF2HostelAttTerm',arrB[name])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./voucherReports/annual/${year}/${term}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
  var repo = new AttendanceReport();
   
  repo.hostel = name
  repo.month = month;
  repo.filename = name+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Attendance Term"
  repo.save().then(poll =>{
    console.log("Done creating pdf",name)
  })
  
  
  /*await browser.close()
  
  process.exit()*/
  req.flash('success', 'Report Generation Successful');
 
  res.redirect('/hostel/alloAttTermBatch');
  
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  
  //res.redirect('/hostel/discList')


  

  
  

  })
  
 ///////////xxxxxxxxxxxxx
 
router.get('/arrAttMonthly',isLoggedIn,function(req,res){

  var hostel = req.user.hostel
  Hostel.find(function(err,docs){
    for(var i=0;i<docs.length;i++){
      let name = docs[i].name
       arrC[name]=[]
    }
  })
  
  res.redirect('/hostel/alloAttMonthBatch')
  
  })

 //allo month batch
 router.get('/alloAttMonthBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hostel/alloAttMonthBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })





////

router.post('/alloAttMonthBatch',isLoggedIn,  function(req,res){
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
       
        
     res.redirect('/hostel/alloAttMonthBatch');


    
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

 
res.redirect('/hostel/aggAttMonth');
        
          
          
          
        }
      })

    

    
    }else{

      req.flash('danger', 'Month/Year dont exist');
 
      res.redirect('/hostel/alloAttMonthBatch');


    

    }
    
    })
    
  }
    })


//aggFloat
router.get('/aggAttMonth',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var hostel = req.user.hostel

  Attendance.find({year:year,hostel:hostel,term:term},function(err,hods){

   number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,term:term},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggDays:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggMonthPresent')


  })




})
//aggVouchers

router.get('/aggMonthPresent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var term = req.user.hostelTerm
  var month = req.user.hostelMonth
  var arr1 = []
  var number1
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Present",hostel:hostel,month:month},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,month:month},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggPresent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/aggMonthAbsent')


  })




})


router.get('/aggMonthAbsent',isLoggedIn,function(req,res){
  var m = moment()
  var year = req.user.hostelYear
  var month = m.format('MMMM')
  var arr1 = []
  var number1
  var month = req.user.hostelMonth
  var hostel = req.user.hostel
  AttendanceReg.find({year:year,status:"Absent",hostel:hostel,month:month},function(err,hods){

    number1 = hods.length

AttendanceReg.find({year:year,hostel:hostel,month:month},function(err,docs){
  for(var i = 0;i <docs.length;i++){
    let id =  docs[i]._id
    AttendanceReg.findByIdAndUpdate(id,{$set:{aggAbsent:number1}},function(err,focs){

    })
  }
})

  //aggVouchers
       
    



        res.redirect('/hostel/generateMonthAttReport1')


  })




})



router.get('/generateMonthAttReport1',function(req,res){

  var year = req.user.hostelYear
  var hostel = req.user.hostel
  var month = req.user.hostelMonth
  var term = req.user.hostelTerm
  Hostel.find({name:hostel},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){
  
  //console.log(docs[i].uid,'ccc')
  let name = docs[i].name
  //let uid = "SZ125"
  
  
  //TestX.find({year:year,uid:uid},function(err,vocs) {
    AttendanceReg.find({year:year,hostel:name,status:"Absent",month:month}).lean().sort({uid:1}).then(vocs=>{
  
    
  for(var x = 0;x<vocs.length;x++){

     
     if( arrC[name].length > 0 && arrC[name].find(value => value.name == name) ){
   
      arrC[name].push(vocs[x])
  
          }
          
           
          
          
          else{
            arrC[name].push(vocs[x])
                
            } 
  
  
       
  
           
  
  }  
          })
          }
          res.redirect('/hostel/monthAttReportGeneration')
        })
  
  /*})*/
  
  })
  ////////////
  
  router.get('/monthAttReportGeneration',isLoggedIn,function(req,res){
  
    var m = moment()
    var year = req.user.hostelYear
    var name = req.user.hostel
   
      var mformat = m.format('L')
      var term = req.user.hostelTerm
  /*console.log(arr,'iiii')*/
  
    
  //console.log(docs,'docs')
  
  const compile = async function (templateName, arrC){
    const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
  
    const html = await fs.readFile(filePath, 'utf8')
  
    return hbs.compile(html)(arrC)
   
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
   const content = await compile('reportF2HostelAttMonth',arrC[name])
  
  //console.log(arr[uid],'tamama')
  await page.setContent(content, { waitUntil: 'networkidle2'});
   //await page.setContent(content)
  //create a pdf document
  await page.emulateMediaType('screen')
  await page.evaluate(() => matchMedia('screen').matches);
  await page.setContent(content, { waitUntil: 'networkidle0'});
  //console.log(await page.pdf(),'7777')
  
  await page.pdf({
    //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
    path:(`./voucherReports/annual/${year}/${term}`+'.pdf'),
    format:"A4",
    width:'30cm',
  height:'21cm',
    printBackground:true
  })
  
  
  
  var repo = new AttendanceReport();
   
  repo.hostel = name
  repo.month = month;
  repo.filename = name+'.pdf';
  repo.year = year;
  repo.term = 1
  repo.date = mformat
  repo.type = "Attendance Month"
  repo.save().then(poll =>{
    console.log("Done creating pdf",name)
  })
  
  
  /*await browser.close()
  
  process.exit()*/
  req.flash('success', 'Report Generation Successful');
 
  res.redirect('/hostel/alloAttMonthBatch');
  
  
  }catch(e) {
  
    console.log(e)
  
  
  }

  
  }) ()


  
  
  //res.redirect('/hostel/discList')


  

  
  

  })
   
  


 //importing teachers details from excel
  
 router.get('/importRooms',isLoggedIn,records, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Rooms"

  

  
 res.render('imports/room',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importRooms',isLoggedIn,records, upload.single('file'),function(req,res){
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
               res.render('imports/room', {message:req.session.message,pro:pro
                    
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
           let hostel = record.hostel;
           let roomNumber = record.roomNumber;
           let roomName = record.roomName;
           let floor = record.floor
           let gender = record.gender;
           let capacity = record.capacity
           let beds = record.beds;
           let head = record.head;
           let state = record.state;
         let occupants = record.occupants;
       
          let hostelId = record.hostelId





          req.body.hostel = record.hostel   
req.body.roomNumber = record.roomNumber 
req.body.roomName = record.roomName
req.body.floor = record.floor  
req.body.capacity = record.capacity  
req.body.beds = record.beds 
req.body.head= record.head 
req.body.gender = record.gender
req.body.occupants = record.occupants
req.body.state = record.state   
req.body.hostelId = record.hostelId    
          

       req.check('hostel','Enter Hostel').notEmpty();
req.check('roomNumber','Enter roomNumber').notEmpty();

req.check('floor','Enter Floor').notEmpty()
req.check('gender','Enter Gender').notEmpty();
req.check('capacity','Enter Capacity').notEmpty();
req.check('beds','Enter Beds').notEmpty();
req.check('head','Enter Hostel Head').notEmpty();
req.check('state', 'Enter State').notEmpty();
req.check('occupants', 'Enter Occupants').notEmpty();
req.check('hostelId', 'Enter Hostel ID').notEmpty();
   

var errors = req.validationErrors();
 
if (errors) {
 
 req.session.errors = errors;
 req.session.success = false;
 console.log( req.session.errors[0].msg)
 req.flash('danger', req.session.errors[0].msg);
      
       
 res.redirect('/records/importRooms');

}

else


           {
             HostelRoom.findOne({'roomName':roomName,'roomNumber':roomNumber})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Room already in the system');

                 res.redirect('/records/importRooms') 
 
                 //res.redirect('/records/import')
               
           }
           else





           var user = new HostelRoom();
           user.hostel = hostel
           user.roomNumber = roomNumber;
           user.roomName = roomName;
           user.floor = floor;
           user.gender = gender;
           user.capacity = capacity;
           user.beds = beds;
           user.head = head
           user.state = state
           user.occupants = occupants;
           user.hostelId = hostelId;
          
          
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
 
               res.redirect('/records/importRooms') 
     
       }
     }
 
 })

//import year

//voucher report generation

router.get('/importYears',isLoggedIn,records, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Years"

  

  
 res.render('imports/years',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importYears',isLoggedIn,records, uploadX.single('file'),function(req,res){
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
      
       
 res.redirect('/hostel/importYears');

}

else


           {
             Year.findOne({'year':year})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Room already in the system');

                 res.redirect('/hostel/importYears') 
 
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
 
               res.redirect('/hostel/importYears') 
     
       }
     }
 
 })
 //import month
 
  
 router.get('/importMonth',isLoggedIn,records, function(req,res){
  var pro = req.user

 
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];


   title = "Import Month"

  

  
 res.render('imports/month',{pro:pro,title:title,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })



  
 router.post('/importMonth',isLoggedIn,records, uploadX.single('file'),function(req,res){
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
      
       
 res.redirect('/hostel/importMonth');

}

else


           {
             Month.findOne({'month':month})
             .then(user =>{
                 if(user){ 
               // req.session.errors = errors
                 //req.success.user = false;
           
           
           
                 req.flash('danger', 'Room already in the system');

                 res.redirect('/hostel/importMonth') 
 
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
 
               res.redirect('/hostel/importMonth') 
     
       }
     }
 
 })



 //import years
 
  
  


  /////floor autocomplete
  
  router.get('/autocompleteXMFloor/',isLoggedIn,records, function(req, res, next) {
    
     
    var regex= new RegExp(req.query["term"],'i');
    var uidFilter =Floor.find({floor:regex},{'floor':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  console.log(sub,'roman')
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.floor,
           
  
       
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
  router.post('/autoXMFloor',isLoggedIn,records,function(req,res){
    var codeX = req.body.codeX
  
  
  
    Floor.find({floor:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  //year autocomplete

  
  router.get('/autocompleteXMYear/',isLoggedIn,records, function(req, res, next) {
    
     
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
  router.post('/autoXMYear',isLoggedIn,records,function(req,res){
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
  
  router.get('/autocompleteXMonth/',isLoggedIn,records, function(req, res, next) {
    
     
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
  router.post('/autoXMonth',isLoggedIn,records,function(req,res){
    var codeX = req.body.codeX
  
  
  
    Month.find({month:codeX},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  
  
  
  
//////////////////////


  

  module.exports = router;

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else{
        res.redirect('/')
    }
  }
  
   
  function records(req,res,next){
    if(req.user.role == 'hostel head'){
      return next()
    }
    res.redirect('/')
    }  



    function exp (req,res,next){
      var set = new Date()
     
      var currdate = set.getTime()
      console.log(currdate)
      console.log(req.user.expdate)
     
       if(req.user.expdate > currdate){
         console.log('good')
        return next()
       
       }else
      res.render('errors/exp')
       
     }
     

