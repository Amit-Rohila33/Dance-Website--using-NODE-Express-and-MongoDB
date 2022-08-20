<============================== Commands to initiate =================================================>

1) Create a general file app.js and paste the following lines to it.

            const express = require("express");
            const { Server } = require("http");
            const path = require("path")
            const app = express();
            const fs = require("fs")
            const port = 80;


2) Commands to initiate pub:-

npm install express --save  ---------> (1)
npm init                    ---------> (2)
npm install express         ---------> (3)
npm install pug             ---------> (4)

Note:- shortcut way to install npm modules is "npm i <whatever>"


3) Create two folders "Static" and "views" :- 

    (i) Add a file index.js to statics.
    (ii) Paste the following lines of codes to app.js.

        // EXPRESS SPECIFIC STUFF
        app.use('/static', express.static('static'));// For serving the static files
        app.use(express.urlencoded());

        // PUG SPECIFIC STUFF
        app.set("view engine", 'pug');// Set the template engine as pug
        app.set('views', path.join(__dirname, 'views'))

        //Endpoints
        app.get('/', (req, res) => {
        const con = "He is the best"
        const params = { "title": "Messi", "content": con };
        res.status(200).render("index.pug", params)
        });


        // START THE SERVER
        app.listen(port, () => {
        console.log(`THe application has successfully started on port ${port}`);
        })


4) npm install nodeman --globally (npm i nodeman -g)

// TO RUN THE SERVER
5) nodemon ./app.js(just tap the tab)
    
    
