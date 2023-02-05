import $ from "jquery"

const Onloadgalery = []

export function onloadSucessgaleyView(Callbacks){
    if(!Onloadgalery.includes(Callbacks)){
        Onloadgalery.push(Callbacks)
    }
}

function Loadincludes (parent){
    
    if(!parent ) parent = "body"

    $(parent).find('[wm-include]').each(function(i ,e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                console.log(data)
                $(e).removeAttr('wm-include')
                Loadincludes(e)

                Onloadgalery.forEach(calbacks => calbacks(data))
            }
        })
    })

}

Loadincludes()