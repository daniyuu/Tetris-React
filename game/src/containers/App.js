import React, {Component} from 'react';
import 'styles/App.css';
import ControllerBoard from 'containers/ControllerBoard';

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
