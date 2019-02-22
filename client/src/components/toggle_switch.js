import React from 'react';

export default class ToggleSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.data
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.props.callback()
    }

    render() {
        return (
            <label className="switch" onClick={(e) => this.handleClick(e)}>
                <input type="checkbox" checked={this.state.checked} readOnly/>
                <span className="slider round"></span>
            </label>
        )
    }
}