import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DiceImage1 from './images/Dice1.png';
import DiceImage2 from './images/Dice2.png';
import DiceImage3 from './images/Dice3.png';
import DiceImage4 from './images/Dice4.png';
import DiceImage5 from './images/Dice5.png';
import DiceImage6 from './images/Dice6.png';

function App() {
  const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ];
  const [image1, setImage1] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[1]);
  const [sum, setSum] = useState(0);
  const [condition, setCondition] = useState('');
  const [winner, setWinner] = useState('');
  const [showError, setShowError] = useState(false);

  const rollDice = () => {
    if (!condition) {
      setShowError(true);
      return;
    }

    setShowError(false);

    const dice1Image = Math.floor(Math.random() * 6);
    const dice2Image = Math.floor(Math.random() * 6);
    const newSum = dice1Image + dice2Image + 2;
    setSum(newSum);
    setImage1(diceImages[dice1Image]);
    setImage2(diceImages[dice2Image]);

    if (newSum === 7 && condition === 'equal') {
      setWinner('You won');
    } else if (newSum > 7 && condition === 'greaterthan') {
      setWinner('You won');
    } else if (newSum < 7 && condition === 'lessthan') {
      setWinner('You won');
    } else {
      setWinner('You lose');
    }
  };

  const onConditionChange = (event) => {
    setCondition(event.target.value);
    setShowError(false);
  };

  return (
    <div className="App">
      <center>
        <h1>Welcome To Dice Roller Game</h1>
        <div className='container'>
          <img className='square' src={image1} alt="Dice 1" />
          <div style={{ display: 'inline-block', width: '5px' }}></div>
          <img className='square' src={image2} alt="Dice 2" />
          <div className='condition'>
            <h1>Please select a condition before rolling the dice</h1>
            <div className='inputs'>
              <label>
                <input type="radio" checked={condition === 'equal'} value={'equal'} onChange={onConditionChange} />
                Sum will be 7
              </label>
              <label>
                <input type="radio" checked={condition === 'greaterthan'} value={'greaterthan'} onChange={onConditionChange} />
                Sum will be greater than 7
              </label>
              <label>
                <input type="radio" checked={condition === 'lessthan'} value={'lessthan'} onChange={onConditionChange} />
                Sum will be less than 7
              </label>
            </div>
          </div>
        </div>
        <button  disabled={!condition} onClick={rollDice} type="button" className="btn btn-outline-primary">Roll Dice</button>
        <p className='sum'>Sum: {sum}</p>
        <h1>{winner}</h1>
      </center>
    </div>
  );
}

export default App;
