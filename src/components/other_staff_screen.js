import React from 'react';

export default class OtherStaffScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                <div className="container mrt-50">
                    <h1 className="page-title" style={{ paddingLeft: '15px' }}>Dashboard</h1>
                    <div className="row" style={{ margin: '20px 0px' }}>
                        <div className="col-lg-3">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Views</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <span className="dash">--</span>
                                </div>
                                <div>
                                    <span className="main-number">200</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Click</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <span className="dash">--</span>
                                </div>
                                <div>
                                    <span className="main-number">35</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">CTR</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <span className="dash">--</span>
                                </div>
                                <div>
                                    <span className="main-number">35%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Revenue</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <span className="dash">--</span>
                                </div>
                                <div>
                                    <span className="main-number">$38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ margin: '20px 0px' }}>
                        <div className="col-lg-6">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Offers by views</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <ul className="stats-block-tab">
                                        <li className="active">Highest</li>
                                        <li>Lowest</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-product">
                                        <li>Black hat<span className="percent">25%</span></li>
                                        <li>Black hat<span className="percent">25%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Offers by click</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <ul className="stats-block-tab">
                                        <li className="active">Highest</li>
                                        <li>Lowest</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-product">
                                        <li>Black hat<span className="percent">25%</span></li>
                                        <li>Black hat<span className="percent">25%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ margin: '20px 0px' }}>
                        <div className="col-lg-6">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Offers by CTR</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <ul className="stats-block-tab">
                                        <li className="active">Highest</li>
                                        <li>Lowest</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-product">
                                        <li>Black hat<span className="percent">25%</span></li>
                                        <li>Black hat<span className="percent">25%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="stats-block">
                                <div>
                                    <span className="main-title">Offers by revenue</span>
                                    <span className="timeframe">All time</span>
                                </div>
                                <div>
                                    <ul className="stats-block-tab">
                                        <li className="active">Highest</li>
                                        <li>Lowest</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-product">
                                        <li>Black hat<span className="percent">25%</span></li>
                                        <li>Black hat<span className="percent">25%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}