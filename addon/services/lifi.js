import Service from '@ember/service';
import { get, set } from '@ember/object';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
  /**
   * Is online detection supported
   * @type {Boolean}
   */
  isSupported: computed(
    () =>
      typeof window === 'object' &&
      typeof navigator === 'object' &&
      typeof navigator.onLine === 'boolean'
  ),

  /**
   * Is connected online
   * @type {Boolean}
   */
  isOnline: computed({
    get() {
      return get(this, 'isSupported') ? navigator.onLine : false;
    },

    set(_, value) {
      assert(typeof value === 'boolean', 'online updated with boolean');
      return value;
    }
  }),

  init() {
    this._super(...arguments);

    if (get(this, 'isSupported')) {
      // Setup event listers
      window.addEventListener('online', this.trigger.bind(this, 'online'));
      window.addEventListener('offline', this.trigger.bind(this, 'offline'));

      // Apply updates from global online/offline events
      this.on('online', this._updateOnline.bind(this, 'online'));
      this.on('offline', this._updateOnline.bind(this, 'offline'));
    }
  },

  /**
   * Update `isOnline` from status
   * @param {String} status
   */
  _updateOnline(status) {
    assert(['online', 'offline'].includes(status), 'has valid status');

    if (!get(this, 'isDestroyed')) {
      set(this, 'isOnline', status === 'online');
    }
  }
});
