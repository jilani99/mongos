const express=require('express');
const { default: mongoose } = require('mongoose');
const app = express()

//connexion with server
const mongUri="mongodb+srv://Amina123:Amina123@cluster0.vm75m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//parse the data
app.use(express.json())

//import the Routes
app.use('/person', require('./Routes/foodRoutes'))

mongoose.connect( mongUri, (err) => { err? console.log(err) : console.log("Database is connected")})


const port = 5000;

app.listen( port, (err) => { err? console.log(err) : console.log("Server is running")});


