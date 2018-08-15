import * as mdb from '../src/mdb';
let mdbHandler = new mdb.mdbHandler();

//post div data to mongodb
mdbHandler.post("div_3", "30px", "30px", "green", "30px");
mdbHandler.post("div_2", "20px", "20px", "red", "20px");
mdbHandler.post("div_1", "10px", "10px", "blue", "10px");
mdbHandler.post("div_4", "40px", "40px", "orange", "460px");

//get div data from mongodb
/* let res = mdbHandler.get("div_1");
console.log("The return value from 1: " + res);
res = mdbHandler.get("div_2");
console.log("The return value from 2: " + res);
res = mdbHandler.get("div_3");
console.log("The return value from 3: " + res);
res = mdbHandler.get("div_4");
console.log("The return value from 4: " + res); */

//delete div data in mongodb
/* mdbHandler.delete("div_2");
mdbHandler.delete("div_3");
mdbHandler.delete("div_1"); */