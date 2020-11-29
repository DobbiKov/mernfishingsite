const config = require('config');
const DBCONF = config.get('dbConnection');

module.exports = {
    host: DBCONF.host,
    user: DBCONF.user,
    database: DBCONF.database,
    password: DBCONF.password
};