'use strict';

define([
    'react',
    'mdown!../../../README.md'
], function (React, about) {
    return React.createClass({
        render: function () {
            this.info = about;
            return (<div className='content' dangerouslySetInnerHTML={{__html: about}}></div>);
        }
    });
});
