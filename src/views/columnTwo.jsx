/**
 * @jsx React.DOM
 */

/*jshint node: true, browser: true, newcap:false*/

'use strict';

var React = require('react/addons');
var LayoutRouterMixin = require('../utils/layoutRouterMixin');
var LAYOUTS = require('../layouts');
var ColumnTwoTab0 = require('./columnTwoTab0.jsx');
var ColumnTwoTab1 = require('./columnTwoTab1.jsx');
var ColumnTwoTab2 = require('./columnTwoTab2.jsx');

var ColumnTwo = React.createClass({

    mixins: [ LayoutRouterMixin ], 

    getInitialState: function () {

        return {
	    backgroundColor: '#dddddd',
	    layout: LAYOUTS.COLUMNTWO_LAYOUT_TAB_0
        };
    },

    handlers: { 

	onClickTab: function(layout) {
	    console.log('onClickTab[' + layout);
	    this.goto(layout);
	}
    },

    render: function () {

	var style = {
	    backgroundColor: this.state.backgroundColor,
	    padding: '8px'
	};
	
	var style0 = { 
	    //padding: '8px' 
	};

	var tab_details = [
    	    {
		name: 'Tab 0',
		tab: <ColumnTwoTab0/>,
		layout: LAYOUTS.COLUMNTWO_LAYOUT_TAB_0
	    },
	    {
		name: 'Tab 1',
		tab: <ColumnTwoTab1/>,
		layout: LAYOUTS.COLUMNTWO_LAYOUT_TAB_1
	    },
	    {
		name: 'Tab 2',
		tab: <ColumnTwoTab2/>,
		layout: LAYOUTS.COLUMNTWO_LAYOUT_TAB_2
	    }
	];

	var tabs = [];
	var tab;

	tab_details.forEach(function(tab_detail) {

	    var active = this.state.layout === tab_detail.layout;
	    
	    if (active) {
		tab = tab_detail.tab;
	    }

            tabs.push(<li className={active ? 'active' : ''}><a onClick={this.handlers.onClickTab.bind(this,tab_detail.layout)}>{tab_detail.name}</a></li>);
	}.bind(this));

	console.log('tab[' + tab);

        return (
	    <div>
              <div className="row" style={style}>
		<div className="col-md-12">
                  {this.constructor.displayName} | {this.state.layout}<br/>
		  <div>
		    <ul className="nav nav-pills">
		      {tabs}
		    </ul>
		  </div>
		</div>
	      </div>
              <div className="row">
		<div className="col-md-12" style={style0}>
                  {tab}
		</div>
              </div>
	    </div>
        );
    }
});

module.exports = ColumnTwo;
