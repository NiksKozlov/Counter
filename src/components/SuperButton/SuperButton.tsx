import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    onClick: () => void
    score?: number
    title: string
    value: number
    maxValue?: number
    startValue?: number
}

function Increment(props: PropsType) {
    return (
        <button
            disabled={props.startValue === props.maxValue ||
                props.startValue !== undefined && props.startValue < 0}
            className={s.button}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}

export default Increment;