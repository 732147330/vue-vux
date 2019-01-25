/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */
export default {
  bind: function (el, type, fn, capture) {
    var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var prefix = bind !== 'addEventListener' ? 'on' : '';
    el[bind](prefix + type, fn, capture || false);
    return fn
  },

  /**
   * Unbind `el` event `type`'s callback `fn`.
   *
   * @param {Element} el
   * @param {String} type
   * @param {Function} fn
   * @param {Boolean} capture
   * @return {Function}
   * @api public
   */

  unbind: function (el, type, fn, capture) {
    var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var prefix = bind !== 'addEventListener' ? 'on' : '';
    var unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
    el[unbind](prefix + type, fn, capture || false);
    return fn
  }
}

