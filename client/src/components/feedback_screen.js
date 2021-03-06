import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import setting from '../const';

export default class FeedbackScreen extends React.Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
        this.feedbackRef = React.createRef();
        this.state = {
            redirect: false
        }
    }

    handleSubmitFeedback() {
        let self = this
        const name = this.nameRef.current.value;
        const phone = this.phoneRef.current.value;
        const email = this.emailRef.current.value;
        const feedback = this.feedbackRef.current.value;
        axios(`${setting.host}/api/create/feedback`, {
            method: 'POST',
            params: {
                name: name,
                phone: phone,
                email: email,
                feedback: feedback,
                shop: setting.shop
            }
        })
        .then(function (response) {
            self.setState({ redirect: true })
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/app'/>;
        }
        return (
            <React.Fragment>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-4" style={{ marginTop: '35px' }}>
                            <h1 className="page-title">Feedback</h1>
                            <span className="description-title">This page is for your feedback on our app. We hope you can help us improve the app as perfect as possible. Thank you !</span>
                        </div>
                        <div className="col-lg-8">
                            <div style={{ marginTop: '35px', marginBottom: '5px', backgroundColor: '#F4F6F8', padding: '10px' }}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input ref={this.nameRef} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input ref={this.phoneRef} type="tel" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input ref={this.emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="feedback">Feedback</label>
                                    <textarea ref={this.feedbackRef} className="form-control" id="feedback" rows="3" placeholder="Feedback"></textarea>
                                </div>
                                <div className="form-group text-right">
                                    <button className="btn btn-primary mrr-10" onClick={() => this.handleSubmitFeedback()}>Send</button>
                                    <Link to="/app"><button className="btn btn-dark">Cancel</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}