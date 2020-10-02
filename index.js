const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'habits',
    secret: 'todo',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongo db okay');
        }
    ) 
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port, function(err){
    if (err){console.log(`Error in running the server: ${err}`)}
    console.log(`Server is up and running on port: ${port}`)
})

