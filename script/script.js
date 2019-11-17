// NAMESPACING =========================
const cookieQuiz = {};

cookieQuiz.question;
cookieQuiz.answer;

cookieQuiz.userScore = 0;
cookieQuiz.questionCounter = 0;

cookieQuiz.currentQuestions = {};
cookieQuiz.availableQuestions = [];

// SCORING DATA ==========================

const maxQuestions = 5;

const answer1Value = 1;
const answer2Value = 2;
const answer3Value = 3;
const answer4Value = 4;


// RESULTS DATA ============================
// ??? SHOULD I SWTICH THIS TO AN OBJECT IN AN OBJECT SO I CAN NAME EACH RESULT OR JUST USE THE ARRAY INDEX??????
const quizResults = [
    {
        cookie: "Chocolate Chip Cookie",
        description: "Congrats, you're average!",
        img: "COMING SOON",
    },

    {
        cookie: "Red Velvet Chippet Cookie",
        description: "Well aren't you annoyingly trendy?",
        img: "COMING SOON",
    },

    {
        cookie: "Gingerbread Cookie",
        description: "You're not everyone's cup of tea, but those who like you <em>really</em> like you and those who don't <em>really</em> don't",
        img: "COMING SOON",
    },

    {
        cookie: "Biscotti",
        description: "Honestly, people think they like you until they get to know you and  they usually regret bringing you to a party",
        img: "COMING SOON",
    },

];
    // console.log(quizResults);
    // *ARRAY INFO PULLING CORRECTLY - yay!!!*


// DOCUMENT READY =======================
$('document').ready( () => {

// CLEAR RADIO BUTTON SELECTION ON PG REFRESH ===



// START THE ACTUAL GAME =================
    startGame = () => {
        questionCounter = 0;
        score = 0;
        


    };



// USER ANSWER SELECTION 
// STORE SCORE FOR SELECTED ANSWER ==========

    $('.quiz').on('click', function() {
        const score = $(this).find('input:radio:checked')
        
    })
    


    // window.onload = function () {
    //     clearItForm.reset('input:radio:unchecked');
    // };



// GO TO RESULTS PAGE ==========================
    
    getNewQuestion = () => {
      if (availableQuestions === 0 || questionCounter >= maxQuestions) {
        return window.location.assign("#results");
      }
    };

// POST RESULTS TO PAGE ===================

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
   
    

    //ADD POINTS BASED ON SELECTION
    // DISPLAY RESULTS PAGE BASED ON SCORE
    
    startGame(); 
}); // END OF DOC READY