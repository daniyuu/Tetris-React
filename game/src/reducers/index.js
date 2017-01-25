/**
 * Created by yueych on 1/22/2017.
 */
import {combineReducers} from 'redux'

const initialState = {
    gameStart: false
};


function gameBoard(state = initialState, action) {
    switch (action.type) {
        case "REFRESH_BOARD":
            return {gameStart: true};
        default:
            return state;
    }
}

const todoApp = combineReducers({
    gameBoard
});

export default todoApp;