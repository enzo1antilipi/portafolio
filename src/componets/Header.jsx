import Profile from "./Profile";
import Experience from "./Experience";
import Proyects from "./Proyects";
import Contact from "./Contact"
import { useState,useEffect } from "react";
import "./styleHead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer";


function Header() {

//  const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleNavbar = () => {
//     setIsCollapsed(!isCollapsed);
//   };
const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Actualizar el estado según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return <>
    <div style={{background:"#091a28",}}>
    <div style={{justifyContent:"center", alignContent:"center",display:"flex",background:"#091a28", height:"100%"}}>
   <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Botón para colapsar el menú */}
        <button className="navbar-toggler" onClick={toggleNavbar}>
          &#9776; {/* Icono de menú (hamburguesa) */}
        </button>

        {/* Menú de navegación */}
        <div
          className={`navbar-collapse ${isCollapsed ? "collapsed" : "expanded"}`}
        >
          <ul className="navbar-menu">
            <li className="nav-item">
              <a href="#perfil">Perfil</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a href="#contac">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</div>
<div style={{marginLeft:"10%",marginRight:"10%"}}>
  <div id="perfil" style={{background:"#091a28",height:"85vh"}}>
    <Profile/>
    
  </div>
  <div id="experience"  style={{background:"#091a28",height:"100vh"}}>
      <Experience/>
  </div>
    <div id="projects" style={{background:"#091a28",height:"100vh"}}>
      <Proyects/>
    </div>
     <div  id="contac" style={{background:"#091a28",height:"75vh"}}>
    <Contact/>
    </div>
     
    </div>
    <Footer/>
    </div>
    </>
}
export default Header;