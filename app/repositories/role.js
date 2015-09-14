import Ember from 'ember';

export default Ember.Object.extend({
    fetch: function() {
        let store = this.get('store');
        return store.find('role');
    }
});
