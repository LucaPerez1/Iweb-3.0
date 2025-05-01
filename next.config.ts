import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/*i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
	},*/

	productionBrowserSourceMaps:true,

	async rewrites() {
		return [
		{ source: '/contacto', destination: '/routes/contacto' },
		{ source: '/nosotros', destination: '/routes/nosotros' },
		{ source: '/proyectos', destination: '/routes/proyectos' },
		{ source: '/servicios', destination: '/routes/servicios' },
		];
	},
};

export default nextConfig;
