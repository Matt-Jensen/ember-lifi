import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  lifi: service(),

  afterModel() {
    this._super(...arguments);
    get(this, 'lifi').on('online', this._logEventType);
    get(this, 'lifi').on('offline', this._logEventType);
  },

  _logEventType({ type }) {
    console.log(`Route:${type}`); // eslint-disable-line no-console
  }
});
