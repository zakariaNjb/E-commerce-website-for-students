-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 03 nov. 2020 à 20:07
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e_commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('n.zakaria123@gmail.com', '$2y$10$cl3nxGg.ARgGq6Ix82TD2eVKKPIQu9hyGu.VM1Ic8DAT8jTl.ewSe');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `quantity` int(255) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL,
  `dirImg` varchar(255) NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `type`, `quantity`, `description`, `dirImg`, `price`) VALUES
('azgdyut', 'Note book', 123, 'Hunter x Hunter logo | Spiral Notebook', '../web/sn,x1000-pad,750x1000,f8f8f8.jpg', 10),
('bdzq', 'Books', 120, 'Yes you can easily learn how to hack a computer, spoofing techniques, mobile & smartphone hacking, website penetration and tips for ethical hacking!', '../web/515QSPCGU3L.jpg', 42),
('iqsudpÃ§', 'Pencil Bag', 163, 'Trousse Scolaire - BLACK PINK - HYLike - Multifonction Pencil Case Kpop BTS', '../web/1 (19).jpg', 5),
('isqiygci', 'Bags', 172, 'SALE ENDS SOON â€“ GET YOURS TODAY!FREE SHIPPING: NO SURPRISES!50% OFF Main Material: OxfordDecoration: LetterGender: UnisexPattern Type: SolidBackpacks', '../web/616Nsx3lsiL._SL1114_.jpg', 65),
('j9a0c2c2c2f5i8d3c2d3', 'Books', 163, 'Eloquent JavaScript is a guide to JavaScript that focuses on good programming techniques rather than offering a mish-mash of cut-and-paste effects. The author teaches you how to leverage JavaScript\\\'s grace and precision to write real browser-based applic', '../web/JsEloquent.jpg', 12),
('jkbozadh', 'Bags', 12, 'MatÃ©riel: cavans Y compris: un nouveau sac Ã  dos, Briller la nuit, plus de lingt, il sera plus brillant. Meilleur cadeau pour la fÃªte, prix infÃ©rieur, ...', '../web/rBVaI1lhpe6AXqVKAAGZIacax9Y141.jpg', 65),
('jqscu', 'Pencil Bag', 150, 'Trousse Scolaire - Manga ONE PIECE - LAW - Anime Multifonction Pencil Case Otaku', '../web/1 (22).jpg', 6),
('jsqdppi', 'Bags', 170, 'Buy YOYOSHome Anime Assassination Classroom Cosplay Bookbag Daypack Backpack School Bag with 50% sale! Only 7 days for great deal on YOYOSHome Anime', '../web/61bca17114c96ab4c490545dceb88d5e.jpg', 70),
('khlj', 'Books', 150, 'It\\\'s easy to start writing code with Python: that\\\'s why the language is so immensely popular. However, Python has unique strengths, charms, and expressivity that can be hard to grasp at first -- as well as hidden pitfalls that can easily trip you up if ', '../web/417kpwcdQfL._SX380_BO1,204,203,200_.jpg', 27),
('kqlsbdqsid', 'Bags', 136, 'Cartable Kpop Backpack BLACK PINK (Photo) For School - Sac Ã  Dos Rings - Bag BTS', '../web/1 (14).jpg', 17),
('kqsdui', 'Bags', 19, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur', '../web/1 (13).jpg', 80),
('lazndlknazd', 'Bags', 156, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur', '../web/USER_SCOPED_TEMP_DATA_orca-image--818161431_530x@2x.jpg', 70),
('lmqsmldk', 'Books', 63, 'Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. Thatâ€™s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScrip', '../web/51csAp-ykgL._SX379_BO1,204,203,200_.jpg', 32),
('lqdlklq', 'Books', 200, 'This fullâ€“color book adopts a visual approach to teaching JavaScript & jQuery, showing you how to make web pages more interactive and interfaces more intuitive through the use of inspiring code examples, infographics, and photography.', '../web/41y31M-zcgL._SX400_BO1,204,203,200_.jpg', 15),
('maozdho', 'Bags', 165, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur.', '../web/616Nsx3lsiL._SL1114_.jpg', 68),
('mjqksd', 'Note book', 256, 'BN5704 Sketchbook Notepad Artist Sketch Drawing Design 120 Sheets Vintage Sketch Book Diary Drawing Notebook, Size:A5', '../web/sn,x600-pad,600x600,f8f8f8.u3.jpg', 6),
('oijazd', 'Books', 232, 'Get complete instructions for manipulating, processing, cleaning, and crunching datasets in Python. Updated for Python 3.6, the second edition of this hands-on guide is packed with practical case studies that show you how to solve a broad set of data anal', '../web/51cUNf8zukL._SX379_BO1,204,203,200_.jpg', 15),
('oqisd', 'Books', 17, 'Head First Java is a complete learning experience for object-oriented (OO) programming and Java. Designed according to brain-friendly learning principles, this book takes you into everything from language fundamentals to advanced topics including threads,', '../web/51Gsycdh-TL._SX430_BO1,204,203,200_.jpg', 18),
('oqscsnqc', 'Pencil Bag', 16, 'Trousse Scolaire - BTS - Fake Love - Multifonction Pencil Case Kpop', '../web/1 (9).jpg', 15),
('oqsdoazd', 'Pencil Bag', 163, 'Trousse Scolaire Gaming FREE FIRE - New Multifonction Pencil Case Gamer', '../web/1 (7).jpg', 2),
('poadzd', 'Books', 100, 'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven w', '../web/51FHuacxYjL._SX379_BO1,204,203,200_.jpg', 32),
('qizudhqzd', 'Pencil Bag', 168, 'Trousse Scolaire - BTS - DYNAMITE - Multifonction Pencil Case Kpop', '../web/1 (24).jpg', 6),
('qjs', 'Books', 89, 'JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers.', '../web/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg', 23),
('qjshby', 'Note book', 235, '120 pages\\r\\nCouverture 350 g/mÂ² ; papier 90 g/mÂ².\\r\\nImprimÃ© sur la couverture avant d\\\'une Å“uvre d\\\'un artiste indÃ©pendant.', '../web/sn,x1000-pad,750x1000,f8f8f8 (1).jpg', 8),
('qjskc', 'Books', 243, 'In this book, we take you on a fun, hands-on and pragmatic journey to learning iOS13 application development using Swift. You\\\'ll start building your first iOS app within minutes. Every section is written in a bite-sized manner and straight to the point a', '../web/51MeJXXhpGL.jpg', 32),
('qkjsncqis', 'Pencil Bag', 63, 'Trousse Scolaire - Manga NARUTO Colors - Anime - Multifonction Pencil Case Otaku', '../web/1 (11).jpg', 16),
('qksdnl', 'Bags', 160, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur.', '../web/lunch-bag-naruto-sac-a-repas-isotherme-imprime-3d.jpg', 56),
('qksduz', 'Note book', 136, '\\\'Copy of Hisoka Hunter x Hunter\\\' Spiral Notebook by DigitalAurora', '../web/3fdbd15e4e612fb9f02c64ea5b2acd61.jpg', 12),
('qksjdbuiqs', 'Bags', 14, 'Our tote bags are made from soft, durable, poly-poplin fabric and include a 1\\\" black strap for easy carrying on your shoulder', '../web/anime-manga-insane-anime-boy-alamsyah-bucini-transparent.jpg', 16),
('qksuc', 'Books', 63, 'Hacking is the art of creative problem solving, whether that means finding an unconventional solution to a difficult problem or exploiting holes in sloppy programming.', '../web/61VBaAS4IbL._SX383_BO1,204,203,200_.jpg', 40),
('qksudqsd', 'Books', 140, 'Penetration testers simulate cyber attacks to find security weaknesses in networks, operating systems, and applications. Information security experts worldwide use penetration techniques to evaluate enterprise defenses', '../web/51zBBNX8LmL._SX377_BO1,204,203,200_.jpg', 35),
('qkzudia', 'Note book', 154, 'Retro Flowers Diary With Lock Notebook A5 Vintage Note Book Travel notepad(Pink B)', '../web/1 (27).jpg', 6),
('qmishci', 'Pencil Bag', 163, 'Anime death note Trousse - Multifonction', '../web/1 (21).jpg', 6),
('qodqsdÃ¹', 'Pencil Bag', 16, 'PARTAGEZ CE PRODUIT\\r\\n\\r\\n\\r\\nTrousse Scolaire Manga ONE PIECE - Luffy - Anime Multifonction Pencil Case Otaku', '../web/1 (8).jpg', 18),
('qosjdqi', 'Pencil Bag', 145, 'Trousse Scolaire - BTS - Wings - Multifonction Pencil Case Kpop', '../web/1 (25).jpg', 16),
('qscjoz', 'Note book', 187, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur', '../web/ES560590KT_spirax_a4_notebook_240_pages_5_pack.jpg', 4),
('qscpiqs', 'Books', 165, 'A step-by-step guide to learning iOS app development and exploring the latest Apple development tools', '../web/41C5eWrLcFL.jpg', 96),
('qsdhize', 'Note book', 156, '120 pages\\r\\nCouverture 350 g/mÂ² ; papier 90 g/mÂ².\\r\\nImprimÃ© sur la couverture avant d\\\'une Å“uvre d\\\'un artiste indÃ©pendant.', '../web/sn,x1000-pad,750x1000,f8f8f8 (2).jpg', 12),
('qsdhoi', 'Bags', 170, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur', '../web/1b94f396710c2df244d48bbb9cb417c4.jpg', 55),
('qsdhqsdpqmsid', 'Pencil Bag', 172, 'Trousse Scolaire - Manga AKATSUKI - NARUTO Anime Multifonction Pencil Case Otaku', '../web/1 (20).jpg', 5),
('qsdihiu', 'Pencil Bag', 98, 'Holds pens, pencils, cables and personal items, n235 x 70 x 40mm, nFolds out into a tray, nYKK zip and pull loops on both ends for easier handling', '../web/Bellroy-Pencil-Case-Black-1-1.jpg', 6),
('qsdjqsd', 'Books', 236, 'Software developers need to solve various problems. Many times, these problems are the same or similar to the ones theyâ€™ve already encountered in other projects.', '../web/41xHrLxa3YL._SX331_BO1,204,203,200_.jpg', 25),
('qsdqsd', 'Books', 16, 'Use the enormously popular React framework to build dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices', '../web/41W9YdrRslL._SX348_BO1,204,203,200_.jpg', 32),
('qshcbi', 'Note book', 178, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur.', '../web/b5-softcover_0349_withbellyban-5f7feb53b7c0d.jpg', 13),
('qshmou', 'Bags', 170, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteurPour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã ', '../web/1 (16).jpg', 70),
('qshu', 'Books', 120, 'If you\\\'ve mastered Python\\\'s fundamentals, you\\\'re ready to start using it to get real work done. Programming Python will show you how, with in depth tutorials on the language\\\'s primary application domains: system administration, GUIs, and the Web.', '../web/51ovFaPaLjL._SX379_BO1,204,203,200_.jpg', 30),
('qsjdhluysq', 'Bags', 78, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur', '../web/N24513799A_1.jpg', 65),
('qsldioqs', 'Bags', 186, 'Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre soumises Ã  des droits d\\\'auteur.', '../web/death-note-desi-mervina-transparent.jpg', 70),
('qsliudgiqgsf', 'Bags', 169, 'Package included:1* Backpack (with a product manual)KWQ-Rainbow Cloud Novel Smart LED Backpack is a cool urban backpack, which appearance can be ', '../web/death-note-school-bag-883317_800x.jpg', 75),
('qsmidui', 'Pencil Bag', 136, 'Trousse Scolaire - BTS - PERSONA - Multifonction Pencil Case Kpop', '../web/1 (23).jpg', 6),
('qsncoiuh', 'Bags', 198, 'Backpacks Type:BackpackModel Number:noneMain Material:CanvasLining Material:PolyesterPattern Type:SolidRain Cover:NoHandle/Strap Type:Soft ...\\r\\n* Pour connaÃ®tre les derniers tarifs et la disponibilitÃ©, consultez le site Web. Les images peuvent Ãªtre s', '../web/1 (30).jpg', 65),
('qzbdia', 'Note book', 123, '120 pages\\r\\nCouverture 350 g/mÂ² ; papier 90 g/mÂ².\\r\\nImprimÃ© sur la couverture avant d\\\'une Å“uvre d\\\'un artiste indÃ©pendant.', '../web/4bc87bffb5a610ac8b3a097c754f0cd7_195x195@2x.jpg', 9),
('qzdhia', 'Note book', 156, '120 pages\\r\\nCouverture 350 g/mÂ² ; papier 90 g/mÂ².\\r\\nImprimÃ© sur la couverture avant d\\\'une Å“uvre d\\\'un artiste indÃ©pendant.', '../web/hunter-x-hunter-hisoka-anime-nabil-el-masni-transparent.jpg', 14),
('qzdiqz', 'Note book', 86, 'BN5704 Sketchbook Notepad Artist Sketch Drawing Design 120 Sheets Vintage Sketch Book Diary Drawing Notebook, Size:A5', '../web/note-book-be-a-goal-digger_1.jpg', 4),
('qzdizu', 'Note book', 321, 'B6 Retro PU Cover Notebook Diary Book with Password Lock(Black)', '../web/sn,x1000-pad,750x1000,f8f8f8.u1.jpg', 3),
('qzdjoaz', 'Note book', 123, 'Twelve Constellations Paper Notebook Student Simple Diary Notepad Sketch Graffiti Note Book(Random Pattern Delivery&#160:)&#160:', '../web/1 (28).jpg', 19),
('qzhdoa', 'Note book', 126, '\\\'Hunter X Hunter Chrollo Lucilfer Phantom Troupe Anime Manga', '../web/4f923a62a287dac0b613a3c796965f65.jpg', 10),
('qzudhz', 'Note book', 120, 'B6 Retro PU Cover Notebook Diary Book with Password Lock(Black)', '../web/1 (26).jpg', 4),
('sdlivisdv', 'Bags', 163, 'Cartable Manga - Backpack TOKYO GHOUL - For School - Sac Ã  Dos OTAKU - Bag Anime', '../web/1 (18).jpg', 18),
('tqsd', 'Books', 132, 'Ce livre s\\\'adresse aux dÃ©veloppeurs qui souhaitent lever la complexitÃ© apparente du framework Front End React pour rÃ©aliser des applications web et mobiles bien architecturÃ©es et aisÃ©es Ã  maintenir.', '../web/41ug1oSO1fL._SX401_BO1,204,203,200_.jpg', 32),
('tqts', 'Books', 69, 'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns ', '../web/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg', 17),
('uihd', 'Books', 87, 'Node.js is a powerful and popular new framework for writing scalable network programs using JavaScript. This no nonsense book begins with an overview of Node.js and then quickly dives into the code, core concepts, and APIs.', '../web/51Tw6y2BD+L._SX397_BO1,204,203,200_.jpg', 26),
('yuadgz', 'Books', 96, 'Beginning Node.js is your step-by-step guide to learning all the aspects of creating maintainable Node.js applications. You will see how Node.js is focused on creating high-performing, highly-scalable websites, and how easy it is to get started. Many fron', '../web/51pGfFio7cL._SX404_BO1,204,203,200_.jpg', 23),
('zkadhiaz', 'Note book', 152, '\\r\\nPaperchase | Paperchase Be Your Own Kind Of Beautiful', '../web/1e0f1d8ff4d3ae67befd0f3d15d26725.jpg', 17);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `password`) VALUES
('achrafazalmat2017@gmail.com', '$2y$10$9H94UnFGVR8UojDuDkjNHOKUyigisKMZ9q.KmNc6iWvW0Dp4hXJ/m'),
('n.zakaria123@gmail.com', '$2y$10$Am6y3HGnKQ/usK3Sh24HYO.ew5WD5CSZ23PMp3pfn./0aNfqL0pu.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
