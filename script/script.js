// NAMESPACING =========================
const quiz = {};

// SCORING DATA ==========================

const maxQuestions = 5;

// SCORING OBJECT ===========================

const userChoice = {
    chocolateChip: 0,
    redVelvet: 0,
    gingerbread: 0,
    biscotti: 0,
};

// CLEAR RADIO BUTTON SELECTION ON PG REFRESH ===
$(':radio').prop('checked', false);

// RESULTS DATA ============================

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
    
// USER ANSWER SELECTION: 
// STORE SCORE FOR SELECTED ANSWER 
// PREVENT DEFAULT SUBMIT =======================
        
$(".quiz__form").on('submit', function(e) {
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

// IF ELSE TO COMPARE RESULTS OF OBJECTS
// MUST MAKE SOME OPTIONS >= IN CASE OF A TIE
// LOG RESULTS WITH TEMPLATE LITERAL EXPRESSIONS

        if (userChoice.chocolateChip >= userChoice.redVelvet && userChoice.chocolateChip >= userChoice.gingerbread && userChoice.chocolateChip > userChoice.biscotti) {
            $('.results__content').html(`
                <h3 class="results__cookie">${quizResults[0].cookie}</h3>
                <p class="results__summary">${quizResults[0].description}</p>`
            ); 

        } else if (userChoice.redVelvet > userChoice.chocolateChip && userChoice.redVelvet >= userChoice.gingerbread && userChoice.redVelvet > userChoice.biscotti) {  
            $('.results__content').html(`
                <h3 class="results__cookie">${quizResults[1].cookie}</h3>
                <p class="results__summary">${quizResults[1].description}</p>`
            );

        } else if (userChoice.gingerbread > userChoice.chocolateChip && userChoice.gingerbread > userChoice.redVelvet && userChoice.gingerbread > userChoice.biscotti) {
            $('.results__content').html(`
                <h3 class="results__cookie">${quizResults[2].cookie}</h3>
                <p class="results__summary">${quizResults[2].description}</p>`
            );

        } else if (userChoice.biscotti >= userChoice.chocolateChip && userChoice.biscotti > userChoice.gingerbread && userChoice.biscotti >= userChoice.redVelvet) {
            $('.results__content').html(`
                <h3 class="results__cookie">${quizResults[3].cookie}</h3>
                <p class="results__summary">${quizResults[3].description}</p>`
            );
        }
    
}); // END OF SCORING & RESULTS

// DOCUMENT READY
$('document').ready(() => {

}); 