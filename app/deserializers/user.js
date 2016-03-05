import Ember from 'ember';

var UserDeserializer = Ember.Object.extend({
    simpleStore: Ember.inject.service(),
    deserialize(response) {
        let store = this.get('simpleStore');
        response.forEach(function(json) {
            store.push('user', json);
        });
    }
});

export default UserDeserializer;
