#atropa-string-pad

Pads strings on the right or left with user defined characters or strings.

## Where do I get it?

You can download it from github at 
[https://github.com/matthewkastor/atropa-string-pad](https://github.com/matthewkastor/atropa-string-pad) 
or, if you have node installed you can get it from npm

`npm install atropa-string-pad`

## Usage

### In Browser

Using this module in your browser is as simple as including it in your page. 
See [example.html](http://matthewkastor.github.io/atropa-string-pad/example.html) 
in the root directory of this package.

### In Nodejs

Simply require it and use it.

```
var pad = require('pad');

console.log(
    pad(6, 'wee', 'um')
);
// logs umuwee

console.log(
    pad(6, 'wee', 'um', true)
);
// logs weeumu
```

## Docs

Documentation is in the [docs/jsdoc](http://matthewkastor.github.io/atropa-string-pad/docs/jsdoc/symbols/_global_.html) folder.
Visual Studio intellisense files are in [docs/vsdocs](https://github.com/matthewkastor/atropa-string-pad/blob/gh-pages/docs/vsdoc/OpenLayersAll.js)

## Tests

Run the tests in node with `npm test`. Run the tests in your browser by opening 
[atropa-string-pad tester.html](http://matthewkastor.github.io/atropa-string-pad/atropa-string-pad%20tester.html).