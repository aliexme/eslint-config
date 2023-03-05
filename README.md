# @aliexme/eslint-config

Rule set for ESLint

## Installation

```
npm i --save-dev eslint @aliexme/eslint-config eslint-plugin-import
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
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
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

## Prettier

Install additional packages:

```
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

And add the following lines to your ESLint config file:

```
{
  "extends": [
    "@aliexme/eslint-config",
    "@aliexme/eslint-config/prettier",
  ],
}
```
