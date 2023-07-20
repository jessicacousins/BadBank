import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./Context.js";
import Card from "./Card.js";

const Withdraw = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const { users } = useContext(UserContext);
  const currentUser = users[0];
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
    return (
      <Card
        bgcolor="secondary"
        header="Withdraw"
        body={<>No user data available</>}
      />
    );
  }

  function handleWithdraw() {
    if (!validate(amount)) return;
    if (amount > currentUser.balance) {
      setStatus("Error: Insufficient balance");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    currentUser.balance -= parseFloat(amount);
    setShow(false);
  }

  function clearForm() {
    setAmount("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Account Holder: {currentUser.name}
            <br />
            Account Balance: ${currentUser.balance}
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
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Withdraw again
            </button>
          </>
        )
      }
    />
  );
};

export default Withdraw;
