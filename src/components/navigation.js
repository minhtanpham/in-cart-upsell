import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <span className="logo">
                    <img alt="In cart Upsell" src="https://res.cloudinary.com/tanpham/image/upload/v1549442699/111.png" />
                </span>
                <ul className="list-menu">
                    <li><i className="fa fa-home" aria-hidden="true"></i> Home</li>
                    <li><i className="fa fa-sliders" aria-hidden="true"></i> Other Staff</li>
                    <li><i className="fa fa-bar-chart" aria-hidden="true"></i> Settings</li>
                    <li><i className="fa fa-commenting-o" aria-hidden="true"></i> Feedback</li>
                </ul>
            </div>
        )
    }
}