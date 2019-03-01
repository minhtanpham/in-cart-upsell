import React from 'react';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

export default class LookAndFeel extends React.Component {

    constructor(props) {
        super(props)
        this.handleChangeHeadlineColor = this.handleChangeHeadlineColor.bind(this)
        this.handleChangeButtonColor = this.handleChangeButtonColor.bind(this)
        this.handleChangeBorderColor = this.handleChangeBorderColor.bind(this)
        this.handleChangeBackgroundColor = this.handleChangeBackgroundColor.bind(this)
    }

    handleChangeHeadlineColor(color) {
        this.props.handleChangeHeadlineColor(color.color);
    }

    handleChangeButtonColor(color) {
        this.props.handleChangeButtonColor(color.color);
    }

    handleChangeBorderColor(color) {
        this.props.handleChangeBorderColor(color.color);
    }

    handleChangeBackgroundColor(color) {
        this.props.handleChangeBackgroundColor(color.color)
    }

    render() {
        return (
            <div className="offer-create-container">
                <h1 className="label">Offer Title</h1>
                <div style={{ position: 'relative' }}>
                    <input className="full-width mr-10-0 input-form" type="text" placeholder="Would you like to add a Short Sleeve T Shirt for $9.99?" value={this.props.data.offer_headline} onChange={(e) => this.props.handleChangeOfferHeadline(e.target.value)}/>
                    <ColorPicker
                        color={this.props.data.headline_color}
                        alpha={100}
                        onChange={this.handleChangeHeadlineColor}
                        placement="topLeft"
                        className="inline-color-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width block">
                    <div className="full-width" style={{ display: 'inline-block' }}>
                        <h1 className="label text-left" style={{ width: '100px', marginRight: '80px', display: 'inline-block' }}>Button Text</h1>
                        <h1 style={{ display: 'inline-block' }} className="label text-left">Button Color</h1>
                    </div>
                    <input className="mr-10-0 input-form" type="text" placeholder="Add to cart" value={this.props.data.button_text} onChange={(e) => this.props.handleChangeButtonText(e.target.value)} />
                    <ColorPicker
                        color={this.props.data.button_color}
                        alpha={100}
                        onChange={this.handleChangeButtonColor}
                        placement="topLeft"
                        className="inline-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width" style={{ display: 'inline-flex' }}>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Width</h1>
                        <input className="mr-10-0 input-form" type="number" value={this.props.data.width} onChange={(e) => this.props.handleChangeWidth(e.target.value)} />
                    </div>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Height</h1>
                        <input className="mr-10-0 input-form" type="number" value={this.props.data.height} onChange={(e) => this.props.handleChangeHeight(e.target.value)} />
                    </div>
                    <div>
                        <h1 className="label full-width block text-left">Button Border</h1>
                        <div className="btn-group custom-btn-group" role="group" aria-label="button border">
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.handleChangeBorderRadius(10)}>
                                <img width="15px" src="https://res.cloudinary.com/tanpham/image/upload/v1550074483/Group_69.png" alt="round"/>
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.handleChangeBorderRadius(0)}>
                                <img width="15px" src="https://res.cloudinary.com/tanpham/image/upload/v1549557793/rectangle-border.png" alt="rectangle"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="full-width" style={{ display: 'inline-flex' }}>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Border Color</h1>
                        <ColorPicker
                            color={this.props.data.border_color}
                            alpha={100}
                            onChange={this.handleChangeBorderColor}
                            placement="topLeft"
                            className="inline-picker no-margin-left"
                        >
                            <span className="rc-color-picker-trigger" />
                        </ColorPicker>
                    </div>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Border Size</h1>
                        <input className="mr-10-0 input-form" type="number" value={this.props.data.border_size} onChange={(e) => this.props.handleChangeBorderSize(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="label full-width block text-left">Border Style</h1>
                        <div className="btn-group custom-btn-group" role="group" aria-label="button border">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100px' }}>
                                    <img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-solid.png" alt="solid border"/>
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li className="text-center" onClick={() => this.props.handleChangeBorderStyle('solid')}>
                                        <img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-solid.png" alt="solid border"/>
                                    </li>
                                    <li className="text-center" onClick={() => this.props.handleChangeBorderStyle('dashed')}>
                                        <img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-dashed.png" alt="dashed border"/>
                                    </li>
                                    <li className="text-center" onClick={() => this.props.handleChangeBorderStyle('dotted')}>
                                        <img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558838/dotted_border.png" alt="dotted border"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-width">
                    <h1 className="label full-width block text-left">Background Color</h1>
                    <ColorPicker
                        color={this.props.data.background_color}
                        alpha={100}
                        onChange={this.handleChangeBackgroundColor}
                        placement="topLeft"
                        className="block-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width">
                    <h1 className="label full-width block text-left mrb-10">Other Options</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={this.props.data.show_product_image} id="check1" onChange={this.props.handleChangeShowProductImage}/>
                        <label className="form-check-label" htmlFor="check1">Show Product Image</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={this.props.data.hide_out_of_stock} id="check2" onChange={this.props.handleChangeHideOutOfStock} />
                        <label className="form-check-label" htmlFor="check2">Hide products that are out of stock </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={this.props.data.link_product} id="check3" onChange={this.props.handleChangeLinkToProduct}/>
                        <label className="form-check-label" htmlFor="check3">Link image and title to offered product(s) </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={this.props.data.show_x} id="check4" onChange={this.props.handleChangeShowX}/>
                        <label className="form-check-label" htmlFor="check4">Show an "x" in the corner of the offer so customers can dismiss it (not recommended)</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={this.props.data.auto_remove} id="check6" onChange={this.props.handleChangeAutoRemove} />
                        <label className="form-check-label" htmlFor="check6">Automatically remove items from the cart if the rules or conditions are unmet</label>
                    </div>
                </div>
            </div>
        )
    }
}