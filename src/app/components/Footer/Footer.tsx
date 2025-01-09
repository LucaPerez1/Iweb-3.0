import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Linkedin from '../Icons/Linkedin'
import './footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div className='flex flex-col'>
                    <Link href={'/'}>
                        <img src="../logo.svg" alt="iweb logo" className='w-auto'/>
                    </Link>
                    <p>Somos una empresa de IT, enfocada en impulsar el crecimiento de nuestros clientes mediante tecnología y creatividad, asegurando resultados de alta calidad</p>
                </div>
                <div className='flex flex-col h-[100%]'>
                    <h4 className='mb-5 md:mb-0'>Seguinos en nuestras redes</h4>
                    <div className='redes md:h-[75%]'>
                        <Instagram width={48} height={48} fill='#F3F3F3' />
                        <Linkedin width={48} height={48} fill='#F3F3F3' />
                        <Facebook width={48} height={48} fill='#F3F3F3' />
                    </div>
                </div>
                <div>
                    <h4 className='mb-5'>Explora</h4>
                    <ul>
                        <li>
                            <Link href={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link href={'/nosotros'}>Nosotros</Link>
                        </li>
                        <li>
                            <Link href={'/servicios'}>Servicios</Link>
                        </li>
                        <li>
                            <Link href={'/proyectos'}>Proyectos</Link>
                        </li>
                        <li>
                            <Link href={'/contacto'}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h5 className='reserved'>©2024 iWeb - Todos los derechos reservados</h5>
            </div>
        </footer>
    )
}

export default Footer