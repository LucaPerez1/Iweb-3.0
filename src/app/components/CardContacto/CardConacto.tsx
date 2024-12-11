import React from "react";
import Link from "next/link";
import './cardContacto.css'

const CardContacto = () =>{
    return (
        <div className="cardContacto mt-8 md:mt-16">
            <div className="titleCardContainer">
                <p>Busquemos el éxito juntos </p>
                <h3>TU VISION + NUESTRO INGENIO</h3>
            </div>

        <div className="btnContainer">
            <Link href={'/contacto'} className="btn"> 
                <button>
                    Contáctanos 
                </button>
            </Link>
        </div>
        </div>
    )
}

export default CardContacto