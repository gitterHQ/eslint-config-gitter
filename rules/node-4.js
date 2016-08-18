'use strict';

module.exports = {
  "env": {
    "node": true
  },
  "plugins": [
    "node"
  ],
  "rules": {
    "node/no-unsupported-features": [
      "error",
      {
        "version": 4
      }
    ]
  }
}
