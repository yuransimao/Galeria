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
    $('[wm-RemoveView]').each(

        function(i, e){
            $(this).on('click', function () {
                $('[wm-bla]').removeClass('actives')
            })
        }
    )
}



onloadSucessgaleyView(Calview,RemoveView )



