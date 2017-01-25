import {combineReducers} from 'redux';
import settings from './settings';
import {REFRESH_BOARD, START_GAME} from 'actions/index'

function board(state = [], action) {
    switch (action.type) {
        case REFRESH_BOARD:
            return action.elements;
        default:
            return state;
    }
}

function gameStatus(state = true, action) {
    switch (action.type) {
        case START_GAME:
            return true;
        default:
            return state;
    }
}

const tetrisApp = combineReducers({
    board,
    gameStatus
});

export default tetrisApp;