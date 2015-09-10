import Ember from 'ember';

var UserDeserializer = Ember.Object.extend({
    deserialize(response) {
        let store = this.get('store');
        response.forEach(function(json) {
            store.push('user', json);
        });
    }
});

export default UserDeserializer;
