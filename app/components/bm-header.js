import Component from '@ember/component';

export default Component.extend({

    classNames: ['bm-header'],
    tagName: 'header',

    actions: {

        navigate(item) {

            this.content.navigate(item.link);

            //if ( this.get('selectedItem') ) {
            //    this.set('selectedItem.active', false);
            //}

            //item.set('active', true);
            //this.set('selectedItem', item);

            //const id = this.getID(item.link);

            //const component = this.content.get(id);
            //const element = component.get('element');

            //$('html, body').animate({
            //    scrollTop: $(element).offset().top
            //}, 1000);

        }

    },

    //

    onInView: Ember.observer('content.isInView', function() {

        return;

        let id = this.get('content.isInView.model.component');

        const list = this.get('content.navigation');

        const item = list.find(function(item) {
            if ( item.link === id ) {
                return true;
            } else {
                return false;
            }
        });

        if ( item ) {

            if ( this.get('selectedItem') ) {
                this.set('selectedItem.active', false);
            }

            item.set('active', true);
            this.set('selectedItem', item);

        }

    }),

    //

    getID(id) {
        return id.split('/').join('-');
    }

});
