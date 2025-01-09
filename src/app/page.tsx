import React from "react";
import Link from "next/link";
import FormContact from "./components/FormContact/FormContact";
import Carousel from "./components/Carousel/Carousel";
import DiseñoPersonalizadoHome from "./components/Icons/DiseñoPersonalizadoHome";
import DiseñoResponsiveHome from "./components/Icons/DiseñoResponsiveHome";
import SeoHome from "./components/Icons/SeoHome";
import Whatsapp from "./components/Icons/Whatsapp";
import Instagram from "./components/Icons/Instagram";
import Facebook from "./components/Icons/Facebook";

export default function Home() {
	return (
		<>
			<main>
				<section>
					<img src="/img/flyer-home.jpg" alt="innovamos tus ideas para aegurar tu exito" />
				</section>

			{/*SECTION SERVICE HOME START*/}
				<section className="mx-4 md:mx-10 my-8 md:my-16">
					<h2 className="mb-5 md:mb-10 seccionTitle">LO QUE PODEMOS HACER POR TI </h2>
					<p className="generalDescriptions mb-7 md:mb-14">Transformamos tus grandes ideas en realidades visibles, potenciando  tu negocio para que puedas alcanzar los objetivos que te has propuesto. Te acompañamos en el camino hacia el crecimiento, impulsando tu marca y brindándote las herramientas necesarias para destacar en el mercado y lograr el éxito que deseas</p>

					<div className="flex flex-col md:flex-row cardServiceHome1 mb-10">
						<div>
							<DiseñoPersonalizadoHome/>
						</div>

						<div className="cardServiceHomeDescription black">
							<h3>Diseño personalizado </h3>
							<p>Diseñamos interfaces únicas y atractivas que no solo reflejan la identidad de tu marca, sino que también están centradas en el usuario para ofrecer experiencias intuitivas y fluidas. Capturando la atención de tus visitante y destacando tu negocio en un entorno competitivo.</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-10">
						<div className="flex flex-col cardServiceHome2">
							<DiseñoResponsiveHome/>
							
							<div className="cardServiceHomeDescription white">
								<h3>Desarrollo web de alto rendimiento y diseño responsive</h3>
								<p>Nuestros desarrolladores crean sitios rápidos, seguros y altamente funcionales, asegurando una excelente experiencia de usuario. Nos enfocamos en que tu website se vea y funcione perfectamente en cualquier dispositivo, brindando una experiencia fluida y optimizada para todos los usuarios.</p>
							</div>
						</div>

						<div className="flex flex-col cardServiceHome3">
							<SeoHome />

							<div className="cardServiceHomeDescription black">
								<h3>Optimización del posicionamiento (SEO)</h3>
								<p>Optimizamos el posicionamiento de tu sitio web en los buscadores con estrategias avanzadas de SEO. Impulsamdo la visibilidad de tu negocio para atraer tráfico de calidad y aumentar tu alcance en el mercado.</p>
							</div>
						</div>
					</div>
				</section>
			{/*SECTION SERVICE HOME END*/} 

			{/*SECTION PROCES HOME START*/}
				<section>
					<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">Nuestro proceso</h2>

					<div className="itemCardProcess flex flex-col md:flex-row items-stretch descriptionBlack">

						<div className="procesImgContainer imgLeft w-[100%] md:w-[45%]">
							<img src="/img/analisis-image.jpg" alt="fase de analisis" />
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pr-10 md:pl-0 flex flex-col md:flex-row">
							<span className="mr-0 md:mr-14 text-[rgba(8,230,245,0.70)]">01</span>

							<div>
								<h3 className="pb-3 md:pb-7">Análisis </h3>
								<p>En la primera etapa, nos centramos en comprender las necesidades y objetivos del cliente mediante entrevistas y sesiones de descubrimiento. Identificamos requerimientos clave y analizamos el entorno competitivo para conocer sus expectativas y definir funcionalidades esenciales del proyecto, garantizando que el producto final esté alineado con sus metas comerciales.</p>
							</div>
						</div>
					</div>

					<div className="itemCardProcess flex flex-col md:flex-row-reverse items-stretch descriptionWhite">

						<div className="procesImgContainer imgRight w-[100%] md:w-[45%]">
							<img src="/img/contacto-image.jpg" alt="fase de planificacion" />
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pl-10 md:pr-0 flex flex-col md:flex-row-reverse">
							<span className="ml-0 md:ml-14 text-[rgba(39,82,105,0.70)]">02</span>

							<div>
								<h3 className="pb-3 md:pb-7">Planificación</h3>
								<p>Con una perspectiva clara y completa, exploramos distintos enfoques para identificar las mejores opciones a seguir. Diseñamos un plan estratégico detallado que abarca cada fase del proceso y definimos objetivos específicos y medibles, alineados con las metas generales del proyecto. Este enfoque asegura que avancemos de manera organizada y efectiva, siempre enfocados en alcanzar los resultados esperados.</p>
							</div>
						</div>
					</div>

					<div className="itemCardProcess flex flex-col md:flex-row items-stretch descriptionBlue">

						<div className="procesImgContainer imgLeft w-[100%] md:w-[45%]">
							<img src="/img/solucion-image.jpg" alt="fase de solucion" />
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pr-10 md:pl-0 flex flex-col md:flex-row">
							<span className="mr-0 md:mr-14 text-[rgba(8,230,245,0.70)]">03</span>

							<div>
								<h3 className="pb-3 md:pb-7">Solución</h3>
								<p>En la fase final, llevamos a cabo la implementación del proyecto siguiendo altos estándares de calidad y prácticas ágiles, asegurando que el producto sea eficiente, escalable y cumpla con todos los requisitos establecidos. Realizamos pruebas exhaustivas para garantizar su óptimo desempeño y ofrecemos soporte al cliente, permitiendo así que aproveche al máximo la solución entregada.</p>
							</div>
						</div>
					</div>

				</section>
			{/*SECTION PROCES HOME END*/}

			{/*SECTION CAROUSEL HOME START*/}
				<section className="mx-4 md:mx-10 my-8 md:my-14">
					<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">Descubre en qué hemos estado trabajando </h2>
					<Carousel />
					<div className="btnContainerHome">
						<Link href={'/proyectos'} className="btnHome w-8/12 md:w-4/12">
							<button>
								Ver mas
							</button>
						</Link>
					</div>
				</section>
			{/*SECTION CAROUSEL HOME END*/}

			{/*SECTION FORM HOME START*/}
				<section>
					<div className="flex flex-col-reverse md:flex-row">
						<div className="formHelp px-4 md:px-10 md:w-5/12">
							<h3 className="pt-8 md:pt-0">¿Cómo podemos ayudarte?</h3>
							<p>Un simple email puede marcar una gran diferencia en el crecimiento de tu negocio. Cuéntanos cómo podemos ayudarte.</p>
							<h4 className="pb-8 md:pb-0">También podes contactarnos a través de nuestras redes</h4>
						</div>
						<div className="formHome px-4 py-4 md:px-9 md:py-14 md:w-7/12">
							<FormContact />
						</div>
					</div>


					<div className="grid md:grid-cols-3">
						<div className="social whatsapp py-7 md:py-12">
							<Whatsapp width={72} height={72} fill="#F3F3F3"/>
							<h3>Whatsapp</h3>
						</div>
						<div className="social instagram py-7 md:py-12">
							<Instagram width={72} height={72} fill="#F3F3F3"/>
							<h3>Instagram</h3>
						</div>
						<div className="social facebook py-7 md:py-12">
							<Facebook width={72} height={72} fill="#F3F3F3"/>
							<h3>Facebook</h3>
						</div>
					</div>

					<div className="phraseContainer">
						<h3>Sigamos avanzando juntos <span>hacia el éxito.</span></h3>
					</div>
				</section>
			{/*SECTION FORM HOME START*/}
			</main>
		</>
	);
}
