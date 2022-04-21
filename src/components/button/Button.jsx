import "./button.scss";

const Button=({onClick, href, title }) => {
  return href ? (
    <a className="button" href={href}>
      <span className="button-text"> Logga in med LiU-ID </span>
    </a>
  ) : (
    <div className="button" onClick={() => onClick()}>
      <span className="button-text">{title}</span>
    </div>
  )
};

export default Button;
