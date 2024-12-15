import React from "react";
import CardContacto from "../components/CardContacto/CardConacto";
import './pageNosotros.css'

function nosotrosPage() {
    return (
        <>
            <div className="about grid grid-cols-2">
                <div>
                    <div className="flex flex-row items-center">
                        <h1 className="seccionTitle">Sobre</h1>
                        <img src="/logo.svg" alt="iweb logo" className="h-20" />
                    </div>
                    <p>Somos una startup enfocada en el mundo IT que ofrece soluciones integrales para negocios y emprendedores que buscan destacar en el mundo digital. Nuestros servicios abarcan desde el desarrollo web y diseño UX/UI, hasta e-commerce, desarrollo de software, SEO y diseño gráfico. Buscamos crecer junto a nuestros clientes, impulsando su éxito y acompañándolos en cada paso.</p>
                    <p>Contamos con un equipo de profesionales que trabajan combinando tecnologías de vanguardia con un enfoque creativo para garantizar resultados de alta calidad que sobresalgan y generen valor esperado.</p>
                </div>
                <div className="imgContainer">
                    <img src="/img/nosotros-image.jpg" alt="desarrollo en equipo" />
                </div>
            </div>

            <div className="grid grid-cols-3 mx-4 md:mx-10 gap-14">
                <div className="identityContainer">
                    <div className="titleIdentityContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 140" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M87.1284 100.631L128.058 59.8245C133.952 53.952 136.899 51.0122 138.446 47.2815C139.993 43.5507 140 39.386 140 31.0777V27.109C140 14.3279 140 7.9374 136.017 3.9687C132.034 -4.17201e-07 125.629 0 112.812 0H108.822C100.492 0 96.3265 -3.12901e-07 92.5815 1.54688C88.8295 3.09377 85.8824 6.03355 79.9814 11.9061L39.0589 52.713C32.1709 59.5725 27.9008 63.8352 26.2488 67.9439C25.7371 69.1926 25.4709 70.5282 25.4648 71.8776C25.4648 77.4912 29.9938 82.0128 39.0589 91.0492L40.2769 92.2601L54.5431 77.7782C55.0271 77.2869 55.6031 76.8957 56.2383 76.627C56.8735 76.3583 57.5554 76.2173 58.245 76.2121C58.9347 76.2069 59.6186 76.3376 60.2578 76.5967C60.897 76.8558 61.4788 77.2382 61.9702 77.7222C62.4615 78.2061 62.8527 78.7821 63.1215 79.4172C63.3902 80.0524 63.5312 80.7342 63.5364 81.4238C63.5416 82.1134 63.4109 82.7973 63.1518 83.4364C62.8926 84.0755 62.5102 84.6573 62.0262 85.1486L47.711 99.6725L48.67 100.631C57.7351 109.661 62.2712 114.182 67.8992 114.182C69.1452 114.182 70.3353 113.965 71.5323 113.524C75.7533 111.971 80.0654 107.673 87.1284 100.631ZM106.358 52.713C103.804 55.2567 100.347 56.6849 96.743 56.6849C93.1389 56.6849 89.6816 55.2567 87.1284 52.713C85.8649 51.4575 84.8621 49.9646 84.1779 48.32C83.4936 46.6755 83.1413 44.9119 83.1413 43.1308C83.1413 41.3496 83.4936 39.586 84.1779 37.9415C84.8621 36.297 85.8649 34.804 87.1284 33.5485C89.6816 31.0049 93.1389 29.5767 96.743 29.5767C100.347 29.5767 103.804 31.0049 106.358 33.5485C107.621 34.804 108.624 36.297 109.308 37.9415C109.992 39.586 110.345 41.3496 110.345 43.1308C110.345 44.9119 109.992 46.6755 109.308 48.32C108.624 49.9646 107.621 51.4575 106.358 52.713Z" fill="#08E6F5" />
                            <path d="M49.237 27.739L31.4358 45.4966C28.1668 48.7584 25.1638 51.7472 22.7907 54.4559C21.1849 56.2417 19.7353 58.162 18.4577 60.1955L18.2897 60.0205L17.6247 59.3626C14.5235 56.3669 10.8853 53.9828 6.90057 52.3351L6.03956 51.9851L3.38654 50.9352C2.56032 50.6095 1.82823 50.0832 1.25635 49.4038C0.684466 48.7243 0.290801 47.9132 0.110888 47.0436C-0.0690251 46.174 -0.0295205 45.2733 0.225833 44.4227C0.481187 43.5722 0.94435 42.7986 1.57352 42.1719C9.4136 34.3465 18.8287 24.9602 23.3788 23.0773C27.3306 21.4267 31.6546 20.873 35.8949 21.4744C39.7169 22.0414 43.329 24.0082 49.237 27.739ZM79.6384 121.182C81.0734 122.638 82.0184 123.667 82.8864 124.766C84.0204 126.217 85.0331 127.752 85.9244 129.371C86.9184 131.191 87.6954 133.13 89.2425 137.015C89.5461 137.749 90.0263 138.398 90.6406 138.902C91.255 139.407 91.9843 139.752 92.764 139.907C93.5437 140.062 94.3497 140.022 95.1103 139.791C95.871 139.56 96.5629 139.145 97.1245 138.583L97.7126 138.002C105.553 130.183 114.968 120.797 116.858 116.268C118.518 112.334 119.072 108.021 118.461 103.795C117.894 99.9805 115.927 96.3758 112.182 90.4822L94.3175 108.289C90.9715 111.628 87.9054 114.686 85.1264 117.08C83.4674 118.522 81.6474 119.95 79.6384 121.182Z" fill="#275269" />
                        </svg>
                        <h3>Misión </h3>
                    </div>
                    <p>Nuestra misión es desarrollar soluciones web y de software de alta calidad que impulsen el crecimiento de nuestros clientes a través de un enfoque personalizado, creativo e innovador. Nos comprometemos a comprender en profundidad las necesidades de cada proyecto y a ser un socio confiable, creando productos eficientes, escalables y flexibles que aumenten la competitividad de las empresas en el entorno digital.</p>
                </div>

                <div className="identityContainer">
                    <div className="titleIdentityContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 126 145" fill="none">
                            <path d="M62.7803 145L0 69.6636L18.8341 31.9955H106.726L125.561 69.6636L62.7803 145ZM47.87 63.3856H77.6906L68.2735 44.5515H57.287L47.87 63.3856ZM56.5022 117.847V75.9417H21.6592L56.5022 117.847ZM69.0583 117.847L103.901 75.9417H69.0583V117.847ZM91.6592 63.3856H108.296L98.8789 44.5515H82.2421L91.6592 63.3856ZM17.2646 63.3856H33.9013L43.3184 44.5515H26.6816L17.2646 63.3856Z" fill="#08E6F5" />
                            <path d="M62.7803 20.0673V5" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M92.9093 23.8821L103.563 13.228" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M31.8788 24.385L21.2246 13.7308" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                        </svg>
                        <h3>Valores</h3>
                    </div>
                    <p>Creatividad, compromiso, innovación constante, excelencia, responsabilidad adaptabilidad, flexibilidad y satisfacción del cliente son nuestros valores fundamentales. Propulsados por estos principios éticos, brindamos soluciones de alta calidad que impulsen el crecimiento de nuestros clientes.</p>
                </div>

                <div className="identityContainer">
                    <div className="titleIdentityContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 149" fill="none">
                            <path d="M70 119.522C22.5773 119.522 1.13402 77.8721 0.309278 75.8103C-0.103093 74.5732 -0.103093 73.3361 0.309278 72.0989C1.13402 70.4495 22.5773 28.8 70 28.8C117.423 28.8 138.866 70.4495 139.691 72.5113C140.103 73.7484 140.103 74.9855 139.691 76.2227C138.866 77.8721 117.423 119.522 70 119.522ZM8.5567 74.1608C13.0928 81.9959 32.8866 111.274 70 111.274C107.113 111.274 126.495 81.9959 131.443 74.1608C126.907 66.3258 107.113 37.0474 70 37.0474C32.8866 37.0474 13.5052 66.3258 8.5567 74.1608Z" fill="#08E6F5" />
                            <path d="M70 111.274C49.3814 111.274 32.8866 94.7795 32.8866 74.1609C32.8866 53.5424 49.3814 37.0475 70 37.0475C90.6186 37.0475 107.113 53.5424 107.113 74.1609C107.113 94.7795 90.6186 111.274 70 111.274ZM70 45.295C53.9175 45.295 41.134 58.0785 41.134 74.1609C41.134 90.2434 53.9175 103.027 70 103.027C86.0825 103.027 98.866 90.2434 98.866 74.1609C98.866 58.0785 86.0825 45.295 70 45.295Z" fill="#08E6F5" />
                            <path d="M70 94.7794C58.4536 94.7794 49.3815 85.7072 49.3815 74.1609C49.3815 71.6866 51.031 70.0371 53.5052 70.0371C55.9794 70.0371 57.6289 71.6866 57.6289 74.1609C57.6289 81.1712 62.9897 86.532 70 86.532C77.0103 86.532 82.3712 81.1712 82.3712 74.1609C82.3712 67.1505 77.0103 61.7897 70 61.7897C67.5258 61.7897 65.8763 60.1402 65.8763 57.666C65.8763 55.1918 67.5258 53.5423 70 53.5423C81.5464 53.5423 90.6186 62.6145 90.6186 74.1609C90.6186 85.7072 81.5464 94.7794 70 94.7794Z" fill="#08E6F5" />
                            <path d="M70 21.8V5" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M105.905 26.9947L115.542 13.2329" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M30.1 27.9492L21.7 13.4" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M68.7976 126.228L68.7976 143.028" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M32.274 120.639L23.874 135.188" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                            <path d="M108.698 120.078L117.098 134.628" stroke="#275269" strokeWidth="10" strokeLinecap="round" />
                        </svg>
                        <h3>Visión</h3>
                    </div>
                    <p>Buscamos convertirnos en una empresa reconocida dentro del mundo IT, destacándonos por crear soluciones innovadoras y personalizas para cada uno de nuestros clientes. Aspiramos a ser la primera elección de aquellas empresas que buscan mejorar dentro del mundo IT, impulsando la transformación digital a través de un enfoque en la excelencia técnica, la creatividad y un servicio al cliente sobresaliente.</p>
                </div>
            </div>

            <h2 className="seccionTitle my-8 md:my-14">Nuestro proceso</h2>

            <div className="grid grid-cols-3 mx-4 md:mx-10 gap-14">
                <div className="stageContainer">
                    <div className="tileStageContainer">
                        <h3>01</h3>
                        <h4>Análisis</h4>
                    </div>
                    <p>En esta primera etapa, nos enfocamos en comprender en profundidad las necesidades y objetivos del cliente a través de entrevistas y sesiones de descubrimiento, identificando requerimientos clave y analizando su entorno competitivo. Este proceso nos permite conocer sus expectativas, detectar oportunidades y definir funcionalidades esenciales del proyecto, asegurando que el producto final esté alineado con sus metas comerciales.</p>
                    <p>Nuestro trabajo de análisis también involucra un análisis detallado del panorama competitivo, permitiéndonos destacar y acentuar los diferenciales del negocio para ayudarlo a sobresalir en su mercado.</p>
                </div>

                <div className="stageContainer">
                    <div className="tileStageContainer">
                        <h3>02</h3>
                        <h4>Planificación</h4>
                    </div>
                    <p>A partir del análisis, desarrollamos un plan detallado que define la estructura del proyecto, los recursos necesarios. Armamos la arquitectura de la solución, identificando los elementos técnicos y herramientas que utilizaremos, mientras trazamos un roadmap claro para guiar cada fase del desarrollo.</p>
                    <p>Durante todo el proceso, mantenemos una comunicación continua con el cliente para asegurar que cada paso esté alineado con sus expectativas. para alinear cada paso con tus expectativas, formulando recomendaciones claras que definen la esencia de tu marca. Así, establecemos una estrategia sólida y soluciones precisas, adaptadas a las necesidades únicas de tu negocio.</p>
                </div>

                <div className="stageContainer">
                    <div className="tileStageContainer">
                        <h3>03</h3>
                        <h4>Solución</h4>
                    </div>
                    <p>En esta última etapa, implementamos el desarrollo del proyecto bajo altos estándares de calidad y prácticas ágiles, enfocándonos en crear un producto final eficiente, escalable y alineado con los requisitos definidos. Nuestro equipo realiza pruebas rigurosas para asegurar el funcionamiento y la optimización del producto, garantizando una implementación sin contratiempos. Además soporte para que el cliente pueda aprovechar al máximo la solución entregada.</p>
                </div>
            </div>
            
            <CardContacto />
        </>
    )
}

export default nosotrosPage