/*
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
  check (role in ('user', 'admin'))
);

CREATE TABLE cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  mana INT NOT NULL,
  damage INT,
  hp INT,
  description VARCHAR(250),
  imgsrc VARBINARY(MAX) NOT NULL,
  class VARCHAR(250)
);

CREATE TABLE decks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cardid ARRAY
);

CREATE TABLE userdecks(
  uid INT NOT NULL,
  deckid INT NOT NULL
); */


INSERT INTO users (username, email, password, role) VALUES ('admin', 'admin@admin.hu', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ADMIN');
INSERT INTO users (username, email, password, role) VALUES ('zek', 'zek@zek.hu', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'USER');

INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Alley Cat', 1, 1, 1, 'Battlecry: Summon a 1/1 Cat.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2016/11/alleycat.png', 'Hunter');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Arcane Intellect', 3, null, null, 'Draw 2 cards.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2014/03/arcane-intellect.png', 'Mage');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Aya Blackpaw ', 6, 5, 3, 'Battlecry and Deathrattle: Summon a Jade Golem.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2016/11/aya-blackpaw-1.png', null);

INSERT INTO decks (cardid) VALUES ([2,3]);
INSERT INTO decks (cardid) VALUES ([1,2]);

INSERT INTO userdecks (uid, deckid) VALUES (1,2);
INSERT INTO userdecks (uid, deckid) VALUES (2,1);
