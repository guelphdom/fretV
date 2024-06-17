var MCQS
var duration
var quizId
let idX = document.getElementById('idX').value

												
	$.ajax({
    dataType: 'json',
 
    type: 'POST',
    url: "/student/quest",
	data:{
        code:idX,
    },

      success: function(data) {
MCQS  = data
duration = data[0].quizDuration
quizId = data[0].quizId
  console.log(data,'success')
  console.log(MCQS,'LOG')  

  //Start Section
let start = document.querySelector("#start");
console.log(MCQS,'mcqs')
//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
//let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");
let back_question =  document.querySelector("#back_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let timer = 0;
let interval = 0;
const startMinutes = duration
let timeX = startMinutes * 60;
//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
 
});

//what happen when 'Exit' Button Will Click
exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});


//Creating Timer For Quiz Timer Section

let countDown = () => {
    if (timer === 10) {
        clearInterval(interval);
        //next_question.click();
        finish()
        
    } else {
        const minutes = Math.floor(timeX / 60);
        let seconds = timeX % 60;

        seconds = seconds < 10 ? '0' + seconds:seconds;

        time.innerHTML = `${minutes}: ${seconds}`
        timeX--;
       // timer++;
        //time.innerText = timer;
       
    }
}




//setInterval(countDown,1000);



 

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerHTML =MCQS[index].question;
    //document.getElementById('questionText').src ='uploads/'+ MCQS[index].question
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
  
    //    timer start
   // 
}

loadData();

//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
  
    quiz.style.display = "block";
    guide.style.display = "none";
    

    timer = 0;
    interval = setInterval(countDown, 1000);
    loadData();

    //  remove All Active Classes When Continue Button Will Click

   choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

   
});









choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
      
        console.log(choices,'choices')
        console.log(choiceNo,'choiceNo')
        console.log(MCQS[index]._id,choiceNo,'milk bone')
        //check answer
        $.ajax({
          dataType: 'json',
          data:{
            code:choiceNo
          },
          type: 'POST',
          url: "/student/quest/"+MCQS[index]._id,
          success: function(data) {
              console.log(data,'albert')
console.log(choiceNo,'success')
//console.log(choice_que[data.stdAns])
choice_que[choiceNo].classList.add("active");

for (i = 0; i <= 3; i++) {
    if( i != choiceNo){
        console.log(i,'i')
    choice_que[i].classList.remove("active");
console.log('martial law')
    }

}
          }
        })

       /* if (choiceNo === MCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }*/
        //stop Counter
       // clearInterval(interval);

        //disable All Options When User Select An Option
      /*  for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }*/
    })
});


back_question.addEventListener("click", (choices) => {
  //    if index is less then MCQS.length

 // choices.classList.add("active");
  if (index !== 0) {
      index--;
      console.log(MCQS[index]._id,'id')
     

      $.ajax({
        dataType: 'json',
    
        type: 'POST',
        url: "/student/back/"+MCQS[index]._id,
        success: function(data) {

      choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
        console.log(data.activeNum,'answer')
        choice_que[data.stdAns].classList.add("active");
    })


      }
    })
   
   //question
   loadData();

   //clearInterval(interval);
   //interval = setInterval(countDown, 1000);
    }
  })



////what happen when 'Next' Button Will Click
next_question.addEventListener("click", () => {
    //    if index is less then MCQS.length
    if (index !== MCQS.length - 1) {
        index++;

        //console.log(MCQS[index].stdAns,'land mark')
        $.ajax({
            dataType: 'json',
        
            type: 'POST',
            url: "/student/back/"+MCQS[index]._id,
            success: function(data) {
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        choice_que[data.stdAns].classList.add("active");
    }
})
        //question
        loadData();

        //result
     /*   total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;*/
        //clearInterval(interval);
       // interval = setInterval(countDown, 1000);
    } else {
        index = 0;
        $.ajax({
          dataType: 'json',
          data:{
              code:quizId
          },
          type: 'POST',
          url: "/student/fquest/",
          success: function(data) {
console.log('success')
let num = data.length
let perc = num / MCQS.length
let percentage =perc * 100    
console.log(percentage,'perc') 
        
        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${num} Out Of ${MCQS.length} <br> ${percentage}%`;
        result.style.display = "block";

      }
    })

    }
    
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//timeout
function finish(){
   
    index = 0;
        $.ajax({
          dataType: 'json',
          data:{
              code:quizId
          },
          type: 'POST',
          url: "/student/fquest/",
          success: function(data) {
console.log('success')
let num = data.length
let perc = num / MCQS.length
let percentage =perc * 100    
console.log(percentage,'perc')    
        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
       // interval = setInterval(countDown, 1000);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${num} Out Of ${MCQS.length} + ${percentage}%`;
        result.style.display = "block";

      }
    })

    
    
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }


}

//what happen when 'Quit' Button Will Click
quit.addEventListener("click", () => {
    start.style.display = "none";
    result.style.display = "none";
    window.location.href="/student/dash"
});

//Start Again When 'Start Again' Button Will Clicked
/*startAgain.addEventListener("click", () => {
    guide.style.display = "block";
    result.style.display = "none";
});*/

      
    }

   
  });
                
 