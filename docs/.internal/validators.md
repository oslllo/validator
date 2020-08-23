<a name="actualNaN"></a>

### actualNaN(value) ⇒ <code>Boolean</code>
Test if `value` is actual NaN.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is actual NaN, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.actualNaN(NaN); // => True
is.actualNaN(null); // => False
is.actualNaN(undefined); // => False
is.actualNaN(0); // => False
```

* * *

<a name="alpha"></a>

### alpha(value, [locale]) ⇒ <code>Boolean</code>
Test if `value` contains only letters (a-zA-Z).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value`only contains the letters, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [locale] | <code>String</code> | <code>en-US</code> | `locale` is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']) and defaults to en-US |

**Example**  
```js
is.alpha("abc"); // => True
is.alpha("abc1"); // => False

is.alpha("абв", "bg-BG"); // => True
is.alpha("abc1", "bg-BG"); // => False
```

* * *

<a name="alphanumeric"></a>

### alphanumeric(value, [locale]) ⇒ <code>Boolean</code>
Test if `value` contains only letters and numbers.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains the letters and numbers, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [locale] | <code>String</code> | <code>en-US</code> | `locale` value is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']) and defaults to en-US. |

**Example**  
```js
is.alphanumeric("abc123"); // => True
is.alphanumeric("abc123!!"); // => False

is.alphanumeric("ABC11", "en-GB"); // => True
is.alphanumeric("foo!!", "en-GB"); // => False
```

* * *

<a name="args"></a>

### args(value) ⇒ <code>Boolean</code>
Test if `value` is an arguments object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an arguments object, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
var valid = (function(){ return arguments })();
var invalid = Object({ arguments: 1 });

is.args(valid); // => True
is.args(invalid); // => False
```

* * *

<a name="argsEmpty"></a>

### argsEmpty(value) ⇒ <code>Boolean</code>
Test if `value` is an empty arguments object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an empty arguments object, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
var emptyArgs = (function(){ return arguments })();
var notEmptyArgs = (function(arg1, arg2){ return arguments })(1, 2);

is.argsEmpty(emptyArgs); // => True
is.argsEmpty(notEmptyArgs); // => False
```

* * *

<a name="array"></a>

### array(value) ⇒ <code>Boolean</code>
Test if `value` is an array.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an array, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.array([1, 2, 3]); // => True
is.array(true); // => False
```

* * *

<a name="arrayEmpty"></a>

### arrayEmpty(value) ⇒ <code>Boolean</code>
Test if `value` is an empty array.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an empty array, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.arrayEmpty([]) // => True
is.arrayEmpty([1, 2, 3]) // => False
```

* * *

<a name="arrayLike"></a>

### arrayLike(value) ⇒ <code>Boolean</code>
Test if `value` is an arraylike object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an arraylike object, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.arrayLike(undefined); // => False
is.arrayLike(false); // => False
is.arrayLike({ length: -1 }); // => False

is.arrayLike([]); // => True
is.arrayLike({ length: 0 }); // => True
is.arrayLike({ length: 1 }); // => True
```

* * *

<a name="ascii"></a>

### ascii(value) ⇒ <code>Boolean</code>
Test if `value` contains ASCII chars only.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains ASCII chars only, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ascii("0987654321"); // => True
is.ascii("foobar"); // => True

is.ascii("ｆｏｏbar"); // => False
is.ascii("ｘｙｚ０９８"); // => False
```

* * *

<a name="base32"></a>

### base32(value) ⇒ <code>Boolean</code>
Test if `value` is base32 encoded.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains ASCII chars only, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.base32("ZG======") // => True
is.base32("12345") // => False
```

* * *

<a name="base64"></a>

### base64(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is base64 encoded.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a base64 encoded string, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{urlSafe: false}</code> | options, when urlSafe is true it tests the given base64 encoded string is url safe |

**Example**  
```js
is.base64("U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==") // => True
is.base64("12345") // => False

is.base64("bXVtLW5ldmVyLXByb3Vk", { urlSafe: true }) // => True
is.base64("This+isa/bad+base64Url==", { urlSafe: true }) // => False
```

* * *

<a name="BIC"></a>

### BIC(value) ⇒ <code>Boolean</code>
Test if `value` is a BIC (Bank Identification Code) or SWIFT code.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a BIC (Bank Identification Code) or SWIFT code, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.BIC("SBICKEN1345"); // => True
is.BIC("S23CKENXXXX"); // => False
```

* * *

<a name="bigint"></a>

### bigint(value) ⇒ <code>Boolean</code>
Test if `value` is an ES-proposed BigInt

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a BigInt, false otherise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.bigint(BigInt(42)); // => True
is.bigint(123); // => False
```

* * *

<a name="bool"></a>

### bool(value) ⇒ <code>Boolean</code>
Test if `value` is a boolean.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a boolean, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.bool(true); // => True
is.bool(1); // => False
```

* * *

<a name="btcAddress"></a>

### btcAddress(value) ⇒ <code>Boolean</code>
Test if `value` is a valid BTC address.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid BTC address, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.btcAddress("1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL"); // => True
is.btcAddress("4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"); // => False
```

* * *

<a name="buffer"></a>

### buffer(value) ⇒ <code>Boolean</code>
Test if the 'value is a buffer.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a buffer, false otherise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.buffer(Buffer.from("123")); // => True
is.buffer(new Object(123)); // => False
```

* * *

<a name="byteLength"></a>

### byteLength(value, [options]) ⇒ <code>Boolean</code>
Test if `value`'s length (in UTF-8 bytes) falls in a range.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value`'s length (in UTF-8 bytes) falls in a range, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Number</code> \| <code>Object</code> | <code>{min:0, max: undefined}</code> | options value |

**Example**  
```js
is.byteLength("abc", 2); // => True
is.byteLength("a", 2); // => False

is.byteLength("de", { min: 2, max: 3 }); // => True
is.byteLength("a", { min: 2, max: 3 }); // => False
```

* * *

<a name="creditCard"></a>

### creditCard(value) ⇒ <code>Boolean</code>
Test if `value`is a credit card.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a credit card, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.creditCard("375556917985515"); // => True
is.creditCard("5398228707871528"); // => False
is.creditCard("foo"); // => False
```

* * *

<a name="currency"></a>

### currency(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is a valid currency amount.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid currency amount, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{symbol: &#x27;$&#x27;, require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: &#x27;,&#x27;, decimal_separator: &#x27;.&#x27;, allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}</code> | The array digits_after_decimal is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3]. |

**Example**  
```js
is.currency("-$10,123.45"); // => True
is.currency("$1.1"); // => False

is.currency("-$10,123", { allow_decimal: false }); // => True
is.currency("'-$10,123.45", { allow_decimal: false }); // => False
```

* * *

<a name="dataURI"></a>

### dataURI(value) ⇒ <code>Boolean</code>
Test if `value` is a data uri format.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a data uri format, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.dataURI("data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D"); // => True
is.dataURI("data:,A%20brief%20invalid%20[note"); // => False
```

* * *

<a name="date"></a>

### date(value, [format]) ⇒ <code>Boolean</code>
Test if `value` is a valid date. e.g. [2002-07-15, new Date()].

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid date, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [format] | <code>String</code> | <code>&quot;YYYY/MM/DD&quot;</code> | date format to check with |

**Example**  
```js
is.date(new Date()); // => True
is.date(Object(42)); // => False

is.date("15-07-02", "DD/MM/YY"); // => True
is.date("15/7/2002", "DD/MM/YY"); // => False
```

* * *

<a name="dateAfter"></a>

### dateAfter(value, [date]) ⇒ <code>Boolean</code>
Test if `value` is a date that's after the specified date (defaults to now).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a date that's after the specified date, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | starting date |
| [date] | <code>String</code> | <code>new Date().toString()</code> | after date |

**Example**  
```js
is.dateAfter("2011-08-04", "2011-08-03"); // True
is.dateAfter("2010-07-02", "2011-08-03"); // False
```

* * *

<a name="dateBefore"></a>

### dateBefore(value, date) ⇒ <code>Boolean</code>
Test if `value` is a date that's before the specified date.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a date that's before the specified date., false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | starting date |
| date | <code>String</code> | before date |

**Example**  
```js
is.dateBefore("2010-07-02", new Date(2011, 7, 4).toString()); // True
is.dateBefore('08/04/2011', new Date(2011, 7, 4).toString()); // False
```

* * *

<a name="dateValid"></a>

### dateValid(value) ⇒ <code>Boolean</code>
Test if `value` is a valid date.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid date, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.dateValid(new Date()); // => True
is.dateValid({}); // => False
```

* * *

<a name="decimal"></a>

### decimal(value) ⇒ <code>Boolean</code>
Test if `value` is a decimal number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a decimal number, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.decimal(1.1); // => True
is.decimal(123); // => False
```

* * *

<a name="defined"></a>

### defined(value) ⇒ <code>Boolean</code>
Test if `value` is defined.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is defined, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.defined("foobar"); // => True
is.defined(undefined); // => False
```

* * *

<a name="divisibleBy"></a>

### divisibleBy(value, n) ⇒ <code>Boolean</code>
Test if `value` is divisible by `n`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is divisible by `n`, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| n | <code>Number</code> | dividend |

**Example**  
```js
is.divisibleBy(4, 2); // => True
is.divisibleBy(1, 0); // => False
```

* * *

<a name="EAN"></a>

### EAN(value) ⇒ <code>Boolean</code>
Test if `value` is an EAN (European Article Number).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an EAN (European Article Number), false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.EAN("9421023610112"); // => True
is.EAN("079777681629"); // => False
```

* * *

<a name="element"></a>

### element(value) ⇒ <code>Boolean</code>
Test if `value` is an html element.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an HTML Element, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
var el = document.createElement("div");
is.element(el); // => True
is.element({ nodeType: 1 }); // => False
```

* * *

<a name="email"></a>

### email(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is an email.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an email, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false }</code> | options object. If allow_display_name is set to true, the validator will also match Display Name <email-address>. If require_display_name is set to true, the validator will reject strings without the format Display Name <email-address>. If allow_utf8_local_part is set to false, the validator  will not allow any non-English UTF8 character in email address' local part. If require_tld is set to false, e-mail addresses without having TLD in their domain will also be matched. If ignore_max_length is set to true, the validator will not check for the standard max length of an email. If allow_ip_domain is set to true, the validator will allow IP addresses in the host part. If domain_specific_validation is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail. |

**Example**  
```js
is.email("foo@bar.com"); // => True
is.email("invalidemail@"); // => False

is.email("foobar@gmail.com", { domain_specific_validation: true }); // => True
is.email("test@gmail.com", { domain_specific_validation: true }); // => False
```

* * *

<a name="empty"></a>

### empty(value) ⇒ <code>Boolean</code>
Test if `value` is empty.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is empty, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.empty(NaN); // => True
is.empty([1, 2, 3]); // => False
```

* * *

<a name="equal"></a>

### equal(value, other) ⇒ <code>Boolean</code>
Test if `value` is equal to `other`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is equal to `other`, false otherwise  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| other | <code>\*</code> | value to compare with |

**Example**  
```js
is.equal(true, true); // => True
is.equal([1, 2, 3], [2, 3]); // => False
```

* * *

<a name="error"></a>

### error(value) ⇒ <code>Boolean</code>
Test if `value` is an error object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an error object, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.error(new Error("foo")); // => True
is.error({ error: true }); // => False
```

* * *

<a name="ethereumAddress"></a>

### ethereumAddress(value) ⇒ <code>Boolean</code>
Test if `value` is an Ethereum address using basic regex.
Does not validate address checksums.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an Ethereum address using basic regex, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.ethereumAddress("0x0000000000000000000000000000000000000001"); // => True
is.ethereumAddress("1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU"); // => False
```

* * *

<a name="even"></a>

### even(value) ⇒ <code>Boolean</code>
Test if `value` is an even number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an even number, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |

**Example**  
```js
is.even(2); // => True
is.even(7.1); // => False
```

* * *

<a name="false"></a>

### false(value) ⇒ <code>Boolean</code>
Test if `value` is false.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is false, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.false(false); // => True
is.false(0); // => False
```

* * *

<a name="float"></a>

### float(value, options) ⇒ <code>Boolean</code>
Test if `value` is is a float.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a float, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| options | <code>Object</code> | options object. contains the keys min, max, gt, and/or lt to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }) it also has locale as an option. min and max are equivalent to 'greater or equal' and 'less or equal', respectively while gt and lt are their strict counterparts. locale determines the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'] |

**Example**  
```js
is.float(123.0); // => True
is.float(+); // => False

is.float('123.123', { locale: "en-AU" }); // => True
is.float(('123,123', { locale: "en-AU" }); // => False
```

* * *

<a name="fn"></a>

### fn(value) ⇒ <code>Boolean</code>
Test if `value` is a function.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a function, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.fn(function () {}); // => True
is.fn({}); // => False
```

* * *

<a name="FQDN"></a>

### FQDN(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is a fully qualified domain name (e.g. domain.com).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a fully qualified domain name (e.g. domain.com), false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{ require_tld: true, allow_underscores: false, allow_trailing_dot: false }</code> | options object |

**Example**  
```js
is.FQDN("domain.com"); // True
is.FQDN("256.0.0.0"); // False

is.FQDN("example.com.", { allow_trailing_dot: true }); // True
```

* * *

<a name="fullWidth"></a>

### fullWidth(value) ⇒ <code>Boolean</code>
Test if `value` contains any full-width chars.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains any full-width chars, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.fullWidth("ひらがな・カタカナ、．漢字"); // => True
is.fullWidth("abc123"); // => False
```

* * *

<a name="greaterThan"></a>

### greaterThan(value, other) ⇒ <code>Boolean</code>
Test if `value` is greater than `other`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is greater than `other`, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| other | <code>Number</code> | value to compare with |

**Example**  
```js
is.greaterThan(3, 2); // => True
is.greaterThan("abc", "a"); // => True

is.greaterThan(3, 3); // => False
is.greaterThan("a", "abc"); // => False
```

* * *

<a name="greaterThanOrEqualTo"></a>

### greaterThanOrEqualTo(value, other) ⇒ <code>Boolean</code>
Test if `value` is greater than or equal to `other`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is greater than or equal to `other`, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| other | <code>Number</code> | value to compare with |

**Example**  
```js
is.greaterThanOrEqualTo(3, 2); // => True
is.greaterThanOrEqualTo(3, 3); // => True

is.greaterThanOrEqualTo(2, 3); // => False
is.greaterThanOrEqualTo("abc", "a"); // => False
```

* * *

<a name="halfWidth"></a>

### halfWidth(value) ⇒ <code>Boolean</code>
Test if `value` contains any half-width chars.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains any half-width chars, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.halfWidth("abc123い"); // => True
is.halfWidth("あいうえお"); // => False
```

* * *

<a name="hash"></a>

### hash(value, algorithm) ⇒ <code>Boolean</code>
Test if `value` is a hash of type algorithm.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a hash of type algorithm, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| algorithm | <code>String</code> | one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b'] |

**Example**  
```js
is.hash("d94f3f016ae679c3008de268209132f2", "md5"); // => True
is.hash("q94375dj93458w34", "md5"); // => False
```

* * *

<a name="hex"></a>

### hex(value) ⇒ <code>Boolean</code>
Test if `value` is a valid hex encoded string.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a hex encoded string, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.hex("abcdABCD1234"); // => True
is.hex("wxyzWXYZ1234/+=="); // => False
```

* * *

<a name="hexadecimal"></a>

### hexadecimal(value) ⇒ <code>Boolean</code>
Test if `value` is a hexadecimal number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a hexadecimal number, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.hexadecimal("deadBEEF"); // => True
is.hexadecimal("abcdefg"); // => False
```

* * *

<a name="hexColor"></a>

### hexColor(value) ⇒ <code>Boolean</code>
Test if `value`  is a hex color.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a hex color, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.hexColor("#ff0000ff"); // => True
is.hexColor("#ff"); // => False
```

* * *

<a name="hosted"></a>

### hosted(value, host) ⇒ <code>Boolean</code>
Test if `value` is hosted by `host`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is hosted by `host`, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | to test |
| host | <code>\*</code> | host to test with |

**Example**  
```js
is.hosted("a", { a: {} }); // => True
is.hosted("a", { a: 3 }); // => False
```

* * *

<a name="HSL"></a>

### HSL(value) ⇒ <code>Boolean</code>
Test if `value` is an HSL (hue, saturation,
lightness, optional alpha) color based on CSS Colors Level 4 specification.
Comma-separated format supported. Space-separated format
supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an HSL, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.HSL("hsl(360,0000000000100%,000000100%)"); // => True
is.HSL("hsl(0260, 100 %, 100%)"); // => False
```

* * *

<a name="IBAN"></a>

### IBAN(value) ⇒ <code>Boolean</code>
IBAN
Test if `value` is a IBAN (International Bank Account Number).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a IBAN (International Bank Account Number), false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.IBAN("SC52BAHL01031234567890123456USD"); // => True
is.IBAN("XX22YYY1234567890123"); // => False
```

* * *

<a name="identityCard"></a>

### identityCard(value, locale) ⇒ <code>Boolean</code>
Defaults to 'any'.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid identity card code, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| locale | <code>String</code> | one of ['ES', 'IN', 'IT', 'NO', 'zh-TW', 'he-IL', 'ar-TN', 'zh-CN'] OR 'any'. If 'any' is used, function will check if any of the locals match. |

**Example**  
```js
is.identityCard("B176944193", "zh-TW"); // => True
is.identityCard("X431071923", "zh-TW"); // => False
```

* * *

<a name="IMEI"></a>

### IMEI(value, options) ⇒ <code>Boolean</code>
Test if `value` is is a valid IMEI number.
Imei should be of format ############### or ##-######-######-#.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid IMEI number, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| options | <code>Object</code> | contains the keys allow_hyphens. Defaults to first format . If allow_hyphens is set to true, the validator will validate the second format. |

**Example**  
```js
is.IMEI("352099001761481"); // => True
is.IMEI("490154203237517"); // => False

is.IMEI("35-209900-176148-1", { allow_hyphens: true }); // => True
is.IMEI("49-015420-323751-7", { allow_hyphens: true }); // => False
```

* * *

<a name="infinite"></a>

### infinite(value) ⇒ <code>Boolean</code>
Test if `value` is positive or negative infinity.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is positive or negative Infinity, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.infinite(Infinity); // => True
is.infinite(-Infinity); // => True

is.infinite(9999999999); // => False
```

* * *

<a name="instance"></a>

### instance(value, constructor) ⇒ <code>Boolean</code>
Test if `value` is an instance of `constructor`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an instance of `constructor`  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| constructor | <code>\*</code> | constructor value |

**Example**  
```js
is.instance(new Date(), Date); // => True

 is.instance(new Date(), Number); // => False

var F = function () {};
is.instance(new F(), F); // => True
```

* * *

<a name="integer"></a>

### integer(value) ⇒ <code>Boolean</code>
Test if `value` is an integer.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an integer, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Description |
| --- | --- |
| value | to test |

**Example**  
```js
is.integer(1); // => True
is.integer("0"); // => False
```

* * *

<a name="IP"></a>

### IP(value, version) ⇒ <code>Boolean</code>
Test if `value` is an IP (version 4 or 6).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an IP (version 4 or 6), otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| version | <code>String</code> | ip version to test with |

**Example**  
```js
is.IP("127.0.0.1"); // => True
is.IP("0200.200.200.20"); // => False

is.IP("127.0.0.1", 4); // => True
is.IP("::1", 4); // => False
```

* * *

<a name="IPRange"></a>

### IPRange(value) ⇒ <code>Boolean</code>
Test if `value` is an IP Range(version 4 only).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an IP Range(version 4 only), otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.IPRange("127.0.0.1/24"); // => True
is.IPRange("127.200.230.1/35"); // => False
```

* * *

<a name="ISBN"></a>

### ISBN(value, version) ⇒ <code>Boolean</code>
Test if `value` is an ISBN (version 10 or 13).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an ISBN, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| version | [<code>number</code>](#number) | version value |

**Example**  
```js
is.ISBN("9783836221191", 13); // => True
is.ISBN("9783836221190", 13); // => False
```

* * *

<a name="ISIN"></a>

### ISIN(value) ⇒ <code>Boolean</code>
Test if `value` is an ISIN (stock/security identifier).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an ISIN, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ISIN("AU0000XVGZA3"); // => True
is.ISIN("DE000BAY0018"); // => False
```

* * *

<a name="ISO31661Alpha2"></a>

### ISO31661Alpha2(value) ⇒ <code>Boolean</code>
Test if `value` is a valid ISO 3166-1 alpha-2 officially assigned country code.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid ISO 3166-1 alpha-2, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ISO31661Alpha2("FR"); // => True
is.ISO31661Alpha2("FRA"); // => False
```

* * *

<a name="ISO31661Alpha3"></a>

### ISO31661Alpha3(value) ⇒ <code>Boolean</code>
Test if `value` is a valid ISO 3166-1 alpha-3 officially assigned country code.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid ISO 3166-1 alpha-3, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ISO31661Alpha3("ABW"); // => True
is.ISO31661Alpha3("FR"); // => False
```

* * *

<a name="ISO8601"></a>

### ISO8601(value) ⇒ <code>Boolean</code>
Test if `value` is a valid ISO 8601 date; for additional checks for valid dates, e.g. invalidates dates like 2009-02-29, pass options object as a second parameter with options.strict = true.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid ISO 8601, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ISO8601("2009-12T12:34"); // => True
is.ISO8601("200905"); // => False

is.ISO8601("2000-02-29", { strict: true }); // => True
is.ISO8601("2010-02-30", { strict: true }); // => False
```

* * *

<a name="ISRC"></a>

### ISRC(value) ⇒ <code>Boolean</code>
Test if `value` is a ISRC.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a ISRC, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.ISRC("USAT29900609"); // => True
is.ISRC("SRC15705223"); // => False
```

* * *

<a name="ISSN"></a>

### ISSN(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is an ISSN.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an ISSN, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | [<code>object</code>](#object) | <code>{ case_sensitive: false, require_hyphen: false }</code> | options object. If case_sensitive is true, ISSNs with a lowercase 'x' as the check digit are rejected. |

**Example**  
```js
is.ISSN("0000-0000"); // => True
is.ISSN("0378-5954"); // => False

is.ISSN("2434-561X", { case_sensitive: true }); // => True
is.ISSN("2434561x", { case_sensitive: true }); // => False
```

* * *

<a name="JSON"></a>

### JSON(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is valid JSON (note: uses JSON.parse).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is valid JSON, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | [<code>object</code>](#object) | <code>{ allow_primitives: false }</code> | If allow_primitives is true, the primitives 'true', 'false' and 'null' are accepted as valid JSON values. |

**Example**  
```js
is.JSON(`{ "key": "value" }`); // => True
is.JSON(`null`); // => False

is.JSON(`null`, { allow_primitives: true }); // => True
is.JSON(`1234`, { allow_primitives: true }); // => False
```

* * *

<a name="JWT"></a>

### JWT(value) ⇒ <code>Boolean</code>
Test if `value` is valid JWT token.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is valid JWT, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.JWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI"); // => True
is.JWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"); // => False
```

* * *

<a name="latLong"></a>

### latLong(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is a valid latitude-longitude coordinate
in the format lat,long or lat, long.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is valid latitude-longitude coordinate, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{ checkDMS: false }</code> | Pass checkDMS as true to validate DMS(degrees, minutes, and seconds) latitude-longitude format. |

**Example**  
```js
is.latLong("(-17.738223, 85.605469)"); // => True
is.latLong("(020.000000, 010.000000000)"); // => False

is.latLong("40° 26′ 46″ N, 79° 58′ 56″ W", { checkDMS: true }); // => True
is.latLong("100° 26′ 46″ N, 79° 58′ 56″ W", { checkDMS: true }); // => False
```

* * *

<a name="lessThan"></a>

### lessThan(value, other) ⇒ <code>Boolean</code>
Test if `value` is less than `other`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - if `value` is less than `other`  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| other | <code>Number</code> | value to compare with |

**Example**  
```js
is.lessThan(2, 3); // => True
is.lessThan("a", "abc"); // => True

is.lessThan("abc", "abc"); // => False
```

* * *

<a name="lessThanOrEqualTo"></a>

### lessThanOrEqualTo(value, other) ⇒ <code>Boolean</code>
Test if `value` is less than or equal to `other`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - if `value` is less than or equal to 'other'  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| other | <code>Number</code> | value to compare with |

**Example**  
```js
is.lessThanOrEqualTo(2, 3); // => True
is.lessThanOrEqualTo("a", "abc"); // => True
is.lessThanOrEqualTo("abc", "abc"); // => True

is.lessThanOrEqualTo(3, 2); // => False
```

* * *

<a name="locale"></a>

### locale(value) ⇒ <code>Boolean</code>
Test if `value` is a locale.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is locale, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.locale("uz_Latn_UZ"); // => True
is.locale("lo_POP"); // => False
```

* * *

<a name="lowercase"></a>

### lowercase(value) ⇒ <code>Boolean</code>
Test if `value` is lowercase.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is lowercase, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.lowercase("abc"); // => True
is.lowercase("123A"); // => True
```

* * *

<a name="MACAddress"></a>

### MACAddress(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is a MACAddress.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a MACAddress, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{no_colons: false}</code> | If no_colons is true, the validator will allow MAC addresses without the colons. Also, it allows the use of hyphens, spaces or dots e.g '01 02 03 04 05 ab', '01-02-03-04-05-ab' or '0102.0304.05ab'. |

**Example**  
```js
is.MACAddress("ab:ab:ab:ab:ab:ab"); // => True
is.MACAddress("01:02:03:04:05"); // => False

is.MACAddress("abababababab", { no_colons: true }); // True
is.MACAddress("abc", { no_colons: true }); // False
```

* * *

<a name="magnetURI"></a>

### magnetURI(value) ⇒ <code>Boolean</code>
Test if `value` is a magnet uri format.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a magnet uri format, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.magnetURI("magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce"); // => True
is.magnetURI(":?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce") // => False
```

* * *

<a name="maximum"></a>

### maximum(value, others) ⇒ <code>Boolean</code>
Test if `value` is greater than 'others' values.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is greater than `others` values  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> \| <code>String</code> | `value` to test |
| others | <code>ArrayLike</code> | values to compare with |

**Example**  
```js
is.maximum(3, [3, 2, 1]); // => True
is.maximum(2, [1, 2, 3]); // => False

is.maximum("c", ["a", "b", "c"]); // => True
is.maximum("b", ["a", "b", "c"]); // => False
```

* * *

<a name="MD5"></a>

### MD5(value) ⇒ <code>Boolean</code>
Test if `value` is a MD5 hash. Please note that you
can also use the isHash(str, 'md5') function. Keep in mind that
MD5 has some collision weaknesses compared to other algorithms (e.g., SHA).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a MD5 hash, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.MD5("d94f3f016ae679c3008de268209132f2"); // => True
is.MD5("KYT0bf1c35032a71a14c2f719e5a14c1"); // => False
```

* * *

<a name="mimeType"></a>

### mimeType(value) ⇒ <code>Boolean</code>
Test if `value` matches to a valid MIME type format.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` matches to a valid MIME type format, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.mimeType("application/json"); // => True
is.mimeType("application"); // => False
```

* * *

<a name="minimum"></a>

### minimum(value, others) ⇒ <code>Boolean</code>
Test if `value` is less than `others` values.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is less than `others` values  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| others | <code>Arraylike</code> | values to compare with |

**Example**  
```js
is.minimum(1, [3, 2, 1]); // => True
is.minimum("a", ["a", "b", "c"]); // => True

is.minimum(2, [1, 2, 3]); // => False
is.minimum("c", ["a", "b", "c"]); // => False
```

* * *

<a name="mobilePhone"></a>

### mobilePhone(value, [locale], options) ⇒ <code>Boolean</code>
Test if `value` is a mobile phone number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a MACAddress, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [locale] | <code>Array</code> \| <code>String</code> | <code>&quot;any&quot;</code> | (locale is either an array of locales (e.g ['sk-SK', 'sr-RS']) OR one of ['am-Am', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'bs-BA', 'be-BY', 'bg-BG', 'bn-BD', 'cs-CZ', 'da-DK', 'de-DE', 'de-AT', 'de-CH', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK', 'en-MO', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-PK', 'en-PH', 'en-RW', 'en-SG', 'en-SL', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-ZW' , 'es-CL', 'es-CO', 'es-CR', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE', 'fa-IR', 'fi-FI', 'fj-FJ', 'fo-FO', 'fr-BE', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'ne-NP', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'] OR defaults to 'any'. If 'any' or a falsey value is used, function will check if any of the locales match). |
| options | <code>Object</code> |  | can be supplied with the following keys: strictMode, if this is set to true, the mobile phone number must be supplied with  the country code and therefore must start with +. Locale list is validator.isMobilePhoneLocales. |

**Example**  
```js
is.mobilePhone("0821231234", 'en-ZA'); // => True
is.mobilePhone("08212312345", 'en-ZA'); // => False
```

* * *

<a name="mongoId"></a>

### mongoId(value) ⇒ <code>Boolean</code>
Test if `value` is a valid hex-encoded representation of a
MongoDB ObjectId.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid hex-encoded representation of a
MongoDB ObjectId, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.mongoId("507f1f77bcf86cd799439011"); // => True
s.mongoId("507f1f77bcf86cd7994390"); // => False
```

* * *

<a name="multibyte"></a>

### multibyte(value) ⇒ <code>Boolean</code>
Test if `value` contains one or more multibyte chars.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value contains one or more multibyte chars, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.multibyte("ひらがな・カタカナ、．漢字"); // => True
is.multibyte("abc"); // => False
```

* * *

<a name="nan"></a>

### nan(value) ⇒ <code>Boolean</code>
Test if `value` is not a number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is not a number, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.nan(0); // => False
is.nan({ a: 1 }); // => True
```

* * *

<a name="null"></a>

### null(value) ⇒ <code>Boolean</code>
Test if `value` is null.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is null, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.null(null); // => True
s.null(0); // => False
```

* * *

<a name="number"></a>

### number(value) ⇒ <code>Boolean</code>
Test if `value` is a number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a number, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.number(123); // => True
is.number("123"); // => False
```

* * *

<a name="object"></a>

### object(value) ⇒ <code>Boolean</code>
Test if `value` is an object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an object, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.object({}); // => True
is.object(new Array()); // => False
```

* * *

<a name="objectLiteral"></a>

### objectLiteral(value) ⇒ <code>Boolean</code>
Test if `value` is a hash / a plain object literal.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a a hash / a plain object literal, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.objectLiteral({ one: 1 }); // => True
is.objectLiteral(Object(42)); // => False
```

* * *

<a name="octal"></a>

### octal(value) ⇒ <code>Boolean</code>
Test if `value` is a valid octal number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a valid octal number, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.octal("076543210"); // => True
is.octal("abcdefg"); // => False
```

* * *

<a name="odd"></a>

### odd(value) ⇒ <code>Boolean</code>
Test if `value` is an odd number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an odd number, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |

**Example**  
```js
is.odd(1.1); // => True
is.odd(2); // => False
```

* * *

<a name="passportNumber"></a>

### passportNumber(value, countryCode) ⇒ <code>Boolean</code>
Test if `value` is a valid passport number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a valid passport number, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| countryCode | <code>Object</code> | one of [ 'AM', 'AR', 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE' 'IN', 'IS', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'MT', 'NL', 'PO', 'PT', 'RO', 'SE', 'SL', 'SK', 'TR', 'UA', 'US' ]. |

**Example**  
```js
is.passportNumber("AF0549358", "AM"); // => True
is.passportNumber("A1054935", "AM"); // => False
```

* * *

<a name="pathToDir"></a>

### pathToDir(value) ⇒ <code>Boolean</code>
Test if `value` is a valid path to a directory.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid path to a directory., otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.pathToDir("test/src/validators/test.pathToDir.js"); // => False
is.pathToDir("test/src/validators"); // => True
```

* * *

<a name="pathToFile"></a>

### pathToFile(value) ⇒ <code>Boolean</code>
Test if `value` is a valid path to a file.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid path to a file., otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.pathToFile("test/src/validators/test.pathToFile.js"); // => True
is.pathToFile("test/src/validators"); // => False
```

* * *

<a name="portNumber"></a>

### portNumber(value) ⇒ <code>Boolean</code>
Test if `value` is a valid port number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a valid port number, otherwise false.  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> \| <code>Number</code> | `value` to test |

**Example**  
```js
is.portNumber(8080); // => True
is.portNumber(-1); // => False
```

* * *

<a name="postalCode"></a>

### postalCode(value, locale) ⇒ <code>Boolean</code>
Test if `value` is a postal code.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a valid postal code, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| locale | <code>String</code> | one of [ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IR', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NP', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'. |

**Example**  
```js
is.postalCode("39100-000", "BR"); // => True
is.postalCode("78908", "BR"); // => False
```

* * *

<a name="primitive"></a>

### primitive(value) ⇒ <code>Boolean</code>
Test if `value` is a primitive.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a primitive, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.primitive(0); // => True
is.primitive(new Object()); // => False
```

* * *

<a name="regexp"></a>

### regexp(value) ⇒ <code>Boolean</code>
Test if `value` is a regular expression.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a regexp, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.regexp(new RegExp('a', 'g')); // => True
is.regexp([]); // => False
```

* * *

<a name="RFC3339"></a>

### RFC3339(value) ⇒ <code>Boolean</code>
Test if `value` is a valid RFC 3339 date.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a valid RFC 3339 date, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.RFC3339("2009-05-19 14:39:22-06:00"); // => True
is.RFC3339("2010-02-18t00:23:32.33+24:00"); // => False
```

* * *

<a name="rgbColor"></a>

### rgbColor(value, includePercentValues) ⇒ <code>Boolean</code>
Test if `value` is a rgb or rgba color.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value  is a rgb or rgba color, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| includePercentValues | <code>Boolean</code> | defaults to true. If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false. |

**Example**  
```js
is.rgbColor("rgb(0,0,0)"); // => True
is.rgbColor("rgb(5,5,5)", false); // => True
is.rgbColor("rgb(4,4,5%)", false); // => False
```

* * *

<a name="semVer"></a>

### semVer(value) ⇒ <code>Boolean</code>
Test if `value` is a Semantic Versioning Specification (SemVer).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is a SemVer, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.semVer("0.0.4"); // => True
is.semVer("beta"); // => False
```

* * *

<a name="slug"></a>

### slug(value, options) ⇒ <code>Boolean</code>
Test if `value` is of type slug.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value is of type slug, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| options | <code>Object</code> | allow a single hyphen between string. e.g. [cn-cn, cn-c-c] |

**Example**  
```js
is.slug("cs-cz", "cs_67CZ"); // => True
is.slug("not-----------slug", "cs_67CZ"); // => False
```

* * *

<a name="string"></a>

### string(value) ⇒ <code>Boolean</code>
Test if `value` is a string.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a string, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.string("abc"); // => True
is.string(123); // => False
```

* * *

<a name="stringBool"></a>

### stringBool(value) ⇒ <code>Boolean</code>
Test if `value` is a boolean.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a boolean, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.stringBool("true"); // => True
is.stringBool("1.0"); // => False
```

* * *

<a name="stringContains"></a>

### stringContains(value, seed, [options]) ⇒ <code>Boolean</code>
Test if `value` contains the seed.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` contains the seed, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| seed | <code>String</code> |  | seed value |
| [options] | <code>Object</code> | <code>{ ignoreCase: false}</code> | defaults to { ignoreCase: false}. ignoreCase specified whether the case of the substring be same or not. |

**Example**  
```js
is.stringContains("foobar", "foo"); // => True
is.stringContains("fOObar", "foo"); // => False

is.stringContains("FOObar", "Foo", { ignoreCase: true }); // => True
is.stringContains("baxoof", "foo", { ignoreCase: true,}); // => False
```

* * *

<a name="stringDecimal"></a>

### stringDecimal(value, [options]) ⇒ <code>Boolean</code>
Test if `value` represents a decimal string, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` represents a decimal string, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{force_decimal: false, decimal_digits: &#x27;1,&#x27;, locale: &#x27;en-US&#x27;}</code> | defaults to {force_decimal: false, decimal_digits: '1,', locale: 'en-US'} locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']. Note: decimal_digits is given as a range like '1,3', a specific value like '3' or min like '1,'. |

**Example**  
```js
is.stringDecimal("123", { locale: "en-AU" }); // => True
is.stringDecimal("1,0", { locale: "en-AU" }); // => False
```

* * *

<a name="stringEmpty"></a>

### stringEmpty(value, options) ⇒ <code>Boolean</code>
Test if `value` is an empty string.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is an empty string, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | to test |
| options | <code>Object</code> | defaults to { ignore_whitespace:false } |

**Example**  
```js
is.stringEmpty(""); // => True
is.stringEmpty("   "); // => False

is.stringEmpty(" ", { ignore_whitespace: true }); // => True
is.stringEmpty("foo", { ignore_whitespace: true }); // => False
```

* * *

<a name="stringEquals"></a>

### stringEquals(value, comparison) ⇒ <code>Boolean</code>
Test if `value` matches the comparison.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` matches the comparison, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| comparison | <code>String</code> | value to compare with |

**Example**  
```js
is.stringEquals("abc", "abc"); // => True
is.stringEquals("abc", "Abc"); // => False
```

* * *

<a name="stringIn"></a>

### stringIn(value, arr) ⇒ <code>Boolean</code>
Test if `value` is in an array of allowed values.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is in an array of allowed values, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| arr | <code>Array</code> | array to check in |

**Example**  
```js
is.stringIn("foo", "foobar"); // => True
is.stringIn("barfoo", "foobar"); // => False
```

* * *

<a name="stringInteger"></a>

### stringInteger(value, options) ⇒ <code>Boolean</code>
Test if `value` is a string integer.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a string integer, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| options | <code>Object</code> | options is an object which can contain the keys min and/or max to check the integer is within boundaries (e.g. { min: 10, max: 99 }).  options can also contain the key allow_leading_zeroes, which when set to false will disallow integer values with leading zeroes (e.g. { allow_leading_zeroes: false }). Finally, options can contain the keys gt and/or lt which will enforce integers being greater than or less than, respectively, the value provided (e.g. {gt: 1, lt: 4} 'for a number between 1 and 4). |

**Example**  
```js
is.stringInteger("123"); // => True

is.stringInteger("13", { allow_leading_zeroes: false }); // => True
is.stringInteger("-01", { allow_leading_zeroes: false }); // => False
```

* * *

<a name="stringLength"></a>

### stringLength(value, options) ⇒ <code>Boolean</code>
Test if `value's length falls in a range.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value`'s length falls in a range, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| options | [<code>object</code>](#object) | defaults to {min:0, max: undefined}. Note: this function takes into account surrogate pairs. |

**Example**  
```js
is.stringLength("abc", { min: 2 }); // => True
is.stringLength("a", { min: 2 }); // => False
```

* * *

<a name="stringMatches"></a>

### stringMatches(value, pattern, modifiers) ⇒ <code>Boolean</code>
Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` matches the pattern, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| pattern | <code>String</code> | test pattern |
| modifiers | <code>String</code> | test modifiers |

**Example**  
```js
is.stringMatches("abc", /abc/); // => True
is.stringMatches("acb", /abc/); // => False

is.stringMatches("abc", "abc", "i") // => True
is.stringMatches("acb", "abc", "i") // => False
```

* * *

<a name="stringNumeric"></a>

### stringNumeric(value, options, locale) ⇒ <code>Boolean</code>
Test if `value` contains only numbers.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value contains one or more multibyte chars, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| options | <code>Object</code> | {no_symbols: false} it also has locale as an option. If no_symbols is true, the validator will reject numeric strings that feature a symbol (e.g. +, -, or .). |
| locale | <code>String</code> | determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']. |

**Example**  
```js
is.stringNumeric("123"); // => True

is.stringNumeric("123", { no_symbols: true }); // => True
is.stringNumeric("-0", { no_symbols: true }); // => False
```

* * *

<a name="surrogatePair"></a>

### surrogatePair(value) ⇒ <code>Boolean</code>
Test if `value` contains any surrogate pairs chars.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value; contains any surrogate pairs chars, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.surrogatePair("𠮷野𠮷"); // => True
is.surrogatePair("鮪"); // => False
```

* * *

<a name="svg"></a>

### svg(value) ⇒ <code>Boolean</code>
Test if the string is a valid SVG.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a valid SVG, false otherise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.svg("<svg width="100" height="100" viewBox="0 0 30 30" version="1.1"></svg>"); // => True
is.svg("<div><svg></svg></div>"); // => False
```

* * *

<a name="symbol"></a>

### symbol(value) ⇒ <code>Boolean</code>
Test if `value` is an ES6 Symbol

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a Symbol, false otherise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.symbol(Symbol("foo")); // => True
is.symbol(Symbol["name"]); // => False
is.symbol(new Object()); // => False
```

* * *

<a name="taxID"></a>

### taxID(value, [locale]) ⇒ <code>Boolean</code>
Test if `value` is a valid Tax Identification Number.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' is a valid Tax Identification Number, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [locale] | <code>String</code> | <code>&quot;en-US&quot;</code> | default locale is en-US |

**Example**  
```js
is.taxID("01-1234567"); // => True
is.taxID("0-11234567"); // => False
```

* * *

<a name="true"></a>

### true(value) ⇒ <code>Boolean</code>
Test if `value` is true.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is true, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.true(true); // => True
is.true(1); // => False
```

* * *

<a name="type"></a>

### type(value, type) ⇒ <code>Boolean</code>
Test if `value` is a type of `type`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a type of `type`, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |
| type | <code>String</code> | type ["boolean", "number", "object", "string", "undefined"] |

**Example**  
```js
is.type(true, "boolean"); // => True
is.type(1, "boolean"); // => False
```

* * *

<a name="undefined"></a>

### undefined(value) ⇒ <code>Boolean</code>
Test if `value` is undefined.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is undefined, false otherwise  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | `value` to test |

**Example**  
```js
is.undefined(undefined); // => True
is.undefined(null); // => False
is.undefined(0); // => False
```

* * *

<a name="uppercase"></a>

### uppercase(value) ⇒ <code>Boolean</code>
Test if `value` is uppercase.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' is uppercase, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.uppercase("ABC"); // => True
is.uppercase("abc"); // => False
```

* * *

<a name="URL"></a>

### URL(value, [options]) ⇒ <code>Boolean</code>
Test if `value` is an URL.
require_protocol - if set as true isURL will return false if protocol
is not present in the URL.
require_valid_protocol - isURL will check if the URL's protocol is present in
the protocols option.
protocols - valid protocols can be modified with this option.
require_host - if set as false isURL will not check if host is present in the URL.
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed.
validate_length - if set as false isURL will skip string length validation
(2083 characters is IE max URL length).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' is an URL, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>String</code> |  | `value` to test |
| [options] | <code>Object</code> | <code>{ protocols: [&#x27;http&#x27;,&#x27;https&#x27;,&#x27;ftp&#x27;], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }</code> | options object. |

**Example**  
```js
is.URL("foobar.com"); // => True
is.URL("foobar.com", { protocols: ["rtmp"] }); // => True
is.URL("foobar.com", { protocols: ["rtmp"] }); // => False
```

* * *

<a name="UUID"></a>

### UUID(value, version) ⇒ <code>Boolean</code>
Test if `value` is a UUID (version 3, 4 or 5).

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' is UUID, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| version | <code>Number</code> | which version to use |

**Example**  
```js
is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3"); // => True

is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => True
is.UUID("xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => False
```

* * *

<a name="variableWidth"></a>

### variableWidth(value) ⇒ <code>Boolean</code>
Test if `value` contains a mixture of full and half-width chars.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' contains a mixture of full and half-width chars, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.variableWidth("ひらがなカタカナ漢字ABCDE"); // => True
```

* * *

<a name="whitelisted"></a>

### whitelisted(value, chars) ⇒ <code>Boolean</code>
Test if `value` characters appear in the whitelist.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value' characters appear in the whitelist, otherwise false.  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |
| chars | <code>String</code> | whitelist |

**Example**  
```js
is.whitelisted("foo", "abcdefghijklmnopqrstuvwxyz"); // => True
is.whitelisted("foo bar", "abcdefghijklmnopqrstuvwxyz"); // => False
```

* * *

<a name="within"></a>

### within(value, start, finish) ⇒ <code>Boolean</code>
Test if `value` is within `start` and `finish`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is is within 'start' and 'finish'  
**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | `value` to test |
| start | <code>Number</code> | lower bound |
| finish | <code>Number</code> | upper bound |

**Example**  
```js
is.within(2, 1, 3); // => True
is.within(0, -1, 1); // => True
is.within(2, 0, Infinity); // => True

is.within(2, -1, 1); // => False
```

* * *

