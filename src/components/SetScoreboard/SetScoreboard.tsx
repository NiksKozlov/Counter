import React, {ChangeEvent, useState} from 'react';
import s from './SetScoreboard.module.css'
import SuperButton from '../SuperButton/SuperButton';

type PropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setToLocalStorage: () => void
}

function Scoreboard(props: PropsType) {

    return (
        <div className="wrapper-board">
            <div className="wrapper-interface">
                <div className={s.setInterface}>
                    <div className={s.setItem}>
                        max value:
                        <input
                            className={props.startValue === props.maxValue ? s.inputError : s.input}
                            type={'number'}
                            value={props.maxValue}
                            onChange={props.changeMaxValue}
                        />
                    </div>
                    <div className={s.setItem}>
                        start value:
                        <input
                            className={props.startValue < 0 ||
                            props.startValue === props.maxValue ? s.inputError : s.input}
                            type={'number'}
                            value={props.startValue}
                            onChange={props.changeStartValue}
                        />
                    </div>
                </div>
            </div>
            <div className="wrapper-buttons">
                <SuperButton
                    onClick={props.setToLocalStorage}
                    title={'set'}
                    value={0}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                />
            </div>
        </div>
    );
};

export default Scoreboard;