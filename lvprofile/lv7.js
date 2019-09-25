$('.main').fadeIn(2000);

var position = $("#target").offset().top;　


$("#scroll_button").click(function(){
    $("html,body").animate({
        scrollTop : position
    }, {
        queue : false　
    });
});
