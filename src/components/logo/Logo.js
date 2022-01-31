import React from 'react'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = ({ to, className }) => {
    return (
        <Link to={to || '/'} className={[classes.logo__box, className].join(" ")}>
            <h1>Click Dummy</h1>
        </Link>
    )
}

export default Logo
