import Mixin from '@ember/object/mixin';
import Evented from '@ember/object/evented';

export default Mixin.create(Evented, {
  init() {
    this._super(...arguments);

    // Setup event listers
    if (
      typeof window === 'object' &&
      typeof window.addEventListener === 'function'
    ) {
      window.addEventListener('online', this.trigger.bind(this, 'online'));
      window.addEventListener('offline', this.trigger.bind(this, 'offline'));
    }
  }
});
