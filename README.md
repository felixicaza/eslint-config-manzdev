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
npm install -D eslint eslint-config-manzdev@alpha
```

2. Crea un fichero de configuración `eslint.config.js` y añade la configuración:

```js
import { recommended } from "eslint-config-manzdev";

export default [
  ...recommended,
  {
    rules: {
      /* Tus reglas aquí */
    }
  }
];
```

Si prefieres una configuración más simple, puedes reemplazar `recommended` por `basic`. Recuerda que puedes añadir tus propias reglas en `rules` para sobreescribir las que no te gusten.

También puedes ejecutar desde una terminal el siguiente comando para ver las reglas que se están aplicando:

```bash
$ npx @eslint/config-inspector
```

## Corrección automágica en VSCode

Si quieres que VisualCode sea capaz de corregir los errores automáticamente, necesitarás lo siguiente:

1. Instala la extensión oficial de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Crea una carpeta `.vscode/` con un fichero `settings.json` en tu proyecto o pulsa <kbd>F1</kbd> / <kbd>Open User Settings (JSON)</kbd> e incluye la siguiente configuración recomendada:

```json
{
  /* Desactiva los linters básicos de VSCode */
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  /* Activamos el linter de Javascript */
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
