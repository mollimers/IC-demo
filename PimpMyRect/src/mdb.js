"use strict";
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
exports.__esModule = true;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/devStorage";
var mdbHandler = /** @class */ (function () {
    function mdbHandler() {
    }
    mdbHandler.prototype.get = function (id) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err)
                throw err;
            var dbo = db.db("divdb");
            dbo.collection("divs").findOne({ _id: id }, function (err, result) {
                if (err)
                    throw err;
                console.log("Get document with id " + id + " from db");
                console.log("Find-result: ");
                console.log(result);
                db.close();
                return result;
            });
        });
    };
    mdbHandler.prototype.post = function (id, height, width, color, radius) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err)
                throw err;
            var dbo = db.db("divdb");
            dbo.collection("divs").findOne({ _id: id }, function (err, result) {
                if (err)
                    throw err;
                if (result == null) {
                    var newDiv = { _id: id, h: height, w: width, c: color, r: radius };
                    dbo.collection("divs").insertOne(newDiv, function (err, res) {
                        if (err)
                            throw err;
                        console.log("Document with id " + id + " inserted");
                    });
                }
                else {
                    console.log("Document with id " + id + " already exists in the collection.");
                }
                db.close();
            });
        });
    };
    mdbHandler.prototype["delete"] = function (id) {
        MongoClient.connect(url, function (err, db) {
            if (err)
                throw err;
            var dbo = db.db("divdb");
            var myquery = { _id: id };
            dbo.collection("divs").deleteOne(myquery, function (err, obj) {
                if (err)
                    throw err;
                console.log("Document with id " + id + " deleted");
                db.close();
            });
        });
    };
    return mdbHandler;
}());
exports.mdbHandler = mdbHandler;
