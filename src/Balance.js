import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context.js";
import Card from "./Card.js";

const Balance = () => {
  const { users } = useContext(UserContext);
  const currentUser = users[0];
  const [balanceChange, setBalanceChange] = useState(0);
  const [updatedBalance, setUpdatedBalance] = useState(0);

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
        header="Balance"
        body={<>No user data available</>}
      />
    );
  }

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      body={
        <>
          Account Holder: {currentUser.name}
          <br />
          Account Total Amount ${updatedBalance}
          <br />
        </>
      }
    />
  );
};

export default Balance;
