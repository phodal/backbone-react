'use strict';

define([
    'backbone', 'react', 'jsx!router.react', 'react.backbone', 'jquery', 'jquerySidr', 'touchwipe',
    'jsx!component/MenuComponent.react',
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
            $('#sidr').find('ul li a' ).bind('touchstart click', function() {
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
