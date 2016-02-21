# React spin

A React component wrapper for [spin.js](http://fgnass.github.io/spin.js/) with support for children.
You can use it in your isomorphic application(server rendering) too.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: https://img.shields.io/npm/v/react-spinner-children.svg?style=flat-square
[npm-url]: https://www.npmjs.com/react-spinner-children
[travis-image]: https://img.shields.io/travis/seeden/react-spinner-children/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/seeden/react-spinner-children
[coveralls-image]: https://img.shields.io/coveralls/seeden/react-spinner-children/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/seeden/react-spinner-children?branch=master
[github-url]: https://github.com/seeden/react-spinner-children

# Support us

Star this project on [GitHub][github-url].

# Usage

```js
import React, { Component } from 'react';
import Spinner from 'react-spinner-children';

export default class Example extends Component {
  render() {
    const isLoaded = true;
    const customSpinConfig = {
      lines: 10,
    };  // all configs http://fgnass.github.io/spin.js/

    return (
      <Spinner loaded={isLoaded} config={customSpinConfig}>
        <span>This content will be show when isLoaded === true</span>
      </Spinner>
    );
  }
}
```

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherrySoftware/react-translate-maker)
 - Google Analytics [react-g-analytics](https://github.com/seeden/react-g-analytics)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

## Credits

[Zlatko Fedor](http://github.com/seeden)
