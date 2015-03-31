"use strict";

define(['backbone'], function(Backbone) {
    var UserModel = Backbone.Model.extend({
        initialize : function(name) {
            this.name = name;
        },
        defaults:{
            name:null
        }
    });

    return UserModel;
});
