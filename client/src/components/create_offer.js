import React from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import setting from './../const';

export default class CreateOffer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            value: '',
            selected_product_id: [],
            select_products: [],
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
            self.setState(prevState => ({
                select_products: [...prevState.select_products, response.data.product]
            }))
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onSelectDropdown(value, item) {
        let products = this.state.selected_product_id;
        products.push(item.id)
        this.setState({ value: value, selected_product_id: products  },() => {
            this.getProductDetail(item.id)
        })
    }

    renderListSelectedProduct() {
        const { select_products } = this.state
        return select_products.map((item) => {
            return (
                <li key={item.id}>
                    <img src={item.image.src} alt={item.title} />
                    <span className="product-title">{item.title}</span>
                    <span className="remove-btn" onClick={() => this.removeSelectedProduct(item.id)}>REMOVE</span>
                </li>
            )
        })
    }

    removeSelectedProduct(id) {
        var array = [...this.state.select_products];
        for (var i = 0; i <= array.length; i++) {
            if (array[i].id === id) {
                array.splice(i, 1);
                this.setState({select_products: array});
            }
        }
    }

    render() {
        return (
            <div className="offer-create-container">
                <h1 className="label">Offer Title</h1><span className="sub-label"> (optional) - not shown to your customers</span>
                <input className="full-width mr-10-0 input-form" type="text" placeholder="Offer title" />
                <h1 className="label">Product(s) Offered</h1>
                <ul className="list-product-in-offer">
                    { this.renderListSelectedProduct() }
                </ul>
                <span className="sub-label">add a product to the offer (start typing the product name, then select from the list):</span>
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
                    onSelect={(value, item) => this.onSelectDropdown(value, item) }
                />
            </div>
        )
    }
}