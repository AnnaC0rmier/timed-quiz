var storedHighScore = JSON.parse(localStorage.getItem('highScore'));
console.log("Retrieved High Score:", storedHighScore);
document.getElementById('score').innerHTML = 'Your Most Recent Score:' + storedHighScore
