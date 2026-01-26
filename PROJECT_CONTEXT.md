# Contexto del Proyecto: Paz Arés Osset - Arte y Espiritualidad

## 🌟 Visión del Proyecto
Este proyecto busca crear un espacio digital vivo para la artista Paz Arés Osset (y colaboradores). El objetivo es difundir un mensaje de paz, espiritualidad y fusión de culturas a través del arte (pintura, poesía, narrativa). La web no es solo un portafolio, es un vehículo para "hacer un mundo mejor".

## 📍 Estado Actual (Hito "Pulgarcito")
*   **Tech Stack:** HTML5, CSS3, Javascript (Vanilla), Bootstrap 4.
*   **Estructura:**
    *   `index.html`: Landing page (actualmente un menú selector y carrusel).
    *   `/gallery`: Galería de pinturas.
    *   `/poetry`: Sección de poesía.
        *   `poetry/index.html`: Catálogo de poemas.
        *   `poetry/hueles-a-amor`: **Prototipo ideal** de página de poema (Multilingüe, Audio, Cómic, Enlaces).

## 🧭 Estrategia de Contenido (Roadmap)

### 1. Poesía (La sección "viva")
*   **Objetivo:** Migrar/Crear ~100 poemas.
*   **Estándar de Calidad (Basado en "Hueles a Amor"):**
    *   **Multilingüe:** Cada poema debe estar traducido a los idiomas principales (ES, EN, FR, IT, RU, AR, ZH).
    *   **Multimedia:**
        *   **Cómic:** Una viñeta estilo cómic generada por IA que capture la esencia del poema.
        *   **Audio:** Enlaces a Spotify/Plataformas (Linktree) para versiones recitadas o musicadas.
    *   **Conexiones:** Links a cuadros relacionados si aplica.
*   **Navegación:** `poetry/index.html` debe priorizar el castellano por defecto pero ser accesible globalmente.

### 2. Galería
*   **Objetivo:** Añadir ~50 cuadros pendientes.
*   **Funcionalidad:** Mantener la crítica en varios idiomas al hacer clic.

### 3. Monetización
*   Estrategia "Soft": Botón "Invítame a un café/cerveza" o similar.
*   Enfoque: Apoyo voluntario al mensaje, no comercialización agresiva. Libros disponibles en KDP (Amazon) y versión gratuita web.

## 🛠 Deuda Técnica y Mejoras Pendientes
*   **Unificación de Navegación:** El menú principal varía entre secciones. Se necesita una Navbar consistente.
*   **Automatización:** Con 100 poemas, mantener `poetry/index.html` a mano será difícil. Considerar un script o estructura JSON para generar la lista dinámicamente en el futuro si crece mucho.
*   **SEO:** Implementar meta tags (OG tags) en cada poema individual para que se compartan bonito en redes sociales.

## 🤖 Instrucciones para Agentes (Memoria)
Si eres un agente IA retomando este proyecto:
1.  Lee este archivo para entender el "Norte" del proyecto.
2.  Usa `poetry/hueles-a-amor/index.html` como la "Verdad Fuente" para el diseño de nuevos poemas.
3.  Mantén la estética "premium" pero accesible y cargada de emoción.
4.  Antes de grandes cambios, verifica la estrategia en `strategy.html`.
