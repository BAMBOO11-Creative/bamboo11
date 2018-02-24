import Component from '@ember/component';
import Parallax from './../mixins/parallax';

export default Component.extend(Parallax, {

    classNames: ['bm-slide'],
    classNameBindings: [ 'isInView:visible' ],

    init() {

        this._super();

        if ( this.get('model') ) {
            this.content.set(this.getID(), this);
        }


    },

    onInView(isInView) {

        if ( isInView === true ) {
            this.content.set('isInView', this);
        }
                
    },

    willDestroyElement() {

        if ( this.get('model') ) {
            this.content.set(this.getID(), null);
        }

    },

    getID() {
        const id = this.get('model').component;
        return id.split('/').join('-');
    }

});
