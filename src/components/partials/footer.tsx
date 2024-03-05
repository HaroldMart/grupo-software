import "../../components/static/css/partials/footer.scss";
import { IoLogoTwitter, IoLogoGithub  } from "react-icons/io";
import { FaFacebookF, FaTelegramPlane, FaPinterest   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="footer">
      <div className="header">
      <h3>Suscribe to our quartely newsletter</h3>
        <div className="send-email">
          <form action="post">
            <input
              type="email"
              name="email"
              placeholder="I wanna fuck with 10 women"
            />
            <button type="submit">Send email</button>
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
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="services">
            <h5>Services</h5>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="event">
            <h5>Events</h5>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
        </div>
        <div className="follow">
          <h5>Follow</h5>
          <div className="icons">
            <FaFacebookF size={22}/>
            <RiInstagramFill size={22}/> 
            <IoLogoTwitter size={22}/>
            <FaTelegramPlane size={22}/>
            <IoLogoGithub size={22}/>
            <FaPinterest size={22}/>
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
