"use client";

import Headline from "../../components/headline";
import Image from "next/image";
import { BiSolidBalloon } from "react-icons/bi";
import Card from "../../components/card";
import projects from "../../static/projects";
import Header from "../../components/partials/header";
import services from "../../static/services";

export default function Page() {
  return (
    <main>
      <Header />
      <section className="section-1">
        <div className="container">
          <Headline
            title="No importa cual sea tu idea"
            description="Trabajamos en las plataformas de uso cotidiano en el mercado laboral como proyectos webs, mobil y programas de escritorio para asi ajustarnos a lo que necesite el cliente."
          />
          <ul className="list-items">
            {services.map((service) => (
              <li className="item" key={service.service}>
                <div className="icon">
                  <BiSolidBalloon />
                </div>
                <div className="item-description">
                  <h5 className="headline">{service.service}</h5>
                  <p className="description">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/test/shape 1.png"
          width={552}
          height={662}
          alt="imagen 1"
          className="shape"
        />
      </section>

      <div className="banner-1">
        <div className="item">
          <Image
            src="/images/almuerzo-cohete.png"
            width={50}
            height={50}
            alt="imagen 1"
            className="icon"
          />
          <div className="stadistic">
            <h1>50+</h1>
            <p>Proyectos desplegados</p>
          </div>
        </div>
        <div className="item">
          <Image
            src="/images/calendario-reloj.png"
            width={50}
            height={50}
            alt="imagen 2"
            className="icon"
          />
          <div className="stadistic">
            <h1>100+</h1>
            <p>Clientes contentos</p>
          </div>
        </div>
        <div className="item">
          <Image
            src="/images/dolar-de-saco.png"
            width={50}
            height={50}
            alt="imagen 3"
            className="icon"
          />
          <div className="stadistic">
            <h1>20+</h1>
            <p>Desarrolladores</p>
          </div>
        </div>
        <div className="item">
          <Image
            src="/images/oficina-telefonica.png"
            width={50}
            height={50}
            alt="imagen 4"
            className="icon"
          />
          <div className="stadistic">
            <h1>24hrs</h1>
            <p>Soporte las 24 horas</p>
          </div>
        </div>
      </div>

      <section className="section-1 section-2">
        <Image
          src="/images/test/shape 2.png"
          width={561}
          height={582}
          alt="imagen shape 2"
          className="shape"
        />

        <div className="container">
          <Headline
            title="Algunas de las preguntas frecuentes"
            description="Por si aun las dudas e aqui algunas de las preguntas mas frecuentes y un video de nosotros para que entres mas en confianza."
          />
          <ul className="list-items">
            <li className="item">
              <BiSolidBalloon />
              <p>Como es su forma de trabajo?</p>
            </li>
            <li className="item">
              <BiSolidBalloon />
              <p>Donde se encuentran ubicados?</p>
            </li>
            <li className="item">
              <BiSolidBalloon />
              <p>Cuanto tardarian en entregarme un proyecto?</p>
            </li>
          </ul>

          <a href="#" className="play-video-button">
            <div className="icon">
              <BiSolidBalloon />
            </div>
            <p>Ver video</p>
          </a>
        </div>
      </section>

      <section className="section-3">
        <Headline
          title="hechale un vistazo a la calidad de nuestros proyectos"
          description="Asi podras tener una idea de la calidad y responsabilidad con la que desarrollamos nuestros proyectos mas recientes."
        />

        <div className="content">
          <div className="empty"></div>
          <div className="projects-preview">
            {projects.map((project) => (
              <Card
                key={project.title}
                image={project.image}
                title={project.title}
                date={project.date}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-4 section-1">
        <ul className="container">
          <li className="item">
            <div className="image">
              <BiSolidBalloon />
            </div>
            <div className="cont">
              <h4>Create Account</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt.
              </p>
            </div>
          </li>
          <li className="item">
            <div className="image">
              <BiSolidBalloon />
            </div>
            <div className="cont">
              <h4>Create Account</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt.
              </p>
            </div>
          </li>
          <li className="item">
            <div className="image">
              <BiSolidBalloon />
            </div>
            <div className="cont">
              <h4>Create Account</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt.
              </p>
            </div>
          </li>
          <li className="item">
            <div className="image">
              <BiSolidBalloon />
            </div>
            <div className="cont">
              <h4>Create Account</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt.
              </p>
            </div>
          </li>
        </ul>
        <Image
          src="/images/test/shape 3.png"
          width={578}
          height={570}
          alt="imagen shape 3"
          className="shape"
        />
      </section>
    </main>
  );
}
