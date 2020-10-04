const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(require('./routes/users')); 

const publicPath = path.resolve('views', path.join(__dirname, 'views'));
app.use( express.static(publicPath) );
app.set('view engine', 'ejs');


module.exports = app;