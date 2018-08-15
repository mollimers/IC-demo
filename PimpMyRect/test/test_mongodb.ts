import * as mdb from '../src/mdb';
let mdbHandler = new mdb.mdbHandler();
 
//const mongoose_test = require('mongoose');
//const mdb = require('../src/mdb');
//const Divs = require('../src/database/models/divs');

// mongoose tests
/* mongoose_test.connect('mongodb://localhost/test_divdb');
Divs.create({
    height: '20px',
    width: '20px',
    color: 'blue',
    radius: '20px'
}, (err, div) => {
    console.log(err, div);
}); */

//post div data to mongodb
/* mdbHandler.post("30px", "30px", "green", "30px");
mdbHandler.post("20px", "20px", "red", "20px");
mdbHandler.post("10px", "10px", "blue", "10px");
mdbHandler.post("40px", "40px", "orange", "40px"); */

mdbHandler.get_all();

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