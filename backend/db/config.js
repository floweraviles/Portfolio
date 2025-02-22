const pgp = require("pg-promise")();
const dotenv = require("dotenv");

dotenv.config();

const db = pgp({
    host: process.env.PG_HOST,
    post: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
});

db.connect()
.then(() => console.log("Connected PostgreSQL"))
.catch((error) => console.error("Database connections error:", error))

module.exports = db;

