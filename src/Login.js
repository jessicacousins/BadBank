import { UserContext } from "./Context.js";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 0 });

    setName("");
    setEmail("");
    setPassword("");
    setShow(false);
  };

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={
        show ? (
          <div>
            <h1>Welcome</h1>
            <h4>Please Sign In</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <>
            <h5>Success</h5>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="btn btn-light"
            >
              Home
            </button>
          </>
        )
      }
    />
  );
};

export default Login;
