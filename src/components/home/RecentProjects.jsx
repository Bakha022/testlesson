import React, { Component } from 'react'

export class RecentProjects extends Component {
    render() {
        return (
            <div className='container2 '>
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className='projects-h3 fw-bold'>Our Recent Projects</h3>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-2 col-md-4">
                        <img className="w-100" src={require('../../assets/images/img-1.png')} alt="aaa" />
                    </div>
                    <div className="col-12 mb-2 col-md-4">
                        <img className="w-100" src={require('../../assets/images/img-2.png')} alt="aaa" />
                    </div>
                    <div className="col-12 mb-2 col-md-4">
                        <img className="w-100" src={require('../../assets/images/img-3.png')} alt="aaa" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2 col-md-3">
                        <img className="w-100" src={require('../../assets/images/img-4.png')} alt="aaa" />
                    </div>
                    <div className="col-12 mt-2 col-md-4">
                        <img className="w-100 " src={require('../../assets/images/img-5.png')} alt="aaa" />
                    </div>
                    <div className="col-12 mt-2 col-md-5">
                        <img className="w-100" src={require('../../assets/images/img-6.png')} alt="aaa" />
                    </div>
                </div>

                <div className="container2 text-center">
                    <button type="button" class="btn btn-outline-secondary">SEE ALL</button>
                </div>

            </div>
        )
    }
}

export default RecentProjects
