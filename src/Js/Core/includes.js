import $ from "jquery"

function Loadincludes (parent){
    
    if(!parent ) parent = "body"

    $(parent).find('[wm-include]').each(function(i ,e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')
                Loadincludes(e)
            }
        })
    })

}

Loadincludes()