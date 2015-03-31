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

        var navigations = [
            {
                name: 'home',
                alias_name: '首页'
            },
            {
                name: 'about',
                alias_name: '关于'
            },
            {
                name: 'product',
                alias_name: '产品'
            },
            {
                name: 'library',
                alias_name: '库'
            }
        ];
        React.render(<MenuComponent navs={navigations}/>, document.getElementById('sidr'));
        new Router();
    };

    return {
        initialize: initialize
    };
});
