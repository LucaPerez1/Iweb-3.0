import React from "react";
import Whatsapp from "../Icons/Whatsapp";

const WhatsappButtonFloat = () => {
    const contactNumber = process.env.CONTACT_PHONE;
    const message = 'Hola, me gustaría conocer más detalles sobre los servicios IT que ofrecen. ¿Podrían brindarme más información?'

    return (
        <a href={`https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`} aria-label="Button whatsapp" target="_blank"  rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#107D70] p-3 rounded-full shadow-[0_6px_10px_rgb(18,140,126,0.8)] hover:scale-105 transition-transform">
            < Whatsapp width={48} height={48} fill='#F3F3F3'/>   
        </a>
    )
}

export default WhatsappButtonFloat 