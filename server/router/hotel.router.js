const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * FROM "pets"`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});

router.get('/combo',(req,res)=>{
    console.log('GET combo');
    const query = `SELECT "owners"."name_first", "owners"."name_last","pets"."name" 
                    From "owners" JOIN "pets"
                    ON "owners"."id" = "pets"."owner_id";`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting Combo', error);
        res.sendStatus(500);
    });
});

module.exports = router;