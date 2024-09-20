import React, { Component } from 'react'
import style from './ServicesHeader.module.css';
import { Link } from "react-router-dom";
import userIcon from '../../assets/images/user.png'
import lacationIcon from '../../assets/images/location.png'
import serverIcon from '../../assets/images/Server.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



export class ServicesHeader extends Component {
    render() {
        return (
            <div className={`${style["services"]}`}>
                <div className={`${style["row"]}`}>
                    <div className={`${style["home-link"]}`}>
                        <Link style={{ color: '#fff' }} to="/">Home</Link>
                    </div>
                    <MdOutlineKeyboardArrowRight />
                    <div className={`${style["services-link"]}`}>
                        <Link style={{ color: '#D80027' }} to="/portfolio">Services</Link>
                    </div>
                </div>
                <h1 className={`${style["title"]}`}>
                    Lorem Ipsum is simply dummy text of the printing and.
                </h1>
                <p className={`${style["subtitle"]}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className={`${style["box"]}`}>
                    <div className={`${style["contact-row"]}`}>
                        <div className={`${style["contact-icon-img"]}`}>
                            <img src={userIcon} alt="" />
                        </div>
                        <div>
                            <h4>
                                90+
                            </h4>
                            <p>
                                Clients
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className={`${style["contact-row"]}`}>
                        <div className={`${style["contact-icon-img"]}`}>
                            <img src={lacationIcon} alt="" />
                        </div>
                        <div>
                            <h4>
                                30+
                            </h4>
                            <p>
                                Countries
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className={`${style["contact-row"]}`}>
                        <div className={`${style["contact-icon-img"]}`}>
                            <img src={serverIcon} alt="" />
                        </div>
                        <div>
                            <h4>
                                50+
                            </h4>
                            <p>
                                Projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesHeader