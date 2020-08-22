"use strict";

require("./src/validators/test.actualNaN");
require("./src/validators/test.alpha");
require("./src/validators/test.alphanumeric");
require("./src/validators/test.args");
require("./src/validators/test.argsEmpty");
require("./src/validators/test.array");
require("./src/validators/test.arrayEmpty");
require("./src/validators/test.arrayLike");
require("./src/validators/test.ascii");

require("./src/validators/test.base32");
require("./src/validators/test.base64");
require("./src/validators/test.BIC");
require("./src/validators/test.bigint");
require("./src/validators/test.bool");
require("./src/validators/test.btcAddress");
require("./src/validators/test.buffer");
require("./src/validators/test.byteLength");

require("./src/validators/test.creditCard");
require("./src/validators/test.currency");

require("./src/validators/test.dataURI");
require("./src/validators/test.date");
require("./src/validators/test.dateAfter");
require("./src/validators/test.dateBefore");
require("./src/validators/test.dateValid");
require("./src/validators/test.decimal");
require("./src/validators/test.defined");
require("./src/validators/test.divisibleBy");

require("./src/validators/test.EAN");
require("./src/validators/test.element");
require("./src/validators/test.email");
require("./src/validators/test.empty");
require("./src/validators/test.equal");
require("./src/validators/test.error");
require("./src/validators/test.ethereumAddress");
require("./src/validators/test.even");

require("./src/validators/test.false");
require("./src/validators/test.float");
require("./src/validators/test.fn");
require("./src/validators/test.FQDN");
require("./src/validators/test.fullWidth");

require("./src/validators/test.greaterThan");
require("./src/validators/test.greaterThanOrEqualTo");

require("./src/validators/test.halfWidth");
require("./src/validators/test.hash");
require("./src/validators/test.hex");
require("./src/validators/test.hexadecimal");
require("./src/validators/test.hexColor");
require("./src/validators/test.hosted");
require("./src/validators/test.HSL");

require("./src/validators/test.IBAN");
require("./src/validators/test.identityCard");
require("./src/validators/test.IMEI");
require("./src/validators/test.infinite");
require("./src/validators/test.instance");
require("./src/validators/test.integer");
require("./src/validators/test.IP");
require("./src/validators/test.IPRange");
require("./src/validators/test.ISBN");
require("./src/validators/test.ISIN");
require("./src/validators/test.ISO8601");
require("./src/validators/test.ISO31661Alpha2");
require("./src/validators/test.ISO31661Alpha3");
require("./src/validators/test.ISRC");
require("./src/validators/test.ISSN");

require("./src/validators/test.JSON");
require("./src/validators/test.JWT");

require("./src/validators/test.latLong");
require("./src/validators/test.lessThan");
require("./src/validators/test.lessThanOrEqualTo");
require("./src/validators/test.locale");
require("./src/validators/test.lowercase");

require("./src/validators/test.MACAddress");
require("./src/validators/test.magnetURI");
require("./src/validators/test.maximum");
require("./src/validators/test.MD5");
require("./src/validators/test.mimeType");
require("./src/validators/test.minimum");
require("./src/validators/test.mobilePhone");
require("./src/validators/test.mongoId");
require("./src/validators/test.multibyte");

require("./src/validators/test.nan");
require("./src/validators/test.null");
require("./src/validators/test.number");

require("./src/validators/test.object");
require("./src/validators/test.objectLiteral");
require("./src/validators/test.octal");
require("./src/validators/test.odd");

require("./src/validators/test.passportNumber");
require("./src/validators/test.pathToDir");
require("./src/validators/test.pathToFile");
require("./src/validators/test.portNumber");
require("./src/validators/test.postalCode");
require("./src/validators/test.primitive");

require("./src/validators/test.regexp");
require("./src/validators/test.RFC3339");
require("./src/validators/test.rgbColor");

require("./src/validators/test.semVer");
require("./src/validators/test.slug");
require("./src/validators/test.stringBool");
require("./src/validators/test.stringContains");
require("./src/validators/test.stringDecimal");
require("./src/validators/test.stringEmpty");
require("./src/validators/test.stringEquals");
require("./src/validators/test.stringIn");
require("./src/validators/test.stringInteger");
require("./src/validators/test.stringLength");
require("./src/validators/test.stringMatches");
require("./src/validators/test.stringNumeric");
require("./src/validators/test.surrogatePair");
require("./src/validators/test.svg");
require("./src/validators/test.symbol");

require("./src/validators/test.taxID");
require("./src/validators/test.true");
require("./src/validators/test.type");

require("./src/validators/test.undefined");
require("./src/validators/test.uppercase");
require("./src/validators/test.URL");
require("./src/validators/test.UUID");

require("./src/validators/test.variableWidth");

require("./src/validators/test.whitelisted");
require("./src/validators/test.within");

/**
 * @ignore
 * @description make sure that this is always last
 */
require("./src/env/test.browser");
