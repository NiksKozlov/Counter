import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import SuperButton from './components/SuperButton/SuperButton';
import SetScoreboard from './components/SetScoreboard/SetScoreboard';

function App() {
    const [score, setScore] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
    }

    const setToLocalStorage = () => {
        localStorage.setItem('max value', JSON.stringify(maxValue))
        localStorage.setItem('min value', JSON.stringify(startValue))
    }

    const incrementScore = () => {
        setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }


    return (
        <div className="App">
            <SetScoreboard
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setToLocalStorage={setToLocalStorage}
            />
            <Scoreboard score={score}
                        incrementScore={incrementScore}
                        resetScore={resetScore} />
        </div>
    );
}

export default App;
