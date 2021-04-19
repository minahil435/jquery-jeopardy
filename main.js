let randomQuestion;
let score = 0 
let numberSelected  = ''


const prevScore = window.localStorage.getItem('Score');
if (prevScore !== null) {
    score = Number(prevScore)
    $('#score').text("YOUR SCORE: " + prevScore)
}


let gridButtons = $('.dollarGridBlock')
for (const each of gridButtons){

    each.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        chooseRandomQuestion(elementThatWasClicked.innerText)
    });
}

$('#Submit').click(function () {
    
    if (randomQuestion.answer == $('#input').val()){
        score = score + Number(numberSelected)
        window.localStorage.setItem('Score', score);
        $('#score').text("YOUR SCORE: " + score)
        $('#input').val('')
    }
});

function chooseRandomQuestion(num){
    numberSelected = num.split('$')[1]
    let filteredQuestion = QUESTIONS.filter(function (e) {
        return e.value === num 
    });
   
    randomQuestion = filteredQuestion[Math.floor(Math.random() * filteredQuestion.length)]
    $('#question').text(randomQuestion.question)
    console.log(randomQuestion.answer)
}



