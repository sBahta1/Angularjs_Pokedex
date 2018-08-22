//requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

//uses
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(PORT,() =>{
    console.log('Server Spinning on port', PORT); 
});