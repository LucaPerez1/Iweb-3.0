'use client'
import React from "react";
import CardContacto from "../../components/CardContacto/CardConacto";
import CardProyects from "../../components/CardProyects/CardProyects";
import { useTranslation } from "next-i18next";

interface Proyect{
    id: number;
    title: string;
    subtitle: string;
    description: string[];
    imgSrc: string;
    altText: string;
    btn:string;
}


function ProyectosPage () {
    const { t } = useTranslation('proyectos');
    const proyects: Proyect[] = t('proyects', { returnObjects: true }) as Proyect[];
    
    return (
        <>
            <h1 className="mx-4 md:mx-10 my-6 md:my-10 seccionTitle">{t('mainTitle')}</h1>
            <p className="generalDescriptions mx-4 md:mx-10">{t('mainText')}</p>

            <div>
                {proyects.map((proyect)=> (
                    <CardProyects key={proyect.id} {...proyect}/>
                ))}
            </div>
            
            <CardContacto />
        </>
    )
}

export default ProyectosPage