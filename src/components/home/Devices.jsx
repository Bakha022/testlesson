import React, { Component } from 'react'

export class Devices extends Component {
    render() {
        return (
            <div className='container3'>
                <div className="row">
                    <div className="container">
                        <div id='devices'>
                            <div>
                                <h2 className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <div className="row text-center">
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group48.png')} alt="customer" />
                                    <p className='mb-4'>Mobile Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group52.png')} alt="customer" />
                                    <p className='mb-4'>PC Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group50.png')} alt="customer" />
                                    <p className='mb-4'>PS4 Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group51.png')} alt="customer" />
                                    <p className='mb-4'>AR/VR Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                            </div>
                            <div className="row py-5 text-center justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group53.png')} alt="customer" />
                                    <p className='mb-4'>AR/VR Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-3"> {/* Responsiv bo'lishi uchun o'zgartirish */}
                                    <img className="mb-4" src={require('../../assets/images/Group54.png')} alt="customer" />
                                    <p className='mb-4'>AR/VR Game Development</p>
                                    <img src={require('../../assets/images/arrow.png')} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Devices
