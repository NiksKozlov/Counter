import React from 'react';
import s from './Scoreboard.module.css'
import SuperButton from '../SuperButton/SuperButton';

type PropsType = {
    score: number
    incrementScore: () => void
    resetScore: () => void
}

function Scoreboard(props: PropsType) {
    return (
        <div className="wrapper-board">
            <div className="wrapper-interface">
                <div className={props.score === 5 ? s.scoreboardMax : s.scoreboard}>
                    {props.score}
                </div>
            </div>
            <div className="wrapper-buttons">
                <SuperButton
                    score={props.score}
                    onClick={props.incrementScore}
                    title={'inc'}
                    value={5}
                />
                <SuperButton
                    score={props.score}
                    onClick={props.resetScore}
                    title={'reset'}
                    value={0}
                />
            </div>
        </div>
    );
};

export default Scoreboard;