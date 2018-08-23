# pet-hotel

DataBase:

CREATE TABLE "pets" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25) not null,
	"type" VARCHAR(25) not null,
	"description" VARCHAR(120),
	"checked_in" BOOLEAN not null
	);
INSERT INTO "pets" ("name", "type", "description", "checked_in")
	VALUES ('Angus', 'Parrot' 'Rainbow Feathers/Talks a lot', true),
    ('Leon', 'Dog', 'Black Pointed Ears/Greatest Dog EVER', true ),
    ('Jenny', 'Alligator', 'Green scales/A whole Lotta Teeth',true),
    ('Jimbo', 'Dog', 'Brown Coat/Good Dog', true), 
    ('Mr. Mittens', 'Cat', 'Orange Tabby/Sharp Claws', true);