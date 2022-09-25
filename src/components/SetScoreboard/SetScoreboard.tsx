import React, {ChangeEvent, useState} from 'react';
import s from './SetScoreboard.module.css'
import SuperButton from '../SuperButton/SuperButton';

type PropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: () => void
    changeStartValue: () => void
    setToLocalStorage: () => void
}

function Scoreboard(props: PropsType) {
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


    return (
        <div className="wrapper-board">
            <div className="wrapper-interface">
                <div className={s.setInterface}>
                    <div className={s.setItem}>
                        max value:
                        <input
                            className={ startValue === maxValue ? s.inputError : s.input}
                            type={'number'}
                            value={maxValue}
                            onChange={changeMaxValue}
                        />
                    </div>
                    <div className={s.setItem}>
                        start value:
                        <input
                            className={startValue < 0 || startValue === maxValue ? s.inputError : s.input}
                            type={'number'}
                            value={startValue}
                            onChange={changeStartValue}
                        />
                    </div>
                </div>
            </div>
            <div className="wrapper-buttons">
                <SuperButton
                    onClick={setToLocalStorage}
                    title={'set'}
                    value={0}
                    startValue={startValue}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
};

export default Scoreboard;