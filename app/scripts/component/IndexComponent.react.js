'use strict';

define([
    'react',
    'mdown!../../info/about.md'
], function (React, about) {
    var IndexComponent = React.createClass({
        render: function () {
            this.info = about;
            return (<div className='content' dangerouslySetInnerHTML={{__html: about}}></div>);
        }
    });

    return IndexComponent;
});
