/***********************************************************************
 * Module name: mdb
 * Author: David Gillberg
 * Purpose: Contains logic that allows a user to specify the parameters
 *              of an empty <div> element and then save it.
 * 
 * Functions:   div_height(id, size)
 *              div_width(id, size)
 *              div_color(id, color)
 *              div_border_radius(id, radius)
 *              save_div(id)
 *              no_enter(evt)
 ***********************************************************************/

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/devStorage";

export class mdbHandler {
    connect(){
        // connect to the mongodb instance that will hold the div-data
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("divdb");
            let divCol = db.listCollections();
            dbo.createCollection("divs", function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
                });
        });
    }

    insert_div(id, height, width, color, radius){
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("divdb");
            var newDiv = { _id: id, h: height, w: width, c: color, r: radius };
            dbo.collection("divs").insertOne(newDiv, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
    }
}