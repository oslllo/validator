# Validators

## Node / Bundler

```js
const is = require("oslllo-validator");
```

## Browser / Client-side

Both `minified` and `full` versions are available.

> You can fetch the already built files via the `jsdelivr` CDN or by building them `locally`

#### CDN

`https://cdn.jsdelivr.net/npm/oslllo-validator@{version}/dist/browser/oslllo-validator.min.js`

Where `{version}` is the package version that you want. e.g `0.0.1` will be `https://cdn.jsdelivr.net/npm/oslllo-validator@0.0.1/dist/browser/oslllo-validator.min.js`

#### Build

1. Clone the [repository](https://github.com/oslllo/validator) to your local machine.
2. Run `npm install --dev`.
3. Run `npm run build`.

The built files will be located in the `dist` folder.

#### Usage

```js
<script type="text/javascript" src="oslllo-validator.min.js"></script>
<script type="text/javascript">
    is.string("test"); // => True
</script>
```

----

## Validators

[validators.md](../.internal/validators.md ':include :type=markdown')