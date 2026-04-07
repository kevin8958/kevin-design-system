import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distTypesDir = path.join(rootDir, 'dist', 'types');
const distNamespacesDir = path.join(distTypesDir, 'types');

if (!existsSync(distTypesDir)) {
  throw new Error('dist/types was not generated before prepare-lib-types ran.');
}

mkdirSync(distNamespacesDir, { recursive: true });

cpSync(path.join(rootDir, 'src', 'index.d.ts'), path.join(distTypesDir, 'index.d.ts'));

for (const fileName of [
  'action.d.ts',
  'data.d.ts',
  'feedback.d.ts',
  'foundation.d.ts',
  'input.d.ts',
  'interaction.d.ts',
  'layout.d.ts',
  'navigation.d.ts',
]) {
  cpSync(
    path.join(rootDir, 'src', 'types', fileName),
    path.join(distNamespacesDir, fileName),
  );
}

const generatedNamespacesFile = path.join(distNamespacesDir, 'namespaces.d.ts');

if (existsSync(generatedNamespacesFile)) {
  rmSync(generatedNamespacesFile);
}
