import React, { Component } from 'react';
import style from './ServicesSwiper.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import avatar1 from '../../assets/images/customer-1.svg';
import avatar2 from '../../assets/images/customer-2.svg';
import avatar3 from '../../assets/images/customer-3.svg';
import star from '../../assets/images/star.svg';

export class ServicesSwiper extends Component {
    render() {
        return (
            <div className={style['swiper']}>
                <div className={`${style["swiper-container"]}`}>
                    <div className={`${style["slider-slide"]}`}>
                        <h2>Trusted by Thousands of Happy Customers</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className={`${style['slider-slider']}`}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    slidesPerScroll: 2,
                                },
                                425: {
                                    slidesPerView: 1,
                                    slidesPerScroll: 1,
                                },
                                320: {
                                    slidesPerView: 1,
                                    slidesPerScroll: 1,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar1} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar2} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar3} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar1} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar2} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style['slider-card']}>
                                    <div className={style['card-top']}>
                                        <div className={style['card-top-names']}>
                                            <div><img src={avatar3} alt="avatar" /></div>
                                            <div className={style['card-top-name']}>
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className={style['card-top-star']}>
                                            <span>4.5</span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                    <div className={style['card-subtitle']}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesSwiper;
