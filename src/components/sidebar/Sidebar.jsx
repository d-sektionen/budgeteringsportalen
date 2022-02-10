import { useState, useEffect } from "react";
import { FiX, FiMenu, FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../images/round.svg";

import Fade from '@material-ui/core/Fade';

import "./sidebar.scss";

const entries = [
  {
    title: "Mina sidor",
    link: "/overview",
  },
  {
    title: "Personligt utlägg",
    link: "/",
  },
];

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const escFunction = (event) => {
    if (event.keyCode === 27) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, []);

  return (
    <div className="menuContainer">
      <Fade direction="right" in={isOpen} timeout={300}>
        <div className="menu">
          <div className="header">
            <FiX className="exit" onClick={() => setOpen(!isOpen)} />
            <a className="imgWrapper" href="https://d-sektionen.se">
              <img src={logo} alt="D-sek logo" useMap="circle" />
              <map name="circle">
                <area shape="circle" alt="D-sek" coors="0,100%,100%,100%" />
              </map>
            </a>
          </div>
          <ul>
            {entries.map((entry) => (
              <li key={entry.title}>
                <p
                  onClick={() => {
                    setOpen(false);
                    navigate(entry.link);
                  }}
                  className="menuItem"
                >
                  {entry.title}
                </p>
              </li>
            ))}
          </ul>
          <div className="footer">
            <p>Sidan är utvecklad av Webbgruppen</p>
            <div>
              <a href="https://github.com/d-sektionen/medlem">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <FiMenu
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && <div onClick={() => setOpen(false)} className="darkOverlay" />}
    </div>
  );
};

export default Sidebar;
