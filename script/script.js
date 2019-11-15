// NAMESPACING =========================
const cookieQuiz = {};

cookieQuiz.question;
cookieQuiz.answer;

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


// QUIZ DATA ============================

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
console.log(quizContent);
// *ARRAY INFO PULLING CORRECTLY - yay!!!*

// DOCUMENT READY =======================
$('document').ready( () => {

// START THE ACTUAL GAME =================
    startGame = () => {
        questionCounter = 0;
        score = 0;

        postQuestions();
    }

    const postQuestions = function() {
        quizContent.forEach(function(item){
            console.log(item.question);
            const quizCopy = 
            `<li><p>${item.question}</p></li>
            <li><p>${item.answer1}</p></li>
            <li><p>${item.answer2}</p></li>
            <li><p>${item.answer3}</p></li>
            <li><p>${item.answer4}</p></li>
            `;
            // ALL ITEMS LOG
            console.log(quizContent);
            // ??WHY IS THIS PULLING UNDEFINED??  
            console.log(quizContent.question);
            
            $('.mainQuizQuestions').append(quizCopy);
        })

    }
   
    // const postQuestions = function(quizContent){
    //     quizContent.forEach(function(item){
    //         console.log(item.question, item.answer);
        
    //         const element = `<p #question>${item.question}</p>
    //         <p #answer1>${answer1}</p>
    //         <p #answer2>${answer2}</p>
    //         <p #answer3>${answer3}</p>
    //         <p #answer4>${answer4}</p>
    //         `;
            
    //         console.log(element);

    //         $('.mainQuizQuestions').append(element);
        // })
    // }

    // $(".cookieStartBtn").on("click", function() {
    //   postQuestions();
    // });

    //ADD POINTS BASED ON SELECTION
    // DISPLAY RESULTS PAGE BASED ON SCORE
    
    startGame();
});