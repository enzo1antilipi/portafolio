import "./styleHead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rick from "../assets/rick.png";
import aerolab from "../assets/aerolab.png";
import panto from "../assets/panto.png";
import "animate.css";
import { Footer } from "./Footer";
import { GrMail } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BsArrowUpRight } from "react-icons/bs";

import { useState } from "react";
export const Head = () => {
  const [navClass, setNavClass] = useState("sidebar");
  const handleToggleNavClass = () => {
    setNavClass(navClass === "sidebar" ? "sidebar visible" : "sidebar");
  };

  return (
    <>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricinoog</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav> */}
    
      <section id="inicio" className="inicio">
        <button className="abrirmenu" onClick={handleToggleNavClass}>
          <AiOutlineMenu />
        </button>
        <h1 className="desarrollador1">DESARROLLADOR FRONTEND</h1>
        <div className="presentacion">
          <span className="contenedorparrafo">
            <h3 className="nombre">Hola mi nombre es Enzo Antilipi</h3>
            <p className="parrafo">
              Me encuentro en un proceso de formacion cursando la carrera de
              Licenciatura en Informática, donde estoy adquiriendo una solida
              base de conocimientos en diferentes áreas de la informatica. Por
              otro lado estudio de manera autodidacta especializado en el
              desarrollo frontend y backend con tecnologias como Node.js. Me
              emocina poder continuar mi trayectoria laboral y poder seguir
              creciendo. ¡Gracias por visitar mi portafolio y espero trabajar
              juntos en futuros proyectos emocionantes!
            </p>
          </span>
        </div>
      </section>
      <div className="divider"></div>
      {/* 
      SECCION INFORMACION 
      */}
      <section id="informacion" className="informacion">
        
            <div className="conexpiencia">
              <h2 className="explaboral">Experiencia laboral </h2>
              <div className="tarjetaExpe">
                <div
                  className="card"
                  style={{ width: "16rem", height: "12rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://atech.org.ar/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        Atech
                        <BsArrowUpRight />
                      </a>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-primary">
                      Calculadora de haberes y autenticación
                    </h6>
                    <p className="card-text" style={{ color: "black" }}>
                      Calculadora desarrollada con Html,CSS,JavaScript y React.
                      <br /> Autenticacion. Herramienta Firebase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          {/* hasta aca el contendor de ambos  */}
      
      </section>
      <div className="divider"></div>
      {/*
       SECCION PREYECTOS
       */}

      <section id="proyectos" className="proyectos">
        <h1 className="texth2">Proyectos</h1>
        <div className="contendorTarjetas">
          {/* TARJETA 1  */}
          <div className="tarjeta">
            <div className="card" style={{ width: "18rem", height: "350px" }}>
              <img className="card-img-top" alt="..." src={rick} />
              <div className="card-body">
                <h5 className="card-title">Ricky and Morty</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  HTML//CSS//JAVASCRIPT
                  <br />
                  REACT
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://github.com/enzo1antilipi/proyect-ricky.git"
                  className="card-link"
                  target="_blank"
                >
                  Github <BsArrowUpRight style={{ width: "12px" }} />
                </a>
                <a
                  href="https://steady-fox-bb124b.netlify.app/"
                  target="_blank"
                  className="card-link"
                >
                  Proyect <BsArrowUpRight style={{ width: "12px" }} />
                </a>
              </div>
            </div>
          </div>
          {/* TARJETA 2 */}
          <div className="tarjeta">
            <div className="card" style={{ width: "18rem", height: "350px" }}>
              <img className="card-img-top" alt="..." src={aerolab} />
              <div className="card-body">
                <h5 className="card-title">Challenge aerolab</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  HTML//CSS//JAVASCRIPT
                  <br />
                  REACT//NEXTjs
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://github.com/enzo1antilipi/aerolab-changetienda.git"
                  target="_blank"
                  className="card-link"
                >
                  Github
                  <BsArrowUpRight style={{ width: "12px" }} />
                </a>
                <a
                  href="https://aerolab-changetienda.vercel.app/"
                  target="_blank"
                  className="card-link"
                >
                  Proyect <BsArrowUpRight style={{ width: "12px" }} />
                </a>
              </div>
            </div>
          </div>
          {/* TARJETA 3 */}
        <div className="tarjeta">
            <div className="card" style={{ width: "18rem", height: "350px" }}>
              <img className="card-img-top" alt="..." src={panto} />
              <div className="card-body">
                <h5 className="card-title">Radiografias panomaricas</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  HTML//CSS//THREE.JS
                  <br />
                  REACT//JAVASCRIPT
                </li>
              </ul>
              <div className="card-body">
                {/* <a
                  href="https://github.com/enzo1antilipi/aerolab-changetienda.git"
                  target="_blank"
                  className="card-link"
                >
                  Github
                  <BsArrowUpRight style={{ width: "12px" }} />
                </a> */}
                <a
                  href="https://www.panto.imaglabs.org/"
                  target="_blank"
                  className="card-link"
                >
                  Proyect <BsArrowUpRight style={{ width: "12px" }} />
                </a>
              </div>
            </div>
          </div>
                    {/*Fin Tarjeta  */}
        </div>
      </section>
      <div className="divider"></div>
      {/* 
        SECCION CONTANCTO
       */}
      <section id="contacto" className="contacto">
        <div>
          <h1 className="texth2">Contáctame</h1>
          <div className="contenedorcontacto">
            <ul className="listacontacto">
              <li style={{ color: "white" }}>
                <GrMail /> Email{" "}
                <a href="mailto:enzoantilipi1@gmail.com">
                  enzoantilipi1@gmail.com
                </a>
              </li>

              <li style={{ color: "white" }}>
                <ImWhatsapp /> WhatsApp{" "}
                <a href="https://wa.link/85q000" target="_blank">
                  +54 2945638804
                </a>
              </li>
              <li style={{ color: "white" }}>
                <BsLinkedin /> Linkedin{" "}
                <a
                  href=" https://www.linkedin.com/in/enzo-antilipi-978097218/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/enzo-antilipi-978097218/
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};
