const mysql = require("mysql");

// var mysqlConnection = mysql.createConnection({
//     host:"localhost:3306",
//     user:"root",
//     password:"Vo0xFlDeauPqbeY5",
//     database:"nodesqltuto",
//     multipleStatements:true
// });

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    port:3306,
    password: 'Vo0xFlDeauPqbeY5',
    database: 'nodesqltuto',
    debug: true
});

// mysqlConnection.connect((err) => {
//     if(!err){
//         console.log("connection with sql db failed");
//     }
//     else{
//         console.log("connection with sql db success");
//     }
// });

module.exports = pool;