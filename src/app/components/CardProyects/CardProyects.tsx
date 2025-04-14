import React from "react";
import './cardProyects.css'

interface CardProyectProps {
    title: string;
    subtitle: string;
    description: string[];
    imgSrc: string;
    altText: string;
    btn:string;
    // status: "Desarrollo" | "Entregado"
}

const CardProyects:React.FC<CardProyectProps> = ({ title, subtitle, description, imgSrc, altText,btn}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-items-center cardProyect my-8 md:my-14 mx-4 md:mx-10 gap-4 md:gap-9">
            <div className="imageContainer">
                <img src={imgSrc} alt={altText}/>
            </div>
            
            <div>
                <h3>{subtitle}</h3>
                <h2>{title}</h2>
                {description.map((desc: string, index: number) => (
                    <p key={index}>{desc}</p>
                ))}
                <button className="block m-auto md:m-0">{btn}</button>
            </div>
        </div>
    )
}

export default CardProyects