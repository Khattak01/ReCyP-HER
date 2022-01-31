import React, { useEffect } from "react";
import "./App.css";
// import Header from "../header/Header";
import Login from "../auth/login/Login";
import SignUp from "../auth/sign-up/SignUp";
// import Home from "../home/Home";
import Dashboard from '../dashbaord/Dashboard'
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import store from '../../store/store'
import { loadUser } from '../../store/features/auth'
import { setAlertDisplay } from "../../store/features/alert";
import Game from "../game/Game";
// import { arrayContains } from "../../utils/methods";


const App = () => {

    // if (localStorage.token) {
    //     setAuthToken(localStorage.token)
    // }
    const dispatch = useDispatch();
    const alerts = useSelector((state) => state.alerts);
    // const auth = useSelector(state => state.auth)


    useEffect(() => {
        // store.dispatch(clearActor())
        store.dispatch(loadUser())
        return () => {
        }
    }, [])

    // const link = pathname
    // // console.log("link >>> ",link)
    // const header = [
    //     "/",
    //     "/login",
    //     "/signup",
    // ]


    //handle global alerts - using redux
    useEffect(() => {
        if (alerts.length) {
            // toast("TEst alert")
            alerts.forEach(alrt => {
                if (!alrt.display)
                    toast[alrt.alertType](alrt.msg, {
                        autoClose: alrt.timeout ? alrt.timeout : 5000
                    })


                dispatch(setAlertDisplay({ display: true, id: alrt.id }))
            })
        }

    }, [alerts]);


    return (
        <div className="app">

            {/**exclude header for dashboard page */}
            {/* {arrayContains(link, header) && <Header />} */}
            {/* <div className="alert-box">
                {alerts?.length > 0 ? (
                    alerts.map((alrt) => (
                        <Alert key={alrt.id} alert={alrt} />
                    ))
                ) : null}
            </div> */}
            <ToastContainer />
            {/* <Home /> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <Header /> */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/game" element={<Game />} />

                <Route path="/" element={<Login />} />
            </Routes>
        </div >
    );
};

export default App;
