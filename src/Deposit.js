import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./Context.js";
import Card from "./Card.js";
import bing from "./bing.wav";
import { useRef } from "react";
import { Link } from "react-router-dom";
import foxLogo from "./foxlogo.png";
import Tooltip from "./Layouts/Tooltip";
import checkmark from "./checkmark.png";

const Deposit = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const { users } = useContext(UserContext);
  const currentUser = users[users.length - 1];
  const numberInputRef = useRef(null);
  const [balanceChange, setBalanceChange] = useState(0);
  const [updatedBalance, setUpdatedBalance] = useState(0);

  function validate(amount) {
    if (isNaN(amount) || amount <= 0) {
      setStatus("Error: Invalid amount");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (currentUser) {
      const newBalance = currentUser.balance + balanceChange;
      setUpdatedBalance(newBalance);
    }
  }, [users, currentUser, balanceChange]);

  if (!currentUser) {
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

  function handleDeposit() {
    if (!validate(amount)) return;
    const depositAmount = parseFloat(amount);
    currentUser.balance += depositAmount;
    setShow(false);
  }

  function clearForm() {
    setAmount("");
    setShow(true);
  }

  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
  };

  const againBtn = {
    background: " rgb(214, 235, 243)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
  };

  const redBtn = {
    backgroundColor: " rgb(239, 187, 178)",
    color: "rgb(0, 0, 0)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    margin: "10px,",
    marginRight: "50px",
  };

  const greenBtn = {
    backgroundColor: "rgb(166, 237, 208)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
    margin: "10px,",
    fontSize: "1.1em",
  };

  const checkmarkStyle = {
    width: "6em",
    borderRadius: "20px",
  };

  const handleButtonClick = () => {
    const audio = new Audio(bing);
    audio.play();
    if (numberInputRef.current) {
      numberInputRef.current.value = "";
    }
  };

  const isValid = !isNaN(amount) && parseFloat(amount) > 0;

  return (
    <Card
      customStyle={customStyle}
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            <h5 className="account-holder">Account Holder: </h5>
            <p className="account-holder-user">{currentUser.name}</p>
            <h5 className="account-holder-balance">Account Balance: </h5>
            <p className="account-holder-balance-number">
              ${currentUser.balance}
            </p>
            <hr />
            <input
              style={{ width: "365px", height: "45px", fontSize: "1.4em" }}
              type="number"
              className="form-control enter-amount"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              ref={numberInputRef}
            />
            <br />
            <button
              type="submit"
              className="btn"
              onClick={() => {
                handleDeposit();
                handleButtonClick();
              }}
              disabled={!isValid}
              style={greenBtn}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5 className="success-title">Success</h5>
            <img
              style={checkmarkStyle}
              className="checkmark"
              src={checkmark}
              alt="success checkmark"
            />
            <hr />
            <h5>Deposit Completed</h5>
            <p style={{ marginTop: "15px" }}>Account has been updated.</p>
            <br />
            <Link
              to="/Withdraw"
              className="btn"
              style={redBtn}
              onClick={clearForm}
            >
              Withdraw
            </Link>
            <button
              style={againBtn}
              type="submit"
              className="btn"
              onClick={clearForm}
            >
              Deposit again
            </button>
          </>
        )
      }
    />
  );
};

export default Deposit;
