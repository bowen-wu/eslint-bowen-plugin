# eslint-plugin-bowen-lint

provide config 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev

// yarn
$ yarn add eslint -D
```

Next, install `eslint-plugin-bowen-lint`:

```
$ npm install eslint-plugin-bowen-lint --save-dev

// yarn
$ yarn add eslint-plugin-bowen-lint -D
```


## Usage

Add `bowen-lint` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
        "plugin:bowen-lint/reactLint"
    ]
}
```

## Necessary Config 

* eslint-config-airbnb

## Necessary Plugin

* eslint-plugin-import

## Supported Config 

* plugin:bowen-lint/reactLint
* plugin:bowen-lint/vueLint
* plugin:bowen-lint/tsLint
* plugin:bowen-lint/prettierLint
