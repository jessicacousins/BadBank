import React from "react";

const Card = (props) => {
  const {
    bgcolor,
    txtcolor,
    customStyle,
    header,
    title,
    text,
    body,
    status,
    children,
    buttonClass,
  } = props;

  function classes() {
    let classes = "card mb-3";
    if (bgcolor) classes += ` bg-${bgcolor}`;
    if (txtcolor) classes += ` text-${txtcolor}`;
    return classes;
  }

  const customCardStyle = {
    ...customStyle,
    minWidth: "18em",
    maxWidth: "25em",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="allCards justify-content-center align-items-center">
      <div className={classes()} style={customCardStyle}>
        <div className="card-header">{header}</div>
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {text && <p className="card-text">{text}</p>}
          {body}
          {status && <div id="createStatus">{status}</div>}
          {children}
          {buttonClass && (
            <button className={`btn ${buttonClass}`}>{buttonClass}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
