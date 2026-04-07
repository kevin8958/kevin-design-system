# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-04-07

### Added
- First public npm release for `kevin-design-system`
- Library build output for ESM, CJS, bundled styles, and TypeScript declarations
- Package entry exports for foundation, action, input, navigation, data display, feedback, layout, and interaction components
- Automatic bundled style injection from the package entry so consumers can import components without a separate stylesheet import
- Published installation flow in the Getting Started page

### Changed
- Split docs-only global styles from library styles for package-safe distribution
- Updated `Sticker` to bundle default image assets instead of relying on app-local public paths
- Updated `BreadCrumb` to work without `react-router-dom` as a runtime dependency

### Fixed
- Finalized publish readiness checks for package build and type generation
- Aligned `SimpleTable` rendering types with emitted declaration output
