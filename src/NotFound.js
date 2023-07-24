import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import foxLogo from "./foxlogo.png";
import bankImg from "./bluegreenbank.png";
import Tooltip from "./Layouts/Tooltip";

export default function NotFound() {
  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
    fontWeight: "bold",
  };
  return (
    <Card
      customStyle={customStyle}
      className="notfound"
      header="Page Not Found"
    >
      <img
        style={{ width: "20em", marginBottom: "15px" }}
        src={foxLogo}
        alt="foxbank logo"
      />
      <p style={{ marginBottom: "25px" }}>
        Sorry! This address does not exist.
      </p>
      <Tooltip text="Help">
        <h5 style={{ marginBottom: "30px" }}>
          Find More Resources {""}
          <Link style={{ color: "teal", fontWeight: "bold" }} to="/Help">
            Here
          </Link>
        </h5>
      </Tooltip>

      <Tooltip text="Home">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={bankImg}
            alt="home icon"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "10px",
            }}
          />
        </Link>
      </Tooltip>
    </Card>
  );
}
