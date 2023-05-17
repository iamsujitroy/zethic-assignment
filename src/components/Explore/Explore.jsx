import "./Explore.css";
import { Link } from "react-router-dom";
import proprty_1 from "../../assets/Image/property_1.png";
import proprty_2 from "../../assets/Image/property_2.png";
import proprty_3 from "../../assets/Image/property_3.png";
import star_icon from "../../assets/icon/star_4_icon.svg";
import dotgroup from '../../assets/icon/dotgroup.svg';
import arrwo_right from '../../assets/icon/arrow-right.svg';

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore__wrapper">
        <div className="explore__left">
          <h2>Explore Our Collections</h2>
          <div className="explore__left__wrapper">
            <div className="explore__left__icon-group">
              <div className="explore__vertical-line-icon" />
              <img src={star_icon} alt="" />
              <div className="explore__vertical-line-icon" />
            </div>
            <h5>Corner Plots</h5>
          </div>
        </div>
        <div className="explore__right">
          <div className="explore__right__image-wrapper">
            <img className="explore__dot-group-1" src={dotgroup} alt="" />
            <img className="explore__dot-group-2" src={dotgroup} alt="" />
            <img src={proprty_1} alt="" />
            <img src={proprty_2} alt="" />
            <img src={proprty_3} alt="" />
          </div>
        </div>
      </div>
      <div className="action-bar">
        <Link to="/" className="explore-more-btn">
            <img src={arrwo_right} alt=""/>
            <span>Explore More</span>
        </Link>
      </div>
    </div>
  );
}
