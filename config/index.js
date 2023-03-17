// ------------ DB CONFIGURATION ---------- //

require ("dotenv").config();
let { createPool } = require("mysql");
let connection = createPool({
    // Connection creation

    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    multipleStatements: true,
});

module.exports = connection;