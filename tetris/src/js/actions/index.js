export const INIT_BOARD = 'INIT_BOARD';

export function initBoard() {
    return {
        type: INIT_BOARD
    }
}

export const REFRESH_BOARD = "REFRESH_BOARD";
export const START_GAME = "START_GAME";

export function refreshBoard(elements) {
    return {type: INIT_BOARD, elements}
}

export function startGame() {
    return {type: START_GAME, flag: true}
}

let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}