import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../UI/button/Button'
import Hr from '../../../UI/hr/Hr'
import Input from "../../../UI/input/Input";
import classes from '../Auth.module.css'
import Loader from '../../../UI/loader/Loader';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../store/features/auth'
import { alertAdded } from '../../../store/features/alert'

const SignUp = () => {

    const { loading, isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // const {history} = useRouter()
    // console.log("loading >>>",loading)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })
    useEffect(() => {
        return () => {
            setFormData({
                email: "",
                password: "",
                password: "",
                password2: ""
            })
        }
    }, [])
    const [selectValue, setSelectValue] = useState("user")

    const selectOnChange = (e) => {
        setSelectValue(e.target.value)
        // console.log("selectValue >> ", selectValue)
    }

    const formChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const registerClickHandler = () => {
        const { name, email, password, password2 } = formData;
        if (password !== password2) {
            dispatch(alertAdded("Passwords do not match", "danger"))
            return;
        }
        dispatch(register({ name, email, password }, selectValue))

        // history.push('dashboard')
    }

    return (
        <div className={[classes.signup, classes.auth].join(' ')}>
            {loading ? <Loader /> : null}
            <h1 className="heading--secondary">Register</h1>
            <Hr />
            <Input
                className={classes.auth__input}
                label="Name"
                name="name"
                onChange={formChangeHandler}
                value={formData.name}
                placeholder="Enter your name"
            />
            <Input
                className={classes.auth__input}
                label="Email"
                name="email"
                onChange={formChangeHandler}
                value={formData.email}
                placeholder="Enter your email"
            />
            <Input
                type="password"
                className={classes.auth__input}
                label="Password"
                name="password"
                onChange={formChangeHandler}
                value={formData.password}
                placeholder="Enter your password"
            />
            <Input
                type="password"
                className={classes.auth__input}
                label="Confirm password"
                name="password2"
                onChange={formChangeHandler}
                value={formData.password2}
                placeholder="Confirm password"
            />
            <div className={classes.auth__bottom}>
                <div>

                    <p className="text">Already have an account? <Link to={'/login'}>login</Link></p>

                    <Button onClick={registerClickHandler} value="Register" />
                </div>
            </div>
        </div>
    )
}

export default SignUp