"use strict";

const _actualNaN = require("./validators/actualNaN");
const _alpha = require("./validators/alpha");
const _alphanumeric = require("./validators/alphanumeric");
const _args = require("./validators/args");
const _argsEmpty = require("./validators/argsEmpty");
const _array = require("./validators/array");
const _arrayEmpty = require("./validators/arrayEmpty");
const _arrayLike = require("./validators/arrayLike");
const _ascii = require("./validators/ascii");

const _base32 = require("./validators/base32");
const _base58 = require("./validators/base58");
const _base64 = require("./validators/base64");
const _BIC = require("./validators/BIC");
const _bigint = require("./validators/bigint");
const _bool = require("./validators/bool");
const _btcAddress = require("./validators/btcAddress");
const _buffer = require("./validators/buffer");
const _byteLength = require("./validators/byteLength");

const _creditCard = require("./validators/creditCard");
const _currency = require("./validators/currency");

const _dataURI = require("./validators/dataURI");
const _date = require("./validators/date");
const _dateAfter = require("./validators/dateAfter");
const _dateBefore = require("./validators/dateBefore");
const _dateValid = require("./validators/dateValid");
const _decimal = require("./validators/decimal");
const _defined = require("./validators/defined");
const _divisibleBy = require("./validators/divisibleBy");

const _EAN = require("./validators/EAN");
const _element = require("./validators/element");
const _email = require("./validators/email");
const _empty = require("./validators/empty");
const _equal = require("./validators/equal");
const _error = require("./validators/error");
const _ethereumAddress = require("./validators/ethereumAddress");
const _even = require("./validators/even");

const _false = require("./validators/false");
const _float = require("./validators/float");
const _fn = require("./validators/fn");
const _FQDN = require("./validators/FQDN");
const _fullWidth = require("./validators/fullWidth");

const _greaterThan = require("./validators/greaterThan");
const _greaterThanOrEqualTo = require("./validators/greaterThanOrEqualTo");

const _halfWidth = require("./validators/halfWidth");
const _hash = require("./validators/hash");
const _hex = require("./validators/hex");
const _hexadecimal = require("./validators/hexadecimal");
const _hexColor = require("./validators/hexColor");
const _hosted = require("./validators/hosted");
const _HSL = require("./validators/HSL");

const _IBAN = require("./validators/IBAN");
const _identityCard = require("./validators/identityCard");
const _IMEI = require("./validators/IMEI");

const _infinite = require("./validators/infinite");
const _instance = require("./validators/instance");
const _integer = require("./validators/integer");
const _IP = require("./validators/IP");
const _IPRange = require("./validators/IPRange");
const _ISBN = require("./validators/ISBN");
const _ISIN = require("./validators/ISIN");
const _ISO8601 = require("./validators/ISO8601");
const _ISO31661Alpha2 = require("./validators/ISO31661Alpha2");
const _ISO31661Alpha3 = require("./validators/ISO31661Alpha3");
const _ISRC = require("./validators/ISRC");
const _ISSN = require("./validators/ISSN");

const _JSON = require("./validators/JSON");
const _JWT = require("./validators/JWT");

const _latLong = require("./validators/latLong");
const _lessThan = require("./validators/lessThan");
const _lessThanOrEqualTo = require("./validators/lessThanOrEqualTo");

const _locale = require("./validators/locale");
const _lowercase = require("./validators/lowercase");

const _MACAddress = require("./validators/MACAddress");
const _magnetURI = require("./validators/magnetURI");
const _maximum = require("./validators/maximum");
const _MD5 = require("./validators/MD5");
const _mimeType = require("./validators/mimeType");
const _minimum = require("./validators/minimum");
const _mobilePhone = require("./validators/mobilePhone");
const _mongoId = require("./validators/mongoId");
const _multibyte = require("./validators/multibyte");

const _nan = require("./validators/nan");
const _null = require("./validators/null");
const _number = require("./validators/number");

const _object = require("./validators/object");
const _objectLiteral = require("./validators/objectLiteral");
const _octal = require("./validators/octal");
const _odd = require("./validators/odd");

const _passportNumber = require("./validators/passportNumber");
const _pathToDir = require("./validators/pathToDir");
const _pathToFile = require("./validators/pathToFile");
const _portNumber = require("./validators/portNumber");
const _postalCode = require("./validators/postalCode");
const _primitive = require("./validators/primitive");

const _regexp = require("./validators/regexp");
const _RFC3339 = require("./validators/RFC3339");
const _rgbColor = require("./validators/rgbColor");

const _semVer = require("./validators/semVer");
const _slug = require("./validators/slug");
const _string = require("./validators/string");
const _stringBool = require("./validators/stringBool");
const _stringContains = require("./validators/stringContains");
const _stringDecimal = require("./validators/stringDecimal");
const _stringEmpty = require("./validators/stringEmpty");
const _stringEquals = require("./validators/stringEquals");
const _stringIn = require("./validators/stringIn");
const _stringInteger = require("./validators/stringInteger");
const _stringLength = require("./validators/stringLength");
const _stringMatches = require("./validators/stringMatches");
const _stringNumeric = require("./validators/stringNumeric");
const _strongPassword = require("./validators/strongPassword");
const _surrogatePair = require("./validators/surrogatePair");
const _svg = require("./validators/svg");
const _symbol = require("./validators/symbol");

const _taxID = require("./validators/taxID");
const _true = require("./validators/true");
const _type = require("./validators/type");

const _undefined = require("./validators/undefined");
const _uppercase = require("./validators/uppercase");
const _URL = require("./validators/URL");
const _UUID = require("./validators/UUID");

const _variableWidth = require("./validators/variableWidth");
const _vat = require("./validators/vat");

const _whitelisted = require("./validators/whitelisted");
const _within = require("./validators/within");

const internal = require("./internal");

var validator = Object.defineProperties(
  {},
  {
    _internal: {
      writable: false,
      value: internal,
    },
  }
);

Object.assign(validator, {
  actualNaN: _actualNaN,
  alpha: _alpha,
  alphanumeric: _alphanumeric,
  args: _args,
  argsEmpty: _argsEmpty,
  array: _array,
  arrayEmpty: _arrayEmpty,
  arrayLike: _arrayLike,
  ascii: _ascii,

  base32: _base32,
  base58: _base58,
  base64: _base64,
  BIC: _BIC,
  bigint: _bigint,
  bool: _bool,
  btcAddress: _btcAddress,
  buffer: _buffer,
  byteLength: _byteLength,

  creditCard: _creditCard,
  currency: _currency,

  dataURI: _dataURI,
  date: _date,
  dateAfter: _dateAfter,
  dateBefore: _dateBefore,
  dateValid: _dateValid,
  decimal: _decimal,
  defined: _defined,
  divisibleBy: _divisibleBy,

  EAN: _EAN,
  element: _element,
  email: _email,
  empty: _empty,
  equal: _equal,
  error: _error,
  ethereumAddress: _ethereumAddress,
  even: _even,

  false: _false,
  float: _float,
  fn: _fn,
  FQDN: _FQDN,
  fullWidth: _fullWidth,

  greaterThan: _greaterThan,
  greaterThanOrEqualTo: _greaterThanOrEqualTo,

  halfWidth: _halfWidth,
  hash: _hash,
  hex: _hex,
  hexadecimal: _hexadecimal,
  hexColor: _hexColor,
  hosted: _hosted,
  HSL: _HSL,

  IBAN: _IBAN,
  identityCard: _identityCard,
  IMEI: _IMEI,

  infinite: _infinite,
  instance: _instance,
  integer: _integer,
  IP: _IP,
  IPRange: _IPRange,
  ISBN: _ISBN,
  ISIN: _ISIN,
  ISO8601: _ISO8601,
  ISO31661Alpha2: _ISO31661Alpha2,
  ISO31661Alpha3: _ISO31661Alpha3,
  ISRC: _ISRC,
  ISSN: _ISSN,

  JSON: _JSON,
  JWT: _JWT,

  latLong: _latLong,
  lessThan: _lessThan,
  lessThanOrEqualTo: _lessThanOrEqualTo,

  locale: _locale,
  lowercase: _lowercase,

  MACAddress: _MACAddress,
  magnetURI: _magnetURI,
  maximum: _maximum,
  MD5: _MD5,
  mimeType: _mimeType,
  minimum: _minimum,
  mobilePhone: _mobilePhone,
  mongoId: _mongoId,
  multibyte: _multibyte,

  nan: _nan,
  null: _null,
  number: _number,

  object: _object,
  objectLiteral: _objectLiteral,
  octal: _octal,
  odd: _odd,

  passportNumber: _passportNumber,
  pathToDir: _pathToDir,
  pathToFile: _pathToFile,
  portNumber: _portNumber,
  postalCode: _postalCode,
  primitive: _primitive,

  regexp: _regexp,
  RFC3339: _RFC3339,
  rgbColor: _rgbColor,

  semVer: _semVer,
  slug: _slug,
  string: _string,
  stringBool: _stringBool,
  stringContains: _stringContains,
  stringDecimal: _stringDecimal,
  stringEmpty: _stringEmpty,
  stringEquals: _stringEquals,
  stringIn: _stringIn,
  stringInteger: _stringInteger,
  stringLength: _stringLength,
  stringMatches: _stringMatches,
  stringNumeric: _stringNumeric,
  strongPassword: _strongPassword,
  surrogatePair: _surrogatePair,
  svg: _svg,
  symbol: _symbol,

  taxID: _taxID,
  true: _true,
  type: _type,

  undefined: _undefined,
  uppercase: _uppercase,
  URL: _URL,
  UUID: _UUID,

  variableWidth: _variableWidth,
  vat: _vat,

  whitelisted: _whitelisted,
  within: _within,
});

module.exports = validator;
