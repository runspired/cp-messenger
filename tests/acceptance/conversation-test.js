import { test } from 'qunit';
import moduleForAcceptance from 'cp-messenger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | conversation');

test('visiting /conversation', function(assert) {
  visit('/conversation');

  andThen(function() {
    assert.equal(currentURL(), '/conversation');
  });
});
