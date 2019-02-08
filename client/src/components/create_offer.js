import React from 'react';

export default class CreateOffer extends React.Component {
    render() {
        return (
            <div className="offer-create-container">
                <h1 className="label">Offer Title</h1><span className="sub-label"> (optional) - not shown to your customers</span>
                <input className="full-width mr-10-0 input-form" type="text" placeholder="Offer title" />
                <h1 className="label">Product(s) Offered</h1>
                <ul className="list-product-in-offer">
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg" alt="tshirt" />
                        <span className="product-title">Short Sleeve T Shirt</span>
                        <span className="remove-btn">REMOVE</span>
                    </li>
                </ul>
                <span className="sub-label">add a product to the offer (start typing the product name, then select from the list):</span>
                <input className="full-width mr-10-0 input-form" type="text" placeholder="Enter product name here" />
            </div>
        )
    }
}