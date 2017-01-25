import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {startGame} from 'js/actions/index';


let GameController = () => {
    return (
        <div>
            <button onClick={() => dispatch(startGame)}>
                Start Game
            </button>
        </div>
    )
};
//
// GameController = connect()(GameController);

export default GameController;
