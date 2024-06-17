require('dotenv').config();

var express = require('express');
var router = express.Router();
const User =require('../models/user')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
var path = require('path');
const Assignment =require('../models/assignment')
const Class1 =require('../models/class');
const Subject =require('../models/subject');
const Fees =require('../models/fees');
const Attendance = require('../models/attendance');
const AttendanceReg = require('../models/attendanceRegister');
const Test =require('../models/classTest');
const TestX =require('../models/classTestX');
const Lesson =require('../models/lesson');
const Report = require('../models/reports');
const Report2 = require('../models/reportsT');
const ReportAtt = require('../models/reportsAtt');
var Message = require('../models/message');
var Recepient = require('../models/recepients');
var Note = require('../models/note');
var Learn = require('../models/learn');
const Exam =require('../models/exam');
const Grade =require('../models/grade');
const Pass = require('../models/passRate')
var uploadModel = require('../models/upload');
const TeacherClassRate = require('../models/tcPassRateX')
const TeacherExamRate = require('../models/tcPassRate')
const TeacherDash = require('../models/teacherDash')
const StudentSub =require('../models/studentSubject');
const TeacherSub =require('../models/teacherSubject');
const Topic =require('../models/topic');
const Topic2 =require('../models/topic2');
const Income =require('../models/incomeX');
const Expenses = require('../models/expenses')
const Year =require('../models/year')
const Month =require('../models/month')
const FeesUpdate =require('../models/feesUpdate');
const Question = require('../models/question');
const QuestionT = require('../models/questionT');
var mongoose = require('mongoose')
var mongodb = require('mongodb');
var passport = require('passport')
var xlsx = require('xlsx')
var multer = require('multer')
var hbs = require('handlebars');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
var moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
const classTestX = require('../models/classTestX');
var imageData= uploadModel.find({})
const arr={}
const arrAtt ={}
const arrAttReg ={}
var Axios = require('axios')
var FormData = require('form-data')


const crypto = require('crypto');

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

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

const mongoURI =process.env.MONGO_URL||  'mongodb://0.0.0.0:27017/euritDB';

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


// Create storage engine
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


router.get('/upload',(req,res)=>{
  res.render('teachers/upl')
})
router.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });
  console.log(req.file,'kkk')
  res.redirect('/teacher/upload');
});





  Subject.find(function(err,docs){
    for(var i=0;i<docs.length;i++){
      let subjectCode = docs[i].code
      arr[subjectCode]=[]
    }
  
  })






var m = moment()
var month = m.format('MMMM')
  var year = m.format('YYYY')
console.log(month,'mmmmm')
//var term = req.user.term
Subject.find(function(err,zocs){
  for(var z = 0; z<zocs.length;z++){
    let subjectCodeX = zocs[z].code

    StudentSub.find({subjectCode:subjectCodeX},function(err,tocs){
      for(var q = 0;q<tocs.length;q++){
        let uid = tocs[q].studentId
     




        TestX.find({year:year,uid:uid}).lean().then(vocs=>{
for(var x = 0;x<vocs.length;x++){
  //size = docs.length
  let subjectCode = vocs[x].subjectCode
  let subject = vocs[x].subject
 
   
   if( arr[subjectCode].length > 0 && arr[subjectCode].find(value => value.subjectCode == subjectCode)  && arr[subjectCode].find(value => value.uid == uid)  ){
 
         arr[subjectCode].find(value => value.uid == uid).percentage += vocs[x].percentage;
         arr[subjectCode].find(value => value.uid == uid).size++;
         //console.log(arr,'arrX')
        }
        
         
        
        
        else{
          arr[subjectCode].push(vocs[x])
          // console.log(arr,'push')
          
            //element.size = 0
            /*if(arr[uid].find(value => value.subject == subject)){*/
       
             
                   arr[subjectCode].find(value => value.uid == uid).size++;


     
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
}

})



router.get('/weight',function(req,res){
  
  Subject.find(function(err,docs){
if(docs){
  for(var x = 0;x<docs.length;x++){
    let subjectCode = docs[x].code
 




arr[subjectCode].map(function(element){
  //console.log(element.percentage, element.size,'para')
 element.percentage  = element.percentage / element.size
// console.log(element.mark,'mark')
 let num = Math.round(element.percentage)
num.toFixed(2)
element.percentage =num



Grade.find({},function(err,qocs){

  for(var i = 0; i<qocs.length; i++){
  let symbol = qocs[i].symbol
  let from = qocs[i].from
  let to = qocs[i].to
  
  if(element.percentage >= from && element.percentage <= to ){
  
  element.symbol = symbol
  
  
  
  }
  }
  
  
  })
  
  if(element.percentage >= 50){
  
  
  element.result = 'pass'
  }else
  
 element.result = 'fail'
  
  
  
  
  
  
  
  
  
  
  
  
  











})


}
}
res.redirect('/teacher/genPdf3')
  })

})

//


router.get('/genPdf3',isLoggedIn,function(req,res){
  var m = moment()
  var month = m.format('MMMM')
    var year = m.format('YYYY')
    var mformat = m.format('L')
    var teacherId = req.user.uid
   // console.log(arr,'arr')
/*console.log(arr,'iiii')*/

Subject.find(function(err,docs){
  for(var i = 0; i< docs.length;i++){

  
  let subjectCode = docs[i].code


const compile = async function (templateName, arr){
  const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)

  const html = await fs.readFile(filePath, 'utf8')

  return hbs.compile(html)(arr)
 
};




 (async function(){

try{
const browser = await puppeteer.launch();

const page = await browser.newPage()



 const content = await compile('report4',arr[subjectCode])

//console.log(arr[uid],'tamama')

 await page.setContent(content)
//create a pdf document

await page.pdf({
  path:('../gitzoid2/reports2/'+year+'/'+month+'/'+subjectCode+'.pdf'),
  format:"A4",
  printBackground:true
})
var repo = new Report2();
 
repo.subjectCode = subjectCode;
repo.month = month;
repo.filename = subjectCode+'.pdf';
repo.year = year;
repo.date = mformat
repo.save().then(poll =>{
  console.log("Done creating pdf",subjectCode)
})


/*await browser.close()

process.exit()*/

}catch(e) {

  console.log(e)
}

}) ()

}
})



})

// change password
router.get('/pass',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
  User.findById(req.user._id, (err, doc) => {
      if (!err) {
          res.render("teachers/change", {
             
              user: doc,pro
            
          });
      }
  });
});



router.post('/pass',isLoggedIn,teacher, function(req,res){
  var user = new User();
  var pro = req.user
  req.check('password','Enter New Password').notEmpty();

  req.check('confirmPassword', 'Confirm Password').notEmpty();


req.check('password', 'Password do not match').isLength({min: 4}).equals(req.body.confirmPassword);
var errors = req.validationErrors();




 if (errors) {

 

    req.session.errors = errors;
    req.session.success = false;
    res.render('teachers/change',{ title: 'User Update', user:req.body, errors:req.session.errors,  pro:pro
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
      res.render('teachers/change',{message:req.session.message, user:req.user, pro:pro
       }); }
    else {
      console.log('error'+err)

    }
  
})
}



})



    
    









router.get('/passRate',isLoggedIn,teacher,function(req,res){
    let totalexams, examsPassed, passRate;
    let numberOfMarks, totalMarks, avgMark;
    var m = moment()
    var year = m.format('YYYY')
    var term = req.user.term
    var uid = req.user.uid
    var fullname = req.user.fullname;
    var teacherId = req.user.uid
     var m = moment()
     var year = m.format('YYYY')
     let arrW=[]
     let numX
     var marks, marks2
     var arr1=[]
   
     var number1
    TeacherSub.find({teacherId:teacherId},function(err,lods){
      for(var i = 0; i<lods.length;i++){
        let sub = lods[i].subjectName
        let subCode = lods[i].subjectCode
        let icon = lods[i].icon
        let photo = lods[i].photo
  
      
  
     TeacherExamRate.find({year:year, teacherId:teacherId, subject:sub,  subjectCode:subCode},function(err,docs){
  
  
       if(docs.length == 0){
   console.log(sub, subCode)
         TestX.find({term:term,year:year,teacherId:uid, type:'Final Exam',  subject:sub,subjectCode:subCode },function(err,hods){
           console.log(hods, 'hods')
   
           TestX.find({term:term,year:year,teacherId:uid, result:'pass', type:'Final Exam', subject:sub, subjectCode:subCode},function(err,lods){
          /* if(hods.length >=1){*/
            console.log(lods,'lods')
            for(var i = 0;i<hods.length;i++){
              size = hods.length
           
                
               if(arrW.length > 0 && arrW.find(value => value.subject == hods[i].subject)){
                      console.log('true')
                     arrW.find(value => value.subject == hods[i].subject).percentage += hods[i].percentage;
                     arrW.find(value => value.subject == hods[i].subject).size++;
                    }else{
                      arrW.push(hods[i])
                      let subject = hods[i].subject
                      
                        //element.size = 0
                        if(arrW.find(value => value.subject == subject)){
                   
                         
                               arrW.find(value => value.subject == subject).size++;
                 
                        }
                        //element.size = element.size + 1
                          
                     
                          }
                
                }
                let result = arrW.map(function(element){
                  element.percentage  = element.percentage / element.size
                  console.log(element.mark,'mark')
                   numX = Math.round(element.percentage)
numX.toFixed(2)
element.percentage =numX
                })
  
   
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
               console.log(avgMark, 'avgMark')
               var pass =TeacherExamRate();
               pass.firstTerm = 0;
               pass.firstAvgMark = 0
               pass.secondTerm= 0;
               pass.secondAvgMark = 0
               pass.thirdTerm = 0
               pass.thirdAvgMark=0;
               pass.teacherId = teacherId;
               pass.teacherName = fullname;
               pass.subject = sub
               pass.nwCode = sub +" "+ subCode
               pass.subjectCode = subCode
               pass.term = term
               pass.icon = icon
               pass.photo = photo
               pass.type = 'Final Exam';
               pass.year = year
     
   
               pass.save()
       .then(pas =>{
         id3 = pas._id;
  
         if(term == 1){
   
     
           TeacherExamRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:numX}},function(err,kocs){
        
           
           })
         }else if(term == 2){
         
           TeacherExamRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:numX}},function(err,kocs){
         
               
               })
             }else{
               TeacherExamRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark:numX}},function(err,kocs){
               
                   
                   })
                 }
   
                 })
                /* }*/
                 
                 })
                 
               })
          }
             else
   
           var  idX  = docs[0]._id
    
   
           TestX.find({term:term,year:year,teacherId:uid, type:"Final Exam", subject:sub, subjectCode:subCode},function(err,hods){
   
            TestX.find({term:term,year:year, result:'pass',teacherId:uid, type:"Final Exam", subject:sub, subjectCode:subCode},function(err,lods){
            if(hods.length >=1){
              for(var i = 0;i<hods.length;i++){
                size = hods.length
             
                  
                 if(arrW.length > 0 && arrW.find(value => value.subject == hods[i].subject)){
                        console.log('true')
                       arrW.find(value => value.subject == hods[i].subject).percentage += hods[i].percentage;
                       arrW.find(value => value.subject == hods[i].subject).size++;
                      }else{
                        arrW.push(hods[i])
                        let subject = hods[i].subject
                        
                          //element.size = 0
                          if(arrW.find(value => value.subject == subject)){
                     
                           
                                 arrW.find(value => value.subject == subject).size++;
                   
                          }
                          //element.size = element.size + 1
                            
                       
                            }
                  
                  }
                  let result = arrW.map(function(element){
                    element.percentage  = element.percentage / element.size
                    console.log(element.mark,'mark')
                     numX = Math.round(element.percentage)
numX.toFixed(2)
element.percentage =numX
                  })
    
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
   
     
                 TeacherExamRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:numX}},function(err,kocs){
              
                 
                 })
               }else if(term == 2){
               
                 TeacherExamRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:numX}},function(err,kocs){
               
                     
                     })
                   }else{
                     TeacherExamRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:numX}},function(err,kocs){
                     
                         
                         })
                       }
     
               }else{



                if(term == 1){
   
     
                  TeacherExamRate.findByIdAndUpdate(idX,{$set:{firstTerm:0,firstAvgMark:0}},function(err,kocs){
               
                  
                  })
                }else if(term == 2){
                
                  TeacherExamRate.findByIdAndUpdate(idX,{$set:{secondTerm:0, secondAvgMark:0}},function(err,kocs){
                
                      
                      })
                    }else{
                      TeacherExamRate.findByIdAndUpdate(idX,{$set:{thirdTerm:0, thirdAvgMark:0}},function(err,kocs){
                      
                          
                          })
                        }








               }
       
      
             })
             
          
           })    
         
   
           })
     
      
          }
          
        res.redirect('/teacher/passRateX')
    
        })    
           
   
     })
  
  
  
  
  
     router.get('/passRateX',isLoggedIn,teacher,function(req,res){
      let totalexams, examsPassed, passRate
      let numberOfMarks, totalMarks, avgMark
      var m = moment()
      var year = m.format('YYYY')
      var term = req.user.term
      var uid = req.user.uid
      var fullname = req.user.teacherName;
      var teacherId = req.user.uid
      
       var m = moment()
       var year = m.format('YYYY')
       var marks, marks2
       var arr1=[]
       var arrX =[]
       var number1
       var term = req.user.term
  
       TeacherSub.find({teacherId:teacherId},function(err,lods){
        for(var i = 0; i<lods.length;i++){
          let sub = lods[i].subjectName
          let subCode = lods[i].subjectCode
          let icon = lods[i].icon
          let photo = lods[i].photo
         
  
  
       TeacherClassRate.find({year:year,teacherId:teacherId,  subject:sub, subjectCode:subCode},function(err,docs){
     
         if(docs.length == 0){
     
           TestX.find({term:term,year:year,teacherId:uid, type:'Class Test',  subject:sub, subjectCode:subCode},function(err,hods){
     
             TestX.find({term:term,year:year, result:'pass',teacherId:uid, type:'Class Test', subject:sub, subjectCode:subCode},function(err,lods){
            /* if(hods.length >=1){*/
     
     console.log(hods.length,lods.length,'well, well')
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
                 
                 var pass = TeacherClassRate();
                 pass.firstTerm = 0;
                 pass.firstAvgMark = 0
                 pass.secondTerm= 0;
                 pass.secondAvgMark = 0
                 pass.thirdTerm = 0
                 pass.thirdAvgMark=0
                 pass.teacherId = teacherId;
                 pass.nwCode = sub +" "+ subCode
                 pass.teacherName = fullname;
                 pass.subject = sub
                 pass.subjectCode = subCode
                 pass.icon = icon
                 pass.photo = photo
                 pass.term = term
                 pass.type = 'Class Test'
                 pass.year = year
             
     
                 pass.save()
         .then(pas =>{
           id3 = pas._id;
     
           if(term == 1){
     
       
            TeacherClassRate.findByIdAndUpdate(id3,{$set:{firstTerm:passRate, firstAvgMark:avgMark}},function(err,kocs){
          
             
             })
           }else if(term == 2){
           
            TeacherClassRate.findByIdAndUpdate(id3,{$set:{secondTerm:passRate,secondAvgMark:avgMark}},function(err,kocs){
           
                 
                 })
               }else{
                TeacherClassRate.findByIdAndUpdate(id3,{$set:{thirdTerm:passRate,thirdAvgMark}},function(err,kocs){
                 
                     
                     })
                   }
     
                   })
                   /*}*/
                   
                   })
                   
                 })
               }
               else
     
             var  idX  = docs[0]._id
             let arrW=[]
             let numX
     
             TestX.find({term:term,year:year,teacherId:uid, type:"Class Test",  subject:sub, subjectCode:subCode},function(err,hods){
     
              TestX.find({term:term,year:year, result:'pass',teacherId:uid, type:"Class Test",  subject:sub, subjectCode:subCode},function(err,lods){
              if(hods.length >=1){
           
               
                  for(var i = 0;i<hods.length;i++){
                    size = hods.length
                 
                      
                     if(arrW.length > 0 && arrW.find(value => value.subject == hods[i].subject)){
                            console.log('true')
                           arrW.find(value => value.subject == hods[i].subject).percentage += hods[i].percentage;
                           arrW.find(value => value.subject == hods[i].subject).size++;
                          }else{
                            arrW.push(hods[i])
                            let subject = hods[i].subject
                            
                              //element.size = 0
                              if(arrW.find(value => value.subject == subject)){
                         
                               
                                     arrW.find(value => value.subject == subject).size++;
                       
                              }
                              //element.size = element.size + 1
                                
                           
                                }
                      
                      }
                      let result = arrW.map(function(element){
                        element.percentage  = element.percentage / element.size
                        console.log(element.mark,'mark')
                         numX = Math.round(element.percentage)
    numX.toFixed(2)
    element.percentage =numX
                      })
     console.log(hods.length,lods.length,'well, well')
      
               totalexams = hods.length;
               examsPassed = lods.length
               let pRate = examsPassed / totalexams * 100
          passRate = Math.round(pRate)
          passRate.toFixed(2)
               numberOfMarks = hods.length;
     
               for(var q = 0;q<hods.length; q++){
       
                 arrX.push(hods[q].percentage)
                   }
                   //adding all incomes from all lots of the same batch number & growerNumber & storing them in variable called total
                    totalMarks=0;
                   for(var z in arrX) { totalMarks += arrX[z]; }
      
                   let  avgMarkX = totalMarks / totalexams
                   
                   avgMark = Math.round(avgMarkX)
                   avgMark.toFixed(2)
     console.log('total Marks', totalMarks)
     console.log('number of  Marks', totalMarks)
                  if(term == 1){
     
       
                    TeacherClassRate.findByIdAndUpdate(idX,{$set:{firstTerm:passRate,firstAvgMark:numX}},function(err,kocs){
                
                   
                   })
                 }else if(term == 2){
                 
                  TeacherClassRate.findByIdAndUpdate(idX,{$set:{secondTerm:passRate, secondAvgMark:numX}},function(err,kocs){
                 
                       
                       })
                     }else{
                      TeacherClassRate.findByIdAndUpdate(idX,{$set:{thirdTerm:passRate, thirdAvgMark:numX}},function(err,kocs){
                       
                           
                           })
                         }
       
                 }else{



                  if(term == 1){
     
       
                    TeacherClassRate.findByIdAndUpdate(idX,{$set:{firstTerm:0,firstAvgMark:0}},function(err,kocs){
                
                   
                   })
                 }else if(term == 2){
                 
                  TeacherClassRate.findByIdAndUpdate(idX,{$set:{secondTerm:0, secondAvgMark:0}},function(err,kocs){
                 
                       
                       })
                     }else{
                      TeacherClassRate.findByIdAndUpdate(idX,{$set:{thirdTerm:0, thirdAvgMark:0}},function(err,kocs){
                       
                           
                           })
                         }

                 }
         
        
               })
            
             })    
  
  
             
     
             })
            }
  
            res.redirect('/teacher/min')
          
  
          })
             
     
       })
    
  
  
  
  
  


//student stats
       router.get('/min',isLoggedIn,teacher,function(req,res){
        /*const numbers = [4,8,2,5]
        let maximum = -Infinity
        let minimum = Infinity
      
        for(let number of numbers){
          if(number > maximum)
      
          maximum = number
      
          if(number < minimum)
      
          minimum = number
        }*/
      

      


Test.find({},function(err,docs){
  console.log(docs.length,'length')
  for(var i = 0; i<docs.length;i++){
  let quizId = docs[i]._id
    var type = docs[i].type
    var term = docs[i].term
    var year = docs[i].year
    var class1 = docs[i].class1
  var subject = docs[i].subject
   var subjectCode = docs[i].subjectCode
    let id = docs[i]._id



    TestX.find({quizId:quizId},function(err,nocs){
   if(nocs.length > 0){

   
      let min = nocs[0].mark
      let max = nocs[0].mark
         console.log(nocs.length,'length')
        for(var x=0;x<nocs.length;x++){
          if(min >nocs[x].mark)
          min = nocs[x].mark

          if(max < nocs[x].mark)
          max = nocs[x].mark

          /*if(nocs[i].mark < minimum){
            minimum = nocs[i].mark
          }*/
         
        
      }
      let average = 0

      for(let d = 0; d<nocs.length;d++){
        let currentNum = nocs[d].mark
        average += currentNum
      }
      average = average/nocs.length
      console.log(average)
//console.log(topic,type,term)
   TestX.find({quizId:quizId,result:'pass'},function(err,tocs){
let numPasses = tocs.length
  let passRateX = numPasses / nocs.length
  let passRate =passRateX * 100
  Test.findByIdAndUpdate(id,{$set:{lowestScore:min, highScore:max, avgMark:average,numPasses:numPasses, passRate:passRate}},function(err,kocs){
     
    })
  })
}
})

  }
 res.redirect('/teacher/dashX')
})

      })
      





      router.post('/dashChart1',isLoggedIn,teacher,function(req,res){
      var uid = req.user.uid
      var size

      var m = moment()
      var year = m.format('YYYY')
      var arr = []
      var id = req.user._id
     
      TeacherSub.find({teacherId:uid},function(err,locs){
        if(locs){
          let subjectCode = locs[0].subjectCode
          let term = req.user.term
        StudentSub.find({subjectCode:subjectCode},function(err,noc){
          if(noc.length > 0){
            let class1 = noc[0].class1
         
        
      
       
      
        
      console.log(subjectCode,class1,term,'outa here')
      
      
        TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
          if(docs.length > 0){

        
         // console.log(docs,'docs')
          for(var i = 0;i<docs.length;i++){
      size = docs.length
         
              
             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                    console.log('true')
                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                   arr.find(value => value.month == docs[i].month).size++;
                  }else{
          arr.push(docs[i])

          let resultX = arr.map(function(element){
            //element.size = 0
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
    }
      })
      })
      
      
      router.post('/dashChart2',isLoggedIn,teacher,function(req,res){
        var uid = req.user.uid
        var size
  
        var m = moment()
        var year = m.format('YYYY')
        var arr = []
        var id = req.user._id

        TeacherSub.find({teacherId:uid},function(err,locs){
          if(locs){
            let subjectCode = locs[0].subjectCode
            let term = req.user.term
   
           
          
        
         
        
          
        console.log(subjectCode,term,'outa here')
        
        
          TestX.find({year:year,subjectCode:subjectCode,term:term,type3:'class'},function(err,docs) {
            if(docs){

          
            //.log(docs,'docs')
            for(var i = 0;i<docs.length;i++){
        size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                      console.log('true')
                     arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                     arr.find(value => value.month == docs[i].month).size++;
                    }else{
            arr.push(docs[i])

            let resultX = arr.map(function(element){
              //element.size = 0
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
        


        router.post('/dashChart3',isLoggedIn,teacher,function(req,res){
          var uid = req.user.uid
          var size
          
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
          TeacherSub.find({teacherId:uid},function(err,locs){
            if(locs.length >0){
              let subjectCode = locs[1].subjectCode
              let term = req.user.term
            StudentSub.find({subjectCode:subjectCode},function(err,noc){
              if(noc.length > 0){
                let class1 = noc[0].class1
             
            
          
           
          
            
          console.log(subjectCode,class1,term,'outa here')
          
          
            TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
              if(docs){

             
             // console.log(docs,'docs')
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
        }
          })
          })
          



        
      
      router.post('/dashChartP1',isLoggedIn,teacher,function(req,res){
        var subjectCode = req.body.subjectCode
        var term = req.body.term
        var class1 = req.body.class1
        var companyId = req.user.companyId
       
        var m = moment()
        var year = m.format('YYYY')
        var arr = []
        var id = req.user._id
      
        
      
      
      
        TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class',},function(err,docs) {
          if(docs){

         
          for(var i = 0;i<docs.length;i++){
            size = docs.length
         
              
             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                    console.log('true')
                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                   arr.find(value => value.month == docs[i].month).size++;
                  }else{
          arr.push(docs[i])

          let resultX = arr.map(function(element){
            //element.size = 0
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
      
      

 
      router.post('/dashChartP2',isLoggedIn,teacher,function(req,res){
        var subjectCode = req.body.subjectCode
        var term = req.body.term
      
       
       
        var m = moment()
        var year = m.format('YYYY')
        var arr = []
        var id = req.user._id
      
       
      
      
      
        TestX.find({year:year,subjectCode:subjectCode,term:term,type3:'class'},function(err,docs) {
          if(docs){

          
          for(var i = 0;i<docs.length;i++){
            size = docs.length
         
              
             if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                    console.log('true')
                   arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                   arr.find(value => value.month == docs[i].month).size++;
                  }else{
          arr.push(docs[i])

          let resultX = arr.map(function(element){
            //element.size = 0
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



      router.post('/dashChartP3',isLoggedIn,teacher,function(req,res){
        var subjectCode = req.body.subjectCode
        var term = req.body.term
        var class1 = req.body.class1
       
        
        var m = moment()
        var year = m.format('YYYY')
        var arr = []
        var id = req.user._id
      
        
      
      
      
        TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
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
      
      



      router.post('/dashChartS1',isLoggedIn,teacher,function(req,res){
        var uid = req.user.uid
        var size
        
  
        var m = moment()
        var year = m.format('YYYY')
        var arr = []
        var id = req.user._id

        TeacherSub.find({teacherId:uid},function(err,locs){
          if(locs){
            let subjectCode = locs[1].subjectCode
            let term = req.user.term
          StudentSub.find({subjectCode:subjectCode},function(err,noc){
            if(noc){
              let studentId = noc[0].studentId
           
          
        
         
        
          
        console.log(subjectCode,studentId,term,'outa here')
        
        
          TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term},function(err,docs) {
            if(docs){

            
            console.log(docs,'docs')
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
          }
          })
        }
        })
      }
        })
        })
        
        
      

        
      
        router.post('/dashChartS01',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var studentId = req.body.student
         
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
      
        
        
          TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term,type3:'class'},function(err,docs) {
            if(docs){

            
            for(var i = 0;i<docs.length;i++){
              size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                      console.log('true')
                     arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                     arr.find(value => value.month == docs[i].month).size++;
                    }else{
            arr.push(docs[i])

            let resultX = arr.map(function(element){
              //element.size = 0
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
        

 
        router.post('/dashChartS02',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var class1 = req.body.class1
          var companyId = req.user.companyId
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
            if(docs){

            
            for(var i = 0;i<docs.length;i++){
              size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.month == docs[i].month)){
                      console.log('true')
                     arr.find(value => value.month == docs[i].month).percentage += docs[i].percentage;
                     arr.find(value => value.month == docs[i].month).size++;
                    }else{
            arr.push(docs[i])

            let resultX = arr.map(function(element){
              //element.size = 0
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




        router.post('/dashChartS03',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var studentId = req.body.studentId
    
         console.log(subjectCode,term,studentId,'button03')
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term,type3:'class'},function(err,docs) {
            if(docs){
//console.log(docs,'docs')
            
            for(var i = 0;i<docs.length;i++){
              //size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.topic == docs[i].topic)){
                console.log(docs[i].topic,docs[i].size,'true')
                     arr.find(value => value.topic == docs[i].topic).percentage += docs[i].percentage;
                     arr.find(value => value.topic == docs[i].topic).size++;
                     console.log( arr.find(value => value.topic == docs[i].topic).size,'trueX')
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
              console.log(element.percentage,element.size,'mark')
              element.percentage  = element.percentage / element.size
              
              let num = Math.round(element.percentage)
            num.toFixed(2)
            element.percentage =num
            })
            //console.log(arr,'arr3')
           res.send(arr)
          }
          })
        
        })








        
        router.post('/dashChartS04',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var class1= req.body.class1
          var topic = req.body.topic
         
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
         
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,class1:class1,topic:topic,term:term,type3:'class'},function(err,docs) {
            if(docs){

            
            for(var i = 0;i<docs.length;i++){
              size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.fullname == docs[i].fullname)){
                      console.log('true')
                     arr.find(value => value.fullname == docs[i].fullname).percentage += docs[i].percentage;
                     arr.find(value => value.fullname == docs[i].fullname).size++;
                    }else{
                      arr.push(docs[i])
                      let fullname = docs[i].fullname
                      
                        //element.size = 0
                        if(arr.find(value => value.fullname == fullname)){
                   
                         
                               arr.find(value => value.fullname == fullname).size++;
                 
                        }
                        //element.size = element.size + 1
                          
                     
                          }
                  
            }
            let result = arr.map(function(element){
              element.percentage = element.percentage /element.size
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
        



        router.post('/dashChartS06',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var class1 = req.body.class1
         
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
          
          
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
            if(docs){

            
            for(var i = 0;i<docs.length;i++){
              size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.fullname == docs[i].fullname)){
                      console.log('true')
                     arr.find(value => value.fullname == docs[i].fullname).percentage += docs[i].percentage;
                     arr.find(value => value.fullname == docs[i].fullname).size++;
                    }else{
                      arr.push(docs[i])
                      let fullname = docs[i].fullname
                      
                        //element.size = 0
                        if(arr.find(value => value.fullname == fullname)){
                   
                         
                               arr.find(value => value.fullname== fullname).size++;
                 
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
        




        
        router.post('/dashChartS07',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var class1 = req.body.class1
 
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
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
              element.percentage  = element.percentage/ element.size
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
        
        
  







        

        router.post('/dashChartS08',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var studentId = req.body.studentId
         
   
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
        
        
        
          TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term},function(err,docs) {
            if(docs){

            
            for(var i = 0;i<docs.length;i++){
              size = docs.length
           
                
               if(arr.length > 0 && arr.find(value => value.type == docs[i].type)){
                      console.log('true')
                     arr.find(value => value.type == docs[i].type).percentage += docs[i].percentage;
                     arr.find(value => value.type == docs[i].type).size++;
                    }else{
            arr.push(docs[i])

            let resultX = arr.map(function(element){
              //element.size = 0
              element.size = element.size + 1
                })
                }
        
            
            }
            let result = arr.map(function(element){
              element.percentage = element.percentage / element.size
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






         
        router.post('/dashChartS09',isLoggedIn,teacher,function(req,res){
          var subjectCode = req.body.subjectCode
          var term = req.body.term
          var class1= req.body.class1
        
         
         
          var m = moment()
          var year = m.format('YYYY')
          var arr = []
          var id = req.user._id
        
          
      
        
        
          TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
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
              element.percentage = element.percentage / element.size
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
        



router.get('/dashX',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  const arr = []
const m = moment();
var id =req.user._id
var uid = req.user.uid

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
       
          Class1.find({},function(err,plocs){
            
 TeacherSub.find({teacherId:uid},function(err,yocs){
         
          res.render('dashboard/teacher',{pro:pro,list:arr,arr1:plocs,listX:yocs, les:les,gt:gt })
          })

        })
        })
        })
        })
  
      })
  

})






//ajax


router.post('/dashChartA1',isLoggedIn,teacher,function(req,res){
  var uid = req.user.uid
  var size

  var m = moment()
  var year = m.format('YYYY')
  var arr = []
  var id = req.user._id
  TeacherSub.find({teacherId:uid},function(err,locs){
    if(locs){
      let subjectCode = locs[0].subjectCode
      let term = req.user.term
    StudentSub.find({subjectCode:subjectCode},function(err,noc){
      if(noc){
        let studentId = noc[0].studentId
     
    
  
   
  
    
  console.log(subjectCode,term,'outa here')
  
  
    TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term,type3:'class'},function(err,docs) {
      if(docs){
      //console.log(docs,'docs')
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
}
  })
  })







  

router.post('/dashChartA2',isLoggedIn,teacher,function(req,res){
  var uid = req.user.uid
  var size
  
  var m = moment()
  var year = m.format('YYYY')
  var arr = []
  var id = req.user._id

  TeacherSub.find({teacherId:uid},function(err,locs){
    if(locs){
      let subjectCode = locs[0].subjectCode
      let term = req.user.term
    Topic.find({subjectCode:subjectCode},function(err,noc){
      if(noc.length>0){
        let name = noc[0].name
     
    
  
   
  
    
  console.log(subjectCode,term,'outa here')
  
  
    TestX.find({year:year,subjectCode:subjectCode,topic:name,term:term,type3:'class'},function(err,docs) {
      if(docs){

      
     // console.log(docs,'docs')
      for(var i = 0;i<docs.length;i++){
  size = docs.length
     
          
         if(arr.length > 0 && arr.find(value => value.fullname == docs[i].fullname)){
                console.log('true')
               arr.find(value => value.fullname == docs[i].fullname).percentage += docs[i].percentage;
               arr.find(value => value.fullname == docs[i].fullname).size++;
              }else{
                arr.push(docs[i])
                let fullname = docs[i].fullname
                
                  //element.size = 0
                  if(arr.find(value => value.fullname  == fullname)){
             
                   
                         arr.find(value => value.fullname == fullname).size++;
           
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
}
  })
  })











   

router.post('/dashChartA3',isLoggedIn,teacher,function(req,res){
  var uid = req.user.uid
  var size

  var m = moment()
  var year = m.format('YYYY')
  var arr = []
  var id = req.user._id
  TeacherSub.find({teacherId:uid},function(err,locs){
    if(locs){
      let subjectCode = locs[0].subjectCode
      let term = req.user.term
    Class1.find({},function(err,noc){
      if(noc){
        let class1 = noc[1].class1
     
    
  
   
  
    
  console.log(subjectCode,term,'outa here')
  
  
    TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
      if(docs){

      
    //  console.log(docs,'docs')
      for(var i = 0;i<docs.length;i++){
  size = docs.length
     
          
         if(arr.length > 0 && arr.find(value => value.uid == docs[i].uid)){
                console.log('true')
               arr.find(value => value.uid == docs[i].uid).percentage += docs[i].percentage;
               arr.find(value => value.uid == docs[i].uid).size++;
              }else{
                arr.push(docs[i])
                let uid= docs[i].uid
                
                  //element.size = 0
                  if(arr.find(value => value.uid == uid)){
             
                   
                         arr.find(value => value.uid == uid).size++;
           
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
}
  })
  })














  
router.post('/dashChartA4',isLoggedIn,teacher,function(req,res){
  var uid = req.user.uid
  var size
  
  var m = moment()
  var year = m.format('YYYY')
  var arr = []
  var id = req.user._id
  TeacherSub.find({teacherId:uid},function(err,locs){
    if(locs){
      let subjectCode = locs[1].subjectCode
      let term = req.user.term
    Class1.find({},function(err,noc){
      if(noc){
        let class1 = noc[1].class1
     
    
  
   
  
    
  console.log(subjectCode,term,'outa here')
  
  
    TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
      if(docs){
      //console.log(docs,'docs')
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
}
  })
  })









  
  router.post('/dashChartA5',isLoggedIn,teacher,function(req,res){
    var uid = req.user.uid
    var size
  
    var m = moment()
   
    var year = m.format('YYYY')
    var arr = []
    var id = req.user._id
    TeacherSub.find({teacherId:uid},function(err,locs){
      if(locs){
        let subjectCode = locs[1].subjectCode
        let term = req.user.term
      StudentSub.find({subjectCode:subjectCode},function(err,noc){
        if(noc){
          let studentId = noc[0].studentId
       
      
    
     
    
      
    console.log(subjectCode,term,'outa here')
    
    
      TestX.find({year:year,subjectCode:subjectCode,uid:studentId,term:term},function(err,docs) {
        if(docs){
        //console.log(docs,'docs')
        for(var i = 0;i<docs.length;i++){
    size = docs.length
       
            
           if(arr.length > 0 && arr.find(value => value.type == docs[i].type)){
                  console.log('true')
                 arr.find(value => value.type == docs[i].type).percentage += docs[i].percentage;
                 arr.find(value => value.type == docs[i].type).size++;
                }else{
        arr.push(docs[i])

        let resultX = arr.map(function(element){
          //element.size = 0
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
  }
    })
    })




  
    router.post('/dashChartA6',isLoggedIn,teacher,function(req,res){
      var uid = req.user.uid
      var size
    
      var m = moment()
      var year = m.format('YYYY')
      var arr = []
      var id = req.user._id

      TeacherSub.find({teacherId:uid},function(err,locs){
        if(locs){
          let subjectCode = locs[1].subjectCode
          let term = req.user.term
        Class1.find({},function(err,noc){
          if(noc){
            let class1 = noc[1].class1
         
        
      
       
      
        
      console.log(subjectCode,term,'outa here')
      
      
        TestX.find({year:year,subjectCode:subjectCode,class1:class1,term:term,type3:'class'},function(err,docs) {
          if(docs){
         // console.log(docs,'docs')
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
    }
      })
      })
  
  
  


  
router.get('/dash',isLoggedIn,teacher,function(req,res){
res.redirect('/teacher/passRate')
})


router.get('/analytics',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var uid = req.user.uid

  Class1.find({},function(err,plocs){
  TeacherSub.find({teacherId:uid},function(err,docs){
  res.render('dashboard/teacher3',{pro:pro,arr:docs,arr1:plocs,listX:docs})

  })

  })
})

 


router.post('/fill',function(req,res){

  console.log(req.body.value)
      var subjectCode = req.body.value
  StudentSub.find({subjectCode:subjectCode},function(err,docs){
    console.log(docs,'data')
  
      if(docs == undefined){
          res.redirect('/')
         }else
        
           res.send(docs)
  
  })
  
  })




  
router.post('/fillX',function(req,res){

  console.log(req.body.value)
      var subjectCode = req.body.value
  Topic.find({subjectCode:subjectCode},function(err,docs){
    console.log(docs,'data')
  
      if(docs == undefined){
          res.redirect('/')
         }else
        
           res.send(docs)
  
  })
  
  })
//Final Exam

router.post('/passChart',isLoggedIn,teacher,function(req,res){
    var m = moment()
    var year = m.format('YYYY')
    var uid = req.user.uid
 
   
          TeacherExamRate.find({year:year, teacherId:uid},function(err,docs){
            if(docs == undefined){
              res.redirect('/teacher/dash')
            }else
        
               res.send(docs)
           
            
             })
        
        })
  
  
  //Class Test
        router.post('/passChart2',isLoggedIn,teacher,function(req,res){
          var m = moment()
          var year = m.format('YYYY')
          var uid = req.user.uid
   
                TeacherClassRate.find({year:year,  teacherId:uid},function(err,docs){
                  if(docs == undefined){
                    res.redirect('/teacher/dash')
                  }else
              
                     res.send(docs)
                 
                  
                   })
              
              })
    
  
  
  
  


              router.get('/fstats',isLoggedIn,teacher,function(req,res){
                var pro = req.user
                var m = moment()
                var year = m.format('YYYY')
                var uid = req.user.uid
                
                var term = req.user.term
                TeacherExamRate.find({year:year,  teacherId:uid, type:"Final Exam"},function(err,docs){
                  if (!err) {
                      res.render('teachers/statf', {
                         listX:docs,pro:pro
                        
                      });
                  }
              });
              
              
                
              })                   





              router.get('/tstats',isLoggedIn,teacher,function(req,res){
                var pro = req.user
            
                var m = moment()
                var year = m.format('YYYY')
                var uid = req.user.uid
                var term = req.user.term
                TeacherClassRate.find({year:year,  teacherId:uid, type:"Class Test"},function(err,docs){
                  if (!err) {
                      res.render('teachers/statc', {
                         listX:docs,pro
                        
                      });
                  }
              });
              
              
                
              })      









              router.get('/msgUpdate',isLoggedIn,teacher,function(req,res){
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
                
                router.get('/sentUpdate',isLoggedIn,teacher,function(req,res){
                  var id = req.user._id
                  Message.find({senderId:id},function(err,docs){
                    let size = docs.length
                    User.findByIdAndUpdate(id,{$set:{sent:size}},function(err,nocs){
                
                    })
                  })
                })
                













              router.get('/msgX',isLoggedIn,teacher,function(req,res){
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
              
            res.redirect('/teacher/msg')
            })
            
            })
            
            
            
            
            
            
            
            
            
            
            
            
            router.get('/msg',isLoggedIn,teacher,function(req,res){
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
            console.log(list.length,'list yacho')
            
            num  = list.length
            }
            
       
            }
            })  
            
            //})
            
            }
            res.render('messagesTeachers/inbox',{list:list, num:list.length,sent:sent,pro:pro})
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
            
            
            router.get('/sentXX',isLoggedIn,teacher,function(req,res){
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
            res.redirect('/teacher/sent')
            })
            
            })
            
            
            
            
            
            router.get('/sent',isLoggedIn,teacher,function(req,res){
            var id = req.user.id
            const list2 =[]
            const list = []
            var pro = req.user
            var num = req.user.inboxNo
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
            
            
            res.render('messagesTeachers/sent',{list:list, num:num,sent:sent,pro:pro})
            })
            
            })
            
            
            
            router.get('/archiveXX',isLoggedIn,teacher,function(req,res){
            var id = req.user.id
            var list = []
            var num
         
            Recepient.find({recepientId :id, status:'active', statusXX:'yes', archive:'yes'},function(err,klocs){
            
              for(var c = 0 ; c <klocs.length;c++){
              
                let recIdX = klocs[c].msgId
              
                      Message.find({msgId:recIdX,companyId:companyId},function(err,  docs){
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
            res.redirect('/teacher/archive')
            
            })
            
            })
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            router.get('/archive',isLoggedIn,teacher,function(req,res){
            var id = req.user.id
            const list2 =[]
            const list = []
            var num = req.user.inboxNo
            var pro = req.user
            var sent = req.user.sent
            
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
            
            res.render('messagesTeachers/sent',{list:list, num:num,sent:sent,pro:pro})
                   
            })
            
            })
            
            
            
            
            router.post('/marked',isLoggedIn,teacher,function(req,res){
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
            
            router.post('/archiveX',isLoggedIn,teacher,function(req,res){
           
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{archive:'yes',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
            
            router.post('/readX',isLoggedIn,teacher,function(req,res){
     
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id },function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{read:'yes',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
            
            
            
            
            
            
            router.post('/delete',isLoggedIn,teacher,function(req,res){
         
            let id = req.user.id
            Recepient.find({ statusX:'marked', recepientId:id},function(err,docs){
            
            for(var i = 0; i<docs.length;i++){
            
            
            Recepient.findByIdAndUpdate(docs[i]._id,{$set:{status:'deleted',statusXX:'yes'}},function(err,nocs){
            
            })
            
            }
            
            res.send(docs)
            })
            })
            
            
              router.get('/compose',isLoggedIn,teacher,  function(req,res){
                var num = req.user.inboxNo
                var sent = req.user.sent
                var pro = req.user
                res.render('messagesTeachers/compose',{num:num,sent:sent,pro:pro})
              })
            
             
              router.post('/userX',isLoggedIn,teacher,function(req,res){
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
            
            
            
            router.post('/dataX',isLoggedIn,teacher,function(req,res){
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
            res.redirect('/teacher/sentX')
            })
            
            
            
            
            
            })
            
            router.get('/reply/:id', isLoggedIn,teacher, function(req,res){
            var id = req.params.id
            var uid = req.user._id
            console.log(id,'id')
            var arr = []
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
            var pro = req.user
            
            Message.findByIdAndUpdate(Vid,{$set:{status4:timeX2,status5:timeX3}},function(err,locs){
            
            
            
            // Format relative time using negative value (-1).
            
            
            })
            
            }
            console.log(arr,'arr')
            
            res.render('messagesTeachers/reply',{list:docs,id:id, arr:arr, subject:sub,pro:pro})
            })
            
            })
            })
            })
            
            
            
            router.post('/reply/:id', isLoggedIn,teacher, function(req,res){
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
            
            
            
            
            router.post('/replyX/:id',isLoggedIn,teacher,function(req,res){
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
            
            
            router.post('/replyX2/:id',isLoggedIn,teacher,function(req,res){
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
            
            
            
            router.post('/replyX3/:id',isLoggedIn,teacher,function(req,res){
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
            
            
            
            
        //create & post assignment    


router.get('/assgt',isLoggedIn,teacher,function(req,res){
 /* var companyId = req.user.companyId
  Class1.find({companyId:companyId},function(err,focs){
  
    arr = focs
  res.render('teacherExam/assgt',{arr:arr})
  })*/

  
  var arr = []
  var arr1 = []
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];

  var subject = req.user.subjects
  var subjectCode = req.user.subjectCode
  var grade = req.user.grade
  var icon = req.user.icon
  Class1.find({}, function(err,docs){
    Topic.find({subjectCode:subjectCode},function(err,zoc){
  
   var arr2 = zoc
  var arr1 = docs;  
  
  res.render('teacherExam/assgt',{ arr1:arr1,arr2:arr2, user:user,icon:icon, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  
  })
  })
})


//add assgt
 
router.post('/assgt',isLoggedIn,teacher, function(req,res){
  var pro = req.user
  var day = req.body.day
  var m2 = moment()
  var mformat = m2.format('L')
  var m = moment(day)
  var displayFormat = m.format('MMMM Do YYYY')
  var dateValueOf = m2.valueOf()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
 
  var mformatD = m.format("L")
  var dateValueOfD = m.valueOf()
  var teacherName = req.user.fullname;
  var teacherId = req.user.uid;
var question = req.body.question;
var marks = req.body.marks;
var subjectName = req.body.subject
var subjectCode = req.body.subjectCode
var class1 = req.body.class1;
var type = req.body.type
var grade = req.body.grade
var icon = req.body.icon
console.log(icon,'icon')
var term = req.user.term
var arr1 = []

var topic = req.body.topic
var numDate = m.valueOf()

//clas.start =    m.format("YYYY-MM-DD")+"T"+start;
//clas.end =    m.format("YYYY-MM-DD")+"T"+end;

req.check('subject','Enter Subject').notEmpty();
req.check('subjectCode','Enter Subject Code').notEmpty();
req.check('class1','Enter Class').notEmpty();
req.check('day','Enter Deadline Day').notEmpty();
req.check('question','Enter Question').notEmpty();
req.check('marks','Enter Marks').notEmpty();



var errors = req.validationErrors();
     
if (errors) {

  /*  Class1.find({companyId:companyId},function(err,focs){*/
  
    /*arr = focs*/
  req.session.errors = errors;
  req.session.success = false
 /* res.render('teacherExam/assgt',{errors:req.session.errors,  arr:arr,pro:pro})
  })*/

  


  req.flash('danger', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/assgt');
}

else 
{
TeacherSub.findOne({'subjectCode':subjectCode})
.then(teach=>{
  if(teach){
  
     
    
        
      

         // console.log(nformat3,'3333')
         // let nmoment = moment(nformat)
          //console.log(nmoment,'ccc')



          var test = Test();
          test.date = day;
          test.subject = subjectName;
          test.subjectCode = subjectCode;
          test.class1 = class1;
          test.year = year;
          test.name = day +" "+class1;
          test.month  = month;
          test.numDate = numDate
          test.teacher = req.user.uid;
          test.numberOfStudents = 0;
          test.passRate = 0;
          test.term = term;
          test.displayFormat = displayFormat
          test.topic = topic;
          test.question = question;
          test.possibleMark = marks
          test.icon = icon
          test.highScore = 0
          test.lowestScore=0;
          test.dateValue = dateValueOf
          test.numPasses=0
          test.avgMark=0
          test.mformat = mformat
          test.possibleMark = marks
          test.type = type
          test.type2 = 'online assignment'
          test.type3 = 'class'
          test.grade = req.body.grade;
          test.level = 'highschool';
          test.status = 'null'
          test.timeLeft= 'null'
          test.examStatus = 'null'
          test.examLink = 'null'
          test.time = 'null'
          test.teacherId = teacherId
          test.teacherName = teacherName
          test.quizNo = 0
          test.quizBatch = 0
          test.quizId = 'null'
          test.duration =0
          test.status2= 'null'
          test.status3= 'null'
          test.dateValue2= 0
          test.filename = 'null'
          test.fileId = 'null'
          test.displayFormat = displayFormat
          
          
          test.save()
          .then(tesn =>{









      
StudentSub.find({subjectCode:subjectCode},function(err,docs){
 
for(var i = 0;i<docs.length;i++){
let studentId = docs[i].studentId
let studentName = docs[i].studentName
let photo = docs[i].photo





        var lesson = new TestX();
    
   
        lesson.question = question;
        lesson.uid = studentId
        lesson.fullname = studentName
        lesson.mark = 0;
        lesson.possibleMark = marks
        lesson.class1 = class1;
        lesson.icon = icon
        lesson.dateValue = dateValueOf
        lesson.dateValueD = dateValueOfD
        lesson.status = 'active'
        lesson.date = mformat
        lesson.displayFormat = displayFormat
        lesson.subject = subjectName;
        lesson.subjectCode = subjectCode;
        lesson.mformat = mformat
        lesson.mformatD = mformatD
        lesson.deadline= day;
        lesson.teacherId=teacherId
        lesson.teacher = teacherName
        lesson.topic = topic
        lesson.type = type
        lesson.term = term
        lesson.month = month
        lesson.year = year
        lesson.grade = grade
        lesson.assignmentId = tesn._id
        lesson.filename = 'null'
        lesson.fileId = 'null'
        lesson.mformatS = 'null'
        lesson.dateValueS = 0
        lesson.displayFormatS = 'null'
        lesson.submissionStatus = 'pending'
        lesson.color = 'null'
        lesson.style = 'null'
        lesson.size = 0
        lesson.photo = photo
        lesson.possibleMark = marks
        lesson.symbol = 'null'
        lesson.result = 'null'
        lesson.quizId =tesn._id
        lesson.percentage = 0
        lesson.type2 = 'online assignment'
        lesson.type3 = 'class'
        lesson.status3 = 'null'
       
     
        
    
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


  })
      
    })
    
    req.flash('success', 'Assignment Posted Successfully!');
  
    res.redirect('/teacher/assgt')
  }
  else{
  
      Class1.find({},function(err,focs){
        arr = focs
 
    req.session.message = {
      type:'errors',
      message:'Subject Code does not exist'
    }     
       res.render('teacherExam/assgt', {
          message:req.session.message, fullname:fullname, teacherId:teacherID,arr:arr, pro:pro})
       })
    
      
  }
})


}




})




//change subject

router.get('/assignmentAttachBatch',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var successMsg = req.flash('success')[0];
   res.render('teachers/batch3',{pro:pro,successMsg: successMsg, noMessages: !successMsg})
})



router.post('/assignmentAttachBatch',isLoggedIn,teacher,  function(req,res){
  var subjectCode = req.body.subjectCode;
  var subject = req.body.subject
  var grade = req.body.grade
  var id = req.user._id
 var icon = req.body.icon
  
  
  req.check('subject','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  

  
  var errors = req.validationErrors();
   
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
   // res.render('exam/batch2',{ errors:req.session.errors,pro:pro})

   req.flash('success', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/assignmentAttachBatch');
  
  }
  
  else {
  
  TeacherSub.findOne({'subjectName':subject,'subjectCode':subjectCode,'grade':grade})
  .then(sub =>{
  
    if(sub){

   
     
            User.findByIdAndUpdate(id,{$set:{subjects:subject,subjectCode:subjectCode,grade:grade,icon:icon}}, function(err,coc){
          
        
    })
    res.redirect('/teacher/assignAttach')
  }else{
    console.log('ma1')
    req.flash('success', 'Subject Does Not Exist!');
   
    
    res.redirect('/teacher/assignmentAttachBatch');
   //res.render('product/update',{}) 
  }

  
  
  })

}
  

  })


router.get('/assignAttach',isLoggedIn,teacher,function(req,res){
  /* var companyId = req.user.companyId
   Class1.find({companyId:companyId},function(err,focs){
   
     arr = focs
   res.render('teacherExam/assgt',{arr:arr})
   })*/
 
   
   var arr = []
   var arr1 = []
   var user = req.user.term
   var teacherId = req.user.uid
   var pro = req.user
   var errorMsg = req.flash('danger')[0];
   var successMsg = req.flash('success')[0];
   var companyId = req.user.companyId
   var subject = req.user.subjects
   var subjectCode = req.user.subjectCode
   var grade = req.user.grade
   var icon = req.user.icon
   Class1.find({}, function(err,docs){
     Topic.find({subjectCode:subjectCode},function(err,zoc){
   
    var arr2 = zoc
   var arr1 = docs;  
   
   res.render('teacherExam/assgt2',{ arr1:arr1,arr2:arr2, user:user,icon:icon, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
   
   })
   })
 })
 


  
router.post('/assignAttach',upload.single('file'),isLoggedIn,teacher, function(req,res){
  var pro = req.user
  var day = req.body.day
  var m2 = moment()
  var mformat = m2.format('L')
 var fileId = req.file.id

  var m = moment(day)
  var displayFormat = m.format('MMMM Do YYYY')
  var dateValueOf = m2.valueOf()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
 
  var mformatD = m.format("L")
  var dateValueOfD = m.valueOf()
  var teacherName = req.user.fullname;
  var teacherId = req.user.uid;
var question = req.body.question;
var marks = req.body.marks;
var subjectName = req.body.subject
var subjectCode = req.body.subjectCode
var class1 = req.body.class1;
var type = req.body.type
var grade = req.body.grade
var icon = req.body.icon
console.log(icon,'icon')
var term = req.user.term
var arr1 = []

var topic = req.body.topic
var numDate = m.valueOf()



//clas.start =    m.format("YYYY-MM-DD")+"T"+start;
//clas.end =    m.format("YYYY-MM-DD")+"T"+end;

req.check('subject','Enter Subject').notEmpty();
req.check('subjectCode','Enter Subject Code').notEmpty();
req.check('class1','Enter Class').notEmpty();
req.check('day','Enter Deadline Day').notEmpty();

req.check('marks','Enter Marks').notEmpty();



var errors = req.validationErrors();
     
if (errors) {

  /*  Class1.find({companyId:companyId},function(err,focs){*/
  
    /*arr = focs*/
  req.session.errors = errors;
  req.session.success = false
 /* res.render('teacherExam/assgt',{errors:req.session.errors,  arr:arr,pro:pro})
  })*/

  


  req.flash('danger', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/assgtAttach');
}


if(!req.file){
 

      req.flash('danger', 'Upload Failed');
  
    res.redirect('/teacher/assignAttach') 

}


else 
{
TeacherSub.findOne({'subjectCode':subjectCode})
.then(teach=>{
  if(teach){
  
     
    
    var filename = req.file.filename;
      
console.log(filename,'filename')
         // console.log(nformat3,'3333')
         // let nmoment = moment(nformat)
          //console.log(nmoment,'ccc')



          var test = Test();
          test.date = day;
          test.subject = subjectName;
          test.subjectCode = subjectCode;
          test.class1 = class1;
          test.year = year;
          test.name = day +" "+class1;
          test.month  = month;
          test.numDate = numDate
          test.teacher = req.user.uid;
          test.numberOfStudents = 0;
          test.passRate = 0;
          test.term = term;
          test.displayFormat = displayFormat
          test.topic = topic;
          test.question = 'null';
          test.possibleMark = marks
          test.icon = icon
          test.highScore = 0
          test.lowestScore=0;
          test.dateValue = dateValueOf
          test.numPasses=0
          test.avgMark=0
          test.mformat = mformat
          test.possibleMark = marks
          test.type = type
          test.filename = filename
          test.fileId = fileId
          test.type2 = 'online assignment attached'
          test.type3 = 'class'
          test.grade = req.body.grade;
          test.level = 'highschool';
       
          test.status = 'null'
          test.timeLeft= 'null'
          test.examStatus = 'null'
          test.examLink = 'null'
          test.time = 'null'
          test.teacherId = teacherId
          test.teacherName = teacherName
          test.quizNo = 0
          test.quizBatch = 0
          test.quizId = 'null'
          test.duration =0
          test.status2= 'null'
          test.status3= 'null'
          test.dateValue2= 0
          
          test.displayFormat = displayFormat
          
          
          test.save()
          .then(tesn =>{









      
StudentSub.find({subjectCode:subjectCode},function(err,docs){
for(var i = 0;i<docs.length;i++){
let studentId = docs[i].studentId
let studentName = docs[i].studentName
let photo = docs[i].photo





        var lesson = new TestX();
    
   
        lesson.question = 'Assignment File';
        lesson.uid = studentId
        lesson.fullname = studentName
        lesson.mark = 0;
        lesson.possibleMark = marks
        lesson.class1 = class1;
        lesson.icon = icon
        lesson.dateValue = dateValueOf
        lesson.dateValueD = dateValueOfD
        lesson.status = 'active'
        lesson.date = mformat
        lesson.displayFormat = displayFormat
        lesson.subject = subjectName;
        lesson.subjectCode = subjectCode;
        lesson.mformat = mformat
        lesson.mformatD = mformatD
        lesson.deadline= day;
        lesson.teacherId=teacherId
        lesson.teacher = teacherName
        lesson.topic = topic
        lesson.type = type
        lesson.term = term
        lesson.month = month
        lesson.year = year
        lesson.grade = grade
        lesson.assignmentId = tesn._id
        lesson.filename = filename
        lesson.fileId = fileId
        lesson.mformatS = 'null'
        lesson.dateValueS = 0
        lesson.displayFormatS = 'null'
        lesson.submissionStatus = 'pending'
        lesson.color = 'null'
        lesson.style = 'null'
        lesson.size = 0
        lesson.photo = photo
        lesson.possibleMark = marks
        lesson.symbol = 'null'
        lesson.result = 'null'
        lesson.quizId =tesn._id
        lesson.percentage = 0
        lesson.type2 = 'online assignment'
        lesson.type3 = 'class'
        lesson.status3 = 'null'
        lesson.file = true
       
     
        
    
      lesson.save()
      .then(less =>{
       
       

     })

   }


  })
      
    })
    
    req.flash('success', 'Assignment Posted Successfully!');
  
    res.redirect('/teacher/assignAttach')
  }
  else{
  
      Class1.find(function(err,focs){
        arr = focs
 
    req.session.message = {
      type:'errors',
      message:'Subject Code does not exist'
    }     
       res.render('teacherExam/assgt2', {
          message:req.session.message, fullname:fullname, teacherId:teacherID,arr:arr, pro:pro})
       })
    
      
  }
})


}




})

///////////////////////////////////////////////////////////////////////////

//change subject

router.get('/materialBatch',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var successMsg = req.flash('success')[0];
   res.render('teachers/batch4',{pro:pro,successMsg: successMsg, noMessages: !successMsg})
})



router.post('/materialBatch',isLoggedIn,teacher,  function(req,res){
  var subjectCode = req.body.subjectCode;
  var subject = req.body.subject
  var grade = req.body.grade
  var id = req.user._id
 var icon = req.body.icon
  
  
  req.check('subject','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  

  
  var errors = req.validationErrors();
   
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
   // res.render('exam/batch2',{ errors:req.session.errors,pro:pro})

   req.flash('success', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/materialBatch');
  
  }
  
  else {
  
  TeacherSub.findOne({'subjectName':subject,'subjectCode':subjectCode,'grade':grade})
  .then(sub =>{
  
    if(sub){

   
     
            User.findByIdAndUpdate(id,{$set:{subjects:subject,subjectCode:subjectCode,grade:grade,icon:icon}}, function(err,coc){
          
        
    })
    res.redirect('/teacher/attachMaterial')
  }else{
    console.log('ma1')
    req.flash('success', 'Subject Does Not Exist!');
   
    
    res.redirect('/teacher/materialBatch');
   //res.render('product/update',{}) 
  }

  
  
  })

}
  

  })


router.get('/attachMaterial',isLoggedIn,teacher,function(req,res){
  /* var companyId = req.user.companyId
   Class1.find({companyId:companyId},function(err,focs){
   
     arr = focs
   res.render('teacherExam/assgt',{arr:arr})
   })*/
 
   
   var arr = []
   var arr1 = []
   var user = req.user.term
   var teacherId = req.user.uid
   var pro = req.user
   var errorMsg = req.flash('danger')[0];
   var successMsg = req.flash('success')[0];
   
   var subject = req.user.subjects
   var subjectCode = req.user.subjectCode
   var grade = req.user.grade
   var icon = req.user.icon
   var class1 = req.user.class1
   Class1.find({}, function(err,docs){
     Topic.find({subjectCode:subjectCode},function(err,zoc){
   
    var arr2 = zoc
   var arr1 = docs;  
   
   res.render('teacherExam/material',{ arr1:arr1,arr2:arr2,class1:class1, user:user,icon:icon, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
   
   })
   })
 })
 


  
router.post('/attachMaterial',upload.single('file'),isLoggedIn,teacher, function(req,res){
  var pro = req.user
  var day = req.body.day
  var m2 = moment()
  var mformat = m2.format('L')
  var fileId = req.file.id
  var m = moment(day)
  var displayFormat = m.format('MMMM Do YYYY')
  var dateValueOf = m2.valueOf()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
 
  var mformatD = m.format("L")
  var dateValueOfD = m.valueOf()
  var teacherName = req.user.fullname;
  var teacherId = req.user.uid;

var subjectName = req.body.subject
var subjectCode = req.body.subjectCode
var class1 = req.body.class1;
var type = req.body.type
var grade = req.body.grade
var icon = req.body.icon
console.log(icon,'icon')
var term = req.user.term
var arr1 = []

var topic = req.body.topic
var numDate = m.valueOf()



//clas.start =    m.format("YYYY-MM-DD")+"T"+start;
//clas.end =    m.format("YYYY-MM-DD")+"T"+end;

req.check('subject','Enter Subject').notEmpty();
req.check('subjectCode','Enter Subject Code').notEmpty();
req.check('class1','Enter Class').notEmpty();



var errors = req.validationErrors();
     
if (errors) {

  /*  Class1.find({companyId:companyId},function(err,focs){*/
  
    /*arr = focs*/
  req.session.errors = errors;
  req.session.success = false
 /* res.render('teacherExam/assgt',{errors:req.session.errors,  arr:arr,pro:pro})
  })*/

  


  req.flash('danger', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/attachMaterial');
}


if(!req.file){
 

      req.flash('danger', 'Upload Failed');
  
    res.redirect('/teacher/attachMaterial') 

}


else 
{
TeacherSub.findOne({'subjectCode':subjectCode})
.then(teach=>{
  if(teach){
  
     
    
    var filename = req.file.filename;
      
console.log(filename,'filename')
         // console.log(nformat3,'3333')
         // let nmoment = moment(nformat)
          //console.log(nmoment,'ccc')



          var test = Learn();
  
          test.subject = subjectName;
          test.subjectCode = subjectCode;
          test.class1 = class1;
          test.year = year;
          test.teacher = req.user.uid;
          test.icon = icon
          test.term = term
          test.mformat = mformat
          test.type = type
          test.filename = filename
          test.fileId = fileId
          test.type2 = 'learning material'
          test.type3 = 'study'
          test.grade = req.body.grade;
         

         
          test.teacherId = teacherId
          test.teacherName = teacherName
         
          
          
          test.save()
          .then(tesn =>{









      
/*StudentSub.find({subjectCode:subjectCode},function(err,docs){
for(var i = 0;i<docs.length;i++){
let studentId = docs[i].studentId
let studentName = docs[i].studentName
let photo = docs[i].photo*/





      
    })
    
    req.flash('success', 'Material Posted Successfully!');
  
    res.redirect('/teacher/attachMaterial')
  }
  else{
  
     
    
    req.flash('danger', 'Upload Failed!');
  
    res.redirect('/teacher/attachMaterial')
  }
})


}




})





/*
router.get('/viewClassAssignments',isLoggedIn,function(req,res){
  var id = req.user.testId
  var pro = req.user
  var teacherId = req.user.uid
  Test.find({teacherId:teacherId,type2:"online assignment"},function(err,docs){
    res.render('exam/list',{     listX:docs,pro:pro})
  })

})





router.get('/studentAssgt',isLoggedIn,function(req,res){
  var uid = req.user.uid
 TestX.find({type2:'online assignment',submissionStatus:'submitted',teacherId:uid},function(err,docs){
res.render('teachers/listAss',{listX:docs})
  })
})
*/

//download assgt
/*router.get('/download/:id',isLoggedIn,teacher,function(req,res){
  TestX.findById(req.params.id,function(err,doc){
    var name = doc.filename;
    res.download( './public/uploads/'+name, name)
  })  

})*/

router.get('/download/:id',(req,res)=>{
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


//posted assignment

router.get('/viewAssignments',isLoggedIn,teacher,function(req,res){
  var id = req.user.testId
  var pro = req.user
  var teacherId = req.user.uid
  var term = req.user.term
  var companyId = req.user.companyId
  var n = moment()
  var year = n.format('YYYY')
  Test.find({teacherId:teacherId,type2:"online assignment",term:term,year:year},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
    res.render('exam/assgtList',{  id:id,listX:arr,pro:pro})
  })

})

router.post('/viewAssignments',isLoggedIn,teacher,function(req,res){
  var pro =req.user

  var date = req.body.date
  var arr = []
  var term = req.user.term
var teacherId = req.user.uid
var n = moment()
var year = n.format('YYYY')
  
  var m = moment(date)
var companyId = req.user.companyId
 

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

  Test.find({type2:"online assignment",teacherId:teacherId,year:year,term:term},function(err, docs){
//console.log(docs,'777')
    if(docs){


    for(var i = 0;i<docs.length;i++){
      let sdate = docs[i].dateValue
      if(sdate >= startValue && sdate <= endValue){
arr.push(docs[i])
//console.log(arr,'arr333')
      }
    }
  }
      
    console.log(arr,'arr')
        res.render("exam/assgtList", {
          listX:arr,pro:pro,
          
        });
    
});
    
  })

//outputs students who have submitted assignmets and teacher can download the assignment and enter marks
router.get('/viewAssignments/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user.uid

 TestX.find({type2:'online assignment',submissionStatus:'submitted',teacherId:uid,quizId:id},function(err,docs){
  let arr=[]
  for(var i = docs.length - 1; i>=0; i--){

    arr.push(docs[i])
  }
res.render('teachers/assgtList',{listX:arr,pro:pro,id:id})
  })

})





router.post('/viewAssignments/:id',isLoggedIn,teacher,function(req,res){
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

  TestX.find({type2:'online assignment',submissionStatus:'submitted',teacherId:teacherId,quizId:id,year:year,term:term},function(err, docs){
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
        res.render("teachers/assgtList", {
          listX:arr,id:id,pro:pro,
          
        });
    
});
    
  })
//ouputs the assignment with the question and marks
router.get('/viewAssignment/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user.uid
 Test.findById(id,function(err,doc){
res.render('teachers/assgt',{doc:doc,pro:pro})
  })

})



router.get('/viewPending/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user
  var uid = req.user.uid

 TestX.find({type2:'online assignment',submissionStatus:'pending',teacherId:uid,quizId:id},function(err,docs){
res.render('teachers/assgtListW',{listX:docs,pro:pro,id:id})
  })

})
//student registered subjects
router.get('/subjects',isLoggedIn,teacher,function(req,res){
     var pro = req.user
var uid = req.user.uid

TeacherSub.find({teacherId:uid},(err, docs) => {
if (!err) {
res.render('teachers/subjectList', {
 listX:docs, pro:pro

});
}
});



})







// role teacher 
router.get('/classWork',isLoggedIn,teacher,function(req,res){
  var id = req.user.testId
  var pro = req.user
 
  TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
    res.render('exam/resultUpdate',{     listX:arr,pro:pro})
  })

})



router.post('/classwork/',isLoggedIn,teacher,function(req,res){
  var pro =req.user
  var id = req.user.testId
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
        res.render("exam/resultUpdate", {
          listX:arr,pro:pro,
          
        });
    
});
    
  })
//
router.get('/viewClassWorkX',isLoggedIn,teacher,function(req,res){
  var id = req.user.testId
  var pro = req.user
  var teacherId = req.user.uid

  TestX.find({teacherId:teacherId},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
    res.render('exam/listX',{     listX:arr,pro:pro})
  })

})

//test List
router.get('/viewClassWork',isLoggedIn,teacher,function(req,res){
  var id = req.user.testId
  var pro = req.user
  var teacherId = req.user.uid
  var term = req.user.term

  var n = moment()
var year = n.format('YYYY')
  Test.find({teacherId:teacherId,year:year,term,type:"Class Test"},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
    res.render('exam/list',{     listX:arr,pro:pro})
  })

})



router.post('/viewClasswork/',isLoggedIn,teacher,function(req,res){
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


  Test.find({teacherId:teacherId,term:term,year:year},function(err, docs){
//console.log(docs,'777')
    if(docs){


    for(var i = 0;i<docs.length;i++){
      let sdate = docs[i].dateValue
      if(sdate >= startValue && sdate <= endValue){
arr.push(docs[i])
//console.log(arr,'arr333')
      }
    }
  }
      
    //console.log(arr,'arr')
        res.render("exam/list", {
          listX:arr,id:id,pro:pro,
          
        });
    
});
    
  })
  
//view test
router.get('/viewClassWork/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user
  var teacherId = req.user.uid

  TestX.find({quizId:id},function(err,docs){
    let arr=[]
    for(var i = docs.length - 1; i>=0; i--){

      arr.push(docs[i])
    }
    res.render('exam/resultUpdate',{ id:id,    listX:arr,pro:pro})
  })

})




router.post('/viewClasswork/:id',isLoggedIn,teacher,function(req,res){
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


  TestX.find({quizId:id},function(err, docs){
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
        res.render("exam/resultUpdate", {
          listX:arr,id:id,pro:pro,
          
        });
    
});
    
  })
//calendar Chart

router.post('/calendarChart',isLoggedIn,teacher,function(req,res){
  var uid = req.user.uid

  var arr = []
 Lesson.find({teacherId:uid},function(err,docs){
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



//teacher lesson timetable
/*
router.get('/timetable',isLoggedIn, (req, res) => {
     var pro = req.user
var term = req.user.term
var m = moment();
var uid = req.user.uid
var year = m.format('YYYY')
var companyId = req.user.companyId
Lesson.find({companyId:companyId,term:term,year:year,teacherId:uid},(err, docs) => {
if (!err) {
res.render("teacher/timetable", {
   list:docs,pro:pro
  
});
}
});
});*/

router.get('/timetable',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var term = req.user.term
var m = moment();
var uid = req.user.uid

res.render("teachers/timetable",{pro:pro});

});


router.get('/events',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var term = req.user.term
var m = moment();
var uid = req.user.uid

res.render("teachers/events");

});



router.get('/examList',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var term = req.user.term
var m = moment();
var uid = req.user.uid

res.render("teachers/timetableExam",{pro:pro});

});


//view classWork results
router.get('/viewClassWork2',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var uid = req.user.uid
var term = req.user.term
var year = req.user.year

Exam.find({uid:uid, term:term, year:year},(err, docs) => {
  
if (!err) {
   res.render("exam/examListX", {
      list:docs, pro:pro
     
   });
}
});
});



//role teacher


///////subject batch
router.get('/subBatch',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var successMsg = req.flash('success')[0];
   res.render('exam/batch2',{pro:pro,successMsg: successMsg, noMessages: !successMsg})
})



router.post('/subBatch',isLoggedIn,teacher,  function(req,res){
  var subjectCode = req.body.subjectCode;
  var subject = req.body.subject
  var grade = req.body.grade
  var id = req.user._id
 var icon = req.body.icon

  
  
  req.check('subject','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  

  
  var errors = req.validationErrors();
   
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
   // res.render('exam/batch2',{ errors:req.session.errors,pro:pro})

   req.flash('success', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/subBatch');
  
  }
  
  else {
  
  TeacherSub.findOne({'subjectName':subject,'subjectCode':subjectCode,'grade':grade})
  .then(sub =>{
  
    if(sub){

   
     
            User.findByIdAndUpdate(id,{$set:{subjects:subject,subjectCode:subjectCode,grade:grade,icon:icon}}, function(err,coc){
          
        
    })
    res.redirect('/teacher/classWorkBatch')
  }else{
    console.log('ma1')
    req.flash('success', 'Subject Does Not Exist!');
   
    
    res.redirect('/teacher/subBatch');
   //res.render('product/update',{}) 
  }

  
  
  })

}
  

  })



  //subbatch exam
  ///////subject batch
router.get('/subBatchExam',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var successMsg = req.flash('success')[0];
   res.render('exam/batch2Exam',{pro:pro,successMsg: successMsg, noMessages: !successMsg})
})



router.post('/subBatchExam',isLoggedIn,teacher,  function(req,res){
  var subjectCode = req.body.subjectCode;
  var subject = req.body.subject
  var grade = req.body.grade
  var id = req.user._id
 var icon = req.body.icon
  
  
  req.check('subject','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  

  
  var errors = req.validationErrors();
   
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
   // res.render('exam/batch2',{ errors:req.session.errors,pro:pro})

   req.flash('success', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/subBatchExam');
  
  }
  
  else {
  
  TeacherSub.findOne({'subjectName':subject,'subjectCode':subjectCode,'grade':grade})
  .then(sub =>{
  
    if(sub){

   
     
            User.findByIdAndUpdate(id,{$set:{subjects:subject,subjectCode:subjectCode,grade:grade,icon:icon}}, function(err,coc){
          
        
    })
    res.redirect('/teacher/batchExam')
  }else{
    console.log('ma1')
    req.flash('danger', 'Subject Does Not Exist!');
   
    
    res.redirect('/teacher/subBatchExam');
   //res.render('product/update',{}) 
  }

  
  
  })

}
  

  })



  
///////subject batch
router.get('/assignmentBatch',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var successMsg = req.flash('success')[0];
   res.render('teachers/batch2',{pro:pro,successMsg: successMsg, noMessages: !successMsg})
})



router.post('/assignmentBatch',isLoggedIn,teacher,  function(req,res){
  var subjectCode = req.body.subjectCode;
  var subject = req.body.subject
  var grade = req.body.grade
  var id = req.user._id
 var icon = req.body.icon

  
  
  req.check('subject','Enter Subject').notEmpty();
  req.check('subjectCode','Enter Subject Code').notEmpty();
  

  
  var errors = req.validationErrors();
   
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
   // res.render('exam/batch2',{ errors:req.session.errors,pro:pro})

   req.flash('success', req.session.errors[0].msg);
       
        
        res.redirect('/teacher/assignmentBatch');
  
  }
  
  else {
  
  TeacherSub.findOne({'subjectName':subject,'subjectCode':subjectCode,'grade':grade})
  .then(sub =>{
  
    if(sub){

   
     
            User.findByIdAndUpdate(id,{$set:{subjects:subject,subjectCode:subjectCode,grade:grade,icon:icon}}, function(err,coc){
          
        
    })
    res.redirect('/teacher/assgt')
  }else{
    console.log('ma1')
    req.flash('success', 'Subject Does Not Exist!');
   
    
    res.redirect('/teacher/assignmentBatch');
   //res.render('product/update',{}) 
  }

  
  
  })

}
  

  })
router.get('/autocompleteSubX/',isLoggedIn,teacher, function(req, res, next) {

   
  var regex= new RegExp(req.query["term"],'i');
  var teacherName = req.user.fullname

 
  var uidFilter =TeacherSub.find({teacherName:teacherName, subjectCode:regex},{'subjectCode':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);

  
  uidFilter.exec(function(err,data){
 

console.log('data',data)

var result=[];

if(!err){
   if(data && data.length && data.length>0){
     data.forEach(sub=>{

      
   

        
       let obj={
         id:sub._id,
         label: sub.subjectCode,

   
        
     

         
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
router.post('/autoSubX',isLoggedIn,teacher,function(req,res){
  var code = req.body.code
 

TeacherSub.find({subjectCode:code},function(err,docs){
 if(docs == undefined){
   res.redirect('/dash')
 }else

    res.send(docs[0])
  })


})
 

//creating batch for classwork results
router.get('/classWorkBatch',isLoggedIn,teacher,  function(req,res){
  var arr = []
  var arr1 = []
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user
 
  var subject = req.user.subjects
  var subjectCode = req.user.subjectCode
  var grade = req.user.grade
  var class1 = req.user.class1
  var term = req.user.term

  
  
  
  Class1.find({}, function(err,docs){
    Topic.find({subjectCode:subjectCode},function(err,zoc){
  
   var arr2 = zoc
  var arr1 = docs;  
  
  res.render('exam/batch',{ arr1:arr1,arr2:arr2,class1:class1,term:term, user:user, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade})
  
  })
  })
  
  })




router.post('/classWorkBatch',isLoggedIn,teacher,  function(req,res){
  var pro = req.user
var class1 = req.body.class1;
var subject = req.body.subject;
var subjectCode = req.body.subjectCode;
var date = req.body.date;
var id = req.user._id;
var teacherId = req.user.uid
var term = req.body.term;
var type = req.body.type
var grade = req.body.grade
var stdNum, grade;

let arr = []
let arr1 = []
var teacher = req.user.fullname
var m = moment(date)
var year = m.format('YYYY')
var month = m.format('MMMM')
var numDate = m.valueOf()
var mformat = m.format("L")
var topic = req.body.topic
var possibleMark = req.body.possibleMark
var icon = req.user.icon

var displayFormat = m.format('MMMM Do YYYY')


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

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.errors = errors;
req.session.success = false
res.render('exam/batch',{errors:req.session.errors, arr1:arr1,pro:pro,subject:subject,subjectCode:subjectCode,grade:grade})
})


}

else{

Test.findOne({'date':date,'class1':class1,'subjectCode':subjectCode,'type':type,'topic':topic })
.then(tes =>{
if(tes){ 

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.message = {
type:'errors',
message:'Test Exists'
}     
res.render('exam/batch', {
 message:req.session.message, arr1:arr1,pro:pro})

})


}else{


var test = Test();
test.date = date;
test.subject = subject;
test.subjectCode = subjectCode;
test.class1 = class1;
test.year = year;
test.name = date +" "+class1;
test.month  = month;
test.numDate = numDate
test.teacher = teacher;
test.numberOfStudents = 0;
test.passRate = 0;
test.term = term;
test.topic = topic;
test.highScore = 0
test.lowestScore=0;
test.numPasses=0
test.avgMark=0
test.possibleMark = possibleMark
test.type = type
test.filename = "null"
test.fileId = "null"
test.type2 = 'offline'
test.type3 = 'class'
test.grade = req.body.grade;
test.level = 'highschool';

test.status = 'null'
test.timeLeft= 'null'
test.examStatus = 'null'
test.examLink = 'null'
test.time = 'null'
test.mformat = mformat
test.teacherId = teacherId
test.teacherName = teacher
test.quizNo = 0
test.quizBatch = 0
test.dateValue = numDate
test.quizId = 'null'
test.duration =0
test.status2 = 'null'
test.dateValue2= 0
test.icon = icon
test.status3= 'null'
test.displayFormat = displayFormat
test.question = 'null'


test.save()
.then(tesn =>{



User.findByIdAndUpdate(id,{$set:{testId:tesn._id}}, function(err,trocs){

console.log(trocs)



})

StudentSub.find({class1:class1, subjectCode:subjectCode},function(err,zoc){
  for(var i = 0; i<zoc.length;i++){
    var test = new TestX();
test.uid = zoc[i].studentId;
test.fullname = zoc[i].studentName;
test.grade = grade;
test.class1 = class1;
test.date = date
test.teacher = req.user.fullname;
test.teacherId = teacherId;
test.mark = 0;
test.dateValue = numDate
test.dateValueD =0
test.status = 'null'
test.displayFormat = 'null'
test.mformat = mformat
test.mformatD = 0
test.question = 0;
test.assignmentId = 'null'
test.filename = 'null'
test.fileId = 'null'
test.mformatS = 'null'
test.dateValueS = 0
test.displayFormatS = 'null'
test.submissionStatus = 'null'
test.year = year
test.month = month
test.symbol = 'null';
test.term = term
test.result = "null";
test.subject = subject
test.subjectCode = subjectCode
test.percentage = 0
test.possibleMark = possibleMark;
test.type = type
test.color = 'null'
test.style = 'null'
test.icon = icon
test.deadline = 'null'
test.size = 0
test.topic = topic
test.quizId = tesn._id

test.type2 = 'offline'
test.type3 = 'class'
test.status3 = 'null'
test.type = type
test.photo = zoc[i].photo
test.save()
.then(tes =>{

})
  }

})

//notifications






res.redirect('/teacher/classWork')



})
}

})



}


})
///////



//posting Exam

router.get('/batchExam',isLoggedIn,teacher,  function(req,res){
  var arr = []
  var arr1 = []
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];

  var subject = req.user.subjects
  var subjectCode = req.user.subjectCode
  var grade = req.user.grade
  var class1 =  req.user.class1
  
  
  
  Class1.find({}, function(err,docs){
    Topic.find({subjectCode:subjectCode},function(err,zoc){
  
   var arr2 = zoc
  var arr1 = docs;  
  
  res.render('exam/batchExam',{ arr1:arr1,arr2:arr2,class1:class1, user:user, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  
  })
  })
  
  })




router.post('/batchExam',isLoggedIn,teacher,  function(req,res){
  var pro = req.user
var class1 = req.body.class1;
var subject = req.body.subject;
var subjectCode = req.body.subjectCode;
var date = req.body.date;
var id = req.user._id;
var teacherId = req.user.uid
var term = req.body.term;
var type = req.body.type
var grade = req.body.grade
var stdNum, grade;
console.log(date,'tikuhwina')
let arr = []
let arr1 = []
var teacher = req.user.fullname
var m = moment(date)
var year = m.format('YYYY')
var month = m.format('MMMM')
var numDate = m.valueOf()
var mformat = m.format("L")
var topic = 'null'
var possibleMark = req.body.possibleMark
var icon = req.user.icon

var displayFormat = m.format('MMMM Do YYYY')


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

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.errors = errors;
req.session.success = false
//res.render('exam/batchExam',{errors:req.session.errors, arr1:arr1,pro:pro,subject:subject,subjectCode:subjectCode,grade:grade})
req.flash('danger', req.session.errors[0].msg);
         
          
res.redirect('/teacher/batchExam');
})


}

else{

Test.findOne({'date':date,'class1':class1,'subjectCode':subjectCode,'type':type,'topic':topic })
.then(tes =>{
if(tes){ 

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
/*req.session.message = {
type:'errors',
message:'Test Exists'
}     
res.render('exam/batchExam', {
 message:req.session.message, arr1:arr1,pro:pro})*/

 req.flash('danger', 'Exam Exists');
   
 res.redirect('/teacher/batchExam');

})


}else{



var test = Test();

test.subject = subject;
test.subjectCode = subjectCode;
test.class1 = class1;
test.year = year;
test.name = date +" "+class1;
test.month  = month;
test.numDate = numDate
test.teacher = teacher;
test.numberOfStudents = 0;
test.passRate = 0;
test.term = term;
test.topic = topic;
test.highScore = 0
test.lowestScore=0;
test.numPasses=0
test.status3= 'null'
test.avgMark=0
test.possibleMark = possibleMark
test.type = 'Final Exam'
test.type2 = 'null'
test.type3 = 'exam'
test.grade = req.body.grade;
test.level = 'highschool';
test.filename = "null"
test.fileId = "null"
test.status = 'null'
test.timeLeft= 'null'
test.examStatus = 'null'
test.examLink = 'null'
test.time = 'null'
test.mformat = mformat
test.teacherId = teacherId
test.teacherName = teacher
test.quizNo = 0
test.quizBatch = 0
test.dateValue = numDate
test.quizId = 'null'
test.duration =0
test.status2 = 'null'
test.dateValue2= 0
test.icon = icon
test.displayFormat = displayFormat
test.question = 'null'
test.date = date;


test.save()
.then(tesn =>{



User.findByIdAndUpdate(id,{$set:{testId:tesn._id}}, function(err,trocs){

console.log(trocs)



})

StudentSub.find({class1:class1, subjectCode:subjectCode},function(err,zoc){
  for(var i = 0; i<zoc.length;i++){
    var test = new TestX();
test.uid = zoc[i].studentId;
test.fullname = zoc[i].studentName;
test.grade = grade;
test.class1 = class1;
test.date = date
test.teacher = req.user.fullname;
test.teacherId = teacherId;
test.mark = 0;
test.dateValue = numDate
test.dateValueD =0
test.status = 'null'
test.displayFormat = 'null'
test.mformat = mformat
test.mformatD = 0
test.question = 0;
test.comments = "null"
test.assignmentId = 'null'
test.filename = 'null'
test.fileId = 'null'
test.mformatS = 'null'
test.dateValueS = 0
test.displayFormatS = 'null'
test.submissionStatus = 'null'
test.year = year
test.month = month
test.symbol = 'null';
test.term = term
test.result = "null";
test.subject = subject
test.subjectCode = subjectCode
test.percentage = 0
test.possibleMark = possibleMark;
test.type = 'Final Exam'
test.color = 'null'
test.style = 'null'
test.icon = icon
test.deadline = 'null'
test.size = 0
test.topic = topic
test.quizId = tesn._id

test.type2 = 'null'
test.type3 = 'exam'
test.status3 = 'null'
test.type = type
test.photo = zoc[i].photo
test.save()
.then(tes =>{

})
  }
})


//notifications






res.redirect('/teacher/examMarks')



})
}

})



}


})


router.post('/grade/update/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user

  var m = moment()
  var year = m.format('YYYY')
  var month = m.format('MMMM')
  var dateValue = m.valueOf()
  var mformat = m.format("L")
  var date = m.toString()
  var quan = req.body.code
  TestX.findById(id,function(err,doc){
    let possibleMark = doc.possibleMark
  
   // if(doc.stockUpdate == "no"){
  
  
    let reg = /\d+\.*\d*/g;
  
    let result = quan.match(reg)
    let currentMark = Number(result)
    var percentageX = currentMark / possibleMark
    var percentageXX = percentageX * 100
    let percentage = Math.round(percentageXX)
    percentage.toFixed(2)
   
 TestX.findByIdAndUpdate(id,{$set:{mark:currentMark,percentage:percentage}},function(err,doc){

 })     
      
  
  
    Grade.find({},function(err,qocs){

      for(var i = 0; i<qocs.length; i++){
      let symbol = qocs[i].symbol
      let from = qocs[i].from
      let to = qocs[i].to
      
      if(percentage >= from && percentage <= to ){
      TestX.findByIdAndUpdate(id,{$set:{symbol:symbol,status3:'recorded'}},function(err,mocs){
      
      
      })
      
      }
      }
      
      
      })
      
      if(percentage >= 50){
      
      TestX.findByIdAndUpdate(id,{$set:{result:'pass'}},function(err,mocs){
      
      
      })
      }else
      
      TestX.findByIdAndUpdate(id,{$set:{result:'fail'}},function(err,mocs){
      
      
      })
  
  
  
  
 /* }else{
    console.log('null')
  
    ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
  
    })
  }*/
  res.send(doc)
})
  })



///exam results


// role teacher 
router.get('/examMarks',isLoggedIn,teacher,function(req,res){
  var id = req.user.testId
  var pro = req.user
 
  TestX.find({quizId:id},function(err,docs){
    res.render('exam/finalExamUpdate',{     listX:docs,pro:pro})
  })

})



router.post('/examMarks/',isLoggedIn,teacher,function(req,res){
  var pro =req.user
  var id = req.user.testId
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
        res.render("exam/finalExamUpdate", {
          listX:arr,pro:pro,
          
        });
    
});
    
  })



  router.post('/comment/update/:id',isLoggedIn,teacher,function(req,res){
    var id = req.params.id
    var pro = req.user
  
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var dateValue = m.valueOf()
    var mformat = m.format("L")
    var date = m.toString()
    var comments = req.body.code
    TestX.findById(id,function(err,doc){
      //let possibleMark = doc.possibleMark
    
     // if(doc.stockUpdate == "no"){
    
    
     /* let reg = /\d+\.*\d*/ /*g;
    
      let result = quan.match(reg)
      let currentMark = Number(result)
      var percentageX = currentMark / possibleMark
      var percentageXX = percentageX * 100
      let percentage = Math.round(percentageXX)
      percentage.toFixed(2)*/
     
   TestX.findByIdAndUpdate(id,{$set:{comments:comments}},function(err,doc){
  
   })     
        
    
    
     
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })


/////attendance register

router.get('/attendanceBatch',isLoggedIn,teacher,  function(req,res){
  var arr = []
  var arr1 = []
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
  var subject = req.user.subjects
  var subjectCode = req.user.subjectCode
  var grade = req.user.grade
  var class1 = req.user.class1
  
  
  
  Class1.find({}, function(err,docs){
    Topic.find({subjectCode:subjectCode},function(err,zoc){
  
   var arr2 = zoc
  var arr1 = docs;  
  
  res.render('attendance/batchAtt',{ arr1:arr1,arr2:arr2,class1:class1, user:user, pro:pro, subject:subject,subjectCode:subjectCode, grade:grade,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
  
  })
  })
  
  })




router.post('/attendanceBatch',isLoggedIn,teacher,  function(req,res){
  var pro = req.user
var class1 = req.body.class1;
var subject = 'null';
var subjectCode = 'null';
var date = req.body.date;
var id = req.user._id;
var teacherId = req.user.uid
var term = req.body.term;
var type = req.body.type
var grade = req.body.grade
var stdNum, grade;
console.log(date,'tikuhwina')
let arr = []
let arr1 = []
var teacher = req.user.fullname
var m = moment(date)
var day = m.format('DDDD')
var year = m.format('YYYY')
var month = m.format('MMMM')
var numDate = m.valueOf()
var mformat = m.format("L")

var time = req.body.time
var icon = req.user.icon

var displayFormat = m.format('MMMM Do YYYY')


/*
Class1.find({class1:classX},function(err,docs){
//grade = docs[0].grade
console.log(docs,'horror')

})
*/

req.check('class1','Enter Class').notEmpty();


req.check('date','Enter Date').notEmpty();


var errors = req.validationErrors();

if (errors) {

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.errors = errors;
req.session.success = false
/*res.render('attendance/batchAtt',{errors:req.session.errors, arr1:arr1,pro:pro,subject:subject,subjectCode:subjectCode,grade:grade})*/

req.flash('danger', req.session.errors[0].msg);
       
        
res.redirect('/teacher/attendanceBatch');
})


}

else{

Attendance.findOne({'date':date,'time':time,'class1':class1,'subjectCode':subjectCode,'type':type,})
.then(tes =>{
if(tes){ 

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
/*req.session.message = {
type:'errors',
message:'Test Exists'
}     */
/*res.render('attendance/batchAtt', {
 message:req.session.message, arr1:arr1,pro:pro})*/
 req.flash('danger', 'Register already marked');
  
 res.redirect('/teacher/attendanceBatch') 

})


}else{



var test = Attendance();

test.subject = subject;
test.subjectCode = subjectCode;
test.class1 = class1;
test.year = year;
test.name = date +" "+class1;
test.month  = month;
test.numDate = numDate
test.teacher = teacher;
test.term = term;
test.day = day
test.time = time;
test.color = 'null';
test.style = 'null';
test.type = type
test.grade = req.body.grade;
test.status = 'null'
test.regId = 'null'
test.mformat = mformat
test.teacherId = teacherId
test.teacherName = teacher

test.icon = icon

test.date = date;


test.save()
.then(tesn =>{



User.findByIdAndUpdate(id,{$set:{regId:tesn._id}}, function(err,trocs){

console.log(trocs)

Attendance.findByIdAndUpdate(tesn._id,{$set:{regId:tesn._id}},function(err,jocs){

})

})

StudentSub.find({class1:class1 /*subjectCode:subjectCode*/},function(err,zoc){
  for(var i = 0; i<zoc.length;i++){
    var test = new AttendanceReg();
test.uid = zoc[i].studentId;
test.fullname = zoc[i].studentName;
test.grade = grade;
test.day = day;
test.class1 = class1;
test.date = date
test.time = time;
test.teacher = req.user.fullname;
test.teacherId = teacherId;
test.status = 'Present'
test.mformat = mformat
test.comments = "null"
test.year = year
test.month = month
test.term = term
test.regId= tesn._id
test.subject = subject
test.subjectCode = subjectCode
test.type = type
test.color = 'null'
test.style = 'null'
test.icon = icon




test.photo = zoc[i].photo
test.save()
.then(tes =>{

})
  }
})


//notifications






res.redirect('/teacher/attReg')



})
}

})



}


})



///mark reg
// role teacher 
router.get('/attReg',isLoggedIn,teacher,function(req,res){
  var id = req.user.regId
  var pro = req.user
 
  AttendanceReg.find({regId:id},function(err,docs){
    res.render('attendance/regUpdate',{     listX:docs,pro:pro})
  })

})



router.post('/attReg/',isLoggedIn,teacher,function(req,res){
  var pro =req.user
  var id = req.user.testId
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

  AttendanceReg.find({regId:id},function(err,docs){
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
        res.render("attendance/regUpdate", {
          listX:arr,pro:pro,
          
        });
    
});
    
  })


//absent comments

router.post('/comment/updateAtt/:id',isLoggedIn,teacher,function(req,res){
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

/*
  router.get('/late/:id',isLoggedIn, (req, res) => {
    var id
 AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Late'}},function(err,docs){
id = docs[0].regId

res.redirect('/teacher/viewLessonFile/'+id)
 })

    })
  
  router.get('/absent/:id',isLoggedIn, (req, res) => {
    var id 
 AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Absent'}},function(err,docs){
   console.log(docs,'docs')
  id = docs.regId

  console.log(id,'regId')
  res.redirect('/teacher/viewLessonFile/'+id)
 })

    })*/



    router.post('/late/:id',isLoggedIn, (req, res) => {
      var id = req.params.id
  console.log(id,'id')
   AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Late'}},function(err,docs){
  
    if(!err){
  
      id = docs.regId
      res.send(docs)
    
       }
  //res.redirect('/teacher/viewAttendanceFile/'+id)
   })
  
      })
  
      router.post('/present/:id',isLoggedIn, (req, res) => {
        var id = req.params.id
    console.log(id,'id')
     AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Present'}},function(err,docs){
    
      if(!err){
    
        id = docs.regId
        res.send(docs)
      
         }
    //res.redirect('/teacher/viewAttendanceFile/'+id)
     })
    
        })
    
    router.post('/absent/:id',isLoggedIn, (req, res) => {
      var id 
   AttendanceReg.findByIdAndUpdate(req.params.id,{$set:{status:'Absent'}},function(err,docs){
     console.log(docs,'docs')
  
     if(!err){
  
    id = docs.regId
    res.send(docs)
  
     }
    /*console.log(id,'regId')
    res.redirect('/hostel/viewAttendanceFile/'+id)*/
   })
  
      })







///reg folder
/*
router.get('/folderReg',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
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

          res.render('teachrFolderReg/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})
*////typeFolderReg/:id

router.get('/folderReg',isLoggedIn,teacher,function(req,res){
  var pro = req.user
  var id = req.params.id
  var m = moment()
  var year = m.format('YYYY')
  var class1 = req.user.class1





    res.render('teachrFolderReg/fileAssgt2',{id:id,pro:pro,class1:class1})



})




router.get('/typeFolderReg',isLoggedIn,function(req,res){
  var pro = req.user
  var m = moment()
  var year = m.format('YYYY')
  var uid = req.user._id
  var arr = []
  var m = moment()
    var year = m.format('YYYY')
  User.findByIdAndUpdate(uid,{$set:{hostelYear:year}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('teachrFolderReg/month',{pro:pro,listX:docs})

  })
  
})



/*
router.get('/classFolderReg/:id',isLoggedIn,teacher,function(req,res){
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

          res.render('teachrFolderReg/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject})

    })
  })
}
  })
})

*/


















router.get('/typeFolderClassReg/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
   var class1 = req.user.class1
  var month = req.params.id
  var year = m.format('YYYY')

  var mformat = m.format("L")
  var pro = req.user
 
     
 
  
 
    Attendance.find({class1:class1,term:term,month:month,year:year,type:'Class Register'},function(err,locs){
      let arr=[]
      for(var i = locs.length - 1; i>=0; i--){
  
        arr.push(locs[i])
      }
      res.render('teachrFolderReg/assgtX1',{listX:arr,pro:pro,id:id,class1:class1})
    })
  


  
  })
  



///view lesson

router.get('/viewLessonFile/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var pro = req.user
Attendance.findById(id,function(err,loc){
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
   AttendanceReg.find({regId:id},function(err,docs){
  let month = docs[0].month

res.render('teachrFolderReg/assgtList',{listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
class1:class1,month:month})
  })
})
})
})
})
}
})
})



  router.get('/typeFolderExamReg/:id',isLoggedIn,teacher,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var year = 2023
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
      
      Attendance.find({class1:class1,subjectCode:subjectCode,term:term,year:year,type:'Exam Register'},function(err,locs){
        
        res.render('teachrFolderReg/assgtX2',{listX:locs,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
          class1:class1,teacherName:teacherName,subject:subject,id:id
        })
      })
    
    })
    
  })
  }
  })
    
    })
  
  ///////
  
router.get('/folderRegFiles',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var class1 = req.user.class1
  var arr = []
  var m = moment()
    var year = m.format('YYYY')
 
    res.render('teachrFolderRegFiles/fileAssgt2',{id:id,pro:pro,class1:class1})


  
})


router.get('/typeFolderClassMonthlyRegFiles',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.params.id
  var uid = req.user._id
  var arr = []
  var m = moment()
    var year = m.format('YYYY')
  User.findByIdAndUpdate(uid,{$set:{hostelYear:id}},function(err,locs){

  })

  Month.find({}).sort({num:1}).then(docs=>{
     
          res.render('teachrFolderRegFiles/month',{pro:pro,listX:docs,id:id})

  })
  
})







router.get('/typeFolderMonthlyRegFiles/:id',isLoggedIn,teacher,function(req,res){
  var arr = []
  var month = req.params.id
  var errorMsg = req.flash('danger')[0];
  var successMsg = req.flash('success')[0];
   var term = req.user.term
   var m = moment()
   var pro = req.user
   var year = m.format('YYYY')

   var date = req.user.invoCode
 ReportAtt.find({year:year,month:month},function(err,docs){
     if(docs){
 
   
      let arr=[]
      for(var i = docs.length - 1; i>=0; i--){
  
        arr.push(docs[i])
      }
 
 
 res.render('teachrFolderRegFiles/filesTerm2',{listX:arr,month:month,pro:pro,year:year,term:term,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
 }
 })
    
 })
 



router.get('/typeFolderDailyRegFiles/',isLoggedIn,teacher,function(req,res){
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


res.render('teachrFolderRegFiles/filesTerm',{listX:arr,pro:pro,year:year,term:term,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg}) 
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



//exam
router.get('/examBatchX',isLoggedIn,teacher,  function(req,res){
  var arr = []
  var arr1 = []
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user

  
  
  
  Class1.find({}, function(err,docs){
  var arr1 = docs;  
  
  res.render('exam/batchX',{ arr1:arr1, user:user, pro:pro})
  
  })
  
  })

router.post('/examBatch',isLoggedIn,teacher,  function(req,res){
     var pro = req.user
var class1 = req.body.class1;
var subject = req.body.subject;
var subjectCode = req.body.subjectCode;
var date = req.body.date;
var id = req.user._id;
var teacherId = req.user.uid
var term = req.body.term;
var type = req.body.type
var grade = req.body.grade
var stdNum, grade;

let arr = []
let arr1 = []
var teacher = req.user.fullname
var m = moment()
var year = m.format('YYYY')
var month = m.format('MMMM')
var numDate = m.valueOf()
var topic = req.body.topic
var possibleMark = req.body.possibleMark


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

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.errors = errors;
req.session.success = false
res.render('exam/batch',{errors:req.session.errors, arr1:arr1,pro:pro})
})


}

else{

Test.findOne({'date':date,'class1':class1,'subjectCode':subjectCode,'type':type })
.then(tes =>{
if(tes){ 

TeacherSub.find({teacherId:teacherId},function(err,docs){

for(var i = 0;i<docs.length;i++){
arr1.push(docs[i].class1);
}
req.session.message = {
type:'errors',
message:'Test Exists'
}     
 res.render('exam/batch', {
    message:req.session.message, arr1:arr1,pro:pro})
 
 })


}else


var test = Test();
test.date = date;
test.subject = subject;
test.subjectCode = subjectCode;
test.class1 = class1;
test.year = year;
test.name = date +" "+class1;
test.month  = month;
test.numDate = numDate
test.teacher = teacher;
test.numberOfStudents = 0;
test.passRate = 0;
test.term = term;
test.topic = topic;
test.highScore = 0
test.lowestScore=0;
test.numPasses=0
test.avgMark=0
test.possibleMark = possibleMark
test.type = type
test.grade = req.body.grade;
test.level = 'highschool';

test.status = 'null'
test.timeLeft= 'null'
test.examStatus = 'null'
test.examLink = 'null'
test.time = 'null'
test.teacherId = teacherId
test.teacherName = teacher
test.mformat = mformat
test.quizNo = 0
test.quizBatch = 0
test.quizId = 'null'
test.duration ='null'


test.save()
.then(tesn =>{

StudentSub.find({class1:class1, subjectCode:subjectCode},function(err,nocs){

stdNum = nocs.length - 1;

console.log(stdNum)
console.log(nocs.length,'wangu')

User.findByIdAndUpdate(id,{$set:{class1:class1, subjects:subject,examDate:date,term:term, classLength:stdNum,possibleMark:possibleMark,topic:topic, studentNum:0, type:type,subjectCode:subjectCode}}, function(err,trocs){

console.log(trocs)



})

//notifications
User.find({recRole:recRole},function(err,docs){
  
  for(var i = 0; i<docs.length;i++){

    let id = docs[i]._id
    var not = new Note();
    not.role = role
    not.subject = 'Online Quiz';
    not.message = 'Online Quiz on'+" "+date
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




})
res.redirect('/teacher/gradeX9')



})


})



}


})





//autocomplete teacherName & uid

router.get('/autocomplete/',isLoggedIn, function(req, res, next) {
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
router.post('/auto',isLoggedIn,function(req,res){
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














router.get('/gradeX9',isLoggedIn,teacher,function(req,res){
  res.redirect('/teacher/gradeX')
})







//role teacher
//adding results
router.get('/gradeX',isLoggedIn,teacher,  function(req,res){
var id = req.user._id;
var num = req.user.classLength;
var x = req.user.studentNum

var ocs
var class1 = req.user.class1
console.log(class1,'class')
   var pro = req.user

if(num == 0){
res.redirect('/teacher/examBatch')
}else

User.find({class1:class1, role:'student'},function(err,docs){
ocs= docs[x]
res.render('exam/gradeX', {user:ocs,use:req.user, pro:pro})
})



})


router.post('/gradeX',isLoggedIn,teacher, function(req,res){
var id = req.user._id;
var date = req.body.date

var uid = req.body.uid;
var teacherId = req.user.uid
var fullname = req.body.fullname;
var class1 = req.body.class1;
var grade = req.body.grade;
var mark = req.body.mark;
var term = req.user.term;
var m = moment(date)
var year = m.format('YYYY')
var month = m.format('MMMM')
var x = req.user.studentNum
var num = req.user.classLength;
var subject = req.user.subjects;
var subjectCode = req.user.subjectCode
var date = req.user.examDate
var pro = req.user
var type = req.body.type
var possibleMark = req.body.possibleMark
var percentageX = mark / possibleMark
var percentage = percentageX * 100
var topic = req.body.topic


console.log(x, num)

req.check('mark','Enter Student Mark').notEmpty();
req.check('uid','Enter Student ID').notEmpty();
req.check('fullname','Enter Student Name').notEmpty();
req.check('class1','Enter Class').notEmpty();



var errors = req.validationErrors();

if (errors) {

req.session.errors = errors;
req.session.success = false
res.render('exam/gradeX',{errors:req.session.errors,pro:pro})
}

else
{
var test = new TestX();
test.uid = uid;
test.fullname = fullname;
test.grade = grade;
test.class1 = class1;
test.date = date;
test.teacher = req.user.fullname;
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
test.quizId = 'null'


test.save()
.then(tes =>{
Grade.find({companyId:companyId},function(err,qocs){

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

TestX.findByIdAndUpdate(tes._id,{$set:{result:'pass'}},function(err,mocs){


})
}else

TestX.findByIdAndUpdate(tes._id,{$set:{result:'fail'}},function(err,mocs){


})



if(num == x){

User.findByIdAndUpdate(id,{$set:{studentNum:0,classLength:0, class1:"null"}}, function(err,docs){

 
})

res.redirect('/teacher/examBatch')


}else

x++
console.log('x',x)
User.findByIdAndUpdate(id,{$set:{studentNum:x}}, function(err,docs){


})

})

res.redirect('/teacher/gradeX1')
}


})


//role teacher
router.get('/gradeX1',isLoggedIn,teacher,  function(req,res){
res.redirect('/teacher/gradeX')
})



/*
router.get('/profile',isLoggedIn,teacher,  function(req,res){
  var pro = req.user
res.render('teachers/overview',{pro:pro})
})


router.post('/profile',isLoggedIn,teacher,upload.single('file'),function(req,res){

var pro = req.user

if(!req.file){
req.session.message = {
type:'errors',
message:'Select Picture'
}     
res.render('teachers/overview', {
user:req.body, message:req.session.message,pro:pro
}) 

} else
var imageFile = req.file.filename;
var id  = req.user._id;
console.log(imageFile)
console.log(id)
User.findByIdAndUpdate(id,{$set:{photo:imageFile}},function(err,data){ 





})

res.redirect('/teacher/profile')

//res.render('uploads/index',{title:'Upload File',records:data, success:success})






})
*/




router.get('/subjectsProfile/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  console.log(id,'idd')
  var pro = req.user
  User.findById(id,function(err,doc){
    let uid = doc.uid

    TeacherSub.find({teacherId:uid},function(err,locs){
      res.render('users/subjects6',{listX:locs,pro:pro,doc:doc,id:id})
    })
  })
 
})


router.get('/profile/',isLoggedIn,teacher,function(req,res){
  var id = req.user.id
  User.findById(id,function(err,doc){
    pro = req.user
 
  //var pro = req.user
  res.render('teachers/overview2',{pro:pro,id:id,doc:doc})
  
})
  })


router.get('/tests',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var uid= req.user.uid

Test.find({teacherId:uid, type2:'online quiz'},(err, docs) => {
if (!err) {
   res.render("teacherExam/resultXX", {
      list:docs, pro:pro
     
   });
}
});
});




router.get('/testsList',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var uid= req.user._id

Test.find({teacherId:uid, type2:'online quiz'},(err, docs) => {
if (!err) {
  let arr=[]
  for(var i = docs.length - 1; i>=0; i--){

    arr.push(docs[i])
  }
   res.render("teacherExam/listTest", {
      listX:arr, pro:pro
     
   });
}
});
});

//student results
router.get('/results',isLoggedIn,teacher, (req, res) => {
  var pro = req.user
var uid= req.user._id

TestX.find({teacherId:uid, type:'Class Test'},(err, docs) => {
if (!err) {
   res.render("teacherExam/result", {
      list:docs, pro:pro
     
   });
}
});
});




//student results - final exam
router.get('/examResults',isLoggedIn,teacher, (req, res) => {
var uid= req.user.uid
   var pro = req.user
 
TestX.find({teacherId:uid, type:'Final Exam'},(err, docs) => {
if (!err) {
   res.render("teacherExam/resultX", {
      list:docs, pro:pro
     
   });
}
});
});





router.get('/termInfo',isLoggedIn,teacher, function(req,res){
  var m = moment()
  var pro = req.user
  var year = m.format('YYYY')
  var term = req.user.term
 


FeesUpdate.find({term:term, year:year},(err, docs) => {
    if (!err) {
        res.render("teachers/newTerm", {
           list:docs, pro:pro
          
        });
    }
});
  
    })

  
  
  

//Create Exam
router.get('/quizBatch',isLoggedIn,teacher,  function(req,res){
  var user = req.user.term
  var teacherId = req.user.uid
  var pro = req.user

  
  
  
  Class1.find({}, function(err,docs){
  var arr1 = docs;  
  
  res.render('onlineQuiz/batchX',{ arr1:arr1, user:user, pro:pro})
    
  })
  

  
  })

router.post('/quizBatch',isLoggedIn,teacher,  function(req,res){
var icon = req.body.icon
var class1 = req.body.class1;
var subject = req.body.subject;
var subjectCode = req.body.subjectCode;
var date = req.body.date;
var id = req.user._id;
var duration = req.body.duration
var time = req.body.start
var type = req.body.type
var term = req.user.term
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
test.term = term;
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

router.post('/editQuiz/:id',isLoggedIn,teacher,upload.single('file'), function(req,res){
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


router.get('/set',isLoggedIn,teacher, function(req,res){
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



  
router.post('/set',isLoggedIn,teacher,upload.single('file'), function(req,res){
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
var year = 2024
var quizId = req.user.quizId
var id = req.user._id
var pro = req.user
var term = req.user.term
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
  let questionV = `<br> <br> ${questionVI} <img src="imageC/${fileIdV}" style="display:block;margin-left:auto;margin-right:auto;width:100%">`
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
  console.log(x,'xx')
  User.findByIdAndUpdate(id,{$set:{questNo:x}}, function(err,docs){
  })
  
  res.redirect('/teacher/set')
})



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



//notifications

router.get('/notify',isLoggedIn,teacher, function(req,res){
 var pro = req.user
  res.render('messagesTeachers/notifs',{pro:pro})
  })
  
  router.post('/notify',isLoggedIn,teacher, function(req,res){
              var m = moment()
              var year = m.format('YYYY')
              var numDate = m.valueOf()
              var date = m.toString()
              var subject = req.body.subject
              var message = req.body.message
              var role = req.user.role
              var recRole = 'student'
              var user = req.user.fullname
         
              console.log(role,'role')
              req.check('subject','Enter Subject').notEmpty();
              req.check('message','Enter Message').notEmpty();
            
             
                  
              
                    
                 
              var errors = req.validationErrors();
                  if (errors) {
              
                  
                    req.session.errors = errors;
                    req.session.success = false;
                    res.render('notifs',{ errors:req.session.errors,})
                    
                  
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
  











  router.post('/not/:id',isLoggedIn,teacher,function(req,res){
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
  
  
  
  
  router.get('/update',isLoggedIn,function(req,res){
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
  
  router.get('/nots',isLoggedIn,teacher, function(req,res){
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
  


  router.get('/nList',isLoggedIn,teacher,function(req,res){
    var id = req.user._id
    var m = moment()
    var pro = req.user
    console.log(m.valueOf(),'crap')
    Note.find({recId:id},function(err,docs){
      if(!err){
  
     
      res.render('/teacher/notList',{list:docs,pro:pro})
  
      }
    })
  })
  
  router.get('/notify/:id', isLoggedIn,teacher, function(req,res){
    var id = req.params.id
    var uid = req.user._id
    console.log(id,'id')
    var arr = []
    var pro = req.user
    Note.find({recId:uid,_id:id},function(err,tocs){
  
  let subject = tocs[0].subject
  let message = tocs[0].message
  
  
  
      
      res.render('/teacher/notView',{message:message,pro:pro, subject:subject})
    })
  
  })
  
//topic

router.get('/topics',isLoggedIn,teacher, function(req,res){
  
  var pro = req.user
  Class1.find({},function(err,loc){
    res.render('teachers/gradeX',{arr:loc,pro:pro})
  })

  })
  
router.post('/topics',isLoggedIn, function(req,res){
  var m = moment()
  var pro = req.user
  var year = m.format('YYYY')

  var subject = req.body.subject
  var subjectCode = req.body.subjectCode
  var grade = req.body.grade
  var class1 = req.body.class1
  var name = req.body.name
  var teacherId = req.user.uid
 

  req.check('subject','Enter Subject').notEmpty();
  req.check('class1','Enter Class').notEmpty();
  req.check('name','Enter Topic').notEmpty();
 
  

  
  
  var errors = req.validationErrors();
   
  if (errors) {

    req.session.errors = errors;
    req.session.success = false;
   // res.render('product/stock',{ errors:req.session.errors,pro:pro})
   req.flash('success', req.session.errors[0].msg);
       
        
   res.redirect('/teacher/topics');
  
  }
  else

 {

  Subject.findOne({'subjectCode':subjectCode})
  .then(hoc=>{

    if(hoc){
  var book = new Topic2();
  book.subjectName = subject
  book.subjectCode = subjectCode
  book.grade = grade
  book.teacherId = teacherId
  book.class1 = class1
  book.name = name
  book.status =  'null'
  book.year = year
  book.teacherId = teacherId
 


      
       
        book.save()
          .then(pro =>{

            Topic2.find({subjectCode:subjectCode,teacherId:teacherId,status:'null'},(err, docs) => {
              let size = docs.length - 1
              console.log(docs[size],'fff')
              res.send(docs[size])
                      })
        })
       
      
      }
    }) 

      }
})





router.post('/loadTopics',isLoggedIn, (req, res) => {
  var pro = req.user
  var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
  var code = req.user.code


  Topic2.find({code:code,status:'null', year:year},(err, docs) => {
 
    res.send(docs)
            })

  }); 

  router.post('/topic/update/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var pro = req.user
    
    var m = moment()
    var year = m.format('YYYY')
    var month = m.format('MMMM')
    var dateValue = m.valueOf()
    var mformat = m.format("L")
    var date = m.toString()
    var topic = req.body.code
    Topic2.findById(id,function(err,doc){
    
    
    
     
   Topic2.findByIdAndUpdate(id,{$set:{topic:topic}},function(err,doc){
  
   })     
        
    
    
    
    
    
   /* }else{
      console.log('null')
    
      ShopStock.findByIdAndUpdate(id,{$set:{stockUpdate:'yes'}},function(err,loc){
    
      })
    }*/
    res.send(doc)
  })
    })






router.get('/saveTopics/',isLoggedIn, function(req,res){
  var pro = req.user
 var receiver = req.user.fullname
 var code = req.params.id
 var uid = req.user._id
 var teacherId = req.user.uid

var m2 = moment()
var wformat = m2.format('L')
var year = m2.format('YYYY')
var dateValue = m2.valueOf()
var date = m2.toString()
var numDate = m2.valueOf()
var month = m2.format('MMMM')


//var mformat = m.format("L")



Topic2.find({status:'null'},function(err,locs){

for(var i=0;i<locs.length;i++){
let code = locs[i].subjectCode

let m = moment()
let year = m.format('YYYY')
let dateValue = m.valueOf()
let date = m.toString()
let numDate = m.valueOf()
let month = m.format('MMMM')
let idN = locs[i]._id
let class1 = locs[i].class1
let topic = locs[i].name
let subjectName = locs[i].subjectName
let subjectCode = locs[i].subjectCode


  Topic2.findByIdAndUpdate(idN,{$set:{status:'saved'}},function(err,pocs){

  })
  

  

  Subject.findOne({'subjectCode':code})
  .then(hoc=>{

    if(hoc){
  var book = new Topic();
  book.subjectName = subjectName
  book.subjectCode = subjectCode
  book.grade = hoc.grade
  book.name = topic
  book.class1 = class1
  book.teacherId = teacherId
  book.year = year 

      
       
        book.save()
          .then(pro =>{

            

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



req.flash('success', 'Topics Successfully Added');
res.redirect('/teacher/topics')
}) 
})



//////marks assessments
router.get('/folder',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
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

          res.render('teachrFolder/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})


//class

router.get('/classFolder/:id',isLoggedIn,teacher,function(req,res){
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

          res.render('teachrFolder/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject})

    })
  })
}
  })
})




router.get('/typeFolder/:id',isLoggedIn,teacher,function(req,res){
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



    res.render('teachrFolder/fileAssgt2',{id:id,pro:pro,id2:id2,id3:id3,subject:subject,class1:class1})
  })
})
  })
}
})
})

/////classTest type

router.get('/typeFolderTest/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var year = 2023
  var pro = req.user
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
      
      res.render('teachrFolder/assgtX1',{listX:locs,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,id:id,
        subjectName:subjectName,class1:class1})
    })
  })

  
})
}
})
  
  })
  
////////

router.get('/viewTestFile/:id',isLoggedIn,teacher,function(req,res){
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


res.render('teachrFolder/assgtList',{listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
class1:class1})
  })
})
})
})
})
}
})
})


router.post('/viewTestFile/:id',isLoggedIn,teacher,function(req,res){
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
      res.render("teachrFolder/assgtList", {
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
///////////




router.get('/typeFolderClass/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var year = 2024
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
      
      res.render('teachrFolder/assgtX2',{listX:locs,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
        class1:class1,teacherName:teacherName,subject:subject,id:id
      })
    })
  
  })
  
})
}
})
  
  })


 

  router.post('/typeFolderClass/:id',isLoggedIn,teacher,function(req,res){
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
          res.render("teachrFolder/assgtX2", {
            listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
            class1:class1,teacherName:teacherName,subject:subject,id:id
            
          });
      
  });
      
    })
      })
    }
    })
  })
  
  router.get('/openAssignmentFile/:id',isLoggedIn,function(req,res){
    var id = req.params.id
    var pro = req.user
    Test.findById(id,function(err,loc){
     
      res.render('students/openAssgt',{listX:loc,pro:pro})
    })
  
  })


  router.get('/classAssignmentFile/:id',isLoggedIn,teacher,function(req,res){
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

 
  res.render('teachrFolder/assgtList2',{listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
  class1:class1})
    })
  })
})
})
})
}
  })
})



router.post('/classAssignmentFile/:id',isLoggedIn,teacher,function(req,res){
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
        res.render("teachrFolder/assgtList2", {
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



////finalExam

router.get('/typeFolderExam/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var n = moment()
  var year = n.format('YYYY')
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
      
      res.render('teachrFolder/assgtX3',{listX:locs,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
      teacherName:teacherName,class1:class1,subject:subject,id:id})
    
  })
  })
  
})
  }
})
  
  })


  router.post('/typeFolderExam/:id',isLoggedIn,teacher,function(req,res){
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
          res.render("teachrFolder/assgtX3", {
            listX:arr,pro:pro,userId:userId,studentSubId:studentSubId,teacherSubId:teacherSubId,
            teacherName:teacherName,class1:class1,subject:subject,id:id
            
          });
      
  });
      
    })
      })
    }
    })
  })











////

router.get('/examFile/:id',isLoggedIn,teacher,function(req,res){
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


res.render('teachrFolder/assgtList3',{listX:docs,userId:userId,teacherSubId:teacherSubId,studentSubId:studentSubId,pro:pro,id:id,subject:subject,teacherName:teacherName,
class1:class1})
  })
})
})
})
})
}
})
})



router.post('/examFile/:id',isLoggedIn,teacher,function(req,res){
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
      res.render("teachrFolder/assgtList3", {
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





//////marks assessments
router.get('/repository',isLoggedIn,function(req,res){
  var pro = req.user
  var id = req.user._id
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

          res.render('repositoryT/folders2',{listX:arr,pro:pro,id:id,})

    })
  }
  })

})

//class

router.get('/classFolderRepo/:id',isLoggedIn,teacher,function(req,res){
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

          res.render('repositoryT/fileClass2',{listX:arr,pro:pro,id:id,id2:id2,subject:subject})

    })
  })
}
  })
})



router.get('/typeFolderT/:id',isLoggedIn,teacher,function(req,res){
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



    res.render('repositoryT/fileAssgt2',{id:id,pro:pro,id2:id2,id3:id3,subject:subject,class1:class1})
  })
})
  })
}
})
})

router.get('/typeFolderClassRepo/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var year = 2023
  var pro = req.user

  TeacherSub.findById(id,function(err,doc){
       if(doc){

      
    let  teacherSubId = doc._id
    let subjectCode = doc.subjectCode
    let subject = doc.subjectName
    
    StudentSub.find({subjectCode:subjectCode},function(err,vocs){
      if(vocs){
      let class1 = vocs[0].class1
      let id2 = vocs[0]._id    

    Test.find({subjectCode:subjectCode,term:term,year:year,type2:'online assignment attached',class1:class1},function(err,locs){
      
      res.render('repositoryT/files',{listX:locs,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,
      })
   
    
})

      }

  
})
    }
})
  
  })


  router.get('/typeFolderReportFiles/:id',isLoggedIn,teacher,function(req,res){
    var id = req.params.id
    var term = req.user.term
    var m = moment()
    var month = m.format('MMMM')
    var year = m.format('YYYY')
    var mformat = m.format('L')
    var pro = req.user
    var arr = []

  
    TeacherSub.findById(id,function(err,doc){
         if(doc){
  
        
      let  teacherSubId = doc._id
      let subjectCode = doc.subjectCode
      let subject = doc.subjectName
      
      StudentSub.find({subjectCode:subjectCode},function(err,vocs){
        if(vocs){
          let class1 = vocs[0].class1
          let id2 = vocs[0]._id    
         
       Report2.find({subjectCode:subjectCode,year:year},function(er,hocs){
        res.render('repositoryT/filesMonthly',{pro:pro,listX:hocs,month:month,year:year,id2:id2,teacherSubId:teacherSubId,subject:subject,class1:class1,id:id})
       })
  
      /*Test.find({subjectCode:subjectCode,term:term,year:year,type2:'online assignment attached',class1:class1},function(err,locs){
        
        res.render('repositoryT/files',{listX:locs,pro:pro,teacherSubId:teacherSubId,
          subject:subject,id:id,class1:class1,id2:id2,
        })
     
      
  })*/
  
        }
  
    
  })
      }
  })
    
    })
  



router.get('/typeFolderMaterial/:id',isLoggedIn,teacher,function(req,res){
  var id = req.params.id
  var term = req.user.term
  var m = moment()
  var mformat = m.format('L')
  var month = m.format('MMMM')
  var year = m.format('YYYY')
  var pro = req.user

  TeacherSub.findById(id,function(err,doc){
       if(doc){

      
    let  teacherSubId = doc._id
    let subjectCode = doc.subjectCode
    let subject = doc.subjectName
    
    StudentSub.find({subjectCode:subjectCode},function(err,vocs){
      if(vocs){
      let class1 = vocs[0].class1
      let id2 = vocs[0]._id    

    Learn.find({subjectCode:subjectCode,term:term,year:year,class1:class1},function(err,locs){
      
      res.render('repositoryT/files2',{listX:locs,pro:pro,teacherSubId:teacherSubId,
        subject:subject,id:id,class1:class1,id2:id2,
      })
   
    
})

      }

  
})
    }
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
  

  router.get('/downloadMonthlyReport/:id',isLoggedIn,teacher,function(req,res){
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



  router.get('/openMaterial/:id',(req,res)=>{
    var fileId = req.params.id
      const bucket = new mongodb.GridFSBucket(conn.db,{ bucketName: 'uploads' });
      gfs.files.find({_id: mongodb.ObjectId(fileId)}).toArray((err, files) => {
      
    
        const readStream = bucket.openDownloadStream(files[0]._id);
            readStream.pipe(res);
    
      })
     //gfs.openDownloadStream(ObjectId(mongodb.ObjectId(fileId))).pipe(fs.createWriteStream('./outputFile'));
    })
    

  /*router.get('/downloadAssgt/:id',isLoggedIn,teacher,function(req,res){
    Test.findById(req.params.id,function(err,doc){
      var name = doc.filename;
      res.download( './public/uploads/'+name, name)
    })  
  
  })


  
  router.get('/downloadMaterial/:id',isLoggedIn,teacher,function(req,res){
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
  
  
  


  /*
  router.post('/topics',isLoggedIn,teacher, function(req,res){
              var m = moment()
              var pro = req.user
              var year = m.format('YYYY')
         
              var subject = req.body.subject
              var subjectCode = req.body.subjectCode
              var grade = req.body.grade
              var class1 = req.body.class1
              var topic = req.body.name
              var companyId = req.user.companyId
         
            
              req.check('subject','Enter Subject').notEmpty();
              req.check('name','Enter Topic').notEmpty();
            
             
                  
              
                    
                 
              var errors = req.validationErrors();
                  if (errors) {
              
                    Class1.find({companyId:companyId},function(err,loc){ 
                    req.session.errors = errors;
                    req.session.success = false;
                    res.render('teachers/gradeX',{ errors:req.session.errors,arr:loc,pro:pro})
                    
                    })
                }
                else{
  
         
  
                var not = new Topic();
                not.name = topic
                not.subjectName = subject;
                not.subjectCode = subjectCode
                not.grade = grade;
                not.class1 = class1;
                not.year = year
                not.companyId = companyId;
               
               
  
        
                
                
             
  
                
                 
            
                 
        
                not.save()
                  .then(user =>{
                    
              })
  
  
            
            
               res.redirect('/teacher/topics')
  
            }
                            
  
                
  })
  

*/





router.get('/viewTopics/',isLoggedIn, (req, res) => {
  var pro = req.user
  var arr = []
  var id = req.params.id
  var arr = []
  var uid = req.user.uid
  Topic.find({teacherId:uid},(err, docs) => {

    if(docs){

       
      for(var i = 0;i<docs.length;i++){
        size = docs.length
     
          
         if(arr.length > 0 && arr.find(value => value.subjectName == docs[i].subjectName)){
                console.log('true')
               arr.find(value => value.subjectName == docs[i].subjectName)
             
              }else{
      arr.push(docs[i])

      let resultX = arr.map(function(element){
        //element.size = 0
        element.size = element.size + 1
          })
          }
  
        }
      }
      if (!err) {
          res.render("teachers/topic", {
             listX:arr,pro:pro
            
          });
      }
  });
  });



  router.get('/viewTopics/:id',isLoggedIn, (req, res) => {
    var pro = req.user
    var id = req.params.id
    console.log(id,'333')
    var arr = []

      Topic.find({subjectCode:id},(err, docs) => {
      

        if (!err) {
          res.render("teachers/topicList", {
             listX:docs,pro:pro
            
          });
      }

    
    })
       
  
    });

  

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
  res.render('onlineQuizTeacher/index',{id:id})
})

router.post('/quest',isLoggedIn,function(req,res){
var id = req.user._id
var code = req.body.code
QuestionT.find({teacherId:id,quizId:code},(err,docs)=>{
console.log(docs,'docs')
  res.send(docs)
})
})


router.post('/quest/:id',isLoggedIn,function(req,res){
var id = req.params.id
var code = req.body.code
QuestionT.findByIdAndUpdate(id,{$set:{stdAns:code}},function(err,doc){
 console.log(doc,'doc')
let stdAns = doc.stdAns
let answer = doc.answer
let activeNum = doc.stdAns
activeNum++

if(answer == code){
  QuestionT.findByIdAndUpdate(id,{$set:{finalAns:'correct',activeNum:activeNum}},function(err,poc){
console.log('yes')

})
}
else
  {

QuestionT.findByIdAndUpdate(id,{$set:{finalAns:'wrong',activeNum:activeNum}},function(err,not){
  console.log('yes')
      })

    }





res.send(doc)
})
})



router.post('/back/:id',function(req,res){
var id = req.params.id
var arr

QuestionT.findById(id,function(err,doc){

res.send(doc)
})
})


router.post('/fquest/',isLoggedIn,function(req,res){
var code = req.body.code
var arr
var companyId = req.user.companyId
console.log(code,'code')
var teacherId = req.user._id
var m = moment()
var year = m.format('YYYY')
var month = m.format('MMMM')
var mformat = m.format("L")
var numDate = m.valueOf()
  
  QuestionT.find({quizId:code,finalAns:'correct',teacherId:teacherId},function(err,docs){
    let mark = docs.length
QuestionT.find({quizId:code,teacherId:teacherId},function(err,tocs){
let possibleMark = tocs.length
for(var i = 0;i<tocs.length;i++){

  QuestionT.findByIdAndUpdate(tocs[i]._id,{$set:{status:'completed'}},function(err,nocs){

  })
}







})


     res.send(docs)
  })
 


   })
   



router.get('/test',function(req,res){
  QuestionT.find({},(err,docs)=>{
      console.log(docs)
      // res.send(docs)
     })
})





/////////


    //generate att rport
    router.get('/alloDayBatchAttX',isLoggedIn,  function(req,res){
      var pro = req.user
      var errorMsg = req.flash('danger')[0];
      var successMsg = req.flash('success')[0];
      res.render('records/alloAttDayBatch',{pro:pro,successMsg: successMsg,errorMsg:errorMsg, noMessages: !successMsg,noMessages2:!errorMsg})
      })
    
    
    
    
    
    ////
    
    router.post('/alloDayBatchAttX',isLoggedIn,  function(req,res){
      var id =req.user._id
      var date= req.body.date
    
      var m = moment()
      var displayFormat = m.format('MMMM Do YYYY')
      var dateValueOf = m2.valueOf()
      var year = m.format('YYYY')
      var pro = req.user
      var class1= req.user.class1
    
        
        
    
      req.check('date','Enter  Date').notEmpty();
     
     
     
        
      
        
        var errors = req.validationErrors();
         
        if (errors) {
          req.session.errors = errors;
          req.session.success = false;
         // res.render('product/dispatchCust',{ errors:req.session.errors,pro:pro})
    
         req.flash('danger', req.session.errors[0].msg);
           
            
         res.redirect('/teacher/alloDayBatchAtt');
    
    
        
        }
        
        else {
    
        
        
        Year.findOne({'year':year})
        .then(grower =>{
        if(grower){
       
       
    User.findByIdAndUpdate(id,{$set:{hostelYear:year,invoCode:date,class1:class1}},function(err,docs){
    
    })
    
     
    res.redirect('/teacher/reportGenAtt');
            
              
              
              
           
    
        
    
        
        }else{
    
          req.flash('danger', 'Date dont exist');
     
          res.redirect('/teacher/alloDayBatchAtt');
    
    
        
    
        }
        
        })
        
      }
        })
    

    router.get('/reportGenAtt',isLoggedIn,function(req,res){
      var class1 = req.user.class1
/*User.find({class1:class1,role:"student"},function(err,docs){
  console.log(docs,'docs')
  for(var i=0;i<docs.length;i++){
    let uid = docs[i].studentId
    console.log(uid)
     arrAttReg[uid]=[]
  }
 
})*/
arrAttReg[class1]=[]

res.redirect('/teacher/reportGen2Att')

    })
router.get('/reportGen2Att',isLoggedIn,function(req,res){

  var class1 = req.user.class1
  
console.log('vvx')
/*var dateX = req.user.hostelMonth
let m = moment(dateX)

var date =m.format('L')*/
  var year = req.user.hostelYear
//console.log(date,'mmmmm')
let date = req.user.invoCode
//var term = req.user.term

//let uid = "SZ125"


//TestX.find({year:year,uid:uid},function(err,vocs) {
  AttendanceReg.find({class1:class1,year:year,date:date}).lean().then(vocs=>{

  
for(var x = 0;x<vocs.length;x++){
  //size = docs.length
 // let subject = vocs[x].subject

   if( arrAttReg[class1].length > 0 && arrAttReg[class1].find(value => value.class1 == class1) ){
 
    arrAttReg[class1].push(vocs[x])
         //console.log(arr,'arrX')
        }
        
         
        
        
        else{
          arrAttReg[class1].push(vocs[x])
      
              
          } 


      

         


        }
        res.redirect('/teacher/reportGen3Att')
      })

    })
















    router.get('/reportGen3Att',isLoggedIn,function(req,res){
      //console.log(arrAttReg,'arr')
      var term = req.user.term
       var date = req.user.invoCode
      var m = moment()
      var month = m.format('MMMM')
        var year = m.format('YYYY')
        var mformat = m.format('L')
        var class1 = req.user.class1
        let filename = date+'_Register'+'.pdf'
        var head = req.user.fullname
    /*console.log(arr,'iiii')*/
   
    //console.log(docs,'docs')
   
    
    const compile = async function (templateName, arrAttReg){
      const filePath = path.join(process.cwd(),'templates',`${templateName}.hbs`)
    
      const html = await fs.readFile(filePath, 'utf8')
    
      return hbs.compile(html)(arrAttReg)
     
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
     const content = await compile('reportAtt',arrAttReg[class1])
    
    await page.setContent(content, { waitUntil: 'networkidle2'});
     //await page.setContent(content)
    //create a pdf document
    await page.emulateMediaType('screen')
    await page.evaluate(() => matchMedia('screen').matches);
    await page.setContent(content, { waitUntil: 'networkidle0'});
    //console.log(await page.pdf(),'7777')
    
    await page.pdf({
      //path:('../gitzoid2/reports/'+year+'/'+month+'/'+uid+'.pdf'),
      //  path:(`./public/eotReports/${year}/${term}/${month}`+'.pdf'),
      path:(`./public/attReports/${year}/${month}/${date}_Register`+'.pdf'),
      format:"A4",
      width:'30cm',
    height:'21cm',
      printBackground:true
    })


    var repo = new ReportAtt();

repo.subjectCode = 'null';
repo.month = month;
repo.filename = filename;
repo.fileId = 'null'
repo.year = year;
repo.date = date
repo.term = term
repo.type = "Class Register"
repo.save().then(poll =>{
console.log("Done creating pdf")
})



const file = await fs.readFile(`./public/attReports/${year}/${month}/${date}_Register`+'.pdf');
const form = new FormData();
form.append("file", file,filename);
//const headers = form.getHeaders();
//Axios.defaults.headers.cookie = cookies;
//console.log(form)
await Axios({
  method: "POST",
  url: 'http://localhost:9500/teacher/uploadAttReport',
  //url: 'https://portal.steuritinternationalschool.org/teacher/uploadAttReport',
  headers: {
    "Content-Type": "multipart/form-data"  
  },
  data: form
});
res.redirect('/teacher/dash')

    
    
    
    
    
    }catch(e) {
    
      console.log(e)
    
    
    }
    
    }) ()
    
   
     
    
    


  
    })










    router.post('/uploadAttReport',upload.single('file'),(req,res,nxt)=>{
      var fileId = req.file.id
      console.log(fileId,'Receipt fileId')
      var filename = req.file.filename
      console.log(filename,'filename')
      ReportAtt.find({filename:filename},function(err,docs){
    if(docs.length>0){
    
    
    //console.log(docs,'docs')
    let id = docs[0]._id
    ReportAtt.findByIdAndUpdate(id,{$set:{fileId:fileId}},function(err,tocs){
    
    })
    req.flash('success', 'Attendance Report Generated Successfully');
    res.redirect('/teacher/dash')
    //res.redirect('/hostel/viewGatePass/'+id);
    }
    
    
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
  
  
  
  function teacher(req,res,next){
    if(req.user.role == 'teacher'){
      return next()
    }
    res.redirect('/')
    }  









