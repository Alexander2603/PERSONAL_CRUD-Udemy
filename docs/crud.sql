-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2021 a las 00:41:24
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_producto`
--

CREATE TABLE `tm_producto` (
  `prod_id` int(11) NOT NULL,
  `prod_nom` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `prod_desc` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fech_crea` datetime NOT NULL,
  `fech_modi` datetime DEFAULT NULL,
  `fech_elim` datetime DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tm_producto`
--

INSERT INTO `tm_producto` (`prod_id`, `prod_nom`, `prod_desc`, `fech_crea`, `fech_modi`, `fech_elim`, `est`) VALUES
(1, 'cafe aguila roja', 'Ninguna', '2021-04-16 21:25:09', '2021-04-16 21:25:09', '2021-04-16 21:25:09', 1),
(2, 'chocolate cruz', 'Ninguna', '2021-04-16 21:25:24', '2021-04-16 21:25:24', '2021-04-16 21:25:24', 1),
(3, 'arroz roa', 'Ninguna', '2021-04-16 21:25:35', '2021-04-16 21:25:35', '2021-04-16 21:25:35', 1),
(4, 'Agua embotellada', 'Ninguna', '2021-04-16 14:59:56', NULL, NULL, 1),
(5, 'Arroz flor huila', 'Ninguna', '2021-04-16 15:05:40', NULL, NULL, 1),
(6, 'Carne res', 'Ninguna', '2021-04-16 15:51:58', '2021-04-16 17:09:27', NULL, 1),
(7, 'Nor', 'Ninguna', '2021-04-16 17:09:38', NULL, NULL, 1),
(8, 'Chocolatina JET', 'Tipo barra 20g', '2021-04-16 17:37:58', '2021-04-16 17:38:42', NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tm_producto`
--
ALTER TABLE `tm_producto`
  ADD PRIMARY KEY (`prod_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tm_producto`
--
ALTER TABLE `tm_producto`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
