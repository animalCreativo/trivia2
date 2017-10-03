-- phpMyAdmin SQL Dump
-- version 4.4.8
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-10-2017 a las 15:24:23
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `trivia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` mediumint(9) NOT NULL,
  `pregunta` text,
  `tipo` int(11) DEFAULT NULL,
  `aws` int(11) DEFAULT NULL,
  `alt_a` text,
  `alt_b` text,
  `alt_c` text
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `tipo`, `aws`, `alt_a`, `alt_b`, `alt_c`) VALUES
(1, '¿Cuál de estos ingredientes es de origen mapuche?', 1, 1, 'Merkén', 'Pimienta', 'Ajo'),
(2, '¿Cuántos tipos de papas hay en Chile?', 1, 2, '105', '211', '300'),
(3, 'Hay que añadir una pizca de azúcar a las claras antes de batirlas a punto nieve.', 3, 2, 'Verdadero', 'Falso', 'NULL'),
(4, '¿Cuál de estos es un “faux pas” en la cocina italiana?', 2, 1, 'dejar la pasta como pulpa.', 'poner crema en una salsa carbonara.', 'partir el spaghetti por la mitad para que quepa en la olla).'),
(5, '¿Qué ingrediente no corta la leche?', 1, 3, 'jugo de limón.', 'vinagre.', 'bicarbonato.'),
(6, '¿Cuáles son los ingredientes especiales de una salsa bechamel?', 2, 3, 'leche, huevo, harina.', 'huevos, mantequilla.', 'leche, mantequilla y harina.'),
(7, 'Luego de que el agua hierve ¿Cuál es el tiempo ideal para lograr un huevo duro?', 2, 2, 'entre 5 y 7 min.', 'entre 10 y 12 min.', 'entre 6 y 9 min.'),
(8, '¿Qué es un fondo?', 2, 2, 'agua con aceite y sal para cocinar cualquier cosa.', 'un caldo que se prepara como primer paso en una preparación.', 'una sopa italiana que se sirve antes de la cena.'),
(9, '¿Cuál es el país de origen de la mayonesa?', 1, 3, 'Italia.', 'España.', 'Francia.'),
(10, '¿Qué es una emulsión?', 2, 2, 'Transformación de comida sólida a líquida.', 'La mezcla de dos líquidos que normalmente no se juntarían.', 'El resultado de presionar la comida en un plato.'),
(11, '¿Para qué se utiliza el corte en bastones?', 2, 2, 'Para guarniciones.', 'Para frituras y salteados.', 'Para puré.'),
(12, '¿Qué significa “tamizar” algo?', 2, 3, 'Pasar los ingredientes por harina para que tengan mayor consistencia.', 'Mezclar el harina con agua y vinagre para mejorar el sabor de los alimentos.', 'Pasarlo por un colador para volverlo más fino y quitarle impureza.'),
(13, 'En la cocina, ¿A qué se refiere el termino reducir?', 2, 2, 'A la disminución del volumen de un preparado sólido por líquido.', 'A la disminución del volumen de un preparado líquido por evaporación.', 'A la disminución del volumen de un preparado líquido por sólido.'),
(14, '¿Qué es macerar los alimentos?', 2, 2, 'Introducir cualquier carne en algún líquido para que se ablanden y adquieran aroma.', 'Remojar varios alimentos en vino o licores para que adquieran sabor.', 'Introducir un alimento crudo en vinagre, sal, orégano, ajo y/o pimiento.'),
(15, 'Para hacer un pastel, deben enharinarse las frutas confitadas para que no se vayan al fondo.', 3, 2, 'Verdadero', 'Falso', 'NULL'),
(16, 'Para que un Soufflé salga a la perfección, hay que abrir la puerta del horno para comprobar que esté subiendo.', 3, 2, 'Verdadero', 'Falso', 'NULL'),
(17, '¿Qué fruto seco sale de las uva?', 2, 3, 'Almendras.', 'Dtiles.', 'Pasas.'),
(18, '¿En qué continente tiene origen el arroz?', 2, 1, 'Asia.', 'Europa.', 'América.'),
(19, '¿Qué denota la palabra francesa “baguette” ?', 2, 2, 'Un cubierto.', 'Un pan.', 'Tipo de vino.'),
(20, '¿Qué es un “aguacate”?', 2, 3, 'Camote.', 'Abobora.', 'Palta.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` mediumint(9) NOT NULL,
  `username` char(50) DEFAULT NULL,
  `email` char(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `username`, `email`) VALUES
(1, 'pancho', 'francisco.barriosr@gmail.com'),
(2, 'vicente', 'barriosr@gmail.com'),
(3, 'wato', 'wato@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
