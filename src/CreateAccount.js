import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context.js";
import Card from "./Card.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import bing from "./bing.wav";
import { useRef } from "react";
import bankImg from "./bluegreenbank.png";
import questionsImg from "./questions.png";
import Tooltip from "./Layouts/Tooltip.js";
import checkmark from "./checkmark.png";

const CreateAccount = () => {
  const { createUser } = useContext(UserContext);
  const navigate = useNavigate();
  const numberInputRef = useRef(null);

  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
  };

  const formFieldStyle = {
    marginTop: "7px",
    marginRight: "280px",
    fontSize: "1.2em",
  };

  const createAccountBtn = {
    background: " rgb(214, 235, 243)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  const inputFieldStyle = {
    width: "365px",
    height: "45px",
    fontSize: "1.2em",
    textAlign: "center",
  };

  const againBtn = {
    background: " rgb(214, 235, 243)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  const redBtn = {
    backgroundColor: " rgb(239, 187, 178)",
    color: "rgb(0, 0, 0)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    marginTop: "1em",
    marginLeft: "5em",
    fontSize: "1.1em",
  };

  const greenBtn = {
    backgroundColor: "rgb(166, 237, 208)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "rgb(1, 1, 77)",
    fontWeight: "bold",
    marginTop: "1em",
    fontSize: "1.1em",
  };

  const checkmarkStyle = {
    width: "6em",
    borderRadius: "20px",
  };

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleCreate(values, formikProps) {
    if (!values.name || values.name.trim() === "") {
      alert("Name is required.");
      return;
    }

    if (!values.email || values.email.trim() === "") {
      alert("Email is required.");
      return;
    }

    if (!values.password || values.password.trim() === "") {
      alert("Password is required.");
      return;
    }

    if (values.password.length > 15) {
      alert("Password cannot exceed 15 characters.");
      return;
    }

    if (values.password.length < 8) {
      alert("Password must be between 8 and 15 characters.");
      return;
    }

    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      balance: 0,
    };

    createUser(newUser);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setAccountCreated(true);
  }

  const isValid =
    formData.name.trim() !== "" ||
    formData.email.trim() !== "" ||
    formData.password.trim() !== "";

  const handleButtonClick = (formikProps) => {
    const isFormFilled =
      formikProps.values.name.trim() !== "" &&
      formikProps.values.email.trim() !== "" &&
      formikProps.values.password.trim() !== "";

    if (formikProps.isValid && isFormFilled) {
      const audio = new Audio(bing);
      audio.play();
    }

    if (numberInputRef.current) {
      numberInputRef.current.value = "";
    }
  };

  return (
    <Card
      customStyle={customStyle}
      className="create-account"
      header="Create Account"
      body={
        accountCreated ? (
          <div>
            <h5 className="success-title">Success</h5>
            <img
              style={checkmarkStyle}
              className="checkmark"
              src={checkmark}
              alt="success checkmark"
            />
            <hr />
            <button
              style={againBtn}
              className="btn"
              onClick={() => setAccountCreated(false)}
            >
              Create Another Account
            </button>

            <br />
            <Link to="/Deposit" className="btn" style={greenBtn}>
              Deposit
            </Link>
            <Link to="/Withdraw" className="btn" style={redBtn}>
              Withdraw
            </Link>
          </div>
        ) : (
          <Formik initialValues={formData} onSubmit={handleCreate}>
            {(formikProps) => (
              <Form>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "3em",
                    color: "rgb(1, 1, 77)",
                  }}
                >
                  Welcome
                </h1>
                <h6 style={{ fontWeight: "bold" }}>
                  Please Create New Account
                </h6>
                <label style={formFieldStyle} htmlFor="name">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  style={inputFieldStyle}
                  type="input"
                  className={`form-control ${
                    formikProps.touched.name && formikProps.errors.name
                      ? "error-border"
                      : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  required
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "maroon", fontWeight: "bold" }}
                />

                <br />
                <label style={formFieldStyle} htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  style={inputFieldStyle}
                  type="input"
                  className={`form-control ${
                    formikProps.touched.email && formikProps.errors.email
                      ? "error-border"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "maroon", fontWeight: "bold" }}
                />

                <br />
                <label style={formFieldStyle} htmlFor="password">
                  Password<span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  style={inputFieldStyle}
                  type="password"
                  className={`form-control ${
                    formikProps.touched.password && formikProps.errors.password
                      ? "error-border"
                      : ""
                  }`}
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "maroon", fontWeight: "bold" }}
                />

                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
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
                        marginRight: "65px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={bankImg}
                        alt="home icon"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </Tooltip>
                  <button
                    disabled={!formikProps.isValid || !formikProps.dirty}
                    title="submit"
                    type="submit"
                    className="btn"
                    onClick={() => handleButtonClick(formikProps)}
                    style={createAccountBtn}
                  >
                    Start Banking
                  </button>

                  <Tooltip text="Questions/Help">
                    <Link
                      to="/Help"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        padding: 0,
                        marginLeft: "65px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={questionsImg}
                        alt="question icon"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </Tooltip>
                </div>
              </Form>
            )}
          </Formik>
        )
      }
    />
  );
};

export default CreateAccount;
