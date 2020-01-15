
const app = {};

/* =========================================

- ADD EVENT LISTENER TO INTERNAL LINKS FOR SCROLL
- SCROLL TO QUIZ

========================================= */

const internalLinks = document.querySelectorAll('a[href^="#sectionLInk"');

const playBtn = document.querySelector(".header__playBtn");

const quizSection = document.querySelector("#quiz");
console.log(quizSection); 

playBtn.addEventListener('click', function(e) {
    e.preventDefault();
    quizSection.scrollIntoView();
});


/* ==========================================

- LISTEN FOR RADIO BUTTON SELECT
- CLEAR RADIO BUTTONS ON PAGE REFRESH

========================================== */

const userChecked = document.querySelectorAll("input[type='radio']");

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

- SET UP BUTTON CONTROLS
- SET UP QUESTIONS TO DISPLAY
- FUNCTIONS TO APPLY TO BUTTONS

========================================== */

//CONTROL BUTTONS 
const nextQ = document.querySelector('.quiz__nextBtn'); 
const previousQ = document.querySelector('.quiz__previousBtn');
const getResults = document.querySelector('quiz__resultsBtn');

const resultsSection = document.querySelector('#results');

nextQ.addEventListener('click', function() {
    resultsSection.scrollIntoView();
});

// QUESTIONS
const q1 = document.querySelector("div.quiz__q1"); 
const q2 = document.querySelector("div.quiz__q2"); 
const q3 = document.querySelector("div.quiz__q3"); 
const q4 = document.querySelector("div.quiz__q4"); 
const q5 = document.querySelector("div.quiz__q5"); 

//FUNCTIONS

// function unHide() {
//     if ()
//     classList.remove('is-hidden')
// }

// function next() {
//    nextQ.addEventListener('click', unHide) 
// }
// next();


/* ==========================================

- LOG USER SELECTION BY QUESTION
- ADD USER SELECTION TO TALLY

========================================== */


// FORM
const form = document.querySelector('#quizForm');
let resultsDiv = document.querySelector('.results__content');

form.onsubmit =  function(e) {
    e.preventDefault();

    const result = form.querySelectorAll("input[type='radio']:checked")
    console.log(result);
    console.log(userChoice);
    
    if (result) {
        for (let i = 0; i < result.length; i++ ) {
            userChoice[result[i].value]++;
        }
    } 

    if (userChoice.chocolateChip >= userChoice.redVelvet && userChoice.chocolateChip >= userChoice.gingerbread && userChoice.chocolateChip > userChoice.biscotti) {
        resultsDiv.innerHTML = (`
            <h3 class="results__cookie">${quizResults[0].cookie}</h3>
            <p class="results__summary">${quizResults[0].description}</p>`
        );
    } else if (userChoice.redVelvet > userChoice.chocolateChip && userChoice.redVelvet >= userChoice.gingerbread && userChoice.redVelvet > userChoice.biscotti) {
        resultsDiv.innerHTML = (`
                <h3 class="results__cookie">${quizResults[1].cookie}</h3>
                <p class="results__summary">${quizResults[1].description}</p>`
        );

    } else if (userChoice.gingerbread > userChoice.chocolateChip && userChoice.gingerbread > userChoice.redVelvet && userChoice.gingerbread > userChoice.biscotti) {
        resultsDiv.innerHTML = (`
                <h3 class="results__cookie">${quizResults[2].cookie}</h3>
                <p class="results__summary">${quizResults[2].description}</p>`
        );

    } else if (userChoice.biscotti >= userChoice.chocolateChip && userChoice.biscotti > userChoice.gingerbread && userChoice.biscotti >= userChoice.redVelvet) {
        resultsDiv.innerHTML = (`
                <h3 class="results__cookie">${quizResults[3].cookie}</h3>
                <p class="results__summary">${quizResults[3].description}</p>`
        );
    }   
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



