var questions = [
    {
      question: "The base of all good French stews and soups is:",
      choices: ["The holy trinity", "Meerapwah", "Sofrito", "Mirepoix"],
      answer: "Mirepoix"
    },
    {
      question: "Al forno is Italian for:",
      choices: ["Baked in oven", "Deep fried", "Cured over months", "Tossed with chili flakes"],
      answer: "Baked in oven"
    },
    {
      question: "Mario Batali was a celebrity chef known for his show:",
      choices: ["Emril Live", "Barefoot Contessa", "Tool Time", "Molto Mario"],
      answer: "Molto Mario"
    },
    {
      question: "The key to making french onion soup is:",
      choices: ["Ample time for caramelization", "Dry white or red wine", "French Thyme and Rosemary", "All of the above"],
      answer: "All of the above"
     },
    {
      question: "New Orleans cuisine is mostly influenced by what country:",
      choices: ["Germany", "Italy", "Canada", "France"],
      answer: "France"
    },
      
    
  ];
  

  const question = document.getElementById('question');
  const choice1 = document.getElementById('choice1');
  const choice2 = document.getElementById('choice2');
  const choice3 = document.getElementById('choice3'); 
  const choice4 = document.getElementById('choice4');
  const quizContainer = document.getElementById('quizContainer');
  const resultAlert = document.getElementById('resultAlert');
  const timer = document.getElementById('timer')
  let questionCounter = 0; 
  let questionTime = 75; 
  var quizOver = false;
  var finalScore = 0; 
  
  startGame = () => {
      questionCounter = 0;
      score = 0; 
      generateQuestions();
      bestTimer();
  }; 

  function bestTimer(){
    var time = setInterval(function(){
      questionTime--; 
      timer.innerText = "Time:" + questionTime; 
      if (questionTime <= 0){
        clearInterval(time); 
      } if (quizOver === true){
        clearInterval(time); 
      }
    },1000);
  }

  generateQuestions = () => { 
    if (questionCounter === 5) {
      quizOver === true; 
      endGame();
    } else {
    question.innerText = questions[questionCounter].question; 
    choice1.innerText = questions[questionCounter].choices[0]; 
    choice2.innerText = questions[questionCounter].choices[1]; 
    choice3.innerText = questions[questionCounter].choices[2]; 
    choice4.innerText = questions[questionCounter].choices[3]; 
    }
  }

  quizContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains('choices')){
      if (e.target.innerText === questions[questionCounter].answer){
        var correctAlert = document.createElement("div");
        correctAlert.classList.add("correctAnswer");
        correctAlert.innerText = "Correct!";
        resultAlert.appendChild(correctAlert); 
        setTimeout(function(){
          questionCounter++;
          resultAlert.removeChild(correctAlert); 
          generateQuestions();
        }, 500)
      }
    
      else {
        var falseAlert = document.createElement("div");
        falseAlert.innerText = "False!";
        falseAlert.classList.add("correctAnswer");
        resultAlert.appendChild(falseAlert); 
        setTimeout(function(){
          questionCounter++;
          questionTime -= 10;
          resultAlert.removeChild(falseAlert); 
          generateQuestions();
        }, 500)
      }
    }

  }); 



  function endGame() {  
    quizOver = true; 
    quizContainer.innerText = ""; 
    var endGameAlert = document.createElement("div"); 
    endGameAlert.innerText = "Complete! Your Score is: " + questionTime + "!"; 
    endGameAlert.classList.add("complete"); 
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("name");
    nameInput.placeholder = "Name"; 
    var submit = document.createElement("INPUT");
    submit.setAttribute("type", "submit");
    submit.classList.add("submit-button");
    quizContainer.appendChild(endGameAlert);
    quizContainer.appendChild(nameInput);  
    quizContainer.appendChild(submit); 
   }


  



  startGame();






