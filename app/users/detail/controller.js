import Ember from 'ember';
import inject from 'admin/utilities/inject';

export default Ember.Controller.extend({
    repository: inject('user'),
    actions: {
        saveUser() {
            let model = this.get('model');
            let repository = this.get('repository');
            repository.update(model).then(() => {
                this.transitionToRoute('users');
            });
        }
    }
});
