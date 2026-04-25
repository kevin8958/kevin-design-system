import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const runtime = globalThis as typeof globalThis & {
  global?: typeof globalThis;
};

if (typeof window !== 'undefined' && !runtime.global) {
  runtime.global = globalThis;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
