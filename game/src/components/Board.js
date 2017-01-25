/**
 * Created by yueych on 1/22/2017.
 */

import React, {Component} from 'react';

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <button onClick={this.props.onClick}>
                    StartGame
                </button>
                <text >
                    startGame:{this.props.gameStart ? 'Yes' : 'No'}
                </text>
            </div>
        )
    }
}

export default Board;