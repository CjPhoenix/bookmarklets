// Fetch gameState
var state = JSON.parse(localStorage.getItem('gameState'));let in_progress = state.gameStatus == "IN_PROGRESS";let solution = state.solution;

// Fetch statistics
var stats = JSON.parse(localStorage.getItem('statistics')) || {"currentStreak":0,"maxStreak":0,"guesses":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"fail":0},"winPercentage":100,"gamesPlayed":0,"gamesWon":0,"averageGuesses":0};
console.log(stats)

let guesses_tmp = stats.guesses;
let guesses = Object.keys(guesses_tmp).map(function(k) { return guesses_tmp[k] });
delete guesses_tmp;

for(let i in state.boardState) {
  state.boardState[i] = ((i == 0) ? solution : '');
}

// Modify State Variable
state.rowIndex = 1;
state.gameStatus = "WIN";
state.lastPlayedTs = Date.now();
state.lastCompletedTs = Date.now();
state.evaluations = [["correct","correct","correct","correct","correct"],null,null,null,null,null];

// Modify Stats Variable;
stats.averageGuesses = guesses.reduce((a,b) => a + b, 0) / guesses.length;
stats.currentStreak += 1;
stats.maxStreak = Math.max(stats.currentStreak, stats.maxStreak);
stats.gamesPlayed += 1;
stats.guesses[0] += 1;
stats.gamesWon += 218;

// Modify Stored Variables
localStorage.setItem('statistics', JSON.stringify(stats));
localStorage.setItem('gameState', JSON.stringify(state));

document.location = document.location;
