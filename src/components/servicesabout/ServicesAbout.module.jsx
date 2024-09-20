import React, { Component } from 'react'
import img1 from '../../assets/images/services-1.png'
import img2 from '../../assets/images/services-play.svg'
import img3 from '../../assets/images/services-check.svg'
import style from './ServicesAbout.module.css'

export class ServicesAbout extends Component {
    render() {
        return (
            <div>
                <div className={`${style["about-row"]}`}>
                    <div className={`${style["about-left"]}`}>
                        <div className={`${style["about-left-img"]}`}>
                            <img src={img1} alt="img" />
                        </div>
                        <div className={`${style["about-left-play-icon"]}`}>
                            <img src={img2} alt="img" />
                        </div>
                    </div>
                    <div className={`${style["about-right"]}`}>
                        <h1>
                            Lorem Ipsum is simply dummy text.
                        </h1>
                        <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .
                        </h4>
                        <div className={`${style["about-check"]}`}>
                        <div className={`${style["row-check"]}`}>
                            <div className={`${style["check-img"]}`}>
                                <img src={img3} alt="img" />
                            </div>
                            <div className={`${style["check-content"]}`}>
                                <p className='content'>
                                    Lorem Ipsum is simply
                                </p>
                            </div>
                        </div>
                        <div className={`${style["row-check"]}`}>
                            <div className={`${style["check-img"]}`}>
                                <img src={img3} alt="img" />
                            </div>
                            <div className={`${style["check-content"]}`}>
                                <p className='content'>
                                    Lorem Ipsum is simply
                                </p>
                            </div>
                        </div>
                        <div className={`${style["row-check"]}`}>
                            <div className={`${style["check-img"]}`}>
                                <img src={img3} alt="img" />
                            </div>
                            <div className={`${style["check-content"]}`}>
                                <p className='content'>
                                    Lorem Ipsum is simply
                                </p>
                            </div>
                        </div>
                        <div className={`${style["row-check"]}`}>
                            <div className={`${style["check-img"]}`}>
                                <img src={img3} alt="img" />
                            </div>
                            <div className={`${style["check-content"]}`}>
                                <p className='content'>
                                    Lorem Ipsum is simply
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesAbout