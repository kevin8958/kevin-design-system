import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const cssPath = path.join(distDir, 'styles.css');
const esmPath = path.join(distDir, 'index.js');
const cjsPath = path.join(distDir, 'index.cjs');

const css = readFileSync(cssPath, 'utf8');

const esmInjector = `
const __KDS_STYLE_ID__ = 'kevin-design-system-styles';
const __KDS_STYLE_TEXT__ = ${JSON.stringify(css)};

if (typeof document !== 'undefined' && !document.getElementById(__KDS_STYLE_ID__)) {
  const style = document.createElement('style');
  style.id = __KDS_STYLE_ID__;
  style.textContent = __KDS_STYLE_TEXT__;
  document.head.appendChild(style);
}
`;

const cjsInjector = `
const __KDS_STYLE_ID__ = 'kevin-design-system-styles';
const __KDS_STYLE_TEXT__ = ${JSON.stringify(css)};

if (typeof document !== 'undefined' && !document.getElementById(__KDS_STYLE_ID__)) {
  const style = document.createElement('style');
  style.id = __KDS_STYLE_ID__;
  style.textContent = __KDS_STYLE_TEXT__;
  document.head.appendChild(style);
}
`;

writeFileSync(esmPath, `${esmInjector}\n${readFileSync(esmPath, 'utf8')}`);
writeFileSync(cjsPath, `${cjsInjector}\n${readFileSync(cjsPath, 'utf8')}`);
