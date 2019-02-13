import React from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {

    render() {
        const { match } = this.props;
        const pathName = window.location.pathname

        return (
            <div className="navigation">
                <span className="logo">
                    <img alt="In cart Upsell" src="https://res.cloudinary.com/tanpham/image/upload/v1549442699/111.png" />
                </span>
                <ul className="list-menu">
                    <Link to={`${match.url}`}>
                        <li className={(pathName === '/app') ? 'active' : ''}><i className="fa fa-home" aria-hidden="true"></i> Home</li>
                    </Link>
                    <Link to={`${match.url}/setting`}>
                        <li className={(pathName === '/app/setting') ? 'active' : ''}><i className="fa fa-bar-chart" aria-hidden="true"></i> Settings</li>
                    </Link>
                    <Link to={`${match.url}/stats`}>
                        <li className={(pathName === '/app/stats') ? 'active' : ''}><i className="fa fa-sliders" aria-hidden="true"></i> Other Stats</li>
                    </Link>
                    <Link to={`${match.url}/plan`}>
                        <li className={(pathName === '/app/plan') ? 'active' : ''}><i className="fa fa-bar-chart" aria-hidden="true"></i> Plan</li>
                    </Link>
                    <Link to={`${match.url}/feedback`}>
                        <li className={(pathName === '/app/feedback') ? 'active' : ''}><i className="fa fa-commenting-o" aria-hidden="true"></i> Feedback</li>
                    </Link>
                </ul>
            </div>
        )
    }
}