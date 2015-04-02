'use strict';

define([
    'react',
    'react.backbone'
],function(React){
    return React.createBackboneClass({
        changeOptions: 'change:name',
        render: function () {
            return (
                <div>
                    <h1>{this.getModel().get('name')}</h1>
                    Project
                </div>);
        }
    });
});
