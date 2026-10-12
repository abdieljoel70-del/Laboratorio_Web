SAZÓN BORICUA — EVALUACIÓN FINAL DE DESARROLLO WEB
Estudiante: Abdiel Abreu
Escenario: Restaurante
Estilo: Moderno y profesional

DESCRIPCIÓN
Este proyecto presenta un sitio web responsivo para un restaurante ficticio inspirado en la cocina puertorriqueña. Integra HTML5 semántico, CSS personalizado, Bootstrap 5 y JavaScript externo. Incluye una página principal y diez páginas subordinadas.

PÁGINAS INCLUIDAS
1. index.html — Inicio con carrusel, platos destacados y formulario de suscripción.
2. paginas/menu.html — Menú general.
3. paginas/entradas.html — Entradas.
4. paginas/platos-principales.html — Platos principales.
5. paginas/postres.html — Postres.
6. paginas/bebidas.html — Bebidas.
7. paginas/historia.html — Nuestra historia.
8. paginas/chef.html — Nuestro chef.
9. paginas/eventos.html — Eventos y formulario de consulta.
10. paginas/reservaciones.html — Formulario de solicitud de reservación.
11. paginas/contacto.html — Formulario de contacto.

ARCHIVOS
- index.html: página de inicio.
- estilos.css: estilos, variables, diseño responsivo y estados de accesibilidad.
- script.js: interacciones de tarjetas, modal de detalles, año automático y validación de formularios.
- paginas/: las diez páginas subordinadas.
- imagenes/: carpeta reservada para imágenes locales si se desea añadirlas.

TECNOLOGÍAS Y BUENAS PRÁCTICAS
- HTML5 con elementos semánticos y textos alternativos para imágenes.
- Bootstrap 5 para navegación, cuadrícula, carrusel, modal y componentes responsivos.
- CSS personalizado con variables reutilizables y media queries.
- JavaScript en archivo externo y en modo estricto.
- Validación de formularios con restricciones HTML y JavaScript.
- Etiquetas label, navegación por teclado, enlace para saltar al contenido y mensajes accesibles.
- Código comentado y nombres descriptivos.
- El diseño usa imágenes remotas de Unsplash y Bootstrap desde CDN; se necesita conexión a Internet para cargarlos.

CÓMO ABRIR EL PROYECTO
1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión Live Server (si está disponible en tu entorno).
3. Haz clic derecho en index.html y selecciona “Open with Live Server”.
4. El navegador abrirá una dirección local HTTP, por ejemplo http://127.0.0.1:5500/index.html.
5. Navega por el menú y prueba el carrusel, los detalles de platos y los formularios.
6. Para revisar errores, abre las herramientas del navegador con F12 y entra en Console.

PRUEBAS RECOMENDADAS
- Verifica que los diez enlaces subordinados abran páginas con contenido.
- Cambia entre las diapositivas del carrusel.
- Pulsa “Ver detalles” en las tarjetas de platos.
- Envía los formularios vacíos para comprobar mensajes de validación.
- Prueba un correo inválido y luego uno válido.
- Reduce el ancho del navegador para verificar el diseño responsivo.
- Revisa la consola del navegador para detectar errores.

IMPORTANTE
Este es un prototipo académico. Los formularios muestran una confirmación local, pero no envían información a un servidor ni crean reservas reales. La dirección, horario, platos y precios son contenido demostrativo. No se debe presentar como un restaurante real.

SUBIR A GITHUB
Desde la terminal abierta en la carpeta del proyecto:
  git init
  git add .
  git commit -m "Evaluación final: sitio web de restaurante"
  git branch -M main
  git remote add origin https://github.com/abdieljoel70-del/Laboratorio_Web.git
  git push -u origin main

Si el repositorio ya tiene un remote llamado origin, no repitas el comando git remote add origin. Comprueba primero con:
  git remote -v
Si GitHub ya contiene commits que no están en tu copia local, sincroniza primero para evitar sobrescribir el historial.
