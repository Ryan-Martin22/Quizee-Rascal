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
        question: 'How many spice options are there at Nandos?',
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
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const submitBtn = document.getElementById("submit");
const welcomeSection = document.getElementById("welcome");
const gameSection = document.getElementById("quiz-section");
const answers =  document.getElementsByClassName("answers");
const endSection = document.getElementById("end-section");
const finalScore = document.getElementById("finalScore");
const restart = document.getElementById("restart");


let currentQuiz = 0; 
let chosenAnswer; 
let score = 0;


/** Function tha loads quiz when DOM is finished loading and retrieves questions from html  */

loadQuiz();

function loadQuiz() {
   const currentQuizData = quizData[currentQuiz];

   clearSelection();

   if (quizData.length !== currentQuiz) {
      questionElement.innerText = currentQuizData.question;
      answerA.innerText = currentQuizData.a;
      answerB.innerText = currentQuizData.b;
      answerC.innerText = currentQuizData.c;
      answerD.innerText = currentQuizData.d;
     }  else {
      endGame();
     }
}

/** clears the answer selection when another answer is submitted
 * @param {*} target
 */

function clearSelection () {
   chosenAnswer = null;
   for (let answer of answers) 
   if (answer.classList.contains("selected")) {
      answer.classList.remove("selected");
   }
}

/** checks answer is correct or wrong, returns an animation and adds score
 * @param {*} target
 */

function checkAnswer(choice) {
   if(quizData[currentQuiz].correct === choice) {
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Correct!',
         showConfirmButton: false,
         timer: 1500
       }).then (() => {
         score++;
         currentQuiz++;
         loadQuiz();
       });
      
      
   } else {

      Swal.fire({
         position: 'center',
         icon: 'error',
         title: 'Oops! Wrong Answer',
         showConfirmButton: false,
         timer: 1500
       }).then (() =>{
         currentQuiz++;
         loadQuiz(); 
   });
}
}

/** Ends game when all questions are complete and shows final score out of ten
 * @param {*} target
 */

function endGame() {
   showHide(gameSection);
   showHide(endSection);
   finalScore.innerText = `${score}/10`;
}  

restart.addEventListener("click", () => {
   location.reload(gameSection);
})

/** Teranry operator for cleaner more concise code */

function showHide(target) {
   target.classList.contains("hide") ? target.classList.remove("hide") : target.classList.add("hide");
}

startGame.addEventListener("click", () => {
   showHide(welcomeSection);
   showHide(gameSection);
});

submitBtn.addEventListener("click", () => {
    checkAnswer(chosenAnswer);
});

for(let answer of answers) {
   answer.addEventListener("click", () => {
   if (chosenAnswer) {
      clearSelection();
   }

   answer.classList.add("selected");
   chosenAnswer = answer.dataset.selection;
   });
}





