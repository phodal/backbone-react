"use strict";

define([
    'react',
    'jsx!../component/ProjectComponent',
    'jsx!../component/IndexComponent'
],function(React, ProjectComponent, IndexComponent){
    var ProductComponent = React.createClass({
        render : function() {
            return (
                <div>
                    <ProjectComponent />
                    <IndexComponent />
                </div>);
        }
    });

    return ProductComponent;
});
