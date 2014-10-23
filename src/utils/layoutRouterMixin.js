var layoutRouter = require('./layoutRouter');

var LayoutRouterMixin = {

    componentWillMount: function() {
	console.log('componentWillMount::this[' + this);
        this.subscription = layoutRouter.subscribe(this);
    },

    componentWillUnmount: function() {
	console.log('componentWillUnmount::this[' + this);
	this.subscription.dispose();
    },
    
    goto: function(layout) {
	layoutRouter.goto(layout);
    }
};

module.exports = LayoutRouterMixin;
