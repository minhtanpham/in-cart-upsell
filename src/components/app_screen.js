import React from 'react';

import Navigation from './navigation';
import ToggleSwitch from './toggle_switch';

export default class AppScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="container card pd-20 mrt-50">
                    <h2 className="page-title">My Offer</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Offer</th>
                                <th>CTR</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Black Hat</td>
                                <td>25%</td>
                                <td><ToggleSwitch /></td>
                                <td>
                                    <i className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                    <i className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                    <i className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Black Hat</td>
                                <td>25%</td>
                                <td><ToggleSwitch /></td>
                                <td>
                                    <i className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                    <i className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                    <i className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Black Hat</td>
                                <td>25%</td>
                                <td><ToggleSwitch /></td>
                                <td>
                                    <i className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                    <i className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                    <i className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}