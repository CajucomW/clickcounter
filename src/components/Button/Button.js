import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render () {
        return (
            <div onClick={this.props.selected} className="Button">
                {/* "selected" above comes from App.js where "clickCounter"*/}
                    {/* function is applied */}
                {this.props.text}
                {/* "text" above comes from App.js where */}
                    {/* "Click" text is applied */}
        </div>
        );
    }
}

export default Button;