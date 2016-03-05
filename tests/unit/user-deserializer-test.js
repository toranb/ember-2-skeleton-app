import QUnit from 'qunit';
import {module} from 'admin/tests/helpers/qunit';
import users from 'admin/vendor/fixtures/users';
import UserDeserializer from 'admin/deserializers/user';
import registration from 'admin/tests/helpers/registration';

var store;

module('unit: user deserializer test', {
    beforeEach() {
        store = registration(this.container, this.registry, ['model:user']);
    }
});

QUnit.skip('api response deserialized into user models', (assert) => {
    //TODO: how to create this object with the correct owner/container
    var subject = UserDeserializer.create({store: store});
    subject.deserialize(users.list());
    var models = store.find('user');
    assert.equal(models.get('length'), 3);
    assert.equal(models.objectAt(0).get('name'), users.list()[0].name);
});
