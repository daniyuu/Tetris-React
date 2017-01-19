import React, {Component} from 'react';

class Board extends Component {
    constructor() {
        super();

        this.state = {
            NUM_ROWS: 20,
            NUM_COLS: 10,
            rows: this.getBoard()
        };

    }

    getBoard() {
        var rows = [];
        for (var i = 0; i < 20; ++i) {
            rows[i] = [];
            for (var j = 0; j < 10; ++j) {
                rows[i][j] = 0;
            }
        }
        return rows;
    };

    render() {
        this.getBoard();
        return (
            <div className="Board">
                Board
            </div>
        );
    }
}

export default Board;
