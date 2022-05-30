-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 03, 2022 at 12:19 PM
-- Server version: 10.7.3-MariaDB
-- PHP Version: 8.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE DATABASE RetroAssistant;

use RetroAssistant;


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
  `producto` varchar(30) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

--
-- Dumping data for table `desglose`
--

INSERT INTO `desglose` (`idPedido`, `producto`, `cantidad`, `precio`) VALUES
(69, 'Avanzado con instalacion', 3, 70),
(70, 'Avanzado', 1, 70),
(70, 'Avanzado con instalacion', 7, 70),
(73, 'Avanzado con instalacion', 1, 150),
(76, 'Avanzado', 1, 70),
(82, 'Avanzado con instalacion', 3, 250),
(83, 'Avanzado', 1, 150),
(83, 'Producto Basico', 3, 80),
(84, 'Producto Basico', 3, 80);

-- --------------------------------------------------------

--
-- Table structure for table `paquete`
--

CREATE TABLE `paquete` (
  `producto` int(11) NOT NULL,
  `objeto` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paquete`
--

INSERT INTO `paquete` (`producto`, `objeto`) VALUES
(1, 'Creacion de graficos y estatisticas con tus datos'),
(1, 'Posibilidad de consultarlos cuando y en el dispositivo que quieras'),
(2, 'Cargador'),
(2, 'Caudalimetro'),
(2, 'Cuenta revoluciones'),
(2, 'GPS'),
(2, 'Placa Arduino'),
(2, 'Sensor de nivel de gasolina'),
(2, 'Velocimetro'),
(5, 'asdasdf'),
(5, 'asdfasdf');

-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pedido`
--

INSERT INTO `pedido` (`idPedido`, `fecha`, `idUsuario`) VALUES
(68, '2022-02-12 19:18:32', 18),
(69, '2022-02-12 20:39:15', 18),
(70, '2022-02-14 21:32:12', 18),
(71, '2022-02-14 22:05:53', 18),
(72, '2022-02-18 19:30:37', 18),
(73, '2022-02-21 20:45:53', 20),
(76, '2022-03-01 21:04:58', 19),
(82, '2022-04-28 10:31:11', 18),
(83, '2022-05-17 18:28:43', 18),
(84, '2022-05-17 18:29:46', 18);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(30) NOT NULL,
  `descripcion` longtext NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` text NOT NULL,
  `idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`nombre`, `descripcion`, `precio`, `imagen`, `idProducto`) VALUES
('Almacenamiento en la nube', 'Este servicio permitira almacenar los datos recopilados,durante un año, por nuestro producto en un servidor. Tambien nos permitira obtener graficas de esos datos y sus relaciones', 70, 'data:image/jpeg;base64,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', 1),
('Avanzado', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS', 150, 'https://www.powerplanetonline.com/cdnassets/products/s/sensor_magnetico_01_l.jpg', 2),
('Avanzado con instalacion', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS, en este paquete tambien incluimos la instalacion del producto en su vehiculo por un profesional, tambien se incluye mantenieminto y reparaciones los 5 primeros annos', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14Z6vPrrA7RATv-LyolP7oyozg9U_0g_lSmPawxYMfLYTo9k80gRZfKi3pndbEiwxG-s', 3),
('Producto Basico', 'Producto basico con el que podras visualizar los datos basicos de tu coche ', 80, 'http://localhost:4200/assets/media/features/proyectoArduino.jpg', 4),
('Producto prueba 3', 'sadsd', 2, 'imagenToGuapa', 5);

-- --------------------------------------------------------

--
-- Table structure for table `rodadas`
--

CREATE TABLE `rodadas` (
  `IdUsuario` int(11) NOT NULL,
  `FechaHora` datetime NOT NULL,
  `Consumo` float NOT NULL,
  `Velocidad` float NOT NULL,
  `Duracion` int(11) NOT NULL COMMENT 'En segundos',
  `Distancia` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rodadas`
--

INSERT INTO `rodadas` (`IdUsuario`, `FechaHora`, `Consumo`, `Velocidad`, `Duracion`, `Distancia`) VALUES
(18, '2022-05-01 10:39:35', 5.6, 85, 355141, 100),
(18, '2022-05-10 20:39:35', 6.6, 115, 525141, 86),
(18, '2022-05-11 17:39:35', 6.5, 119, 87965, 70),
(18, '2022-05-12 10:39:35', 5.4, 45, 99945, 20),
(18, '2022-05-13 10:39:35', 3.6, 60, 155141, 10),
(18, '2022-05-14 15:59:35', 7.6, 100, 789141, 80),
(18, '2022-05-15 10:39:35', 4.8, 98, 824141, 55),
(18, '2022-05-16 20:39:35', 5.6, 85, 74578, 70),
(18, '2022-05-18 14:39:35', 6, 95, 25789, 25),
(18, '2022-05-19 19:05:35', 5.6, 85, 21852, 30),
(18, '2022-05-20 19:26:42', 6.23, 2.79838, 11223, 3);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `Usuario` varchar(30) NOT NULL,
  `Contrasenna` varchar(100) NOT NULL,
  `TipoUsuario` varchar(30) DEFAULT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `Usuario`, `Contrasenna`, `TipoUsuario`, `Email`) VALUES
(18, 'Javier', 'c1a1ddd595c77d18e1bc5317a2ac92a5', 'Administrador', 'javier@gmail.com'),
(19, 'Profesor2', 'c1a1ddd595c77d18e1bc5317a2ac92a5', 'Usuario', 'profesor@gmail.com'),
(20, 'Alvaro', 'c1a1ddd595c77d18e1bc5317a2ac92a5', 'Usuario', 'abelroma58@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`idUsuario`,`producto`),
  ADD KEY `producto` (`producto`);

--
-- Indexes for table `desglose`
--
ALTER TABLE `desglose`
  ADD PRIMARY KEY (`idPedido`,`producto`),
  ADD KEY `producto` (`producto`);

--
-- Indexes for table `paquete`
--
ALTER TABLE `paquete`
  ADD PRIMARY KEY (`producto`,`objeto`);

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
  ADD PRIMARY KEY (`nombre`,`idProducto`),
  ADD KEY `idProducto` (`idProducto`);

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
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carritos`
--
ALTER TABLE `carritos`
  ADD CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carritos_ibfk_2` FOREIGN KEY (`producto`) REFERENCES `productos` (`nombre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `desglose`
--
ALTER TABLE `desglose`
  ADD CONSTRAINT `desglose_ibfk_2` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `desglose_ibfk_3` FOREIGN KEY (`producto`) REFERENCES `productos` (`nombre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `paquete`
--
ALTER TABLE `paquete`
  ADD CONSTRAINT `paquete_ibfk_1` FOREIGN KEY (`producto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE USER 'Usuario'@'%' IDENTIFIED BY '2DAW';
GRANT ALL PRIVILEGES ON * . * TO 'Usuario'@'%';
FLUSH PRIVILEGES;
