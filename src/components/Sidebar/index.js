import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import codechefLogo from '../../assets/images/codechef.png'
import LogoSubtitle from '../../assets/images/Sudip_logo_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="www.linkedin.com/in/yonas-degu-8a943a1b5"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yonas34/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/yonas34"
              target="_blank"
              rel="noreferrer"
            >
              <img src={codechefLogo} width="24" alt="Codechef" />
            </a>
          </li>

          <li><a href="https://www.facebook.com/yonas.degu.9">
          <FontAwesomeIcon icon={faFacebook} color="#b9b9b9" />
</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
