import $ from "jquery"

import {onloadSucessgaleyView} from "../Core/includes"

function Calview (){
    
    $('[wm-view]').each(function(i, e){
    $(this).on('click', function(){
        $('[wm-bla]').addClass('actives')

        console.log('ok')
    })
})}


function RemoveView(){
    $('[wm-RemoveView]')
}



onloadSucessgaleyView(
    Calview
 )



