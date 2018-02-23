import Route from '@ember/routing/route';

export default Route.extend({

    model(params) {
        return params.video;
    },

    afterModel() {
        this.set('content.modal', true);
    },

    deactivate() {
        this.set('content.modal', false);
    },

    renderTemplate() {
        this.render({ into: 'application' });
    },

});
