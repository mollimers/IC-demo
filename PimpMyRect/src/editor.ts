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

export class Editor {
    div_height: (id: string, size: number) => void =
    function div_height(id, size) {
        let size_string: string = id.toString() + "px";
        document.getElementById(id).style.height = size_string;
    }

    div_width: (id: string, size: number) => void =
    function div_width(id, size) {
        let size_string: string = id.toString() + "px";
        document.getElementById(id).style.width = size_string;
    }

    div_color: (id: string, color: string) => void =
    function div_color(id, color){
    }

    div_border_radius: (id: string, radius: number) => void =
    function div_border_radius(id, radius){
    }
    
    save_div: (id: string) => void =
    function save_div(id){
    }
}