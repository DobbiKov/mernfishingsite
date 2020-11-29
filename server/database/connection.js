const mysql = require('mysql');
const DBCONF = require('./dbConfig');

const DBCONFIG = {
    host: DBCONF.host,
    user: DBCONF.user,
    database: DBCONF.database,
    password: DBCONF.password
};

const dbHandle = mysql.createConnection(DBCONFIG);

dbHandle.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('DataBase has been connecting...');
    }
})

module.exports = dbHandle;