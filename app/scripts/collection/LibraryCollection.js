"use strict";

define(['backbone', '../model/LibraryModel'], function(Backbone, LibraryModel) {
    var LibraryCollection = Backbone.Collection.extend({
        model: LibraryModel
    });

    return LibraryCollection;
});
