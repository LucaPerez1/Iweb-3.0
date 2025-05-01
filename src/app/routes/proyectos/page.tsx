import ClientProyectos from "../../pages/proyectos/ClientProyectos";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'iWeb | Proyectos de Diseño y Desarrollo Web ',
    description: 'Descubrí algunos de los proyectos que hemos desarrollado en diseño web, ecommerce, sistemas a medida. Soluciones reales que impulsan negocios.',
    keywords: [
        'proyectos de diseño web', 
        'desarrollo de sistemas', 
        'ecommerce', 
        'casos de éxito', 
        'branding digital', 
        'portafolio web',]
}

export default function ProyectosPage () {
    return <ClientProyectos />
}
