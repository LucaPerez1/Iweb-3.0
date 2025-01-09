import React from "react"
import FormContact from "../../components/FormContact/FormContact"
import './pageContacto.css'
import Whatsapp from "../../components/Icons/Whatsapp"
import Consulta from "../../components/Icons/Consulta"
import Instagram from "../../components/Icons/Instagram"
import Facebook from "../../components/Icons/Facebook"
import Linkedin from "../../components/Icons/Linkedin"

function contactoPage() {
    return (
        <main>
            <h1 className="mx-4 md:mx-10 my-6 md:my-10 seccionTitle">Estamos listos para potenciar  tu negocio</h1>
            <p className="generalDescriptions mx-4 md:mx-10">Un simple email puede marcar una gran diferencia en el crecimiento de tu negocio. Cuéntanos cómo podemos ayudarte completando el formulario o contactándonos a través de nuestras redes sociales.</p>

            <div className="md:grid md:grid-cols-2 mx-4 md:mx-10 my-8 md:my-12">
                <div className="contactInformation">
                    <h2 className="mb-5 md:mb-9">Información de contacto </h2>
                    <div>
                        <h3 className="mb-2 md:mb-4">Whatsapp</h3>
                        <div className="networkContainer">
                            <Whatsapp width={40} height={40} fill="#25D366"/>
                            <p>
                                +54 9 11 6787-7298
                            </p>
                        </div>
                        <h3 className="mt-4 md:mt-8 mb-2 md:mb-4">Correo electrónico</h3>
                        <div className="networkContainer">
                            <Consulta width={48} height={40} />
                            <p>
                                iweb.contacto@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mt-5 md:mt-10 mb-2 md:mb-4">Seguinos</h3>
                        <div className="networkContainer mb-4 md:mb-5">
                            <Instagram width={40} height={40} />
                            <p>
                                Instagram
                            </p>
                        </div>
                        <div className="networkContainer mb-4 md:mb-6">
                            <Facebook width={40} height={40} fill="#3568D6" />
                            <p>
                                Facebook
                            </p>
                        </div>
                        <div className="networkContainer mb-7 md:mb-5">
                            <Linkedin width={40} height={40} fill="#32ACE7" />
                            <p>
                                Linkedin
                            </p>
                        </div>
                    </div>
                </div>

                <FormContact />
            </div>
        </main>
    )
}

export default contactoPage