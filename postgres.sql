DataBase:

CREATE TABLE "pets" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25) NOT NULL,
	"type" VARCHAR(30) NOT NULL,
	"description" VARCHAR (120),
	"checked_in" BOOLEAN NOT NULL,
	"owner_id" INT REFERENCES "owners"
	);

INSERT INTO "pets" ("name", "type", "description", "checked_in", "owner_id")
    VALUES ('Angus', 'Parrot', 'Rainbow Feathers/Talks a lot', true, 1),
    ('Leon', 'Dog', 'Black Pointed Ears/Greatest Dog EVER', true, 3),
    ('Jenny', 'Alligator', 'Green scales/A whole Lotta Teeth',true, 2),
    ('Jimbo', 'Dog', 'Brown Coat/Good Dog', true, 2), 
    ('Mr. Mittens', 'Cat', 'Orange Tabby/Sharp Claws', true, 1);
	('Cinnamon', 'Dog', 'Cute/Rescue', true, 4),
    ('Toulouse', 'Dog', 'Small Chihuahua', true, 4),
    ('Sirius', 'Dog', 'Curly Brown Coat/Poodle mix',true, 4),
    ('Coco', 'Dog', 'Brown Coat/Sweet Dog', true, 4), 
    ('Fawkes', 'Dog', 'Looks Like A Fox', true, 4),
    ('Pignoli', 'Dog', 'Floppy Ears/Chihuahua', false, 4),
    ('Myron', 'Dog', 'Sweet/ Timid', true, 4),
    ('Lafayette', 'Dog', 'Sleepy Hound Dog', false, 4);

	CREATE TABLE "owners" (
	"id" SERIAL PRIMARY KEY,
	"name_first" VARCHAR(25) not null,
	"name_last" VARCHAR(30)not null
	);
	INSERT INTO "owners" ("name_first", "name_last")
 	VALUES ('Tina', 'Stewart'), ('Larry', 'Berry'), ('Sam','Bahta'), ('Ariana', 'Grande');



CREATE TABLE "poke_badge" (
	"id_badge" SERIAL PRIMARY KEY,
	"name_badge" VARCHAR(50),
	"gym" VARCHAR(50),
	"gym_leader" VARCHAR(50),
	"region" VARCHAR(50),
	"badge_img"VARCHAR(50)
);
INSERT INTO "poke_badge" ("name_badge", "gym", "gym_leader", "region", "badge_img")
VALUES ('Boulder Badge', 'Pewter City Gym', 'Brock', 'Kanto', 'boulderBadge.png'),
	('Cascade Badge', 'Cerulean City Gym', 'Misty', 'Kanto','cascadeBadge.png'),
	('Thunder Badge', 'Vermillion City Gym', 'Lt. Surge', 'Kanto', 'thunderBadge.png'),
	('Rainbow Badge', 'Celadon City Gym', 'Erika', 'Kanto', 'rainbowBadge.png'),
	('Soul Badge', 'Fuchsia City Gym', 'Koga', 'Kanto', 'soulBadge.png'),
	('Marsh Badge', 'Saffron City Gym', 'Sabrina', 'Kanto', 'marshBadge.png'),
	('Volcano Badge', 'Cinnabar Island Gym', 'Blaine', 'Kanto', 'volcanoBadge.png'),
	('Earth Badge', 'Viridian City Gym', 'Giovanni', 'Kanto', 'earthBadge.png');

CREATE TABLE "trainer" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50)
);
INSERT INTO "trainer" ("name")
VALUES ('Sam'),('Ash'), ('Blue');

CREATE TABLE "earned_badges" (
	"trainer_num" INT REFERENCES "trainer",
	"badge_num" INT REFERENCES "poke_badge"
);
INSERT INTO "earned_badges" ("trainer_num","badge_num")
VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,1),(2,2),(2,3),(2,7),(2,6),(3,1),(3,4),(3,5),(3,7);