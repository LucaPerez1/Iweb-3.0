import React from "react";
import CardContacto from "../../components/CardContacto/CardConacto";
import './pageNosotros.css'
import CarouselServicios from "../../components/CarouselServicios/CarouselServicios";
import Mision from "../../components/Icons/Mision";
import Valores from "../../components/Icons/Valores";
import Vision from "../../components/Icons/Vision";
import Consulta from "../../components/Icons/Consulta";
import Reunion from "../../components/Icons/Reunion";
import Analisis from "../../components/Icons/Analisis";
import DiseñoDelPlan from "../../components/Icons/DiseñoDelPlan";
import Desarrollo from "../../components/Icons/Desarrollo";
import Propuesta from "../../components/Icons/Propuesta";
import RevisionDeFeedback from "../../components/Icons/RevisionDeFeedback";
import EntregaFinal from "../../components/Icons/EntregaFinal";

function nosotrosPage() {
    return (
        <main>
            {/*SECTION ABOUT US START*/}
            <section className="aboutContainer">
                <div className="about pb-60 md:pb-20 md:pb-0 px-4 md:px-10 pt-8 md:pt-14">
                    <div className=" w-[100%] md:w-[50%] flex flex-col items-center md:items-start">
                        <div className="flex flex-row items-center mb-6">
                            <h1 className="seccionTitle">Sobre</h1>
                            <img src="/logo.svg" alt="iweb logo" className="w-[150px] md:w-[250px]" />
                        </div>
                        <p className="pb-4 md:pb-8">Somos una startup enfocada en el mundo IT que ofrece soluciones integrales para negocios y emprendedores que buscan destacar en el mundo digital. Nuestros servicios abarcan desde el desarrollo web y diseño UX/UI, hasta e-commerce, desarrollo de software, SEO y diseño gráfico. Buscamos crecer junto a nuestros clientes, impulsando su éxito y acompañándolos en cada paso.</p>
                        <p>Contamos con un equipo de profesionales que trabajan combinando tecnologías de vanguardia con un enfoque creativo para garantizar resultados de alta calidad que sobresalgan y generen valor esperado.</p>
                    </div>
                </div>
                <div className="imgContainer flex absolute z-[2] w-[90%] max-h-[320px] bottom-[-18%] left-[50%] transform translate-x-[-50%] md:w-[40%] md:max-h-[95%] md:top-[56px] md:right-[40px] md:transform-none md:left-auto md:bottom-auto">
                    <img src="/img/nosotros-image.jpg" alt="desarrollo en equipo" />
                </div>
            </section>
            {/*SECTION ABOUT US END*/}

            {/*SECTION IDENTITY START*/}
            <section className="md:grid grid-cols-3 mx-4 md:mx-10 gap-14 mt-40 mb-10 md:my-14">
                <div className="identityContainer my-7">
                    <div className="titleIdentityContainer">
                        <Mision />
                        <h3>Misión </h3>
                    </div>
                    <p>Nuestra misión es desarrollar soluciones web y de software de alta calidad que impulsen el crecimiento de nuestros clientes a través de un enfoque personalizado, creativo e innovador. Nos comprometemos a comprender en profundidad las necesidades de cada proyecto y a ser un socio confiable, creando productos eficientes, escalables y flexibles que aumenten la competitividad de las empresas en el entorno digital.</p>
                </div>


                <div className="identityContainer my-7">
                    <div className="titleIdentityContainer">
                        <Valores />
                        <h3>Valores</h3>
                    </div>
                    <p>Creatividad, compromiso, innovación constante, excelencia, responsabilidad adaptabilidad, flexibilidad y satisfacción del cliente son nuestros valores fundamentales. Propulsados por estos principios éticos, brindamos soluciones de alta calidad que impulsen el crecimiento de nuestros clientes.</p>
                </div>

                <div className="identityContainer my-7">
                    <div className="titleIdentityContainer">
                        <Vision />
                        <h3>Visión</h3>
                    </div>
                    <p>Buscamos convertirnos en una empresa reconocida dentro del mundo IT, destacándonos por crear soluciones innovadoras y personalizas para cada uno de nuestros clientes. Aspiramos a ser la primera elección de aquellas empresas que buscan mejorar dentro del mundo IT, impulsando la transformación digital a través de un enfoque en la excelencia técnica, la creatividad y un servicio al cliente sobresaliente.</p>
                </div>
            </section>
            {/*SECTION IDENTITY END*/}

            {/*SECTION PROCES START*/}
            <section>
                <h2 className="seccionTitle my-10 md:my-16">Nuestro proceso</h2>

                <div className="md:grid grid-cols-3 mx-4 md:mx-10 gap-14 my-10 md:my-14">

                    <div className="stageContainer my-7">
                        <div className="tileStageContainer">
                            <h3 className="text-[rgba(39,82,105,0.7)]">01</h3>
                            <h4>Análisis</h4>
                        </div>
                        <p>En esta primera etapa, nos enfocamos en comprender en profundidad las necesidades y objetivos del cliente a través de entrevistas y sesiones de descubrimiento, identificando requerimientos clave y analizando su entorno competitivo. Este proceso nos permite conocer sus expectativas, detectar oportunidades y definir funcionalidades esenciales del proyecto, asegurando que el producto final esté alineado con sus metas comerciales.</p>
                        <p>Nuestro trabajo de análisis también involucra un análisis detallado del panorama competitivo, permitiéndonos destacar y acentuar los diferenciales del negocio para ayudarlo a sobresalir en su mercado.</p>
                    </div>

                    <div className="stageContainer my-7">
                        <div className="tileStageContainer">
                            <h3 className="text-[rgba(8,230,245,0.3)]">02</h3>
                            <h4>Planificación</h4>
                        </div>
                        <p>A partir del análisis, desarrollamos un plan detallado que define la estructura del proyecto, los recursos necesarios. Armamos la arquitectura de la solución, identificando los elementos técnicos y herramientas que utilizaremos, mientras trazamos un roadmap claro para guiar cada fase del desarrollo.</p>
                        <p>Durante todo el proceso, mantenemos una comunicación continua con el cliente para asegurar que cada paso esté alineado con sus expectativas. para alinear cada paso con tus expectativas, formulando recomendaciones claras que definen la esencia de tu marca. Así, establecemos una estrategia sólida y soluciones precisas, adaptadas a las necesidades únicas de tu negocio.</p>
                    </div>

                    <div className="stageContainer my-7">
                        <div className="tileStageContainer">
                            <h3 className="text-[rgba(39,82,105,0.7)]">03</h3>
                            <h4>Solución</h4>
                        </div>
                        <p>En esta última etapa, implementamos el desarrollo del proyecto bajo altos estándares de calidad y prácticas ágiles, enfocándonos en crear un producto final eficiente, escalable y alineado con los requisitos definidos. Nuestro equipo realiza pruebas rigurosas para asegurar el funcionamiento y la optimización del producto, garantizando una implementación sin contratiempos. Además soporte para que el cliente pueda aprovechar al máximo la solución entregada.</p>
                    </div>
                </div>
            </section>
            {/*SECTION PROCES END*/}

            <section>
                <CarouselServicios />
            </section>

            {/*SECTION WORK FLOW START*/}
            <section className="mx-4 md:mx-10 my-10 md:my-14">
                <div className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-y-7 gap-x-6 md:gap-x-16 mb-10 md:mb-14">
                    <div className="workFlowDescription row-span-1 col-span-1">
                        <h2 className="mb-4 md:mb-7">NUESTRO MÉTODO</h2>
                        <p>Ya sea que necesites desarrollar un manual marca, crear un branding sólido, diseñar una página web o mejorar el posicionamiento de tu negocio, nuestro método de trabajos se basa en los siguientes pasos clave.</p>
                    </div>

                    <div className="workFlowImgContainer row-span-2 col-span-1">
                        <img src="/img/metodo-image.jpg" alt="metodo de trabajo" className=" w-[90%] md:w-[100%]" />
                    </div>

                    <div className="stepContainer flex row-span-1 col-span-1 pt-12">
                        <div className="step">
                            <Consulta />
                            <div className="stepCircle"></div>
                            <p className="stepName">Tu consulta</p>
                        </div>

                        <div className="step">
                            <Reunion />
                            <div className="stepCircle"></div>
                            <p className="stepName">1era reunion</p>
                        </div>

                        <div className="step">
                            <Analisis />
                            <div className="stepCircle"></div>
                            <p className="stepName">Análisis</p>
                        </div>

                        <div className="line top-[122px] mx-[40px]"></div>
                    </div>
                </div>

                <div className="stepContainer hidden md:flex">
                    <div className="step">
                        <DiseñoDelPlan />
                        <div className="stepCircle"></div>
                        <p className="stepName">Diseño del plan de accion</p>
                    </div>

                    <div className="step">
                        <Desarrollo />
                        <div className="stepCircle"></div>
                        <p className="stepName">Desarrollo</p>
                    </div>

                    <div className="step">
                        <Propuesta />
                        <div className="stepCircle"></div>
                        <p className="stepName">Propuestas</p>
                    </div>

                    <div className="step">
                        <RevisionDeFeedback />
                        <div className="stepCircle"></div>
                        <p className="stepName">Revisión de feedback</p>
                    </div>

                    <div className="step">
                        <EntregaFinal />
                        <div className="stepCircle"></div>
                        <p className="stepName">Entrega final</p>
                    </div>

                    <div className="line top-[45%] mx-[44px]"></div>
                </div>

                <div className="stepContainer flex md:hidden">
                    <div className="step">
                        <DiseñoDelPlan />
                        <div className="stepCircle"></div>
                        <p className="stepName">Diseño del plan de accion</p>
                    </div>

                    <div className="step">
                        <Desarrollo />
                        <div className="stepCircle"></div>
                        <p className="stepName">Desarrollo</p>
                    </div>

                    <div className="step">
                        <Propuesta />
                        <div className="stepCircle"></div>
                        <p className="stepName">Propuestas</p>
                    </div>

                    <div className="line top-[45%] mx-[44px]"></div>
                </div>
                <div className="stepContainer flex md:hidden mt-8">
                    <div className="step">
                        <RevisionDeFeedback />
                        <div className="stepCircle"></div>
                        <p className="stepName">Revisión de feedback</p>
                    </div>

                    <div className="step">
                        <EntregaFinal />
                        <div className="stepCircle"></div>
                        <p className="stepName">Entrega final</p>
                    </div>

                    <div className="line top-[52%] mx-[44px] "></div>
                </div>

            </section>
            {/*SECTION WORK FLOW END*/}

            <CardContacto />
        </main>
    )
}

export default nosotrosPage