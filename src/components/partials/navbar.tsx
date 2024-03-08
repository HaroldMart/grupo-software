import "../../components/static/css/partials/navbar.scss";
import NavLinks from "../nav-links";

export default function Navbar() {

    return (
        <nav className="navbar">
            <img src="/images/logo-header.png" alt="navbar logo" className="navbar-logo" />
            <NavLinks />
        </nav>
    );
}
