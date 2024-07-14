const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"msl",
    password:"S@bb!r121314",
    port: 5432,
})

module.exports = pool;