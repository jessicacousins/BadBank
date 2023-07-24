import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import bankImg from "./bluegreenbank.png";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const customStyle = {
    color: "rgb(72, 31, 42)",
    backgroundColor: "rgb(245, 239, 227)",
    // marginTop: "64px",
  };

  const timeOptions = { hour: "numeric", minute: "numeric" };
  const formattedTime = currentTime.toLocaleTimeString([], timeOptions);

  return (
    <Card
      customStyle={customStyle}
      className="homecard"
      header="Welcome to FoxBank"
    >
      <h3 style={{ marginBottom: "20px", color: "rgb(1, 1, 77)" }}>
        Your Gateway to Smart Banking Solutions
      </h3>
      <img src={bankImg} className="img-fluid bankImg" alt="Responsive image" />
      <h5 style={{ marginTop: "20px", fontWeight: "bold" }}>
        <em>We Make Your</em>
      </h5>
      <h5 style={{ fontWeight: "bold" }}>
        <em>Financial Goals a Reality</em>
      </h5>
      <footer style={{ marginTop: "1em", color: "rgb(1, 1, 77)" }}>
        <span className="foxbank-title">FoxBank</span> | Est. 1894
        <p style={{ marginTop: "10px" }}>Current Time: {formattedTime}</p>
      </footer>
    </Card>
  );
};

export default Home;
