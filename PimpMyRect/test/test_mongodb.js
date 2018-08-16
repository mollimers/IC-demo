"use strict";
exports.__esModule = true;
var mdb = require("../src/mdb");
var mdbHandler = new mdb.mdbHandler();
//post div data to mongodb
/* mdbHandler.post("30px", "30px", "green", "30px");
mdbHandler.post("20px", "20px", "red", "20px");
mdbHandler.post("10px", "10px", "blue", "10px");
mdbHandler.post("40px", "40px", "orange", "40px");
console.log("post"); */
//get div data from mongodb
/* mdbHandler.get_all();
console.log("get"); */
//delete div data in mongodb
mdbHandler["delete"]("orange");
mdbHandler["delete"]("red");
mdbHandler["delete"]("green");
