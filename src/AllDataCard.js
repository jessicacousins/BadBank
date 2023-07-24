import React from "react";

const AllDataCard = ({ className, header, body }) => {
  const allDataStyle = {
    width: "100vw",
    margin: "0 auto",
    marginTop: "20px",
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={allDataStyle} className={`card ${className}`}>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
    </div>
  );
};

export default AllDataCard;
