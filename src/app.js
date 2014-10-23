/*jshint node:true, browser: true*/

var React = require('react/addons');
var AppView = require('./views/appView.jsx');

React.renderComponent(
    AppView(),
    document.getElementById('app')
);
