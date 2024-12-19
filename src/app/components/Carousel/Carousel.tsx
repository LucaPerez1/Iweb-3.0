'use client';
import React from 'react';
import './carousel.css'
import { Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideNavButtons from './SlideNavButtons';

const Carousel = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                allowTouchMove={true}
                pagination={{ clickable: true,el: ".custom-pagination",}}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: {slidesPerView: 3 },
                }}
            >
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="cardItem">
                        <div>
                            <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                            <div>
                                <p>e-Commerce</p>
                                <h3>Nombre del proyecto</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                

                <SlideNavButtons />
            </Swiper>
        </div >
    )
}

export default Carousel