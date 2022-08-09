const express = require("express");
const { Server } = require("http");
const path = require("path")
const app = express();
const bodyparser = require("body-parser")
const fs = require("fs")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Contact_Dance');


const port = process.env.PORT || 9100

// Define mongoose schema

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
    
  });

  const Contact = mongoose.model('contact', contactSchema);



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// For serving the static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

//Endpoints
app.get('/', (req, res) => {
    res.status(200).render("home.pug")
});

app.get('/about', (req, res) => {
    res.status(200).render("about.pug")
});

app.get('/contact', (req, res) => {
    res.status(200).render("contact.pug")
});

// Endpoints: Posting the form


app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been send to the database")
     }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
     });
    // res.status(200).render("contact.pug")
});


// START THE SERVER
app.listen(port, () => {
    console.log(`THe application has successfully started on port ${port}`);
})

