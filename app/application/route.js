import Ember from 'ember';

export default Ember.Route.extend({
    simpleStore: Ember.inject.service(),
    beforeModel() {
        let store = this.get('simpleStore');
        let configuration = Ember.$('[preload-roles]').html();
        let roles = JSON.parse(configuration);
        roles.forEach((json) => {
            store.push('role', json);
        });
    }
});
