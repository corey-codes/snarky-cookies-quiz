
const app = {};

/* =========================================

- ADD EVENT LISTENER TO START BUTTON
- SCROLL TO QUIZ

========================================= */

const playBtn = document.querySelector(".header__playBtn");

const quizSection = document.querySelector("#quiz");

function scrollToQuiz() {
    quizSection.scrollIntoView();
}; 

playBtn.addEventListener('click', scrollToQuiz()); 

/* ==========================================

- LISTEN FOR RADIO BUTTON SELECT
- CLEAR RADIO BUTTONS ON PAGE REFRESH

========================================== */

const userChecked = document.querySelectorAll("input[type='radio']");
// console.log(userChecked);

window.onload = function() {
    for (let i = 0; i < userChecked.length; i++)
        userChecked[i].checked = false;
};

/* ==========================================

- SET STARTING SCORES
- QUIZ RESULTS

========================================== */

const userChoice = {
    chocolateChip: 0,
    redVelvet: 0,
    gingerbread: 0,
    biscotti: 0,
};

const quizResults = [
    {
        cookie: "Chocolate Chip Cookie",
        description: "Congrats, you're average!  On the up side, you're generally likeable and the welcome addition to any get together",

    },

    {
        cookie: "Red Velvet Chippet Cookie",
        description: "Well aren't you annoyingly trendy?  You're exciting at first but people are tend to regret indulging too much in your company",

    },

    {
        cookie: "Gingerbread Cookie",
        description: "You're not everyone's cup of tea, but those who like you really like you and those who don't really don't",

    },

    {
        cookie: "Biscotti",
        description: "Honestly, people think they like you until they get to know you and they almost always regret bringing you to a party",

    },

];

/* ==========================================

- HIDE/UN-HIDE QUESTIONS ON NEXT BTN CLICK
- STORE USER SELECTION FOR EACH ANSWER

========================================== */

//CONTROL BUTTONS 
const nextQ = document.querySelector('.quiz__nextBtn'); 

const previousQ = document.querySelector('.quiz__previousBtn'); 

const getResults = document.querySelector('quiz__resultsBtn');

// QUESTIONS
const q1 = document.querySelector("div.quiz__q1"); 
const q2 = document.querySelector("div.quiz__q2"); 
const q3 = document.querySelector("div.quiz__q3"); 
const q4 = document.querySelector("div.quiz__q4"); 
const q5 = document.querySelector("div.quiz__q5"); 

// FORM
const form = document.querySelector('#quizForm');

form.onSubmit =  function(e) {
    e.preventDefault();

    let chocolateChipSelected = userChecked.classList.contains('chocolateChip');
    console.log(chocolateChipSelected);

    
};

/* ==========================================

- STORE USER SELECTION FOR EACH QUESTION

========================================== */







/* ======================================

- PREVENT DEFAULT ON FORM SUBMIT
- CONTROL BUTTONS - SHOW ON ANSWER CLICK
- DON'T ALLOW PREVIOUS BTN ON FIRST QUESTION
- HIDE NEXT BTN ON LAST QUESTION
- SHOW SUBMIT BTN ON LAST QUESTION
- ERROR HANDLING - CAN'T SUBMIT WITHOUT ANSWER SELECTION

=========================================*/



