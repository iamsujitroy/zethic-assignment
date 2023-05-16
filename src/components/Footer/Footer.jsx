import { Link } from 'react-router-dom';
import facebook_logo from '../../assets/icon/facebook_logo.svg';
import instagram_logo from '../../assets/icon/instagram_logo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <div className="footer__left">
          <Link to="/" className='footere__logo'>Discover Plots</Link>
          <p className="footer__subtitle">Loreum ispum is the dummy text</p>
        </div>
        <div className="footer__right">
          <div className="footer__right__section1">
            <h4>Company</h4>
            <ul>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__right__section2">
            <h4>Who we help</h4>
            <ul>
              <li>Customers</li>
              <li>Brokers</li>
              <li>Lenders</li>
            </ul>
          </div>
          <div className="footer__right__section3">
            <h4>Follow us</h4>
            <ul>
              <li>
                <img src={facebook_logo} alt="" />
                Facebook
              </li>
              <li>
                <img src={instagram_logo} alt="" />
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Copyright @ 2023 City Plots</span>
        <ul>
          <li>Privacy Policy</li>
          <li>Privacy Collection Notice</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
  )
}
