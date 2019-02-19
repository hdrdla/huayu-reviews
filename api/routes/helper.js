require("dotenv").config();
const mysql = require("mysql");

module.exports = async function db(query) {

  const results = {
    data: [],
    error: null
  };
  let promise = await new Promise((resolve, reject) => {
    const DB_HOST = process.env.DB_HOST;
    const DB_USER = process.env.DB_USER;
    const DB_PASS = process.env.DB_PASS;
    const DB_NAME = process.env.DB_NAME;

    const con = mysql.createConnection({
      host: DB_HOST || "127.0.0.1",
      user: DB_USER || "root",
      password: DB_PASS,
      database: DB_NAME || "huayu",
      multipleStatements: true
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    
      con.query(query, function (err, result) {
        if (err) {
          results.error = err;
          console.log(err);
          resolve(results);
          con.end();
          return;
        }
                
        if (!result.length) {
          if (result.affectedRows === 0) {
            results.error = 'Action not complete';
          }

          // push the result (which should be an OkPacket) to data
          results.data.push(result); 
        } else if (result[0].constructor.name == 'RowDataPacket') {
          // push each row (RowDataPacket) to data   
          result.forEach(row => results.data.push(row)); 
        } else if (result[0].constructor.name == 'OkPacket') {
          // push the insertId if our initial query ends with SELECT LAST_INSERT_ID();
          results.data.push({insertId: result[0].insertId});
        }

        con.end();
        resolve(results);
      });
    });
  });

  return promise;
};
