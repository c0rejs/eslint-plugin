# Introduction

Custom `eslint` rules.

## Install

```sh
npm install @c0rejs/eslint-plugin
```

## Usage

`eslint.config.js`:

```javascript
import eslintSoftvisio from "@c0rejs/eslint-plugin";

export default [

    // ...your eslint config

    // @softvisio:recommended
    eslintSoftvisio.configs.recommended,
];
```
