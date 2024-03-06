import "../../components/static/css/partials/footer.scss";
import { IoLogoTwitter, IoLogoGithub  } from "react-icons/io";
import { FaFacebookF, FaTelegramPlane, FaPinterest   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link'

export function Footer() {
  const defaulLinkIcons = "https://www.google.com/search?q=xvideos&oq=xvideos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzMxMWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8"
  return (
    <footer className="footer">
      <div className="header">
      <h3>Suscribe to our quartely newsletter</h3>
        <div className="send-email">
          <form action="post">
            <input
              type="email"
              name="email"
              placeholder="hello@gmail.com"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="content">
        <img className="image-logo" src="/images/logo-vector.png" alt="logo" />
        <div className="logo">
          <div className="icon">
            <img src="/images/grupo-software.png" alt="" />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            maxime ut? Consequuntur vel ex, atque consequatur aperiam quo
            delectus repellendus incidunt sed amet? Ea, doloremque veniam nobis
            velit voluptatibus id.
          </p>
          <div className="email">migruposoftware@gmail.com</div>
        </div>
        <div className="links">
          <div className="grupo-software">
            <h5>Grupo Software</h5>
            <ul>
              <li><a href="#about">Section</a></li>
              <li><a href="#about">Section</a></li>
              <li><a href="#about">Section</a></li>
              <li><a href="#about">Section</a></li>
              <li><a href="#about">Section</a></li>
              <li><a href="#about">Section</a></li>
            </ul>
          </div>
          <div className="services">
            <h5>Services</h5>
            <ul>
            <li><Link href="/services">Service</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/services">Service</Link></li>
            </ul>
          </div>
          <div className="event">
            <h5>Events</h5>
            <ul>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            <li><a target="blank" href="https://youtu.be/ubCp6K1WRus">Link</a></li>
            </ul>
          </div>
        </div>
        <div className="follow">
          <h5>Follow</h5>
          <div className="icons">
          <a target="blank" href={defaulLinkIcons}><FaFacebookF size={22}/></a>
           <a target="blank" href={defaulLinkIcons}><RiInstagramFill size={22}/> </a>
           <a target="blank" href={defaulLinkIcons}><IoLogoTwitter size={22}/></a>
           <a target="blank" href={defaulLinkIcons}><FaTelegramPlane size={22}/></a>
           <a target="blank" href={defaulLinkIcons}><IoLogoGithub size={22}/></a>
           <a target="blank" href={defaulLinkIcons}><FaPinterest size={22}/></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="terms">
          <a href="">Terms and Conditions</a>
          <a href="">Privacy and Policy</a>
          <a href="">SiteMap</a>
        </div>
        <div>Copyright 2024 grupo software</div>
      </div>
    </footer>
  );
}
