import { attr, Model } from 'ember-cli-simple-store/model';

var User = Model.extend({
    name: attr(),
    serialize: function() {
        return {
            name: this.get('name')
        };
    }
});

export default User;
