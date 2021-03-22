//path used to help dotenv locate the .env file with an explicit path
const path = require('path');

//dotenv used to access .env file data in a secure way
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});

//express used for accessing APIs using get/put/post/delete
const express = require('express');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//massive used for querying a database with SQL
const massive = require('massive');

//controller functions for the endpoints
const productsCtrl = require ('./../controllers/products_controller');


//establish connection to my database
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}, {scripts: './../db'})
.then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, ()=> {
        console.log(`Running on port ${SERVER_PORT}`);
    });
})
.catch(err=>console.log(err));

//begin server endpoint code
app.use(express.json());

//get single product
app.get('/api/products/:id', productsCtrl.getOne);

//get all products
app.get('/api/products/', productsCtrl.getAll);

//update one product
app.put('/api/products/:id', productsCtrl.update);

//create one product
app.post('/api/products/', productsCtrl.create);

//delete one product
app.delete('/api/products/:id', productsCtrl.delete);
