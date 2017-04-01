jQuery(function($){
    "use strict";

    var ROKOKO = window.ROKOKO || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    ROKOKO.mainFunction = function(){
        /******* MENU *******/
        $(".menu-item").on("click", function(){
            $(".menu-item").removeClass("active");
            $(this).addClass("active");
        })

        $(".wrapper-hamburger").on("click", function(e){
            e.stopPropagation();
            $("body").toggleClass("show-body");
        })

        $("body").on("click", function(){
            $(this).removeClass("show-body");
        })

        $(".menu-mobile").on("click", function(e){
            e.stopPropagation();
        })    
    };

    /*=======================================
    =           END MAIN FUNCTION           =
    =======================================*/


    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function(){
        ROKOKO.mainFunction();
    });

    $(window).on('load', function() {

    });


    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
