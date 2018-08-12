/***********************************************************************
 * Module name: Editor
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
function div_height(id, size) {
    var size_string = size.toString() + "px";
    document.getElementById(id).setAttribute("height", size_string);
    document.getElementById(id).style.height = size_string;
}
function div_width(id, size) {
    var size_string = size.toString() + "px";
    document.getElementById(id).setAttribute("width", size_string);
    document.getElementById(id).style.width = size_string;
}
function div_color(id, color) {
    document.getElementById(id).setAttribute("background-color", color);
    document.getElementById(id).style.backgroundColor = color;
}
function div_border_radius(id, radius) {
    var radius_string = radius.toString() + "px";
    document.getElementById(id).setAttribute("border-radius", radius_string);
    document.getElementById(id).style.borderRadius = radius_string;
}
function save_div(id) {
}
