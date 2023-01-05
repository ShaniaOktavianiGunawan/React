import React from "react";
import bg from "../images/Background/bg7.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import babu from "../images/babu.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1 from "../images/Background/bg2.jpg";
import Header from "./Header";

const Home = () => {
  return (
    // judul
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Image src={babu} />
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
