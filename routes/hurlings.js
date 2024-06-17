require('dotenv').config();
require("../config5/keys")
var express = require('express');
var router = express.Router();
const User =require('../models/user')
const Class1 =require('../models/class');
const ClassV =require('../models/classV');
const CodeV =require('../models/codev');
const AlloCode =require('../models/alloCode');
const AlloSub =require('../models/alloSub');
const SubV =require('../models/subV');
const CodeLevel =require('../models/codeLevel');
const LevelV =require('../models/levelV');
const Subject =require('../models/subject');
const Fees =require('../models/fees');
const Report = require('../models/reports');
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



router.get('/stats',isLoggedIn,records, function(req,res){
    var students, teachers, paid, unpaid, depts, class1
    var companyId = req.user.companyId
    var m = moment()
    var year = m.format('YYYY')
  User.find({companyId:companyId,role:'student'},function(err,nocs){
    students = nocs.length
    
  User.find({companyId:companyId,role:'teacher'},function(err,nocs){
    teachers = nocs.length;
    User.find({companyId:companyId,role:'student',status:'paid'},function(err,rocs){
   paid = rocs.length;
  
   User.find({companyId:companyId,role:'student',status:'owing'},function(err,locs){
     unpaid =locs.length

     Dept.find({companyId:companyId},function(err,jocs){
      depts = jocs.length;
     
      Class1.find({companyId:companyId},function(err,klocs){
        class1 = klocs.length

  
     Stats.find({companyId:companyId,year:year},function(err,docs){
  
  if(docs == 0){
  
  
  var stat = new Stats();
  stat.students = students;
  stat.teachers = teachers
  stat.paid = paid;
  stat.unpaid = unpaid
  stat.depts = depts
  stat.class1 = class1
  stat.year = year
  stat.companyId = companyId
  
  
  stat.save()
  .then(sta =>{
  
    //res.redirect('/records/gradeUpdate')
  
  })
  }
  else{

 

  var id = docs[0]._id
  console.log(students,'students',teachers,'teachers',class1,'class1',depts,'depts', paid,'paid',unpaid,'unpaid')
  Stats.findByIdAndUpdate(id,{$set:{students:students, teachers:teachers,paid:paid, unpaid:unpaid, class1:class1, depts:depts}},function(err,tocs){


    
  })
  
  //res.redirect('/records/gradeUpdate')

}

  
  

  
  })
  
    
})
     })
     
   })
  
  
    })
  })
  /*res.redirect('/records/gradeUpdate')*/
  res.redirect('/records/idUp')
  })
  
    
  })





router.get('/gradeUpdate',isLoggedIn,records,function(req,res){

  User.find({role:'student'},function(err,docs){
    if(docs){
    for(var i = 0;i<docs.length;i++){
     let grade = docs[i].grade
     let id = docs[i]._id
     console.log(grade,'grade')
     Level.find({grade:grade},function(err,tocs){
       let levelX = tocs[0].levelX
       console.log('levelX',levelX)
User.findByIdAndUpdate(id,{$set:{levelX:levelX}},function(err,jocs){

})
     })
    }
    }
  
  })
  res.redirect('/records/classUpdate')
})



router.get('/classUpdate',isLoggedIn,records,function(req,res){
  Class1.find(function(err,docs){
    for(var i = 0;i<docs.length;i++){
      let class1 = docs[i].class1
      let id = docs[i]._id
      User.find({class1:class1},function(err,nocs){
for(var c = 0; nocs.length;c++){
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
    res.redirect('/records/idUp')
  })
})








router.get('/idUp',isLoggedIn,records,function(req,res){
  var id = req.user._id

  var total
  var num
  var idNumX = req.user.idNumX
  
  
  User.find({},function(err,docs){
  num = docs.length
  total = idNumX + docs.length;
  
  
  User.findByIdAndUpdate(id,{$set:{actualCount:num}},function(err,locs){
  
  })
  

res.redirect('/records/classcheck')

})


})



router.get('/classcheck',isLoggedIn,records,function(req,res){
  
  Class1.find({},function(err,docs){
    for(var i= 0;i<docs.length;i++){
      let classX = docs[i].class1
      let id = docs[i]._id
      User.find({class1:docs[i].class1},function(err,gocs){
let students = gocs.length;
User.find({class1:classX, status:'paid'},function(err,yocs){
  let paid = yocs.length;

  User.find({class1:classX,status:'owing'},function(err,locs){
    let unpaid= locs.length

    User.find({class1:classX,gender:'male'},function(err,xocs){
      let male= xocs.length

      User.find({class1:classX,gender:'female'},function(err,zocs){
        let female= zocs.length

    Class1.findByIdAndUpdate(id,{$set:{numberOfStudents:students, paid:paid,unpaid:unpaid,male:male,female:female}},function(err,vocs){

    })
  })
  })
})


})

      })
    
    }
    res.redirect('/records/yearUpdate')
  })
})



router.get('/yearUpdate',isLoggedIn,records,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var startYear = req.user.startYear
  var currentYearCount = year - startYear
  console.log(year, startYear)
  console.log(currentYearCount)

 User.find({},function(err,docs){



for(var i = 0;i<docs.length;i++){
  let id = docs[i]._id

  User.findByIdAndUpdate(id,{$set:{currentYearCount:currentYearCount}},function(err,gocs){

  })

}

res.redirect('/records/yearUpdateX')
 })

})



router.get('/yearUpdateX',isLoggedIn,records,function(req,res){
  var m = moment()
  var year = m.format('YYYY')
  var startYear = req.user.startYear


 User.find({role:'student'},function(err,docs){
for(var i = 0;i<docs.length;i++){
  let id = docs[i]._id
  let admissionYear = docs[i].admissionYear
  let stdYearCount = admissionYear - startYear

  User.findByIdAndUpdate(id,{$set:{stdYearCount:stdYearCount}},function(err,gocs){
    
  })
}
res.redirect('/records/actUpdate')

 })

})



router.get('/actUpdate',isLoggedIn,records,function(req,res){
  var id = req.user._id
  

  User.find({role:"admin"},function(err,docs){
  console.log(docs,"docs")
  if(docs.length ===  0){
    res.redirect('/records/feeUpdate')
  }else{
  
  
  
  status3 = docs[0].status3;
  status4 = docs[0].status4

  console.log(status3, status4, 'zvfa')
  
  User.find({},function(err,pocs){

  for(var i = 0; i<pocs.length; i++){

 
  
  User.findByIdAndUpdate(pocs[i]._id,{$set:{status3:status3, status4:status4}},function(err,locs){
  
  
  
  })
}
})
  
  res.redirect('/records/feeUpdate')
  
  }
  
  })
  
  
  
  
  })













router.get('/feeUpdate',isLoggedIn,records,function(req,res){
var id = req.user._id
var fees, annual

User.find({role:"clerk"},function(err,docs){
console.log(docs,"docs")
if(docs.length ===  0){
  res.redirect('/records/std')
}else{



fees = docs[0].fees;
annual = docs[0].annual

console.log(fees,annual)

User.findByIdAndUpdate(id,{$set:{fees:fees, annual:annual}},function(err,locs){



})

res.redirect('/records/std')

}

})




})

router.get('/std',isLoggedIn,records,function(req,res){

  var m = moment()
  var year = m.format('YYYY')
  var currCount = req.user.currentYearCount
  var startYear = req.user.startYear
  console.log(currCount,'currCount')
  Student.find({},function(err,locs){
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

  User.find({role:'student',state:'new', stdYearCount:currCount},function(err,docs){
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
   res.redirect('/records/dash')
    
      })


})

    }else{
Student.find({},function(err,docs){
  
  User.find({role:'student',state:'new', stdYearCount:currCount},function(err,nocs){
    if(nocs){

   
    let total = nocs.length;
    console.log('totalxxx',total)

  
let id = docs[0]._id;

if(currCount == 0){
  Student.findByIdAndUpdate(id,{$set:{year1:total,count:currCount,startYear:startYear}},function(err,locs){

  })
} 


    else  if(currCount == 1){
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
     console.log('docs')
    }
    })
    res.redirect('/records/dash')
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
       
  
         
          res.render('hurlings/dashboard/records',{pro:pro,list:arr, les:les,gt:gt,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg })
  
        })
        })
        })
  
      })
  

  })
  


  
  router.post('/classChart',isLoggedIn,records,function(req,res){
    var uid = req.user.uid
    var size
    
    var m = moment()
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
  
       
      
    
     

    
    
      User.find({role:'student'},function(err,docs) {
        console.log(docs,'docs')
        for(var i = 0;i<docs.length;i++){
    size = docs.length
       
            
           if(arr.length > 0 && arr.find(value => value.class1 == docs[i].class1)){
                  console.log('true')
                 arr.find(value => value.class1 == docs[i].class1).classNo++
            }else{
    arr.push(docs[i])

    let resultX = arr.map(function(element){
      element.classNo = 0
      element.classNo= element.classNo + 1
        })
            }
    
        
        }
     
        console.log(arr,'ndamama')
       res.send(arr)
      })
  
    })
    




    
  
  router.post('/classGenderChartX',isLoggedIn,records,function(req,res){
    var uid = req.user.uid
    var size
    
    var m = moment()
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
  
       
      
    
     

    
    
      Class1.find(function(err,docs) {
        console.log(docs,'docs iwe')
      
     
        //console.log(arr,'arr')
       res.send(docs)
      })
  
    })
    
  
     router.post('/statChart',isLoggedIn,records,function(req,res){
  var m = moment()
  var year = m.format('YYYY')


        Stats.find({year:year},function(err,docs){
          if(docs == undefined){
            res.redirect('/dash')
          }else
      
             res.send(docs)
         
          
           })
      
      })

//student stats
      router.post('/stdStatsChart99',isLoggedIn,records, function(req,res){
        var m = moment()
        var year = m.format('YYYY')
        var count = req.user.currentYearCount
     
              Student.find({},function(err,docs){
                if(docs == undefined){
                  res.redirect('/dash')
                }else
            
                   res.send(docs)
               
                
                 })
            
            })
    
      //calendar
  
      router.post('/calendarChart',isLoggedIn,function(req,res){
        
        Calendar.find({},function(err,docs){
          console.log(docs,'crap')
          if(docs == undefined){
            res.redirect('/dash')
          }else
      
             res.send(docs)
         
          
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
      res.render('hurlings/admin/overview',{pro:pro,user:user})
    })


    
  router.post('/profile',isLoggedIn,records,upload.single('file'),function(req,res){
 
  
  var pro = req.user
    if(!req.file){
     req.session.message = {
       type:'errors',
       message:'Select Picture'
     }     
       res.render('hurlings/admin/overview', {
            user:req.body, message:req.session.message,pic:req.user.photo,user:req.user ,pro:pro
        }) 
     
    } else
    var imageFile = req.file.filename;
    var id  = req.user._id;
   console.log(imageFile)
   console.log(id)
    User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
    
    
      
    
    
    })
   
    res.redirect('/hurlings/profile')
  
  
  
  
  })

//setting ID prefix  
router.get('/fix',isLoggedIn,records,function(req,res){
  var id = req.user._id
 var readonly
 var prefix 
   User.find({_id:id},function(err,noc){
     if(noc[0].prefix == 'null'){
       console.log('good')
       readonly = '';
     }else{
     readonly = 'readonly'
     prefix = noc[0].prefix
     }
 
     res.render('users/fix',{readonly:readonly,prefix:prefix})
   })    
 })
 
 router.post('/fix',isLoggedIn,records,function(req,res){
  
 var prefix = req.body.prefix
 var id = req.user._id
   req.check('prefix','Enter Prefix').notEmpty().isString();
  
      
   var errors = req.validationErrors();
       if (errors) {
 
         req.session.errors = errors;
         req.session.success = false;
         res.render('users/fix',{user:req.body, errors:req.session.errors,
     })
   }
 
 
   User.findByIdAndUpdate(id,{$set:{prefix:prefix}},function(err,docs){
     res.redirect('/fix')
   })
 
 
 })
 











      //add student

router.get('/addStudent',isLoggedIn,records,  function(req,res){
var pro = req.user
var actualCount = req.user.actualCount
var count = req.user.count
var prefix = req.user.prefix
var title, readonly
var idNum=req.user.idNumber
idNum++
var uid = prefix+idNum

if(actualCount < count){

  Class1.find({},function(err,docs){
    Level.find({},function(err,gocs){

   var arr = gocs
    var arr1 = docs;
    title = "Add Students"
    readonly =" "
   var classes = docs.length;
    if(classes == 0){
      res.redirect('/hurlings/addClass')
    }else
    res.render('hurlings/students/admit',{arr1:arr1,arr:arr,pro:pro,uid1:uid,title:title,readonly:readonly})
      
    })
  })

}else


res.redirect('/hurlings/addStudentX')
  
})


router.post('/addStudent',isLoggedIn,records,upload.single('file'),function(req, res, next) {
  var m = moment()
  var m = moment()
  var year = m.format('YYYY')
  var pro = req.user
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
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var dob = req.body.dob;
  var email = req.body.email
    var class1 = req.body.class1;
  

    var idNumber = req.user.idNumber;
    var schoolName = req.user.schoolName;
    var password = req.body.password;
    var term = req.user.term
    idNumber++

    var prefix = req.user.prefix
    var photo = req.body.file
    var id = req.user._id
    var count = req.user.count
    var actualCount = req.user.actualCount
   var uid1 = prefix+idNumber
  
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
    req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
 
  
   
  
        
          
       
    var errors = req.validationErrors();

        if (errors) {
          Class1.find({}, function(err,docs){
            var arr1 = docs;  
          req.session.errors = errors;
          req.session.success = false;
          res.render('hurlings/students/admit',{ errors:req.session.errors, arr1:arr1,pro:pro})
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
              var arr1 = docs;
           req.session.message = {
             type:'errors',
             message:'student already in the system'
           }     
           
              res.render('hurlings/students/admit', {
                   message:req.session.message ,arr1:arr1,pro:pro
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
                      user.level = 'null';
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
                      user.email = email
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
                          const CLIENT_URL = 'http://' + req.headers.host;
      
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
                             message:'confirmation emails not sent'
                           }
                           
                           res.render('hurlings/students/admit', {message:req.session.message,pro:pro}) 
                       
                        
                              }
                              else {
                                  console.log('Mail sent : %s', info.response);
                                  idNumber++
                               
                                  User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,locs){
              
                                  req.session.message = {
                                    type:'success',
                                    message:'confirmation emails sent'
                                  }     
                                  
                                  res.render('hurlings/students/admit', {message:req.session.message,pro:pro}) 
                                })
                              }
                          
                     
                          User.findByIdAndUpdate(id,{$set:{uidNum:idNum}},function(err,locs){
                          
                          
                          res.redirect('/hurlings/addStudent')
                          })
                       
                      })
    
                    })
                    }
    
                        })
                      }
                  
                     
                    
                        
                        
                    
                     
                      
    
                      
    })
    
                 //importing students details from excel
  
  router.get('/import',isLoggedIn,records, function(req,res){
    var actualCount = req.user.actualCount
    var count = req.user.count
    var pro = req.user
    var errorMsg = req.flash('danger')[0];
    var successMsg = req.flash('success')[0];
    var m = moment()
    var year = m.format('YYYY')
    var title
    var readonly 
 
    /*if(actualCount < count ){*/
      Class1.find({},function(err,docs){
        title = "Import Students"
        readonly = ""
        classes = docs.length;
        if(classes == 0){
          res.redirect('/hurlingss/addClass')
        }else
        res.render('hurlings/students/students',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
          })
        
        
   /* }*/
    /*else

  res.redirect('/records/importX')*/
      
   
   
    
  })
  
  
  router.get('/importX',isLoggedIn,records,function(req,res){
    var pro = req.user
    res.render('hurlings/students/students',{pro:pro})
  })
  

  
  

  
  router.post('/import',isLoggedIn,records, upload.single('file'),  (req,res)=>{
    var count = req.user.actualCount
    var m = moment()
 
    
    var adminBal = req.user.balance
    var pro = req.user
    var id =   req.user._id
    var idNumber = req.user.idNumber
    var count = req.user.count
    var actualCount = req.user.actualCount
  
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
                res.render('hurlings/students/students', {message:req.session.message,pro:pro
                     
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
     
        
       
      
          
         
        
            let levelX
            let adminBal = req.user.balance
            let uid = record.uid;
            let name = record.name;
            let surname = record.surname;
            let fullname = name +" "+ surname
            let role = 'student';
            let address = record.address
            let mobile = record.mobile;
            let gender = record.gender;
            let dob = record.dob;
            let email = record.email
            let class1 = record.class1;
            let grade = record.grade
            let password = record.password;
            let term = req.user.term
            var year = m.format('YYYY')
            let suffix = 'null'
            let prefix = req.user.prefix
            let num = record.num
            let expdate = req.user.expdate
            let expStr = req.user.expStr
       
            let photo = record.photo

          

req.body.uid = record.uid     
req.body.name = record.name  
req.body.surname = record.surname  
req.body.email = record.email  
req.body.dob = record.dob  
req.body.address = record.address 
req.body.grade = record.grade  
req.body.class1 = record.class1 
req.body.gender = record.gender
req.body.mobile = record.mobile  
req.body.password = record.password   
req.body.photo = record.photo          

            
        
            
              req.check('uid','Enter uid').notEmpty();
              req.check('name','Enter Name').notEmpty();
              req.check('surname','Enter Surname').notEmpty();
              req.check('email','Enter email').notEmpty();
              req.check('email','Enter valid email').notEmpty().isEmail();
              req.check('dob','Enter Date Of Birth').notEmpty();
              req.check('address','Enter Address').notEmpty();
              req.check('grade','Enter Grade/Form').notEmpty();
              req.check('grade','Grade must be numeric').notEmpty().isNumeric();
              req.check('uid','Enter Student ID').notEmpty();
              req.check('class1','Enter Student Class').notEmpty();
              req.check('gender','Enter Gender').notEmpty();
              req.check('mobile', 'Enter Phone Number').notEmpty()
              req.check('photo', 'Enter Photo').notEmpty()

              var errors = req.validationErrors();
  
              if (errors) {
                
                req.session.errors = errors;
                req.session.success = false;
                req.flash('danger', req.session.errors[0].msg);
       
        
                res.redirect('/hurlings/import');
              
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
user.grade = grade;
user.class1 = class1;
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
user.idNumber = idNumber;
user.schoolName = 'null';
user.receiptNumber = 0;
user.year = year;
user.prefix = prefix
user.possibleMark = 0;
user.balance = adminBal;
user.balanceCarriedOver = 0;
user.status = 'owing';
user.status4 = 'null';
user.number = 0;
user.paymentId = 'null';
user.suffix = suffix;
user.photo = photo;
user.level = 'null';
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
user.email = email
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
user.count=count
user.pollCount = 0
user.possibleMark = 0;
user.topic = 'null';
user.actualCount = actualCount
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
user.parentId = 'null'
user.save()
  .then(user =>{
   
   
 

  })
  
  })




}     
                 
                     
   
                    // .catch(err => console.log(err))
             
                 
                    })
                  
                    req.flash('success', 'File Successfully!');
  
                    res.redirect('/hurlings/import')  
         
                  }
                  
                  
                    
                    
        
                   
        
                    
             
                }
      
        
  
  
  })
  
  
  
  
    //user account activation route  (students)
    router.get('/activate3/:token',(req,res)=>{
      const token = req.params.token;
      var m = moment()
    
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
                  const {uid, suffix, name,surname,grade,class1,address,adminBal, fullname,mobile,gender,dob,role,term,year,expdate,expStr,photo,  email,prefix, password, idNumber, schoolName, count, actualCount} = decodedToken;
                  console.log(grade,'gradeX')
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
                        user.grade = grade;
                        user.class1 = class1;
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
                        user.level = 'null';
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
                        user.email = email
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
                        user.count=count
                        user.pollCount = 0
                        user.possibleMark = 0;
                        user.topic = 'null';
                        user.actualCount = actualCount
                        user.startYear = year
                        user.currentYearCount = 0
                        user.stdYearCount = 0
                        user.admissionYear = year 
                        user.subjectNo = 0
                        user.quizDuration = 0
                        user.inboxNo = 0
                        user.quizNo = 0
                        user.quizBatch = 0
                        user.quizId= 'null'
                        user.testId='null'
                        user.icon = 'null'
                        user.industry = 'null'
                        user.text = password
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
  
  
  








 






  

//calendar
router.get('/calendar',isLoggedIn,records, function(req,res){
    var pro = req.user
  res.render('hurlings/admin/calendar',{pro:pro})
})

    

                  //adding event
  router.get('/addEvent',isLoggedIn,records, function(req,res){
    var pro = req.user
    res.render('hurlings/admin/event',{pro:pro})
  })
  

  router.post('/addEvent',isLoggedIn,records,  function(req,res){
    var title = req.body.title;
    var start = req.body.start;
    var end = req.body.end;
    var m2 = moment()
    var date = req.body.date;
    var dateValue = moment(date).valueOf()
    var userRole = req.body.role;
    var pro = req.user
    var venue = req.body.venue
     var m = moment(date)
     console.log(m.format("L"),'zvinhu')
     console.log(m,'dates')
     var mformat = m2.format('L')
     var mformat2 = m.format('L')
    var year = m.format('YYYY')

  
      req.check('title','Enter Title').notEmpty();
      req.check('start','Time').notEmpty();
      req.check('end','Enter Finish Time').notEmpty();
      req.check('date','Enter Date').notEmpty();
      req.check('venue','Enter Venue').notEmpty();
      req.check('role','Enter User Role').notEmpty();
    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('hurlings/admin/event',{ errors:req.session.errors,pro:pro})
      
    }
    else{
      
        Calendar.findOne({'start':start, 'date':date})
        .then(clax =>{
            if(clax){ 
  
           req.session.message = {
            type:'errors',
             message:'Date & Time already in use'
           }     
              res.render('hurlings/admin/event', {
                 message:req.session.message ,pro:pro
              })
            }else
           

          /*  for(var i =0 ;i<11; i++){
              console.log(m,'tamama')
              let days
              if(i > 0){
                 days = 7
                 console.log(days,'days')
              }else{
                days = 0
                console.log(days,'days')
              }
             
              m.add(days,'days')
              console.log(m.format("L"),'ehe')
              m.format("L")
              let nformat =   m.format("YYYY-MM-DD")+"T"+start;
              let nformat2 = m.format("YYYY-MM-DD")+"T"+end

             // console.log(nformat3,'3333')
             // let nmoment = moment(nformat)
              //console.log(nmoment,'ccc')
              console.log(moment(m.format("YYYY-MM-DD")+"T"+start).diff(moment(m.format("YYYY-MM-DD")+"T"+end)),'moment')
             let difference =moment(m.format("YYYY-MM-DD")+"T"+end).diff(moment(m.format("YYYY-MM-DD")+"T"+start))
             let duration = moment.duration(difference).asHours()*/

             console.log(moment(m.format("YYYY-MM-DD")+"T"+start).diff(moment(m.format("YYYY-MM-DD")+"T"+end)),'moment')
             let difference =moment(m.format("YYYY-MM-DD")+"T"+end).diff(moment(m.format("YYYY-MM-DD")+"T"+start))
             let duration = moment.duration(difference).asHours()
    
              var clas = new Calendar();
      clas.title = title;
      clas.start =    m.format("YYYY-MM-DD")+"T"+start;
      clas.end =    m.format("YYYY-MM-DD")+"T"+end;
      clas.userRole = userRole;
      clas.status = 'active'
      clas.venue = venue
      clas.duration = duration
      clas.time = start +" - "+ end
      clas.mformat = mformat
      clas.mformat2 = mformat2
      clas.slide = 0
      clas.dateValue = dateValue
      clas.style = 'null'
      clas.style2 = 'null'

      
     
      
    
    
      clas.save()
        .then(clas =>{
         
         /* req.session.message = {
            type:'success',
            message:'Event added'
          }  
          res.render('events/event',{message:req.session.message,pro:pro});*/
      
    
      })
            /*}*/
        
      
      
      })


      res.redirect('/hurlings/addEvent')
    }
    
    
    
    
    
    
    })




  //student List 
  
  
  router.get('/studentList',isLoggedIn,records,(req, res) => {
   var pro = req.user
   
    User.find({role:"student"},(err, docs) => {
        if (!err) {
            res.render("hurlings/students/list", {
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
    res.render('hurlings/students/overview2',{doc:doc,id:id,pro:pro})
    
  })
    })

    router.get('/studentSubjects/:id',isLoggedIn,records,function(req,res){
      var id = req.params.id
      console.log(id,'idd')
      var pro = req.user
      User.findById(id,function(err,doc){
        let uid = doc.uid
    
        StudentSub.find({studentId:uid},function(err,locs){
          res.render('hurlings/students/subjects3',{listX:locs,pro:pro,doc:doc,id:id})
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
          res.render('hurlings/teachers/subjects4',{listX:locs,pro:pro,doc:doc,id:id})
        })
      })
     
    })
    
    
    router.get('/teacherProfile/:id',isLoggedIn,records,function(req,res){
      var id = req.params.id
      User.findById(id,function(err,doc){
        pro = req.user
     
      //var pro = req.user
      res.render('hurlings/teachers/overview3',{pro:pro,id:id,doc:doc})
      
    })
      })
  

     //view profile
     router.get('/prof/:id',isLoggedIn,records,function(req,res){
      var pro = req.user
      User.findById(req.params.id, (err, doc) => {
        if (!err) {
        
            res.render("hurlings/admin/overviewStudent", {
               
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
         res.render('hurlings/admin/overviewStudent', {
         message:req.session.message, pro:pro 
          }) 
       
      } else
      var imageFile = req.file.filename;
     
     console.log(imageFile)
     console.log(id)
      User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 
      
      
        
      
      
      })
     
      res.redirect('/hurlings/prof/'+id)
    
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
          res.render("hurlings/class/list2", {
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
res.render('hurlings/class/classStudents',{listX:docs,pro:pro})

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
  res.render('hurlings/student/levelBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
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
    //  res.render('admin/levelBatch',{ errors:req.session.errors,pro:pro})

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/hurlings/levelBatch');
    
    }
    
    else 
    
    CodeLevel.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/hurlings/levelBatch');
    }else{

      var truck = new CodeLevel()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/hurlings/addLevel')

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
 res.render('hurlings/student/level',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    
  

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
       
        
   res.redirect('/hurlings/levelV');
  
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
res.redirect('/hurlings/levelBatch')
}) 
})


router.get('/levelBatchDelete/:id',isLoggedIn, (req, res) => {
  LevelV.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.redirect('/hurlings/levelV');
    }
    else { console.log('Error in deleting stock :' + err); }
  });
  });


//////////////////////

router.get('/classBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hurlings/class/classBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
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
      res.render('hurlings/class/classBatch',{ errors:req.session.errors,pro:pro})

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/hurlings/classBatch');
    
    }
    
    else 
    
    CodeV.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/hurlings/classBatch');
    }else{

      var truck = new CodeV()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/hurlings/addClass')

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
 res.render('hurlings/class/stock2',{pro:pro,code:code,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
    
  

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
       
        
   res.redirect('/hurlings/classesV');
  
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
res.redirect('/hurlings/addClass')
}) 
})


router.get('/classBatchDelete/:id',isLoggedIn, (req, res) => {
  ClassV.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.redirect('/hurlings/classesV');
    }
    else { console.log('Error in deleting stock :' + err); }
  });
  });

//add teachers
router.get('/addTeacher',isLoggedIn,records,  function(req,res){
   var pro = req.user
   var actualCount = req.user.actualCount
   var count = req.user.count
   var title
    var readonly
    var idNum = req.user.idNumber
    idNum++
    var prefix = req.user.prefix
    var uid = prefix+idNum
    


    if(actualCount < count){
      title = "Add Teachers"
      readonly = ""
      Dept.find({},function(err,docs){
        var arr1 = docs;
    
      if(docs.length == 0){
       res.redirect('/hurlings/dept')
     }
    else
     
       res.render('hurlings/teacher/admit', { arr1:arr1,pro:pro,uid:uid,readonly:readonly});
       })
    
    }
  
})

router.get('/addTeacherX',isLoggedIn,records,function(req,res){
  var pro = req.user

var title = ''
var readonly = ''



res.render('hurlings/teacher/admit',{pro:pro,readonly:readonly, title:title})
})

router.post('/addTeacher',isLoggedIn,records, function(req,res){
  var m = moment()
                  var year = m.format('YYYY')
                  var pro = req.user
                var uid = req.body.uid;
                var name = req.body.name;
                var teacher = 'teacher'
                var dept = req.body.dept
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
                      Dept.find({},function(err,docs){
                        var arr1 = docs;
                    
                      req.session.errors = errors;
                      req.session.success = false;
                      res.render('hurlings/teacher/admit',{ errors:req.session.errors,uid:uid1,arr1:arr1,pro:pro,pre:prefix})
                      })
                    
                  }
                  else
                
                 {
                    User.findOne({'fullname':fullname, 'role':teacher})
                    .then(user =>{
                        if(user){ 
                      // req.session.errors = errors
                        //req.success.user = false;
                        Dept.find({},function(err,docs){
                          var arr1 = docs;
                       req.session.message = {
                         type:'errors',
                         message:'user id already in use'
                       }     
                       
                          res.render('hurlings/teacher/admit', {
                              message:req.session.message, uid:uid1, pro:pro  }) 
                          })
                        
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
                  user.level = 'null';
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
   
  res.render('hurlings/teacher/teacher',{pro:pro,title:title,readonly:readonly,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

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
                res.render('hurlings/teacher/teacherX', {message:req.session.message,pro:pro
                     
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
       
        
  res.redirect('/hurlings/importTeacher');

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
  
                res.redirect('/hurlings/importTeacher')  
      
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
       
        
res.redirect('/records/dash');
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
       
        
  res.redirect('/hurlings/updateChildren');
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

 
 res.render('hurlings/parents/parents',{pro:pro,readonly:readonly,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 

   })


 
 
 

    
  router.post('/importParents',isLoggedIn,records, upload.single('file'),function(req,res){
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
                res.render('hurlings/parents/parents', {message:req.session.message,pro:pro
                     
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
req.check('uid','Enter Teacher ID').notEmpty();
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
       
        
  res.redirect('/hurlings/importTeacher');

}



         
const token = jwt.sign({uid,name,surname,address,mobile,gender,fullname,prefix, dob, photo, term, year, email,role, password,expdate,expStr,studentId }, JWT_KEY, { expiresIn: '100000m' });
const CLIENT_URL = 'http://' + req.headers.host;

const output = `
<h2>Please click on below link to activate your account</h2>
<a href="${CLIENT_URL}/hurlings/activateP/${token}">click here</a>
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

      res.redirect('/hurlings/importParents')


    }
    else {
        console.log('Mail sent : %s', info.response);
        idNumber++
     
        User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,locs){

       
        
        req.flash('success', 'Email  sent');

        res.redirect('/hurlings/importParents')

      })
    }
})
  


/*else


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
           
            user.save()
              .then(user =>{
               
              
                  
        
              })

            })
          }*/
                   
                
                  
                
                    
                  
                  
         
                  
                  
                  
                    
                    
        
                   
        
        
             
                })
                
                
      
        }
      }
  
  })
  

    //parents List
router.get('/parentsList',isLoggedIn,records,(req, res) => {
  var pro = req.user
  
  User.find({role:"parent"},(err, docs) => {
      if (!err) {
          res.render("hurlings/parents//parentsList", {
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
      
          res.render("hurlings/parents//updateParent", {
             
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
       
        
                res.redirect('/hurlings/parent/'+idX);
       
       
     
    
    }
  
  else
  {
  
        User.findOneAndUpdate({_id:id},req.body,
          { new: true }, (err, doc) => {
             if (!err) {
             
              req.flash('success', 'User Updated Successfully!');
  
                    res.redirect('/hurlings/parentsList')  }
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
  res.render('hurlings/admin//overview4',{doc:doc,id:id,pro:pro})
  
})
  })



  router.get('/parentChildren/:id',isLoggedIn,records,function(req,res){
    var id = req.params.id
    console.log(id,'idd')
    var pro = req.user
    User.findById(id,function(err,doc){
      let uid = doc.uid
  
      User.find({parentId:uid,role:"student"},function(err,locs){
        res.render('hurlings/parents//children',{listX:locs,pro:pro,doc:doc,id:id})
      })
    })
   
  })

    //teacher List
router.get('/teacherList',isLoggedIn,records,(req, res) => {
  var pro = req.user
  
  User.find({role:"teacher"},(err, docs) => {
      if (!err) {
          res.render("hurlings/teacher/list2", {
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
          res.render("hurlings/staff/list3", {
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
    res.render('/hurlings/admin/overviewRecords',{doc:doc,id:id,pro:doc})
    
  })
    })


    

  
router.get('/teacherSubjects/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  console.log(id,'idd')
  var pro = req.user

  User.findById(id,function(err,doc){
    let uid = doc.uid

    TeacherSub.find({studentId:uid},function(err,locs){
      res.render('hurlings/teacher//subjectsRecord',{listX:locs,pro:pro,doc:doc,id:id})
    })
  })
 
})


router.get('/teacherProfile/:id',isLoggedIn,function(req,res){
  var id = req.params.id
  User.findById(id,function(err,doc){
    pro = req.user
 
  //var pro = req.user
  res.render('hurlings/teacher/overviewRecords',{pro:pro,id:id,doc:doc})
  
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
                    user.level = 'null';
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
  res.render('records/idNum',{pro:pro})
  
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
      res.render('records/idNum',{errors:req.session.errors,pro:pro})
   
    
   }
   else
  User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){

    res.redirect('/records/addStudent')
  })

  })



  router.get('/idEditX',isLoggedIn,records,function(req,res){
    var pro = req.user
    res.render('records/idNumX',{pro:pro})
    
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
        res.render('records/idNumX',{errors:req.session.errors,pro:pro})
     
      
     }
     else
    User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,docs){
  
      res.redirect('/records/addTeacher')
    })
  
    })
      
//activate/deactivate users


  router.get('/usr/activate/:id',isLoggedIn,records,function(req,res){
    var count = req.user.count
    var actualCount = req.user.actualCount
    var id = req.params.id

    if(count <= actualCount){
      res.redirect('/records/studentList')
    }
    else


User.findByIdAndUpdate(id,{$set:{status3:"activated",status4:"deactivate"}},function(err,docs){

})
res.redirect('/records/studentList')


  })


  router.get('/usr/deactivate/:id',isLoggedIn,records,function(req,res){
    var count = req.user.count
    var actualCount = req.user.actualCount

id = req.params.id

User.findByIdAndUpdate(id,{$set:{status3:"deactivated",status4:"activate"}},function(err,docs){

})
res.redirect('/records/studentList')


  })

  //adding departments

router.get('/dept',isLoggedIn,records, function(req,res){
  var pro = req.user
  res.render('subject/dept',{pro:pro})
})

router.post('/dept',isLoggedIn,  function(req,res){
     var pro = req.user
  var name = req.body.name;

 
      req.check('name','Enter Name Of Department').notEmpty();

    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('subject/dept',{ errors:req.session.errors,pro:pro})
      
    }
    else{
      
        Dept.findOne({'name':name})
        .then(dept =>{
            if(dept){ 
  
           req.session.message = {
            type:'errors',
             message:'Department already exists'
           }     
              res.render('subject/dept', {
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
          res.render('subject/dept',{message:req.session.message,pro:pro});
      
    
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
          res.render("subject/deptlist", {
             list:docs,pro:pro
            
          });
      }
  });
});


//email reports

router.get('/emailReports', function(req,res){
  var m = moment()
  var month = m.format('MMMM')
    var year = m.format('YYYY')
            Report.find({month:month,year:year},function(err,docs){
              for(var i = 0;i<docs.length;i++){
                let studentId = docs[i].uid
                let filename = docs[i].filename
                console.log(studentId,'studentId')
                User.find({role:'parent',studentId:studentId},function(err,locs){
if(locs.length > 0){

            console.log(locs[0],'locs')
                  let email = locs[0].email
                  console.log(email,'email')

                
                  const output = `
                  <h2>Please Find the Attached Report </h2>
                 
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
                      subject: "Monthly Assessment Report ✔", // Subject line
                      html: output, // html body
                      attachments:[
                        {

                        
                             filename:'report.pdf',
                             path:'./reports/'+filename

                        }
                      ]
                  };
            
                  transporter.sendMail(mailOptions, (error, info) => {
                      if (error) {
                
                   
                   req.flash('danger', 'Reports Not Sent');
 
                   res.redirect('/records/emailResponse');
                      }
                      else {
                          console.log('Mail sent : %s', info.response);

                          
                          req.flash('success', 'Reports Successfully Emailed');
 
                          res.redirect('/records/emailResponse');
                   
                 // res.redirect('/multi')
             
                            
              }
              
                })


              }
                })
              }



            })
  

  
                     
                   
  })
  
  
  

router.get('/emailResponse',isLoggedIn,function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
 res.render('records/email',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
})






//////////////////////

router.get('/subVBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('admin/subBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })




  router.post('/subVBatch',isLoggedIn,  function(req,res){
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
       
        
  res.redirect('/hurlings/subVBatch');
    
    }
    
    else 
    
    CodeSub.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/hurlings/subVBatch');
    }else{

      var truck = new CodeSub()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/hurlings/subject')

    })

    }
    
    })
    
    
    })
  















 //add subjects
 router.get('/subject',isLoggedIn,records, function(req,res){
  var pro = req.user
  var code = req.user.paymentId
  if(code == 'null'){
    res.redirect('/hurlings/subVBatch')
  }
  Dept.find({},function(err,docs){
    var arr1 = docs;
    if(docs.length == 0){
      res.redirect('/hurlings/dept')
    }else
    var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hurlings/subject/add',{arr1:arr1,code:code,pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})

  })
})

router.post('/subject',isLoggedIn,records,  function(req,res){
     var pro = req.user
  var name = req.body.name;
  var grade = req.body.grade;
  var dept = req.body.dept
  var code = req.body.code;
  var code2 = req.body.code2;
  var status = "null"
  var icon = req.body.icon
 
      req.check('name','Enter Name Of Subject').notEmpty();
      req.check('grade','Enter Grade/Level').notEmpty();
      req.check('dept','Enter Department').notEmpty();
      req.check('code','Enter Code Of Subject').notEmpty();
    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        req.flash('danger', req.session.errors[0].msg);
       
        
        res.redirect('/hurlings/subject');
      
    }
    else{
      
        SubV.findOne({'name':name, 'grade':grade, 'code':code,'status':status})
        .then(subject =>{
            if(subject){ 
              req.flash('danger', 'Subject already exists');
       
        
              res.redirect('/hurlings/subject');
            }else
    
      var sub = new SubV();
    
      sub.name = name;
       sub.grade = grade;
       sub.dept = dept
      sub.code = code;
      sub.code2 = code2
      sub.icon = icon
      sub.status = status
    
   
    
    
      sub.save()
        .then(sub =>{
          SubV.find({grade:grade,code:code,status:'null'},(err, docs) => {
            let size = docs.length - 1
            console.log(docs[size],'fff')
            res.send(docs[size])
                    })
    
      })
    
        .catch(err => console.log(err))
      
      
      })
    }
    
    
})



router.post('/loadSubV',isLoggedIn, (req, res) => {
  var pro = req.user
  var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
  var code = req.user.paymentId


 SubV.find({code2:code,status:'null'},(err, docs) => {
 
    res.send(docs)
            })

  }); 

  router.post('/subV/update/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    console.log(id,'emblem')
    var pro = req.user
  
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var dateValue = m.valueOf()
    var mformat = m.format("L")
    var date = m.toString()
    var code = req.body.code
    SubV.findById(id,function(err,doc){
    
    
    
     
 SubV.findByIdAndUpdate(id,{$set:{code:code}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })






router.get('/saveSubV/:id',isLoggedIn, function(req,res){
  var pro = req.user

 var code2 = req.params.id
 var uid = req.user._id

var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
var dateValue = m2.valueOf()
var date = m2.toString()
var numDate = m2.valueOf()
var month = m2.format('MMMM')


//var mformat = m.format("L")



SubV.find({code2:code2},function(err,locs){

for(var i=0;i<locs.length;i++){

let code = locs[i].code
let name = locs[i].name
let grade = locs[i].grade
let icon = locs[i].icon
let dept = locs[i].dept



let idN = locs[i]._id


  SubV.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

  })
  

  

  Subject.findOne({'code':code})
  .then(hoc=>{

    if(!hoc){
      var sub = new Subject();
    
      sub.name = name;
       sub.grade = grade;
       sub.dept = dept
      sub.code = code;
      
      sub.icon = icon
    
    

      
       
      sub.save()
          .then(pro =>{

            User.findByIdAndUpdate(uid,{$set:{paymentId:'null'}},function(err,doc){

    
           




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
res.redirect('/hurlings/subject')
}) 
})


router.get('/subBatchDelete/:id',isLoggedIn, (req, res) => {
  SubV.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.redirect('/hurlings/subject');
    }
    else { console.log('Error in deleting stock :' + err); }
  });
  });












router.get('/subjectList',isLoggedIn,records, (req, res) => {
  var pro = req.user

  Subject.find({},(err, docs) => {
      if (!err) {
          res.render("hurlings/subject/list", {
             listX:docs, pro:pro
            
          });
      }
  });
});

//update subject
router.get('/subject/:id',isLoggedIn,records,function(req,res){
     var pro = req.user
  Subject.findById(req.params.id, (err, doc) => {
    if (!err) {
    
        res.render("subject/update", {
           
            sub: doc,pro:pro
          
            
        });
      
    }
});



})


router.post('/subject/:id',isLoggedIn,records, upload.single('myFile'),  (req, res) => {
  var pro = req.user
  var id = req.body._id;
  var name = req.body.name;
  var code = req.body.code;
 
  
  req.check('name','Enter Name Of Subject').notEmpty();
  req.check('grade','Enter Grade/Form').notEmpty();
  req.check('code','Enter Subject Code').notEmpty();
 
  
    
  var errors = req.validationErrors();



   if (errors) {
  
     
        req.session.errors = errors;
        req.session.success = false;
        res.render('hurlings/subject/update',{ errors:req.session.errors,pro:pro})
     
    
    }
  
else
{
 
        Subject.findOneAndUpdate({_id:id},req.body,
          { new: true }, (err, doc) => {
             if (!err) {
             
                res.redirect('/hurlings/subjectList'); }
             else {
               console.log('error'+err)
       
             }
           
         })


    
}

});



  // this route is for deleting a subject
  router.get('/subject/delete/:id',isLoggedIn, (req, res) => {

    Subject.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
          res.redirect('/hurlings/subjectList');
      }
      else { console.log('Error in deleting subject :' + err); }
    });
    });











  //student registering subjects
  router.get('/studentSub',isLoggedIn,records,function(req,res){
    
    User.find({role:'student'},function(err,docs){
    
    
     
    for(var i = 0; i<docs.length; i++){
    let studentName = docs[i].fullname;
    let studentId = docs[i].uid;
    let studentClass = docs[i].class1;
    let grade = docs[i].grade;
    
    Subject.find({grade:grade},function(err,nocs){
    for(var x = 0; x < nocs.length; x++){
      let subjectName = nocs[x].name;
      let subjectCode = nocs[x].code
      let dept = nocs[x].dept
       
       
      StudentSub.findOne({'studentName':studentName, 'subjectCode':subjectCode})
      .then(clax =>{
          if(clax){ 
       
     res.redirect('/hurlings/dash')
          }
          else
    
    var student = new StudentSub();
    student.studentName = studentName;
    student.studentId = studentId;
    student.studentClass = studentClass;
    student.subjectCode = subjectCode;
    student.subjectName = subjectName;
    student.dept = dept;

    student.save()
    
    
    })
    }
    
    
    })
    
    }
    res.redirect('/hurlings/subTotal')
    })
    
    
    })
    
    
    
    
    //update student subject number
    router.get('/subTotal',isLoggedIn,records,function(req,res){
   
    User.find({role:'student'},function(err,docs){
    
      for(var i = 0; i<docs.length; i++){
        let id = docs[i]._id;
        let studentId = docs[i].uid;
    
    StudentSub.find({studentId:studentId},function(err,nocs){
     let total = nocs.length;
    
     User.findByIdAndUpdate(id,{$set:{subject:total}},function(err,tocs){
    
     })
     
    
    
    
    })
    
    
      }
      res.redirect('/records/dash')
    
    
    })
    })
  
    
/////////////alloBatch

router.get('/alloBatch',isLoggedIn,  function(req,res){
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  res.render('hurlings/subject/alloBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  })




  router.post('/alloBatch',isLoggedIn,  function(req,res){
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
      res.render('hurlings/subject/classBatch',{ errors:req.session.errors,pro:pro})

      
  


  req.flash('danger', req.session.errors[0].msg);
       
        
  res.redirect('/hurlings/alloBatch');
    
    }
    
    else 
    
    AlloCode.findOne({'code':code})
    .then(grower =>{
    if(grower){

      req.flash('danger', 'Code already in use');
 
      res.redirect('/hurlings/alloBatch');
    }else{

      var truck = new AlloCode()
      truck.code = code
      truck.time = time
      truck.mformat = mformat

      truck.save()
          .then(pro =>{

      User.findByIdAndUpdate(id,{$set:{paymentId:code,pollUrl:pro._id}}, function(err,coc){
          
        
      })
res.redirect('/hurlings/teacherSubject')

    })

    }
    
    })
    
    
    })
  








//allocate subjects to teachers

  
    router.get('/teacherSubject',isLoggedIn,records, function(req,res){
      var pro = req.user
      var code = req.user.paymentId
      if(code == 'null'){
        res.redirect('/hurlings/alloBatch')
      }else
      var errorMsg = req.flash('danger')[0];
      var successMsg = req.flash('success')[0];
      Class1.find({},function(err,docs){
      
        var arr1 = docs;

      res.render('hurlings/teacher/subjects',{arr1:arr1,code:code, arr:arr,pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
        })
      })
   
    
    
    
    router.post('/teacherSubject', isLoggedIn,records, function(req,res){
      var pro = req.user
  
    var teacherId, subjectCode, grade, dept, id;
    var teacherName = req.body.teacherName;
    teacherId = req.body.teacherId;
    var class1 = req.body.class1
    var subjectName = req.body.subjectName;
    var icon = req.body.icon;
    subjectCode = req.body.subjectCode
    grade = req.body.grade
    var code= req.body.code
    var status = "null"
    console.log(icon,'whats peasy')
    var arr, arr1
    console.log(teacherName)
    
    
      
    req.check('teacherName','Enter Name Of Teacher').notEmpty();
  
    req.check('subjectName','Enter Name of Subject').notEmpty();
    
    
      
    var errors = req.validationErrors();
    
    
    
     if (errors) {
     
    
       
          req.session.errors = errors;
          req.session.success = false;
          //res.render('teachers/subjects',{ errors:req.session.errors,arr:arr,arr1:arr1,pro:pro})
       
          req.flash('danger', req.session.errors[0].msg);
       
        
          res.redirect('/hurlings/teacherSubject');

      }
    else
 AlloSub.findOne({'teacherName':teacherName,  'subjectName':subjectName,"status":status,"subjectCode":subjectCode,"class1":class1,"code":code})
    .then(clax =>{
        if(clax){ 
       
          
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

          req.flash('danger', 'Subject already allocated');
 
      res.redirect('/hurlings/teacherSubject');
          
        }
        else
    
    var teacher = new AlloSub();
    teacher.teacherName = teacherName;
    teacher.teacherId = teacherId;
    teacher.subjectCode = subjectCode;
    teacher.subjectName = subjectName;
    teacher.grade = grade;
  teacher.code = code
    teacher.class1 = class1
    teacher.icon = icon
    teacher.status = status
 
    
    teacher.save()
    .then(teach =>{
                         
      AlloSub.find({code:code,status:"null"},(err, docs) => {
        let size = docs.length - 1
        console.log(docs[size],'fff')
        res.send(docs[size])
                })
    
    })
    
    
    
    
    
    })
    
    })
    
    //////mafia
    
  
router.post('/loadAlloSub',isLoggedIn, (req, res) => {
  var pro = req.user
  var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
  var code = req.user.paymentId


  AlloSub.find({code:code,status:'null'},(err, docs) => {
 
    res.send(docs)
            })

  }); 

  router.post('/alloSub/update/:id',isLoggedIn,function(req,res){
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
    AlloSub.findById(id,function(err,doc){
    
    
    
     
      AlloSub.findByIdAndUpdate(id,{$set:{class1:class1}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })






router.get('/saveAlloSub/:id',isLoggedIn, function(req,res){
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



AlloSub.find({code:code},function(err,locs){

for(var i=0;i<locs.length;i++){

let grade = locs[i].grade
let class1 = locs[i].class1
let subjectName = locs[i].subjectName
let subjectCode = locs[i].subjectCode
let icon = locs[i].icon
let teacherName = locs[i].teacherName
let teacherId = locs[i].teacherId


let idN = locs[i]._id




  

  TeacherSub.findOne({'subjectCode':subjectCode,'class1':class1})
  .then(hoc=>{

    if(!hoc){
     
    var teacher = new TeacherSub();
    teacher.teacherName = teacherName;
    teacher.teacherId = teacherId;
    teacher.subjectCode = subjectCode
    teacher.subjectName = subjectName;
    teacher.grade = grade;
   
    teacher.class1 = class1
    teacher.icon = icon
    
    
    
    teacher.save()
    .then(teach =>{
                         
    id = teach._id;
    User.findByIdAndUpdate(uid,{$set:{paymentId:'null'}},function(err,doc){

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
    AlloSub.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

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


req.flash('success', 'Classes Successfully Added');
res.redirect('/hurlings/teacherSubject')
}) 
})


router.get('/alloBatchDelete/:id',isLoggedIn, (req, res) => {
  ClassV.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
        res.redirect('/hurlings/classesV');
    }
    else { console.log('Error in deleting stock :' + err); }
  });
  });

  
  //autocomplete teacherName & uid
   
  router.get('/autocompleteTS/',isLoggedIn, function(req, res, next) {
   
  
    var regex= new RegExp(req.query["term"],'i');
   
    var uidFilter =User.find({  role:"teacher", fullname:regex, },{'fullname':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
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

  router.post('/autoTS',isLoggedIn,function(req,res){
    var id = req.body.code

   
    User.findById(id,function(err,doc){
   if(doc== undefined){
     res.redirect('/records/autoTS')
   }else
   console.log(doc,'docs[0]')
      res.send(doc)
    })
  
  
  })
  
  
  
  
  
  
  
  
  //autocomplete teacherName & uid
   
  router.get('/autocompleteSub/',isLoggedIn,records, function(req, res, next) {
  
 
    var regex= new RegExp(req.query["term"],'i');
   
    var uidFilter =Subject.find({name:regex},{'name':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  
        
     
  
          
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
  router.post('/autoSub',isLoggedIn,records,function(req,res){
    var name = req.body.code
 
   
      Subject.find({name:name},function(err,docs){
   if(docs == undefined){
     res.redirect('/records/autoSub')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //update teacher subjectNumber
  //update student subject number
  router.get('/subTotalX',isLoggedIn,records,function(req,res){

    User.find({role:'teacher'},function(err,docs){
    
      for(var i = 0; i<docs.length; i++){
        let id = docs[i]._id;
        let teacherId = docs[i].uid;
    
    TeacherSub.find({teacherId:teacherId},function(err,nocs){
     let total = nocs.length;
    
     User.findByIdAndUpdate(id,{$set:{subject:total}},function(err,tocs){
    
     })
     
    
    
    
    })
    
    
      }
      res.redirect('/records/dash')
    
    
    })
    })
    
  
  
    router.get('/teacherSubList',isLoggedIn,records, (req, res) => {
       var pro = req.user
  
      TeacherSub.find({},(err, docs) => {
          if (!err) {
              res.render("hurlings/subjects/teacherSubList", {
                 list:docs, pro:pro
                
              });
          }
      });
    });    



//adding lessons to timetable
router.get('/lessonBatch',isLoggedIn,records,function(req,res){
  var pro = req.user
  res.render('hurlings/lesson/batch',{pro:pro})
  
  })
  
  router.post('/lessonBatch',isLoggedIn, records,function(req,res){
       var pro = req.user
  var uid = req.body.uid;
  var fullname = req.body.fullname;
  var id = req.user._id;

  
    req.check('uid','Enter Teacher ID').notEmpty();
    req.check('fullname','Enter Fullname').notEmpty();
   
    var errors = req.validationErrors();
    if (errors) {
   
      req.session.errors = errors;
      req.session.success = false;
      res.render('hurlings/lesson/batch',{errors:req.session.errors,pro:pro})
   
    
   }
   else
  User.findOne({'fullname':fullname, 'uid':uid})
  .then(clax =>{
      if(clax){ 
     User.findByIdAndUpdate(id,{$set:{teacherName:fullname, teacherId:uid}},function(err,docs){
  console.log(id)
  
     })
     res.redirect('/records/lessonX')
  
      }else
  
      req.session.message = {
        type:'errors',
        message:'User does not exist'
      }   
    res.render('hurlings/lesson/batch',{message:req.session.message, pro:pro});
    
  
  
  
    })
  
  })
  
  
  router.get('/lessonX',isLoggedIn,records,function(req,res){
    var pro = req.user
    res.redirect('/hurlings/lesson')
  })
  
  router.get('/lesson',isLoggedIn,records,  function(req,res){
    var pro = req.user
   var fullname = req.user.teacherName;
   var teacherId = req.user.teacherId;
   var companyId = req.user.companyId
   var arr1 =[]
   var arr = []
   Class1.find({},function(err,focs){
   Room.find({},(err, docs) => {
     arr1 = docs
     arr = focs
     if(docs == 0){
       res.redirect('/hurlings/addClassRoom')
     }
  
  res.render('hurlings/lesson/add-lesson',{fullname:fullname, teacherId:teacherId,arr:arr, arr1:arr1,pro:pro})
    })
  
   })
  
  })
  
  
  router.post('/lesson',isLoggedIn,records, function(req,res){
    var pro = req.user
    var day = req.body.day
    var m = moment(day)
    var year = m.format('YYYY')
    var month = m.format('MMMM')
   var arrX=[]
    var mformat = m.format("L")
    var fullname = req.user.teacherName;
    var teacherID = req.user.teacherId;
  var teacherName = req.body.teacherName;
  var teacherId = req.body.teacherId;
  var subjectName = req.body.subjectName
  var subjectCode = req.body.subjectCode
  var class1 = req.body.class1;
  var start = req.body.start;
  var room = req.body.room
  var finish = req.body.finish
  var icon = req.body.icon
  console.log(icon,'icon')
  var term = req.user.term
  var arr1 = []

  
  console.log(moment(start),'start')
  //clas.start =    m.format("YYYY-MM-DD")+"T"+start;
  //clas.end =    m.format("YYYY-MM-DD")+"T"+end;
  req.check('teacherName','Enter Teacher Name').notEmpty();
  req.check('teacherId','Enter Teacher ID').notEmpty();
  req.check('subjectName','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  req.check('class1','Enter Class').notEmpty();
  req.check('day','Enter Day').notEmpty();
  req.check('start','Enter Start  Time').notEmpty();
  req.check('finish','Enter Finish Time').notEmpty();

  
  
  var errors = req.validationErrors();
       
  if (errors) {
    Room.find({},(err, wocs) => {
      Class1.find({},function(err,focs){
      arr1 = wocs
      arrX = focs
    req.session.errors = errors;
    req.session.success = false
    res.render('hurlings/lesson/add-lesson',{errors:req.session.errors, arr1:arr1, arr:arr,pro:pro})
    })
  })
    
  }
  
  else 
  {
  TeacherSub.findOne({'subjectCode':subjectCode})
  .then(teach=>{
    if(teach){
      Lesson.findOne({'subjectCode':subjectCode,'start':start, 'class1':class1})
      .then(lsn=>{
        if(lsn){
          Room.find({},(err, wocs) => {
            Class1.find({},function(err,focs){
              arrX = focs
            arr1 = wocs
          req.session.message = {
            type:'errors',
            message:'Lesson Clash'
          }     
         
  res.render('hurlings/lesson/add-lesson',{message:req.session.message,fullname:fullname, teacherId:teacherID,arr:arr, arr1:arr1,pro:pro})
        })
      })
        }
        else{
          
          for(var i =0 ;i<11; i++){
            console.log(m,'tamama')
            let days
            if(i > 0){
               days = 7
               console.log(days,'days')
            }else{
              days = 0
              console.log(days,'days')
            }
           
            m.add(days,'days')
            console.log(m.format("L"),'ehe')
            let dateValue = m.valueOf()
            m.format("L")
            let nformat =   m.format("YYYY-MM-DD")+"T"+start;
            let nformat2 = m.format("YYYY-MM-DD")+"T"+finish

           // console.log(nformat3,'3333')
           // let nmoment = moment(nformat)
            //console.log(nmoment,'ccc')
            console.log(moment(m.format("YYYY-MM-DD")+"T"+start).diff(moment(m.format("YYYY-MM-DD")+"T"+finish)),'moment')
           let difference =moment(m.format("YYYY-MM-DD")+"T"+finish).diff(moment(m.format("YYYY-MM-DD")+"T"+start))
           let duration = moment.duration(difference).asHours()
  
  
          var lesson = new Lesson();
      
     
          lesson.teacherName = teacherName;
          lesson.teacherId = teacherId;
          lesson.class1 = class1;
          lesson.icon = icon
          lesson.dateValue = dateValue
          lesson.status = 'active'
          lesson.subjectName = subjectName;
          lesson.subjectCode = subjectCode;
          lesson.start= start;
          lesson.finish = finish;
          lesson.type = 'Class';
          lesson.mformatStart = nformat
          lesson.mformatEnd = nformat2
          lesson.time = start +" - "+ finish
          lesson.duration=duration
          lesson.mformat = mformat
          lesson.mformat2 = m.format('L')
          lesson.day = day;
          lesson.room = room
          lesson.term = term;
          lesson.year = year;
          lesson.month = month;
          lesson.style2 = 'null'
          lesson.style = 'null'
          lesson.slide = 0
      
       
          
      
        lesson.save()
        .then(less =>{
         /* Room.find({companyId:companyId},(err, wocs) => {
            Class1.find({companyId:companyId},function(err,focs){
              arr=focs
            arr1 = wocs
          req.session.message = {
            type:'success',
            message:'Lesson Added Successfully'
          }     
         
  res.render('lesson/add-lesson',{message:req.session.message,fullname:fullname, teacherId:teacherID,arr:arr, arr1:arr1,pro:pro})
        })
      })*/
         
  
        })
  
  
        }
       
      }
      
      })
      res.redirect('/hurlings/lesson')
    }
    else{
      Room.find({},(err, wocs) => {
        Class1.find({},function(err,focs){
          arr = focs
        arr1 = wocs
      req.session.message = {
        type:'errors',
        message:'Subject Code does not exist'
      }     
         res.render('hurlings/lesson/add-lesson', {
            message:req.session.message, fullname:fullname, teacherId:teacherID,arr:arr, arr1:arr1,pro:pro})
         })
        })
        
    }
  })
  
  
  }
  
  
  
  
  })
  
  
  
    //role admin
   //this routes autocompletes the fullname of the teacher to be allocated a lesson
   router.get('/autocompleteLBX/',isLoggedIn,records, function(req, res, next) {
 
  
    var regex= new RegExp(req.query["term"],'i');
   var teacherId = req.user.teacherId
    var uidFilter =TeacherSub.find({ subjectCode:regex},{'subjectCode':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(sub=>{
  
        
     
  
          
         let obj={
           id:sub._id,
           label: sub.subjectCode,
  
       
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
  router.post('/autoLBX',isLoggedIn,records,function(req,res){
    var code = req.body.code
  console.log(code,'code')
   
  
    TeacherSub.find({subjectCode:code},function(err,docs){
   if(docs == undefined){
     res.redirect('/hurlings/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //role admin
   //this routes autocompletes the fullname of the teacher to be allocated a lesson
   router.get('/autocompleteLB/',isLoggedIn,records, function(req, res, next) {
 
  
      var regex= new RegExp(req.query["term"],'i');
     
      var uidFilter =User.find({fullname:regex, role:"teacher"},{'fullname':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
    
      
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
    router.post('/autoLB',isLoggedIn,records,function(req,res){
      var fullname = req.body.code
      var companyId = req.user.companyId
    
  
      User.find({fullname:fullname},function(err,docs){
     if(docs == undefined){
       res.redirect('/hurlings/lesson')
     }else
    
        res.send(docs[0])
      })
    
    
    })
    
  
    //role admin - lesson batch
   //this routes autocompletes the fullname of the teacher to be allocated a lesson
   router.get('/autocompleteLBL/',isLoggedIn,records, function(req, res, next) {
  
  
    var regex= new RegExp(req.query["term"],'i');
   
    var uidFilter =User.find({uid:regex, role:"teacher"},{'uid':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    uidFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
  
        
     
  
          
         let obj={
           id:user._id,
           label: user.uid,
  
       
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
  router.post('/autoLBL',isLoggedIn,records,function(req,res){
    var uid = req.body.code
    var companyId = req.user.companyId
  
  
  
    User.find({uid:uid},function(err,docs){
   if(docs == undefined){
     res.redirect('/lesson')
   }else
  
      res.send(docs[0])
    })
  
  
  })
  
  
  
  
  

      //student lesson timetable
      /*
      router.get('/timetable',isLoggedIn, (req, res) => {
        var pro = req.user
        var term = req.user.term
        var arr= []
        var companyId = req.user.companyId
        Lesson.find({companyId:companyId,term:term},(err, docs) => {
          for(var i = 0; i<docs.length; i++){
            arr.push(docs[i].start)
          }
            if (!err) {
                res.render("lesson/timetableAdmin", {
                   list:docs,arr:arr,pro:pro
                  
                });
            }
        });
      });
    */

   router.get('/timetable',isLoggedIn,records,(req,res)=>{
    res.render('records/timetable')
  })
  
  
  router.get('/examList',isLoggedIn,records,(req,res)=>{
    res.render('records/timetableExam')
  })
  
  router.get('/events',isLoggedIn,records,(req,res)=>{
    res.render('records/events')
  })
  
  
    
      router.get('/addClassRoom',isLoggedIn,records, (req,res)=>{
        var pro = req.user
        res.render('lesson/room',{pro:pro})
      })
    
    
      router.post('/addClassRoom', isLoggedIn,records, (req,res)=>{
        var pro = req.user
      
        var room = req.body.room;
    
        req.check('room','Enter Classroom').notEmpty();
       
      
        
        var errors = req.validationErrors();
             
        if (errors) {
        
          req.session.errors = errors;
          req.session.success = false;
          res.render('lesson/room',{ errors:req.session.errors,pro:pro})
        
      }
      else{
        
          Room.findOne({'name':room})
          .then(clax =>{
              if(clax){ 
    
             req.session.message = {
              type:'errors',
               message:'Classroom already exists'
             }     
                res.render('lesson/room', {
                   message:req.session.message ,pro:pro
                })
              }else
      
        var rom = new Room();
      
        rom.name = room;
        rom.companyId = companyId;
       
      
      
        rom.save()
          .then(romm =>{
           
            req.session.message = {
              type:'success',
              message:'Classroom added'
            }  
            res.render('lesson/room',{message:req.session.message,pro:pro});
        
      
        })
      
          .catch(err => console.log(err))
        
        
        })
      }
      
      
      
    
    
    
    
      })
        






 
    
    
    
    
    
    //role - all
    //exam timetable
    router.get('/roomList',isLoggedIn,records, (req, res) => {
      var pro = req.user
     
      Room.find({},(err, docs) => {
          if (!err) {
              res.render("lesson/roomList", {
                 listX:docs,pro:pro
                
              });
          }
      });
    });
    
  


               //importing students details from excel
  
               router.get('/migrate',isLoggedIn,records, function(req,res){
                var actualCount = req.user.actualCount
                var count = req.user.count
                var pro = req.user
                var m = moment()
                var year = m.format('YYYY')
                var title
                var readonly 
                
                if(actualCount < count ){
                  Class1.find({},function(err,docs){
                    title = "Import Students"
                    readonly = ""
                    classes = docs.length;
                    if(classes == 0){
                      res.redirect('/records/addClass')
                    }else
                    res.render('imports/students2',{pro:pro})
                      })
                    
                    
                }else
            
               
                  title = "You've Reached Maximum Users Limit"
                  readonly = "readonly"
                
                  res.render('imports/students2',{pro:pro,title:title,readonly:readonly})
                    
                  
               
               
                
              })
              
              
              
              
              
              
            
              
              router.post('/migrate',isLoggedIn,records, upload.single('file'),  (req,res)=>{
                var count = req.user.actualCount
                var m = moment()
             
                
                var adminBal = req.user.balance
                var pro = req.user
                var id =   req.user._id
                var idNumber = req.user.idNumber
              
                if(!req.file){
                    req.session.message = {
                      type:'errors',
                      message:'Select File!'
                    }     
                      res.render('imports/students2', {message:req.session.message,pro:pro}) 
                    }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
                        req.session.message = {
                            type:'errors',
                            message:'Upload Excel File'
                          }     
                            res.render('imports/students2', {message:req.session.message,pro:pro
                                 
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
                 
                    
                   
                  
                      
                     
                    
                        let levelX
                        let adminBal = req.user.balance
                        let uid = record.uid;
                        let name = record.name;
                        let surname = record.surname;
                        let fullname = name +" "+ surname
                        let role = 'student';
                        let address = record.address
                        let mobile = record.mobile;
                        let gender = record.gender;
                        let dob = record.dob;
                        let email = record.email
                        let class1 = record.class1;
                        let grade = record.grade
                        let password = record.password;
                        let term = req.user.term
                        var year = m.format('YYYY')
                        let suffix = 'null'
                        let prefix = req.user.prefix
                        let num = record.num
                        let expdate = req.user.expdate
                        let expStr = req.user.expStr
                  
                        let photo = 'propic.jpg'
            
                        Level.find({companyId:companyId,grade:record.grade},function(err,wocs){
                          levelX = wocs[0].levelX
                          
                              })
            
            req.body.uid = record.uid     
            req.body.name = record.name  
            req.body.surname = record.surname  
            req.body.email = record.email  
            req.body.dob = record.dob  
            req.body.address = record.address 
            req.body.grade = record.grade  
            req.body.class1 = record.class1 
            req.body.gender = record.gender
            req.body.mobile = record.mobile  
            req.body.password = record.password             
            
                        
                    
                        try{
                          req.check('uid','Enter uid').notEmpty();
                          req.check('name','Enter Name').notEmpty();
                          req.check('surname','Enter Surname').notEmpty();
                          req.check('email','Enter email').notEmpty();
                          req.check('email','Enter valid email').notEmpty().isEmail();
                          req.check('dob','Enter Date Of Birth').notEmpty();
                          req.check('address','Enter Address').notEmpty();
                          req.check('grade','Enter Grade/Form').notEmpty();
                          req.check('grade','Grade must be numeric').notEmpty().isNumeric();
                          req.check('uid','Enter Student ID').notEmpty();
                          req.check('class1','Enter Student Class').notEmpty();
                          req.check('gender','Enter Gender').notEmpty();
                          req.check('mobile', 'Enter Phone Number').notEmpty()
            
            
                          var errors = req.validationErrors();
              
                          if (errors) {
                            
                            req.session.errors = errors;
                            req.session.success = false;
                            for(let x=0;x<req.session.errors.length;x++){
                              throw new SyntaxError(req.session.errors[x].msg +" "+"on line"+" "+ num)
                            }
                          
                      }
            
            
            
                     
                        const token = jwt.sign({uid, name,surname,grade, suffix,class1,address,adminBal, levelX, fullname,mobile,gender,dob,role,term,year,expdate,expStr,photo, email,prefix, password, }, JWT_KEY, { expiresIn: '100000m' });
                        const CLIENT_URL = 'http://' + req.headers.host;
                  
                        const output = `
                        <h2>Please click on below link to activate your account</h2>
                        <a href="${CLIENT_URL}/activateXX/${token}">click here</a>
                        <h1> User credentials</h1>
                        <p>userID:${uid}</p>
                        <p>password:${password}</p>
                        <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
                        `;
                  
                        const transporter = nodemailer.createTransport({
                          service: 'gmail',
                          auth: {
                              user: "cashreq00@gmail.com",
                              pass: "powerland94",
                          },
                        });
                        
                  
                        // send mail with defined transport object
                        const mailOptions = {
                            from: '"Admin" <cashreq00@gmail.com>', // sender address
                            to: record.email, // list of receivers
                            subject: "Account Verification ✔", // Subject line
                            html: output, // html body
                        };
                  
                      await transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                              console.log(error)
                        
                         req.session.message = {
                           type:'errors',
                           message:'confirmation email not sent'
                         }
                         
                         res.render('imports/students2', {
                          message:req.session.message ,pro:pro
                     }) 
                     
                      
                            }
                            else {
                                console.log('Mail sent : %s', info.response);
                                
                                idNumber++
                                count++
                                User.findByIdAndUpdate(id,{$set:{idNumber:idNumber,actualCount:count}},function(err,locs){
                                req.session.message = {
                                  type:'success',
                                  message:'confirmation email sent'
                                }     
                                
                                res.render('imports/students2', {
                                  message:req.session.message ,pro:pro
                             
                            })
                          })
                            }
                        })
                   
            
                         
                                 
                             
                                 
                               
                                // .catch(err => console.log(err))
                              }
                              catch(e){
                                res.send(e.message)
                               }
                                })
                              
                              
                     
                              }
                              
                              
                                
                                
                    
                               
                    
                                
                         
                            }
                  
                    
              
              
              })
              
              
              
              
                //user account activation route  (students)
                router.get('/activateXX/:token',(req,res)=>{
                  const token = req.params.token;
                  var m = moment()
                
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
                              const {uid, suffix, name,surname,grade,class1,address,adminBal,levelX, fullname,mobile,gender,dob,role,term,year,expdate,expStr,photo,  email,prefix, password, idNumber, schoolName} = decodedToken;
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
                                    user.grade = grade;
                                    user.class1 = class1;
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
                                    user.idNumber = idNumber;
                                    user.schoolName = schoolName;
                                    user.receiptNumber = 0;
                                    user.year = year;
                                    user.prefix = prefix
                                    user.balance = adminBal;
                                    user.balanceCarriedOver = 0;
                                    user.status = 'owing';
                                    user.paymentId = 'null';
                                    user.suffix = suffix;
                                    user.photo = photo;
                                    user.level = 'null';
                                    user.levelX = levelX;
                                    user.pollUrl ='null';
                                    user.annual = 0;
                                    user.fees = 0;
                                    user.state = 'old'
                       
                                    user.idNumber = 0;
                                    user.recNumber=0
                                    user.type = 'null';
                                    user.address = address;
                                    user.email = email
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
                                    user.count=0
                                    user.pollCount = 0
                                    user.actualCount = 0  
                                    user.startYear = year
                                    user.currentYearCount = 0
                                    user.stdYearCount = 0
                                    user.admissionYear = year 
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
              
              
              
            
        //testing
        
router.get('/importsT',isLoggedIn,records,function(req,res){
  var pro = req.user
  res.render('imports/studentsT',{pro:pro})
})






router.post('/importsT',isLoggedIn,records, upload.single('file'),  (req,res)=>{
  var count = req.user.actualCount
  var m = moment()

  
  var adminBal = req.user.balance
  var pro = req.user
  var id =   req.user._id
  var idNumber = req.user.idNumber
  var count = req.user.count
  var actualCount = req.user.actualCount

  if(!req.file){
      req.session.message = {
        type:'errors',
        message:'Select File!'
      }     
        res.render('imports/students', {message:req.session.message,pro:pro}) 
      }else if (req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
          req.session.message = {
              type:'errors',
              message:'Upload Excel File'
            }     
              res.render('imports/studentsT', {message:req.session.message,pro:pro
                   
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
           
       var newData = data.map( function (record){
   
      
     
    
        
       
      
          let levelX
          let adminBal = req.user.balance
          let uid = record.uid;
          let name = record.name;
          let surname = record.surname;
          let fullname = name +" "+ surname
          let role = 'student';
          let address = record.address
          let mobile = record.mobile;
          let gender = record.gender;
          let dob = record.dob;
          let email = record.email
          let class1 = record.class1;
          let grade = record.grade
          let password = record.password;
          let term = req.user.term
          var year = m.format('YYYY')
          let suffix = 'null'
          let prefix = req.user.prefix
          let num = record.num
          let expdate = req.user.expdate
          let expStr = req.user.expStr
          
          let photo = 'propic.jpg'

        

req.body.uid = record.uid     
req.body.name = record.name  
req.body.surname = record.surname  
req.body.email = record.email  
req.body.dob = record.dob  
req.body.address = record.address 
req.body.grade = record.grade  
req.body.class1 = record.class1 
req.body.gender = record.gender
req.body.mobile = record.mobile  
req.body.password = record.password             

          
      
          try{
            req.check('uid','Enter uid').notEmpty();
            req.check('name','Enter Name').notEmpty();
            req.check('surname','Enter Surname').notEmpty();
            req.check('email','Enter email').notEmpty();
            req.check('email','Enter valid email').notEmpty().isEmail();
            req.check('dob','Enter Date Of Birth').notEmpty();
            req.check('address','Enter Address').notEmpty();
            req.check('grade','Enter Grade/Form').notEmpty();
            req.check('grade','Grade must be numeric').notEmpty().isNumeric();
            req.check('uid','Enter Student ID').notEmpty();
            req.check('class1','Enter Student Class').notEmpty();
            req.check('gender','Enter Gender').notEmpty();
            req.check('mobile', 'Enter Phone Number').notEmpty()


            var errors = req.validationErrors();

            if (errors) {
              
              req.session.errors = errors;
              req.session.success = false;
              for(let x=0;x<req.session.errors.length;x++){
                throw new SyntaxError(req.session.errors[x].msg +" "+"on line"+" "+ num)
              }
            
        }



       
          const token = jwt.sign({uid, name,surname,grade, suffix,class1,address,adminBal,count,actualCount,  fullname,mobile,gender,dob,role,term,year,expdate,expStr,photo,  email,prefix, password, }, JWT_KEY, { expiresIn: '100000m' });
          const CLIENT_URL = 'http://' + req.headers.host;
    
          const output = `
          <h2>Please click on below link to activate your account</h2>
          <a href="${CLIENT_URL}/records/activate3/${token}">click here</a>
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
          });
          
    
          // send mail with defined transport object
          const mailOptions = {
              from: '"Admin" <cashreq00@gmail.com>', // sender address
              to: record.email, // list of receivers
              subject: "Account Verification ✔", // Subject line
              html: output, // html body
          };
    
       transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error)
          
           req.session.message = {
             type:'errors',
             message:'confirmation emails not sent'
           }
           
         /*  res.render('imports/studentsT', {
            message:req.session.message ,pro:pro
       }) */
      
        throw new SyntaxError(req.session.message.message)
      
       
       
              }
              else {

                try {
                  
              
                  console.log('Mail sent : %s', info.response);
                  
                  idNumber++
            
                  User.findByIdAndUpdate(id,{$set:{idNumber:idNumber}},function(err,locs){
                  req.session.message = {
                    type:'success',
                    message:'confirmation emails sent to students'
                  }     

                  
                /*  res.render('imports/studentsT', {
                    message:req.session.message ,pro:pro
               
              })*/
             
            })
          }finally{
            throw "email sent";
          }
              }
          })
     

           
                 
               
                   
                 
                  // .catch(err => console.log(err))
                }
                catch(e){
                  res.send(e.message)
                 }


                
                
                  })
                
                
       
                }
                
                
                  
                  
      
                 
      
                  
           
              }
    
      


})


















                  




















            
            




    
  //role admin
  //new term fees update
  router.get('/termInfo',isLoggedIn,records, function(req,res){
    var m = moment()
    var pro = req.user
    var year = m.format('YYYY')
    var term = req.user.term
    var companyId = req.user.companyId
   
  
  FeesUpdate.find({companyId:companyId,term:term, year:year},(err, docs) => {
      if (!err) {
          res.render("records/newTerm", {
             list:docs, pro:pro
            
          });
      }
  });
    
      })
      router.post('/feesUpdate',isLoggedIn,records,  function(req,res){
      var startDate = req.body.startDate;
      var endDate = req.body.endDate;
      var balanceX, status, term, year, balanceCarriedOver, balance
      var id = req.user._id
      var m = moment()
      var date = moment().toString()
      term = req.body.term
      year = m.format('YYYY')
      var feeX = req.body.fees
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
     req.check('term','Enter Term').notEmpty();
    
     var errors = req.validationErrors();
     if (errors) {
    
       req.session.errors = errors;
       req.session.success = false;
       res.render('records/feesUpdate',{errors:req.session.errors})
    
     
    }
    
      var fees = new FeesUpdate();
        
      fees.date = date;
      fees.startDate = startDate;
      fees.endDate = endDate;
      fees.fees= req.body.fees;
      fees.term = term;
      fees.year = year
    
      fees.person = req.user.fullname
    
    
      fees.save()
        .then(fee =>{
       var adminBal = 0 - fee.fees
          User.findByIdAndUpdate(id,{$set:{feesUpdate:fee._id,term:term,balance:adminBal}},function(err,docs){
    
    
          })
    User.find({},function(err,vocs){
      for(var n = 0; n<vocs.length; n++){
        User.findByIdAndUpdate(vocs[n]._id,{$set:{term:term}},function(err,qocs){
          
        })
      
      }
    })
    
      User.find({role:"student"},function(err,nocs){
      
      for(var i  = 0; i< nocs.length; i++){
      balanceX = nocs[i].balance 
      balance = balanceX - feeX
      balanceCarriedOver = nocs[i].balance
    
      console.log('balance',balance)
      console.log('balanceX', balanceX)
      console.log('fees',feeX)
    
      if(balance > 0){
        
        User.findByIdAndUpdate(nocs[i]._id,{$set:{balance:balance, status:"paid", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:fee._id,}},function(err,docs){
      
      
        
      
        })
    
      }else
      
      User.findByIdAndUpdate(nocs[i]._id,{$set:{balance:balance, status:"owing", term:term, year:year,balanceCarriedOver:balanceCarriedOver,feesUpdate:fee._id,}},function(err,docs){
      
      
        
      
      })
      
      }
      res.redirect('/records/feesUpdate')
      })
    })
      
      })
    














 


        
      //role - admin & teacher
      //add exam
      router.get('/examSchedule',isLoggedIn,records,  function(req,res){
           var pro = req.user
        var arr = []
        var arr1 = []
        var arr2 = []
  
 
          Room.find({}, function(err,docs){
          
          arr1 = docs
          
        res.render('exam/exam-schedule',{ arr1:arr1,pro:pro})
       
      })
    })
    
    router.post('/examSchedule',isLoggedIn,records,  function(req,res){
      var pro = req.user
      var examType = req.body.examType;
      var subject = req.body.subject;
      var subjectCode = req.body.subjectCode;
      var grade = req.body.grade;
      var time = req.body.time;
      var date = req.body.date;
      var teacherName = req.body.teacherName;
      var uid = req.body.uid;
      var room = req.body.room;
      var start = req.body.start;
      var finish = req.body.finish

      let arr1 = []
    
      
        req.check('examType','Enter Exam Type').notEmpty();
        req.check('subject','Enter Subject ').notEmpty();
        req.check('subjectCode','Enter Subject Code').notEmpty();
        req.check('grade','Enter Grade/Form').notEmpty();
        req.check('start','Enter Start  Time').notEmpty();
        req.check('finish','Enter Finish Time').notEmpty();
        req.check('date','Enter Date').notEmpty();
        req.check('room','Enter Exam Room').notEmpty();
       
      
        var errors = req.validationErrors();
           
        if (errors) {
          Room.find({}, function(err,docs){
          
            arr1 = docs
           
          req.session.errors = errors;
          req.session.success = false
          res.render('exam/exam-schedule',{errors:req.session.errors, arr1:arr1, pro:pro})
          })
          
        }
      else
      {
       
        Exam.findOne({'examType':examType, 'subject':subject, 'grade':grade, 'time':time, 'date':date, 'room':room})
            .then(ex =>{
              if(ex){ 
               
                Room.find({}, function(err,docs){
          
                  arr1 = docs
              
                req.session.message = {
                  type:'errors',
                  message:'Exam already Exists'
                }     
                   res.render('exam/exam-schedule', {
                      message:req.session.message,arr1:arr1, pro:pro })
                
                
                
                })
        
              }
    
    else{
    
    
    
    
    
    
            var exam = new Exam();
          
            exam.examType = examType;
            exam.subject = subject;
            exam.grade = grade;
            exam.teacherName = teacherName;
            exam.uid = uid;
            exam.subjectCode = subjectCode;
            exam.start= start;
            exam.finish = finish;
            exam.time = start +" - "+ finish
            exam.date = date;
            exam.room = room;
           
            
          
            exam.save()
              .then(exm =>{
               
                Room.find({}, function(err,docs){
          
                  arr1 = docs
              
                req.session.message = {
                  type:'succes',
                   message:'Exam added'
                 }     
                    res.render('exam/exam-schedule', {
                       message:req.session.message ,arr1:arr1,pro:pro
                    })
                
                })
      
                })
      
      
      
              
      
      
      
            
          }
          })
      
        }
        
    })
      
    
    
    //exam autocomplete
    
      //role admin
     //this routes autocompletes the fullname of the teacher to be allocated a lesson
     router.get('/autocompleteXM/',isLoggedIn,records, function(req, res, next) {
    
     
      var regex= new RegExp(req.query["term"],'i');
      var uidFilter =Subject.find({code:regex},{'code':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
    
      
      uidFilter.exec(function(err,data){
     
    
    console.log('data',data)
    
    var result=[];
    
    if(!err){
       if(data && data.length && data.length>0){
         data.forEach(sub=>{
    console.log(sub,'roman')
          
       
    
            
           let obj={
             id:sub._id,
             label: sub.code,
             
    
         
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
    router.post('/autoXM',isLoggedIn,records,function(req,res){
      var codeX = req.body.codeX
    
    
    
      Subject.find({code:codeX},function(err,docs){
     if(docs == undefined){
       res.redirect('/records/lesson')
     }else
    
        res.send(docs[0])
      })
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //role - all
    //exam timetable
    /*
    router.get('/examList',isLoggedIn, (req, res) => {
      var pro = req.user
      var companyId = req.user.companyId
      Exam.find({companyId:companyId},(err, docs) => {
          if (!err) {
              res.render("records/examList", {
                 list:docs, pro:pro
                
              });
          }
      });
    });*/
    
    
    
    ///////
    router.get('/batchSubjectX',isLoggedIn,records,  function(req,res){
      res.render('records/batchSubjects')
      })
      
      
      
      
      router.post('/batchSubjectX',isLoggedIn,records,  function(req,res){
      var uid = req.body.uid;
      var fullname = req.body.fullname;
      var subjects = req.body.subjects
      var id = req.user._id
      var photo = req.body.photo
      
      req.check('uid','Enter Student ID').notEmpty();
      req.check('fullname','Enter Student Fullname').notEmpty();
    
      
      
      
      
      
      var errors = req.validationErrors();
       
      if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('records/batchSubjects',{ errors:req.session.errors,})
      
      }
      
      else 
      
    User.findOne({'uid':uid})
      .then(user =>{
      
        
         User.find({uid:uid},function(err,doc){
           let idX = doc[0]._id
            console.log(idX)
            User.findByIdAndUpdate(idX,{$set:{subject:subjects}},function(err,loc){
        
                User.findByIdAndUpdate(id,{$set:{subject:subjects,studentId:idX,subjectNo:1,pollUrl2:photo}}, function(err,coc){
               
                 
                })
                
            })
           
           res.redirect('/records/subX')
            
        })
      
      
      })
      
      
      })
    
    ///////
    
//batch contract autocomplete
router.get('/autocomplete2/',isLoggedIn,records, function(req, res, next) {

  var regex= new RegExp(req.query["term"],'i');
  
  var studentFilter =User.find({uid:regex},{'uid':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
  
    
    studentFilter.exec(function(err,data){
   
  
  console.log('data',data)
  
  var result=[];
  
  if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
  
        
     
  
          
         let obj={
           id:user._id,
           label: user.uid,
  
      
       
         
          
  
           
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
  
  
  
  
  //this routes autopopulates growers info from the growerNumber selected from automplete2
  router.post('/auto1',isLoggedIn,records,function(req,res){
  var uid = req.body.code
  
  var companyId = req.user.companyId
  
 User.find({uid:uid},function(err,docs){
  if(docs == undefined){
   res.redirect('/batchContract')
  }else
  
    res.send(docs[0])
  })
  
  
  })
  
  
  
  ///////////
  router.get('/subX',isLoggedIn,records,  function(req,res){
    var id = req.user._id;
    var num = req.user.subject;
    var x = req.user.subjectNo
    var studentId = req.user.studentId



       var pro = req.user
    
    if(num == 0){
    res.redirect('/records/batchSubjectX')
    }else
    
  User.findById(studentId,function(err,docs){

 
    res.render('records/gradeX', {user:docs,use:req.user, })
    })
    
    
    
    })
  
  
    router.post('/subX',isLoggedIn,records, function(req,res){
      var subjectNo = req.user.subject
      var x =req.user.subjectNo
    var uid = req.body.uid;
    var subject = req.body.subject;
    var fullname = req.body.fullname;
    var class1 = req.body.class1;
    var grade = req.body.grade;
    var icon = req.body.icon
    var photo = req.user.pollUrl2
    var subjectCode = req.body.subjectCode
    
    
    var year = 2023

    var id = req.user._id
   
    
    /*
    Class1.find({class1:classX},function(err,docs){
    //grade = docs[0].grade
    console.log(docs,'horror')
    
    })
    */
    
    req.check('uid','Enter Student ID ').notEmpty();
    req.check('subject','Enter Subject').notEmpty();
    

    
    
    var errors = req.validationErrors();
    
    if (errors) {
    
    
    req.session.errors = errors;
    req.session.success = false
    res.render('records/gradeX',{errors:req.session.errors})
    
    
    }
    
  
    
    
    
    
      var test = StudentSub();
      test.studentId = uid;
      test.subjectName = subject;
      test.studentName = fullname;
      test.class1 = class1;
      test.year = year;
      test.grade = grade;
      test.icon = icon
      test.photo= photo
      test.subjectCode = subjectCode;
 
    
      
      test.save()
      .then(tes =>{
    
    
    
     
    
    
    if(subjectNo == x){
      
      User.findByIdAndUpdate(id,{$set:{subject:0,subjectNo:0, studentId:"null"}}, function(err,docs){
      
      
      })
      
      res.redirect('/records/batchSubjectX')
      
      
      }else
      
      x++
      console.log('x',x)
      User.findByIdAndUpdate(id,{$set:{subjectNo:x}}, function(err,docs){
      
      
      })
    })
    
    
    res.redirect('/records/subX')
    })
    
    
    
    
    
    
    
    
    //role - admin
    //add exam grade
    router.get('/examGrade',isLoggedIn,records, function(req,res){
      var pro = req.user
      res.render('exam/exam-grade',{pro:pro})
    })
    
    
    router.post('/examGrade',isLoggedIn,records, function(req,res){
      var pro = req.user
      var symbol = req.body.symbol;
      var from = req.body.from;
      var to = req.body.to;
      var comments = req.body.comments;
  
    
      
        req.check('symbol','Enter Grade Symbol').notEmpty();
        req.check('from','Enter mark ').notEmpty();
        req.check('to','Enter mark').notEmpty();
        req.check('comments','Enter coments').notEmpty();
       
      
        var errors = req.validationErrors();
           
        if (errors) {
          
          req.session.errors = errors;
          req.session.success = false
          res.render('exam/exam-grade',{errors:req.session.errors,pro:pro})
        }
      else
      {
       
        Grade.findOne({'symbol':symbol})
            .then(grad =>{
              if(grad){ 
               
          
                req.session.message = {
                  type:'errors',
                  message:'Symbol Exists'
                }     
                   res.render('exam/exam-grade', {
                      message:req.session.message,pro:pro })
                
        
              }
    
    else{
    
    
    
    
    
    
            var grade = new Grade();
          
            grade.symbol = symbol;
            grade.from = from;
            grade.to = to;
            grade.comments = comments;
        
            
          
            grade.save()
              .then(grade =>{
               
      
                res.redirect('/records/gradeList')
      
                })
      
          }
          })
      
        }
        
    
       
      })

      router.get('/gradeList',isLoggedIn,records, (req, res) => {
        var pro = req.user
 
        Grade.find({},(err, docs) => {
            if (!err) {
                res.render("records/examGrade", {
                   listX:docs, pro:pro
                  
                });
            }
        });
      });
    

      
      
//updating user
router.get('/:id',isLoggedIn,records, (req, res) => {
  var pro = req.user   
 var arr1 = []
   Class1.find({},function(err,docs){
     arr1 = docs;
  User.findById(req.params.id, (err, doc) => {
      if (!err) {
      
          res.render("records/update", {
             
              user: doc, pro:pro,arr1:arr1
            
              
          });
        
      }
    })
  });
  });
  
  router.post('/:id',isLoggedIn, records,  (req, res) => {
  var user = new User();
  var id = req.body._id;
  var name = req.body.name;
  var surname = req.body.surname;
  req.body.fullname = name +" "+ surname
  var gender = req.body.gender;
  var dob = req.body.dob
  var pro = req.user
  
     
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
  
    req.session.errors = errors;
    req.session.success = false;
    Class1.find({},function(err,docs){
      arr1 = docs;
   User.findById(req.params.id, (err, doc) => {
       if (!err) {
       
           res.render("records/update", {
              
               user: doc, pro:pro,arr1:arr1,errors:req.session.errors,pro:pro
             
               
           });
         
       }
     })
   });
       
       
     
    
    }
  
  else
  {
  
        User.findOneAndUpdate({_id:id},req.body,
          { new: true }, (err, doc) => {
             if (!err) {
             
                res.redirect('/records/studentList'); }
             else {
               console.log('error'+err)
       
             }
           
         })
  
  
    
  }
  
  });
  
  

  




  


    
      //role - admin
      //grade List
   
    
    
    //update exam grade
    router.get('/examGrade/:id',isLoggedIn,records,function(req,res){
      var pro = req.user
      Grade.findById(req.params.id, (err, doc) => {
        if (!err) {
        
            res.render("exam/examGradeUpdate", {
               
                exam: doc,pro:pro
              
                
            });
          
        }
    });
    
    
    
    })
    
    
    router.post('/examGrade/:id',isLoggedIn,records, upload.single('myFile'),  (req, res) => {
      var pro = req.user
      var id = req.body._id;
      var symbol = req.body.name;
      var from = req.body.code;
      var to = req.body.to
     
      
      req.check('symbol','Enter Symbol').notEmpty();
      req.check('from','Enter the Starting Grade range').notEmpty();
      req.check('to','Enter the End Grade range').notEmpty();
     
      
        
      var errors = req.validationErrors();
    
    
    
       if (errors) {
      
         
            req.session.errors = errors;
            req.session.success = false;
            res.render('exam/examGradeUpdate',{ errors:req.session.errors, pro:pro})
         
        
        }
      
    else
    {
     
            Grade.findOneAndUpdate({_id:id},req.body,
              { new: true }, (err, doc) => {
                 if (!err) {
                 
                    res.redirect('/records/gradeList'); }
                 else {
                   console.log('error'+err)
           
                 }
               
             })
    
    
        
    }
    
    });
    
    
    
      // this route is for deleting a subject
      router.get('/examGrade/delete/:id',isLoggedIn,records, (req, res) => {
        Grade.findByIdAndRemove(req.params.id, (err, doc) => {
          if (!err) {
              res.redirect('/records/gradeList');
          }
          else { console.log('Error in deleting exam grade :' + err); }
        });
        });
 
  
  
  


//notifications



router.get('/notify',isLoggedIn,records, function(req,res){
  res.render('notifs')
})

router.post('/notify',isLoggedIn,records, function(req,res){
                var m = moment()
                var year = m.format('YYYY')
                var numDate = m.valueOf()
                var date = m.toString()
                var subject = req.body.subject
                var message = req.body.message
                var role = req.user.role
                var recRole ='clerk'
                var user = req.user.fullname
           
                console.log(role,'role')
                req.check('subject','Enter Subject').notEmpty();
                req.check('message','Enter Message').notEmpty();
              
               
                    
                
                      
                   
                var errors = req.validationErrors();
                    if (errors) {
                
                    
                      req.session.errors = errors;
                      req.session.success = false;
                      res.render('messagesRecords/notifs',{ errors:req.session.errors,})
                      
                    
                  }
                  else{

              User.find({recRole:recRole},function(err,docs){

                for(var i = 0; i<docs.length;i++){

                  let id = docs[i]._id
                  var not = new Note();
                  not.role = role
                  not.subject = subject;
                  not.message = message
                  not.status = 'not viewed';
                  not.status1 = 'new';
                  not.user = user;
                  not.type = 'null'
                  not.status2 = 'new'
                  not.status3 = 'new'
                  not.status4 = 'null'
                  not.date = date
                  not.dateViewed = 'null'
                  not.recId = docs[i]._id
                  not.recRole = recRole
                  not.numDate = numDate
                 

          
                  
                  
               

                  
                   
              
                   
          
                  not.save()
                    .then(user =>{
                      
                })


                }
              })
              
                 res.redirect('/notify')

              }
                              

                  
})



















router.post('/not/:id',isLoggedIn,records,function(req,res){
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




router.get('/update',isLoggedIn,records,function(req,res){
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

router.get('/nots',isLoggedIn,records, function(req,res){
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




  





//autocomplete teacherName & uid

router.get('/autocomplete/',isLoggedIn,records, function(req, res, next) {
var teacherId = req.user.uid

var regex= new RegExp(req.query["term"],'i');

var uidFilter =TeacherSub.find({subjectCode:regex, teacherId:teacherId},{'subjectCode':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);


uidFilter.exec(function(err,data){


console.log('data',data)

var result=[];

if(!err){
if(data && data.length && data.length>0){
data.forEach(sub=>{





let obj={
 id:sub._id,
 label: sub.subjectCode


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
router.post('/auto',isLoggedIn,records,function(req,res){
var code = req.body.code
var teacherId = req.user.uid

console.log(code, 'code')
TeacherSub.find({subjectCode:code, teacherId:teacherId},function(err,docs){
if(docs == undefined){
res.redirect('/teacher/auto')
}else

res.send(docs[0])
console.log(docs[0])
})


})





//upload quiz

  
router.get('/quizBatch',isLoggedIn,records,  function(req,res){
  var user = req.user.term
  //var teacherId = req.user.uid
  var pro = req.user
  var companyId = req.user.companyId
  
  
  
  Class1.find({companyId:companyId}, function(err,docs){
  var arr1 = docs;  
  
  res.render('onlineQuiz/batchX',{ arr1:arr1, user:user, pro:pro})
    
  })
  

  
  })

router.post('/quizBatch',isLoggedIn,records,   function(req,res){
var icon = req.body.icon
var class1 = req.body.class1;
var subject = req.body.subject;
var subjectCode = req.body.subjectCode;
var date = req.body.date;
var id = req.user._id;
var duration = req.body.duration
var time = req.body.start
var type = req.body.type
var grade = req.body.grade
var quizBatch = req.body.number
var stdNum
var teacherName = req.user.fullname
var teacherId = req.user._id
var n= moment()
var user = req.user.fullname
var numDate = n.valueOf()
var m2 = moment(date+" "+time)
var m = moment(date+" "+time)
console.log(m,'m')
var displayFormat = m.format('MMMM Do YYYY')
var year = m.format('YYYY')
var month = m.format('MMMM')
var topic = req.body.topic
var dateValue = m.valueOf()

var photo = req.user.photo
let newTime = m.add(duration,'minutes')
var dateValue2 = moment(newTime).valueOf()//end time
var mformat = m.format("L")





/*
Class1.find({class1:classX},function(err,docs){
//grade = docs[0].grade
console.log(docs,'horror')

})
*/

req.check('class1','Enter Class').notEmpty();
req.check('subject','Enter Subject').notEmpty();

req.check('date','Enter Date').notEmpty();


var errors = req.validationErrors();

if (errors) {


req.session.errors = errors;
req.session.success = false
res.render('onlineQuiz/batchX',{errors:req.session.errors})



}

else{

Test.findOne({'date':date,'class1':class1,'subjectCode':subjectCode,'type':type })
.then(tes =>{
if(tes){ 


req.session.message = {
type:'errors',
message:'Test Exists'
}     
 res.render('onlineQuiz/batchX', {
    message:req.session.message})
 
 


}else


var test = Test();
test.date = m2;
test.subject = subject;
test.subjectCode = subjectCode;
test.class1 = class1;
test.year = year;
test.name = date +" "+class1;
test.month  = month;
test.numDate = numDate
test.dateValue = dateValue
test.dateValue2 = dateValue2
test.teacherName = teacherName;
test.teacherId = teacherId
test.numberOfStudents = 0;
test.passRate = 0;
test.term = 1;
test.displayFormat = displayFormat
test.question = 'null';
test.possibleMark = quizBatch
test.status = 'unactivated'
test.status2 = 'active'
test.icon = icon
test.topic = topic;
test.highScore = 0
test.lowestScore=0;
test.numPasses=0
test.avgMark=0
test.mformat = mformat
test.type = type
test.type2 = 'online quiz'
test.type3 = 'class'
test.grade = grade;
test.quizBatch=quizBatch
test.quizNo = 0
test.status3= 'null'
test.examLink = 'null'
test.examStatus = 'pending'
test.quizId = 'null'
test.duration = duration
test.time = time
test.timeLeft = "null"
test.filename = 'null'
test.fileId = 'null'





test.save()
.then(tesn =>{
User.find({role:'student'},function(err,pocs){
  let num = pocs.length
  let nquizBatch = num * quizBatch


User.findByIdAndUpdate(id,{$set:{quizId:tesn._id,quizBatch:quizBatch,quizNo:0, quizDuration:duration }}, function(err,trocs){

console.log(trocs)


let examLink ='http://' + req.headers.host+'/student/quiz/'+tesn._id;

Test.findByIdAndUpdate(tesn._id,{$set:{quizId:tesn._id,examLink:examLink}},function(err,kocs){

})



User.find({role:"student",class1:class1},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){

    let id = docs[i]._id
    var not = new Note();
    not.role = 'teacher'
    not.subject = 'Online Quiz'+" "+subject;
    not.message = "Online Quiz on"+" "+date
    not.examLink = examLink
    not.status = 'not viewed';
    not.status1 = 'new';
    not.user = user;
    not.quizId = tesn._id
    not.type = 'exam'
    not.status2 = 'new'
    not.status3 = 'new'
    not.status4 = 'null'
    not.date = n
    not.dateViewed = 'null'
    not.recId = docs[i]._id
    not.recRole = 'student'
    not.senderPhoto = photo
    not.numDate = numDate
  
   


    
    
 

    
     

     

    not.save()
      .then(user =>{
        
  })
}
})





})

})
res.redirect('/teacher/setX9')



})


})



}


})



router.get('/setX9',isLoggedIn,function(req,res){
  res.redirect('/teacher/set')
})


//enter exam qustions


router.get('/editQuiz/:id',isLoggedIn,function(req,res){
  var id = req.params.id;
  var id2 = req.user._id
  var pro = req.user
  var batchNo = req.user.quizBatch
  var quizBatch
  var x  = req.user.questNo
  Test.findById(id,function(err,doc){
     quizBatch = doc.quizBatch

//console.log(quizBatch,'Batch')

     
     if(x > quizBatch){
      User.findByIdAndUpdate(id2,{$set:{questNo:1,quizBatch:0, quizId:"null"}}, function(err,docs){
  
  
      })
     res.redirect('/teacher/testsList')
     }else{

     
     
    // x++
     //res.render('onlineQuiz/batch',{x:x})
   
   



       Question.find({quizId:id,questionNo:x},function(err,docs){
//console.log(id,'xx',x)
 //console.log(docs,'DOCS')
        res.render("onlineQuiz/edit", {
               
          exam: docs[0],pro:pro
        
          
      })
    

    
})
     }
     
})
})

router.post('/editQuiz/:id',isLoggedIn,records, upload.single('file'), function(req,res){
  var id = req.params.id;
  var batchNo = req.user.quizBatch
  var quizBatch
 var x =req.user.questNo
  var questNo=req.user.questNo
  var userId = req.user._id

  if(req.file){
    let filename = req.file.filename;
    let fileId = req.file.id
    console.log(filename,fileId,'777')
  Test.findById(id,function(err,doc){
     quizBatch = doc.quizBatch
console.log(quizBatch)
    // for(var i = 1; i<=quizBatch; i++){
       Question.find({quizId:id,questionNo:questNo},function(err,docs){
for(var x = 0; x<docs.length;x++){
 
  Question.findOneAndUpdate({_id:docs[x]._id},req.body,
    { new: true }, (err, doc) => {
     
     
   })
   let question =  `<br> <br> ${docs[x].questionStore} <img src="imageC/${fileId}"  style="display:block;margin-left:auto;margin-right:auto;width:100%">`

   Question.findByIdAndUpdate(docs[x]._id,{$set:{question:question, filename:filename,fileId:fileId}},function(err,locs){

   })

   
}

QuestionT.find({quizId:id,questionNo:questNo},function(err,nocs){
  for(var v = 0; v<nocs.length;v++){
   
    QuestionT.findOneAndUpdate({_id:nocs[v]._id},req.body,
      { new: true }, (err, noc) => {
       
       
     })


     let questionVI = `<br> <br> ${nocs[v].questionStore} <img src="imageC/${fileId}"  style="display:block;margin-left:auto;margin-right:auto;width:100%">`
     
   QuestionT.findByIdAndUpdate(nocs[v]._id,{$set:{filename:filename,fileId:fileId,question:questionVI}},function(err,locs){
     
  })

  
     
  }

})
       })
     //}
  })
  }else{
    Test.findById(id,function(err,doc){
      quizBatch = doc.quizBatch
 console.log(quizBatch)
     // for(var i = 1; i<=quizBatch; i++){
        Question.find({quizId:id,questionNo:questNo},function(err,docs){
 for(var x = 0; x<docs.length;x++){
  
   Question.findOneAndUpdate({_id:docs[x]._id},req.body,
     { new: true }, (err, doc) => {
      
      
    })
 
    
 }
 
 QuestionT.find({quizId:id,questionNo:questNo},function(err,docs){
   for(var x = 0; x<docs.length;x++){
    
     QuestionT.findOneAndUpdate({_id:docs[x]._id},req.body,
       { new: true }, (err, doc) => {
        
        
      })
   
      
   }
 
 })
        })
      //}
   })
  }


  
  x++
  User.findByIdAndUpdate(userId,{$set:{questNo:x}}, function(err,docs){
  
  
  })
  res.redirect('/teacher/editQuiz/'+id)
  
  })


router.get('/set',isLoggedIn,records,  function(req,res){
  var id = req.user._id;
  var batchNo = req.user.quizBatch
  
  

  x =req.user.questNo
  if(x > batchNo){

     console.log('true ehe')
  User.findByIdAndUpdate(id,{$set:{questNo:1,quizBatch:0, quizId:"null"}}, function(err,docs){
  if(!err)
    res.redirect('/teacher/quizBatch')
  })

  }else{

  
  
  //x++
   //x++
  console.log('false',x)
  User.findByIdAndUpdate(id,{$set:{questNo:x}}, function(err,docs){
    if(!err)
    res.render('onlineQuiz/batch',{x:x})
  
  })
}
  //res.render('onlineQuiz/batch',{x:x})
  
  })



  
router.post('/set',isLoggedIn,records,upload.single('file'), function(req,res){
  var date = moment()
  var batchNo = req.user.quizBatch
  var x =req.user.questNo
var question = req.body.question;
var subject = req.body.subject;
var choice1 = req.body.choice1;
var choice2 = req.body.choice2;
var choice3 = req.body.choice3;
var choice4 = req.body.choice4
var answer = req.body.answer;
var duration = req.user.quizDuration

var fileId 
var year = 2023
var quizId = req.user.quizId
var id = req.user._id
var pro = req.user

var idX 


var chunkSize
var uploadDate
var md5 
var contentType 

if(!req.file){
  filename = 'null'
  fileId='null'
  idX = 'null'
 chunkSize =0
 uploadDate =date
 
 md5 = 'null'
 contentType = 'null'
}else{
  filename=req.file.filename
 fileId = req.file.id
  
 chunkSize = req.file.chunkSize
 uploadDate = req.file.uploadDate

 idX = req.file.id
 md5 = req.file.md5
 contentType = req.file.contentType
}

/*
Class1.find({class1:classX},function(err,docs){
//grade = docs[0].grade
console.log(docs,'horror')

})
*/

req.check('question','Enter Question').notEmpty();
req.check('subject','Enter Subject').notEmpty();

req.check('choice1','Enter Choice1').notEmpty();


var errors = req.validationErrors();

if (errors) {


req.session.errors = errors;
req.session.success = false
res.render('onlineQuiz/batch',{errors:req.session.errors,pro:pro})


}

User.find({role:'student'},function(err,docs){

for(var i = 0;i<docs.length;i++){




  var test = Question();
  test.question = question;
  test.questionStore = question;
  test.subject = subject;
  test.choice1 = choice1;
  test.choice2 = choice2;
  test.year = year;
  test.finalAns = 'null';
  test.stdAns = -1;
  test.activeNum = 0
  test.choice3  = choice3;
  test.choice4 = choice4;
  test.answer = answer;
  test.status = 'valid'
  test.status2 = 'null'
  test.studentId = docs[i]._id
  test.quizId= quizId
 test.quizDuration = duration
 test.questionNo= x

  test.idX=idX
  test.chunkSize = chunkSize
  test.uploadDate = uploadDate
  test.filename = filename
  test.fileId = fileId
  test.md5 = md5
  test.contentType = contentType

  test.save()
  .then(tes =>{
let questionVI = tes.questionStore
let fileIdV = tes.fileId
if(tes.filename !== 'null'){
  let questionV = `<br> <br> ${questionVI} <img src="imageC/${fileIdV}">`
  Question.findByIdAndUpdate(tes._id,{$set:{question:questionV}},function(err,docs){

  })
}

  })

}




/*if(batchNo == x){
  
  User.findByIdAndUpdate(id,{$set:{questNo:1,quizBatch:0, quizId:"null"}}, function(err,docs){
  
  
  })
  
  //res.redirect('/teacher/quizBatch')
  
  
  }else*/


  var tes = QuestionT();
  tes.question = question;
  tes.questionStore = question;
  tes.subject = subject;
  tes.choice1 = choice1;
  tes.choice2 = choice2;
  tes.year = year;
  tes.finalAns = 'null';
  tes.stdAns = -1;
  tes.activeNum = 0
  tes.choice3  = choice3;
  tes.choice4 = choice4;
  tes.answer = answer;
  tes.status = 'valid'
  tes.status2 = 'null'
  tes.teacherId = req.user._id
  tes.quizId= quizId
 tes.quizDuration = duration
 tes.questionNo= x


 tes.idX=idX
 tes.chunkSize = chunkSize
 tes.uploadDate = uploadDate
 tes.filename = filename
 tes.fileId = fileId
 tes.md5 = md5
 tes.contentType = contentType
  tes.save()
  .then(tes =>{

let questionVII = tes.questionStore
let fileIdVI = tes.fileId
if(tes.filename !== 'null'){
  let questionVI = `<br> <br> ${questionVII} <img src="image/${fileIdVI}"  style="display:block;margin-left:auto;margin-right:auto;width:100%">`
  QuestionT.findByIdAndUpdate(tes._id,{$set:{question:questionVI}},function(err,docs){
    
  })
}


 


  
  })
  x++
  User.findByIdAndUpdate(id,{$set:{questNo:x}}, function(err,docs){
  })
  
})


res.redirect('/teacher/set')
})



router.get('/onlineQuiz/delete/:id',isLoggedIn, (req, res) => {
  Question.find({quizId:req.params.id},function(err,docs){

    for(var i = 0; i<docs.length;i++){
      Question.findByIdAndRemove(docs[i]._id, (err, doc) => {

      })
    }
    Test.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.redirect('/teacher/testsList');
      }
    })
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
  
   
  function records(req,res,next){
    if(req.user.role == 'hurlings'){
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
     

