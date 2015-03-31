"use strict";

define([
    'underscore',
    'backbone',
    'react',
    'jsx!component/IndexComponent.react',
    'jsx!component/AboutComponent.react',
    'jsx!component/ProductComponent.react',
    'jsx!component/ProjectComponent.react',
    'jsx!component/LibraryComponent.react',
    'model/UserModel',
    'data/libraries'
],function(_, Backbone, React, IndexComponent, AboutComponent, ProductComponent, ProjectComponent, LibraryComponent, UserModel, libraries){
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
        library: function(){
            React.render( <LibraryComponent items={libraries} />, document.getElementById('main_content'));
        },
        project: function(){
            var user = new UserModel({name: 'phodal'});
            var UserView = React.createFactory(ProjectComponent);
            var userView = UserView({model: user});
            React.render(userView, document.getElementById('main_content'));
        },
        initialize: function() {
            var router = this,
                routes = [
                    [ /^.*$/, "index" ],
                    [ "about", "about" ],
                    [ "product", "product" ],
                    [ "project", "project" ],
                    [ "library", "library" ]
                ];

            _.each(routes, function(route) {
                router.route.apply(router, route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});
