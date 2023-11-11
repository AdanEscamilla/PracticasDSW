-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2023 a las 08:20:38
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `Id_Empleado` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Sexo` varchar(45) NOT NULL,
  `Ventas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`Id_Empleado`, `Nombre`, `Edad`, `Sexo`, `Ventas`) VALUES
(12, 'Jorge', 23, 'Masculino', 12),
(53, 'Adan', 26, 'Masculino', 18),
(123, 'Marco', 24, 'Masculino', 14),
(210, 'Miguel', 28, 'Masculino', 20),
(450, 'Liz', 21, 'Femenino', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `Id_Ingrediente` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Sabor` varchar(45) NOT NULL,
  `Tipo` varchar(45) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`Id_Ingrediente`, `Nombre`, `Sabor`, `Tipo`, `Cantidad`) VALUES
(103, 'Tomate', 'Neutro', 'Fruta', 50),
(106, 'Lechuga', 'Neutro', 'Verdura', 20),
(109, 'Cerdo', 'Crudo', 'Carnes', 2),
(112, 'Pimienta', 'Picante', 'Condimento', 70),
(115, 'Miel', 'Dulce', 'Condimento', 102);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

CREATE TABLE `platillos` (
  `Id_Platillo` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Precio` float NOT NULL,
  `Entrada` varchar(45) NOT NULL,
  `Ingredientes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `platillos`
--

INSERT INTO `platillos` (`Id_Platillo`, `Nombre`, `Precio`, `Entrada`, `Ingredientes`) VALUES
(1001, 'Albondigas', 120.5, 'Platillo Fuerte', 109),
(1002, 'Ensalada', 80.6, 'Entrada', 106),
(1003, 'Kebabs', 100.5, 'Aperitivo', 103),
(1004, 'Papas a la francesa', 30.5, 'Aperitivo', 112),
(1005, 'Galletas con miel', 25.25, 'Postre', 115);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `Id_Ventas` int(11) NOT NULL,
  `Venta` float NOT NULL,
  `Fecha_Alta` date NOT NULL,
  `Recibos` int(11) NOT NULL,
  `Clientes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`Id_Ventas`, `Venta`, `Fecha_Alta`, `Recibos`, `Clientes`) VALUES
(12, 45000, '0000-00-00', 1113, 945),
(14, 55000, '0000-00-00', 1015, 963),
(16, 39500, '0000-00-00', 963, 793),
(18, 66000, '0000-00-00', 1245, 1073),
(20, 59716, '0000-00-00', 1202, 1039);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`Id_Empleado`),
  ADD KEY `Ventas` (`Ventas`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`Id_Ingrediente`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`Id_Platillo`),
  ADD KEY `Ingredientes` (`Ingredientes`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`Id_Ventas`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`Ventas`) REFERENCES `ventas` (`Id_Ventas`);

--
-- Filtros para la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD CONSTRAINT `platillos_ibfk_1` FOREIGN KEY (`Ingredientes`) REFERENCES `ingredientes` (`Id_Ingrediente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
