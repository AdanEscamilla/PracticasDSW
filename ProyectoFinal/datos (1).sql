-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 28-11-2023 a las 03:11:00
-- Versión del servidor: 10.5.20-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id21580482_registroislandia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `edad` int(11) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `ciudad` varchar(250) NOT NULL,
  `transporte` varchar(2) NOT NULL,
  `camisa` varchar(2) NOT NULL,
  `talla` varchar(10) NOT NULL,
  `comentarios` varchar(250) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`nombre`, `apellido`, `edad`, `genero`, `telefono`, `ciudad`, `transporte`, `camisa`, `talla`, `comentarios`, `id`) VALUES
('ADAN ALBERTO', 'PRECIADO', 18, 'HOMBRE', '6641234567', 'TIJUANA', 'NO', 'SI', 'S', 'SIN COMENTARIOS', 7),
('JENNIFER LIZETH', 'DAMASO NEGRETE', 21, 'MUJER', '6641234567', 'TIJUANA', 'NO', 'SI', 'M', 'SIN COMENTARIOS', 8),
('KENIA', 'JIMENEZ', 21, 'HOMBRE', '6631118366', 'TIJUANA', 'NO', 'SI', 'S', 'A', 10),
('LUIS ', 'RIVAS', 25, 'HOMBRE', '6648764576', 'TIJUANA', 'NO', 'NO', 'NINGUNA', 'COMENTARIO', 11),
('ADAN ', 'ESCAMILLA HURTADP', 22, 'HOMBRE', '6641111111', 'TIJUANA', 'NO', 'NO', 'NINGUNA', 'COMENTARIO', 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos`
--
ALTER TABLE `datos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
