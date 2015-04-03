'use strict';

define([
    'backbone', 'react', 'jsx!router.react', 'react.backbone', 'jquery', 'jquerySidr', 'touchwipe',
    'jsx!component/MenuComponent.react',
    'data/navigation'
], function (Backbone, React, Router, ReactBackbone, $, jquerySidr, touchwipe, MenuComponent, navigation) {

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
        });

        React.render(<MenuComponent navs={navigation}/>, document.getElementById('sidr'));
        new Router();
    };

    return {
        initialize: initialize
    };
});
