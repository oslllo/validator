"use strict";

var Validator = require("./constructor");

require("./validators/actualNaN")(Validator);
require("./validators/alpha")(Validator);
require("./validators/alphanumeric")(Validator);
require("./validators/args")(Validator);
require("./validators/argsEmpty")(Validator);
require("./validators/array")(Validator);
require("./validators/arrayEmpty")(Validator);
require("./validators/arrayLike")(Validator);
require("./validators/ascii")(Validator);

require("./validators/base32")(Validator);
require("./validators/base64")(Validator);
require("./validators/BIC")(Validator);
require("./validators/bigint")(Validator);
require("./validators/bool")(Validator);
require("./validators/btcAddress")(Validator);
require("./validators/buffer")(Validator);
require("./validators/byteLength")(Validator);

require("./validators/creditCard")(Validator);
require("./validators/currency")(Validator);

require("./validators/dataURI")(Validator);
require("./validators/date")(Validator);
require("./validators/dateAfter")(Validator);
require("./validators/dateBefore")(Validator);
require("./validators/dateValid")(Validator);
require("./validators/decimal")(Validator);
require("./validators/defined")(Validator);
require("./validators/divisibleBy")(Validator);

require("./validators/EAN")(Validator);
require("./validators/element")(Validator);
require("./validators/email")(Validator);
require("./validators/empty")(Validator);
require("./validators/equal")(Validator);
require("./validators/error")(Validator);
require("./validators/ethereumAddress")(Validator);
require("./validators/even")(Validator);

require("./validators/false")(Validator);
require("./validators/float")(Validator);
require("./validators/fn")(Validator);
require("./validators/FQDN")(Validator);
require("./validators/fullWidth")(Validator);

require("./validators/greaterThan")(Validator);
require("./validators/greaterThanOrEqualTo")(Validator);

require("./validators/halfWidth")(Validator);
require("./validators/hash")(Validator);
require("./validators/hex")(Validator);
require("./validators/hexadecimal")(Validator);
require("./validators/hexColor")(Validator);
require("./validators/hosted")(Validator);
require("./validators/HSL")(Validator);

require("./validators/IBAN")(Validator);
require("./validators/identityCard")(Validator);
require("./validators/IMEI")(Validator);

require("./validators/infinite")(Validator);
require("./validators/instance")(Validator);
require("./validators/integer")(Validator);
require("./validators/IP")(Validator);
require("./validators/IPRange")(Validator);
require("./validators/ISBN")(Validator);
require("./validators/ISIN")(Validator);
require("./validators/ISO8601")(Validator);
require("./validators/ISO31661Alpha2")(Validator);
require("./validators/ISO31661Alpha3")(Validator);
require("./validators/ISRC")(Validator);
require("./validators/ISSN")(Validator);

require("./validators/JSON")(Validator);
require("./validators/JWT")(Validator);

require("./validators/latLong")(Validator);
require("./validators/lessThan")(Validator);
require("./validators/lessThanOrEqualTo")(Validator);

require("./validators/locale")(Validator);
require("./validators/lowercase")(Validator);

require("./validators/MACAddress")(Validator);
require("./validators/magnetURI")(Validator);
require("./validators/maximum")(Validator);
require("./validators/MD5")(Validator);
require("./validators/mimeType")(Validator);
require("./validators/minimum")(Validator);
require("./validators/mobilePhone")(Validator);
require("./validators/mongoId")(Validator);
require("./validators/multibyte")(Validator);

require("./validators/nan")(Validator);
require("./validators/null")(Validator);
require("./validators/number")(Validator);

require("./validators/object")(Validator);
require("./validators/objectLiteral")(Validator);
require("./validators/octal")(Validator);
require("./validators/odd")(Validator);

require("./validators/passportNumber")(Validator);
require("./validators/portNumber")(Validator);
require("./validators/postalCode")(Validator);
require("./validators/primitive")(Validator);

require("./validators/regexp")(Validator);
require("./validators/RFC3339")(Validator);
require("./validators/rgbColor")(Validator);

require("./validators/semVer")(Validator);
require("./validators/slug")(Validator);
require("./validators/string")(Validator);
require("./validators/stringBool")(Validator);
require("./validators/stringContains")(Validator);
require("./validators/stringDecimal")(Validator);
require("./validators/stringEmpty")(Validator);
require("./validators/stringEquals")(Validator);
require("./validators/stringIn")(Validator);
require("./validators/stringInteger")(Validator);
require("./validators/stringLength")(Validator);
require("./validators/stringMatches")(Validator);
require("./validators/stringNumeric")(Validator);
require("./validators/surrogatePair")(Validator);
require("./validators/svg")(Validator);
require("./validators/symbol")(Validator);

require("./validators/taxID")(Validator);
require("./validators/true")(Validator);
require("./validators/type")(Validator);

require("./validators/undefined")(Validator);
require("./validators/uppercase")(Validator);
require("./validators/URL")(Validator);
require("./validators/UUID")(Validator);

require("./validators/variableWidth")(Validator);

require("./validators/whitelisted")(Validator);
require("./validators/within")(Validator);

module.exports = new Validator();
