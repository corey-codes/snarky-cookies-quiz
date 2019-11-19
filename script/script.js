// NAMESPACING =========================
const cookieQuiz = {};

// SCORING DATA ==========================

const maxQuestions = 5;

// SCORING OBJECT ===========================

const userChoice = 
{
    chocolateChip: 0,
    redVelvet: 0,
    gingerbread: 0,
    biscotti: 0,
};
// console.log(userChoice);

// DOCUMENT READY =======================

$('document').ready( () => {

// CLEAR RADIO BUTTON SELECTION ON PG REFRESH ===
    $(':radio').prop('checked', false);

// RESULTS DATA ============================

    const quizResults = [
        {
            cookie: "Chocolate Chip Cookie",
            description: "Congrats, you're average!  On the up side, you're generally likeable",
           
        },

        {
            cookie: "Red Velvet Chippet Cookie",
            description: "Well aren't you annoyingly trendy?",
           
        },

        {
            cookie: "Gingerbread Cookie",
            description: "You're not everyone's cup of tea, but those who like you <em>really</em> like you and those who don't <em>really</em> don't",
            
        },

        {
            cookie: "Biscotti",
            description: "Honestly, people think they like you until they get to know you and they usually regret bringing you to a party",
           
        },

    ];

    let chocolateChipSelected;
    let redVelvetSelected;
    
// USER ANSWER SELECTION 
// STORE SCORE FOR SELECTED ANSWER 
// PREVENT DEFAULT SUBMIT =======================
        
    $(".quiz").on('submit', function(e) {
        e.preventDefault();

        let chocolateChipSelected = $('input').hasClass('chocolateChip')
        console.log(chocolateChipSelected)
        let choice;

        const result = $(this).find('input:checked')
        console.log(result);
        console.log(userChoice);
        if (result) {
            // targeting the value in the object
            for (let i = 0; i < result.length; i++) {
                userChoice[result[i].value]++;
            } 
        } 

        if (userChoice.chocolateChip > userChoice.redVelvet && userChoice.chocolateChip > userChoice.gingerbread && userChoice.chocolateChip > userChoice.biscotti) {
            console.log('Chocolate Chip Wins!');
            console.log(quizResults[0]);

        } else if (userChoice.redVelvet > userChoice.chocolateChip && userChoice.redVelvet > userChoice.gingerbread && userChoice.redVelvet > userChoice.biscotti) {
            console.log('red velvet wins!');  

        } else if (userChoice.gingerbread > userChoice.chocolateChip && userChoice.gingerbread > userChoice.redVelvet && userChoice.gingerbread > userChoice.biscotti) {
            console.log('gingerbread wins!');

        } else if (userChoice.biscotti > userChoice.chocolateChip && userChoice.biscotti > userChoice.gingerbread && userChoice.biscotti > userChoice.redVelvet) {
            console.log('biscotti wins!');
        }
       

        // let max = Math.max(...arr);




        // function findKey() {
        //     return Object.keys(arr).find(key => arr[max] === value);
        // }; 
        // findKey()
    
        });


        
       
        // if (chocolateChip = e.target.elements.data-cookie.value) {
        //     userChoice.chocolateChip++;
        //     console.log(userChoice.chocolateChip);
        // } else if (redVelvet = e.target.elements.data-cookie.value) {
        //     userChoice.redVelvet++;
        //     console.log(userChoice.redVelvet);
        // } else if (gingerbread = e.target.elements.data-cookie.value) {
        //     userChoice.gingerbread++;
        //     console.log(userChoice.gingerbread);
        // } else if (biscotti = e.target.elements.data-cookie.value) {
        //     userChoice.biscotti++;
        //     console.log(userChoice.biscotti);
        // }  

        // if (chocolateChipSelected = $('.chocolateChip').attr('checked', true)) {
        //     userChoice.chocolateChip++;
        //     console.log('chocolate chip checked!');
        //     console.log(userChoice.chocolateChip);

        // } else if (redVelvetSelected = $('.redVelvet').attr('checked', true)) {
        //     userChoice.redVelvet++;
        //     console.log('redVelvet checked!');
        //     console.log(userChoice.redVelvet);

        //} //else if (gingerbread = e.target.elements.answerQ1.value) {
        //     userChoice.gingerbread++;
        //     console.log(userChoice.gingerbread);

        // } else if (biscotti = e.target.elements.answerQ1.value) {
        //     userChoice.biscotti++;
        //     console.log(userChoice.biscotti);
        // }  

        // if (chocolateChip = e.target.elements.answerQ2.value) {
        //     userChoice.chocolateChip++;
        //     console.log(userChoice.chocolateChip);
        // } else if (redVelvet = e.target.elements.answerQ2.value) {
        //     userChoice.redVelvet++;
        //     console.log(userChoice.redVelvet);
        // } else if (gingerbread = e.target.elements.answerQ2.value) {
        //     userChoice.gingerbread++;
        //     console.log(userChoice.gingerbread);
        // } else if (biscotti = e.target.elements.answerQ2.value) {
        //     userChoice.biscotti++;
        //     console.log(userChoice.biscotti);
        // }  




        // userChoice.answerQ1 = e.target.elements.answerQ1.value;
        // userChoice.answerQ2 = e.target.elements.answerQ2.value;
        // userChoice.answerQ3 = e.target.elements.answerQ3.value;
        // userChoice.answerQ4 = e.target.elements.answerQ4.value;
        // userChoice.answerQ5 = e.target.elements.answerQ5.value; 
        // console.log(userChoice.answerQ1);
        // userAnswerQ1 = e.target.elements.answerQ1.value;
        // userAnswerQ2 = e.target.elements.answerQ2.value;
        // userAnswerQ3 = e.target.elements.answerQ3.value;
        // userAnswerQ4 = e.target.elements.answerQ4.value;
        // userAnswerQ5 = e.target.elements.answerQ5.value;     


// TO FIND THE MOST SELECTED OPTION USE REDUCE FUNCTION WITH ACCUMULATOR & CURRENTVALUE ARGUMENTS 

        // const userAnswer = $(this).find('input:radio:checked').attr('value');
        //     if (userAnswer) {
        //         userChoice[userAnswer]++;
        //         $(this).find('input:submit').attr('disabled', true);
        //     }

        // const cookie = Object.keys(userChoice).reduce((a, b) => userChoice[a] > userChoice[b] ? a : b);
        // if (cookie) {
        //     $('.quizResults').html(`<div id="quizEnd" class="resultContent wrapper"><h2>Here's Your Cookie</h2><h3>${quizResults.cookie.name}</h3><p>${quizResults.cookie.description}</p><img src="${quizResults.cookie.image}"></div>`);
        // } 
        

        // const values = Object.entries(userChoice);
        // console.log(values);
        
        // const greatNumPair = values.reduce((acc, cur) => {
        //     if (acc[1] > cur[1]) {
        //         return acc;
        //     }
        //     return cur;
        // });
        
        // console.log(greatNumPair); // Where greatNumPair[0] is the index with the highest

// POST RESULTS TO PAGE ===================

        // const quizResults = function () {
        //     quizResults.forEach(function (item) {
        //         console.log(item.summary);
        //         const quizCopy =
        //             `<p>${item.summary}</p></li>
        //             <li><p>${item.answer1}</p></li>
        //             <li><p>${item.answer2}</p></li>
        //             <li><p>${item.answer3}</p></li>
        //             <li><p>${item.answer4}</p></li>
        //             `;

        //         console.log(quizResults);
        //         console.log(quizContent.summary);

        //         $('.quizRestuls').append(resultsContent);
        //     });
        // }   
    // }); 

    



    // $('submit').on('click', function (e) {
    //     e.preventDefault();
    //     var answers = $('form').find('input:radio:checked');
    //     if (answers.length === 5) {
    //         var scoresKeys = Object.keys(tally);
    //         var scoresArray = scoresKeys.map(function (key) {
    //             return {
    //                 value: key,
    //                 score: tally[key]onst cookie = Object.keys(userChoice).reduce((a, b) => userChoice[a] > userChoice[b] ? a : b);
    // if (cookie) {
    //   $('.quizResults').html(`<div id="quizEnd" class="resultContent wrapper"><h2>Here's Your Cookie</h2><h3>${quizResults[cookie].name}</h3><p>${quizResults[cookie].description}</p><img src="${quizResults[cookie].image}"></div>`);
    // } 
    //             }
    //         });
    //         scoresArray.sort(function (a, b) {
    //             return b.score - a.score;
    


}); 