import React, {ChangeEvent, useState} from 'react';
import s from './SetScoreboard.module.css'
import SuperButton from '../SuperButton/SuperButton';

type PropsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setToLocalStorage: () => void
    disabledCondition: () => boolean
}

function Scoreboard(props: PropsType) {

    const checkParamForStyle = ():string => {
       return  props.minValue === props.maxValue ||
        props.minValue === undefined ||
        props.minValue > props.maxValue ||
        props.minValue < 0 ? s.inputError : s.input
    }

    return (
        <div className="wrapper-board">
            <div className="wrapper-interface">
                <div className={s.setInterface}>
                    <div className={s.setItem}>
                        max value:
                        <input
                            className={checkParamForStyle()}
                            type={'number'}
                            value={props.maxValue}
                            onChange={props.changeMaxValue}
                        />
                    </div>
                    <div className={s.setItem}>
                        min value:
                        <input
                            className={checkParamForStyle()}
                            type={'number'}
                            value={props.minValue}
                            onChange={props.changeStartValue}
                        />
                    </div>
                </div>
            </div>
            <div className="wrapper-buttons">
                <SuperButton
                    onClick={props.setToLocalStorage}
                    title={'set'}
                    disabledCondition={props.disabledCondition}
                />
            </div>
        </div>
    );
}

export default Scoreboard;