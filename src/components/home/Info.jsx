import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div className='container2'>
                <div className='row'>
                    <div className="col-6 info-div-1">
                        <h3 className='info-h3'>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div id='info-div2' className="row d-flex justify-content-between align-items-center bg-white">
                        <div className="col-12 col-lg-6 mb-4">
                            <h3 className='text-dark'>Stay in the loop</h3>
                            <p className='text-dark'>Subscribe to receive the latest news and updates about TDA.
                                We promise not to spam you! </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-end">
                            <div className="input-group">
                                <input id='info-input' type="text" className="form-control bg-dark text-white" placeholder="Enter your email" />
                                <button className="btn btn-danger text-dark" type="button">Continue</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Info;
