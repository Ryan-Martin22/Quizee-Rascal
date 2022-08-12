const quizData = [
     {
        question: 'Which football club plays its home games at Loftus Road?',
        a: 'Manchester United',
        b: 'Queens Park Rangers',
        c: 'Wolverhamton Wanderers',
        d: 'Luton Town',
        correct: 'b'
     },{
        question: 'Name the coffee shop in the US Sitcom Friends.',
        a: 'The Big Tea',
        b: 'Coders Coffehouse',
        C: 'Beanhive',
        d: 'Central Perk',
        correct: 'd'
     },{
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
        C: 'Green',
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
        b: 'To Kill A Mockinbird',
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


]

const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0; 

/** Function tha loads quiz when DOM is finished loading */

loadQuiz();

function loadQuiz(); {
   const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.Question;
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

   currentQuestion++;
}



