import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiceImage1 from './images/Dice1.png';
import DiceImage2 from './images/Dice2.png';
import DiceImage3 from './images/Dice3.png';
import DiceImage4 from './images/Dice4.png';
import DiceImage5 from './images/Dice5.png';
import DiceImage6 from './images/Dice6.png';


function App() {
  return (
    <div className="App">
      <center>
        <h1>
          Welcome To Dice Roller Game
        </h1>
        <div className='container'>
          <img className='square'/>
          <div style={{display:'inline-block',width:'15px' }}  ></div>
          <img className='square'/>

        </div>
        <button type="button" class="btn btn-outline-primary">Roll Dice</button>
      </center>
      
    </div>
  );
}

export default App;
