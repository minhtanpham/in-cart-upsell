import React from 'react';

export default class WhenShow extends React.Component {
    render() {
        return (
            <div className="offer-create-container">
                <div className="full-width block">
                    <span className="sub-label">Show the offer whenever</span>
                    <select>
                        <option>All</option>
                    </select>
                    <span className="sub-label">of these rules are met :</span>
                </div>
                <div className="full-width block">
                    <select className="no-mrl">
                        <option>Cart contains at least</option>
                    </select>
                    <input type="number" style={{ width: '50px' }} className="mr-10 input-form" />
                    <input type="text" className="mr-10 input-form" placeholder="Of product:"/>
                    <input type="number" className="mr-10 input-form" placeholder="Product name" />
                    <span className="remove-btn">
                        <img src="https://res.cloudinary.com/tanpham/image/upload/v1549561904/remove-btn.png" alt="remove button" />
                    </span>
                </div>
                <div className="full-width block">
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
                </div>
                <div className="full-width block mrt-50">
                    <span className="sub-label">Choose a product by typing its name or ID into the box</span>
                </div>
                <div className="full-width block">
                    <button className="btn btn-primary mrt-10">Add rule</button>
                </div>
            </div>
        )
    }
}