# eslint-config-manzdev

Paquete de reglas preconfiguradas para `eslint` (linter de Javascript). **Con soporte para ESLint 9**.

Este paquete se utiliza internamente en `mkweb`, pero se ha separado por si alguien quiere utilizarlo de forma sencilla:
https://manz.dev/software/mkweb

## Características

Soporte por defecto para:

- ✅ Convenciones de nombres de ficheros y carpetas.
- ✅ Orden de importación de ficheros y paquetes.
- ✅ Reglas de estilo de código para HTML.
- ✅ Reglas de estilo de código para JavaScript y Web Components.

Opcional:

- ✅ Reglas de estilo opcionales para Testing.
- ✅ Reglas de estilo de código opcionales para JSON.

## Instalación

1. Instala el linter y el paquete de configuración:

```bash
npm install -D eslint eslint-config-manzdev@1.0.5-alpha
```

2. Crea un fichero de configuración `eslint.config.js` y añade la configuración:

```js
import { manzdev } from "./src/index.js";

export default manzdev({
  files: {
    basePath: "src/**/*",
    rules: {
      "check-file/filename-naming-convention": ["error", {
        "src/**/*.{html,css}": "KEBAB_CASE",
        "src/**/*.{js,ts}": "CAMEL_CASE",
        "src/{classes,components}/**/*.{js,ts}": "PASCAL_CASE",
      }],
      "check-file/folder-naming-convention": ["error", {
        "src/**/": "CAMEL_CASE"
      }],
    },
  },

  // Opcional: Añadir reglas de estilo para Testing y JSON
  jest: true,
  json: true,
});
```

O si prefieres utilizar la configuración extendida:

```js
import { manzdev } from "./src/index.js";

export default [
  ...manzdev({
    files: {
      basePath: "src/**/*",
      rules: {
        "check-file/filename-naming-convention": ["error", {
          "src/**/*.{html,css}": "KEBAB_CASE",
          "src/**/*.{js,ts}": "CAMEL_CASE",
          "src/{classes,components}/**/*.{js,ts}": "PASCAL_CASE",
        }],
        "check-file/folder-naming-convention": ["error", {
          "src/**/": "CAMEL_CASE"
        }],
      },
    },

    // Opcional: Añadir reglas de estilo para Testing y JSON
    jest: true,
    json: true,
  }),

  // Tu configuración personalizada...
];
```

## Corrección automágica en VSCode

Si quieres que Visual Code sea capaz de corregir los errores automáticamente, necesitarás lo siguiente:

1. Instala la extensión oficial de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Crea una carpeta `.vscode/` con un fichero `settings.json` en tu proyecto o pulsa <kbd>F1</kbd> / <kbd>Open User Settings (JSON)</kbd> e incluye la siguiente configuración recomendada:

```json
{
  /* Disable basic VSCode linters */
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  /* Activamos Stylelint */
  "eslint.enable": true,
  /* Corregir automágicamente */
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
   "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  /* ... */
}
```
