import Component from '@ember/component';
import Parallax from './../mixins/parallax';

export default Component.extend(Parallax, {

    classNames: ['bm-slide'],
    classNameBindings: [ 'isInView:visible' ],

});
