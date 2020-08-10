"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.element", () => {

});

// test('is.element', function (t) {
//     t.notOk(is.element(), 'undefined is not element');
  
//     t.test('when HTMLElement exists', { skip: typeof HTMLElement === 'undefined' }, function (st) {
//       var element = document.createElement('div');
//       st.ok(is.element(element), 'HTMLElement is element');
//       st.notOk(is.element({ nodeType: 1 }), 'object with nodeType is not element');
//       st.end();
//     });
  
//     t.end();
// });