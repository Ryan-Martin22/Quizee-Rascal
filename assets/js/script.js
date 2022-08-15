const quizData = [
     {
        question: 'Which football club plays its home games at Loftus Road?',
        a: 'Manchester United',
        b: 'Queens Park Rangers',
        c: 'Wolverhamton Wanderers',
        d: 'Luton Town',
        correct: 'b'
     }, {
        question: 'Name the coffee shop in the US Sitcom Friends.',
        a: 'The Big Tea',
        b: 'Coders Coffehouse',
        c: 'Beanhive',
        d: 'Central Perk',
        correct: 'd'
     }, {
        question: 'From what grain is the Japenese spirit Sake made?',
        a: 'Wheat',
        b: 'Rye',
        c: 'Rice',
        d: 'Barley',
        correct: 'c'
     }, {
        question: 'What is rapper P Diddys real name?',
        a: 'Willy Wonka',
        b: 'Bruce Forsyth',
        c: 'Sean Combs',
        d: 'Marshal Mathers',
        correct: 'c',
     }, {
        question: 'Gillian Anderson plays a therapist in which hit Netflix Show?',
        a: 'Sex Education',
        b: 'Stranger Things',
        c: 'Suits',
        d: 'Rick and Morty',
        correct: 'a',
     }, {
        question: 'What colour pill does Neo swallow in The Matrix?',
        a: 'Blue',
        b: 'Pink',
        c: 'Green',
        d: 'Red',
        correct: 'd',
     }, {
        question: 'How many spic options are there at Nandos?',
        a: '4',
        b: '6',
        c: '9',
        d: '11',
        correct: 'b',
     }, {
        question: 'How many notes are there in a musical scale?',
        a: '7',
        b: '30',
        c: '15',
        d: '11',
        correct: 'a',
     }, {
        question: 'What is the best selling novel of all time?',
        a: 'Harry Potter',
        b: 'To Kill A Mockingbird',
        c: 'Don Quixote',
        d: 'Lord Of The Rings',
        correct: 'c',
     }, {
        question: 'What planet has the most moons?',
        a: 'Uranus',
        b: 'Saturn',
        c: 'Mars',
        d: 'Neptune',
        correct: 'b',
     }
];

const questionElement = document.getElementById("question");
const a_answer = document.getElementById("answerA");
const b_answer = document.getElementById("answerB");
const c_answer = document.getElementById("answerC");
const d_answer = document.getElementById("answerD");
const submitBtn = document.getElementById("submit");
const welcomeSection = document.getElementById("welcome");
const gameSection = document.getElementById("quiz-section");
const answers =  document.getElementsByClassName("answers");

let currentQuiz = 0; 
let chosenAnswer; 
let score = 0; 


/** Function tha loads quiz when DOM is finished loading */

loadQuiz();

function loadQuiz() {
   clearSelection()
   const currentQuizData = quizData[currentQuiz];
   if (quizData.length === currentQuiz) {
      console.log('end')
     }  else {

  questionElement.innerText = currentQuizData.question;
  a_answer.innerText = currentQuizData.a;
  b_answer.innerText = currentQuizData.b;
  c_answer.innerText = currentQuizData.c;
  d_answer.innerText = currentQuizData.d;
    }
}
 
submitBtn.addEventListener("click", () => {
    checkAnswer(chosenAnswer)
});

for(let answer of answers) {
   answer.addEventListener("click", () => {
   if (chosenAnswer) {
      clearSelection()
   }

   answer.classList.add("selected")
   chosenAnswer = answer.dataset.selection
   })
}

function clearSelection () {
   chosenAnswer = null 
   for (let answer of answers) 
   if (answer.classList.contains("selected")) {
      answer.classList.remove("selected")
   }
}

function checkAnswer(choice) {
   if(quizData[currentQuiz].correct === choice) {
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Correct!',
         showConfirmButton: false,
         timer: 1500
       })
      score++
      console.log(score)
   } else {

      Swal.fire({
         position: 'center',
         icon: 'error',
         title: 'Oops! Wrong Answer',
         showConfirmButton: false,
         timer: 1500
       })
      console.log("wrong")
   }
   currentQuiz++
   loadQuiz()

   if (currentQuiz < quizData.length) {
      loadQuiz();
  } else {
      quiz.innerHTML = `
          <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
          
          <button onclick="location.reload()">Reload</button>`;
      
  }


}


function hide() {
   welcomeSection.classList.add("hide")
   gameSection.classList.remove("hide")
} 



