import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';

export default Mixin.create({

    viewTracking: false,

    parallax: on('didInsertElement', function() {

        const self = this;

        window.addEventListener('scroll', function() {

            if ( self.get('isDestroyed') !== true ) {
                self.parallaxHandler();
            }

        }, this.isSupportsPassive() ? { passive: true } : false);

        this.parallaxHandler();

    }),

    parallaxHandler() {

        var isInView = this.isElementVisible(this.get('element'));
        this.set('isInView', isInView);

        this.onInView(isInView);

    },

    onInView(isInView) {

    },

    isSupportsPassive() {

        var supportsPassive = false;

        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
        } catch (e) {
            //
        }

        return supportsPassive;

    },

    isElementVisible(el) {

        var rect = el.getBoundingClientRect();

        let windowHeight = ( window.innerHeight || document.documentElement.clientHeight );

        if ( rect.top > -rect.height / 2 && rect.bottom <= windowHeight / 2 + rect.height ) {
            return true;
        } else {
            return false;
        }

    }

});
