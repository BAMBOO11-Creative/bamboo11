import Component from './bt-slide';

export default Component.extend({

    classNames: ['bt-grow'],

    actions: {

        services() {

            this.content.navigate('services/sr-services');

        }

    }

});
