import Service from '@ember/service';
import { get, set } from '@ember/object';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import LifiEvents from '../mixins/events';

export default Service.extend(LifiEvents, {
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

    // Apply updates from global online/offline events
    this.on('online', set.bind(this, this, 'isOnline', true));
    this.on('offline', set.bind(this, this, 'isOnline', false));
  }
});
