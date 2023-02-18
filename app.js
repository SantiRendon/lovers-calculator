const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

//* motor de vistas EJS 
app.set('view engine','ejs');

//* archivos staticos de la pagina
app.use('/assets',express.static(__dirname + '/public'));

app.get('/',require('./router'));


app.listen(process.env.PORT, () => {
    console.log(`ejecutando en el http://localhost:${process.env.PORT}`)
});