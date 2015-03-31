"use strict";

define([
    'react',
    '../model/UserModel',
    'jsx!../component/AboutComponent',
    'jsx!../component/IndexComponent'
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
