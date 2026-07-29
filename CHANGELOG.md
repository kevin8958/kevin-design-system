# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.6] - 2026-07-28

### Fixed
- Fixed `TextInput`, `Textarea`, `Select`, `Combobox`, and `UploadDropzone` focusing/opening their field when the field's caption `<label>` was clicked, not just the field itself. Each `<label>` uses `htmlFor` to associate with its field for accessibility, and browsers forward a click on the label to the associated control by default; that forwarded click is now suppressed with `onClick={(e) => e.preventDefault()}` on the label while keeping the `htmlFor`/`id` association intact. `Radio` and `Checkbox` are unaffected — their label deliberately wraps the whole option as a single click target.

## [0.2.5] - 2026-07-28

### Fixed
- Fixed `Combobox`'s displayed text not reflecting `value`/`options` until the input was focused. Internal `query` state was only ever populated from `selectedOption.label` inside the input's `onFocus` handler, so a combobox that mounted already populated (e.g. an edit drawer with a preset assignee) showed an empty input until the user clicked into it. The displayed value is now derived directly from `selectedOption.label` whenever the dropdown is closed, so it reflects the current value immediately without an effect (which would race the parent's `value`-prop update and flash the old label after a selection).

## [0.2.4] - 2026-07-27

### Added
- Added a `maxVisibleOptions` prop to `Combobox` that caps the dropdown list's height to roughly that many rows (measured from the actual rendered rows, since options can have a variable-height description line) before it scrolls.

### Fixed
- Fixed `DatePicker` silently ignoring `type="range"` when `isRange` wasn't also set. `type` was declared on `DatepickerProps` and used in the docs demo, but never actually read by the component — only `isRange` controlled range behavior. Setting `type="range"` alone left the picker in single mode, so `startDate`/`endDate` (and `dateFormat`) were never applied and the input showed nothing. `isRangeMode` is now derived as `isRange || type === 'range'`.

## [0.2.3] - 2026-07-27

### Added
- Added a `focusColor` prop (`'primary' | 'neutral' | 'info' | 'success' | 'warning' | 'danger'`, default `'primary'`) to `TextInput`, `Textarea`, `Select`, and `DatePicker` so consumers can inject a focus border/ring color per instance instead of only the fixed default. The error/invalid state's danger color always takes priority over `focusColor` when the field is in an error state.
- Added a `dateFormat` prop to `DatePicker` (a dayjs format string, default `'MMM D, YYYY'`) so the displayed value can be localized, e.g. `'YYYY년 MM월 DD일'`. Applies to both single-date and range display.

## [0.2.2] - 2026-07-27

### Fixed
- Unified outline/focus styling across `TextInput`, `Select`, `Textarea`, and `DatePicker`. `Select` used a different border radius, a near-invisible border color, and a thicker/differently-opaque focus ring than the other three; `DatePicker` used a border-width/color change on focus with no ring at all. All four now share the same recipe: `rounded-lg`, `border-neutral-300`/`dark:border-neutral-700`, and `focus:border-secondary-400/70` + `focus:ring-1 focus:ring-secondary-700` (with matching danger-state variants).

## [0.2.1] - 2026-07-22

### Fixed
- Fixed `ToastProvider`/`ToastViewport` placement (all six values) rendering with swapped horizontal/vertical axes. The viewport container was missing `flex-col`, so it defaulted to row direction while `placementClassMap`'s `items-*`/`justify-*` values were authored assuming a column-direction container, swapping main-axis and cross-axis for every placement. Verified against real computed styles in a running browser.
- Added `react-native` as a devDependency so a clean install (Vercel, CI, a fresh clone) has it available for the `tsc` step that type-checks `src/components/app/**` when emitting the `kevin-design-system/app` entry's declarations. It was previously only an optional peerDependency, which a fresh install never installs.

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
