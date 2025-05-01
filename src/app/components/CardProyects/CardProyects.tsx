import React from "react";
import './cardProyects.css'

interface ButtonLabels {
    viewProject: string;
    inDevelopment: string;
}
interface CardProyectProps {
    title: string;
    subtitle: string;
    description: string[];
    imgSrc: string;
    altText: string;
    url:string;
    btn:ButtonLabels;
}

const CardProyects:React.FC<CardProyectProps> = ({ title, subtitle, description, imgSrc, altText, url, btn}) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-items-center cardProyect my-12 lg:my-16 mx-4 md:mx-10 gap-4 md:gap-9">
            <div className="imageContainer">
                <img src={imgSrc} alt={altText}/>
            </div>
            
            <div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                {description.map((desc: string, index: number) => (
                    <p key={index}>{desc}</p>
                ))}
                {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex justify-center mx-auto w-[90%] lg:mx-0 lg:w-[230px] py-2 rounded-[10px] bg-[#08E6F5] hover:bg-opacity-20 backdrop-blur-md border-[2px] border-[#08E6F5] hover:text-[#f3f3f3] hover:bg-[#08E6F5] text-[#191919] shadow-[0px_3px_8px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_4px_rgba(0,0,0,0.9)] transition">{btn.viewProject}</a>
                ):(
                    <div className="flex items-center justify-center gap-6 text-[#FFDC7D] border-[2px] border-[#FFDC7D] rounded-[10px] py-2 mx-auto w-[90%] lg:mx-0 lg:w-[230px]">
                        <div className="bg-[#FFDC7D] w-[14px] h-[14px] rounded-full"></div>
                        <span>{btn.inDevelopment}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardProyects