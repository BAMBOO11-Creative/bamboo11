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

            if ( this.get('content.video') === this.get('video') ) {

                var slide = this.get('content.slides.firstObject.component');

                var self = this;
                Ember.run.later(function() {

                    self.get('content').navigate(slide);

                }, 500);

            }

        },

    },


});
