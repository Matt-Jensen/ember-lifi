import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  lifi: service('lifi'),
  supported: reads('lifi.isSupported'),
  online: reads('lifi.isOnline'),

  init() {
    this._super(...arguments);
    get(this, 'lifi').on('online', this._logEventType);
    get(this, 'lifi').on('offline', this._logEventType);
  },

  _logEventType({ type }) {
    console.log(`Controller:${type}`); // eslint-disable-line no-console
  }
});
