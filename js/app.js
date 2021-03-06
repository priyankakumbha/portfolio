
	jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#top', offset: 400});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {offset: -80}, {easing:'easeOutQuad'});

        Collapse mobile menu after clicking
        if ($('.top-navigation').hasClass('in')){
            $('.top-navigation').removeClass('in').addClass('collapse');
        }

    });
});