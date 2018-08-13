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
 *              no_enter(evt)
 ***********************************************************************/
// TODO: when we have persistance implemented, this variable should be stored and read there
var divId = 0;
function div_height(id) {
    var heightInput = document.querySelector('#height');
    var size_string = heightInput.value.toString() + "px";
    document.getElementById(id).setAttribute("height", size_string);
    document.getElementById(id).style.height = size_string;
}
function div_width(id) {
    var widthInput = document.querySelector('#width');
    var size_string = widthInput.value.toString() + "px";
    document.getElementById(id).setAttribute("width", size_string);
    document.getElementById(id).style.width = size_string;
}
function div_color(id) {
    var color = document.querySelector('#myColor');
    var colorString = color.value;
    document.getElementById(id).setAttribute("background-color", colorString);
    document.getElementById(id).style.backgroundColor = colorString;
}
function div_border_radius(id) {
    // Get the current values of witdh, height and radius for the div
    var heightInput = document.querySelector('#height');
    var heightInt = parseInt(heightInput.value);
    var widthInput = document.querySelector('#width');
    var widthInt = parseInt(widthInput.value);
    var radSlider = document.querySelector('#radiusRange');
    // calculate one percentage of the total radius for the smallest side
    var maxRad = Math.min(heightInt, widthInt) / 200;
    // calculate the actual percentage of max rad the slider indicates
    var radInt = parseInt(radSlider.value) * maxRad;
    // convert it to valid input
    var radius_string = radInt + "px";
    // set the value
    document.getElementById(id).setAttribute("border-radius", radius_string);
    document.getElementById(id).style.borderRadius = radius_string;
}
function save_div() {
    var prevDivId = "div_" + divId;
    divId++; // increase the id variable
    // create a new div to add to the gallery
    var newDiv = document.createElement("div");
    // give the div an id, so that we can reference it further on
    var newDivId = newDiv.id = "div_" + divId;
    console.log("newDiv: " + newDiv);
    console.log("newDivId: " + newDivId);
    // add the newly created element to the DOM
    var previousDiv = document.querySelector('#div_0');
    var galleryDiv = document.querySelector('.divGallery');
    console.log("previousDiv: " + previousDiv);
    console.log("prevDivId: " + prevDivId);
    console.log("galleryDiv: " + galleryDiv);
    galleryDiv.appendChild(newDiv);
    //document.body.insertBefore(newDiv, previousDiv); 
    div_height(newDivId);
    div_width(newDivId);
    div_color(newDivId);
    div_border_radius(newDivId);
}
function no_enter(evt) {
    if (evt.keyCode == 13) {
        return false;
    }
}
