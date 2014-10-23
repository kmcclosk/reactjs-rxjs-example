/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');
var LAYOUTS = require('../layouts');

var LeftMenu = React.createClass({

    mixins: [ LayoutRouterMixin ],

    getInitialState: function () {

        return {
	    backgroundColor: '#eeeeee'
        };
    },

    handlers: {
	showAppViewLayout0: function() {
	    this.goto(LAYOUTS.APPVIEW_LAYOUT_0);
	},
	showAppViewLayout1: function() {
	    this.goto(LAYOUTS.APPVIEW_LAYOUT_1);
	},
	showAppViewLayout2: function() {
	    this.goto(LAYOUTS.APPVIEW_LAYOUT_2);
	},
	showAppViewLayout3: function() {
	    this.goto(LAYOUTS.APPVIEW_LAYOUT_3);
	}
    },

    render: function () {

	var style = {
	    backgroundColor: this.state.backgroundColor,
	    padding: '6px'
	};

        return (
	    <div>
              <div style={style}>
		Click a layout:<br/>
		<ul className="nav nav-pills nav-stacked">
                  <li><a onClick={this.handlers.showAppViewLayout0.bind(this)}>Home</a></li>
                  <li><a onClick={this.handlers.showAppViewLayout1.bind(this)}>Layout 1</a></li>
                  <li><a onClick={this.handlers.showAppViewLayout2.bind(this)}>Layout 2</a></li>
                  <li><a onClick={this.handlers.showAppViewLayout3.bind(this)}>Layout 3</a></li>
		</ul>
              </div>	     
	    </div>
        );
    }
});

module.exports = LeftMenu;
