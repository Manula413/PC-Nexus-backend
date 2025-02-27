PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO "_prisma_migrations" VALUES('beb5e119-b5b4-4843-b487-178f6f0c6706','7e18b7a569f957227794f01dd581e22ae4fb00107aae58cdb68b61f8786335c6',1738241721596,'20250130125521_init',NULL,NULL,1738241721562,1);
CREATE TABLE IF NOT EXISTS "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "reviews" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL
);
INSERT INTO "Product" VALUES(1,'CyberPowerPC Gamer Xtreme VR Gaming PC','$799.99','16GB DDR5, Intel Core i5-13400F 2.5GHz, GeForce RTX 4060 8GB, 1TB PCIe Gen4 SSD','/images/PC/PC1_img1.jpg',5.0,145,'PC','Custom');
INSERT INTO "Product" VALUES(2,'iBUYPOWER Y60 Gaming PC Computer Desktop','$1,999.99','16GB DDR5 (GMA29004), AMD Ryzen 7 7800X 4.7GHz, GeForce RTX 4090 16GB','/images/PC/PC2_img1.jpg',5.0,720,'PC','Custom');
INSERT INTO "Product" VALUES(3,'CyberPowerPC Gamer Master Gaming PC','$1,099.99','16GB DDR4 3200, 1TB NVMe SSD, Intel Core i5 13400F 2.5GHz, NVIDIA RTX 1060','/images/PC/PC3_img1.jpg',4.5,773,'PC','Custom');
INSERT INTO "Product" VALUES(4,'Skytech Gaming PC Desktop','$849.99','32GB DDR5, Intel Core i9 14900KF 3.2GHz, GeForce RTX 4070','/images/PC/PC4_img1.jpg',5.0,722,'PC','Custom');
INSERT INTO "Product" VALUES(5,'CyberPowerPC Gamer Xtreme VR Gaming PC','$1,839.99','16GB DDR5 | Intel Core i5-13400F 2.5GHz, GeForce RTX 4060 8GB, 1TB PCIe Gen4 SSD','/images/PC/PC5_img1.jpg',4.5,288,'PC','Custom');
INSERT INTO "Product" VALUES(6,'Gaming PC Desktop Computer Intel Core i5','$899.99','Intel Core i5 12400F RTX 4060 8GB Gaming Computer 32GB RAM DDR4 1TB SSD PC Desktop, ARGB Fan, Prebuilt Gaming PC Tower','/images/PC/PC6_img1.jpg',4.5,689,'PC','Custom');
INSERT INTO "Product" VALUES(7,'NSX Tomcat GAMING PC','$799.00','16GB DDR4 RGB RAM 3600, AMD Ryzen 5 5500 3.6GHz, RTX 3050, 512GB NVMe SSD, 650W Bronze PSU','/images/PC/PC7_img1.jpg',4.0,47,'PC','Custom');
INSERT INTO "Product" VALUES(8,'STGAubron Gaming PC Desktop','$389.99','Radeon RX 560 4G, Intel Core i5 (up to 3.6GHz), 16G Memory, 512G SSD, 600M WIFI, BT 5.0, RGB Fan x2, RGB Mouse Pad, Windows 10 Home','/images/PC/PC8_img1.jpg',5.0,28,'PC','Custom');
INSERT INTO "Product" VALUES(9,'iBUYPOWER Slate & MESH Gaming PC','$1,399.99','Desktop Computer (AMD Ryzen 7 79700X CPU, AMD Radeon RX 7800XT 16GB GPU, 32GB DDR5 Non-RGB 5200MHz RAM (16x2), 1TB NVMe SSD, WIFI Ready, Windows 11 Home) SMA7R78XTO2','/images/PC/PC9_img1.jpg',4.8,208,'PC','Custom');
INSERT INTO "Product" VALUES(10,'Skytech Shadow Gaming PC','$1,199.99','Intel i7 12700F 2.1GHz, RTX 4060, 1TB NVMe, 16GB DDR4 RAM 3200, Black 600W Gold PSU, WI-FI','/images/PC/PC10_img1.jpg',5.0,1905,'PC','Custom');
INSERT INTO "Product" VALUES(11,'Acer Nitro V ANV15-51-7389','$769.99','15.6" Gaming Laptop, Intel Core i7-13620H Processor, 16GB DDR5 RAM','\images\laptop\laptop1_img1.jpg',4.3,513,'Laptop','Acer');
INSERT INTO "Product" VALUES(12,'ASUS ROG Strix G16 G614JV-A574','$1,317.75','16" Gaming Laptop, 16:10 FHD 165Hz Display, NVIDIA GeForce RTX 4060','/images/laptop/laptop2_img1.jpg',4.3,1533,'Laptop','Asus');
INSERT INTO "Product" VALUES(13,'MSI Katana 15','$1,249.99','Gaming Laptop: 13th Gen Intel Core i7, GeForce RTX 4000, 17.3"','/images/laptop/laptop3_img1.jpg',5.0,421,'Laptop','MSI');
INSERT INTO "Product" VALUES(14,'MSI Katana 17','$1,299.00','144Hz FHD Display, 32GB DDR5, 1TB NVMe SSD, USB-Type C, Cooler Boost 5, Win11 Home','/images/laptop/laptop4_img1.jpg',4.0,390,'Laptop','MSI');
INSERT INTO "Product" VALUES(15,'MSI Stealth GS77','$1,389.11','Intel Core i7-12700H, GeForce RTX 2060, 17.3" FHD, 144Hz, 16GB DDR5, 1TB NVMe SSD, USB-Type C, Thunderbolt 4, CNC Aluminum, Win 11 Home','/images/laptop/laptop5_img1.jpg',3.9,17,'Laptop','MSI');
INSERT INTO "Product" VALUES(16,'ASUS TUF A15','$601.43','15.6" Gaming Laptop, 8GB DDR5 RAM, 512GB PCIe SSD, Full HD','/images/laptop/laptop6_img1.jpg',5.0,300,'Laptop','Asus');
INSERT INTO "Product" VALUES(17,'ASUS TUF A16','$1,355.73','16" FHD+ 16:10 165Hz Display, AMD Ryzen 9 7940HX, NVIDIA GeForce RTX 4070','/images/laptop/laptop7_img1.jpg',4.7,56,'Laptop','Asus');
INSERT INTO "Product" VALUES(18,'GIGABYTE - G6X','$1,389.11','165Hz 1920x1200 WUXGA, NVIDIA GeForce RTX 4060, Intel i7-13650HX, 1TB SSD, 16GB DDR5 RAM, Windows 11 Home','/images/laptop/laptop8_img1.jpg',4.2,362,'Laptop','Gigabyte');
INSERT INTO "Product" VALUES(31,'Acer Predator Helios Neo 16','$999.99','Intel Core i7 13650HX, NVIDIA GeForce RTX 4060, 16\" WUXGA 1920x1200 165Hz G-SYNC Display, 16GB DDR5, 512GB Gen 4 SSD','/images/laptop/laptop10_img1.jpg',5.0,425,'Laptop','Acer');
INSERT INTO "Product" VALUES(37,'GIGABYTE - AORUS 16X','$1,699.00','165Hz 2560x1600 WQXGA - NVIDIA GeForce RTX 4070 - Intel i7-14650HX - 2TB SSD with 32GB DDR5 RAM - Windows 11 Home AD (AORUS 16X ASG-53USC64SH)','/images/laptop/laptop9_img1.jpg',4.0,105,'Gigabyte','Acer');
CREATE TABLE IF NOT EXISTS "Logo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);
INSERT INTO "Logo" VALUES(1,'/logo/logo_1.png');
INSERT INTO "Logo" VALUES(2,'/logo/logo_2.png');
INSERT INTO "Logo" VALUES(3,'/logo/logo_3.png');
INSERT INTO "Logo" VALUES(4,'/logo/logo_4.png');
INSERT INTO "Logo" VALUES(5,'/logo/logo_5.png');
INSERT INTO "Logo" VALUES(6,'/logo/logo_6.png');
INSERT INTO "Logo" VALUES(7,'/logo/logo_7.png');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('Product',38);
INSERT INTO "sqlite_sequence" VALUES('Logo',7);
COMMIT;
