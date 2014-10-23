var Rx = require('rx');

function LayoutRouter() {

    var layoutEvents = new Rx.BehaviorSubject('');

    onNext = layoutEvents.onNext;    

    this.subscribe = function(component) {

        return layoutEvents
	    .filter(function(layout) {

		var str = '^' + component.constructor.displayName + '\.';
		var regex = new RegExp(str);
		var bool = regex.test(layout);

                console.log('filter::this[' + this);
                console.log('filter::layout[' + layout);
                console.log('filter::str[' + str);
                console.log('filter::bool[' + bool);

		return bool;
	    })
            .map(function(layout) {

                console.log('map::layout[' + layout);

                return { layout: layout };
            })
            .subscribe(component.setState.bind(component));
    }
    
    this.goto = function(layout) {
	layoutEvents.onNext(layout);
    };
}

module.exports = new LayoutRouter();
