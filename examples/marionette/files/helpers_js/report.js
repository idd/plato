__report = {
  "info": {
    "file": "/tmp/plato/marionette/src/marionette.helpers.js",
    "fileShort": "helpers.js",
    "fileSafe": "helpers_js",
    "link": "files/helpers_js"
  },
  "complexity": {
    "aggregate": {
      "line": 5,
      "complexity": {
        "sloc": {
          "physical": 25,
          "logical": 11
        },
        "cyclomatic": 4,
        "halstead": {
          "operators": {
            "distinct": 10,
            "total": 29,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 13,
            "total": 30,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 59,
          "vocabulary": 23,
          "difficulty": 11.538461538461537,
          "volume": 266.89015540736375,
          "effort": 3079.501793161889,
          "bugs": 0.08896338513578791,
          "time": 171.0834329534383
        }
      }
    },
    "functions": [
      {
        "name": "Marionette.getOption",
        "line": 18,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 8
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 36,
            "vocabulary": 13,
            "difficulty": 20.25,
            "volume": 133.21582985307933,
            "effort": 2697.6205545248563,
            "bugs": 0.04440527661769311,
            "time": 149.86780858471423
          }
        }
      }
    ],
    "maintainability": 109.97577049703165,
    "module": "helpers.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 19,
        "column": 3,
        "message": "Missing \"use strict\" statement.",
        "source": "Missing \"use strict\" statement."
      },
      {
        "severity": "error",
        "line": 11,
        "column": 1,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 11,
        "column": 21,
        "message": "'Backbone' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 18,
        "column": 1,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 5,
        "column": 10,
        "message": "'slice' is defined but never used.",
        "source": "'{a}' is defined but never used."
      },
      {
        "severity": "warning",
        "line": [
          11,
          18
        ],
        "column": 0,
        "message": "Implied global 'Marionette'",
        "source": "jshint.implied-globals"
      },
      {
        "severity": "warning",
        "line": [
          11
        ],
        "column": 0,
        "message": "Implied global 'Backbone'",
        "source": "jshint.implied-globals"
      },
      {
        "severity": "warning",
        "line": 5,
        "column": 0,
        "message": "Unused variable: 'slice'",
        "source": "jshint.implied-unuseds"
      }
    ]
  }
}