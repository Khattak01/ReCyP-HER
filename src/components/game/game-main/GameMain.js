import React, { useEffect } from "react";
import classes from "./GameMain.module.css";

import IntroImage from "../../../assets/intro-image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useDispatch, useSelector } from "react-redux";
import { setGameStage } from "../../../store/features/game";
import VideoFrame from "../Video-frame/VideoFrame";

const GameMain = () => {
    const dispatch = useDispatch();
    const { gameCurrentStage } = useSelector((state) => state.game);

    useEffect(() => {
        dispatch(
            setGameStage({
                id: 1,
                name: "intoduction",
                msg: "Information Regarding Simulation Game Scenario",
            })
        );
    }, []);

    const forwardBtnClickHandler = () => {
        dispatch(
            setGameStage({
                id: 2,
                name: "video",
                msg: "Game rules video",
                link: "https://www.youtube.com/watch?v=fUeJtM1bgGo"
            })
        );
    }
    const backBtnClickHandler = () => {
        dispatch(
            setGameStage({
                id: 1,
                name: "intoduction",
                msg: "Information Regarding Simulation Game Scenario",
            })
        );
    }

    return (
        <div className={classes.game_main}>
            <div className={classes.game__header}>
                <h1 className={`heading--secondary ${classes.game_header__heading}`}>
                    {gameCurrentStage.msg}
                </h1>
            </div>
            <div className={classes.game_heading__separator}></div>
            <div className={classes.game__content}>
                {gameCurrentStage?.id === 1 ?
                    <div className={classes.game__scenario}>
                        <img src={IntroImage} />
                        <p>
                            You work in a hospital. In recent months, there have been repeated
                            attacks on the IT security system. In addition to the theft of
                            sensitive data, there have also been failures in the information
                            system, which has significantly restricted the employees' work. To
                            prevent further risks, the hospital management decided to have a
                            comprehensive audit of the security gaps carried out. Initial
                            analyses indicate that the deficits do not arise at the technical
                            level, but primarily at the human level.
                        </p>
                    </div> : <VideoFrame embedId={gameCurrentStage.link} />}
            </div>
            <div className={classes.game__bottom}>
                {gameCurrentStage?.id === 1 ? <div></div> : <button onClick={() => backBtnClickHandler()} className={classes.game_button}>
                    <span>
                        <div className="display-flex">
                            <ArrowBackIcon style={{ fontSize: "1.8rem", marginLeft: ".4rem" }} />
                            Back
                        </div>
                    </span>
                </button>}
                <button onClick={() => forwardBtnClickHandler()} className={classes.game_button}>
                    <span>
                        <div className="display-flex">
                            Continue
                            <ArrowForwardIcon style={{ fontSize: "1.8rem", marginLeft: ".4rem" }} />
                        </div>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default GameMain;
