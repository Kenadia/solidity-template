# solidity-template

Basic setup to get started writing smart contracts.

## Development setup

One-time setup:

```
PATH=$PATH:node_modules/.bin
npm install
truffle compile
truffle migrate
```

## Running tests

In a tab, run:

```
npm run ganache
```

With Ganache running separately, you can run the test cases with:

```
npm run test
```
