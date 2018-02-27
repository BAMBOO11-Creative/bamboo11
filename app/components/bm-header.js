import Component from '@ember/component';
import Parallax from './../mixins/parallax';

export default Component.extend(Parallax, {

    classNames: ['bm-header'],
    classNameBindings: ['adaptive'],
    tagName: 'header',

    actions: {

        navigate(item) {

            this.content.navigate(item.link);

        }

    },

    parallaxHandler() {

        let windowHeight = ( window.innerHeight || document.documentElement.clientHeight );

        let scrollTop = $(window).scrollTop();

        if ( scrollTop > windowHeight ) {
            this.set('adaptive', true);
        } else {
            this.set('adaptive', false);
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
