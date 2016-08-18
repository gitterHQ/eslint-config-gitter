'use strict';

module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": "off",
    "comma-dangle": "off",
    "quotes": "off",
    "eqeqeq": [
      "warn",
      "allow-null"
    ],
    "strict": [
      "error",
      "safe"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-extra-boolean-cast": [
      "warn"
    ],
    "complexity": [
      "error",
      {
        "max": 12
      }
    ],
    "max-statements-per-line": [
      "error",
      {
        "max": 3
      }
    ],
    "no-debugger": "error",
    "no-dupe-keys": "error",
    "no-unsafe-finally": "error",
    "no-with": "error",
    "no-useless-call": "error",
    "no-spaced-func": "error",
    "max-statements": [
      "warn",
      30
    ],
    "max-depth": [
      "error",
      4
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-sequences": "error",
    "no-warning-comments": [
      "warn",
      {
        "terms": [
          "fixme",
          "xxx"
        ],
        "location": "anywhere"
      }
    ],
    "radix": "error",
    "yoda": "error",
    "no-nested-ternary": "warn",
    "no-whitespace-before-property": "error",
    "no-trailing-spaces": ["error"],
    "space-in-parens": [
      "warn",
      "never"
    ],
    "max-nested-callbacks": [
      "error",
      6
    ],
    "eol-last": "warn",
    "no-mixed-spaces-and-tabs": "error",
    "no-negated-condition": "warn",
    "no-unneeded-ternary": "error",
    "no-multi-spaces": [
      "warn",
      {
        "exceptions": {
          "Property": true
        }
      }
    ],
    "key-spacing": [
      "warn",
      {
        "singleLine": {
          "beforeColon": false,
          "afterColon": true
        },
        "multiLine": {
          "beforeColon": false,
          "afterColon": true,
          "mode": "minimum"
        }
      }
    ]
  }
}
