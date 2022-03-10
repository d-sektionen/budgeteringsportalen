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
    <a className="button" href={href}>
      <span className="button-text"> Logga in med LiU-ID </span>
    </a>
  ) : (
    <div className="button" onClick={() => onClick()}>
      <span className="button-text">{title}</span>
    </div>
  )
}
export default Button;
