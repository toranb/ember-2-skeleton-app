import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        let store = this.get('store');
        let configuration = Ember.$('[preload-roles]').html();
        let roles = JSON.parse(configuration);
        roles.forEach((json) => {
            store.push('role', json);
        });
    }
});
