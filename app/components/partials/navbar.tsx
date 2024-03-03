import "../../static/css/partials/navbar.scss";
import NavLinks from "../nav-links";

export default function Navbar() {

    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="hero-bg" src="./assets/images/Logo.png" alt="logo de sitio" />
            </div>
            <div className="nav-links-list" id="links">
                <NavLinks />
            </div>
            <div className="selector">
                <div className="selector-button">
                    <i className="fi fi-rr-world"></i>
                    <p className="text"></p>
                    <i className="fi fi-rr-angle-small-down arrow"></i>
                </div>
                <ul className="options">
                    <li className="option" value="en">
                        <img src="./assets/icons/en.png" alt="icono de ingles" />
                        <p>English</p>
                    </li>
                    <li className="option" value="es">
                        <img src="./assets/icons/es.png" alt="icono de espanol" />
                        <p>Espanol</p>
                    </li>
                </ul>
            </div>
            <div className="nav-logo">
                <img className="hero-bg" src="./assets/images/Logo.png" alt="logo denuevo" />
            </div>

            <div className="side-bar">
                <button className="nav-side-bar-button">
                    <i className="fi fi-rr-menu-burger"></i>
                </button>
                <div className="nav-side-bar">
                    <button className="nav-side-bar-close-button">
                        <i className="fi fi-rr-cross"></i>
                    </button>
                    <img src="#" alt="logo de imagen" />
                    <div className="nav-side-bar-links-list" id="side-bar-links">
                        <a className="nav-link lang active" href="#home" key="navbar.link1">Inicio</a>
                        <a className="nav-link lang" href="#benefits" key="navbar.link2">Beneficios</a>
                        <a className="nav-link lang" href="#about" key="navbar.link4">Nosotros</a>
                        <a className="nav-link lang" href="#contact" key="navbar.link5">Contacto</a>
                    </div>
                    <div className="credits">
                        <p>© 2023 - Jumanji Buggy Tours</p>
                    </div>
                </div>
            </div>
        </div>
    );

}