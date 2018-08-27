const router = require('express').Router();
const pool = require('../modules/pool');

//Route for addNewTrainer()
router.post('/new', (req, res) => {
    const newTrainer = req.body;
    const query = `INSERT INTO "trainer" ("name")
                    VALUES ($1);`;
    pool.query(query, [newTrainer.name])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error POSTing new owner', error);
            res.sendStatus(500);
        });
});
//post new catches
router.post('/', (req, res) => {
    const newCatch = req.body;
    const query = `INSERT INTO "caught_poke" ("trainer_num","poke_num")
                    VALUES ($1 , $2);`;
    console.log(newCatch);

    pool.query(query, [newCatch.trainer_num, newCatch.poke_num])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error POSTing new owner', error);
            res.sendStatus(500);
        });
});

//Route for getTrainerList()
router.get('/', (req, res) => {
    console.log('GET Route');
    const query = `SELECT * FROM "trainer";`;
    pool.query(query).then(results => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});
//get pokedex info
router.get('/pokedex', (req, res) => {
    console.log('GET Route');
    const query = `SELECT * FROM "trainer" 
                    JOIN "caught_poke" 
                    on "trainer"."id" = "caught_poke"."trainer_num"
                    JOIN "pokemon" 
                    on "pokemon"."poke_id" = "caught_poke"."poke_num";`;
    pool.query(query).then(results => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});

//delete pokedex entry
router.delete('/remove/:id/:poke', function (req, res) {
    const entry = req.params.id;
    const entry2 = req.params.poke;
    const query = `DELETE FROM "caught_poke" WHERE "trainer_num" = $1 AND "poke_num" = $2;`;
    pool.query(query, [entry, entry2]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
module.exports = router;