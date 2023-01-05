import React from "react";
import bg from "../images/Background/bg7.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mie from "../images/mieayam.jpg";
import bakso from "../images/bakso.jpeg";
import mb from "../images/mieayambakso.jpg";
import ab from "../images/ayambakar.jpg";
import lb from "../images/lele.jpg";
import ng from "../images/nasgor.jpg";
import np from "../images/nasi.jpeg";
import ej from "../images/esjeruk.jpg";
import jm from "../images/jusmangga.jpg";
import ja from "../images/juspukat.jpg";
import to from "../images/tehobeng.jpg";
import sf from "../images/sanford.jpg";
import babu from "../images/babu.jpg";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const DaftarMenu = () => {
  const [menu, setMenu] = useState([]);
  const [pms, setPms] = useState();
  const [resBeli, setResBeli] = useState([]);

  const idUser = localStorage.getItem("id_user");
  var date = new Date();
  var today = date.toISOString().slice(0, 10);

  const loadMenu = async () => {
    try {
      await axios.get(`http://localhost:8080/api/produk`).then((res) => {
        setMenu(res.data.data);
        console.log(res.data.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const pemesanan = async (values) => {
    var result = [];
    var data = JSON.stringify(values);
    var config = {
      method: "post",
      url: "http://localhost:8080/api/pemesanan",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        result = response.data.data[0];
        console.log(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
    setPms(result);
    console.log(result);
    return result;
  };

  const beli = async (id) => {
    try {
      await axios.get(`http://localhost:8080/api/produk/${id}`).then((res) => {
        setResBeli(res.data.data[0]);
      });

      if (resBeli !== 0) {
        var obj = {
          id_user: `${idUser}`,
          tanggal_pemesanan: `${today}`,
        };
        pemesanan(obj);
        var objProduct = {
          id_pemesanan: `${pms.id_pemesanan}`, //pms
          id_menu: `${resBeli.idMenu}`, //respon index[0].id_menu
          quantity: 1, //
        };
        pemesananProduk(objProduct);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pemesananProduk = (order) => {
    var data = JSON.stringify(order);
    console.log(data);

    var config = {
      method: "post",
      url: "http://localhost:8080/api/pemesanan/order",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var respon = response.data;
        if (respon.result === true) {
          window.location.href = "/Pesanan";
        } else {
          alert("gagal");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadMenu();
  }, []);

  return (
    // judul
    <div>
      <div>
        {/* <Image src={bg} style={{ display: "relative", width: "100vw", height: "50vh ", objectFit: "cover" }}></Image> */}
        <Header />
      </div>
      <div style={{ marginTop: " 3rem", justifyContent: "center", marginRight: "1rem", gridTemplateColumns: "1fr 1fr 1fr 1fr", display: "grid", gap: "2rem" }}>
        {/* <Image src={babu} /> */}
        {menu &&
          menu.map((menu, index) => {
            return (
              <Card key={index} style={{ width: "15rem", marginLeft: "2rem" }}>
                <Card.Img variant="top" src={require(`../images/${menu.gambar}`)} />
                <Card.Body style={{ textAlign: "Center" }}>
                  <Card.Title>{menu.menu}</Card.Title>
                  <Card.Text>{menu.harga}</Card.Text>
                  <Button variant="primary" style={{ width: "10rem" }} onClick={(e) => beli(menu.id_menu)}>
                    BELI
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        {/* <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={bakso} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Bakso</Card.Title>
            <Card.Text>Rp.12.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={mb} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Mie Ayam bakso</Card.Title>
            <Card.Text>Rp.20.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ab} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title> Ayam bakar</Card.Title>
            <Card.Text>Rp.20.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginTop: " 2rem", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lb} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Lele Bakar</Card.Title>
            <Card.Text>Rp.13.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ng} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Nasi Goreng</Card.Title>
            <Card.Text>Rp.12.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={np} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Nasi Putih</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ej} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Es Jeruk</Card.Title>
            <Card.Text>Rp.7.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginTop: " 2rem", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={jm} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Jus mangga</Card.Title>
            <Card.Text>Rp.10.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ja} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Jus Alpukat</Card.Title>
            <Card.Text>Rp.10.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={to} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Es teh</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={sf} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Air Mineral</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};

export default DaftarMenu;
