# inline-css-brunch

Brunch plugin to read your CSS files as strings in JS.

## Install

```sh
npm install -D inline-css-brunch
```

## Usage

```js
const myCssString = require('./my-css-file');
```

Note that Brunch removes the extension, so don't include the `.css` in the `require`.

## Future

* [ ] Allow for whitelisting and blacklisting folders.
