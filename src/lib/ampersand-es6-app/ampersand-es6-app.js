const Events = import 'ampersand-events'
const toArray = import 'lodash/toArray'
const extend = import 'lodash/assign'

let app = {
	extend() {
		return extend.apply(null, Array.from(this, arguments));
	}

	reset() {
		this.off()
		for (let item of this) {
			if(item !== 'reset') {
				delete this[item];
			}
		}
		//better way of handling this
		Events.createEmitter(this);
	}
}

export app;
