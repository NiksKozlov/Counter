import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import SetScoreboard from './components/SetScoreboard/SetScoreboard';


function App() {
    const [countValue, setCountValue] = useState<string>('Enter values and press set')
    const [maxValue, setMaxValue] = useState(1)
    const [minValue, setMinValue] = useState(0)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('max value')
        let minValueAsString = localStorage.getItem('min value')
        if (maxValueAsString && minValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            let minValue = JSON.parse(minValueAsString)
            setMaxValue(maxValue)
            setMinValue(minValue)
            setCountValue(minValue)
        }
    }, [])

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(true)
        setMaxValue(+e.currentTarget.value)
        setCountValue('Enter values and press set')
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(true)
        setMinValue(+e.currentTarget.value)
        setCountValue('Enter values and press set')
    }

    const setToLocalStorage = () => {
        localStorage.setItem('max value', JSON.stringify(maxValue))
        localStorage.setItem('min value', JSON.stringify(minValue))
        setCountValue(JSON.stringify(minValue))
        setDisabled(false)
    }

    const disabledConditionSet = () => {
        return minValue === maxValue || minValue === undefined || minValue > maxValue || minValue < 0
    }

    const disabledConditionInc = () => {
        return +countValue === maxValue || disabled
    }

    const disabledConditionReset = () => {
        return +countValue === minValue || disabled
    }

    const incrementScore = () => {
        setCountValue(value => `${+value + 1}`)
    }

    const resetScore = () => {
        setCountValue(JSON.stringify(minValue))
    }


    return (
        <div className="App">
            <SetScoreboard
                maxValue={maxValue}
                minValue={minValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                setToLocalStorage={setToLocalStorage}
                disabledCondition={disabledConditionSet}
            />
            <Scoreboard countValue={countValue}
                        maxValue={maxValue}
                        incrementScore={incrementScore}
                        resetScore={resetScore}
                        disabledConditionInc={disabledConditionInc}
                        disabledConditionReset={disabledConditionReset}
                        disabledConditionSet={disabledConditionSet} />
        </div>
    );
}

export default App;
