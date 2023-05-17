import { Link } from "react-router-dom";
import "./Header.css";

// const navlink = [
//   {
//     title: "Projects",
//     dropdown: true,
//     path: null,
//     options: [
//       {
//         title: "Project 1",
//         path: "/",
//       },
//       {
//         title: "Project 1",
//         path: "/",
//       },
//     ],
//   },
//   {
//     title: "Agents",
//     dropdown: false,
//     path: "/",
//     options: null,
//   },
//   {
//     title: "Amenities",
//     dropdown: false,
//     path: "/",
//     options: null,
//   },
// ];

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo">Discover Plots</Link>
        </div>
        <div className="header__right">
          <div className="header__dropdown">
            Projects
            <div className="small-triangle" />
          </div>
          <ul className="header__dropdown__options">
            <li className="header__options">
              <Link to="/">Project1</Link>
            </li>
            <li className="header__options">
              <Link to="/">Project2</Link>
            </li>
            <li className="header__options">
              <Link to="/">Project3</Link>
            </li>
          </ul>
          <ul className="header__nav">
            <li className="header__nav__link">
              <Link to="/">Agents</Link>
            </li>
            <li className="header__nav__link">
              <Link to="/">Amenities</Link>
            </li>
          </ul>
          <Link to="/" className="header__signin">
            Sign In
          </Link>
          <Link to="/" className="header__schedule-btn">
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
