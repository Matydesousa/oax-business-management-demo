import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pages = ['index.html', 'demo.html', 'gracias.html'];

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

function isExternal(reference) {
  return /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(reference);
}

test('las páginas tienen estructura HTML básica', () => {
  for (const page of pages) {
    const html = read(page);

    assert.match(html, /<!doctype html>/i, `${page} debe declarar HTML5`);
    assert.match(html, /<html\s+[^>]*lang="es"/i, `${page} debe declarar el idioma`);
    assert.match(html, /<meta\s+[^>]*name="viewport"/i, `${page} debe ser responsive`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${page} debe tener título`);
  }
});

test('todas las referencias locales de las páginas existen', () => {
  for (const page of pages) {
    const html = read(page);
    const references = html.matchAll(/(?:^|\s)(?:src|href|action)="([^"]+)"/gi);

    for (const [, rawReference] of references) {
      if (!rawReference || rawReference.startsWith('#') || isExternal(rawReference)) {
        continue;
      }

      const relativePath = rawReference.split(/[?#]/, 1)[0].replace(/^\//, '');
      const target = relativePath || 'index.html';

      assert.ok(existsSync(join(root, target)), `${page} referencia un recurso inexistente: ${rawReference}`);
    }
  }
});

test('los enlaces internos apuntan a secciones existentes', () => {
  for (const page of pages) {
    const html = read(page);
    const fragments = html.matchAll(/href="#([^"]+)"/gi);

    for (const [, id] of fragments) {
      assert.match(html, new RegExp(`id=["']${id}["']`), `${page} no contiene la sección #${id}`);
    }
  }
});
