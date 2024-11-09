const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgres://koyeb-adm:GFNrz8CnUP0x@ep-bold-flower-a2u9c5q2.eu-central-1.pg.koyeb.app/koyebdb",
    ssl: {
        rejectUnauthorized: false, // Allow insecure connections (not recommended for production)
    },
});

module.exports = pool;