import Ember from 'ember';
import inject from 'admin/utilities/deserializer';
import PromiseMixin from 'ember-promise/mixins/promise';

export default Ember.Object.extend({
    deserializer: inject('user'),
    find: function() {
        let store = this.get('store');
        PromiseMixin.xhr('/api/users').then(response => {
            this.get('deserializer').deserialize(response);
        });
        return store.find('user');
    },
    update: function(model) {
        let endpoint = '/api/users/' + model.get('id');
        return PromiseMixin.xhr(endpoint, 'PUT', {data: model.serialize()}).then(() => {
            model.save();
        });
    },
    fetchById: function(id) {
        let store = this.get('store');
        return store.find('user', id);
    }
});
