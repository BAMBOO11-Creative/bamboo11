import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {

    classNames: ['bm-slide'],
    classNameBindings: [ 'visible' ],
    viewportSpy: true,
    viewportUseRAF                  : true,
    viewportEnabled                 : true,

    didEnterViewport() {
        this.set('visible', true);
    },

    didExitViewport() {
        this.set('visible', false);
    }

});
