const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "airplanes-api.c1h1sdcooewq.us-east-1.rds.amazonaws.com",
  password:'nebulanebula',
  database: "airplanes",
  port: 5432
})       

module.exports = () => pool;