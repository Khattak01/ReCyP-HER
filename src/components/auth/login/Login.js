import React, { useState, useEffect } from "react";
import Hr from "../../../UI/hr/Hr";
import classes from "../Auth.module.css";
import Input from "../../../UI/input/Input";
import Button from "../../../UI/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../UI/loader/Loader";
// import useRouter from "../../../hooks/useRouter";

//redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/features/auth'
import { alertAdded } from "../../../store/features/alert";
// import { addActor } from '../../../store/features/actors'


const Login = ({ notify }) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const loading = useSelector(state => state.auth.loading)


    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            setFormData({
                email: "",
                password: "",
            })
        }
    }, [])

    const formChangeHandler = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const loginClickHandler = () => {

        dispatch(alertAdded({ msg: "Login Successful", alertType: 'success' }))

        const { password, email } = formData;
        // console.log("Login button clicked", email, password);
        dispatch(login({ email, password }))
        navigate("/dashboard")
    };

    //redirect if login or register and have valid token, uncomment this before live
    if (isAuthenticated && !loading) {

    }
    return (
        <>

            {loading ? <Loader /> : null}
            <div className={[classes.login, classes.auth].join(" ")}>
                <h1 className="heading--secondary">Login</h1>
                <Hr />

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
                <div className={classes.auth__bottom}>
                    <div>
                        <p className="text">
                            Don't have an account? <Link to={"/register"}>register</Link>
                        </p>
                        <Button onClick={loginClickHandler} value="Login" />
                    </div>
                    <div>
                        <p className="text">
                            <Link to="/login" onClick={() => alert("Hey, don't click me")}>forgot password?</Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
