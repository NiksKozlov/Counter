import React, {useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Increment from './components/Increment/Increment';
import Reset from './components/Reset/Reset';
import UniversalButton from './components/UniversalButton/UniversalButton';

function App() {
    const[score, setScore] = useState<number>(0)

    const incrementScore = () => {
            setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }

    return (
        <div className="App">
            <div className="wrapper-all">
                <Scoreboard score={score} />
                <div className="wrapper-buttons">
                    <Increment score={score}  incrementScore={incrementScore} />
                    <Reset score={score} resetScore={resetScore} />
                </div>
            </div>
        </div>
    );
}

export default App;
