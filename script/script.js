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

// IF ELSE TO COMPARE RESULTS OF OJECTS
// MUST MAKE SOME OPTIONS >= IN CASE OF A TIE
// LOG RESULTS WITH TEMPLATE LITERAL EXPRESSIONS

        if (userChoice.chocolateChip >= userChoice.redVelvet && userChoice.chocolateChip >= userChoice.gingerbread && userChoice.chocolateChip > userChoice.biscotti) {
            $('.resultsContent').append(`
                <h3 class="resultCookie">${quizResults[0].cookie}</h3>
                <p class="resultSummary">${quizResults[0].description}</p>`
            ); 

        } else if (userChoice.redVelvet > userChoice.chocolateChip && userChoice.redVelvet >= userChoice.gingerbread && userChoice.redVelvet > userChoice.biscotti) {  
            $('.resultsContent').append(`
                <h3 class="resultCookie">${quizResults[1].cookie}</h3>
                <p class="resultSummary">${quizResults[1].description}</p>`
            );

        } else if (userChoice.gingerbread > userChoice.chocolateChip && userChoice.gingerbread > userChoice.redVelvet && userChoice.gingerbread > userChoice.biscotti) {
            $('.resultsContent').append(`
                <h3 class="resultCookie">${quizResults[2].cookie}</h3>
                <p class="resultSummary">${quizResults[2].description}</p>`
            );

        } else if (userChoice.biscotti >= userChoice.chocolateChip && userChoice.biscotti > userChoice.gingerbread && userChoice.biscotti >= userChoice.redVelvet) {
            $('.resultsContent').append(`
                <h3 class="resultCookie">${quizResults[3].cookie}</h3>
                <p class="resultSummary">${quizResults[3].description}</p>`
            );
        }
    
    });

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


}); 