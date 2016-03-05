import Ember from 'ember';

export default Ember.Object.extend({
    simpleStore: Ember.inject.service(),
    fetch: function() {
        let store = this.get('simpleStore');
        return store.find('role');
    }
});
