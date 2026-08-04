# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.19] - 2026-08-04

### Added
- Added a `color` prop to `Progress` (`'primary' | 'info' | 'success' | 'warning' | 'danger'`, default `'primary'`) so the bar fill can match the semantic color of what it's tracking — previously it was always the fixed accent color with no way to differentiate multiple progress bars shown together.

## [0.2.18] - 2026-08-04

### Changed
- Darkened `MetricCard`'s title from `text-neutral-500`/`dark:text-neutral-400` to `text-neutral-900`/`dark:text-neutral-100` — it read noticeably fainter than titles on other cards (which use a solid heading color), not just "de-emphasized label" muted.

## [0.2.17] - 2026-08-04

### Changed
- `Tabs`'s tab-button row and each button no longer force `w-full`/`flex-1` (equal-width, stretched to fill the container) — buttons now size to their own label text, and the row shrinks to fit them instead of stretching across the parent.
- Removed the bordered/padded card wrapper around `Tabs`'s selected-tab content. The panel now renders `content` directly with no extra box, so consumers that want a card can supply their own instead of getting one nested inside another.

## [0.2.16] - 2026-08-03

### Fixed
- Reduced `Table`'s cell vertical padding from `py-4` to `py-3` — the default row height read as too large.

## [0.2.15] - 2026-08-03

### Fixed
- Removed the leftover `2px` vertical margin between `DatePicker`'s day cells — rows now sit flush against each other instead of leaving a small gap.

## [0.2.14] - 2026-08-03

### Changed
- `DatePicker`'s prev/next month buttons no longer have a constant background fill (`bg-neutral-50`/`dark:bg-neutral-800`) — the border stays visible at rest and the background only fills on hover, matching the calendar's other interactive affordances.

### Fixed
- Fixed `DatePicker`'s weekday header (S/M/T/W/T/F/S) always rendering in English regardless of the `locale` prop. `locale="ko"` now shows the Korean single-character labels (일/월/화/수/목/금/토) instead.

## [0.2.13] - 2026-08-03

### Fixed
- Fixed `DatePicker`'s Korean-locale header being wider than it needed to be. The month/year select boxes shared a single fixed `w-32` (128px) width meant to keep the header stable when English month names vary in length ("May" vs. "September"), but Korean month labels are always short ("1월"–"12월") — the leftover space still stretched the whole calendar wider, and since the day grid uses equal-width columns spanning that same width, each day number ended up with visibly more gap around it than the fixed-size cell needed. `locale="ko"` now uses a narrower `w-16` for the selects (English keeps `w-32`), which brings the calendar back down to its natural width and removes the extra gap between day cells. Verified by measuring the day grid: column width dropped from 55px (36px cell + ~19px gap) to exactly 32px (no gap) with `locale="ko"`, while `locale="en"` is unaffected.

## [0.2.12] - 2026-08-03

### Fixed
- Fixed `DatePicker`'s calendar popper being able to overflow past the edge of the viewport with no correction. The `floating-ui` positioning only included the `flip` middleware (switches side when there's no room) but not `shift` (slides the popper to stay within bounds on its current side); a `DatePicker` field placed near the right edge of the screen — e.g. inside a right-anchored `Drawer` — could open a calendar that extended off-screen and got clipped. Added `shift({ padding: 15 })` to `popperModifiers` so the calendar now stays within the viewport regardless of where the field sits.

## [0.2.11] - 2026-07-30

### Added
- Added a `classes` prop to `Table` and `Modal` — neither had one, so their outer wrapper (`Table`) and dialog panel (`Modal`) couldn't be styled at all.

### Fixed
- Fixed `Drawer`'s `classes` prop being declared in the type but never used in the component — passing it silently did nothing. It's now applied to the dialog panel.
- Fixed `UploadDropzone`'s `classes` prop landing on the background-less outer layout wrapper instead of the actual dropzone surface, so it visually had no effect. It now applies to the dropzone surface itself.
- Fixed `classes` overrides on `Table`, `Modal`, `Drawer`, and `UploadDropzone` losing to the component's own `bg-white`/`dark:bg-neutral-900` base classes for same-property conflicts (e.g. passing a translucent background). Plain string concatenation doesn't guarantee an override wins — Tailwind resolves same-specificity conflicts by CSS generation order, not JSX string order. All four now merge `classes` with `cn()` (clsx + tailwind-merge), which resolves conflicts by keeping the last class per property, so overrides reliably win. Verified by passing a translucent `classes` background and checking the computed style before and after.

## [0.2.10] - 2026-07-30

### Added
- Added a `loading` prop to `MetricCard`. When `true`, the title, value, and change badge are replaced with animated `Skeleton` placeholders (`aria-busy="true"` on the card) sized to match each `size` variant's typography, so the card keeps its usual dimensions and nothing shifts once real data lands.

### Changed
- Moved `MetricCard`'s `changeLabel` caption from below the change badge to above it.

## [0.2.9] - 2026-07-30

### Added
- Added a `locale` prop (`'en' | 'ko'`, default `'en'`) to `DatePicker` for the calendar header's language. `'ko'` shows Korean month names (e.g. "7월") and swaps the header order to year-then-month. The month is now also selectable via a dropdown, matching the year — previously only the year could be picked directly, month required stepping with the prev/next arrows.
- Added a `changeLabel` prop to `MetricCard` for a small caption under the change badge explaining what it's measured against, e.g. `'vs last week'` or `'지난주 대비'`. Only renders alongside a `change` value.

### Fixed
- Fixed `DatePicker`'s field having no visible border in its default (`contain`) and `outline` variants. Both had `border-neutral-300`/`dark:border-neutral-700` color classes but never an accompanying `border` width utility, so the border rendered at `0px` — invisible at rest, and invisible on the red `isError` state too, which meant validation errors had no visible border cue. Also dropped `outline`'s standalone `border-neutral-600`, which conflicted with the shared color classes; it now shares the same border-color logic as every other state, matching `TextInput`.
- Aligned `Button`'s heights with `TextInput`: `sm` 30px→36px, `md` 36px→42px, `lg` 44px→48px.
- Fixed `DatePicker`'s month/year header selects being unevenly sized — a long month name like "September" made the month select noticeably wider than the year select. Both now share a fixed width with centered text and a custom chevron on the right, instead of sizing to each native select's own content.
- Fixed `DatePicker`'s date grid not lining up under the weekday letters above it. Weeks were laid out with `flex` (fixed-width day cells packed to the left) while the weekday header used a 7-column `grid`; both now use the same grid so each date sits directly under its weekday.

## [0.2.8] - 2026-07-29

### Added
- Added text-customization props to `UploadDropzone` — `dragText`, `selectedText`, `browseButtonText`, `acceptedText`, `removeFileLabel`, and `uploadAriaLabel` — so every piece of copy the component previously hardcoded in English can be localized.
- Added a `simple` prop to `UploadDropzone` for a compact, language-neutral layout that drops the default heading, helper copy, "Accepted:" line, and Browse button, keeping just the icon and file list (any explicit `helperText` still renders).

### Fixed
- Removed `shadow-sm` from `Combobox`, `Textarea`, and `Select`. The class wasn't dark-mode-specific, but the shadow only read as visible in light mode; `TextInput` (the sizing/outline baseline for these fields) never had it, so it's removed for consistency across all three.

## [0.2.7] - 2026-07-29

### Fixed
- Unified `Combobox`'s light-mode outline with `TextInput`/`Select`/`Textarea`/`DatePicker`. Combobox's trigger used `border-neutral-500/20` with a `focus-within` ring at 2px/70% opacity, while the other fields use an opaque `border-neutral-300` and a 1px full-opacity focus ring. The difference barely showed in dark mode (the translucent border blended with the dark background) but was clearly visible in light mode; Combobox now uses the same values.
- Removed a redundant `ml-3` on `Combobox`'s search icon that doubled up with the trigger's own size-based left padding, leaving too much empty space to the icon's left.

## [0.2.6] - 2026-07-28

### Fixed
- Fixed `TextInput`, `Textarea`, `Select`, `Combobox`, and `UploadDropzone` focusing/opening their field when the field's caption `<label>` was clicked, not just the field itself. Each `<label>` uses `htmlFor` to associate with its field for accessibility, and browsers forward a click on the label to the associated control by default; that forwarded click is now suppressed with `onClick={(e) => e.preventDefault()}` on the label while keeping the `htmlFor`/`id` association intact. `Radio` and `Checkbox` are unaffected — their label deliberately wraps the whole option as a single click target.
- Aligned `Combobox` and `DatePicker` field sizing with `TextInput`. `Combobox`'s trigger used `rounded-xl` (12px) where every other field uses `rounded-lg` (8px); it's now `rounded-lg`. `DatePicker`'s `sm`/`md` heights (32px/40px) didn't match `TextInput`'s (36px/42px); they're now 36px/42px (`lg` was already 48px in both).

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
