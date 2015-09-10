import Ember from 'ember';
import inject from 'admin/utilities/inject';
import {ValidationMixin, validate} from 'ember-cli-simple-validation/mixins/validate';

export default Ember.Component.extend(ValidationMixin, {
    repository: inject('user'),
    nameValidation: validate('model.name'),
    actions: {
        save: function() {
            this.set('submitted', true);
            if(this.get('valid')) {
                let model = this.get('model');
                let repository = this.get('repository');
                repository.update(model).then(() => {
                    this.sendAction('redirect');
                });
            }
        }
    }
});
