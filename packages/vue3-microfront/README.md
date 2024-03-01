# Semilla Vue 3, Vite, Typescript
Proyecto de semilla base para Vue 3, basado en typescript y con vite.
## Stack tecnológico

|               | Nombre     | Versión |
| ------------- | ---------- | ------- |
| **Lenguaje**  | typescript | ^4.6.2  |
| **Framework** | vuejs (SFC)| ^3.2.31  |

## Instalación y configuración


### Prerrequisitos

Node v18.12.0


### Instalar dependencias

```
npm ci
```

### Iniciar modo desarrollo

```
npm run dev
```

### Iniciar modo Producción (Compilación, minificación y previsualización del modo productivo)

```
npm run build
npm run preview
```

## Testing con Vitest
Para las pruebas unitarias usamos Vitest. Vitest nos permite usar el mismo vite.config.ts para la configuración. Las pruebas unitarias van en la carpeta /test en el root del proyecto con extensión .test.ts
Para ejecutar usamos el siguiente comando que se ejecute en modo Watch.

```
npm run test
```
Para obtener un Code-coverage ejecutamos:

```
npm run coverage
```
Esto nos dirá el Code-coverage en el terminal y creara una carpeta coverage donde tenemos la misma información pero co un UI.
## Linter
Linter manualmente con:

```
npm run lint:all
```

## Publicar una nueva versión

Una vez tengamos nuestra rama `master` actualizada, generaremos una nueva versión siguiendo el [versionado semántico](https://semver.org/lang/es/) con la versión que corresponda utilizando [release-it](https://github.com/release-it/release-it):


```sh
npm run release
```
Nos aparecerá una GUI que nos indicará paso a paso todo lo que hay que hacer para crear una nueva versión. Uno de los pasos es decidir qué versión queremos subir:

- Si nuestros cambios rompen la compatibilidad hacia atrás, subiremos una versión _major_ (vX.0.0):

- Si los cambios añaden más funcionalidad sin romper compatibilidad, subiremos una versión _minor_ (v0.X.0):

- Si por el contrario, hemos solucionado un bug, subiremos una versión _patch_ (v0.0.X):

### Hook Changelog
Cuando lanzamos una release, release-it tiene configurado un hook que nos comprueba el linter y además lanzará el autochangelog para modificar el CHANGELOG.md automáticamente con los cambios de la release.


### Formato Changelog

De cara a generar un changelog en base a las historias de usuario y desarrollos nuevos en cada versión, seguiremos la siguiente convención en la nomenclatura de los títulos de las pull requests:

El título será

```sh
Tipo(optionalScope): [ID PBI] - Descripción
```

- Tipo: Tipo de la PR, siguiendo la convención:
  - 🐛 | fix      - Indica que corrige un bug
  - 🧩 | feat     - Indica que incluye una nueva feature
  - 📝 | docs     - Indica cambios en documentación -por ejemplo Readme-, ajustes, mantenimiento...
  - ⚡️ | perf     - Indica tareas de performance y rendimiento
  - ♻️ | refactor - Indica un refactor o mejoras en el código, no añade funcionalidad ni resuelve bug
  - ✅ | test     - Indica cambios en los tests.
  - 🧑‍💻 | devops   - Indica cambios en infraestructura.

- Scope (opcional): Épica o categoría de la PR
- ID PBI: Id del Product Backlog Item (Historia de usuario)
- Descripción

## Multidioma

La aplicación utiliza [Localise](https://localise.biz/) como herramienta de gestión multidioma.
El script *locales-update.sh* se ocupa de conectarse a la herramienta y descargar en un fichero por idioma en formato yaml anidado con todos los literales y traducciones.


## Indicaciones de desarrollo:
- Toda la aplicación está construida utilizando vue 3 y concretamente la composition API mediante el azucar sintáctico script setup. Si quieres más información: [Docs](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax).
- Hace uso del plugin unplugin-vue-componentes para crear un archivo global de componentes que se importen on demand. Esto significa que en el momento que damos de alta un componente o contenedor vue nuevo, se añadirá de forma automática al archivo components.d.ts y se podrá utilizar en cualquier lugar sin necesidad de importarlo manualmente. Además estos imports son dinámicos y no consumen recursos de continuo. Más info: [Docs](https://github.com/antfu/unplugin-vue-components)
- Se utiliza el plugin unplugin-auto-import para crear un archivo global de importaciones que se importen on demand. Todo lo que definamos en el vite.conf.ts dentro del auto-import, se añadirá al archivo auto-imports.d.ts y se podrá utilizar en cualquier lugar sin necesidad de importarlo manualmente. Además estos imports son dinámicos y no consumen recursos de continuo. Más info: [Docs](https://github.com/antfu/unplugin-auto-import)
