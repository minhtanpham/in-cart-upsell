import React from 'react';

export default class OfferPreview extends React.Component {
    render() {
        
        return (
            <div className="offer-preview-container">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="offer-product-preview" alt="shirt" src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_10_406456?$pdp-medium$" />
                    </div>
                    <div className="col-l-9 text-center">
                        <span className="offer-name-preview">{this.props.data.offer_headline}</span>
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}