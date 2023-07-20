import React from "react";
import Card from "./Card.js";
import bankImg from "./bank.png";

const Home = () => {
  return (
    <Card
      bgcolor="secondary"
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <img
          src={bankImg}
          className="img-fluid bankImg"
          alt="Responsive image"
        />
      }
    />
  );
};

export default Home;
