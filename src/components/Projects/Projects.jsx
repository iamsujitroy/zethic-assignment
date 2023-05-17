import "./Projects.css";
import nextArrow from "../../assets/icon/next_arrow_icon.svg";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";
import property1 from '../../assets/Image/project_1.png'
import property2 from '../../assets/Image/project_2.png'
import property3 from '../../assets/Image/project_3.png'

export default function Projects() {
  const [selectedOption, setOption] = useState(0);
  const CarouselRef = useRef();
  const options = [
    "Egmore",
    "Koyambedu",
    "Sholinganallur",
    "Choolaimedu",
    "Greams Road",
    "Royapettah",
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }  

  const properties = [
    {
      _id: 1,
      description: "Loreum ispum is the dummmy text used to fill the.",
      thumbnail: property1,
      price: 16471,
      area: 2088
    },
    {
      _id: 1,
      description: "Loreum ispum is the dummmy text used to fill the.",
      thumbnail: property2,
      price: 16471,
      area: 2088
    },
    {
      _id: 1,
      description: "Loreum ispum is the dummmy text used to fill the.",
      thumbnail: property3,
      price: 16471,
      area: 2088
    },
    {
      _id: 1,
      description: "Loreum ispum is the dummmy text used to fill the.",
      thumbnail: property3,
      price: 16471,
      area: 2088
    },
    {
      _id: 1,
      description: "Loreum ispum is the dummmy text used to fill the.",
      thumbnail: property2,
      price: 16471,
      area: 2088
    },
  ];

  return (
    <div className="projects">
      <h2>Feature Projects</h2>
      <div className="projects-tab">
        <div className="projects-tab-left">
          {options.map((option, index) => {
            return (
              <div
                className={`projects-tab-left__btn ${
                  selectedOption === index
                    ? "projects-tab-left__btn--active"
                    : ""
                }`}
                key={option}
                onClick={() => setOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
        <div className="projects-tab-right">
          <div className="projects-prev-btn not-allowed" onClick={() => CarouselRef?.current?.slickPrev()}>
            <img src={nextArrow} alt=""/>
          </div>
          <div className="projects-next-btn" onClick={() => CarouselRef?.current?.slickNext()}>
            <img src={nextArrow} alt=""/>
          </div>
        </div>
      </div>
      <div className="projects-container">
      <Slider {...settings} ref={CarouselRef}>
          {properties.map((propertie) => (<ProjectCard thumbnail={propertie.thumbnail} description={propertie.description} price={propertie.price} area={propertie.area}/>))}
        </Slider>
      </div>
    </div>
  );
}
