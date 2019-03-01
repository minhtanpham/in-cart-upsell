import React from 'react';

export default class OfferPreview extends React.Component {
    render() {
        var product_images = '';
        if (this.props.data.list_products && this.props.data.list_products.length > 0) {
            product_images = this.props.data.list_products[0].image.src;
        } else {
            product_images = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081';
        }
        return (
            <div
                className="offer-preview-container"
                style={{
                    backgroundColor: `${this.props.data.background_color}`,
                    borderTopColor: `${this.props.data.border_color}`,
                    borderBottomColor: `${this.props.data.border_color}`,
                    borderTopWidth: `${this.props.data.border_size}px`,
                    borderBottomWidth: `${this.props.data.border_size}px`,
                    borderStyle: `${this.props.data.border_style} `,
                    borderLeftWidth: `0px`,
                    borderRightWidth: `0px`
                }}
            >
                <div className="row">
                    {
                        this.props.data.show_x &&  <span className="close-offer-btn">x</span>
                    }
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    {
                        this.props.data.show_product_image && <img className="offer-product-preview" alt="shirt" src={product_images} />
                    }
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12 text-center">
                        <span
                            className="offer-name-preview"
                            style={{ color: `${this.props.data.headline_color}` }}
                        >{this.props.data.offer_headline}</span>
                        <button
                            className="btn btn-primary"
                            style={{
                                backgroundColor: `${this.props.data.button_color}`,
                                width: `${this.props.data.width}px`,
                                height: `${this.props.data.height}px`,
                                borderRadius: `${this.props.data.border_radius}px`
                            }}
                        >{this.props.data.button_text}</button>
                    </div>
                </div>
            </div>
        )
    }
}