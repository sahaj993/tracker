const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/',require('./routes'));

app.listen(port, function(err){
    if (err){console.log(`Error in running the server: ${err}`)}
    console.log(`Server is up and running on port: ${port}`)
})

