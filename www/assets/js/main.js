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
