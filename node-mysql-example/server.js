
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRouter = require("./routes/people");
var app = express();
app.use(bodyParser.json());

app.use("/people",PeopleRouter);



app.listen(3000);