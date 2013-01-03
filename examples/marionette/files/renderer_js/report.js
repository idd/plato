__report = {
  "info": {
    "file": "/tmp/plato/marionette/src/marionette.renderer.js",
    "fileShort": "renderer.js",
    "fileSafe": "renderer_js",
    "link": "files/renderer_js"
  },
  "complexity": {
    "aggregate": {
      "line": 6,
      "complexity": {
        "sloc": {
          "physical": 12,
          "logical": 5
        },
        "cyclomatic": 2,
        "halstead": {
          "operators": {
            "distinct": 11,
            "total": 17,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 11,
            "total": 19,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 36,
          "vocabulary": 22,
          "difficulty": 9.5,
          "volume": 160.5395382709427,
          "effort": 1525.1256135739557,
          "bugs": 0.05351317942364757,
          "time": 84.72920075410865
        }
      }
    },
    "functions": [
      {
        "name": "render",
        "line": 12,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 26,
            "vocabulary": 16,
            "difficulty": 7,
            "volume": 104,
            "effort": 728,
            "bugs": 0.034666666666666665,
            "time": 40.44444444444444
          }
        }
      }
    ],
    "maintainability": 130.50422748721516,
    "module": "renderer.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 13,
        "column": 5,
        "message": "Missing \"use strict\" statement.",
        "source": "Missing \"use strict\" statement."
      },
      {
        "severity": "error",
        "line": 6,
        "column": 1,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 13,
        "column": 68,
        "message": "'Marionette' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "warning",
        "line": [
          6,
          13
        ],
        "column": 0,
        "message": "Implied global 'Marionette'",
        "source": "jshint.implied-globals"
      }
    ]
  }
}