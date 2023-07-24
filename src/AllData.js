import AllDataCard from "./AllDataCard.js";
import Card from "./Card.js";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context.js";
import foxLogo from "./foxlogo.png";
import { Link } from "react-router-dom";
import Tooltip from "./Layouts/Tooltip";

const AllData = () => {
  const { users } = useContext(UserContext);
  const [balanceChange, setBalanceChange] = useState(0);
  const [updatedBalance, setUpdatedBalance] = useState(0);

  if (!users.length) {
    const noData = {
      color: "rgb(72, 31, 42)",
      backgroundColor: "rgb(245, 239, 227)",
    };
    return (
      <Card customStyle={noData} header="Deposit">
        <h2 style={{ color: "rgb(1, 1, 77)" }}>No User Data Available</h2>
        <h4>Please Login</h4>
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
              src={foxLogo}
              alt="home icon"
              style={{
                width: "20em",
                height: "11em",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Tooltip>
      </Card>
    );
  }

  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "auto",
    borderBottom: "3px solid #000",
  };

  return (
    <AllDataCard
      customStyle={customStyle}
      className="custom-large-card"
      header="All Data"
      body={
        <>
          <h1 className="allDataDisplay">
            <span className="foxbank-title">FoxBank</span> User Data
          </h1>
          <div className="user-info-container">
            <div className="user-info-row" style={gridStyles}>
              <p className="category category-name">Name</p>

              <p className="category category-email">Email</p>

              <p className="category category-password">Password</p>
            </div>
            {users.map((currentUser, index) => (
              <div
                key={index}
                className="user-info-row p-user-info"
                style={gridStyles}
              >
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.password}</p>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

export default AllData;
