jQuery(function($){
    "use strict";

    var ROKOKO = window.ROKOKO || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    ROKOKO.mainFunction = function(){
        /******* MENU *******/
        $('.content-gallery').isotope({
            layoutMode: 'masonry',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
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
