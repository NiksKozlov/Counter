import React from 'react';
import s from './Reset.module.css'

type PropsType = {
    resetScore: () => void
    score: number
}

function Reset(props: PropsType) {
    return (
        <button disabled={props.score === 0 ? true : false}
                className={props.score !== 0 ? s.button : s.buttonDisabled}
                onClick={props.resetScore}>reset</button>
    );
};

export default Reset;