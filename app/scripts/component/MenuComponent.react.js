'use strict';

define([
    'react',
    'jquery'
],function(React, $){
    return React.createClass({
        getInitialState: function () {
            return {focused: 0};
        },

        clicked: function (index) {
            this.setState({focused: index});
            $.sidr('close');
        },

        render: function () {
            var self = this;
            return (
                <div>
                    <ul>{ this.props.navs.map(function (nav, index) {
                        var style = '',
                            url = '#' + nav.name;

                        if (self.state.focused === index) {
                            style = 'focused';
                        }

                        return <li className={style} onClick={self.clicked.bind(self, index)}>
                            <a href={url}>{nav.aliasName}</a>
                        </li>;
                    }) }
                    </ul>
                </div>
            );

        }
    });
});
