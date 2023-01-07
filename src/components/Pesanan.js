import React, { useState, useEffect } from "react";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

const Pesanan = () => {
  const [order, setOrder] = useState([]);
  const idUser = localStorage.getItem("id_user");
  const [total, settotal] = useState(0);

  const pesanan = async () => {
    try {
      await axios.get(`http://localhost:8080/api/pemesanan`).then((res) => {
        setOrder(res.data.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(order);

  useEffect(() => {
    pesanan();
  }, [pesanan]);

  const price = [];
  console.log(price);
  var count = 0;

  for (var i = 0; i < price.length; i++) {
    if (price[i] === 1) {
      count++;
    }
  }

  console.log(count);

  return (
    <div>
      <Header />
      <h4 style={{ marginTop: "2rem", textAlign: "center" }}>PESANAN ANDA</h4>
      <Dropdown style={{ marginLeft: "2rem" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          10
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">15</Dropdown.Item>
          <Dropdown.Item href="#/action-2">25</Dropdown.Item>
          <Dropdown.Item href="#/action-3">50</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* {order &&
        order
          .filter((order) => order.id_user === idUser)
          .map((order, index) => {
            return ( */}
      <div className="table-responsive" style={{ marginTop: "3rem" }}>
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className="th-content">
                  <span className="th-text">No </span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Nama Pesanan</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Harga</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Jumlah</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">SubHarga</span>
                </div>
              </th>
              <th>
                <div className="th-content">Opsi</div>
              </th>
            </tr>
          </thead>

          {console.log(order)}
          <tbody>
            {order &&
              order
                .filter(
                  (order) => order.id_user == idUser && order.produks.length > 0
                )
                .map((order, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{order.produks[0]?.menu}</td>
                        <td>{order.produks[0]?.harga}</td>
                        {price.push(order.produks[0]?.harga)}
                        <td>1</td>
                        <td>{order.produks[0]?.harga}</td>
                        <td>
                          <button className="btn btn-sm btn-danger">
                            <em className="fas fa-trash"></em>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            <tr>
              <td colspan="4">Total Belanja</td>
              <td>{total}</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>

        <div style={{ marginTop: "2rem" }}>
          <Button
            variant="primary"
            style={{ marginLeft: "2rem", marginRight: " 2rem" }}
          >
            Lihat Menu
          </Button>
          <Button variant="success">Konfirmasi Pesanan </Button>
        </div>
      </div>
      {/* );
          })} */}
    </div>
  );

  // function Count{
  //   const
  // }
};

export default Pesanan;
