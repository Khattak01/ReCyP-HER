import React from 'react';
import GameMain from './game-main/GameMain';
import classes from './Game.module.css'

import Sidebar from './sidebar/Sidebar';

const Game = () => {
    return <div className={`${classes.game} container`}>

        <Sidebar />
        <GameMain />

    </div>;
};

export default Game;
