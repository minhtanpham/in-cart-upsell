import React from 'react';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

export default class LookAndFeel extends React.Component {

    changeHandler(color) {
        console.log(color)
    }

    render() {
        return (
            <div className="offer-create-container">
                <h1 className="label">Offer Title</h1>
                <div style={{ position: 'relative' }}>
                    <input className="full-width mr-10-0 input-form" type="text" placeholder="Would you like to add a Short Sleeve T Shirt for $9.99?" />
                    <ColorPicker
                        color={'#36c'}
                        alpha={100}
                        onChange={this.changeHandler}
                        placement="topLeft"
                        className="inline-color-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width block">
                    <div className="full-width" style={{ display: 'inline-block' }}>
                        <h1 className="label text-left" style={{ width: '500px', marginRight: '120px' }}>Button Text</h1>
                        <h1 className="label text-left">Button Color</h1>
                    </div>
                    <input className="mr-10-0 input-form" type="text" placeholder="Add to cart" />
                    <ColorPicker
                        color={'#36c'}
                        alpha={100}
                        onChange={this.changeHandler}
                        placement="topLeft"
                        className="inline-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width" style={{ display: 'inline-flex' }}>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Width</h1>
                        <input className="mr-10-0 input-form" type="number" />
                    </div>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Height</h1>
                        <input className="mr-10-0 input-form" type="number" />
                    </div>
                    <div>
                        <h1 className="label full-width block text-left">Button Border</h1>
                        <div className="btn-group custom-btn-group" role="group" aria-label="button border">
                            <button type="button" className="btn btn-secondary">
                                <img width="15px" src="https://res.cloudinary.com/tanpham/image/upload/v1550074483/Group_69.png" alt="round border"/>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <img width="15px" src="https://res.cloudinary.com/tanpham/image/upload/v1549557793/rectangle-border.png" alt="rectangle border"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="full-width" style={{ display: 'inline-flex' }}>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Border Color</h1>
                        <ColorPicker
                            color={'#36c'}
                            alpha={100}
                            onChange={this.changeHandler}
                            placement="topLeft"
                            className="inline-picker no-margin-left"
                        >
                            <span className="rc-color-picker-trigger" />
                        </ColorPicker>
                    </div>
                    <div style={{ marginRight: '15px' }}>
                        <h1 className="label full-width block text-left">Border Size</h1>
                        <input className="mr-10-0 input-form" type="number" />
                    </div>
                    <div>
                        <h1 className="label full-width block text-left">Border Style</h1>
                        <div className="btn-group custom-btn-group" role="group" aria-label="button border">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100px' }}>
                                    <img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-solid.png" alt="solid border"/>
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li className="text-center"><img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-solid.png" alt="solid border"/></li>
                                    <li className="text-center"><img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558710/border-dashed.png" alt="dashed border"/></li>
                                    <li className="text-center"><img width="50px" src="https://res.cloudinary.com/tanpham/image/upload/v1549558838/dotted_border.png" alt="dotted border"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-width">
                    <h1 className="label full-width block text-left">Background Color</h1>
                    <ColorPicker
                        color={'#36c'}
                        alpha={100}
                        onChange={this.changeHandler}
                        placement="topLeft"
                        className="block-picker"
                    >
                        <span className="rc-color-picker-trigger" />
                    </ColorPicker>
                </div>
                <div className="full-width">
                    <h1 className="label full-width block text-left mrb-10">Other Options</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                        <label className="form-check-label" htmlFor="check1">Show Product Image</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check2" />
                        <label className="form-check-label" htmlFor="check2">Hide products that are out of stock </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check3" />
                        <label className="form-check-label" htmlFor="check3">Link image and title to offered product(s) </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check4" />
                        <label className="form-check-label" htmlFor="check4">Show an "x" in the corner of the offer so customers can dismiss it (not recommended)</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check5" />
                        <label className="form-check-label" htmlFor="check5">Let customers choose the quantity (otherwise the quantity will automatically be 1)</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check6" />
                        <label className="form-check-label" htmlFor="check6">Automatically remove items from the cart if the rules or conditions are unmet</label>
                    </div>
                </div>
            </div>
        )
    }
}