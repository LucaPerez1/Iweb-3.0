import React from "react";
import CardContacto from "../components/CardContacto/CardConacto";
import CardProyects from "../components/CardProyects/CardProyects";

function proyectos () {
    return (
        <>
            <h1 className="mx-4 md:mx-10 my-6 md:my-10 seccionTitle">Nuestro proyectos</h1>
            <p className="generalDescriptions mx-4 md:mx-10">Estamos comprometidos con nuestros clientes, sus pasiones, sus objetivos y sus propósitos. Analizamos y nos aseguramos de que cada proyecto que emprendemos, logre resultados únicos y mantenga su esencia.</p>

            <CardProyects />
            
            <CardContacto />
        </>
    )
}

export default proyectos