import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  lifi: service('lifi'),
  supported: reads('lifi.isSupported'),
  online: reads('lifi.isOnline')
});
