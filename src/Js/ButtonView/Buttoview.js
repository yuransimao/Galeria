import $, { each } from "jquery"

import {onloadSucessgaleyView} from "../Core/includes"

function Calview (){
    
    $('[wm-view1]').on('click', function(){
        $('[wm-bla]').addClass('actives')

        console.log('ok')
    })
    
    $('[wm-view2]').on('click', function(){
        $('[wm-bla2]').addClass('actives')

        console.log('ok')
    })
}


function RemoveView(){
$('[wm-RemoveView]').each(

function(i, e){
$(this).on('click', function () {
$(['[wm-bla]','[wm-bla2]']).each(function(i, e){
$(e).removeClass('actives')})
})
}
)
}



onloadSucessgaleyView(Calview,RemoveView )



