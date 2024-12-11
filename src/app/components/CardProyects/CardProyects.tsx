import React from "react";
import './cardProyects.css'

const CardProyects = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-items-center cardProyect my-8 md:my-14 mx-4 md:mx-10 gap-4 md:gap-9">
            <div className="imageContainer">
                <img src="../img/proyecto.png" alt="proyecto concecionerio hipolito yrigoyen" />
            </div>
            
            <div>
                <h3>e-Commerce</h3>
                <h2>Nombre del proyecto de mierda</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo numquam beatae, necessitatibus obcaecati quibusdam commodi, provident deleniti adipisci inventore, voluptate velit sequi consectetur maiores. Amet eum, velit doloremque aliquam dolores consequuntur doloribus optio officia, inventore animi placeat, excepturi numquam ipsum ad ratione sequi dolore. Officiis deleniti sequi eum nobis dicta aliquid veritatis quibusdam dignissimos quos quis! Repudiandae porro adipisci ut labore possimus, tempore dicta quisquam iusto libero consequuntur odit iste mollitia, est delectus perspiciatis! Eaque architecto voluptates assumenda saepe natus?</p>
                <button className="block m-auto md:m-0">Ver proyecto</button>
            </div>
        </div>
    )
}

export default CardProyects