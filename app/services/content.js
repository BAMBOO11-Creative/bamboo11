import Service from '@ember/service';
import config from 'ember-get-config';
import fetch from 'fetch';
import { inject } from '@ember/service';
import ArrayProxy from '@ember/array/proxy';
import Object from '@ember/object';

export default Service.extend({

    fastboot: inject(),

    //

    endpoint: Ember.computed(function() {
        return config.APP.endpoint;
    }),

    //

    async model() {

        const data = await this.load('content.json');

        this.set('html', data.html);

        this.set('navigation', ArrayProxy.create({ content:

            data.navigation.map(function(object) {
                return Object.create(object);
            })

        }));

        this.set('projects', data.projects);
        this.set('people', data.people);
        this.set('slides', data.slides);

        return data;

    },

    //

    async load(path) {

        if ( this.get('fastboot.isFastBoot') !== true ) {

            var data = this.getShoebox('GET', path);

            if ( data ) {

                return data;

            } else {

                return this.factory(path);

            }

        } else {

            return this.factory(path);

        }

    },

    // PRIVATE -----------------------------------------------------------------

    async factory(path) {

        var object = { method: 'GET', };

        // URL
        var url = path;
        if ( config.APP.endpoint ) {
            url = config.APP.endpoint + path;
        }

        const response = await fetch( url, object );
        const result = await response.json();

        if ( response.status < 200 || response.status >= 300 ) {
            throw result;
        }

        if ( this.get('fastboot.isFastBoot') === true ) {
            this.addShoebox('GET', path, result);
        }

        return result;

    },

    // SHOEBOX -----------------------------------------------------------------

    addShoebox(method, path, data) {

        this.get('fastboot.shoebox').put(this.getSelector(method, path), data);

    },

    getShoebox(method, path) {

        var data = this.get('fastboot.shoebox').retrieve(this.getSelector(method, path));

        return data;

    },

    getSelector(path, method) {

        var id = path + "-" + method;
        return id.split('/').join('-');

    }

});
