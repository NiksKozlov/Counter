import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import SetScoreboard from './components/SetScoreboard/SetScoreboard';


function App() {
    const [value, setValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('max value')
        let minValueAsString = localStorage.getItem('min value')
        if (maxValueAsString && minValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            let minValue = JSON.parse(minValueAsString)
            setMaxValue(maxValue)
            setMinValue(minValue)
            setValue(minValue)
        }
    }, [])

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        setValue('Enter values and press set')

    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
        setValue('Enter values and press set')
    }

    const setToLocalStorage = () => {
        localStorage.setItem('max value', JSON.stringify(maxValue))
        localStorage.setItem('min value', JSON.stringify(minValue))
        setValue(JSON.stringify(minValue))
    }

    const disabledConditionSet = () => {
        return minValue === maxValue || minValue === undefined || minValue > maxValue || minValue < 0
    }

    const disabledConditionInc = () => {
        return +value === maxValue
    }

    const disabledConditionReset = () => {
        return +value === minValue
    }

    const incrementScore = () => {
        setValue(value => `${+value + 1}`)
    }

    const resetScore = () => {
        setValue(JSON.stringify(minValue))
    }


    return (
        <div className="App">
            <SetScoreboard
                maxValue={maxValue}
                minValue={minValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setToLocalStorage={setToLocalStorage}
                disabledCondition={disabledConditionSet}
            />
            <Scoreboard value={value}
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
