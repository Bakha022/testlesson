import React, { Component } from 'react'
import style from './ServicesPosts.module.css'
import Btn from '../Btn/Btn'
import img1 from '../../assets/images/about-1.png'
import img2 from '../../assets/images/about-2.png'
import img3 from '../../assets/images/Rectangle 25.png'


export class ServicesPosts extends Component {
    render() {
        return (
            <div className={`${style['services-post']}`}>
                <div className={`${style["post-row"]}`}>
                    <div className={`${style["post-left"]}`}>
                        <h1>
                            Lorem Ipsum is simply dummy
                            text dummy text
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className={`${style["btn"]}`}>
                            <Btn />
                        </div>
                    </div>
                    <div className={`${style["post-right"]}`}>
                        <div className={`${style["post-img"]}`}>
                            <img width={'496px'} src={img1} alt="" />
                        </div>
                    </div>
                </div>

                <div className={`${style["post-row"]}`}>
                    <div className={`${style["post-left"]}`}>

                        <div className={`${style["post-img"]}`}>
                            <img width={'496px'} src={img2} alt="" />
                        </div>
                    </div>
                    <div className={`${style["post-left"]}`}>
                        <h1>
                            Lorem Ipsum is simply dummy
                            text dummy text
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className={`${style["btn"]}`}>
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className={`${style["post-row"]} ${style['bottom-post']}`}>
                    <div className={`${style["post-left"]}`}>
                        <h1>
                            Lorem Ipsum is simply dummy
                            text dummy text
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className={`${style["btn"]}`}>
                            <Btn />
                        </div>
                    </div>
                    <div className={`${style["post-right"]}`}>
                        <div className={`${style["post-img"]}`}>
                            <img width={'496px'} src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesPosts