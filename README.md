# eslint-config-manzdev

Paquete de reglas preconfiguradas para `eslint` (linter de Javascript). **Con soporte para ESLint 9**.

Este paquete se utiliza internamente en `mkweb`, pero se ha separado por si alguien quiere utilizarlo de forma sencilla:
https://manz.dev/software/mkweb

## Instalación

1. Instalar el linter y el paquete de configuración:

```bash
npm install -D eslint eslint-config-manzdev@1.0.5-alpha
```

2. Crear un fichero de configuración `eslint.config.js` que lo utilice:

```js
import manzdev from "eslint-config-manzdev";

export default [
  ...manzdev,
  {
    rules: {
    }
  }
];
```

Si lo deseas, puedes modificar reglas a tu criterio en el apartado `rules`.

## Corrección automágica en VSCode

Si quieres que Visual Code sea capaz de corregir los errores automáticamente, necesitarás lo siguiente:

1. Instala la extensión oficial de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Crea una carpeta `.vscode/` con un fichero `settings.json` en tu proyecto o pulsa <kbd>F1</kbd> / <kbd>Open User Settings (JSON)</kbd> e incluye la siguiente configuración recomendada:

```js
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
