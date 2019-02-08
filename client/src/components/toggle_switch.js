import React from 'react';

export default class ToggleSwitch extends React.Component {
    render() {
        return (
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        )
    }
}