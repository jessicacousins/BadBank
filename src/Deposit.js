import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./Context.js";
import Card from "./Card.js";

const Deposit = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const { users } = useContext(UserContext);
  const currentUser = users[0];
  //new
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

  //new
  useEffect(() => {
    if (currentUser) {
      const newBalance = currentUser.balance + balanceChange;
      setUpdatedBalance(newBalance);
    }
  }, [users, currentUser, balanceChange]);

  if (!currentUser) {
    return (
      <Card
        bgcolor="secondary"
        header="Deposit"
        body={<>No user data available</>}
      />
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

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            Account Holder: {currentUser.name}
            <br />
            Total Account Balance: ${currentUser.balance}
            <br />
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Deposit again
            </button>
          </>
        )
      }
    />
  );
};

export default Deposit;
