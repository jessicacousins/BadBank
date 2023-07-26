import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./Context.js";
import Card from "./Card.js";
import bing from "./bing.wav";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./Layouts/Tooltip";
import foxLogo from "./foxlogo.png";
import checkmark from "./checkmark.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Withdraw = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const { users } = useContext(UserContext);
  const currentUser = users[users.length - 1];
  const numberInputRef = useRef(null);
  const [balanceChange, setBalanceChange] = useState(0);
  const [updatedBalance, setUpdatedBalance] = useState(0);
  const [formData, setFormData] = useState({
    amount: "",
  });

  function validate(amount) {
    if (!isNaN(amount)) {
      const parsedAmount = parseFloat(amount);
      return parsedAmount > 0; // Only allow positive numbers
    }
    return false;
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

  function handleWithdraw() {
    if (!validate(amount)) return;

    const withdrawAmount = parseFloat(amount);

    if (withdrawAmount > currentUser.balance) {
      setStatus("Error: Insufficient balance");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    currentUser.balance -= withdrawAmount;
    setUpdatedBalance(currentUser.balance);

    clearForm();
    setShow(false);

    new Audio(bing).play();
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

  const greenBtn = {
    backgroundColor: "rgb(194, 237, 214)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
    margin: "10px,",
    marginRight: "50px",
  };

  const redBtn = {
    backgroundColor: " rgb(239, 187, 178)",
    color: "rgb(0, 0, 0)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    margin: "10px,",
    fontSize: "1.1em",
  };

  const checkmarkStyle = {
    width: "6em",
    borderRadius: "20px",
  };

  function handleCreate(values, formikProps) {
    if (!values.amount || values.amount.trim() === "") {
      alert("Value is required.");
      return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(values.amount)) {
      alert("Invalid amount. Please enter a valid positive number.");
      return;
    }
    setAmount(values.amount);
    handleWithdraw();
  }

  return (
    <Card
      customStyle={customStyle}
      header="Withdraw"
      status={status}
      body={
        show ? (
          <Formik initialValues={formData} onSubmit={handleCreate}>
            {(formikProps) => (
              <Form onSubmit={formikProps.handleSubmit}>
                <h5 className="account-holder">Account Holder: </h5>
                <p className="account-holder-user">{currentUser.name}</p>
                <h5 className="account-holder-balance">Account Balance: </h5>
                <p className="account-holder-balance-number">
                  ${currentUser.balance.toFixed(2)}
                </p>
                <hr />
                <Field
                  style={{ width: "365px", height: "45px", fontSize: "1.4em" }}
                  type="input"
                  className={`form-control ${
                    formikProps.touched.amount && formikProps.errors.amount
                      ? "error-border"
                      : ""
                  }`}
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  value={formikProps.values.amount}
                  onChange={formikProps.handleChange}
                  ref={numberInputRef}
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  style={{ color: "maroon", fontWeight: "bold" }}
                />
                <br />
                <button
                  title="DoubleClick to Withdraw"
                  type="submit"
                  className="btn"
                  disabled={!formikProps.isValid || !formikProps.dirty}
                  style={redBtn}
                >
                  Withdraw
                </button>
              </Form>
            )}
          </Formik>
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
            <h5>Withdrawal Completed</h5>
            <p style={{ marginTop: "15px" }}>Account has been updated.</p>
            <br />
            <Link
              to="/Deposit"
              style={greenBtn}
              className="btn"
              onClick={clearForm}
            >
              Deposit
            </Link>

            <button
              style={againBtn}
              type="submit"
              className="btn"
              onClick={clearForm}
            >
              Withdraw again
            </button>
          </>
        )
      }
    />
  );
};

export default Withdraw;
