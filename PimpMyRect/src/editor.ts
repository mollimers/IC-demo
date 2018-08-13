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

    function div_height(id){ //, size) {
        var heightInput = document.querySelector('#height') as HTMLInputElement;
        let size_string: string = heightInput.value.toString() + "px";
        document.getElementById(id).setAttribute("height", size_string);
        document.getElementById(id).style.height = size_string;
    }

    function div_width(id){//, size) {
        var widthInput = document.querySelector('#width') as HTMLInputElement;
        let size_string: string = widthInput.value.toString() + "px";
        document.getElementById(id).setAttribute("width", size_string);
        document.getElementById(id).style.width = size_string;
    }

    function div_color(id, color){
        document.getElementById(id).setAttribute("background-color", color);
        document.getElementById(id).style.backgroundColor = color;
    }

    function div_border_radius(id){
        // Get the current values of witdh, height and radius for the div
        let heightInput: HTMLInputElement = document.querySelector('#height');
        let heightInt: number = parseInt(heightInput.value);
        let widthInput: HTMLInputElement = document.querySelector('#width');
        let widthInt: number = parseInt(widthInput.value);        
        let radSlider: HTMLInputElement = document.querySelector('#radiusRange');
        // calculate one percentage of the total radius for the smallest side
        var maxRad = Math.min(heightInt, widthInt) / 200;
        // calculate the actual percentage of max rad the slider indicates
        let radInt: number = parseInt(radSlider.value) * maxRad;
        // convert it to valid input
        let radius_string: string = radInt + "px";
        // set the value
        document.getElementById(id).setAttribute("border-radius", radius_string);
        document.getElementById(id).style.borderRadius = radius_string;
    }
    
    function save_div(id){
        div_height("div_1");
        div_width("div_1");
        div_color("div_1", "lightblue");
        div_border_radius("div_1");
    }