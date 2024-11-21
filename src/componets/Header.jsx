import Profile from "./Profile";
import Experience from "./Experience";
import Proyects from "./Proyects";
import Contact from "./Contact"

import "./styleHead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer";


function Header() {



    return <>
    <div style={{background:"#091a28",}}>
    <div style={{justifyContent:"center", alignContent:"center",display:"flex",background:"#091a28", height:"100%"}}>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{width:"70%",alignContent:"center",alignItems:"center",justifyContent:"center", borderRadius:"10px",marginTop:"10px",position:"absolute"}}>
  <div class="container-fluid justify-content-center">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav"style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <ul class="navbar-nav"  style={{display:"flex",justifyContent:"center",widt:"100%"}}>
        <li class="nav-item">
          <a class="nav-link" href="#perfil">Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Experience">Experiencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Proyects">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#Contact">Contacto</a>
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
  <div id="Experience"  style={{background:"#091a28",height:"100vh"}}>
      <Experience/>
  </div>
    <div id="Proyects" style={{background:"#091a28",height:"100vh"}}>
      <Proyects/>
    </div>
     <div  id="Contact" style={{background:"#091a28",height:"75vh"}}>
    <Contact/>
    </div>
     
    </div>
    <Footer/>
    </div>
    </>
}
export default Header;