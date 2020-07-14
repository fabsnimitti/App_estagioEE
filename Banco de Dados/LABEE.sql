-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 14/07/2020 às 09:56
-- Versão do servidor: 10.3.22-MariaDB-1ubuntu1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `LABEE`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `CLP`
--

CREATE TABLE `CLP` (
  `statusClp` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `CLP`
--

INSERT INTO `CLP` (`statusClp`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `controle_qualidade`
--

CREATE TABLE `controle_qualidade` (
  `statusRobo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `controle_qualidade`
--

INSERT INTO `controle_qualidade` (`statusRobo`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `estoque`
--

CREATE TABLE `estoque` (
  `statusEstoque` tinyint(1) DEFAULT NULL,
  `statusRobo` tinyint(1) DEFAULT NULL,
  `unidades` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `estoque`
--

INSERT INTO `estoque` (`statusEstoque`, `statusRobo`, `unidades`) VALUES
(1, 0, 132);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fresa`
--

CREATE TABLE `fresa` (
  `statusRobo` tinyint(1) DEFAULT NULL,
  `statusFresa` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `fresa`
--

INSERT INTO `fresa` (`statusRobo`, `statusFresa`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `laiser`
--

CREATE TABLE `laiser` (
  `statusRobo` tinyint(1) DEFAULT NULL,
  `statusImpressora` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `laiser`
--

INSERT INTO `laiser` (`statusRobo`, `statusImpressora`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `medidora`
--

CREATE TABLE `medidora` (
  `statusRobo` tinyint(1) DEFAULT NULL,
  `statusmedidora` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `medidora`
--

INSERT INTO `medidora` (`statusRobo`, `statusmedidora`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `solda`
--

CREATE TABLE `solda` (
  `statusRobo` tinyint(1) DEFAULT NULL,
  `statuscasa` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `solda`
--

INSERT INTO `solda` (`statusRobo`, `statuscasa`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `torno`
--

CREATE TABLE `torno` (
  `statusRobo` tinyint(1) DEFAULT NULL,
  `statusTorno` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `torno`
--

INSERT INTO `torno` (`statusRobo`, `statusTorno`) VALUES
(0, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `email` varchar(30) DEFAULT NULL,
  `passwd` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`email`, `passwd`) VALUES
('fabsnimitti@gmail.com', 'teste'),
('fabsnimitti@gmail.co', 'undefined'),
('fabsnimitti@gmail.co66', 'aaaa'),
('aa3', 'aaa'),
('aaaaaq', 'qq'),
('qqw', 'qqw'),
('null', 'null'),
('undefined', 'undefined');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
