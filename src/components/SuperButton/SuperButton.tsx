import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    onClick: () => void
    title: string
    disabledCondition: () => boolean
}

function Increment(props: PropsType) {
    return (
        <button
            disabled={props.disabledCondition()}
            className={s.button}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}

export default Increment;