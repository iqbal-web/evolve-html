(function ($) {
    "use strict"	

        // meanmenu
        $('#mobile-menu').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.mobile-menu-active'
        });

        // sticky-header
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
              $(".meanu-area").addClass("sticky");
            }
            else {
              $(".meanu-area").removeClass("sticky");
            }
        });

        //testimonial-carousel
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            nav:true,
            dots:false,
            autoplay: false,
            navText: ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
            navClass:['owl-prev','owl-next'],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                767: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            }
        });
        // brand carousel
        $('.brand-active').owlCarousel({
            loop: true,
            nav:false,
            dots:true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                500: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
                1201: {
                    items: 5,
                }
            }
        });

    // team carousel
    $('.team-box-area').owlCarousel({
        loop: true,
        nav:false,
        dots:true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // realted slider
    $('.related-project-slider').owlCarousel({
        loop: true,
        nav:true,
        margin:10,
        dots:false,
        autoplay: false,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
        navClass:['owl-prev','owl-next'],
        responsive: {
            0: {
                items: 1,
               
            },
            400: {
                items: 2,
               
            },
            767: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    // scroll-button
    const btnScrollToTop = document.querySelector("#btnScrollToTop");
    btnScrollToTop.addEventListener("click", function (){

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });
        // $("html,body").animate({ scrollTop:0}, "slow");

    });

      // wow active
    new WOW().init();


    // tabs
    var $grid =  $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })
        // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });



    // animated text
    var textWrapper = document.querySelector('.ml7 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

}(jQuery));

