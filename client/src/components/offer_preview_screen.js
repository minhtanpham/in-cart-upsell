import React from 'react';

import OfferPreview from './offer_preview';
import CreateOffer from './create_offer';
import LookAndFeel from './look_and_feel';
import WhenShow from './when_show_offer';
import Switch from "react-switch";
import axios from 'axios';
import setting from '../const';
import { Redirect } from 'react-router-dom';

const parseBoolean = (context) => {
    if (context) {
        if (typeof context === 'boolean') return context
        return (context.toLowerCase() === "true");
    } else {
        return false
    }
}

export default class OfferPreviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'create',
            status: true,
            offer_title: '',
            list_products: [],
            offer_headline: 'Would you like to add a Short Sleeve T Shirt for $9.99?',
            headline_color: '#000',
            button_text: 'Add to cart',
            button_color: '#000',
            width: 125,
            height: 40,
            button_border: 1,
            border_color: '#03C3AD',
            border_size: 1,
            border_style: 'solid',
            border_radius: 0,
            background_color: '#ccc',
            show_product_image: true,
            hide_out_of_stock: false,
            link_product: true,
            show_x: true,
            auto_remove: false,
            condition: [
                { wrapCondition: 'all', mainCondition: 'contain_at_least', number: 0, id: '', country: '' }
            ],
            redirect: false
        }
        this.handleChangeOfferTitle = this.handleChangeOfferTitle.bind(this)
        this.handleChangeListProducts = this.handleChangeListProducts.bind(this)
        this.handleChangeOfferHeadline=this.handleChangeOfferHeadline.bind(this)
        this.handleChangeHeadlineColor=this.handleChangeHeadlineColor.bind(this)
        this.handleChangeButtonText=this.handleChangeButtonText.bind(this)
        this.handleChangeButtonColor=this.handleChangeButtonColor.bind(this)
        this.handleChangeWidth=this.handleChangeWidth.bind(this)
        this.handleChangeHeight=this.handleChangeHeight.bind(this)
        this.handleChangeButtonBorder=this.handleChangeButtonBorder.bind(this)
        this.handleChangeBorderColor=this.handleChangeBorderColor.bind(this)
        this.handleChangeBorderStyle=this.handleChangeBorderStyle.bind(this)
        this.handleChangeBorderRadius=this.handleChangeBorderRadius.bind(this)
        this.handleChangeBorderSize=this.handleChangeBorderSize.bind(this)
        this.handleChangeBackgroundColor=this.handleChangeBackgroundColor.bind(this)
        this.handleChangeShowProductImage=this.handleChangeShowProductImage.bind(this)
        this.handleChangeHideOutOfStock=this.handleChangeHideOutOfStock.bind(this)
        this.handleChangeLinkToProduct=this.handleChangeLinkToProduct.bind(this)
        this.handleChangeShowX=this.handleChangeShowX.bind(this)
        this.handleChangeAutoRemove=this.handleChangeAutoRemove.bind(this)
        this.handleChangeWrapCondition=this.handleChangeWrapCondition.bind(this)
        this.handleChangeMainCondition=this.handleChangeMainCondition.bind(this)
        this.handleChangeConditionNumber=this.handleChangeConditionNumber.bind(this)
        this.handleChangeProductConditionID=this.handleChangeProductConditionID.bind(this)
        this.handleChangeCountryCondition=this.handleChangeCountryCondition.bind(this)
        this.handleAddRule=this.handleAddRule.bind(this)
        this.handleRemoveRule=this.handleRemoveRule.bind(this)
        this.changeStatus=this.changeStatus.bind(this)
    }

    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        let self = this
        if (id) {
            axios(`${setting.host}/api/get/offer`, {
                method: 'GET',
                params: {
                    id: id
                }
            })
            .then(function (response) {
                const data = response.data;
                self.setState({
                    status: parseBoolean(data.status),
                    offer_title: data.offer_title,
                    list_products: JSON.parse(data.list_products),
                    offer_headline: data.offer_headline,
                    headline_color: data.headline_color,
                    button_text: data.button_text,
                    button_color: data.button_color,
                    width: data.width,
                    height: data.height,
                    button_border: data.button_border,
                    border_color: data.border_color,
                    border_size: data.border_size,
                    border_style: data.border_style,
                    border_radius: data.border_radius,
                    background_color: data.background_color,
                    show_product_image: parseBoolean(data.show_product_image),
                    hide_out_of_stock: parseBoolean(data.hide_out_of_stock),
                    link_product: parseBoolean(data.link_product),
                    show_x: parseBoolean(data.show_x),
                    auto_remove: parseBoolean(data.auto_remove),
                    condition: JSON.parse(data.condition)
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    changePage(page) {
        this.setState({ page })
    }

    changeStatus() {
        this.setState({ status: !this.state.status })
    }

    handleChangeOfferTitle(title) {
        this.setState({ offer_title: title })
    }

    handleChangeListProducts(products) {
        this.setState({ list_products: products })
    }

    handleChangeOfferHeadline(headline) {
        this.setState({ offer_headline: headline })
    }

    handleChangeHeadlineColor(color) {
        this.setState({ headline_color: color })
    }

    handleChangeButtonText(text) {
        this.setState({ button_text: text })
    }

    handleChangeButtonColor(color) {
        this.setState({ button_color: color })
    }

    handleChangeWidth(width) {
        this.setState({ width: `${width}` })
    }

    handleChangeHeight(height) {
        this.setState({ height: `${height}` })
    }

    handleChangeButtonBorder(border) {
        this.setState({ button_border: border })
    }

    handleChangeBorderColor(color) {
        this.setState({ border_color: color })
    }

    handleChangeBorderStyle(style) {
        this.setState({ border_style: style })
    }

    handleChangeBorderSize(size) {
        this.setState({ border_size: size })
    }

    handleChangeBorderRadius(radius) {
        this.setState({ border_radius: radius })
    }

    handleChangeBackgroundColor(color) {
        this.setState({ background_color: color })
    }

    handleChangeShowProductImage() {
        this.setState({ show_product_image: !this.state.show_product_image })
    }

    handleChangeHideOutOfStock() {
        this.setState({ hide_out_of_stock: !this.state.hide_out_of_stock })
    }

    handleChangeLinkToProduct() {
        this.setState({ link_product: !this.state.link_product })
    }

    handleChangeShowX() {
        this.setState({ show_x: !this.state.show_x })
    }

    handleChangeAutoRemove() {
        this.setState({ auto_remove: !this.state.auto_remove })
    }

    handleChangeWrapCondition(condition) {
        let conditionTemp = this.state.condition
        for (var i = 0; i < conditionTemp.length; i++) {
            conditionTemp[i].wrapCondition = condition
        }
        this.setState({ condition:  conditionTemp })
    }

    handleChangeMainCondition(condition, index) {
        let conditionTemp = this.state.condition
        conditionTemp[index].mainCondition = condition
        this.setState({ condition:  conditionTemp })
    }

    handleChangeConditionNumber(number, index) {
        let conditionTemp = this.state.condition
        conditionTemp[index].number = number
        this.setState({ condition:  conditionTemp })
    }

    handleChangeProductConditionID(id, index) {
        let conditionTemp = this.state.condition
        conditionTemp[index].id = id
        this.setState({ condition:  conditionTemp })
    }

    handleChangeCountryCondition(country, index) {
        let conditionTemp = this.state.condition
        conditionTemp[index].country = country
        this.setState({ condition:  conditionTemp })
    }

    handleAddRule() {
        let current_rule = this.state.condition
        let new_rule = { wrapCondition: 'all', mainCondition: 'contain_at_least', number: 0, id: '' }
        current_rule.push(new_rule);
        this.setState({ condition: current_rule })
    }

    handleRemoveRule(index) {
        let rules = this.state.condition;
        if (index > -1) {
            rules.splice(index, 1);
        }
        this.setState({ condition: rules })
    }

    saveOffer() {
        var self = this;
        // check the id from url
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        if (id) {
            axios(`${setting.host}/api/update/offer`, {
                method: 'POST',
                params: {
                    _id: id,
                    shop: setting.shop,
                    status: self.state.status,
                    offer_title: self.state.offer_title,
                    list_products: JSON.stringify(self.state.list_products),
                    offer_headline: self.state.offer_headline,
                    headline_color: self.state.headline_color,
                    button_text: self.state.button_text,
                    button_color: self.state.button_color,
                    width: self.state.width,
                    height: self.state.height,
                    button_border: self.state.button_border,
                    border_color: self.state.border_color,
                    border_size: self.state.border_size,
                    border_style: self.state.border_style,
                    border_radius: self.state.border_radius,
                    background_color: self.state.background_color,
                    show_product_image: self.state.show_product_image,
                    hide_out_of_stock: self.state.hide_out_of_stock,
                    link_product: self.state.link_product,
                    show_x: self.state.show_x,
                    auto_remove: self.state.auto_remove,
                    condition: JSON.stringify(self.state.condition),
                    createdAt: new Date()
                }
            })
            .then(function (response) {
                self.setState({ redirect: true })
            })
            .catch(function (error) {
                console.log(error);
            })
        } else {
            axios(`${setting.host}/api/create/offer`, {
                method: 'POST',
                params: {
                    shop: setting.shop,
                    status: self.state.status,
                    offer_title: self.state.offer_title,
                    list_products: JSON.stringify(self.state.list_products),
                    offer_headline: self.state.offer_headline,
                    headline_color: self.state.headline_color,
                    button_text: self.state.button_text,
                    button_color: self.state.button_color,
                    width: self.state.width,
                    height: self.state.height,
                    button_border: self.state.button_border,
                    border_color: self.state.border_color,
                    border_size: self.state.border_size,
                    border_style: self.state.border_style,
                    border_radius: self.state.border_radius,
                    background_color: self.state.background_color,
                    show_product_image: self.state.show_product_image,
                    hide_out_of_stock: self.state.hide_out_of_stock,
                    link_product: self.state.link_product,
                    show_x: self.state.show_x,
                    auto_remove: self.state.auto_remove,
                    condition: JSON.stringify(self.state.condition),
                    createdAt: new Date()
                }
            })
            .then(function (response) {
                self.setState({ redirect: true })
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    renderContainerPage(page) {
        switch (page) {
            case 'create':
                return <CreateOffer data={this.state} handleChangeOfferTitle={this.handleChangeOfferTitle} handleChangeListProducts={this.handleChangeListProducts} />
            case 'look':
                return <LookAndFeel
                            data={this.state}
                            handleChangeOfferHeadline={this.handleChangeOfferHeadline}
                            handleChangeHeadlineColor={this.handleChangeHeadlineColor}
                            handleChangeButtonText={this.handleChangeButtonText}
                            handleChangeButtonColor={this.handleChangeButtonColor}
                            handleChangeWidth={this.handleChangeWidth}
                            handleChangeHeight={this.handleChangeHeight}
                            handleChangeButtonBorder={this.handleChangeButtonBorder}
                            handleChangeBorderColor={this.handleChangeBorderColor}
                            handleChangeBorderStyle={this.handleChangeBorderStyle}
                            handleChangeBorderRadius={this.handleChangeBorderRadius}
                            handleChangeBorderSize={this.handleChangeBorderSize}
                            handleChangeBackgroundColor={this.handleChangeBackgroundColor}
                            handleChangeShowProductImage={this.handleChangeShowProductImage}
                            handleChangeHideOutOfStock={this.handleChangeHideOutOfStock}
                            handleChangeLinkToProduct={this.handleChangeLinkToProduct}
                            handleChangeShowX={this.handleChangeShowX}
                            handleChangeAutoRemove={this.handleChangeAutoRemove}
                        />
            case 'when':
                return <WhenShow
                            data={this.state.condition}
                            handleChangeWrapCondition={this.handleChangeWrapCondition}
                            handleChangeMainCondition={this.handleChangeMainCondition}
                            handleChangeConditionNumber={this.handleChangeConditionNumber}
                            handleChangeProductConditionID={this.handleChangeProductConditionID}
                            handleChangeCountryCondition={this.handleChangeCountryCondition}
                            handleAddRule={this.handleAddRule}
                            handleRemoveRule={this.handleRemoveRule}
                        />
            default:
                return <CreateOffer />
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) return true
        return false;
    }

    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/app'/>;
        }

        return (
            <React.Fragment>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-12" style={{padding: '15px'}}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1 className="page-title">Offer Preview</h1>
                                    <span className="page-description">save your changes to see the updated preview</span>
                                </div>
                                <div className="col-lg-7">
                                    <OfferPreview data={this.state} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-12 pd-20">
                            <h1 className="page-title">Offer Setup</h1>
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="preview-list-menu">
                                        <li onClick={() => this.changePage('create')} className={(this.state.page === 'create') ? 'active' : ''} >1. What To Offer</li>
                                        <li onClick={() => this.changePage('look')} className={(this.state.page === 'look') ? 'active' : ''} >2. Offer Look &amp; Feel</li>
                                        <li onClick={() => this.changePage('when')} className={(this.state.page === 'when') ? 'active' : ''} >3. When To Show Offer</li>
                                    </ul>
                                    <div className="row no-padding">
                                        <div className="col-lg-12 mrt-10">
                                            <button className="btn btn-primary mrr-10" onClick={() => this.saveOffer()}>Save Offer</button>
                                            <button className="btn btn-dark">Cancel</button>
                                        </div>
                                        <div className="col-lg-12 mrt-10">
                                            <span className="full-width block">
                                                {
                                                    this.state.status ? 'Status: Enable' : 'Status: Disable'
                                                }
                                            </span>
                                            <Switch onChange={this.changeStatus} checked={this.state.status} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    { this.renderContainerPage(this.state.page) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}