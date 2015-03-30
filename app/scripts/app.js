"use strict";

define([
    'backbone', 'react', 'react.backbone'
], function (Backbone, React) {

    var initialize = function () {
        var App = React.createBackboneClass({
            render: function () {
                return (
                    <div>
                        <h1>hello</h1>
                    </div>);
            }
        });
        React.render(<App />, document.getElementById('root'));
    };

    return {
        initialize: initialize
    };
});
