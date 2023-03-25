CREATE TABLE Users(
userID INT AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(30),
lastName VARCHAR(30),
gender VARCHAR(10),
cellNumber VARCHAR(12),
email VARCHAR(45),
password TEXT,
userRole VARCHAR(6),
userProfile TEXT,
joinDate DATE
);

ALTER TABLE Users
ADD COLUMN userName VARCHAR(30);

INSERT INTO Users (userName) VALUES
('MissTrapeano'),
('Bestie2001'),
('VivaGirl'),
('TunaMan199'),
('KittieBear');

CREATE TABLE Products(
id INT AUTO_INCREMENT PRIMARY KEY,
productName VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
price DECIMAL(10, 2),
quantity INT,
imgURL TEXT,
userID INT,
CONSTRAINT user_product FOREIGN KEY (userID)
REFERENCES Users(userID)
ON DELETE CASCADE
ON UPDATE CASCADE
);

SELECT * FROM Users;

RENAME TABLE products
TO Products;

ALTER TABLE Products
MODIFY productName varchar(255) not null;

INSERT INTO Products (id, productName, description, category, price, quantity, imgURL) VALUES 
('01', 'The Desert Queen', "This mesmorising addition to IVH's Fall 2022 collection compliments your curves while giving your body room to move as gracefully as you are .", 'Iris Van Herpen - MetaMorphism', '234187.68', '67', "https://i.postimg.cc/0Nfgtqv7/ivh-1.jpg"),
('02', 'Sand Wind Dress', "This soft, flowy garment makes any skin tone glow and adds beautiful assymetry to your silhouette . Grab this dress today to have nature at your feet .", "Iris Van Herpen - MetaMorphism", '292724.93', '129', "https://i.postimg.cc/tJrvPXh4/sandwinddress-1.jpg"),
('03', 'Scale Suit', "A wonderful piece from IVH's Fall 2021 collection -- EarthRise -- flows as a breathe of fresh air on any woman's skin . Made with recycled plastic, this garment not only cares for the environment , but it cares for your confidence too .", 'Iris Van Herpen - EarthRise', '215647.89', '32', "https://i.postimg.cc/xTD3xNdV/scalesuit-1.webp"),
('04', 'Emerald Dress', "This masterpiece makes this range stand out from the rest . A natural beauty come to life , you will dazzle any crowd wearing this emerald garment . Live as your best self!", "Iris Van Herpen - EarthRise", '289324.76', '561', "https://i.postimg.cc/nz55XVZY/emeralddress-1.webp"),
('05', 'Sweetheart Neckline Long Sleeve Wedding Gown', "Once worn by Queen Bethany of Flynnbridge, this gown is detailed to perfection and is sure to beautify any woman's bridal experience .", "Harem's Bride - Olympus", '21248.50', '68', "https://i.postimg.cc/Ss24Tvxd/haremsride-olympus1.webp"),
('06', 'Strapless Corset Wedding Gown', "Harness the sensual classic flair of this gorgeous piece by Harem's Bride . The puffed sleeves are optional , however most clients insist to keep them .", "Harem's Bride - Olympus", '15836.76', '190', "https://i.postimg.cc/qMQRSWGX/strapless-1.webp"),
('07', 'Playful Multi-Layered Skirt Wedding Gown', "Minimalistic with an elegant twist, this gown adds a dash of playfulness to your outstanding sophistication to your precious day . Grab it now while stocks last !", "Harem's Bride - Olympus", '20307.90', '97', "https://i.postimg.cc/tCBGtbXP/multilayeredskirt-1.webp"),
('08', 'Bridal Jumpsuit With Jacket', "Don't feel like wearing an elaborate dress for your wedding ? No worries ! We've got a wide range of elegant jumpsuits that will suit just about every specification you might have .", "Harem's Bride - Olympus", '13973.65', '80', "https://i.postimg.cc/vZSMMskM/jumpsuitwithjacket-1.webp"),
('09', 'Cottagecore Lace-Up One Piece Dress', "Ever wondered what it would be like to live in a hobbit's world ? Live your fantasies in our latest range of cottagecore dresses from our great friends at Retro Fairy . Available in plenty sizes, this dress will add magic to any event in your life .", "Retro Fairy - Hobbitcore", '1077.43', '56', "https://i.postimg.cc/PqwGj81z/cottagecore-1.webp"),
('10', 'Fairycore V-Neck Lace Princess Dress', "If you enjoy cosplay , or you have a lovely passion for everything magical and whimsical, explore our new range of Fairycore dresses . This range is exclusively available in all sizes, including those very-very-necessary sizes in-between !", "Retro Fairy - Fairycore", '1578.99', '102', "https://i.postimg.cc/7PGdpzMB/fairycore-1.webp");

INSERT INTO Products (imgURL) VALUES
("https://i.postimg.cc/0Nfgtqv7/ivh-1.jpg"),
("https://i.postimg.cc/tJrvPXh4/sandwinddress-1.jpg"),
("https://i.postimg.cc/xTD3xNdV/scalesuit-1.webp"),
("https://i.postimg.cc/nz55XVZY/emeralddress-1.webp"),
("https://i.postimg.cc/Ss24Tvxd/haremsride-olympus1.webp"),
("https://i.postimg.cc/qMQRSWGX/strapless-1.webp"),
("https://i.postimg.cc/tCBGtbXP/multilayeredskirt-1.webp"),
("https://i.postimg.cc/vZSMMskM/jumpsuitwithjacket-1.webp"),
("https://i.postimg.cc/PqwGj81z/cottagecore-1.webp"),
("https://i.postimg.cc/7PGdpzMB/fairycore-1.webp");

DROP TABLE products;

CREATE TABLE Cart(
id INT AUTO_INCREMENT PRIMARY KEY,
cartProduct VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
price DECIMAL(10, 2),
quantity INT,
imgURL TEXT,
userID INT,
CONSTRAINT cart_product FOREIGN KEY (id)
REFERENCES Products(id)
ON DELETE CASCADE
ON UPDATE CASCADE
);



