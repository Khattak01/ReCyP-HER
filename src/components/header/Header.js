import React, { useState,  } from 'react'
import classes from './Header.module.css'
import Logo from '../logo/Logo'

//redux
import { useSelector } from 'react-redux';

const Header = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    // const type = useSelector(state => state.auth.user.type)
    const [showMenu, setShowMenu] = useState(false);

    const toggleClickHandler = () => {
        setShowMenu(!showMenu);
    };

    let link = "dashboard"
    // if(type==='lab')
    //     link = "lab-dashboard"
    // else if(type==='subAdmin')
    //     link = "sub-admin-dashboard"

    const [links, setLinks] = useState([
        { name: "Home", click: true, link: '' },
        { name: "Login", click: false, link: 'login' },
        { name: "Sign Up", click: false, link: 'signup' },
        { name: "Dashboard", click: false, link: link },
    ])


    return (
        <div className={classes.header}>
            <nav className={classes.navbar + " container"}>
                {/* <div className={classes.logo__box}>
                    <h1>DengueExe</h1>
                </div> */}
                <Logo className={classes.logo} />
                <ul className={[classes.navbar__links,showMenu && classes.show__links].join(" ")}>
                </ul>
            </nav>
        </div>
    )
}

export default Header
