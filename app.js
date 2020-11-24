//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const {check,validationResult} = require('express-validator');
const cookieParser 		= require('cookie-parser');
const upload 		= require('express-fileupload');
const flash            = require('connect-flash');
const forgotpassword		= require('./controllers/forgotpassword');
const admin				= require('./controllers/adminController');
const login				= require('./controllers/login');
const logout				= require('./controllers/logout');
//const url             = require('url');
const fs						= require('fs');
//const explayouts				= require('express-ejs-layouts');



const app				= express();
const port				= 3000;
//const $  				= require('jquery');
const path				= require('path');

//configuration
app.set('view engine', 'ejs');
//app.use(explayouts);

//const urlencodedParser = bodyParser.urlencoded({extended:false});

//middleware
app.use(upload());
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
app.use(flash());
app.use('/login', login);
app.use('/forgotpassword',forgotpassword);
app.use('/admin', admin);
app.use('/logout',logout);


//app.use('/admin', admin);



//app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));  
//app.use(express.static(path.join(__dirname+'/public'))); 

//app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));

//router
app.get('/', (req, res)=>{
	res.send('Welcome');
    res.redirect('/home');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});