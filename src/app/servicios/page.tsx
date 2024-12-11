import React from "react";
import './servicios.css'
import CardContacto from "../components/CardContacto/CardConacto";

function serviciosPage() {
    return (
        <>
            <h1 className="my-8 md:my-12 seccionTitle">Nuestras Áreas de trabajo </h1>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div className="flex justify-center md:justify-start">
                    <img src="../img/servicio-desarrollo-web.png" alt="servicio de dearrollo web" />
                </div>

                <div>
                    <div className="serviceTitle">
                        <h2>Desarrollo web</h2>
                        <h3>01</h3>
                    </div>

                    <p>Si algo nos enseñó el COVID y la pandemia, es que quien no tenga una web a día de hoy no tiene un negocio sólido en Internet. Por eso nos especializamos en el diseño y desarrollo de sitios web a medida que cautiven a tu audiencia y mejoren la experiencia de los usuarios.</p>

                    <p>Ofrecemos servicios de desarrollo web personalizados para empresas que buscan una presencia digital atractiva y funcional, incluyendo páginas web corporativas, tiendas online, blogs, redes sociales, foros y más</p>
                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div>
                    <div className="serviceTitle">
                        <h2>Diseño UX/UI</h2>
                        <h3>02</h3>
                    </div>

                    <p>Diseñamos interfaces centradas en el usuario que no solo optimizan la usabilidad, sino que también aumentan la satisfacción y fidelidad de tus clientes. Ofrecemos servicios de diseño UX/UI personalizados para empresas que buscan mejorar la experiencia de usuario y la interfaz de sus productos digitales, adaptándonos a las necesidades y comportamientos de los usuarios.</p>

                    <p>Nuestro equipo crea diseños intuitivos y visualmente atractivos que mejoran la usabilidad, el compromiso y la interacción, lo que mejora los resultados para tu negocio. Al enfocarnos en la experiencia completa del usuario, ayudamos a que tu producto digital no solo cumpla con expectativas, sino que las supere.</p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img src="../img/servicio-diseño-uxui.png" alt="servicio de diseño ux/ui"/>
                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div className="flex justify-center md:justify-start">
                    <img src="../img/servicio-desarrollo-software.png" alt="servicio de dearrollo de software" />
                </div>

                <div>
                    <div className="serviceTitle">
                        <h2>Desarrollo de software</h2>
                        <h3>03</h3>
                    </div>

                    <p>Nuestro servicio de desarrollo de software está diseñado para crear soluciones a medida que impulsan la eficiencia y el crecimiento de nuestros clientes. Desde aplicaciones web y móviles hasta sistemas de gestión complejos, transformamos ideas en productos tecnológicos adaptados a las necesidades específicas de cada negocio. Nuestro equipo combina conocimientos técnicos avanzados y creatividad para desarrollar aplicaciones escalables y seguras.</p>

                    <p>Abordamos cada etapa del proceso, desde el análisis de requisitos hasta la implementación y el mantenimiento, garantizando un enfoque integral que asegura la calidad y alineación con los objetivos comerciales. Con nuestro servicio, las empresas optimizan sus operaciones, mejoran la experiencia del usuario y obtienen una ventaja competitiva en el mercado digital.</p>
                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div>
                    <div className="serviceTitle">
                        <h2>Diseño grafico</h2>
                        <h3>04</h3>
                    </div>

                    <p>Transformamos ideas en diseños impactantes que comunican tu mensaje de manera visual y efectiva. Ofrecemos soluciones de diseño gráfico personalizadas para empresas que buscan una identidad visual atractiva y distintiva. Nuestro equipo crea piezas originales que capturan la atención y refuerzan el mensaje de tu marca.</p>

                    <p>Nuestros servicios incluyen diseño y desarrollo visual, así como la creación de identidades de marca, branding y rebranding. Nos enfocamos en crear una imagen sólida que destaque en el mercado. Diseñamos logos, flyers, tarjetas de visita, folios corporativos, sobres, dípticos y trípticos, etc.</p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img src="../img/servicio-diseño-grafico.png" alt="servicio de diseño grafico"/>
                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div className="flex justify-center md:justify-start">
                    <img src="../img/servicio-posicionamiento-organico.png" alt="servicio de pocicionamiento organico"/>
                </div>

                <div>
                    <div className="serviceTitle">
                        <h2>Posicionamiento orgánico (SEO/SEM)</h2>
                        <h3>05</h3>
                    </div>

                    <p>Optimizamos tu visibilidad en los motores de búsqueda para que te encuentren fácilmente en internet. Nuestro equipo ofrece servicios de posicionamiento orgánico diseñados específicamente para empresas que buscan destacar en los resultados de búsqueda. Nos encargamos de optimizar tanto tus sitios web como los contenidos asociados, utilizando estrategias efectivas que incluyen la optimización de palabras clave y la creación de contenido relevante que atrae tráfico de calidad</p>

                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div>
                    <div className="serviceTitle">
                        <h2>e-Commerce</h2>
                        <h3>06</h3>
                    </div>

                    <p>Construimos plataformas de e-Commerce que potencian tus ventas y atraen nuevos compradores. Nuestro equipo de especialistas se dedica al desarrollo de tiendas online personalizadas, eficaces y seguras para vender sus productos o servicios. Creamos tiendas online intuitivas y optimizadas, con un diseño que refleja la imagen de tu marca.</p>

                    <p>Evaluamos y analizamos los objetivos de cada cliente para implementar la estrategia más adecuada y personalizada. Vendé por internet de forma fácil y segura  expandiendo tu clientela llevando tu negocio al siguiente nivel.</p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img src="../img/servicio-ecommerce.png" alt="servicio de desarrollo de ecommerce"/>
                </div>
            </div>

            <div className="service grid md:grid-cols-2 mx-4 md:mx-10 mt-8 md:mt-16 gap-4">
                <div className="flex justify-center md:justify-start">
                    <img src="../img/servicio-posicionamiento-organico.png" alt="servicio de pocicionamiento organico"/>
                </div>

                <div>
                    <div className="serviceTitle">
                        <h2>Publicidad digital</h2>
                        <h3>07</h3>
                    </div>

                    <p>Desarrollamos campañas publicitarias efectivas en Facebook, Instagram y Google que aumentan la visibilidad y el alcance de tu negocio. Nuestros servicios de publicidad digital están diseñados para empresas que desean maximizar su presencia en línea. Nuestro equipo crea campañas optimizadas, enfocándose en estrategias de publicidad digital, anuncios en redes sociales y campañas de Google Ads, con el objetivo de maximizar el retorno de la inversión.</p>

                </div>
            </div>

            <CardContacto />
        </>

    )
}

export default serviciosPage