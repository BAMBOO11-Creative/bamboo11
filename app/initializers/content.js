import Content from '../services/content';

export function initialize() {

	let app = arguments[1] || arguments[0];

	app.register('service:content', Content);

    app.inject('route', 'content', 'service:content');
    app.inject('component', 'content', 'service:content');

}

export default {
    name: 'content',
    initialize: initialize
};
