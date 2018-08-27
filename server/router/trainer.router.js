const router = require('express').Router();
const pool = require('../modules/pool');

//Route for addNewTrainer()
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


//Route for getTrainerList()
router.get('/', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * FROM "trainer";`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});
module.exports = router;