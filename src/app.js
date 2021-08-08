const express= require('express')
const app = express();
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

// Routes
app.use(require('./routes/index.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));




module.exports=app