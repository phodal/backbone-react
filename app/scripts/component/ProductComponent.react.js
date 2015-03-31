'use strict';

define([
    'react',
    'jsx!../component/AboutComponent.react',
    'jsx!../component/IndexComponent.react'
],function(React, AboutComponent, IndexComponent){
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
