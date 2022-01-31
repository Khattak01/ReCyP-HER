import React, { useState } from 'react';
import classes from './Dashbaord.module.css'

import Hr from '../../UI/hr/Hr';
import CreateIcon from '@mui/icons-material/Create';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import Button from '../../UI/button/Button'



import { useDispatch } from 'react-redux';
import { logout } from '../../store/features/auth';
import { alertAdded } from '../../store/features/alert';

const Dashboard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [window, setWindow] = useState("main")
    const [copy, setCopy] = useState(false);
    const [copyValue, setCopyValue] = useState("Test");
    const [key, setKey] = useState("SomeRandomKey31exbnecnwlc ");

    const createTeamHandler = () => {
        setWindow("create-team")
    }

    const joinTeamHandler = () => {
        setWindow("join-team")
        dispatch(alertAdded({ msg: "Welcome to TEST Team", alertType: 'success' }))
    }

    const createTeamSubmitHandler = () => {
        console.log("Team cretaed");
        dispatch(alertAdded({ msg: "Team created", alertType: 'success' }))

    }
    const joinTeamSubmitHandler = () => {
        console.log("Team joined");
        dispatch(alertAdded({ msg: "Team created", alertType: 'success' }))
        navigate('/game')

    }


    const backClickHandler = () => {
        setWindow("main")
        // console.log("Back click handler");
    }

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
        dispatch(alertAdded({ msg: "Logging out", alertType: 'error' }, 1000))

    }

    return <div className={`container ${classes.dashboard}`}>
        <h1 className="heading--secondary">ReCyP:HER</h1>
        <Hr />
        {window === "main" && <div className={classes.dashboard__btn_box}>
            <button onClick={createTeamHandler}> <CreateIcon style={{ marginRight: '.5rem' }} fontSize='large' /> Create Team</button>
            <button onClick={joinTeamHandler}><JoinInnerIcon style={{ marginRight: '.5rem' }} fontSize='large' /> Join Team</button>
        </div>}
        {window !== "main" && <h4 style={{ textAlign: "center" }} className={`heading--tertiary`} >{window === "create-team" ? "Create Team" : "Join Team"} </h4>}
        {window === "create-team" && <div className={classes.dashboard__create_team}>
            <div className={classes.dashboard__input_box}>
                <label htmlFor={'teamName'}>Team Name</label>
                <input id='teamName' placeholder="Enter your team name" />
            </div>
            <Button className={classes.dashboard__create_btn} onClick={createTeamSubmitHandler} value="Submit" />
            <p className={`${classes.dashboard__create_para} text`}>Send the following token to your team mates, they can join your team using the below token after registration (display key after verification of team name -_- backend logic)</p>
            <CopyToClipboard text={copyValue}
                onCopy={() => setCopy(true)}>
                <div className={classes.dashboard__copy_box}>
                    <p>{key}
                        <IconButton aria-label="copy" size="large">
                            <ContentCopyIcon style={{ margin: "0 !important", padding: "0px !important" }} fontSize="inherit" />
                        </IconButton>
                    </p>
                    <span>{copy ? "Copied!" : ""}</span>
                </div>
            </CopyToClipboard>
        </div>}
        {window === "join-team" && <div className={classes.dashboard__join_team}>
            <div className={classes.dashboard__input_box}>
                <label htmlFor={'teamName'}>Team Code</label>
                <input id='teamName' placeholder="Enter your team code" />
            </div>
            <Button className={classes.dashboard__create_btn} onClick={joinTeamSubmitHandler} value="Join" />
        </div>}
        <div className={classes.dashboard__logout_button_box}>
            <button onClick={window === "main" ? logoutHandler : backClickHandler} className={classes.dashboard__logout_button}><span>{window === "main" ? "Logout" : <div className="display-flex"> <ArrowBackIcon style={{ marginRight: ".4rem" }} /> Back</div>}</span></button>
        </div>
    </div>;
};

export default Dashboard;
