import React from 'react';
import  Btn  from './styles.js';

class Button extends React.Component {
    render() {
        return (
            <Btn
                value={this.props.value}
                onClick={this.props.onClick}
            >
                {this.props.title}
            </Btn>
        )
    }
}
export default Button;