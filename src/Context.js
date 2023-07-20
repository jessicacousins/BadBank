import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const createUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setLoggedInUser(user);
  };

  const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setLoggedInUser(user);
    }
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, createUser, loggedInUser, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

//! code that works:
// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users"));
//     if (storedUsers) {
//       setUsers(storedUsers);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const createUser = (user) => {
//     setUsers((prevUsers) => [...prevUsers, user]);
//   };

//   const login = (email, password) => {
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );
//     if (user) {
//       setLoggedInUser(user);
//     }
//   };

//   const logout = () => {
//     setLoggedInUser(null);
//   };

//   return (
//     <UserContext.Provider
//       value={{ users, createUser, loggedInUser, login, logout }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };
