import React, {Component} from 'react';
import '../../css/App.css';
import Board from './Board';
import BlockElem from './BlockElem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board/>
                <BlockElem isBlank={true} />
                <BlockElem isBlank={false} />
                <BlockElem isBlank={true} />

            </div>
        );
    }
}

export default App;
