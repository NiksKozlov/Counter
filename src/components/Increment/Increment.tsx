import React from 'react';
import s from './Increment.module.css'

type PropsType = {
    incrementScore: () => void
    score: number
}

function Increment(props: PropsType) {
    return (
        <button disabled={props.score === 5 ? true : false}
                className={props.score !== 5 ? s.button : s.buttonDisabled}
                onClick={props.incrementScore}>inc</button>
    );
};

export default Increment;