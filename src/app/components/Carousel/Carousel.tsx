import React from "react";
import './carousel.css'

const Carousel = () => {
    return (
        <div className="carouselContainer">
            <div className="slider-wrapper">
                <div className="cardList">
                    <div className="cardItem">
                        <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
                        <div>
                            <p>e-Commerce</p>
                            <h3>Nombre del proyecto</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel