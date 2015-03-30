"use strict";

define([
    'underscore',
    'backbone',
    'react',
    'jsx!component/IndexComponent',
    'jsx!component/AboutComponent',
    'jsx!component/ProductComponent',
    'jsx!component/ProjectComponent'
],function(_, Backbone, React, IndexComponent, AboutComponent, ProductComponent, ProjectComponent){
    var AppRouter = Backbone.Router.extend({
        index: function(){
            React.render( <IndexComponent />, document.getElementById('main_content'));
        },
        about: function(){
            React.render( <AboutComponent />, document.getElementById('main_content'));
        },
        product: function(){
            React.render( <ProductComponent />, document.getElementById('main_content'));
        },
        project: function(){
            React.render( <ProjectComponent />, document.getElementById('main_content'));
        },
        initialize: function() {
            var router = this,
                routes = [
                    [ /^.*$/, "index" ],
                    [ "about", "about" ],
                    [ "product", "product" ],
                    [ "project", "project" ]
                ];

            _.each(routes, function(route) {
                router.route.apply(router, route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});
