# OAX — Demo de gestión para PyMEs

[![Site CI](https://github.com/Matydesousa/oax-business-management-demo/actions/workflows/site.yml/badge.svg)](https://github.com/Matydesousa/oax-business-management-demo/actions/workflows/site.yml)

Sitio institucional y demostración interactiva de un sistema de gestión pensado para comercios y pequeñas empresas.

El proyecto muestra cómo una solución a medida puede centralizar stock, movimientos, producción, sucursales y reportes en una interfaz simple. Toda la información de la demo es ficticia y se ejecuta localmente en el navegador.

## Funcionalidades

- Landing responsive con presentación de servicios, proceso de trabajo y planes orientativos.
- Demo navegable con panel general e indicadores de actividad.
- Gestión simulada de productos y movimientos de inventario.
- Filtros, búsquedas, paginación y alertas de stock mínimo.
- Simulación de producción y transferencias entre sucursales.
- Reportes por período y exportación a CSV.
- Tema claro/oscuro, recorrido guiado y restablecimiento de datos.
- Formulario de contacto preparado para Netlify Forms.
- Navegación por teclado y atributos de accesibilidad en los controles principales.

## Tecnologías

- HTML5 semántico
- CSS3 responsive
- JavaScript nativo
- Netlify Forms y configuración mediante `netlify.toml`

No requiere frameworks, paquetes ni proceso de compilación.

## Ejecutar localmente

Podés abrir `index.html` directamente en el navegador. Para reproducir un entorno servido por HTTP:

```powershell
py -m http.server 8080
```

Después visitá `http://localhost:8080`.

> El formulario se procesa únicamente cuando el sitio está desplegado en Netlify. La demo no envía información a servicios externos.

## Verificación

Las pruebas utilizan únicamente herramientas incluidas en Node.js y comprueban la sintaxis JavaScript, la estructura básica de las páginas y la existencia de sus recursos locales.

```powershell
node --check script.js
node --check demo.js
node --test tests/site.test.mjs
```

## Estructura

```text
OAX/
├── .github/workflows/ # Integración continua
├── assets/          # Logotipos e imágenes
├── tests/           # Verificaciones automáticas del sitio
├── index.html       # Sitio institucional
├── styles.css       # Estilos de la landing
├── script.js        # Interacciones de la landing
├── demo.html        # Interfaz de la demostración
├── demo.css         # Estilos de la demostración
├── demo.js          # Estado y comportamiento de la demo
├── gracias.html     # Confirmación del formulario
├── netlify.toml     # Configuración de despliegue
└── LICENSE          # Licencia MIT del código
```

## Alcance de la demo

La aplicación representa un producto frontend demostrativo. No incluye autenticación, persistencia remota, API ni base de datos. El tema se guarda en `localStorage`; los datos operativos permanecen solamente durante la sesión y pueden restablecerse desde la interfaz.

## Autor

Desarrollado como proyecto de portfolio por [Matias De Sousa](https://github.com/Matydesousa).

La marca OAX y sus recursos gráficos forman parte de esta demostración de portfolio.

## Licencia

El código de este proyecto se distribuye bajo la licencia MIT. La identidad visual y la marca OAX se incluyen únicamente como parte de esta demostración de portfolio.
