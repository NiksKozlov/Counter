import React, {useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import SuperButton from './components/SuperButton/SuperButton';
import SetScoreboard from './components/SetScoreboard/SetScoreboard';

function App() {
    const [score, setScore] = useState<number>(0)

    const incrementScore = () => {
        setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }


    return (
        <div className="App">
            <SetScoreboard />
            <Scoreboard score={score}
                        incrementScore={incrementScore}
                        resetScore={resetScore} />
        </div>
    );
}

export default App;
