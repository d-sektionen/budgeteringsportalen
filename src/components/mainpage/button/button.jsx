//import { Link } from "react-router-dom";

import "./button.css";

function Button({ link, onClick, href, children }) {
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
  return <>
  <div class="button">
      <p class="button-text">Logga in med LiU-ID</p>
  </div>
  </>
}
export default Button;
