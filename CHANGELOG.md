# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0](https://www.github.com/oslllo/validator/compare/v2.0.1...v3.1.0) (2022-07-16)


### Features

* **test:** add v16 to tests ([012af9a](https://www.github.com/oslllo/validator/commit/012af9a2d1f12c30724ebfb8a767e5076b662184))


### Bug Fixes

* **coverage:** use node v16 ([c00406c](https://www.github.com/oslllo/validator/commit/c00406ca00caf803011bd45647d669fabe0f1ee2))
* **pkg:** update package-lock.json ([d0b3702](https://www.github.com/oslllo/validator/commit/d0b370282c081edd15a2f3d0816ddaf519a80c59))
* **scripts:** replace node_modules with npx ([90747cc](https://www.github.com/oslllo/validator/commit/90747ccaee12c8d2469c33af81fa913de4e13f1d))


### Miscellaneous Chores

* release 2.0.2 ([07c5884](https://www.github.com/oslllo/validator/commit/07c588441ea831777f6a5bbdec718db3e6324944))
* release 3.1.0 ([fd0e86d](https://www.github.com/oslllo/validator/commit/fd0e86d742b250a92837eee3895da0bd8658edcd))

## [3.0.0](https://www.github.com/oslllo/validator/compare/v2.0.2...v3.0.0) (2022-01-08)

### Breaking Changes

- Replaced JSDOM with domino ([023ee4c](https://github.com/oslllo/validator/commit/023ee4cc3c6a6aad538e9673876c61508d31a5bc))
- Dropped support for Node V10 ([f86a2d7](https://github.com/oslllo/validator/commit/f86a2d7d68365a929d037ee64bf4de325a0a92d6))

### Miscellaneous Chores

- update dependencies ([0e63e00](https://www.github.com/oslllo/validator/commit/0e63e007a0e49a6f6c4cdb9331ab9c5fad5fd859))

## [2.0.2](https://www.github.com/oslllo/validator/compare/v1.1.1...v2.0.2) (2022-01-03)

### Miscellaneous Chores

- update dependencies ([ce901d8](https://www.github.com/oslllo/validator/commit/ce901d862798b520288e563023a5473a85b58dd7))

### [2.0.1](https://www.github.com/oslllo/validator/compare/v2.0.0...v2.0.1) (2021-09-05)

### Bug Fixes

- vulnerabilities ([237682f](https://www.github.com/oslllo/validator/commit/237682fb4feb8f2d38c2ca96c5b440ca2be5a9d8))

## [2.0.0](https://www.github.com/oslllo/validator/compare/v1.1.1...v2.0.0) (2021-05-06)

### Breaking Changes

- drop support for pre-packaged dist bundles.

### Bug Fixes

- package breaking when process.env.NODE_ENV env variable is set ([d61d41a](https://www.github.com/oslllo/validator/commit/d61d41a6b93aeb1e9581212ffc58cfbd93a13baf))
- webpack browser build output location ([9449d8f](https://www.github.com/oslllo/validator/commit/9449d8f5f38bca5aeb5be41da73d87ce620d0de4))

### Miscellaneous Chores

- release 2.0.0 ([d18af10](https://www.github.com/oslllo/validator/commit/d18af1028fdfc0d27fa63f3fd99c1bcd042e1d47))

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
