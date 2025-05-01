import type { Metadata } from 'next'
import ClientNosotros from '../../pages/nosotros/ClientNostros'

export const metadata: Metadata = {
    title: 'iWeb | Potenciamos tu marca con diseño y tecnologia',
    description: 'Somos una agencia enfocada en brindar soluciones digitales a medida. Trabajamos junto a nuestros clientes para crear proyectos que impulsen marcas y negocios.',
    keywords: [
        'agencia digital', 
        'diseño web', 
        'soluciones digitales', 
        'desarrollo a medida', 
        'equipo de diseño',
        'Sitemas de gestion',
        'agencia de desarrollo',]
}

function NosotrosPage() {
    return <ClientNosotros />
}

export default NosotrosPage