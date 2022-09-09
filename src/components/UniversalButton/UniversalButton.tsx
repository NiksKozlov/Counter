import React from 'react';
import s from './UniversalButton.module.css'

type PropsType = {
    setScore: () => void
    score: number
    title: string
}

function UniversalButton(props: PropsType) {
    return (
        <button disabled={props.score === 0 ? true : false}
                className={props.score !== 0 ? s.button : s.buttonDisabled}
                onClick={props.setScore}>{props.title}</button>
    );
};

export default UniversalButton;