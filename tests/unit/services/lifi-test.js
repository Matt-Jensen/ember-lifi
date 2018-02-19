import { get } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | lifi', function(hooks) {
  setupTest(hooks);

  test('it has an `isSupported` boolean', function(assert) {
    const service = this.owner.lookup('service:lifi');
    assert.strictEqual(typeof get(service, 'isSupported'), 'boolean');
  });

  test('it has an `isOnline` boolean', function(assert) {
    const service = this.owner.lookup('service:lifi');
    assert.strictEqual(typeof get(service, 'isOnline'), 'boolean');
  });

  test('it is not online when `offline` event is triggered', function(assert) {
    const service = this.owner.lookup('service:lifi');
    service.set('isOnline', true);
    service.trigger('offline');
    assert.strictEqual(get(service, 'isOnline'), false);
  });

  test('it is online when `online` event is triggered', function(assert) {
    const service = this.owner.lookup('service:lifi');
    service.set('isOnline', false);
    service.trigger('online');
    assert.strictEqual(get(service, 'isOnline'), true);
  });
});
