"use client"
import { useEffect, useRef } from "react";
import './carouselServicios.css'

import React from "react";
import { useTranslation } from "react-i18next";

export default function CarrouselServicios() {
    const { t } = useTranslation ('nosotros')

    const services = [
        t('carrouselServiceDevelopment') + " - ",
        t('carrouselServiceDesign') + " - ",
        t('carrouselServiceSoftware') + " - ",
        "ECOMMERCE - ",
        "LANDING PAGE - ",
        t('carrouselServiceBusinessPage') + " - ",
        "SEO - ",
    ];

    const repeated = [...services, ...services, ...services, ...services];

    return (
        <section>
            <div className="lineServices"></div>
                <div className="carruselContainer overflow-hidden whitespace-nowrap">
                    <div className="carrusel animate-marquee flex gap-8">
                        {repeated.map((service, idx) => (
                            <span
                                key={idx}
                                className="text-lg font-semibold text-gray-800 whitespace-nowrap"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            <div className="lineServices"></div>
        </section>
    );
}

/*const CarouselServicios = () => {
    const carruselRef = useRef(null);
    const offsetRef = useRef(0); 

    useEffect(() => {
        const scrollCarrusel = () => {
            const carrusel = carruselRef.current;

            if (carrusel) {
                const firstChild = carrusel.firstElementChild;
                const firstChildWidth = firstChild.offsetWidth;

                offsetRef.current -= 1; 
                carrusel.style.transform = `translateX(${offsetRef.current}px)`;

                if (Math.abs(offsetRef.current) >= firstChildWidth) {
                    carrusel.style.transition = "none";
                    carrusel.appendChild(firstChild);
                    offsetRef.current += firstChildWidth;
                    carrusel.style.transform = `translateX(${offsetRef.current}px)`;
                }
            }

            return requestAnimationFrame(scrollCarrusel);
        };

        const animationId = requestAnimationFrame(scrollCarrusel); 

        return () => cancelAnimationFrame(animationId);

    }, []);


    return (
        <div>
            <div className="lineServices"></div>
            <div className="carrusel-container">
                <div className="carrusel" ref={carruselRef}>
                    <p>DESARROLLO WEB - DISEÑO UX/UI - DESARROLLO DE SOFTWARE - ECOMMERCE - LANDING PAGE -</p>
                    <p>DESARROLLO WEB - DISEÑO UX/UI - DESARROLLO DE SOFTWARE - ECOMMERCE - LANDING PAGE -</p>
                </div>
            </div>
            <div className="lineServices"></div>
        </div>
    );
};

export default CarouselServicios*/