import {module, test} from 'admin/tests/helpers/qunit';
import users from 'admin/vendor/fixtures/users';
import UserDeserializer from 'admin/deserializers/user';
import registration from 'admin/tests/helpers/registration';
import User from 'admin/models/user';

var store;

module('unit: user deserializer test', {
    beforeEach() {
        store = registration(this.container, this.registry, ['model:user']);
    }
});

test('api response deserialized into user models', (assert) => {
    var subject = UserDeserializer.create({simpleStore: store});
    subject.deserialize(users.list());
    var models = store.find('user');
    assert.equal(models.get('length'), 3);
    assert.equal(models.objectAt(0).get('name'), users.list()[0].name);
});

test('toran wat', (assert) => {
    store.push('user', {id: 1});
    var user = store.findOne('user');
    var models = store.find('user');
    assert.equal(models.get('length'), 1);
    assert.equal(user.get('wat').get('length'), 1);
});

test('toran wat2', (assert) => {
    const user = User.create({simpleStore: store, id: 1});
    store.push('user', {id: 1});
    var models = store.find('user');
    assert.equal(models.get('length'), 1);
    assert.equal(user.get('wat').get('length'), 1);
});
