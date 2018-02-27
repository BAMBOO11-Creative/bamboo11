import Component from '@ember/component';

export default Component.extend({

    classNames: ['bm-bullets'],

    actions: {

        navigate(item) {

            this.content.navigate(item.component);

        }

    },

    //

    onInView: Ember.observer('content.isInView', function() {

        let id = this.get('content.isInView.model.component');

        const list = this.get('content.slides');

        const item = list.find(function(item) {
            if ( item.component === id ) {
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
