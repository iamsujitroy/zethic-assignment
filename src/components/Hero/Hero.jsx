import "./Hero.css";
import bg_image from "../../assets/Image/hero_bg.png";
import star_icon from "../../assets/icon/star_icon.svg";
import trending_project_1 from "../../assets/Image/trending_project_1.png";
import trending_project_2 from "../../assets/Image/trending_project_2.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero__top-section">
          <div className="hero__left">
            <img src={bg_image} alt="" />
          </div>
          <div className="hero__right">
            <h2>Discover Your Perfect</h2>
            <h2>Plot of Land.</h2>
            <p>Strating at</p>
            <div className="hero__price">
              ₹3999<span>per.sqft</span>
            </div>
            <img src={star_icon} className="hero__star-icon" alt="" />
            <form className="hero__search">
              <input type="text" placeholder="Search area or location" />
              <select id="budget">
                <option value={null}>₹ Budget</option>
                <option value="1000000">₹ 10 Lakhs</option>
                <option value="5000000">₹ 50 Lakhs</option>
              </select>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="hero__bottom-section">
          <div className="hero-bottom__left">
            <div className="hero__achievement__container">
              <div className="hero__achievement__item">
                <div>437k+</div>
                <p>Happy Customers</p>
              </div>
              <div className="hero__achievement__item">
                <div>340k+</div>
                <p>Landmark near chennai</p>
              </div>
              <div className="hero__achievement__item">
                <div>4.3m+</div>
                <p>Sq. feet Developed</p>
              </div>
            </div>
            <div className="hero__achivement__lines">
              Loreum ispum is the dummy text used to fill the contest and the
              loreum used to fill the content and the loreum.
            </div>
          </div>
          <div className="hero-bottom__right">
            <div className="hero-bottom__right__container">
              <p>♥️ Trending Projects</p>
              <div className="hero-bottom__right__image-wrapper">
                <img src={trending_project_1} alt="" />
                <img src={trending_project_2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
