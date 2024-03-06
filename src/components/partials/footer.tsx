import "../../components/static/css/partials/footer.scss";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link'

export function Footer() {
    const defaulLinkIcons = "https://www.google.com"

    return (
        <footer className="footer">
            <div className="call-to-suscribe">
                <h3>Suscribe to our quartely newsletter</h3>

                <div className="send-email">
                    <form action="post">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email adress"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="content">
                <img className="image-logo" src="/images/logo-vector.png" alt="logo" />
                <div className="logo">
                    <div className="icon">
                        <img src="/images/GrupoSoftware Logo.png" alt="logo" />
                        <h4>GrupoSoftware</h4>
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                        maxime ut? Consequuntur vel ex, consequatur aperiam.
                    </p>
                    <a className="email">migruposoftware@gmail.com</a>
                </div>
                <div className="links">
                    <div className="grupo-software">
                        <h5>Main Links</h5>
                        <ul>
                            <li><a href="#about">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#about">Portfolio</a></li>
                            <li><a href="#about">Services</a></li>
                            <li><a href="#about">Contact</a></li>
                        </ul>
                    </div>
                    <div className="services">
                        <h5>Our Services</h5>
                        <ul>
                            <li><Link href="/services">Web Design</Link></li>
                            <li><Link href="/services">Desktop Programs</Link></li>
                            <li><Link href="/services">Mobile Development</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="follow">
                    <h5>Follow</h5>
                    <div className="icons">
                        <a target="blank" href={defaulLinkIcons}><FaFacebookF size={22} /></a>
                        <a target="blank" href={defaulLinkIcons}><RiInstagramFill size={22} /> </a>
                        <a target="blank" href={defaulLinkIcons}><IoLogoTwitter size={22} /></a>
                        <a target="blank" href={defaulLinkIcons}><FaTelegramPlane size={22} /></a>
                        <a target="blank" href={defaulLinkIcons}><IoLogoGithub size={22} /></a>
                        <a target="blank" href={defaulLinkIcons}><FaPinterest size={22} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-legals">
                <div className="terms">
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy and Policy</a>
                    <a href="#">SiteMap</a>
                </div>
                <p className="copyright-short">Copyright 2024 © gruposoftware</p>
            </div>
        </footer>
    );
}
