/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        jquerySidr: 'vendor/jquery.sidr.min',
        touchwipe: 'vendor/jquery.touchwipe.min',

        react: '../bower_components/react/react-with-addons',
        "JSXTransformer": "../bower_components/react/JSXTransformer",
        jsx: "../bower_components/jsx-requirejs-plugin/js/jsx",
        'react.backbone': '../bower_components/react.backbone/react.backbone',

        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',

        text: '../bower_components/requirejs-text/text',
        json: '../bower_components/requirejs-plugins/src/json',
        mdown: '../bower_components/requirejs-plugins/src/mdown',
        markdownConverter: '../bower_components/requirejs-plugins/lib/Markdown.Converter'
    },
    shim: {
        jquerySidr:["jquery"],
        touchwipe: ["jquery"],
        underscore: {
            exports: '_'
        }
    }
});

require([
    'backbone', 'jsx!app'
], function (Backbone, App) {
    App.initialize();
});
