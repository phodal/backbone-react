"use strict";

define([
    'react'
],function(React){
    var ProjectComponent = React.createBackboneClass({
        changeOptions: "change:name",
        render : function() {
            return (
                <div>
                    <h1>{this.getModel().get("name")}</h1>
                    Project
                </div>);
        }
    });

    return ProjectComponent;
});
