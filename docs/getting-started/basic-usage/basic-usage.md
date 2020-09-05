# Basic Usage

---

## Node / Bundler

```js
const is = require("oslllo-validator");
```

## Browser / Client-side

Both `minified` and `full` versions are available.

> You can fetch the already built files via the `jsdelivr` CDN or by building them `locally`

### CDN

* [**jsdelivr**](https://www.jsdelivr.com/package/npm/oslllo-validator?path=dist%2Fbrowser)

### Usage

```js
<script type="text/javascript" src="oslllo-validator.min.js"></script>
<script type="text/javascript">
    is.string("test"); // => True
</script>
```

## Build

1. Clone the [repository](https://github.com/oslllo/validator) to your local machine.
2. Run `npm install --dev`.
3. Run `npm run build`.

The built files will be located in the `dist` folder.

----
