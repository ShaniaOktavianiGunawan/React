import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import DaftarMenu from "./components/DaftarMenu";
import Pesanan from "./components/Pesanan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import db from "./components/connection";
import 'antd/dist/reset.css';

// var axios = require("axios");
// var data = JSON.stringify({
//   id_pemesanan: "1",
//   tanggal_pemesanan: "2022-12-10",
//   total_belanja: "15000",
// });

// var config = {
//   method: "post",
//   url: "localhost:8080/api/pemesanan",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function App() {
  <div>
    <Home />
  </div>;
}

export default App;
