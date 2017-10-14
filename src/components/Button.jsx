import React, {Component} from 'react'

class Button extends Component {

    constructor(props) {
        super(props)        
    }

    render() {
        return (
            <button onClick={this.props.handleGet} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
               {this.props.text}
            </button>
        )
    }
}

export default Button