-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto oviadso
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedings`
--

DROP TABLE IF EXISTS `feedings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `ovine_id` varchar(10) NOT NULL,
  `food_type` varchar(20) NOT NULL,
  `quantity` decimal(10,0) NOT NULL,
  `postJob` varchar(50) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `notes` varchar(80) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedings`
--

LOCK TABLES `feedings` WRITE;
/*!40000 ALTER TABLE `feedings` DISABLE KEYS */;
INSERT INTO `feedings` VALUES (1,'2026-07-16','3','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-17 23:30:48','2026-07-17 23:31:39'),(2,'2026-07-16','3','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-17 23:31:46','2026-07-17 23:31:46'),(3,'2026-07-16','3','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-17 23:32:09','2026-07-17 23:32:09'),(4,'2026-07-16','3','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-18 01:11:07','2026-07-18 01:11:22'),(5,'2026-07-19','8','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-20 00:57:43','2026-07-20 01:01:34'),(6,'2026-07-19','8','Pasto de corte',5,'Se verificó el consumo completo del alimento',1,'El ovino se alimentó normalmente y no presentó inconvenientes.','2026-07-20 01:01:39','2026-07-20 01:01:39');
/*!40000 ALTER TABLE `feedings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-07 12:25:17
