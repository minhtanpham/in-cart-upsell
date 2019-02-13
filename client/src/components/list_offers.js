import React from 'react';
import ToggleSwitch from './toggle_switch';
import ReactTooltip from 'react-tooltip'

export default class ListOffer extends React.Component {
    render() {
        return (
            <div className="container card pd-20 mrt-50">
                <ReactTooltip />
                <h2 className="page-title">My Offer</h2>
                <table style={{width: '100%'}}>
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
                                <i data-tip="Edit" className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                <i data-tip="Duplicate" className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                <i data-tip="remove" className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Black Hat</td>
                            <td>25%</td>
                            <td><ToggleSwitch /></td>
                            <td>
                                <i data-tip="Edit" className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                <i data-tip="Duplicate" className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                <i data-tip="remove" className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Black Hat</td>
                            <td>25%</td>
                            <td><ToggleSwitch /></td>
                            <td>
                                <i data-tip="Edit" className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit"></i>
                                <i data-tip="Duplicate" className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                                <i data-tip="remove" className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}