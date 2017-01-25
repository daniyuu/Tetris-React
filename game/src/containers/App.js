import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import ControllerBoard from './ControllerBoard';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ControllerBoard/>
            </div>
        );
    }
}

export default App;
