import User from 'admin/models/user';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('user-detail', 'integration: user-detail test', {
    integration: true
});

test('name validation is configured to show and hide error messages', function(assert) {
    this.set('model', User.create());
    this.render(hbs`{{user-detail model=model}}`);
    var $component = this.$('.name-validation-error');
    assert.ok($component.is(':hidden'));
    this.$('.detail-name').val('a').trigger('change');
    assert.ok($component.is(':hidden'));
    this.$('.detail-name').val('').trigger('change');
    assert.ok($component.is(':visible'));
});
