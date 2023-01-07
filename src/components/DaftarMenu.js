import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DaftarMenu = () => {
  const [menu, setMenu] = useState([]);
  const [pms, setPms] = useState();
  const [resBeli, setResBeli] = useState([]);
  const navigate = useNavigate();

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pemesanan = async (values) => {
    try {
      await axios
        .post(`http://localhost:8080/api/pemesanan`, values)
        .then((res) => {
          var pms = res.data.data[0];
          pemesananProduk(pms);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const pemesananProduk = async (values) => {
    console.log(values.id_pemesanan);
    try {
      await axios
        .post(`http://localhost:8080/api/pemesanan/order`, {
          id_pemesanan: `${values.id_pemesanan}`,
          id_menu: `${resBeli?.idMenu}`,
          quantity: 1,
        })
        .then((res) => {
          if (res.data.result === true) {
            window.location.href = "/Pesanan";
          } else {
            alert("gagal");
          }
        });
    } catch (error) {
      console.error(error);
    }
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
      <div
        style={{
          marginTop: " 3rem",
          justifyContent: "center",
          marginRight: "1rem",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          display: "grid",
          gap: "2rem",
        }}
      >
        {/* <Image src={babu} /> */}
        {menu &&
          menu.map((menu, index) => {
            return (
              <Card key={index} style={{ width: "15rem", marginLeft: "2rem" }}>
                <Card.Img
                  variant="top"
                  src={require(`../images/${menu.gambar}`)}
                />
                <Card.Body style={{ textAlign: "Center" }}>
                  <Card.Title>{menu.menu}</Card.Title>
                  <Card.Text>{menu.harga}</Card.Text>
                  <Button
                    variant="primary"
                    style={{ width: "10rem" }}
                    onClick={() => beli(menu?.idMenu)}
                  >
                    BELI
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default DaftarMenu;
