# kevin-design-system

A React component library for Kevin Design System.

## Installation

```bash
npm install kevin-design-system
```

`react` and `react-dom` are peer dependencies and must already exist in the consuming app.

## Usage

The package entry automatically loads the bundled library styles, so you can import components directly without a separate CSS import.

```tsx
import { Button, TextInput } from 'kevin-design-system';

export function Example() {
  return (
    <div className="flex flex-col gap-4">
      <TextInput placeholder="Type something" />
      <Button>Button</Button>
    </div>
  );
}
```

## Included Categories

- Foundation: `Typography`
- Action: `Button`, `ButtonGroup`, `Dropdown`, `Modal`, `Drawer`
- Input: `TextInput`, `Select`, `Checkbox`, `Radio`, `Switch`, `DatePicker`, `UploadDropzone`
- Navigation: `Pagination`, `Tabs`, `BreadCrumb`
- Data Display: `Avatar`, `Badge`, `Table`, `Tag`, `Tooltip`
- Feedback: `Alert`, `Progress`, `Skeleton`, `Toast`
- Layout: `Box`, `FlexWrapper`, `Grid`, `Divider`
- Interaction: `CountUp`, `SplitText`, `Sticker`

## Styling Notes

- Library styles are bundled into the package entry automatically.
- Dark mode follows a `.dark` class on an ancestor.
- The theme uses `Pretendard` and `Tossface` font-family names when available. If those fonts are not loaded in the consumer app, the browser will fall back to system fonts.

## Build the Library

```bash
npm run build:lib
```

This produces:

- `dist/index.js`
- `dist/index.cjs`
- `dist/styles.css`
- `dist/types`

## Local Package Check

```bash
npm pack
```

This creates a tarball you can install in another project for verification before publishing.
