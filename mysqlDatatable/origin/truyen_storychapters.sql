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
-- Table structure for table `storychapters`
--

DROP TABLE IF EXISTS `storychapters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storychapters` (
  `id` bigint NOT NULL,
  `name` varchar(200) NOT NULL,
  `number` int DEFAULT NULL COMMENT 'số thứ tự chương truyện',
  `content` text,
  `status` int DEFAULT NULL,
  `dateCreated` datetime DEFAULT NULL,
  `dateUpdated` datetime DEFAULT NULL,
  `storiesId` bigint NOT NULL,
  PRIMARY KEY (`id`,`storiesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storychapters`
--

LOCK TABLES `storychapters` WRITE;
/*!40000 ALTER TABLE `storychapters` DISABLE KEYS */;
INSERT INTO `storychapters` VALUES (54,'Điều tiết tư bản trong thế kỷ 21',1,'Chỉ trong 20 năm, với dân số khoảng 2 triệu người trên một diện tích 4.000 km2, Dubai đã phát triển thần kỳ, trở thành một thành phố toàn cầu và là một trung tâm kinh tế của thế giới với các với các trung tâm tài chính, công nghệ thông tin, du lịch, cảng biển, bất động sản, các công trình đồ sộ bậc nhất thế giới',200,'1996-08-20 00:00:00','2022-09-29 00:00:00',246),(245,'Nhịp đập phát triển',1,'Tiến sĩ Yoram Bauman đã tài tình pha trộn phong cách “hài độc thoại” vốn rất phổ thông ở Mỹ với “kinh tế học” và diễn giải tất-tần-tật các kiến thức cơ bản của kinh tế vi mô, với những khái niệm cơ bản của kinh tế thị trường như: Giá cả, Hàng hóa, và cả Lý thuyết Trò chơi nữa',200,'2009-10-20 00:00:00','2022-10-19 00:00:00',250),(246,'Các yếu tố của sự phát triển công nghiệp',2,'Các nền kinh tế phát triển như thế nào, và tại sao các nền kinh tế lại sụp đổ? Đồng thời, những khái niệm cơ bản của kinh tế vĩ mô được diễn giải đầy thông minh, hóm hỉnh, rõ ràng với những bức tranh thật sống động, hài hước. Thật là một “của trời cho” với tất cả những ai đang muốn tìm hiểu về kinh tế học vĩ mô.',200,'2001-07-07 00:00:00','2017-02-08 00:00:00',250),(247,'Các Nền Kinh Tế Vận Hành',3,'Chúng ta sẽ hiểu rõ hơn về những khái niệm kinh tế cơ bản cùng những học thuyết kinh tế lớn còn ảnh hưởng tới ngày nay, qua tư tưởng của các nhà kinh tế học lớn như: Adam Smith, John Keynes…',200,'2016-02-02 00:00:00','2021-12-02 00:00:00',250),(248,'Phát triển để tồn tại',4,'Trong cuốn tự truyện cực kỳ hấp dẫn này, John Perkins kể về sự giằng xé nội tâm mà ông đã từng trải qua để từ một người đầy tớ trung thành với đế chế trở thành ngưởi bênh vực hết mình cho quyền lợi của những người bị áp bức. ',200,'1999-07-06 00:00:00','2008-12-09 00:00:00',250),(249,'Thu nhập và tư bản',5,'Nội dung sách kinh tế này trình bày lại những học thuyết kinh tế và khái niệm kinh tế học cơ bản nhất, hiểu được cách vận hành và mối tương quan giữa những thành phần kinh tế quan trọng như Chính Phủ, Ngân Hàng Trung Ương, Doanh Nghiệp và Cá nhân. ',200,'2000-10-20 00:00:00','2019-01-23 00:00:00',250),(253,'Tỉnh bở trong nhiều bối cảnh',2,'nhằm mục đích giúp người đọc hiểu được điểm yếu tâm lý của họ, để từ đó có thể bảo vệ quyền lợi bản thân trước những kẻ lừa đảo ngoài thị trường rộng lớn kia',200,'1998-10-29 00:00:00','2022-11-03 00:00:00',246),(254,'Chung tay cùng đoàn kết',1,'hi',200,NULL,NULL,248),(262,'Vươn ra thế giới mới',6,'hello',200,'2009-10-02 00:00:00',NULL,250),(324,'Ổn định tài chính',7,'test',200,NULL,NULL,250),(343,'Hành trình tìm đường kinh doanh',8,'content',200,NULL,NULL,250),(466,'heuuu',NULL,NULL,NULL,NULL,NULL,245),(525,'Lường trước việc bị thao túng',9,'Dữ liệu trong nghiên cứu này bao trùm ba thế kỷ và hơn 20 quốc gia, cũng như dựa trên một khung lý thuyết mới, qua đó giúp chúng ta tìm hiểu sâu xa hơn về những cơ chế vận động căn bản của tài sản và thu nhập.',200,'2003-12-01 00:00:00','2020-09-11 00:00:00',250),(555,'Nghĩ lớn để thành công',10,'mytest',200,NULL,NULL,250),(556,'Nghĩ là làm',2,'helloooooo',200,NULL,NULL,248),(557,'Phần kết',3,'hi my',200,NULL,NULL,248),(582,'Hoá đơn không thanh toán và sự sụp đổ tài chính',4,'Cuốn sách Đô-la hay lá nho ? – Lột trần cô nàng kinh tế học của Wheelan bàn về những vấn đề cơ bản của kinh tế học, hay cụ thể hơn, các nguyên lý về nền kinh tế thị trường',200,'2003-08-20 00:00:00','2015-02-09 00:00:00',248),(584,'Hellooo my wworld',1,'contenst',200,NULL,NULL,245),(677,'hi',NULL,NULL,NULL,NULL,NULL,245),(827,'pro team',NULL,NULL,NULL,NULL,NULL,252);
/*!40000 ALTER TABLE `storychapters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-06 13:54:14
