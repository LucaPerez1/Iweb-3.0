import React from "react";
import CardContacto from "../components/CardContacto/CardConacto";
import CardService from "../components/CardService/CardService";

const services = [
    {
        id: 1,
        title: "Desarrollo web",
        subtitle: "01",
        description: [
            "Si algo nos enseñó el COVID y la pandemia, es que quien no tenga una web a día de hoy no tiene un negocio sólido en Internet. Por eso nos especializamos en el diseño y desarrollo de sitios web a medida que cautiven a tu audiencia y mejoren la experiencia de los usuarios.",
            "Ofrecemos servicios de desarrollo web personalizados para empresas que buscan una presencia digital atractiva y funcional, incluyendo páginas web corporativas, tiendas online, blogs, redes sociales, foros y más.",
        ],
        imgSrc: "../img/servicio-desarrollo-web.png",
        altText: "servicio de desarrollo web",
        reverse: false,
    },
    {
        id: 2,
        title: "Diseño UX/UI",
        subtitle: "02",
        description: [
            "Diseñamos interfaces centradas en el usuario que no solo optimizan la usabilidad, sino que también aumentan la satisfacción y fidelidad de tus clientes. Ofrecemos servicios de diseño UX/UI personalizados para empresas que buscan mejorar la experiencia de usuario y la interfaz de sus productos digitales, adaptándonos a las necesidades y comportamientos de los usuarios.",
            "Nuestro equipo crea diseños intuitivos y visualmente atractivos que mejoran la usabilidad, el compromiso y la interacción, lo que mejora los resultados para tu negocio. Al enfocarnos en la experiencia completa del usuario, ayudamos a que tu producto digital no solo cumpla con expectativas, sino que las supere.",
        ],
        imgSrc: "../img/servicio-diseño-uxui.png",
        altText: "servicio de diseño ux/ui",
        reverse: true,
    },
    {
        id: 3,
        title: "Desarrollo de software",
        subtitle: "03",
        description: [
            "Nuestro servicio de desarrollo de software está diseñado para crear soluciones a medida que impulsan la eficiencia y el crecimiento de nuestros clientes. Desde aplicaciones web y móviles hasta sistemas de gestión complejos, transformamos ideas en productos tecnológicos adaptados a las necesidades específicas de cada negocio. Nuestro equipo combina conocimientos técnicos avanzados y creatividad para desarrollar aplicaciones escalables y seguras.",
            "Abordamos cada etapa del proceso, desde el análisis de requisitos hasta la implementación y el mantenimiento, garantizando un enfoque integral que asegura la calidad y alineación con los objetivos comerciales. Con nuestro servicio, las empresas optimizan sus operaciones, mejoran la experiencia del usuario y obtienen una ventaja competitiva en el mercado digital.",
        ],
        imgSrc: "../img/servicio-desarrollo-software.png",
        altText: "servicio de desarrollo de software",
        reverse: false,
    },
    {
        id: 4,
        title: "Diseño gráfico",
        subtitle: "04",
        description: [
            "Transformamos ideas en diseños impactantes que comunican tu mensaje de manera visual y efectiva. Ofrecemos soluciones de diseño gráfico personalizadas para empresas que buscan una identidad visual atractiva y distintiva. Nuestro equipo crea piezas originales que capturan la atención y refuerzan el mensaje de tu marca.",
            "Nuestros servicios incluyen diseño y desarrollo visual, así como la creación de identidades de marca, branding y rebranding. Nos enfocamos en crear una imagen sólida que destaque en el mercado. Diseñamos logos, flyers, tarjetas de visita, folios corporativos, sobres, dípticos y trípticos, etc.",
        ],
        imgSrc: "../img/servicio-diseño-grafico.png",
        altText: "servicio de diseño gráfico",
        reverse: true,
    },
    {
        id: 5,
        title: "SEO/SEM",
        subtitle: "05",
        description: [
            "Optimizamos tu visibilidad en los motores de búsqueda para que te encuentren fácilmente en internet. Nuestro equipo ofrece servicios de posicionamiento orgánico diseñados específicamente para empresas que buscan destacar en los resultados de búsqueda. Nos encargamos de optimizar tanto tus sitios web como los contenidos asociados, utilizando estrategias efectivas que incluyen la optimización de palabras clave y la creación de contenido relevante que atrae tráfico de calidad.",
        ],
        imgSrc: "../img/servicio-posicionamiento-organico.png",
        altText: "servicio de posicionamiento orgánico",
        reverse: false,
    },
    {
        id: 6,
        title: "e-Commerce",
        subtitle: "06",
        description: [
            "Construimos plataformas de e-Commerce que potencian tus ventas y atraen nuevos compradores. Nuestro equipo de especialistas se dedica al desarrollo de tiendas online personalizadas, eficaces y seguras para vender sus productos o servicios. Creamos tiendas online intuitivas y optimizadas, con un diseño que refleja la imagen de tu marca.",
            "Evaluamos y analizamos los objetivos de cada cliente para implementar la estrategia más adecuada y personalizada. Vendé por internet de forma fácil y segura expandiendo tu clientela llevando tu negocio al siguiente nivel.",
        ],
        imgSrc: "../img/servicio-ecommerce.png",
        altText: "servicio de desarrollo de eCommerce",
        reverse: true,
    },
    {
        id: 7,
        title: "Publicidad digital",
        subtitle: "07",
        description: [
            "Desarrollamos campañas publicitarias efectivas en Facebook, Instagram y Google que aumentan la visibilidad y el alcance de tu negocio. Nuestros servicios de publicidad digital están diseñados para empresas que desean maximizar su presencia en línea. Nuestro equipo crea campañas optimizadas, enfocándose en estrategias de publicidad digital, anuncios en redes sociales y campañas de Google Ads, con el objetivo de maximizar el retorno de la inversión.",
        ],
        imgSrc: "../img/servicio-posicionamiento-organico.png",
        altText: "servicio de posicionamiento orgánico",
        reverse: false,
    },
];

function serviciosPage() {
    return (
        <main>
            <h1 className="my-8 md:my-12 seccionTitle">Nuestras Áreas de trabajo </h1>

            <div>
                {services.map((service) => (
                    <CardService key={service.id} {...service} />
                ))}
            </div>

            <CardContacto />
        </main>

    )
}

export default serviciosPage