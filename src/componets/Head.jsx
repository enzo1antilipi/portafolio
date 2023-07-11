import "./styleHead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rick from "../assets/rick.png";
import aerolab from "../assets/aerolab.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import github from "../assets/github.png";
import visual from "../assets/visual.png";
import redux from "../assets/redux.png";
import vite from "../assets/vite.png";
import figma from "../assets/figma.png";
import material from "../assets/material.png";
import zustand from "../assets/zustand.png";
import boo from "../assets/boo.png";
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
      <div className="contenedor">
        <aside className={navClass}>
          <nav className="nav">
            <ul className="lista">
              <button className="cerrarmenu" onClick={handleToggleNavClass}>
                <GrClose />
              </button>
              <li className="active">
                <a href="#inicio" className="menu">
                  Inicio
                </a>
              </li>
              <li className="active">
                <a href="#informacion" className="menu">
                  Informacion personal
                </a>
              </li>
              <li className="active">
                <a href="#proyectos" className="menu">
                  Proyectos
                </a>
              </li>
              <li className="active">
                <a href="#contacto" className="menu">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
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
        <div>
          <h2 className="texth2">Informacion personal </h2>

          <div className="contenedorinf">
            <div className="contenedorskill">
              <h3 className="habilidades">Habilidades</h3>
              <h4 className="especificacion">Lenguajes de programacion</h4>
              <img
                className="card-img-top"
                alt="..."
                src={js}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "8px",
                  marginLeft: "25px",
                }}
              />{" "}
              <img
                className="card-img-top"
                alt="..."
                src={html}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "8px",
                  marginLeft: "25px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={css}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "8px",
                  marginLeft: "25px",
                }}
              />
              <h4 className="especificacion">Fremeworks y Librerias</h4>
              <img
                className="card-img-top"
                alt="..."
                src={react}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "8px",
                  background: "white",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={next}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "8px",
                  background: "white",
                  marginLeft: "25px",
                  padding: "1px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={redux}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "25px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={material}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "25px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={zustand}
                style={{
                  width: "35px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "20px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={boo}
                style={{
                  width: "35px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "20px",
                }}
              />
              <h4 className="especificacion">Tecnologias y Herramientas</h4>
              <img
                className="card-img-top"
                alt="..."
                src={github}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={visual}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "25px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={vite}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "25px",
                }}
              />
              <img
                className="card-img-top"
                alt="..."
                src={figma}
                style={{
                  width: "30px",
                  height: "auto",
                  borderRadius: "10px",
                  background: "white",
                  marginLeft: "25px",
                }}
              />
            </div>
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
          </div>
          {/* hasta aca el contendor de ambos  */}
        </div>
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
                <a href="#" className="card-link">
                  Github <BsArrowUpRight style={{ width: "12px" }} />
                </a>
                <a href="#" className="card-link">
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
          {/* <div className="tarjeta">
            <div className="card" style={{ width: "18rem", height: "400px" }}>
              <img className="card-img-top" alt="..." src={imag1} />
              <div className="card-body">
                <h5 className="card-title">Ricky and Morty</h5>
                <p className="card-text" style={{ color: "black" }}>
                  Con que se hizo el proyecto
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div> */}
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
