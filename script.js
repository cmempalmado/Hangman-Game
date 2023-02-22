const wordguess = document.getElementById('guessword');



// Define an array of words to be guessed
const words = ["javascript", "html", "css", "nodejs"];

// Choose a random word from the array
const randomIndex = Math.floor(Math.random() * words.length);
const word = words[randomIndex];

// Convert the word to an array of letters
const wordArray = word.split("");

// Create an array of underscores to represent the hidden word
const hiddenArray = wordArray.map(() => "_");

// Keep track of the number of incorrect guesses
let wrongGuesses = 0;

// Function to check if a letter is in the word
function checkLetter(letter) {
  let found = false;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter) {
      hiddenArray[i] = letter;
      found = true;
    }
  }
  if (!found) {
    wrongGuesses++;
  }
}

// Function to check if the game is over
function checkGameOver() {
  return wrongGuesses >= 6 || !hiddenArray.includes("_");
}

// Function to display the current state of the game
function displayGame() {
  console.log(`Word: ${hiddenArray.join(" ")}`);
  console.log(`Incorrect guesses: ${wrongGuesses}`);
}

// Start the game
while (!checkGameOver()) {
  displayGame();
  const guess = prompt("Guess a letter:").toLowerCase();
  checkLetter(guess);
}

// End the game
displayGame();
if (wrongGuesses >= 6) {
  console.log("You lose!");
} else {
  console.log("You win!");
}
