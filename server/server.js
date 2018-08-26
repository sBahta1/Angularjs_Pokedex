//requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
//const Pokedex = require('pokedex-promise-v2');
//const P = new Pokedex();
//Routers
const hotelRouter = require('./router/hotel.router');
const pokemonRouter = require('./router/pokemon.router');
const trainerRouter = require('./router/trainer.router')
//uses
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/hotel',hotelRouter);
app.use('/pokemon',pokemonRouter);
app.use('/trainer', trainerRouter);



app.listen(PORT,() =>{
    console.log('Server Spinning on port', PORT); 
});