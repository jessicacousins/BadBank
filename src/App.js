import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.js";
import { UserProvider } from "./Context.js";
import Home from "./Home.js";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import Deposit from "./Deposit.js";
import Withdraw from "./Withdraw.js";
import Balance from "./Balance.js";
import AllData from "./AllData.js";
import NotFound from "./NotFound";
import Help from "./Help.js";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <HashRouter>
      <Navbar />
      <UserProvider setLoggedInUser={setLoggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CreateAccount"
            element={<CreateAccount setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/Login"
            element={<Login loggedInUser={loggedInUser} />}
          />
          <Route
            path="/Deposit"
            element={<Deposit setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/Withdraw" element={<Withdraw />} />
          <Route
            path="/Balance"
            element={<Balance setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/AllData" element={<AllData />} />
          <Route path="/Help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </HashRouter>
  );
};

export default App;
