// ? ===========================================================
// ! code given in video Bad Bank Challenge:
// function CreateAccount() {
//   const ctx = React.useContext(UserContext);
//   function handle(data) {
//     ctx.users.push({
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       balance: 100,
//     });
//     return true;
//   }
//   return (
//     <BankForm
//       bgcolor="primary"
//       label="Create Account"
//       handle={handle}
//       hideAmount={true}
//       successButton="Add another account"
//     />
//   );
// }

// ? ===========================================================

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Context.js";
import Card from "./Card.js";

const CreateAccount = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users, createUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleCreate() {
    const newUser = {
      name,
      email,
      password,
      balance: 0,
    };
    createUser(newUser);
    navigate("/Balance");
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <h1>Welcome</h1>
            <h6>Please Create New Account</h6>
            <br />
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
};

export default CreateAccount;
