// NMPs
const axios = require('axios');
const { Pool } = require('pg');

const config = require('../config/backend-config/development')

// Cockroach connection 
const pool = new Pool({
    host: config.cockroach.host,
    user: config.cockroach.user,
    password: config.cockroach.password,
    port: config.cockroach.port,
    database: config.cockroach.database,
    ssl: {
        rejectUnauthorized: false
    }
    // ssl: false,
})


// dbMethod maker functions 
const makeUserDbMethods = require('./user');
const makeCollectionDbMethods = require('./collection');

// Exceptions
const { databaseError } = require('../exceptions')

const userDbMethods = makeUserDbMethods({
    axios,
    databaseError,
});
const collectionDbMethods = makeCollectionDbMethods({
    pool,
    databaseError,
})


module.exports = Object.freeze({
    userDbMethods,
    collectionDbMethods,
})