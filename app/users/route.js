import Ember from 'ember';
import inject from 'admin/utilities/inject';

export default Ember.Route.extend({
    repository: inject('user'),
    model: function() {
        let repository = this.get('repository');
        return repository.find();
    }
});
