
$(document).ready(function() {
    /* Loading Script */
    $(window).load(function() {
        "use strict";
        $(".loader").delay(500).fadeOut();
        $("#mask").delay(1000).fadeOut("slow");
    });

    /* Flexslider */
    $(window).load(function() {
        "use strict";
        $('.flexslider').flexslider({
            animation: "fade",
            start: function (slider) {
                $('.np-controls a.next').click(function (event) {
                    event.preventDefault();
                    slider.flexAnimate(slider.getTarget("next"));
                });
                $('.np-controls a.previous').click(function (event) {
                    event.preventDefault();
                    slider.flexAnimate(slider.getTarget("previous"));
                });
            }
        });
    });

    /* Mixitup Portfolio */
    $('#portfolio').mixitup({
        targetSelector: '.item',
        transitionSpeed: 450
    });

    $("[data-toggle='tooltip']").tooltip({ container: 'body' });

    $('body').on('click', '.project-item', function (e) {
        e.preventDefault();

        loadProject($(this));
        $('#project-viewer').modal({ backdrop: false });
    });


    /*Projects navigation*/
    $('.project-nav .next-project').click(function () {
        var $newProject = $('.item.active').next('.item').find('.project-item');
        $('#project-viewer .container').fadeOut(500, function () { loadProject($newProject); });
    });

    $('.project-nav .previous-project').click(function () {
        var $newProject = $('.item.active').prev('.item').find('.project-item');
        $('#project-viewer .container').fadeOut(500, function () { loadProject($newProject); });
    });

    function loadProject($project) {

        $('.item').removeClass('active');
        $project.parent().addClass('active');

        var projectLink = $project.attr('href').replace(/[#?]/g, '');

        //window.location.hash = '?' + projectLink;

        $('#project-viewer-content').load(projectLink, function () {
            $('#project-viewer .container').fadeIn(500);
            afterLoadFn();
        });

    }

    function afterLoadFn() {

        $('#project-viewer').scrollTop(0);

        /*Show-Hide Nav butttons*/
        if ($('.item.active').index() == 0) { $('#project-viewer .previous-project').addClass('hidden'); }
        else { $('#project-viewer .previous-project').removeClass('hidden'); }

        if ($('.item.active').index() == ($('.item').length - 1)) { $('#project-viewer .next-project').addClass('hidden'); }
        else { $('#project-viewer .next-project').removeClass('hidden'); }

    }

    /*Close project Modal*/

    $('#project-viewer').on('hidden.bs.modal', function () {
        $('#project-viewer-content').empty();
        $('#project-viewer .container').fadeOut();
    });
    /*
    $('#project-viewer').on('hide.bs.modal', function () {
        window.location.hash = 'portfolio';
    });
    */
  
    $(document).on("click", '#mobile_scale', function (e) {
        $('#scaler img').removeClass('active');
        $(this).addClass('active');
        $('#tc_central').css({ 'width': '400px', 'max-width': '400px' });
        $('#scaler .holder').css({ 'width': '320px', 'max-width': '320px' })
    });

    $(document).on("click", '#tablet_scale', function (e) {
        $('#scaler img').removeClass('active');
        $(this).addClass('active');
        $('#tc_central').css({ 'width': '600px', 'max-width': '600px' });
        $('#scaler .holder').css({ 'width': '442px', 'max-width': '442px' });
    });

    $(document).on("click", '#desktop_scale', function (e) {
        $('#scaler img').removeClass('active');
        $(this).addClass('active');
        $('#tc_central').css({ 'width': '800px', 'max-width': '800px' });
        $('#scaler .holder').css({ 'width': '642px', 'max-width': '642px' });
    });

    /* Skills */
    /*
        $('.skills-info').appear(function() {
            $('.skill1').css('width', '71%');
            $('.skill2').css('width', '85%');
            $('.skill3').css('width', '76%');
            $('.skill4').css('width', '53%');
            $('.skill5').css('width', '69%');
        },{accX: 0, accY: -150});
    */

});