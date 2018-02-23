import Component from './../bm-slide';

export default Component.extend({

    classNames: ['hm-home'],

    actions: {

        open() {

            this.sendAction('open', this.content.get('video'));

        }

    }

});
