/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');
var LAYOUTS = require('../layouts');

var LeftMenu = require('./leftMenu.jsx');
var Home = require('./home.jsx');
var ColumnTwo = require('./columnTwo.jsx');
var ColumnThree = require('./columnThree.jsx');
var ColumnFour = require('./columnFour.jsx');

////////////////////////////////////////////////////////////////////////////////

var layouts = {};

layouts[LAYOUTS.APPVIEW_LAYOUT_0] = function() {

    return (
        <div>
          <h4>{this.constructor.displayName} | {this.state.layout}</h4>
          <div className="row">
            <div className="col-md-2">
              <LeftMenu/>
            </div>
            <div className="col-md-10">
              <div className="row">
		<div className="col-md-12">
		  <Home/>
		</div>
	      </div>
	    </div>
          </div>
        </div>
    );
}

layouts[LAYOUTS.APPVIEW_LAYOUT_1] = function() {

    return (
        <div>
          <h4>{this.constructor.displayName} | {this.state.layout}</h4>
          <div className="row">
            <div className="col-md-2">
              <LeftMenu/>
            </div>
            <div className="col-md-10">
              <div className="row">
		<div className="col-md-12">
		  <ColumnTwo/>
		</div>
	      </div>
	    </div>
          </div>
        </div>
    );
};

layouts[LAYOUTS.APPVIEW_LAYOUT_2] = function() {

    return (
        <div>
          <h4>{this.constructor.displayName} | {this.state.layout}</h4>
          <div className="row">
            <div className="col-md-2">
              <LeftMenu/>
            </div>
            <div className="col-md-10">
              <div className="row">
		<div className="col-md-6">
		  <ColumnTwo/>
		</div>
		<div className="col-md-6">
		  <ColumnThree/>
		</div>
	      </div>
	    </div>
          </div>
        </div>
    );
};

layouts[LAYOUTS.APPVIEW_LAYOUT_3] = function() {

    return (
        <div>
          <h4>{this.constructor.displayName} | {this.state.layout}</h4>
          <div className="row">
            <div className="col-md-2">
              <LeftMenu/>
            </div>
            <div className="col-md-10">
              <div className="row">
		<div className="col-md-4">
		  <ColumnTwo/>
		</div>
		<div className="col-md-4">
		  <ColumnThree/>
		</div>
		<div className="col-md-4">
		  <ColumnFour/>
		</div>
	      </div>
	    </div>
          </div>
        </div>
    );
};

////////////////////////////////////////////////////////////////////////////////

var App = React.createClass({

    mixins: [ LayoutRouterMixin ],

    getInitialState: function () {

        return {
	    layout: LAYOUTS.APPVIEW_LAYOUT_0
	};
    },

    render: function () {

        console.log('MainView::this.state.layout[' + this.state.layout);

        var layout = layouts[this.state.layout];

        return layout.call(this);
    }
});

module.exports = App;
