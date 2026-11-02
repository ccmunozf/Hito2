# Pizzería Mamma Mía 🍕

Proyecto educativo con React y Vite. El Hito 2 incorpora formularios de registro e inicio de sesión para practicar el estado y los eventos, conservando el catálogo del Hito 1.

## Ejecutar el proyecto

Necesitas Node.js y npm compatibles con la versión de Vite indicada en `package.json`.

```bash
npm install
npm run dev
```

Abre la dirección local que muestra Vite en la terminal.

```bash
npm run build   # Genera la versión de producción en dist/
npm run preview # Sirve la compilación localmente
npm run lint    # Revisa el código con ESLint
```

## Funcionalidades

- **Home:** encabezado y tarjetas de pizzas con ingredientes y precios en formato chileno.
- **Register:** correo electrónico, contraseña y confirmación de contraseña.
- **Login:** correo electrónico y contraseña.
- Navegación entre las vistas desde el menú, sin recargar la página.
- Formularios adaptables a pantallas pequeñas, etiquetas asociadas y mensajes accesibles.

## Requisitos del Hito 2

| Validación | Registro | Login |
| --- | --- | --- |
| Todos los campos obligatorios | Sí | Sí |
| Contraseña de al menos 6 caracteres | Sí | Sí |
| Contraseña y confirmación iguales | Sí | No aplica |
| Mensajes de error y éxito al enviar | Sí | Sí |
| Formato de email válido (adicional) | Sí | Sí |

Los campos usan `useState` y se actualizan mediante `onChange`. El evento `onSubmit` evita la recarga con `preventDefault()`, valida los datos y muestra el resultado. Al editar un campo se limpia el mensaje anterior; después de un envío correcto se vacían los campos.

La navegación se controla con estado en `App.jsx`. No es necesario comentar componentes para revisar cada formulario.

## Estructura

```text
src/
├── components/
│   ├── AuthForm.jsx       # Campos, estado y eventos compartidos
│   ├── Login.jsx          # Vista de inicio de sesión
│   ├── Register.jsx       # Vista de registro
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── CardPizza.jsx
│   └── Footer.jsx
├── utils/
│   ├── validateAuth.js    # Reglas de validación
│   └── formatPrice.js
├── App.jsx
├── App.css
└── main.jsx
```

## Cómo probar los formularios

1. Abre **Register** y envía el formulario vacío: debe indicar que todos los campos son obligatorios. También se rechazan campos compuestos solo por espacios.
2. Escribe un email sin formato válido: debe pedir un correo válido.
3. Usa `pizza` como contraseña: debe indicar el mínimo de 6 caracteres.
4. Usa `pizza123` y confirma con `pizza456`: debe indicar que no coinciden.
5. Usa `persona@ejemplo.cl` y `pizza123` en ambos campos: debe mostrar éxito y limpiar los campos.
6. Abre **Login** y prueba campos vacíos, email incorrecto y contraseña corta.
7. Envía **Login** con `persona@ejemplo.cl` y `pizza123`: debe mostrar éxito.
8. Comprueba que una contraseña de exactamente 6 caracteres sea aceptada, y que puedas volver a Home desde el menú.

## Alcance

Este hito valida datos en el navegador. No crea cuentas reales, no autentica usuarios y no guarda contraseñas. Un mensaje de éxito significa que los datos cumplen las validaciones; no cambia el estado de sesión del menú.

El total de $25.000 y los botones de carrito, detalle y añadir del Hito 1 siguen siendo elementos de presentación. Las imágenes de las pizzas requieren conexión a Internet.
# Hito2
