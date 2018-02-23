import Route from '@ember/routing/route';

export default Route.extend({

    model() {

        return this.content.model();

    },

	title() {

        return this.content.get('html.title') + " - " + this.content.get('html.tagline');

	},

    actions: {

        openModal(video) {

            this.transitionTo('video', video);

        },

        closeModal() {

            this.transitionTo('application');

        },

    },

});
