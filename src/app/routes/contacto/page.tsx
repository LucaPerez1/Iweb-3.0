import ClientContacto from "../../pages/contacto/ClientContacto";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacta con iWeb y diseñemos tu futuro digital',
    description: 'Impulsá tu negocio con iWeb. Hablá con nosotros y obtené una asesoría gratuita en diseño  en diseño web, sistemas a medida, tiendas online o SEO.',
    keywords: [
        'contacto agencia digital', 
        'consulta gratuita', 
        'diseño web', 
        'desarrollo de software', 
        'soluciones IT', 
        'asesoría web',]
}

export default function ContactoPage() {
    return <ClientContacto />
}

