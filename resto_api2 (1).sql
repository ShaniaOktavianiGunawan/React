-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2023 at 09:52 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resto_api2`
--

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan`
--

CREATE TABLE `pemesanan` (
  `id_pemesanan` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `tanggal_pemesanan` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemesanan`
--

INSERT INTO `pemesanan` (`id_pemesanan`, `id_user`, `tanggal_pemesanan`) VALUES
(1, 2, '2023-01-05'),
(2, 2, '2023-01-05'),
(3, 2, '2023-01-05'),
(4, 2, '2023-01-05'),
(5, 2, '2023-01-05'),
(6, 2, '2023-01-05'),
(7, 2, '2023-01-05'),
(8, 2, '2023-01-05'),
(9, 2, '2023-01-05'),
(10, 2, '2023-01-05'),
(11, 2, '2023-01-05'),
(12, 2, '2023-01-05'),
(13, 2, '2023-01-05'),
(14, 2, '2023-01-05'),
(15, 2, '2023-01-05'),
(16, 2, '2023-01-05'),
(17, 2, '2023-01-05'),
(18, 2, '2023-01-05');

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan_produk`
--

CREATE TABLE `pemesanan_produk` (
  `id_pemesanan` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `quantity` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemesanan_produk`
--

INSERT INTO `pemesanan_produk` (`id_pemesanan`, `id_menu`, `quantity`) VALUES
(1, 2, 1),
(3, 2, 1),
(5, 2, 1),
(7, 2, 1),
(9, 2, 1),
(14, 2, 1),
(16, 2, 1),
(17, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_menu` int(11) NOT NULL,
  `gambar` varchar(20) DEFAULT NULL,
  `harga` bigint(20) DEFAULT NULL,
  `menu` varchar(20) DEFAULT NULL,
  `stok` int(11) DEFAULT NULL,
  `jenis_menu` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_menu`, `gambar`, `harga`, `menu`, `stok`, `jenis_menu`) VALUES
(2, 'bakso.jpeg', 12000, 'Bakso Urat', 20, 'Makanan'),
(3, 'ayambakar.jpg', 20000, 'Ayam Bakar', 20, 'makanan'),
(4, 'mieayambakso.jpg', 20000, 'Mie Ayam Bakso', 20, 'makanan'),
(5, 'nasgor.jpg', 12000, 'Nasi Goreng', 20, 'makanan'),
(6, 'lele.jpg', 13000, 'Lele Bakar', 20, 'makanan'),
(7, 'jusmangga.jpg', 10000, 'Jus mangga', 20, 'minuman'),
(8, 'juspukat.jpg', 10000, 'Jus Alpukat', 20, 'minuman'),
(9, 'tehobeng.jpg', 5000, 'Es Teh', 20, 'minuman'),
(10, 'sanford.jpg', 5000, 'Air Mineral', 20, 'minuman'),
(11, 'nasi.jpeg', 5000, 'Nasi Putih', 20, 'makanan');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `alamat` varchar(50) DEFAULT NULL,
  `birthdate` varchar(20) DEFAULT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `jenis_kelamin` varchar(10) DEFAULT NULL,
  `no_telp` varchar(30) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `alamat`, `birthdate`, `fullname`, `jenis_kelamin`, `no_telp`, `password`, `username`) VALUES
(2, 'Sindang Resmi', '28-01-2003', 'Raiyana Jan Winata', 'P', '085604508535', '2813rai', 'raiyanawinata'),
(3, 'Di rumah', '26-10-2000', 'Shania Oktaviani', 'P', '0815151515', 'shan123', 'shania'),
(16, 'tes', '08-03-2002', 'tes4', 'male', '083819532524', 'tes', 'tes4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`id_pemesanan`),
  ADD KEY `FKkb5h73lvo0xtq7876wf92wask` (`id_user`);

--
-- Indexes for table `pemesanan_produk`
--
ALTER TABLE `pemesanan_produk`
  ADD PRIMARY KEY (`id_pemesanan`,`id_menu`),
  ADD KEY `FKhr7unugcl9g9u0rejpt4n1dqf` (`id_menu`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `id_pemesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD CONSTRAINT `FKkb5h73lvo0xtq7876wf92wask` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `pemesanan_produk`
--
ALTER TABLE `pemesanan_produk`
  ADD CONSTRAINT `FKhr7unugcl9g9u0rejpt4n1dqf` FOREIGN KEY (`id_menu`) REFERENCES `produk` (`id_menu`),
  ADD CONSTRAINT `FKhsa3cscwdpw06mn64g2myqw6i` FOREIGN KEY (`id_pemesanan`) REFERENCES `pemesanan` (`id_pemesanan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
