"use strict";

define([
    'react',
    'jquery'
],function(React, $){
    var MenuComponent = React.createClass({
        getInitialState: function(){
            return { focused: 0 };
        },

        clicked: function(index){
            this.setState({focused: index});
            $.sidr('close');
        },

        render: function() {
            var self = this;
            return (
                <div>
                    <ul>{ this.props.items.map(function(m, index){
                        var style = '',
                            url = "#" + m;

                        if(self.state.focused == index){
                            style = 'focused';
                        }

                        return  <li className={style} onClick={self.clicked.bind(self, index)}>
                                    <a href={url}>{m}</a>
                                </li>;
                    }) }
                    </ul>
                </div>
            );

        }
    });

    return MenuComponent;
});
