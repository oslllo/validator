"use strict";

require("./src/validators/test.actualNaN");

require("./src/validators/test.base64");
require("./src/validators/test.buffer");

require("./src/validators/test.dataURI");
require("./src/validators/test.defined");

require("./src/validators/test.empty");
require("./src/validators/test.element");

require("./src/validators/test.fn");

require("./src/validators/test.hexColor");

require("./src/validators/test.number");

require("./src/validators/test.object");

require("./src/validators/test.pathToDir");
require("./src/validators/test.pathToFile");

require("./src/validators/test.string");
require("./src/validators/test.svg");

/**
 * @ignore
 * @description make sure that this is always last
 */
require("./src/env/test.browser");
