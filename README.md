# Number Guesser Game

Welcome to the Number Guesser Game! This simple React application allows you to guess a randomly generated number within a limited number of attempts.

## How to Use

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/PaulBoye-py/number-guesser.git
   cd number-guesser-game
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Application:**

   ```bash
   npm 
   ```

   The game should open automatically in your default web browser. If not, navigate to `http://localhost:3000` in your browser.

### Game Rules

- The program generates a random number between 1 and 100.
- You are given 5 attempts to guess the secret number.
- After each guess, the program provides feedback:
  - If your guess is higher than the random number, it tells you to try something lower.
  - If your guess is lower than the random number, it tells you to try something higher.
  - If your guess is correct, it congratulates you and suggests refreshing the game to play again.
- You win if you guess the number correctly within the attempts. Otherwise, you lose.

### Interface

- **Start Game Button:** Initiates the game by showing the input field and buttons for generating a random number and checking your guess.
- **Generate Random Number Button:** Generates a new random number for you to guess.
- **Input Field:** Enter your guessed number here.
- **Check Number Button:** Checks if your guessed number is correct, too high, or too low.
- **Attempts Left:** Shows the number of attempts you have left to guess the number.

### Game Flow

1. Click on **Start Game** to begin.
2. Click on **Generate random number** to get a new random number.
3. Input your guess in the text field and click on **Check Number** to see if you guessed correctly.
4. Continue guessing until you either guess correctly or exhaust all attempts.
5. After each game (win or lose), you can start a new game by refreshing the page or clicking **Start Game** again.

## Technologies Used

- React: Front-end JavaScript library for building user interfaces.
- JavaScript (ES6+): Programming language used for logic and functionality.
- CSS: Styling language used for design and layout.
