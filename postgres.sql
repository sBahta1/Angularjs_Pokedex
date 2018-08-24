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