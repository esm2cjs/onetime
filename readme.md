# @esm2cjs/onetime

This is a fork of https://github.com/sindresorhus/onetime, but automatically patched to support ESM **and** CommonJS, unlike the original repository.

## Install

Use an npm alias to install this package under the original name:

```
npm i onetime@npm:@esm2cjs/onetime
```

```jsonc
// package.json
"dependencies": {
    "onetime": "npm:@esm2cjs/onetime"
}
```

## Usage

```js
// Using ESM import syntax
import onetime from "onetime";

// Using CommonJS require()
const onetime = require("onetime").default;
```

> **Note:**
> Because the original module uses `export default`, you need to append `.default` to the `require()` call.

For more details, please see the original [repository](https://github.com/sindresorhus/onetime).

## Sponsoring

To support my efforts in maintaining the ESM/CommonJS hybrid, please sponsor [here](https://github.com/sponsors/AlCalzone).

To support the original author of the module, please sponsor [here](https://github.com/sindresorhus/onetime).
