const router = require('express').Router();
const pool = require('../modules/pool');

//all pokemon :currently unused 
router.get('/', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon";`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});
//get pokemon by kanto region
router.get('/kanto', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Kanto' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by Kanto', error);
        res.sendStatus(500);
    });
});
//gets pokemon by johto region
router.get('/johto', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Johto' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by johto', error);
        res.sendStatus(500);
    });
});
//gets pokemon by Hoenn region
router.get('/hoenn', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Hoenn' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by hoenn', error);
        res.sendStatus(500);
    });
});


module.exports = router;