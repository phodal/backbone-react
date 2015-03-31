"use strict";

define([
    'backbone', 'react', 'jsx!router', 'react.backbone', 'jquery', 'jquerySidr', 'touchwipe',
    'jsx!component/MenuComponent',
    'data/navigations'
], function (Backbone, React, Router, ReactBackbone, $, jquerySidr, touchwipe, MenuComponent, navigations) {

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

        React.render(<MenuComponent navs={navigations}/>, document.getElementById('sidr'));
        new Router();
    };

    return {
        initialize: initialize
    };
});
