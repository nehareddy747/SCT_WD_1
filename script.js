$(window).on('scroll', function() {
    $('.part').each(function() {
        var topOfElement = $(this).offset().top;
        var bottomOfElement = $(this).offset().top + $(this).outerHeight();
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        
        if ((bottomOfWindow > topOfElement) && (topOfWindow < bottomOfElement)){
            var bgColor = $(this).data('background');
            $('body').css('background-color', bgColor);
        }
    });
});
$(function() {
    'use strict';
    // Set the height of each section to the window height
    var view = $(window).height();
    $('.part').height(view);

    // Initialize Scrollie
    $('.part').scrollie({
        scrollOffset: -50, // Adjust this offset if needed
        scrollingInView: function(elem) {
            // Fetch the background color from the data attribute
            var bgColor = elem.data('background');
            // Apply the background color to the body
            $('body').css('background-color', bgColor);
        }
    });
});
