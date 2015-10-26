import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import registration from 'admin/tests/helpers/registration';

var store, user;

moduleForComponent('user-detail', 'integration: user-detail test', {
    integration: true,
    setup() {
        store = registration(this.container, this.registry, ['model:user']);
        user = store.push('user', {id: 1, name: 'Toran Billups'});
    }
});

test('name validation is configured to show and hide error messages', function(assert) {
    this.set('model', user);
    this.render(hbs`{{user-detail model=model}}`);
    let $component = this.$('.name-validation-error');
    assert.ok($component.is(':hidden'));
    this.$('.detail-name').val('a').trigger('input');
    assert.ok($component.is(':hidden'));
    this.$('.detail-name').val('').trigger('input');
    assert.ok($component.is(':visible'));
});
