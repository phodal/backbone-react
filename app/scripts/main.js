'use strict';

require.config({
    paths: {
        jquery: 'vendor/jquery.min',
        jquerySidr: 'vendor/jquery.sidr.min',
        touchwipe: 'vendor/jquery.touchwipe.min',

        react: 'vendor/react-with-addons.min',
        "JSXTransformer": 'vendor/JSXTransformer',
        jsx: 'vendor/jsx',
        'react.backbone': 'vendor/react.backbone',

        backbone: 'vendor/backbone',
        underscore: 'vendor/lodash.min',

        text: 'vendor/text',
        json: 'vendor/json',
        mdown: 'vendor/mdown',
        markdownConverter: 'vendor/Markdown.Converter'
    },
    shim: {
        jquerySidr:['jquery'],
        touchwipe: ['jquery'],
        underscore: {
            exports: '_'
        }
    }
});

require([
    'backbone', 'jsx!app.react'
], function (Backbone, App) {
    App.initialize();
});
