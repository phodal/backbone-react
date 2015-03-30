"use strict";

define([
    'backbone', 'react', 'jsx!router', 'react.backbone'
], function (Backbone, React, Router) {

    var initialize = function () {
        var router = new Router();
        router.initialize();
    };

    return {
        initialize: initialize
    };
});
