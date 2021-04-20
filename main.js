let randomQuestion;
let score = 0
let numberSelected = ''
let gridButtons = $('.dollarGridBlock')

// window.localStorage.removeItem("GridArrayClas");
const prevScore = window.localStorage.getItem('Score');
let prevArray = JSON.parse(window.localStorage.getItem('GridArrayClas'));

if (prevArray !== null) { 
    for (const index in prevArray) {
        if (prevArray[index] === "disable") {
            gridButtons.eq(index).addClass('disabled')
            console.log(gridButtons[index])
        }
    }
}
else {
    let temArray = []
    for (var i = 0; i < 25; i++) { temArray[i] = "abled" };
    prevArray = temArray
}

if (prevScore !== null) {
    score = Number(prevScore)
    $('#score').text("YOUR SCORE: " + prevScore)
}

for (const each of gridButtons) {
    each.addEventListener('click', function (event) {

        $('#toastMessage').removeClass('show')
        $('#toastMessage').addClass('')
        const elementThatWasClicked = event.target;
        $(event.target).addClass("disabled")

        prevArray[event.target.id] = 'disable'
        window.localStorage.setItem("GridArrayClas",JSON.stringify( prevArray))
        chooseRandomQuestion(elementThatWasClicked.innerText)
    });
}

$('#Submit').click(function () {

    if (randomQuestion.answer == $('#input').val()) {
        score = score + Number(numberSelected)
        window.localStorage.setItem('Score', score);
        $('#score').text("YOUR SCORE: " + score)
        $('#input').val('')
        $('#toastMessage').addClass('show')
        $('#toastMessage').text("Congratulation!")
    }
    else {
        $('#toastMessage').addClass('show')
        $('#toastMessage').text("The correct answer is: " + randomQuestion.answer)
    }
});

function chooseRandomQuestion(num) {
    numberSelected = num.split('$')[1]
    let filteredQuestion = QUESTIONS.filter(function (e) {
        return e.value === num
    });

    randomQuestion = filteredQuestion[Math.floor(Math.random() * filteredQuestion.length)]
    $('#question').text(randomQuestion.question)
    console.log(randomQuestion.answer)
}



