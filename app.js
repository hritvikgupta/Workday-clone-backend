const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { restrictToLoginUserOnly, checkAuth } = require('./middleware/auth');
require('dotenv').config();

//setting up the port 
const config = {
    origin: 'http://localhost:3000', // Ensure this is correct
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials:true
};
// const staticRoute = require('./routes/staticRoute')

//setting up the middleware
app.use(cors(config))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//setting up the routes
const routes = require('./routes/route')
const personalInfoSchema = require('./routes/personalInfoSchema')
const applicationsRoute = require('./routes/applicationsRoute')

app.use('/api', checkAuth, routes)
app.use('/resume-uploaded', restrictToLoginUserOnly, personalInfoSchema)
app.use('/resume-uploaded/applications', restrictToLoginUserOnly, applicationsRoute)
// app.use('/', staticRoute)

module.exports = app