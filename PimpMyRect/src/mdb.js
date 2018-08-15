"use strict";
exports.__esModule = true;
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
var url = "mongodb://localhost:27017/devStorage";
var mgs = require('mongoose');
var divs = require('../src/database/models/divs');
var mdbHandler = /** @class */ (function () {
    function mdbHandler() {
    }
    mdbHandler.prototype.get_all = function () {
        mgs.connect(url);
        divs.find({}, function (err, divs) {
            if (err != null) {
                console.log("Error finding entries: " + err);
            }
            else {
                console.log("Divs found: " + divs);
            }
        });
    };
    mdbHandler.prototype.post = function (height, width, color, radius) {
        mgs.connect(url);
        divs.create({
            height: height,
            width: width,
            color: color,
            radius: radius
        }, function (err, div) {
            if (err != null) {
                console.log("Error in creating entry: " + err);
            }
            else {
                console.log("Entry created. Color: " + color);
            }
        });
    };
    mdbHandler.prototype["delete"] = function (id) {
        mgs.connect(url);
        divs.deleteOne({ _id: id }, function (err) {
            if (err != null) {
                console.log("Error in creating entry: " + err);
            }
            else {
                console.log("Entry deleted");
            }
        });
    };
    return mdbHandler;
}());
exports.mdbHandler = mdbHandler;
