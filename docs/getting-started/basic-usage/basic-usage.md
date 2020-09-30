# Basic Usage

---


### **Validator** - If you are using | [`oslllo-validator`](https://www.npmjs.com/package/oslllo-validator)

![](../../images/cover-small.png)

## Node / Bundler

```js
const is = require("oslllo-validator");
```

## Browser / Client-side

Both `minified` and `unminified` versions are available.

> You can fetch the already built files via the `jsdelivr` CDN or by building them `locally`

---

### CDN

- [**jsdelivr**](https://www.jsdelivr.com/package/npm/oslllo-validator?path=dist)

Minified

```txt
https://cdn.jsdelivr.net/npm/oslllo-validator@latest/dist/oslllo-validator.min.js
```

Un-minified

```txt
https://cdn.jsdelivr.net/npm/oslllo-validator@latest/dist/oslllo-validator.js
```

### Usage

```js
<script type="text/javascript" src="path/to/oslllo-validator.min.js"></script>
<script type="text/javascript">
    is.string("test"); // => True
</script>
```

---

### **Validator Exception** - If you are using | [`oslllo-validator-exception`](https://www.npmjs.com/package/oslllo-validator-exception)

![](../../images/cover-exception-small.png)

## Node / Bundler

```js
const assert = require("oslllo-validator-exception");
```

## Browser / Client-side

Both `minified` and `unminified` versions are available.

> You can fetch the already built files via the `jsdelivr` CDN or by building them `locally`

---

### CDN

- [**jsdelivr**](https://www.jsdelivr.com/package/npm/oslllo-validator-exception?path=dist)

Minified

```txt
https://cdn.jsdelivr.net/npm/oslllo-validator-exception@latest/dist/oslllo-validator-exception.min.js
```

Un-minified

```txt
https://cdn.jsdelivr.net/npm/oslllo-validator-exception@latest/dist/oslllo-validator-exception.js
```

### Usage

```js
<script type="text/javascript" src="path/to/oslllo-validator-exception.min.js"></script>
<script type="text/javascript">
    assert.string("test"); // => True
</script>
```

---

### Build Locally

1. Clone the [repository](https://github.com/oslllo/validator-exception) to your local machine.
2. Run `npm install --dev`.
3. Run `npm run build`.

The built client-side files will be located in the `dist` folder.

----
