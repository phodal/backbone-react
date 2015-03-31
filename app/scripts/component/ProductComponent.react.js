"use strict";

define([
    'react',
    '../model/UserModel',
    'jsx!../component/AboutComponent.react',
    'jsx!../component/IndexComponent.react'
],function(React, UserModel, AboutComponent, IndexComponent){
    var ProductComponent = React.createClass({
        render : function() {
            return (
                <div>
                    <AboutComponent />
                    <IndexComponent />
                </div>);
        }
    });

    return ProductComponent;
});
