import EmberObject from '@ember/object';
import EventsMixin from 'ember-lifi/mixins/events';
import { module, test } from 'qunit';

module('Unit | Mixin | events', function() {
  test('it triggers online/offline events', function(assert) {
    assert.expect(2);
    const subject = EmberObject.extend(EventsMixin).create();
    const onlineEvent = new Event('online');
    const offlineEvent = new Event('offline');

    subject.on('online', () => assert.ok(true));
    subject.on('offline', () => assert.ok(true));

    window.dispatchEvent(onlineEvent);
    window.dispatchEvent(offlineEvent);
  });
});
