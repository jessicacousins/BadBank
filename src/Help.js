import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import questionImg from "./questions.png";
import bankImg from "./bluegreenbank.png";
import Tooltip from "./Layouts/Tooltip.js";
import userImg from "./user.png";

export default function Help() {
  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
  };

  const imgStyle = {
    borderRadius: "90px",
    width: "40%",
  };

  const iconStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "40px",
    marginRight: "40px",
    alignItems: "center",
    marginBottom: "5px",
  };

  return (
    <div className="help-layout">
      <Card
        customStyle={customStyle}
        header="Help"
        body={
          <>
            <h1 style={{ fontWeight: "bold", color: "rgb(1, 1, 77)" }}>
              Customer Service
            </h1>
            <img style={imgStyle} src={questionImg} alt="" />
            <br />
            <h3 style={{ marginTop: "15px" }}>Questions?</h3>
            <h6
              style={{
                fontWeight: "bold",
                color: "rgb(1,1,77",
                marginBottom: "25px",
                fontStyle: "italic",
              }}
            >
              Get assistance from a live representative anytime with our 24/7
              call service.
            </h6>
            <p style={{ marginBottom: "4px" }}>
              Customer Support: <a href="tel:555-bankhelp">555-bankhelp</a>
            </p>
            <p style={{ marginTop: "3px", marginBottom: "45px" }}>
              Report Fraud: <a href="tel:555-bankhelp">555-bankhelp</a>
            </p>
            <hr />
            <h2 className="foxbank-help">FoxBank</h2>
            <Link style={{ color: "teal" }} to="/CreateAccount">
              Sign Up Today
            </Link>
            <br />
            <div className="tooltip-area" style={iconStyles}>
              <Tooltip text="Create Account">
                <Link
                  to="/CreateAccount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={userImg}
                    alt="user icon"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "15px",
                    }}
                  />
                </Link>
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
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={bankImg}
                    alt="home icon"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "12px",
                    }}
                  />
                </Link>
              </Tooltip>
            </div>
            <p style={{ marginBottom: "2px", marginTop: "20px" }}>
              Innovation that Endures
            </p>
            <p style={{ marginBottom: "2px", fontSize: ".8em" }}>
              <em>North Shore's Iconic Banking Institution since 1894</em>
            </p>
          </>
        }
      />
    </div>
  );
}
