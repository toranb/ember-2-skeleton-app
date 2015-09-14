import Ember from 'ember';
import inject from 'admin/utilities/inject';

export default Ember.Route.extend({
    repository: inject('user'),
    model: function(params) {
        let repository = this.get('repository');
        return repository.fetchById(params.user_id);
    }
});
