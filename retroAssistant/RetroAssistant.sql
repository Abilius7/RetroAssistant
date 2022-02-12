-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 07, 2022 at 10:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `RetroAssistant`
--

-- --------------------------------------------------------

--
-- Table structure for table `carritos`
--

CREATE TABLE `carritos` (
  `idUsuario` int(11) NOT NULL,
  `producto` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carritos`
--

INSERT INTO `carritos` (`idUsuario`, `producto`) VALUES
(11, 'Basico'),
(11, 'Basico'),
(11, 'Basico'),
(1, 'Basico con instalacion'),
(1, 'Basico con instalacion'),
(1, 'Basico'),
(1, 'Avanzado'),
(1, 'Avanzado con instalacion'),
(1, 'Basico con instalacion'),
(1, 'Avanzado'),
(16, 'Avanzado'),
(16, 'Avanzado'),
(9, 'Avanzado'),
(9, 'Avanzado'),
(9, 'Avanzado'),
(9, 'Avanzado');

-- --------------------------------------------------------

--
-- Table structure for table `desglose`
--

CREATE TABLE `desglose` (
  `idPedido` int(11) NOT NULL,
  `producto` varchar(30) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(30) NOT NULL,
  `descripcion` longtext NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`nombre`, `descripcion`, `precio`, `imagen`) VALUES
('Almacenamiento en la nube', 'Este servicio permitira almacenar los datos recopilados,durante un año, por nuestro producto en un servidor. Tambien nos permitira obtener graficas de esos datos y sus relaciones', 70, 'https://www.altonivel.com.mx/assets/images/Actualidad/Mexico/Elecciones/nube.jpg'),
('Avanzado', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS', 150, 'https://www.powerplanetonline.com/cdnassets/products/s/sensor_magnetico_01_l.jpg'),
('Avanzado con instalacion', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS, en este paquete tambien incluimos la instalacion del producto en su vehiculo por un profesional, tambien se incluye mantenieminto y reparaciones los 5 primeros annos', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14Z6vPrrA7RATv-LyolP7oyozg9U_0g_lSmPawxYMfLYTo9k80gRZfKi3pndbEiwxG-s'),
('Basico', 'Es la version mas basica de nuestro producto con el que podremos contorlar el nivel de gasolina su consumo y la velocidad', 70, 'https://blog.orange.es/wp-content/uploads/sites/4/2019/07/photo-1553063085-dbbf64d936ea.jpeg'),
('Basico con instalacion', 'Es la version mas basica de nuestro producto con el que podremos contorlar el nivel de gasolina su consumo y la velocidad, en este paquete tambien incluimos la instalacion del producto en su vehiculo por un profesional', 120, 'https://www.todomecanica.com/images/blog/2016/febrero/mecanico-automotriz.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `rodadas`
--

CREATE TABLE `rodadas` (
  `IdUsuario` int(11) NOT NULL,
  `FechaHora` datetime NOT NULL,
  `Consumo` float NOT NULL,
  `Velocidad` float NOT NULL,
  `Temperatura` float NOT NULL,
  `Duracion` int(11) NOT NULL COMMENT 'En segundos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `Usuario` varchar(30) NOT NULL,
  `Contrasenna` varchar(100) NOT NULL,
  `TipoProducto` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `Usuario`, `Contrasenna`, `TipoProducto`) VALUES
(1, 'Alvaro', '238aac1c40783771bc3f2a601b983f8a', NULL),
(9, 'Abel', '0cc175b9c0f1b6a831c399e269772661', NULL),
(11, 'Jose', 'f5e5038d75ee209f3cfcba015d731af0', NULL),
(17, 'Dre', 'f79c62855614bd4d923016896a96ea81', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `desglose`
--
ALTER TABLE `desglose`
  ADD PRIMARY KEY (`idPedido`,`producto`),
  ADD KEY `producto` (`producto`);

--
-- Indexes for table `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPedido`,`idUsuario`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`nombre`);

--
-- Indexes for table `rodadas`
--
ALTER TABLE `rodadas`
  ADD PRIMARY KEY (`IdUsuario`,`FechaHora`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `desglose`
--
ALTER TABLE `desglose`
  ADD CONSTRAINT `desglose_ibfk_1` FOREIGN KEY (`producto`) REFERENCES `productos` (`nombre`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `desglose_ibfk_2` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
