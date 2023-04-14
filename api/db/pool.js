const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "containers-us-west-137.railway.app",
  password:'0zcqleJbblkd2o0Sbkmm',
  database: "airplanes",
  port: 6662
})       

module.exports = () => pool;