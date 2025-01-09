import React from "react";
import './cardService.css'

const CardService = ({ title, subtitle, description, imgSrc, altText, reverse }: any) => {
    return (
        <div
            className={`service flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mx-4 md:mx-10 mt-16 gap-4`}
        >
            <div className={`flex justify-center ${reverse ? "md:justify-end" : "md:justify-start"} w-[100%]`}>
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="w-[90%]">
                <div className="serviceTitle">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                {description.map((desc: string, index: number) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
}

export default CardService