"use strict";

define(['backbone'], function(Backbone) {
    var LibraryModel = Backbone.Model.extend({
        initialize : function(name, url) {
            this.name = name;
            this.url = url;
        },
        defaults:{
            name:null,
            url: null
        }
    });

    return LibraryModel;
});
