cordova-domready
=================

Fires _deviceready_ when running in Cordova; _domready_ otherwise. For use with [Component(1)](http://github.com/component/component).

## Usage

```js
var ready = require('cordova-domready');

/**
 * In Cordova: will fire on `ondeviceready`
 * Otherwise: will fire on DOM ready
 */
function onReady () {
  document.querySelector('body').innerHTML = '<h1>Device Ready!</h1>';
}

// register listener
ready(onReady);
```
