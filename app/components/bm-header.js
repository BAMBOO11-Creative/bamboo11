import Component from '@ember/component';

export default Component.extend({

    classNames: ['bm-header'],
    tagName: 'header',

    actions: {

        navigate(item) {

            if ( this.get('selectedItem') ) {

                this.set('selectedItem.active', false);

                item.set('active', true);

            }

        }

    }

});
