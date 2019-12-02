import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button.js'

class App extends Component {
    // react specific 'STATE'
    state = {
    // object syntax
      clicked: 0,
      tapped: 0,
    }
    
    clickCounter = () => {
        console.log('getting clicked');
        let numberOfClicks = this.state.clicked;
        console.log('number of clicks', numberOfClicks);
        this.setState({
            clicked: numberOfClicks + 1,
        });
    }
    
    tapCounter = () => {
        console.log('getting tapped');
        let numberOfTaps = this.state.tapped;
        console.log('number of taps', numberOfTaps);
        this.setState({
            tapped: numberOfTaps + 1,
        });
    }


    render() {
    // keep the STATE in this parent component (App.js)
    // the child component 'Button' calls the Method that applies +1
    // parents give children PROPS
    // this is the only way parents and children communicate
    
      return (
        <div className="App">
          <h1>Click Counter</h1>
          
          <Button
            text="Clicked"
            selected={this.clickCounter} />
            
          <Button
            text="Tapped"
            selected={this.tapCounter} />    
            
          <p>
            {this.state.clicked}
          </p>
          
          <p>
            {this.state.tapped}
          </p>
        </div>
      );
    }
}

export default App;
