import React from 'react';
import s from './Scoreboard.module.css'
import SuperButton from '../SuperButton/SuperButton';

type PropsType = {
    value: string
    maxValue: number
    incrementScore: () => void
    resetScore: () => void
    disabledConditionInc: () => boolean
    disabledConditionReset: () => boolean
    disabledConditionSet : () => boolean
}


function Scoreboard(props: PropsType) {
    const disabledInc = () => props.disabledConditionInc() || props.disabledConditionSet();
    const disabledReset = () => props.disabledConditionReset() || props.disabledConditionSet();

    return (
        <div className="wrapper-board">
            <div className="wrapper-interface">
                <div className={+props.value === props.maxValue ? s.scoreboardMaxVal : s.scoreboard}>
                    {props.value}
                </div>
            </div>
            <div className="wrapper-buttons">
                <SuperButton
                    onClick={props.incrementScore}
                    title={'inc'}
                    disabledCondition={disabledInc}
                />
                <SuperButton
                    onClick={props.resetScore}
                    title={'reset'}
                    disabledCondition={disabledReset}
                />
            </div>
        </div>
    );
};

export default Scoreboard;