"use client"
import { useEffect, useRef } from "react";
import './carouselServicios.css'

const CarouselServicios = () => {
    const carruselRef = useRef(null);
    let offset = 0;

    // Función para desplazar el carrusel
    const scrollCarrusel = () => {
        const carrusel = carruselRef.current;

        if (carrusel) {
            const firstChild = carrusel.firstElementChild;
            const firstChildWidth = firstChild.offsetWidth;

            // Actualizar posición
            offset -= 1; // Velocidad del desplazamiento
            carrusel.style.transform = `translateX(${offset}px)`;

            // Cuando el primer elemento desaparece por completo, se reubica
            if (Math.abs(offset) >= firstChildWidth) {
                carrusel.style.transition = "none"; // Elimina la animación temporalmente
                carrusel.appendChild(firstChild); // Mueve el primer elemento al final
                offset += firstChildWidth; // Ajustar el offset después de mover el elemento
                carrusel.style.transform = `translateX(${offset}px)`; // Restablece la posición
                
            }
        }

        requestAnimationFrame(scrollCarrusel); // Continuar el desplazamiento
    };

    useEffect(() => {
        scrollCarrusel(); // Inicia el desplazamiento
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

export default CarouselServicios