
const app = {};

/* =========================================

- ADD EVENT LISTENER TO INTERNAL LINKS FOR SCROLL
- SCROLL TO QUIZ

========================================= */

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
- SCROLL TO START ON REFRESH

========================================== */

const userChecked = document.querySelectorAll("input[type='radio']");

window.onload = function() {
    for (let i = 0; i < userChecked.length; i++)
        userChecked[i].checked = false;
    scrollTo(0,0);
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
- ADD HTML QUESTIONS INTO AN ARRAY TO LOOP OVER AND DISPLAY ONE BY ONE
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

const questions = []

const q1 = document.querySelector("div.quiz__q1"); 
const q2 = document.querySelector("div.quiz__q2"); 
const q3 = document.querySelector("div.quiz__q3"); 
const q4 = document.querySelector("div.quiz__q4"); 
const q5 = document.querySelector("div.quiz__q5"); 

questions.push(q1, q2, q3, q4, q5);


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
    
    if (result) {
        for (let i = 0; i < result.length; i++ ) {
            userChoice[result[i].value]++;
        }
    } if (result.length < 5) {
        return alert('Please pick an aswer for each question & try again.');
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




