import React from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import setting from '../const';

export default class WhenShow extends React.Component {


    constructor (props) {
        super(props)
        this.state = {
            value: '',
            products: []
        }
        this.getProductDetail = this.getProductDetail.bind(this)
    }

    componentDidMount() {
        let self = this
        axios(`${setting.host}/api/list/products`, {
            method: 'GET',
            params: {
                shop: setting.shop,
                token: setting.access_token
            }
        })
        .then(function (response) {
            self.setState({ products: response.data.products })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    getProductDetail(product_id) {
        let self = this
        axios(`${setting.host}/api/products`, {
            method: 'GET',
            params: {
                shop: setting.shop,
                token: setting.access_token,
                product_id
            }
        })
        .then(function (response) {
            let selected = [...self.state.select_products, response.data.product]
            self.setState(prevState => ({
                select_products: selected
            }))
            self.props.handleChangeListProducts(selected)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onSelectDropdown(value, item, index) {
        let products = this.state.selected_product_id;
        products.push(item.id)
        this.setState({ value: value }, () => {
            this.props.handleChangeProductConditionID(item.id, index)
        })
    }

    render() {
        return (
            <div className="offer-create-container">
                {
                    this.props.data &&
                        this.props.data.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="full-width block">
                                        <span className="sub-label">Show the offer whenever</span>
                                        <select value={item.wrapCondition} onChange={(e) => this.props.handleChangeWrapCondition(e.target.value, index)}>
                                            <option value="all">All</option>
                                            <option value="any">Any</option>
                                        </select>
                                        <span className="sub-label">of these rules are met :</span>
                                    </div>
                                    <div className="full-width block">
                                        <select className="no-mrl" value={item.mainCondition} onChange={(e) => this.props.handleChangeMainCondition(e.target.value, index)}>
                                            <option value="contain_at_least">Cart contains at least</option>
                                            <option value="contain_exactly">Cart contains exactly </option>
                                            <option value="contain_at_most">Cart contains at most</option>
                                            <option value="does_not_contain_any">Cart does not contain any</option>
                                            <option value="total_value_at_least">Order total value is at leaste</option>
                                            <option value="total_value_at_most">Order toal value is at most</option>
                                        </select>
                                        <input type="number" style={{ width: '50px' }} className="mr-10 input-form" value={item.number} onChange={(e) => this.props.handleChangeConditionNumber(e.target.value, index)}/>
                                        <input type="text" className="mr-10 input-form" placeholder="Of product:" disabled/>
                                        <Autocomplete
                                            items={this.state.products}
                                            inputProps={{ placeholder: 'Enter product name here', className: 'full-width mr-10-0 input-form' }}
                                            shouldItemRender={(item, value) =>  item.title.toLowerCase().indexOf(value.toLowerCase()) > -1 }
                                            getItemValue={item => item.title}
                                            renderItem={(item, highlighted) =>
                                                <div
                                                    key={item.id}
                                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                                >
                                                    {item.title}
                                                </div>
                                            }
                                            value={this.state.value}
                                            onChange={e => this.setState({ value: e.target.value })}
                                            onSelect={(value, item) => this.onSelectDropdown(value, item, index) }
                                        />
                                        <span className="remove-btn">
                                            <img src="https://res.cloudinary.com/tanpham/image/upload/v1549561904/remove-btn.png" alt="remove button" onClick={() => this.props.handleRemoveRule(index)}/>
                                        </span>
                                    </div>
                                    {/* <div className="full-width block">
                                        <span className="label">AND</span>
                                        <select>
                                            <option>Ha Noi</option>
                                        </select>
                                        <select>
                                            <option>Viet Nam</option>
                                        </select>
                                        <span className="remove-btn">
                                            <img src="https://res.cloudinary.com/tanpham/image/upload/v1549561904/remove-btn.png" alt="remove button" />
                                        </span>
                                    </div> */}
                                </React.Fragment>
                            )
                        })
                }
                <div className="full-width block mrt-50">
                    <span className="sub-label">Choose a product by typing its name or ID into the box</span>
                </div>
                <div className="full-width block">
                    <button className="btn btn-primary mrt-10" onClick={() => this.props.handleAddRule()}>Add rule</button>
                </div>
            </div>
        )
    }
}