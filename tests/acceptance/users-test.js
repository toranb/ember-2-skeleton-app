import Ember from 'ember';
import { test } from 'qunit';
import xhr from 'admin/tests/helpers/xhr';
import users from 'admin/vendor/fixtures/users';
import module from 'admin/tests/helpers/module';
import startApp from 'admin/tests/helpers/start-app';

var application;

module('Acceptance: Users', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('should redirect to users list and show each full name', function(assert) {
    xhr('/api/users', 'GET', 200, users.list());
    visit('/');
    andThen(function() {
        assert.equal(currentURL(), '/users');
        assert.equal(find('.user-list-item').length, 3);
        assert.equal(find('.list-detail-link:eq(0)').text(), users.list()[0].name);
        assert.equal(find('.list-detail-link:eq(1)').text(), users.list()[1].name);
        assert.equal(find('.list-detail-link:eq(2)').text(), users.list()[2].name);
    });
});

test('clicking the details link should load up the detail view', function(assert) {
    xhr('/api/users', 'GET', 200, users.list());
    visit('/users');
    click('.list-detail-link:eq(0)');
    andThen(function() {
        assert.equal(currentURL(), '/users/1');
        assert.equal(find('.detail-name').val(), users.list()[0].name);
        assert.equal(find('.save-btn').text(), 'Save');
    });
});

test('changing the detail model will also update the original list model', function(assert) {
    xhr('/api/users', 'GET', 200, users.list());
    visit('/users');
    click('.list-detail-link:eq(0)');
    fillIn('.detail-name', 'wat');
    andThen(function() {
        assert.equal(find('.detail-name').val(), 'wat');
        assert.equal(find('.list-detail-link:eq(0)').text(), 'wat');
    });
});

test('clicking save will fire xhr with user data and redirect to the list view', function(assert) {
    xhr('/api/users', 'GET', 200, users.list());
    visit('/users/1');
    fillIn('.detail-name', 'wat');
    click('.save-btn');
    xhr('/api/users/1', 'PUT', 200, users.list()[0], {name: 'wat'});
    andThen(function() {
        assert.equal(currentURL(), '/users');
    });
});
