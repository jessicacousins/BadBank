import Card from "./Card.js";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context.js";

const AllData = () => {
  const { users } = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);
  const [balanceChange, setBalanceChange] = useState(0);
  const [updatedBalance, setUpdatedBalance] = useState(0);
  const currentUser = users[0];

  useEffect(() => {
    if (currentUser) {
      const newBalance = currentUser.balance + balanceChange;
      setUpdatedBalance(newBalance);
    }
  }, [users, currentUser, balanceChange]);

  if (!currentUser || currentUser.length === 0) {
    return (
      <Card
        bgcolor="secondary"
        header="All Data"
        body={<>No user data available</>}
      />
    );
  }

  return (
    <div>
      <h1 className="allDataDisplay">All Data</h1>
      {users.map((currentUser, index) => (
        <Card
          key={index}
          bgcolor="primary"
          header={`User ${index + 1}`}
          body={
            <>
              <p>Name: {currentUser.name}</p>
              <p>Email: {currentUser.email}</p>
              <p>Password: {currentUser.password}</p>
              <p>Balance: {currentUser.balance}</p>
            </>
          }
        />
      ))}
    </div>
  );
};

export default AllData;
