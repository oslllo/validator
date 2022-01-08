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
