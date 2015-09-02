
var HGGGiftFinder = function() {
    var type='child', 
        age, 
        child_interest, 
        price, 
        adult_interest,
        request_params,
        iframe_url='',
        see_more_url='';
        
    var getSelectedOption = function($obj) {
        return $obj.find("option[selected]").val();
    };  
    var processOptions = function() {
        age = getSelectedOption($('#hgg-age'));
        child_interest = getSelectedOption($('#hgg-child-interest'));
        price = getSelectedOption($('#hgg-price'));
        adult_interest = getSelectedOption($('#hgg-adult-interest'));
        if (type==='child') {
            request_params = 'type=child&age='+age+'&interest='+child_interest
        }
        else if (type==='adult') {
            request_params = 'type=adult&price='+price+'&interest='+adult_interest
        }
    };
    var loadIframe = function() {
        processOptions();
        $('#iframe-carousel').attr('src',iframe_url+'?'+request_params)
    };
    var showHideOptions = function() {
        $('.hgg-options').hide()
        type = $("input.rb-option:checked").val()
        $('#'+type+'-options').show();
    };
    var carouselInit = function() {
        $('select.source').customselect();
        //$('select.source').change(loadIframe);
        $('input.rb-option').click(function () {
            showHideOptions();
            //loadIframe();
        });
    };
    var formInit = function() {
        $('select.source').customselect();
        $('input.rb-option').click(function(){showHideOptions();});
        if (see_more_url=='')
            see_more_url = window.location.pathname;            
    };
   
    var findGifts = function(){
        processOptions();
        window.location = see_more_url + '?' + request_params
    };
    return {
        carouselInit:carouselInit,
        formInit:formInit,
        setIframeUrl:function(url){iframe_url = url;},
        setSeeMoreUrl:function(url){see_more_url = url;},
        findGifts:findGifts,
        setSelectedOption:function($obj,value){$obj.val(value);},
        showHideOptions:showHideOptions
    };

}();
   

