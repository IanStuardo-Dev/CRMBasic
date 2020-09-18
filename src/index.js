const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebar');
const methodOverride = require('method-override');
const session = require('express-session');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT | 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.
//Global Variables

//Routes

//Static Files

// Server listenning
app.listen(app.get('port'),() =>{
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
})