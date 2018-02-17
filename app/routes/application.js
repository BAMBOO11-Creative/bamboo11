import Route from '@ember/routing/route';

export default Route.extend({

    model() {

        return this.content.model();

    },

	title(tokens) {

        return this.content.get('html.title');

	},

});
