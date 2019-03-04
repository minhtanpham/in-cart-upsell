import React from 'react';
import Switch from "react-switch";
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import setting from '../const';
import Cookies from 'js-cookie';

const shop = Cookies.get('shopify_domain');
const access_token = Cookies.get('access_token');

const parseBoolean = (context) => {
    if (typeof context === 'boolean') return context
    return (context.toLowerCase() === "true");
}

export default class ListOffer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        }
    }

    fethData() {
        let self = this
        axios(`${setting.host}/api/list/offers`, {
            method: 'GET',
            params: {
                shop: shop
            }
        })
        .then(function (response) {
            self.setState({ offers: response.data })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount() {
        this.fethData();
    }

    handleUpdateStatusOffer(id, status) {
        let self = this
        axios(`${setting.host}/api/update/status/offer`, {
            method: 'POST',
            params: {
                shop: shop,
                id: id,
                status: !parseBoolean(status)
            }
        })
        .then(function (response) {
            self.fethData()
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleRemoveOffer(id) {
        let self = this
        axios(`${setting.host}/api/update/remove/offer`, {
            method: 'POST',
            params: {
                id: id
            }
        })
        .then(function (response) {
            self.fethData()
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleDuplicateOffer(id) {
        let self = this
        axios(`${setting.host}/api/update/dupplicate/offer`, {
            method: 'POST',
            params: {
                id: id
            }
        })
        .then(function (response) {
            self.fethData()
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleEditOffer(id) {
        window.location = '/app/setting?id=' + id
    }

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
                        {
                            (this.state.offers && this.state.offers.length > 0) && (
                                this.state.offers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.offer_title}</td>
                                            <td>0%</td>
                                            <td>
                                                <Switch onChange={() => this.handleUpdateStatusOffer(item._id, item.status)} checked={parseBoolean(item.status)} />
                                            </td>
                                            <td>
                                                <i data-tip="Edit" className="fa fa-pencil btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit" onClick={() => this.handleEditOffer(item._id)}></i>
                                                <i data-tip="Duplicate" className="fa fa-files-o btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Duplicate" onClick={() => this.handleDuplicateOffer(item._id)}></i>
                                                <i data-tip="Remove" className="fa fa-trash btn-action" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Remove" onClick={() => this.handleRemoveOffer(item._id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}