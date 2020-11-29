const express = require('express');
const config = require('config');
var bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;
const dbHandle = require('./database/connection');

async function start(){
    try{
    }catch(e){
        console.log(`Server Error: `, e.message);
        process.exit(1);
    }
}

start();

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}`);
    const query = "SELECT * FROM users";
    dbHandle.query(query, (err, result, field) => {
        console.log(err);
        console.log(result);
    });
});