# @aliexme/eslint-config

Rule set for ESLint

## Installation

```
npm install --save-dev @aliexme/eslint-config eslint-plugin-import
```

## Usage

Extend your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
  ],
}
```

## Typescript

To check ts-files, install additional packages:

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/typescript",
  ],
}
```
