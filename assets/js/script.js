$(document).ready(function () {



    //Mouse click scroll
    $(document).ready(function () {
        $(".mouse").click(function () {
            $('html, body').animate({
                scrollTop: '+=750px'
            }, 1200);
        });
    });

    //Features appearance
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 500) {
            $(".feature-icon").addClass("feature-display");
            $(".feature-head-text").addClass("feature-display");
            $(".feature-subtext").addClass("feature-display");
        }
    });




    //smooth scrolling

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


})


function moveDivisor(index) { 
    var divisor = document.getElementById("divisor-"+index),
    slider = document.getElementById("slider-"+index);
	divisor.style.width = slider.value+"%";
}
