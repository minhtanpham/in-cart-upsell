import React from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="navigation">
                <span className="logo">
                    <img alt="In cart Upsell" src="https://res.cloudinary.com/tanpham/image/upload/v1549442699/111.png" />
                </span>
                <ul className="list-menu">
                    <Link to={`/app`}>
                        <li className="active"><i className="fa fa-home" aria-hidden="true"></i> Home</li>
                    </Link>
                    <Link to={`/setting`}>
                        <li><i className="fa fa-bar-chart" aria-hidden="true"></i> Settings</li>
                    </Link>
                    <Link to={`/`}>
                        <li><i className="fa fa-sliders" aria-hidden="true"></i> Other Staff</li>
                    </Link>
                    <Link to={`/`}>
                        <li><i className="fa fa-commenting-o" aria-hidden="true"></i> Feedback</li>
                    </Link>
                </ul>
            </div>
        )
    }
}