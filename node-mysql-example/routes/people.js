const express = require("express");
const Router = express.Router();
const pool = require("../connection");

Router.get("/",(req,res) => {
    pool.getConnection(function(err,connection) {
        if(err){
            console.log("entered into error");
        return res.json(err);
        }

        connection.query("select * from people",(err,results)=>{
            if (err)
         return res.json(err);
       return res.json(results);
        });
    });
    // mysqlConnection.query("select * from people", (err, rows,fields) => {
    //    if(!err){
    //        res.send(rows);
    //    }
    //    else{
    //        console.log(err);
    //        res.send(err);
    //    }
    // })
   });

module.exports = Router; 