# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [2.0.1](https://www.github.com/oslllo/validator/compare/v2.0.1...v2.0.1) (2021-12-30)


### Miscellaneous Chores

* release 2.0.1 ([95fb9c4](https://www.github.com/oslllo/validator/commit/95fb9c44c70514f8585f3f55661b59246d4becf6))

### [2.0.1](https://www.github.com/oslllo/validator/compare/v2.0.0...v2.0.1) (2021-09-05)


### Bug Fixes

* vulnerabilities ([237682f](https://www.github.com/oslllo/validator/commit/237682fb4feb8f2d38c2ca96c5b440ca2be5a9d8))

## [2.0.0](https://www.github.com/oslllo/validator/compare/v1.1.1...v2.0.0) (2021-05-06)

### Breaking Changes

* drop support for pre-packaged dist bundles.

### Bug Fixes

* package breaking when process.env.NODE_ENV env variable is set ([d61d41a](https://www.github.com/oslllo/validator/commit/d61d41a6b93aeb1e9581212ffc58cfbd93a13baf))
* webpack browser build output location ([9449d8f](https://www.github.com/oslllo/validator/commit/9449d8f5f38bca5aeb5be41da73d87ce620d0de4))


### Miscellaneous Chores

* release 2.0.0 ([d18af10](https://www.github.com/oslllo/validator/commit/d18af1028fdfc0d27fa63f3fd99c1bcd042e1d47))

## [1.1.1] - 2021/4/1

### Updated

- Updated dependencies.

## [1.1.0] - 2020/12/12

### Added

- Added support for **validatorjs** - `v13.5.2`.

### Updated

- Updated dependencies.

## [1.0.1] - 2020/10/1

### Changed

- Updated documentation.
- Added `package.json` keywords.

## [1.0.0] - 2020/9/25

### Changed

- All Client-side `dist/browser` files have been moved to `dist`
- Now returns an actual Object instead of a class instance.
- `main` node files have been moved from `dist/node` to `src`. `dist/node` files are no more generated.

### Added

- Added node engine version requirements.
- CDN links to `docs`.

## [0.0.1] - 2020/8/18

### Added

- Everything, initial release.
