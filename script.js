document.getElementById('start').addEventListener('click', showQuestion);
document.getElementById('start').addEventListener('click', startTimer);

var secondsLeft = 300;

function startTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        var timeEl = document.getElementById('time');
        timeEl.textContent = secondsLeft + " seconds remaining";
        
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            window.location.href="score.html";
        }
    }, 1000);
}


const questionsContainer = document.getElementById('quiz');
const questionIds = ['question1', 'question2', 'question3', 'question4', 'question5'];

var currentQuestionIndex = 0;

function showQuestion() {
    document.getElementById('start').style.display = 'none';
    questionsContainer.style.display = 'block';
    showCurrentQuestion();
}

function nextQuestion() {
    hideCurrentQuestion();
    currentQuestionIndex++;

    if (currentQuestionIndex < questionIds.length) {
        showCurrentQuestion();
    }
    else{
        alert('quiz over! please submit')
    }
}

function showCurrentQuestion() {
    document.getElementById(questionIds[currentQuestionIndex]).style.display = 'block';
}

function hideCurrentQuestion() {
    document.getElementById(questionIds[currentQuestionIndex]).style.display = 'none';
}

document.getElementById('next').addEventListener('click', nextQuestion);


var highScore = 0;

document.addEventListener('click', function(event) {
    var rightAnswer = document.querySelectorAll('[data-value="true"]');
    var clickedElement = event.target;

    if (rightAnswer.length > 0) {
        for (var i = 0; i < rightAnswer.length; i++) {
            if (clickedElement === rightAnswer[i] && !rightAnswer[i].dataset.clicked) {
                rightAnswer[i].dataset.clicked = true;
                highScore++;
                var highScoreDisplay = document.getElementById('score');
                if (highScoreDisplay) {
                    highScoreDisplay.textContent = 'Score: ' + highScore;
                    console.log("High Score to be stored:", highScore);
                    localStorage.setItem('highScore', JSON.stringify(highScore));

                }
            }
        }
    }
});

document.addEventListener('click', function(event) {
    var wrongAnswerElements = document.querySelectorAll('[data-value="false"]');
    var wrongClickedElement = event.target;

    if (wrongAnswerElements.length > 0) {
        for (var i = 0; i < wrongAnswerElements.length; i++) {
            if (wrongClickedElement === wrongAnswerElements[i]) {
                alert('Wrong answer, 30s deducted');
                secondsLeft = secondsLeft - 30;
            }
        }
    }
});