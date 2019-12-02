import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render () {
        return (
            <div onClick={this.props.selected} className="Button">
                {this.props.text}
        </div>
        );
    }
}

export default Button;

      
