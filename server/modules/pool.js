const Pool = require('pg').Pool;
const url = require('url');
let config;
//for Heroku pool
if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, 
        max: 10,
        idleTimeoutMillis: 12000, 
    };
//For Localhost pool
} else {
    config = {
        user: process.env.PG_USER || null,
        password: process.env.DATABASE_SECRET || null,
        host: process.env.DATABASE_SERVER || 'localhost',
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || 'pokedex',
        max: 10,
        idleTimeoutMillis: 30000,
    };
}

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('posgresql connected!');
});

pool.on('error', (err, client) => {
    console.log('Unexpected Error connecting to Postgresql', err);
    process.exit(-1);
});

module.exports = pool;