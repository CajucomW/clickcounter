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
        // putting clicked in a variable
        
        console.log('number of clicks', numberOfClicks);
        this.setState({
            clicked: numberOfClicks + 1,
        });
        // set the state to reflect the change in number
    }
    
    tapCounter = () => {
        console.log('getting tapped');
        let numberOfTaps = this.state.tapped;
        // putting tapped in a variable
        
        console.log('number of taps', numberOfTaps);
        this.setState({
            tapped: numberOfTaps + 1,
        });
        // setting the state to reflect changes in 'tapped'
        
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
            text="Click"
            selected={this.clickCounter} />
          {/* the 'text' and 'selected' properties above */}
          {/* are sent to the Button child component to use */}
          {/* clickCounter Method is used on in the 'selected' prop*/}
          {/* to pass down to the child component */}
          {/* which activates the onClick event */}
          
          <br />
          
          <Button
            text="Tap"
            selected={this.tapCounter} />
          {/* the 'text' and 'selected' properties above */}
          {/* are sent to the Button child component to use */}
          {/* tapCounter Method is used on in the 'selected' prop*/}
          {/* to pass down to the child component */}
          {/* which activates the onClick event */}
            
          <p>
            {this.state.clicked}
            {/* this line of code shows the number of times clicked */}
          </p>
          
          <p>
            {this.state.tapped}
            {/* this line of code shows the number of times tapped */}
          </p>
        </div>
      );
    }
}

export default App;
