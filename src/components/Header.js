import React from "react";
import bg from "../images/Background/bg7.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import DaftarMenu from "./DaftarMenu";
import Pesanan from "./Pesanan";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        {/* <Image src={bg} style={{ display: "relative", width: "100vw", height: "50vh ", objectFit: "cover" }}></Image> */}
        <div
          style={{
            display: "flex",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${bg}) `,
            height: "70vh",
            color: "white",
            backgroundPosition: "center",
            backgroundSize: "cover",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "28pt", fontWeight: "bold" }}>RESTBABU</h1>
            <br />
            <p style={{ fontSize: "14pt" }}>Silahkan Pesan Menu Sesuai Keinginan Anda Enjoy Your Meal</p>
          </div>
        </div>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container className="d-flex">
          <Navbar.Brand href="#home">RESTBABU</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <a href="DaftarMenu.js">DaftarMenu</a> */}
            <Nav.Link href="/DaftarMenu">Daftar Menu</Nav.Link>
            {/* <Link to="/Pesanan"> */}
            <Nav.Link href="/Pesanan">Pesanan Anda</Nav.Link>
            {/* </Link> */}
            <Nav.Link href="/Login">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
