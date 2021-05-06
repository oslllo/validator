"use strict";

/**
 * @name element
 * @description Test if `value` is an html element.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @access public
 * @example
 *
 * var el = document.createElement("div");
 * is.element(el); // => True
 * is.element({ nodeType: 1 }); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  var htmlelement = this._internal._window.HTMLElement;

  return (
    value !== undefined &&
        typeof htmlelement !== "undefined" &&
        value instanceof htmlelement &&
        value.nodeType === 1
  );
};
