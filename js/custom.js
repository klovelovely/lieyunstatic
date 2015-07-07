/**
 * Customized js
 * Created by kang on 2015/7/6.
 */

$(function () {

    /**
     * slider 支持手势
     * 依赖 hammer.min.js, jquery.hammer.js
     */
    var homeFocus = $('#carousel-home-focus');
    homeFocus.hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });

    homeFocus.hammer().on('swiperight', function(){
        $(this).carousel('prev');
    });

});