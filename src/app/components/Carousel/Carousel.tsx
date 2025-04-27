'use client';
import React from 'react';
import './carousel.css'
import { Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation} from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideNavButtons from './SlideNavButtons';

interface Proyect{
    id: number;
    title: string;
    subtitle: string;
    imgSrc: string;
    altText: string;
}

const Carousel = () => {
    const { t } = useTranslation('proyectos');
    const proyects: Proyect[] = t('proyects', { returnObjects: true }) as Proyect[];

    return (
        <div>
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
                
                {proyects.map((proyect) => (
                    <SwiperSlide key={proyect.id}>
                        <div className="cardItem">
                            <div>
                                <img src={proyect.imgSrc} alt={proyect.altText} />
                                <div>
                                    <p>{proyect.subtitle}</p>
                                    <h3>{proyect.title}</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
                <SlideNavButtons />
            </Swiper>
        </div >
    )
}

export default Carousel