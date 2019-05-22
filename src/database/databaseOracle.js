var oracledb = require('oracledb');

connection = oracledb.getConnection({
  user          : "loj",
  password      :  "lojusr",
  connectString : "TST"
});

module.exports = connection;

