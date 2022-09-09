import React from 'react';
import s from './Scoreboard.module.css'

type PropsType = {
    score: number
}

function Scoreboard(props: PropsType) {
    return (
        <div className={props.score === 5 ? s.scoreboardRed : s.scoreboard}>
            {props.score}
        </div>
    );
};

export default Scoreboard;