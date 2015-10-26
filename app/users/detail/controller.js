import Ember from 'ember';
import inject from 'admin/utilities/inject';

export default Ember.Controller.extend({
    repository: inject('user'),
    actions: {
        updateUserProperty(property, value) {
            this.get('model').set(property, value);
        },
        saveUser() {
            let model = this.get('model');
            let repository = this.get('repository');
            repository.update(model).then(() => {
                this.transitionToRoute('users');
            });
        }
    }
});
