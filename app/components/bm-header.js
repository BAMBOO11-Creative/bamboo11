import Component from '@ember/component';

export default Component.extend({

    classNames: ['bm-header'],
    tagName: 'header',

    actions: {

        navigate(item) {

            this.content.navigate(item.link);

        }

    },

    //

    onInView: Ember.observer('content.isInView', function() {

        let id = this.get('content.isInView.model.component');

        const list = this.get('content.navigation');

        const item = list.find(function(item) {
            if ( item.link === id ) {
                return true;
            } else {
                return false;
            }
        });

        if ( this.get('selectedItem') ) {
            this.set('selectedItem.active', false);
        }

        if ( item ) {

            item.set('active', true);
            this.set('selectedItem', item);

        }

    }),

    //

    getID(id) {
        return id.split('/').join('-');
    }

});
