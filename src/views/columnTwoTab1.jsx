/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');

var ColumnTwoTab1 = React.createClass({

    mixins: [ LayoutRouterMixin ], 

    getInitialState: function () {

        return {
	    backgroundColor: '#999999'
        };
    },

    render: function () {

	var style = {
	    backgroundColor: this.state.backgroundColor
	};

        return (
            <div className="row" style={style}>
              <div className="col-md-12">
		<h1>Tab1</h1>
	      </div>
	    </div>
        );
    }
});

module.exports = ColumnTwoTab1;
