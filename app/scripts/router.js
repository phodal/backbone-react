"use strict";

define([
    'underscore',
    'backbone',
    'react',
    'jsx!component/BarComponent'
],function(_, Backbone, React, BarComponent){
    var AppRouter = Backbone.Router.extend({
        index: function(){
            return <BarComponent />;
        },
        initialize: function() {
            var router = this,
                routes = [
                    [ /^.*$/, "index" ]
                    //[ "admin", "admin" ]
                ];

            _.each(routes, function(route) {
                console.log(route);
                React.render(router.index(), document.getElementById('root'));
                router.route.apply(router,route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});
