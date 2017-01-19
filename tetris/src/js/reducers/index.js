import {combineReducers} from 'redux';
import settings from './settings';
import {REFRESH_BOARD} from 'actions/index'

function board(state = [], action) {
    switch (action.type) {
        case REFRESH_BOARD:
            return action.elements;
        default:
            return state;
    }
}

const tetrisApp = combineReducers({
    board
});

export default tetrisApp;