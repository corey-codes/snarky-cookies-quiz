// NAMESPACING =========================
const cookieQuiz = {};

// // cookieQuiz.question;
// // cookieQuiz.answer;

// cookieQuiz.userScore = 0;
// cookieQuiz.questionCounter = 0;

// cookieQuiz.currentQuestion = {};
// cookieQuiz.availableQuestions = []

// SCORING DATA ==========================

const maxQuestions = 5;

// const answer1Value = 1;
// const answer2Value = 2;
// const answer3Value = 3;
// const answer4Value = 4;

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

// DOCUMENT READY =======================

$('document').ready( () => {

// CLEAR RADIO BUTTON SELECTION ON PG REFRESH ===
    $(':radio').prop('checked', false);

// SCORING OBJECT ===========================

    const tally = {
        answerQ1: 0,
        answerQ2: 0,
        answerQ3: 0,
        answerQ4: 0
    };

// START THE ACTUAL GAME =================
    startGame = () => {
        cookieQuiz.userScore = 0;
        cookieQuiz.questionCounter = 0;
    };

// USER ANSWER SELECTION 
// STORE SCORE FOR SELECTED ANSWER 
// PREVENT DEFAULT SUBMIT =======================
        
    $(".quiz").on('submit', function(e) {
        e.preventDefault();
        console.log('submit');
      
        const answerQ1 = e.target.elements.answerQ1.value;
        const answerQ2 = e.target.elements.answerQ2.value;
        const answerQ3 = e.target.elements.answerQ3.value;
        const answerQ4 = e.target.elements.answerQ4.value;
        const answerQ5 = e.target.elements.answerQ4.value;


        
        // console.log(answerQ1);
        // console.log(answerQ2);
        // console.log(answerQ3);
        // console.log(answerQ4);
        // console.log(answerQ5);
        console.log(tally);

    }); //END OF SCORE FUNCTION

    // $('submit').on('click', function (e) {
    //     e.preventDefault();
    //     var answers = $('form').find('input:radio:checked');
    //     if (answers.length === 5) {
    //         var scoresKeys = Object.keys(tally);
    //         var scoresArray = scoresKeys.map(function (key) {
    //             return {
    //                 value: key,
    //                 score: tally[key]
    //             }
    //         });
    //         scoresArray.sort(function (a, b) {
    //             return b.score - a.score;


  
    

// CHANGE TALLY OF ANSWERS FROM OBJECT TO ARRAY & SORT FROM HIGHEST TO LOWEST 
    $("#resultsBtn").on('click', function(e){
        e.preventDefault();
        let answers = $(".quiz").find
        ('input:radio:checked');
        if (answers.length === 5) {
            var scoreKeys = object.keys(tally);
            var scoresArray = scoresKey.map
            (function(key) {
                return {
                    value: key,
                    score: tally[key]
                };
            });
            scoresArray.sort(function(a, b) {
                return b.score - a.score;
            });
        }
    })








// POST RESULTS TO PAGE ===================

    const quizResults = function() {
        quizResults.forEach(function(item){
            console.log(item.summary);
            const quizCopy = 
            `<li><p>${item.summary}</p></li>
            <li><p>${item.answer1}</p></li>
            <li><p>${item.answer2}</p></li>
            <li><p>${item.answer3}</p></li>
            <li><p>${item.answer4}</p></li>
            `;

            console.log(quizResults);  
            console.log(quizContent.summary);

            $('.quizRestuls').append(resultsContent);
        });
    }
   
    

    //ADD POINTS BASED ON SELECTION
    // DISPLAY RESULTS PAGE BASED ON SCORE
    
    startGame(); 

}); 