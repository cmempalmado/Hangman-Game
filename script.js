// Define the words to be guessed
const words = ["harry potter", "star wars", "lord of the rings", "song of ice and fire"];

// Choose a random word from the array
const randomIndex = Math.floor(Math.random() * words.length);
let word = words[randomIndex];

// Convert the word to an array of letters
let wordArray = word.split("");

// Create an array of underscores to represent the hidden word
let hiddenArray = wordArray.map(char => char === ' ' ? ' ' : '_');

// Keep track of the number of incorrect guesses
let wrongGuesses = 0;

// Get DOM elements
const wordContainer = document.getElementById("word-container");
const guessesContainer = document.getElementById("guesses");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");

// Function to update the hidden word and check if the game is over
function updateGame(guess) {
  let found = false;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === guess) {
      hiddenArray[i] = guess;
      found = true;
    }
  }
  if (!found) {
    wrongGuesses++;
    guessesContainer.textContent += guess + " ";
  }
  wordContainer.textContent = hiddenArray.join(" ");
  if (wrongGuesses >= 6 || !hiddenArray.includes("_")) {
    endGame();
  }
}

// Function to end the game
function endGame() {
  guessInput.disabled = true;
  guessInput.value = "";
  guessInput.placeholder = "Game over!";
  guessInput.style.backgroundColor = "gray";
  guessInput.style.color = "white";
}

// Event listener for the guess form
guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let guess = guessInput.value.toLowerCase();
  if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else if (!/[a-z]/.test(guess)) {
    alert("Please enter a letter from a to z.");
  } else {
    updateGame(guess);
  }
  guessInput.value = "";
});