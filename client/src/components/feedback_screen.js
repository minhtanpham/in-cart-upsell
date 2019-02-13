import React from 'react';

export default class FeedbackScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className="page-title">Feedback</h1>
                            <span className="description-title">This page is for your feedback on our app. We hope you can help us improve the app as perfect as possible. Thank you !</span>
                        </div>
                        <div className="col-lg-8">
                            <div style={{ marginTop: '5px', marginBottom: '5px', backgroundColor: '#F4F6F8', padding: '10px' }}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="feedback">Feedback</label>
                                    <textarea className="form-control" id="feedback" rows="3" placeholder="Feedback"></textarea>
                                </div>
                                <div className="form-group text-right">
                                    <button className="btn btn-primary mrr-10">Send</button>
                                    <button className="btn btn-dark">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}