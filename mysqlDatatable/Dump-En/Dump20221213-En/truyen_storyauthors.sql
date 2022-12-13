CREATE DATABASE  IF NOT EXISTS `truyen` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `truyen`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: truyen
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `storyauthors`
--

DROP TABLE IF EXISTS `storyauthors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storyauthors` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `storyauthorsName` varchar(100) NOT NULL,
  `description` longtext,
  `status` int DEFAULT NULL,
  `dateUpdated` datetime DEFAULT NULL,
  `dateCreated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=254 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storyauthors`
--

LOCK TABLES `storyauthors` WRITE;
/*!40000 ALTER TABLE `storyauthors` DISABLE KEYS */;
INSERT INTO `storyauthors` VALUES (245,'Niall Kishtainy','Famous investor',200,'2022-10-19 00:00:00','2009-10-20 00:00:00'),(246,'Alan Walker','Famous investor',200,'2001-07-07 00:00:00','2017-02-08 00:00:00'),(247,'Michael Goodwin','Famous investor',200,'2016-02-02 00:00:00','2021-12-02 00:00:00'),(248,'John Perkins','Famous investor',200,'1999-07-06 00:00:00','2008-12-09 00:00:00'),(249,'Kate Perry','Famous investor',200,'2000-10-20 00:00:00','2019-01-23 00:00:00'),(250,'John Son','Famous investor',200,'1996-08-20 00:00:00','2022-09-29 00:00:00'),(251,'Trinh Minh Hieu','Famous investor',200,'2009-09-07 00:00:00','2022-05-07 00:00:00');
/*!40000 ALTER TABLE `storyauthors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 10:38:06
