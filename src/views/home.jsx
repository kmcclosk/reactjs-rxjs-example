/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');
var LAYOUTS = require('../layouts');

////////////////////////////////////////////////////////////////////////////////

var Home = React.createClass({

    mixins: [ LayoutRouterMixin ],

    render: function () {

        return (
	    <div className="text-center">
	      <img src="images/no-angular-sm.png"/>
	      <h1>Friends don't let friends use AngularJS.</h1>
	      <div>
		Ken McCloskey | <a href="https://github.com/kmcclosk">Github</a> | <a href="http://www.kenmccloskey.com">http://www.kenmccloskey.com</a>
	      </div>
	    </div>
	);
    }
});

module.exports = Home;
