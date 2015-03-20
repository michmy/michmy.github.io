/* =========================================================
// myang
 * 
 * HTML
 *     <select class='dd'> 
 *         <option selected="selected" value="v1">Option 1</option>
 *         <option value="v2">Option 2</option>
 *         <option value="v3">Option 3</option>
 *     </select>
 *
 *  JS
 *  $('.dd').customselect(); 
 *
// ========================================================= */
(function($) {
    $.customselect = function(select,settings) {
        var $select = $(select),
            selected = $select.find("option[selected]"),
            selected_css = selected.attr('class'),
            options = $select.find("option"),
            $choice,
            $dropdown,
            $selectedChoice,
            $listOfChoices,
            markup = '<dl class="' + settings.className + '"><dt><a href="#'+ $select.attr('id') +'" class="'+ selected_css + '">' + selected.text() + 
                        '<span class="value">' + selected.val() + '</span></a></dt><dd><ul></ul></dd></dl>';
        $select.hide();        
        $select.after($(markup));
        $dropdown = $select.next('.'+settings.className);
        $selectedChoice = $dropdown.find('dt a');
        $listOfChoices = $dropdown.children('dd').children('ul');
        $listOfChoices.hide();
        
        options.each(function(){
            $choice = $(this)
            $dropdown.find('ul').append('<li><a href="#' + $select.attr('id') + '" class="' + $choice.attr('class') +'">' + 
                $choice.text() + '<span class="value">' + 
                $choice.val() + '</span></a></li>');
        });
        
        $($selectedChoice).click(function() {
            $listOfChoices.toggle();
            return false;
        });
        
        $dropdown.find('dd ul li a').click(function() {
            var $this = $(this),
                text = $this.html();
            $selectedChoice.removeClass()
            .html(text)
            .addClass($this.attr('class'));
            
            $listOfChoices.hide();
            $select.val($this.find("span.value").html())
            
            if($select.change) {
                //console.log('onchange');
                $select.change();
            }
            
          
            //console.log($select.find("option[selected]").val())
            
            return false;
        });
        
        $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass(settings.className))
                    $listOfChoices.hide();
            });
        
    }
    $.fn.customselect = function(options) {
        var settings = {
            className: 'dropdown'
        };
        options = $.extend(settings, options);
        return this.each(function() {   
	        new $.customselect(this,options);            
        });
    };
})(jQuery);
    


