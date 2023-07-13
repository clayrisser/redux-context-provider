# redux-context-provider

[![Beerpay](https://beerpay.io/jamrizzi/redux-context-provider/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/redux-context-provider)
[![Beerpay](https://beerpay.io/jamrizzi/redux-context-provider/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/redux-context-provider?focus=wish)
[![NPM](https://img.shields.io/npm/v/redux-context-provider.svg?style=flat-square)](https://www.npmjs.com/package/redux-context-provider)
[![NPM](https://img.shields.io/npm/dt/redux-context-provider.svg?style=flat-square)](https://www.npmjs.com/package/redux-context-provider)
[![Drone](https://ci.jamrizzi.com/api/badges/jamrizzi/redux-context-provider/status.svg)](https://ci.jamrizzi.com/jamrizzi/redux-context-provider)
[![GitHub stars](https://img.shields.io/github/stars/jamrizzi/redux-context-provider.svg?style=social&label=Stars)](https://github.com/jamrizzi/redux-context-provider)

> 💉 Inject redux into react context

![](assets/redux-context-provider.png)

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;


## Features

* Access redux state from react context
* Access redux actions from react context
* Inject custom react context
* Render updates when redux state changes
* Integrates with all react projects including react native
* Easy and simple unopinionated to integration


## Installation

```sh
npm install --save redux-context-provider
```


## Dependencies

* [NodeJS](https://nodejs.org)
* [React](https://reactjs.org)
* [Redux](https://www.npmjs.com/package/redux)


## Usage

```js
import React, { Component } from 'react';
import ReduxContextProvider from 'redux-context-provider';
import createStore from './createStore';
import actions from './actions';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <ReduxContextProvider store={store} actions={actions}>
        <Routes />
      </ReduxContextProvider>
    );
  }
}
```


## Support

Submit an [issue](https://github.com/jamrizzi/redux-context-provider/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/jamrizzi/redux-context-provider/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/jamrizzi/redux-context-provider/blob/master/LICENSE)

[Jam Risser](https://jam.jamrizzi.com) &copy; 2018


## Changelog

Review the [changelog](https://github.com/jamrizzi/redux-context-provider/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://jam.jamrizzi.com) - Author


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee :coffee: :coffee: :coffee: was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/jamrizzi/redux-context-provider) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/jamrizzi/redux-context-provider/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/redux-context-provider)  [![Beerpay](https://beerpay.io/jamrizzi/redux-context-provider/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/redux-context-provider?focus=wish)
