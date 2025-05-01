import type { Metadata } from 'next'
import ClientHome from './pages/home/ClientHome'

export const metadata: Metadata = {
    title:'iWeb | Diseño y desarrollo web y software a medida',
	description: 'Impulsamos tu presencia digital con diseño web a medida, software personalizado y estrategias SEO que atraen tráfico de calidad y potencian tu negocio.',
	keywords:['diseño web', 
		'desarrollo web', 
		'sistemas de gestión', 
		'ecommerce', 
		'landing page', 
		'SEO',
		'SaaS',
	]
}

export default function Home() {
	return <ClientHome />
}