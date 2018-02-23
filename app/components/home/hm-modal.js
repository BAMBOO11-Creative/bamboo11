import Component from '@ember/component';

export default Component.extend({

    classNames: ['hm-modal'],

    customPlayerVars: {

        autoplay: 1,
        showinfo: 0

    },

    actions: {

        close() {

            this.sendAction('close');

        }

    }

});
