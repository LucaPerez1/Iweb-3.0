import React from "react";
import './cardService.css'

interface CardServiceProps {
    title: string;
    subtitle: string;
    description: string[];
    imgSrc: string;
    altText: string;
    reverse?: boolean; 
}

const CardService:React.FC<CardServiceProps> = ({ title, subtitle, description, imgSrc, altText, reverse }) => {
    return (
        <div className={`service flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mx-6 md:mx-24 mt-20 gap-4 group md:hover:border-b-[#08E6F5] border-[#08E6F5] md:border-[#3A3A3A] border-b-[4px] pb-8 transition-colors duration-1000`}>
            <div className={`flex justify-center ${reverse ? "md:justify-end" : "md:justify-start"} w-[100%]`}>
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="w-[90%]">
                <div className="serviceTitle flex items-center sm:items-end mb-6 ">
                    <h2>{title}</h2>
                    <h3 className="md:group-hover:text-[#08E6F5] text-[#08E6F5] md:text-[#3A3A3A] transition-colors duration-1000">{subtitle}</h3>
                </div>
                {description.map((desc: string, index: number) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
}

export default CardService