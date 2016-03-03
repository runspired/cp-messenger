import { test } from 'qunit';
import moduleForAcceptance from 'cp-messenger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login', {
  beforeEach(assert) {
    assert.session = this.application.__container__.lookup('session:service');
  },
  afterEach(assert) {
    assert.session = null;
  }
});

test('visiting /login works correctly', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting / redirects to login when not authenticated', function(assert) {
  assert.session.set('isAuthenticated', false);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /login redirects to / when authenticated', function(assert) {
  assert.session.set('isAuthenticated', true);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('you can create a new user', function(assert) {
  assert.session.set('isAuthenticated', false);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('you can login a new user', function(assert) {
  assert.session.set('isAuthenticated', false);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('you can logout a user', function(assert) {

});


test('login form works for an existing user', function(assert) {
  assert.session.set('isAuthenticated', false);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('you can remove a user', function(assert) {

});


