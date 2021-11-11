//import { Link } from "react-router-dom";

import "./button.css";

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
    ( <div class="button">
      <a class="button-text" href={href}> Logga in med LiU-ID </a>
      </div>) 
      ) : (<div class="button" onClick={() => onClick()}> 
      <p class="button-text">{title}</p>
      </div>)
}
export default Button;
