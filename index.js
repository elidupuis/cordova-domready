var domready = require('domready');
var _isCordova = false;

/**
 * Call `fn` once the DOM or Device is ready.
 * deviceready is a Cordova event
 *
 * @api public
 */

module.exports = function (fn) {
  domready(function() {
    // are we running in native app or in a browser?
    if('file:' === document.location.protocol) {
      _isCordova = true;
    }

    if(_isCordova) {
      document.addEventListener("deviceready", fn, false);
    } else {
      fn();
    }
  });
};
