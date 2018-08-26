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
	
	
	this is the Chrome extention used as a workaround for CORS - 
		"No 'Access-Control-Allow-Origin' header is present on the requested resource" error. 
	https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US