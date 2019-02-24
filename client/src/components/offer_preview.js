import React from 'react';

export default class OfferPreview extends React.Component {
    render() {
        
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
                    <div className="col-lg-3">
                        {
                            this.props.data.show_product_image && <img className="offer-product-preview" alt="shirt" src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_10_406456?$pdp-medium$" />
                        }
                    </div>
                    <div className="col-l-9 text-center">
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