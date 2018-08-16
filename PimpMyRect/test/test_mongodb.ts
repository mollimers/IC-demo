import * as mdb from '../src/mdb';
let mdbHandler = new mdb.mdbHandler();
 
//post div data to mongodb
mdbHandler.post("div_3", "30px", "30px", "green", "30px");
mdbHandler.post("div_2", "20px", "20px", "red", "20px");
mdbHandler.post("div_1", "10px", "10px", "blue", "10px");
mdbHandler.post("div_4", "40px", "40px", "orange", "40px");

//get div data from mongodb
mdbHandler.get_all();

//delete div data in mongodb
mdbHandler.delete("div_2");
mdbHandler.delete("div_3");
mdbHandler.delete("div_1");