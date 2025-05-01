'use client';
import React from "react";
import CardContacto from "../../components/CardContacto/CardConacto";
import CardService from "../../components/CardService/CardService";
import { useTranslation } from 'react-i18next';

interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string[];
    imgSrc: string;
    altText: string;
}

export default function ClientServicios() {
    const { t } = useTranslation('servicios');
    const services: Service[] = t('services', { returnObjects: true }) as Service[];

    return (
        <>
            

            <main>
                <h1 className="my-8 md:my-12 seccionTitle">{t('mainTitle')}</h1>

                <div>
                    {services.map((service) => (
                        <CardService key={service.id} {...service} />
                    ))}
                </div>

                <CardContacto />
            </main>
        </>
    )
}