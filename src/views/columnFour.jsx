/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');
var LAYOUTS = require('../layouts');

var ColumnFour = React.createClass({

    mixins: [ LayoutRouterMixin ], 

    getInitialState: function () {

        return {
	    backgroundColor: '#bbbbbb'
        };
    },

    render: function () {

	var style = {
	    backgroundColor: this.state.backgroundColor,
	    padding: '8px'
	};

        return (
            <div className="row" style={style}>
              <div className="col-md-12">
                {this.constructor.displayName} 
              </div>
            </div>
        );
    }
});

module.exports = ColumnFour;
