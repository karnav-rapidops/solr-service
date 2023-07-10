const config = {

    cockroach: {
        host: 'localhost',
        user: 'max',
        password: 'cockroach',
        port: 26257,
        database: 'language',
        ssl:{
            rejectUnauthorized: false
        }
    }
}

module.exports = config;