var storedHighScore = JSON.parse(localStorage.getItem('highScore'));
console.log("Retrieved High Score:", storedHighScore);
document.getElementById('score').innerHTML = 'Your High  Most Recent Score:' + storedHighScore
