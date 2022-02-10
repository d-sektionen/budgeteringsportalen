//import { Link } from "react-router-dom";

import "./button.scss";

function Button({ link, onClick, href, children, title }) {
  /*
  return link ? (
    <Link to={link} onClick={onClick} className="button">
      {children}
    </Link>
  ) : (
    href && (
      <a href={href} className="button">
        Login
      </a>
    )
  );
  */
  return href ? (
    ( <div className="button">
      <a className="button-text" href={href}> Logga in med LiU-ID </a>
      </div>) 
      ) : (<div className="button" onClick={() => onClick()}> 
      <p className="button-text">{title}</p>
      </div>)
}
export default Button;
