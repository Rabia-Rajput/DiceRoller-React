import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DiceImage1 from './images/Dice1.png';
import DiceImage2 from './images/Dice2.png';
import DiceImage3 from './images/Dice3.png';
import DiceImage4 from './images/Dice4.png';
import DiceImage5 from './images/Dice5.png';
import DiceImage6 from './images/Dice6.png';


function App() {
 const diceImages =[
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]
  const [image1, setImage1]=useState(diceImages[0]);
  const [image2, setImage2]=useState(diceImages[1]);
  const rollDice =()=>{
    setImage1(diceImages[Math.floor(Math.random()*6)]);
    setImage2(diceImages[Math.floor(Math.random()*6)]);
  }






  return (
    <div className="App">
      <center>
        <h1>
          Welcome To Dice Roller Game
        </h1>
        <div className='container'>
          <img className='square' src={image1}/>
          <div style={{display:'inline-block',width:'15px' }}  ></div>
          <img className='square' src={image2} />

        </div>
        <button onClick={rollDice} type="button" class="btn btn-outline-primary">Roll Dice</button>
      </center>
      
    </div>
  );
}

export default App;
