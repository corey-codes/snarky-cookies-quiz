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


const maxQuestions = 5;


// QUIZ DATA ============================

const quizContent = [
    {
        question: "What's your favourite holiday?",
        answer1: "Christmas is the most wonderful time of the year",
        answer2: "National Avocado Day",
        answer3: "Gobble gobble!  Bring on Thanksgiving!",
        answer4: "Kick a ginger day, it's a thing, look it up.",
    },

    {
        question: "What's your go-to breakfast?",
        answer1: "Pancakes",
        answer2: "Avocado toast",
        answer3: "Uh, I usually skip that",
        answer4: "Shredded wheat.  Dry",
    },

    {
        question: "What would be your ideal vacation?",
        answer1: "An all-inclusive resort anywhere hot",
        answer2: "De-worming stray goats in Nepal",
        answer3: "Clubbing in Ibeza",
        answer4: "Big game hunting",
    },

    {
        question: "What's your go-to drink?",
        answer1: "I'll take a beer",
        answer2: "Rosé all day!",
        answer3: "Redbull and vodka",
        answer4: "The blood of my enemies",
    },

    {
        question: "What do you like to binge on Netflix?",
        answer1: "Any comedy will do me just fine",
        answer2: "Mainly health and envrionment documentaries",
        answer3: "Reality tv anything!",
        answer4: "True crime shows...especially where people get away with things",
    },
    ];
    console.log(quizContent);
    // *ARRAY INFO PULLING CORRECTLY - yay!!!*


// DOCUMENT READY =======================
$('document').ready( () => {


// START THE ACTUAL GAME =================
    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [quizContent];

        postQuestions();
        
        // PROBABLY DON'T NEED THIS
        // $(".cookieStartBtn").on("click", function() {
        //   postQuestions();
        // });
        // postQuestions();
    };

// POST QUESTIONS TO PAGE ===================

    // const postQuestions = function() {
    //     quizContent.forEach(function(item){
    //         console.log(item.question);
    //         const quizCopy = 
    //         `<li><p>${item.question}</p></li>
    //         <li><p>${item.answer1}</p></li>
    //         <li><p>${item.answer2}</p></li>
    //         <li><p>${item.answer3}</p></li>
    //         <li><p>${item.answer4}</p></li>
    //         `;
            
    //         console.log(quizContent);  
    //         console.log(quizContent.question);
            
    //         $('.mainQuizQuestions').append(quizCopy);
    //     });
    // }
        const postQuestions = function() {
            quizContent.forEach(function(item){
                // console.log(item);
                const quizCopy = `
                    <p#question>${item.question}</p>
                    <p#answerOption1>${item.answer1}</p>
                    <p#answerOption2>${item.answer2}</p>
                    <p#answerOption3>${item.answer3}</p>
                    <p#answerOption4>${item.answer4}</p>`;
                    // console.log(item.answer1);  
                $('#quiz').append(quizCopy);
            });
        };

    // };
    // 'label[for="answer0id"]'

// TO ACCEPT ANSWERS ==========================



// GO TO RESULTS PAGE ==========================
    
    getNewQuestion = () => {
      if (availableQuestions === 0 || questionCounter >= maxQuestions) {
        return window.location.assign("#results");
      }
    };
   
    

    //ADD POINTS BASED ON SELECTION
    // DISPLAY RESULTS PAGE BASED ON SCORE
    
    startGame();
});