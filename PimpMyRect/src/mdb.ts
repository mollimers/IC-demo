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
let url = "mongodb://localhost:27017/devStorage";
const mgs = require('mongoose');
const divs = require('../src/database/models/divs');
const express = require('express');
const app = new express();

export class mdbHandler {
    get_all(){
        mgs.connect(url);
        divs.find({}, (err, divs) => {
            if ( err != null ) {
                console.log("Error finding entries: " + err);
            }
            else {
                console.log("Divs found: " + divs);
            }
        })
    }
    
    post(height, width, color, radius) {
        mgs.connect(url);
        divs.create({
            height: height,
            width: width,
            color: color,
            radius: radius
        }, (err, div) => {
            if ( err != null ){
                console.log("Error in creating entry: " + err);
            }
            else {
                console.log("Entry created. Color: " + color);
            }
        })
    }

    delete(id) {
        mgs.connect(url);
        divs.deleteOne({ _id: id }, (err) => {
            if ( err != null ){
                console.log("Error in creating entry: " + err);
            }
            else {
                console.log("Entry deleted");
            }
        })
    }
}