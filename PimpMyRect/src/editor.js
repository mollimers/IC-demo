"use strict";
/***********************************************************************
 * Class name: Editor
 * Author: David Gillberg
 * Purpose: Contains logic that allows a user to specify the parameters
 *              of an empty <div> element and then save it.
 *
 * Functions:   div_height(id, size)
 *              div_width(id, size)
 *              div_color(id, color)
 *              div_border_radius(id, radius)
 *              save_div(id)
 ***********************************************************************/
exports.__esModule = true;
var Editor = /** @class */ (function () {
    function Editor() {
        this.div_height = function div_height(id, size) {
            var size_string = id.toString() + "px";
            document.getElementById(id).style.height = size_string;
        };
        this.div_width = function div_width(id, size) {
            var size_string = id.toString() + "px";
            document.getElementById(id).style.width = size_string;
        };
        this.div_color = function div_color(id, color) {
        };
        this.div_border_radius = function div_border_radius(id, radius) {
        };
        this.save_div = function save_div(id) {
        };
    }
    return Editor;
}());
exports.Editor = Editor;
