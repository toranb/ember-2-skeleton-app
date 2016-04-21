import Ember from 'ember';
import { attr, Model } from 'ember-cli-simple-store/model';

var User = Model.extend({
    simpleStore: Ember.inject.service(),
    wat: Ember.computed(function() {
        return this.get('simpleStore').find('user');
    }),
    name: attr(),
    serialize: function() {
        return {
            name: this.get('name')
        };
    }
});

export default User;
