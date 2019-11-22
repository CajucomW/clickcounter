import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // react specific 'STATE'
    state = {
    // object syntax
      clicked: 0,
    }
    
    clickCounter = () => {
        console.log('getting clicked');
        let numberOfClicks = this.state.clicked;
        console.log('number of clicks', numberOfClicks);
        this.setState({
            clicked: numberOfClicks + 1,
        });
    }


    render() {
      return (
        <div className="App">
          <h1>Click Counter</h1>
          <p onClick={this.clickCounter}>Click here:</p>
          <p>
            {/* {} enters JS commands */}
            {this.state.clicked}
            </p>
          
        </div>
      );
    }
}

export default App;
