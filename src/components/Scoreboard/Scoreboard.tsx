import React from 'react';
import s from './Scoreboard.module.css'

type PropsType = {
    score: number
}

function Scoreboard(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <div className={props.score === 5 ? s.scoreboardMax : s.scoreboard}>
                {props.score}
            </div>
        </div>
    );
};

export default Scoreboard;