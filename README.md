# real-require-no-op

[real-require](https://www.npmjs.com/package/real-require) is
needed by some of [pino](https://www.npmjs.com/package/pino)'s
dependencies but it can't be used with
[--disallow-code-generation-from-strings](https://nodejs.org/docs/latest/api/cli.html#--disallow-code-generation-from-strings)

If you're not doing anything with webpack or a bundler you can probably
just [override](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides)
it with this module in a package.json file:

```json
  "overrides": {
    "real-require": "npm:real-require-no-op@0.2.0"
  }
```