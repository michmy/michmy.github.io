/* =========================================================
// myang
 * 
 * Image rotator that fades in / out like the rotator found in store-locator
 * Automatically builds paging
 *
 * HTML
 * 
 *     <ul id='images'> 
 *         <li>content 1</li>
 *         <li>content 2</li>
 *         <li>content 3</li>
 *     </ul>
 *
 *  JS
 *  $('#images').rotatefade({ 
 *	  speed: milliseconds for fade  (Default: '800'),
 *	  timeout: time between fades (Default: '5000'), 
 *    autorotate: enable rotate on start (Default:true),
 *    callback: function to execute when rotator renders (Default:null)
 *  }); 
 *
// ========================================================= */
(function($) {
    $.rotatefade = function(container, settings) {
        var fadetimeout = null, paging='',list_items;   
        var $self = $(container);
        
        var elements = $self.children();
        
        for(var j = 0; j < elements.length; j++){
            idx = j+1
            $(elements[j]).attr('class','pod-'+idx).css('position', 'absolute').hide();
            paging += buildPaging(idx);    
        }
        
        paging = '<div class="paging-control"><ul>' + paging + '</ul></div>'
        $self.after(paging);
        
        list_items = $(container).next('.paging-control').children('ul').children();
        $(elements[0]).show();
        
        if(settings.autorotate){
            fadetimeout = setTimeout(function() {next(elements, list_items, settings, 1, 0);}, settings.timeout);
        }
        
        attachOnClick(list_items);
        
        if(settings.callback){
            settings.callback();
        }

        function next(elements, list_items, settings, current, last) {
        
            $(elements[last]).css('z-index',0)
            $(elements[current]).css('z-index',1)
            
            list_items[last].className = 'ctf-off';
            list_items[current].className = 'ctf-on';
            
            $(elements[current]).fadeIn(settings.speed, 
                function(){
                    $(elements[last]).hide()
                    if (current != elements.length-1) {
                        last = current;
                        current = current + 1;
                    } else {
                        current = 0;
                        last = elements.length - 1;
                    }
                });
            fadetimeout = setTimeout((function() {next(elements, list_items,settings, current, last);}), settings.timeout);
        };
        
        function buildPaging(index) {
            var classname = 'ctf-off', active='';
            if (index==1) {
                classname = 'ctf-on'
                active = 'active'
            }    
            return '<li class="' + classname + '" pod="' + index + '" id="page-' + index + '"><a href="#" pod="' + index + '" class="'+active + '">' + 'Image ' + index + '</a></li>';
        };
        
        function attachOnClick(list_items) {
        
            var links = list_items.children('a');
            $(links).click(function() {
                    if (settings.autorotate) {
                        clearTimeout(fadetimeout);
                    }
	                $(list_items).find('a').removeClass();
	                $(list_items).removeClass().addClass('ctf-off');
	                
	                $(this).addClass("active").parent().removeClass().addClass("ctf-on");
	                var theCurrentPod = $("li:visible", $self).css('z-index',0);
	                var thePodToShow = $(".pod-" + this.getAttribute('pod'), $self)
    	            
	                if (theCurrentPod.attr('class')!=thePodToShow.attr('class')) {
	                    thePodToShow.css('z-index',1).fadeIn(settings.speed, function(){theCurrentPod.hide()});
	                }
	                return false;
                });
        };
    }
    $.fn.rotatefade = function(options) {
        var settings = {
            speed: 800,
            timeout: 5000,
            autorotate:true,
            callback:null
        };
        options = $.extend(settings, options);
        return this.each(function() {   
	        new $.rotatefade(this, options);            
        });
    };
})(jQuery);
    
