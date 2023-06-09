import "./styleFooter.css";

export const Footer = () => {
  return (
    <div className="contenedorfoo">
      {/* <p className="foter"> Desarrollado con</p> */}
      <div className="con">
        <span className="foter">Desarrollado con</span>
        <ul className="listafoter">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
};
