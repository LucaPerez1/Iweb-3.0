"use client"
import { useEffect, useRef } from "react";
import './carouselServicios.css'

const CarouselServicios = () => {
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

export default CarouselServicios