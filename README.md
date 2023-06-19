## kevlar

This is a Typescript library for interfacing with the Vault plugin that allows for the creation of EVM accounts and signing of transactions using those accounts.

## Overview

This library is providers typescript bindings for interacting with the kevlar vault plugin. It is generated using the [OpenAPI Generator](https://openapi-generator.tech) project and references the `openapi.yaml` specification which can be found under `definitions/`. The generated code is under `src/api/` and `src/models/`.

- API version: 1.0
- Package version: 1.0
  
### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Consuming

Navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install kevlar-ts@1.0 --save
```
