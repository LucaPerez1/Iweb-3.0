import type { Metadata } from 'next'
import ClientServicios from '../../pages/servicios/ClientServicios'

export const metadata: Metadata = {
    title: 'Servicios de Diseño Web, Sistemas a medida, ecommerce y SEO',
    description: 'Diseño web, desarrollo de software, tiendas online, landings, diseño grafico y SEO. Soluciones digitales que se adaptadan e impulsan tu negocio.',
    keywords: [
        'diseño web', 
        'ecommerce', 
        'sistemas de gestión', 
        'SaaS', 
        'desarrollo de software', 
        'SEO', 
        'diseño gráfico', 
        'soluciones IT',]
}

function ServiciosPage() {
    return<ClientServicios />
}

export default ServiciosPage