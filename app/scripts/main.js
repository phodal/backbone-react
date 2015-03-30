/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        text: '../bower_components/requirejs-text/text',
        react: '../bower_components/react/react',
        "JSXTransformer": "../bower_components/react/JSXTransformer",
        jsx: "../bower_components/jsx-requirejs-plugin/js/jsx",
        'react.backbone': '../bower_components/react.backbone/react.backbone',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash'
    }
});

require([
    'backbone', 'jsx!app', 'react'
], function (Backbone, App, React) {
    App.initialize();
    Backbone.history.start();
});
