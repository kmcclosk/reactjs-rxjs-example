/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');

var ColumnTwoTab0 = React.createClass({

    mixins: [ LayoutRouterMixin ], 

    getInitialState: function () {

        return {
	    backgroundColor: '#aaaaaa'
        };
    },

    render: function () {

	var style = {
	    backgroundColor: this.state.backgroundColor
	};

        return (
            <div className="row" style={style}>
              <div className="col-md-12">
		<h1>Tab0</h1>
	      </div>
	    </div>
        );
    }
});

module.exports = ColumnTwoTab0;
