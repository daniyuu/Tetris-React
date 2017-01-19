export const INIT_BOARD = 'INIT_BOARD';

export function initBoard() {
    return {
        type: INIT_BOARD
    }
}

export const REFRESH_BOARD = "REFRESH_BOARD";

export function refreshBoard(elements) {
    return {type: INIT_BOARD, elements}
}