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
INSERT INTO users (username, email, password, role) VALUES ('lara', 'lara@tomi.hu', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'USER');

INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Alley Cat', 1, 1, 1, 'Battlecry: Summon a 1/1 Cat.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2016/11/alleycat.png', 'Hunter');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Arcane Intellect', 3, null, null, 'Draw 2 cards.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2014/03/arcane-intellect.png', 'Mage');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Aya Blackpaw ', 6, 5, 3, 'Battlecry and Deathrattle: Summon a Jade Golem.', 'https://www.hearthstonetopdecks.com/wp-content/uploads/2016/11/aya-blackpaw-1.png', null);
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Shirvallah, the Tiger ', 25, 7, 5, 'Battlecry: Costs (1) less for each Mana you''ve spent on spells.', 'https://media.hearthpwn.com/avatars/420/149/90145.png', 'Paladin');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Bloodreaver Guldan', 10, null, 5, 'Battlecry: Summon all friendly Demons that died this game.', 'https://media.hearthpwn.com/avatars/423/184/62934.png', 'Warlock');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Sleepy Dragon', 9, 4, 12, 'Taunt', 'https://media.hearthpwn.com/avatars/416/891/76980.png', null);
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Bloodworm', 5, 4, 4, 'Lifesteal', 'https://media.hearthpwn.com/avatars/415/184/62933.png', null);
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Ancient of War', 7, 5, 5, 'Choose One - +5 Attack; or +5 Health and Taunt.', 'https://media.hearthpwn.com/avatars/411/878/242.png', 'Druid');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Archbishop Benedictus', 7, 4, 6, 'Battlecry: Shuffle a copy of your opponent''s deck into your deck.', 'https://media.hearthpwn.com/avatars/414/848/62856.png', 'Priest');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Archmage Antonidas', 7, 5, 7, 'Whenever you cast a spell, add a ''Fireball'' spell to your hand.', 'https://media.hearthpwn.com/avatars/423/62/220.png', 'Mage');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Vanish', 6, null, null, 'Return all minions to their owner''s hand.', 'https://media.hearthpwn.com/avatars/418/154/658.png', 'Rogue');
INSERT INTO cards (name, mana, damage, hp, description, imgsrc, class) VALUES ('Prince Keleseth', 2, 2, 2, 'Battlecry: If your deck has no 2-Cost cards, give all minions in your deck +1/+1.', 'https://media.hearthpwn.com/avatars/415/145/58723.png', null);

INSERT INTO decks (cardid) VALUES ([2,3,7,8,6]);
INSERT INTO decks (cardid) VALUES ([1,2,9,5,11,10]);
INSERT INTO decks (cardid) VALUES ([4,5,9,10,2]);

/*
INSERT INTO userdecks (uid, deckid) VALUES (1,2);
INSERT INTO userdecks (uid, deckid) VALUES (2,1);
*/
