"use strict";

define([
    'underscore',
    'backbone',
    'react',
    'jsx!component/BarComponent',
    'jsx!component/FooComponent'
],function(_, Backbone, React, BarComponent, FooComponent){
    var AppRouter = Backbone.Router.extend({
        bar: function(){
            React.render( <BarComponent />, document.getElementById('root'));
        },
        foo: function(){
            React.render( <FooComponent />, document.getElementById('root'));
        },
        initialize: function() {
            var router = this,
                routes = [
                    [ /^.*$/, "bar" ],
                    [ "foo", "foo" ]
                ];

            _.each(routes, function(route) {
                router.route.apply(router, route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});
