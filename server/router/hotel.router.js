const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newPet = req.body
    const query = `INSERT INTO "pets" ("name", "type", "description", "checked_in", "owner_id")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [newPet.name, newPet.type, newPet.description, newPet.checked_in, newPet.owner_id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error POSTing New Pet', error);
            res.sendStatus(500);
        });
})

router.post('/',(req,res)=>{
    const newTrainer = req.body;
    const query = `INSERT INTO "trainer" ("name")
                    VALUES ($1);`;
    pool.query(query,[newTrainer.name])
    .then(()=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error POSTing new owner', error);
        res.sendStatus(500);
    });
});

module.exports = router;