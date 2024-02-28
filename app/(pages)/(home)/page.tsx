'use client'

import Headline from "../../components/headline";
import Image from 'next/image'

export default function Page() {
    const saludo = "hola";
    const description = "hola a todos";

    return (
        <main role="main">
            <section className="section-1">
                <div className="container">
                    <ul className="list-items">
                        <li className="item">
                            <div className="icon">
                                {/* <box-icon type='solid' color="#9CAFFF" name='balloon'></box-icon> */}
                            </div>
                            <div className="item-description">
                                <h5 className="headline">Desarrollo Web</h5>
                                <p className="description">Llevando a cabo webs dinamicas y atracticas para que asi atraigas a tu publico a interactuar con tus productos y/o servicios.</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="icon">
                                {/* <box-icon type='solid' color="#9CAFFF" name='balloon'></box-icon> */}
                            </div>
                            <div className="item-description">
                                <h5 className="headline">Aplicaciones mobiles</h5>
                                <p className="description">Actualmente las aplicaciones mobiles son muy utilizadas en la vida cotidiana de las personas asi que si nos prefieres podriamos adentrar tu idea dentro de esas vidas.</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="icon">
                                {/* <box-icon type='solid' color="#9CAFFF" name='balloon'></box-icon> */}
                            </div>
                            <div className="item-description">
                                <h5 className="headline">Programas de escritorio</h5>
                                <p className="description">Utilizando programas para desarrollar programas de escritorios rapidos, dinamicos y faciles de manejar por usted para que su equipo se familiarize rapido con el.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <Image src="/images/test/shape 1.png" width={552} height={662} alt="imagen 1" className="shape" />

            </section>

            <div className="banner-1">
                <div className="item">
                    <Image src="/images/almuerzo-cohete.png" width={50} height={50} alt="imagen 1" className="icon" />
                    <div className="stadistic">
                        <h1>50+</h1>
                        <p>Proyectos desplegados</p>
                    </div>
                </div>
                <div className="item">
                    <Image src="/images/calendario-reloj.png" width={50} height={50} alt="imagen 2" className="icon" />
                    <div className="stadistic">
                        <h1>100+</h1>
                        <p>Clientes contentos</p>
                    </div>
                </div>
                <div className="item">
                    <Image src="/images/dolar-de-saco.png" width={50} height={50} alt="imagen 3" className="icon" />
                    <div className="stadistic">
                        <h1>20+</h1>
                        <p>Desarrolladores</p>
                    </div>
                </div>
                <div className="item">
                    <Image src="/images/oficina-telefonica.png" width={50} height={50} alt="imagen 4" className="icon" />
                    <div className="stadistic">
                        <h1>24hrs</h1>
                        <p>Soporte las 24 horas</p>
                    </div>
                </div>
            </div>

            <section className="section-1 section-2">
                <Image src="/images/test/shape 2.png" width={561} height={582} alt="imagen shape 2" className="shape" />

                <div className="container">
                    <div className="headline">
                        <h1 className="headline-title">Algunas de las preguntas frecuentes</h1>
                        <p className="headline-description">Por si aun las dudas e aqui algunas de las preguntas mas frecuentes y un video de nosotros para que entres mas en confianza.</p>
                    </div>

                    <ul className="list-items">
                        <li className="item">
                            {/* <box-icon name='chevron-right'></box-icon> */}
                            <p>Como es su forma de trabajo?</p>
                        </li>
                        <li className="item">
                            {/* <box-icon name='chevron-right'></box-icon> */}
                            <p>Donde se encuentran ubicados?</p>
                        </li>
                        <li className="item">
                            {/* <box-icon name='chevron-right'></box-icon> */}
                            <p>Cuanto tardarian en entregarme un proyecto?</p>
                        </li>
                    </ul>

                    <a href="#" className="play-video-button">
                        <div className="icon">
                            {/* <box-icon name='right-arrow' type='solid' color='#ffffff' ></box-icon> */}
                        </div>
                        <p>Ver video</p>
                    </a>
                </div>
            </section>

            <section className="section-3">
                <div className="headline">
                    <h1 className="headline-title">hechale un vistazo a la calidad de nuestros proyectos</h1>
                    <p className="headline-description">Asi podras tener una idea de la calidad y responsabilidad con la que desarrollamos nuestros proyectos mas recientes.</p>
                </div>

                <div className="content">
                    <div className="empty"></div>
                    <div className="projects-preview">
                        <a href="#" className="card">
                            <img src="../../../public/images/project 1.png" alt="proyecto imagen" />
                            <div className="about-project">
                                <div className="heading">
                                    <h5>New Design</h5>
                                    <p className="time-published">2 days ago</p>
                                </div>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <img src="https://i.pinimg.com/564x/6f/b2/54/6fb25417982335992f08aab8497549ad.jpg" alt="#" />
                            <div className="about-project">
                                <div className="heading">
                                    <h5>New Design</h5>
                                    <p className="time-published">2 days ago</p>
                                </div>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <img src="https://i.pinimg.com/564x/83/19/db/8319db68d701ec95cdc660c725143cb0.jpg" alt="#" />
                            <div className="about-project">
                                <div className="heading">
                                    <h5>New Design</h5>
                                    <p className="time-published">2 days ago</p>
                                </div>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <img src="https://i.pinimg.com/564x/22/c2/88/22c288d2f206bfbb0af65c3bd5039dc1.jpg" alt="#" />
                            <div className="about-project">
                                <div className="heading">
                                    <h5>New Design</h5>
                                    <p className="time-published">2 days ago</p>
                                </div>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="section-4 section-1">
                <ul className="container">
                    <li className="item">
                        <div className="image">
                            {/* <box-icon name='balloon' type='solid' color='#877ad6' ></box-icon> */}
                        </div>
                        <div className="cont">
                            <h4>Create Account</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image">
                            {/* <box-icon name='balloon' type='solid' color='#877ad6' ></box-icon> */}
                        </div>
                        <div className="cont">
                            <h4>Create Account</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image">
                            {/* <box-icon name='balloon' type='solid' color='#877ad6' ></box-icon> */}
                        </div>
                        <div className="cont">
                            <h4>Create Account</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image">
                            {/* <box-icon name='balloon' type='solid' color='#877ad6' ></box-icon> */}
                        </div>
                        <div className="cont">
                            <h4>Create Account</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </li>
                </ul>
                <Image src="/images/test/shape 3.png" width={578} height={570} alt="imagen shape 3" className="shape" />
            </section>
        </main>
    );
}