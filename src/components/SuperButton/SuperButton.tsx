import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    func: () => void
    score: number
    title: string
    value: number
}

function Increment(props: PropsType) {
    return (
        <button disabled={props.score === props.value}
                className={s.button}
                onClick={props.func}>{props.title}</button>
    );
}

export default Increment;