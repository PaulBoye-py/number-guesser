import { useState } from 'react'
import './App.css'
import Notification from './components/Notification'

function App() {
  const [randomNumber, setRandomNumber] = useState('')
  const [guessNumber, setGuessNumber] = useState('')

  const [isVisible, setIsVisible] = useState(false)
  const [attempts, setAttempts] = useState(5)

  const [buttonVisibilty, setButtonVisibility] = useState(true)

   // Notification state
   const [message, setMessage] = useState(null)
   const [showMessage, setShowMessage] = useState(false)

   // Function to set notifications and remove them
  const handleMessage = (message, type, showMessage) => {
    setMessage({ message, type })
    setTimeout(() => {
      setMessage(null)
      setShowMessage(false)
    }, 5000)
    setShowMessage(showMessage)
  }

  const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1; 
      setRandomNumber(randomNumber)
      handleMessage(`A random number has been generated. Go ahead to give it a guess. Good luck!`, 'success', true)
      // alert('A random number has been generated. Go ahead to give it a guess. Good luck!')
      console.log(`Generated Number: ${randomNumber}`) // open console to see random number
      return randomNumber;
    };

  const handleGuessNumberChange = (e) => {
    setGuessNumber(e.target.value)
  }
  
  const handleGameLogic = () => {
    if (attempts > 0) {
      const guess = Number(guessNumber);
      if (guess > randomNumber) {
        handleMessage(`The number you guessed is higher than the random number. Try something lower.`, 'error', true)
        // alert('The number you guessed is higher than the random number. Try something lower.');
      } else if (guess < randomNumber) {
        handleMessage(`The number you guessed is lower than the random number. Try something higher.`, 'error', true)
        // alert('The number you guessed is lower than the random number. Try something higher.');
      } else if (guess === randomNumber) {
        handleMessage(`Bingo! You guessed right. Refresh the game to play again!`, 'success', true)
        // alert('Bingo! You guessed right. Refresh the game to play again!');
      }
      setAttempts(attempts - 1);
    } else {
      handleMessage(`You have reached your attempt limit. Refresh to restart the game!`, 'error', true)
      alert('You have reached your attempt limit. Refresh to restart the game!');
    }
  };

  const handleGenerateRandomNumber = () => {
    setRandomNumber(generateRandomNumber());
    setAttempts(5); // Reset attempts when generating a new random number
  };

  const gameComponent = () => {
    return (
      <div>
        <input 
        type='text'
        value={guessNumber}
        onChange={handleGuessNumberChange}
        
      />
        <button onClick={handleGenerateRandomNumber}>Generate random number</button>
        {/* <p>{randomNumber}</p> */}

        <button onClick={handleGameLogic}>check number</button>

        {/* <p>{attempts} attempts left</p> */}
      </div>
    )
  }

  const handleStartGame = () => {
    setIsVisible(!isVisible)
    setButtonVisibility(!buttonVisibilty)
  }


  return (
    <>
      {showMessage && <Notification message={message.message} type={message.type}/>}
      <h2>Welcome to Random Guesser Game</h2>

      <h3>You have <span className='attempts'>{attempts} </span>attempts left</h3>

      <h3>How To Play</h3>

        <p>Click on Start Game</p>
        <p>Click on Generate random number</p>
        <p>Input your guess and receive feedback (too high, too low, correct).</p>
        <p>Win if you guess correctly within the attempts; lose if you exhaust all attempts.</p>
        <p>Program guides you with hints after each guess.</p>
        <p>Play again after each game ends (win or lose).</p>
        
        <button onClick={handleStartGame}>
          {buttonVisibilty ? 'Start Game' : 'Hide Game'}
        </button>  

      {isVisible && gameComponent()}
    </>
  )
}

export default App
