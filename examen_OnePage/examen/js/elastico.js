
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',

        speed: 400,

        easing: 'easeInQuart',

    });

});



document.getElementById("flechabtn").style.display = "none";


window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("flechabtn").style.display = "block";
    } else {
        document.getElementById("flechabtn").style.display = "none";
    }
}





function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}