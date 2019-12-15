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
      answer: "alerts"
    },
    {
      question: "The key to making french onion soup is:",
      choices: ["Ample time for caramelization", "Dry white or red wine", "French Thyme and Rosemary", "All of the above"],
      answer: "All of the above"
     },
    {
      question: "New Orleans cuisine is mostly influenced by what country/:",
      choices: ["Germany", "Italy", "Canada", "France"],
      answer: "alerts"
    },
      
    
  ];
  

  const question = document.getElementById('question');
  const choices = Array.from(document.getElementsByClassName('choice-text')); 
  
  let currentQuestion = {};
  let acceptingAnswers = false; 
  let score = 0; 
  let questionCounter = 0; 
  let availableQuestions = []; 
  
  
  console.log(choices)
  console.log(questions)
  startGame = () => {
      questionCounter = 0
      score = 0; 
      availableQuestions = []; 
      getNewQuestion();
  }; 
  
  
  getNewQuestion = () => {
      questionCounter++; 
      const questionIndex = Math.floor(Math.random(availableQuestions.length));
      currentQuestion = availableQuestions[questionIndex]; 
      question.innerText = currentQuestion.question; 
      
      choice.forEach(choice =>{
          const number = choice.dataset['number']; 
          choice.innerText = currentQuestion['choice' + number];
      });
      
      availableQuestions.splice(questionIndex, 1); 
  
      acceptingAnswers = true; 
  }; 
  
      choices.forEach(choice => {
          choice.addEventListener('click', e =>{
              if (!acceptingAnswers) return;
              
              acceptingAnswers = false;
              const selectedChoice = e.target; 
              const selectedAnswer = selectedChoice.dataset['number']; 
          })
           
  
      }); 
  
      
  
  
  
  
  startGame(); 
  