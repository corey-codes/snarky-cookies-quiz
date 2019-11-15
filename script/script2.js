
// NAMESPACE ============================

const cookieQuiz = {};

// cookieQuiz.questions;
// cookieQuiz.options;

cookieQuiz.score = 0;  
cookieQuiz.questionCounter = 0;

cookieQuiz.currentQuestions = {};
cookieQuiz.availableQuestions = [];

// SCORING DATA ==========================

const answer1Value = 1;
const answer2Value = 2;
const answer3Value = 3;
const answer4Value = 4;

const maxQuestions = 5;

// QUIZ DATA ==============================

    const quizContent = [
    {
        question: "question 1",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },

    {
        question: "question 2",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },

    {
        question: "question 3",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },

    {
        question: "question 4",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },

    {
        question: "question 5",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },
    {
        question: "question 6",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    },

    {
        question: "question 7",
        answer1: "answer1 here",
        answer2: "answer2 here",
        answer3: "answer3 here",
        answer4: "answer4 here"
    }
    ];
// console.log(quizContent);
// *ARRAY INFO PULLING CORRECTLY*
        
// DOC READY ===============================

$(document).ready( () => {
    
// CREATE HTML ELEMENTS ====================

    const question = $("<li>");
    const answer = $("<h2>").text(item.title);
    const image = $("<img>").attr("src", item.url);
    const price = $("<p>").text((item.price * currency.exchange).toFixed(2));



// START GAME ===============================

    startQuiz = () => {
        cookieQuiz.questionCounter = 0;
        cookieQuiz.score = 0;
        cookieQuiz.availableQuestions = [
            quizContent.length
    ];
    getNewQuestion();
    // console.log(cookieQuiz.availableQuestions);
    };

// GENERATE QUESTIONS ======================
// WHEN QUIZ ENDS GO TO RESULTS PAGE =======

    getNewQuestion = () => {
        const postQuestions = function() {
            quizContent.forEach(function(item) {
                console.log(item.question1, item.answer1);

                const element = `<li class='question'>${question}`

            })
        }
    
    
//--------------------------------------------- 
        if (
        cookieQuiz.availableQuestions === 0 ||
        cookieQuiz.questionCounter >= maxQuestions
    ) {
        return "#results";
    }
// console.log(getNewQuestion);

// UPDATE QUESTION COUNTDOWN
    cookieQuiz.questionCounter++;

// LOAD QUESTIONS RANDOMLY ==================

    //     const questionIndex = Math.floor(Math.random() * cookieQuiz.availableQuestions);
    //     currentQuestion = cookieQuiz.availableQuestions[quizContent.Index];
    };

    // WHEN USER CLICKS START BUTTON LOAD THE FIRST QUESTIONS
    //    $('.cookieStartBtn').on('click', function        (){
    //         getNewQuestion();
    //    });

// LOAD QUESTIONS TO PAGE ===================

    // const loadQuestions = function()

// CALL QUIZ TO START

    startQuiz();

// ==========================================
}); //END OF DOC READY




















