
string-utils
============

[![Build Status](https://travis-ci.com/ultraq/string-utils.svg?branch=master)](https://travis-ci.com/ultraq/string-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/string-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/string-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/string-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/string-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/string-utils)](https://bundlephobia.com/result?p=@ultraq/string-utils)

A collection of utilities for JavaScript strings.


Installation
------------

Via npm:

```
npm install @ultraq/string-utils
```


API
---

### escapeHtml(string)

Escapes special HTML characters in a string with their entity code equivalents.
Returns a string safe to use as text within an HTML document.

 - **string**: string to escape.

### format(template, ...values)

Returns the replacement of each placeholder in a template string with a
corresponding replacement value.

 - **template**: template string containing placeholders in the format or `{n}`
   where `n` is the corresponding index value to have filled-in.
 - **...values**: argument list of values to fill in the placeholders in the
   template string with.
