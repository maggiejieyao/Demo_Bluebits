$(document).ready(function() {
    /*responsive when screen size changing*/
    function checkWidth() {
        var windowSize = $(window).width();
        
        if(windowSize < 720){
            $('#wholecontainer').removeClass('flex-row').addClass('row');
            $('#leftcontainer').removeClass('d-flex').removeClass('flex-col').addClass('adjustSize');
            $('#rightcontainer').removeClass('d-flex').removeClass('flex-col').addClass('adjustSize');
            $('#secondrow').removeClass('row');
            $('#customization').removeClass('adjustSize3').addClass('adjustSize2');
            
        }
        else if(windowSize >= 720 && windowSize <960){
            $('#wholecontainer').removeClass('flex-row').addClass('row');
            $('#leftcontainer').removeClass('d-flex').removeClass('flex-col').addClass('adjustSize');
            $('#rightcontainer').removeClass('d-flex').removeClass('flex-col').addClass('adjustSize');
            $('#secondrow').addClass('row');
            $('#customization').removeClass('adjustSize2').addClass('adjustSize3');
            

        }else{
            $('#wholecontainer').removeClass('row').addClass('d-flex flex-row');
            $('#leftcontainer').removeClass('adjustSize').addClass('d-flex').addClass('flex-col');
            $('#rightcontainer').removeClass('adjustSize').addClass('d-flex').addClass('flex-col');
            $('#secondrow').addClass('row');
            $('#customization').removeClass('adjustSize2');
        }
    }

    checkWidth();
    $(window).resize(checkWidth);
});

