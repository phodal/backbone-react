"use strict";

define([
    'backbone', 'react', 'jsx!router', 'react.backbone'
], function (Backbone, React, Router) {

    var initialize = function () {
        new Router();
    };

    return {
        initialize: initialize
    };
});
