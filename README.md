# Monday GraphQL SDKs Monorepo

This monorepo contains all the packages for the monday.com GraphQL SDKs. Currently, it holds the following packages:

- [@mondaydotcomorg/api](./packages/api)
- [@mondaydotcomorg/api-types](./packages/api-types)
- [@mondaydotcomorg/setup-api](./packages/setup-api)

## Usage of generated code

The packages in this monorepo contain files that are generated using monday.com's sdk generator, you will find them inside the `generated` folder of each package.
Contributions to this code are only accepted in files that were not generated. If you think that a change is needed in the generated code, please open an issue and we will look into it.
