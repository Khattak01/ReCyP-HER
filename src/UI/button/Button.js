import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button {...props} className={[classes.btn, props.className].join(" ")}>{props.value}</button>
    )
}

export default Button

export const ButtonPrimary = ({ value, onClick, ...props }) => {
    return (
        <button {...props} onClick={onClick} className={classes.btn__primary}><p>{value}</p></button>
    )
}
