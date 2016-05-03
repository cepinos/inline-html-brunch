# inline-html-brunch

Brunch plugin to read your HTML files as strings in JS.

## Install

```sh
npm install inline-html-brunch --save-dev
```

## Usage

```js
define(['./my-html-file'],function(htmlStr){
  
});
```

Note that Brunch removes the extension, so don't include the `.html` in the `require`.

## Future

* [ ] Allow for whitelisting and blacklisting folders.
