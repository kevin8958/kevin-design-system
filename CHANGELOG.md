# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-07-22

### Changed
- **Breaking:** Split the library build into two entry points — `kevin-design-system` (web, no `react-native`) and `kevin-design-system/app` (React Native `App*` components). Previously both were bundled into a single `dist-lib/index.js`, so the raw, unparsed `react-native` import sat at the top of the web bundle unconditionally, which broke web projects whose bundler couldn't parse React Native's Flow syntax and pulled in `react-native` at runtime just from importing any web component.
- `App*` components (`AppButton`, `AppToast`, etc.) now must be imported from `kevin-design-system/app` instead of the package root.
- `react-native` is now an optional peer dependency (`peerDependenciesMeta`), so web-only installs no longer need it and no longer get a peer dependency warning for it.

### Fixed
- Web entry (`kevin-design-system`) type declarations (`index.d.ts`) no longer reference React Native ambient types (`app.d.ts`), so web-only TypeScript projects no longer need `react-native`'s types resolvable just to type-check.

## [0.1.3] - 2026-07-22

### Added
- Added a `triggerClasses` prop to `Tooltip` for styling/positioning the trigger wrapper, separate from `classes` (which targets the floating panel)

### Fixed
- Fixed the library build missing `app.d.ts`, `mobile.d.ts`, and `productivity.d.ts` type declarations, which broke consumers using mobile or app components

## [0.1.2] - 2026-04-10

### Added
- Added new action components: `Accordion`, `Popover`, and `ActionSheet`
- Added new input components: `Textarea` and `Combobox`
- Added new navigation and data display components: `Stepper`, `EmptyState`, `DescriptionList`, and `MetricCard`
- Added a new `Mobile` documentation category with `BottomNavigation`, `TopAppBar`, `BottomSheet`, and `NavDrawer`
- Added GNB search with keyboard navigation for moving through results and opening pages directly from the search panel

### Changed
- Expanded the documentation catalog with new component pages, stories, tests, and refreshed category preview artwork
- Refined `Toast` documentation to cover provider and viewport usage within the main toast docs flow

### Fixed
- Fixed publish-time runtime errors by removing direct `process` access from shared constants
- Improved SNB behavior so refresh keeps the current page in view and reduced remaining docs interaction rough edges across mobile previews and overlays

## [0.1.1] - 2026-04-07

### Changed
- Restored the docs site build to `dist` while moving the publishable package output to `dist-lib` for clearer deployment separation
- Tuned `BreadCrumb` active colors so the current page uses `secondary` in light mode and `primary` in dark mode

### Fixed
- Reduced `CodeExample` layout shift on first render by stabilizing height measurement before the initial paint
- Prevented docs deployments from serving the packaged library bundle instead of the site HTML

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
