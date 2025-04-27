"use client"
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
            <div className="lineServices animate-pulse"></div>
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
            <div className="lineServices animate-pulse"></div>
        </section>
    );
}