import React, {Component} from 'react';
import 'css/App.css';
import Board from './Board';
import BlockElem from './BlockElem';
import GameController from 'js/containers/GameController';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        };
    }

    changeColor() {
        this.setState({flag: false});
    }

    render() {
        return (
            <div className="App">
                <GameController/>
                <Board/>
                <Board/>
                <BlockElem isBlank={true}/>
                <BlockElem isBlank={false}/>
                <BlockElem isBlank={true}/>
            </div>
        );
    }
}

export default App;
