const router = require('express').Router();
const pool = require('../modules/pool');

//gets pokemon by indicated trainer
router.get('/pokemon/:id', (req, res) => {
    const trainerProfile = req.params.id
    console.log('GET Route poke');
    const query = `SELECT * FROM "trainer" 
                    JOIN "caught_poke" 
                    on "trainer"."id" = "caught_poke"."trainer_num"
                    JOIN "pokemon" 
                    on "pokemon"."poke_id" = "caught_poke"."poke_num"
                    WHERE "trainer"."id" = $1;`;
    pool.query(query, [trainerProfile]).then(results => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});
//gets badges by indicated trainer
router.get('/badges/:id', (req, res) => {
    const trainerBadges = req.params.id
    console.log('GET Route badges');
    const query = `SELECT * FROM "trainer" 
                    JOIN "earned_badges" 
                    on "trainer"."id" = "earned_badges"."trainer_num"
                    JOIN "poke_badge" 
                    on "poke_badge"."id_badge" = "earned_badges"."badge_num"
                    WHERE "trainer"."id" = $1;`;
    pool.query(query, [trainerBadges]).then(results => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});


module.exports = router;