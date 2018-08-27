//requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

//Routers
const profileRouter = require('./router/profile.router')
const pokemonRouter = require('./router/pokemon.router');
const trainerRouter = require('./router/trainer.router')
//uses
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/pokemon',pokemonRouter);
app.use('/trainer', trainerRouter);
app.use('/profile',profileRouter);


app.listen(PORT,() =>{
    console.log('Server Spinning on port', PORT); 
});