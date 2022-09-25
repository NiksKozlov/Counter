import React, {useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import SuperButton from './components/SuperButton/SuperButton';

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
                    <SuperButton
                        score={score}
                        func={incrementScore}
                        title={'inc'}
                        value={5}
                    />
                    <SuperButton
                        score={score}
                        func={resetScore}
                        title={'reset'}
                        value={0}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
