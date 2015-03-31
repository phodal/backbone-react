"use strict";

define([
    'backbone', 'react', 'jsx!router', 'react.backbone', 'jquery', 'jquerySidr', 'touchwipe',
    'jsx!component/MenuComponent'
], function (Backbone, React, Router, ReactBackbone, $, jquerySidr, touchwipe, MenuComponent) {

    var initialize = function () {
        $(window).touchwipe({
            wipeLeft: function() {
                $.sidr('close');
            },
            wipeRight: function() {
                $.sidr('open');
            },
            preventDefaultEvents: false
        });
        $(document).ready(function() {
            $('#sidr').show();
            $('#menu').sidr();
            $("#sidr ul li a" ).bind('touchstart click', function() {
                $.sidr('close');
                window.scrollTo(0,0);
            });
        });

        React.render(<MenuComponent items={['home', 'about', 'product', 'library']} />, document.getElementById('sidr'));
        new Router();
    };

    return {
        initialize: initialize
    };
});
