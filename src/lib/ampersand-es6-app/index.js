import Events from 'ampersand-events'
import assign from 'lodash/assign'

class App extends Events {
	extend() {
		return assign.apply(null, Array.from(this, arguments));
	}

	reset() {
		// clear all events
		this.off();
		// remove all but main two methods
		for (var item in this) {
			if (item !== 'extend' && item !== 'reset') {
				delete this[item];
			}
		}
		// remix events
		Events.createEmitter(this);
	}
}

export let app = new App();
