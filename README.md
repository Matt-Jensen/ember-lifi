# ember-lifi [![Build Status](https://travis-ci.org/Matt-Jensen/ember-lifi.svg?branch=master)](https://travis-ci.org/Matt-Jensen/ember-lifi) [![Ember Observer Score](http://emberobserver.com/badges/ember-lifi.svg)](http://emberobserver.com/addons/ember-lifi) [![Code Climate](https://codeclimate.com/github/Matt-Jensen/ember-lifi/badges/gpa.svg)](https://codeclimate.com/github/Matt-Jensen/ember-lifi)

A small service for detecting internet connection

## Installation

```
ember install ember-lifi
```

## Usage

Basic

```js
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Component.extend({
  lifi: service(),
  isOnline: reads('lifi.isOnline')
});
```

Events

```js
import { inject as service } from '@ember/service';

export default Component.extend({
  lifi: service(),

  didInsertElement() {
    this._super(...arguments);

    this.get('lifi').on('offline', () => {
      alert('The end is nigh!');
    });

    this.get('lifi').on('online', () => {
      alert('False alarm');
    });
  }
});
```

## Contributing

### Installation

* `git clone <repository-url>`
* `cd ember-lifi`
* `nvm use`
* `yarn`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
