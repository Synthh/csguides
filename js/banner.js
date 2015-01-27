$(document).ready(function() {
    $('.welcome').mouseenter(function(){
        $('.welcome').fadeTo('fast', 1);
    });
    $('.welcome').mouseleave(function(){
        $('.welcome').fadeTo('fast', 0.5);
    });
});