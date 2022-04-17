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
(68, 'Basico', 4, 150),
(68, 'Basico con instalacion', 4, 70),
(69, 'Avanzado con instalacion', 3, 70),
(70, 'Almacenamiento en la nube', 1, 120),
(70, 'Avanzado', 1, 70),
(70, 'Avanzado con instalacion', 7, 70),
(70, 'Basico', 5, 150),
(70, 'Basico con instalacion', 1, 250),
(71, 'Basico', 3, 70),
(72, 'Basico', 4, 70),
(73, 'Avanzado con instalacion', 1, 150),
(73, 'Basico', 1, 70),
(74, 'Almacenamiento en la nube', 3, 70),
(74, 'Basico', 2, 150),
(75, 'Almacenamiento en la nube', 4, 150),
(75, 'Basico', 2, 70),
(76, 'Avanzado', 1, 70),
(77, 'Basico', 2, 70),
(78, 'Avanzado', 1, 70),
(79, 'Avanzado con instalacion', 1, 70),
(80, 'Avanzado con instalacion', 1, 70),
(81, 'Almacenamiento en la nube', 2, 70),
(81, 'Basico', 4, 70);

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
(1, 'Almacenamiento de tus datos en la nube '),
(1, 'Creacion de graficos y estatisticas con tus datos'),
(1, 'Posibilidad de consultarlos cuando y en el dispositivo que quieras'),
(2, 'Cargador'),
(2, 'Caudalimetro'),
(2, 'Cuenta revoluciones'),
(2, 'GPS'),
(2, 'Placa Arduino'),
(2, 'Sensor de nivel de gasolina'),
(2, 'Velocimetro'),
(3, 'Cargador'),
(3, 'Caudalimetro'),
(3, 'Cuenta revoluciones'),
(3, 'GPS'),
(3, 'Instalacion'),
(3, 'Mantenimiento durante los primeros 3 años'),
(3, 'Placa Arduino'),
(3, 'Sensor de nivel de gasolina'),
(3, 'Velocimetro'),
(4, 'Cargador'),
(4, 'Caudalimetro'),
(4, 'Placa Arduino'),
(4, 'Sensor de nivel de gasolina'),
(4, 'Velocimetro'),
(5, 'Cargador'),
(5, 'Caudalimetro'),
(5, 'Cuenta revoluciones'),
(5, 'Instalacion'),
(5, 'Placa Arduino'),
(5, 'Sensor de nivel de gasolina'),
(5, 'Velocimetro');

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
(74, '2022-02-21 21:37:57', 21),
(75, '2022-02-21 21:38:19', 21),
(76, '2022-03-01 21:04:58', 19),
(77, '2022-03-01 21:42:17', 21),
(78, '2022-03-01 22:13:52', 22),
(79, '2022-03-01 22:14:49', 22),
(80, '2022-03-01 22:29:26', 23),
(81, '2022-03-03 11:46:55', 23);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(30) NOT NULL,
  `descripcion` longtext NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(10000) NOT NULL,
  `idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`nombre`, `descripcion`, `precio`, `imagen`, `idProducto`) VALUES
('Almacenamiento en la nube', 'Este servicio permitira almacenar los datos recopilados,durante un año, por nuestro producto en un servidor. Tambien nos permitira obtener graficas de esos datos y sus relaciones', 70, 'https://www.altonivel.com.mx/assets/images/Actualidad/Mexico/Elecciones/nube.jpg', 1),
('Avanzado', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS', 150, 'https://www.powerplanetonline.com/cdnassets/products/s/sensor_magnetico_01_l.jpg', 2),
('Avanzado con instalacion', 'Es la version extendida de nuestro producto con el que podremos controlar los parametros del paquete basico y ademas revoluciones del motor, aceleracion, y posicion por GPS, en este paquete tambien incluimos la instalacion del producto en su vehiculo por un profesional, tambien se incluye mantenieminto y reparaciones los 5 primeros annos', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14Z6vPrrA7RATv-LyolP7oyozg9U_0g_lSmPawxYMfLYTo9k80gRZfKi3pndbEiwxG-s', 3),
('Basico', 'Es la version mas basica de nuestro producto con el que podremos contorlar el nivel de gasolina su consumo y la velocidad', 70, 'https://blog.orange.es/wp-content/uploads/sites/4/2019/07/photo-1553063085-dbbf64d936ea.jpeg', 4),
('Basico con instalacion', 'Es la version mas basica de nuestro producto con el que podremos contorlar el nivel de gasolina su consumo y la velocidad, en este paquete tambien incluimos la instalacion del producto en su vehiculo por un profesional', 120, 'https://www.todomecanica.com/images/blog/2016/febrero/mecanico-automotriz.jpg', 5);

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
(17, 'Dre', 'f79c62855614bd4d923016896a96ea81', NULL),
(18, 'Javier', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL),
(19, 'Profesor', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL),
(20, 'Jaime', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL),
(21, 'Alberto', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL),
(22, 'Pedro', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL),
(23, 'Raul', 'c1a1ddd595c77d18e1bc5317a2ac92a5', NULL);

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
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- Constraints for table `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `paquete` (`producto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE USER 'Usuario'@'%' IDENTIFIED BY '2DAW';
GRANT ALL PRIVILEGES ON * . * TO 'Usuario'@'%';
FLUSH PRIVILEGES;
