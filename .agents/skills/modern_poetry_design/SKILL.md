---
name: Modern Poetry Page Design
description: Instrucciones y recursos para modernizar páginas de poemas con diseño premium, multilingüe (11 idiomas) y efectos visuales avanzados.
---

# Modern Poetry Design Skill

Esta skill permite estandarizar el diseño de las páginas de poesía de Paz Arés Osset siguiendo el estilo de "El Columpio del Éxtasis" o "Grito por la Paz".

## Componentes Clave

1.  **Estructura HTML (11 Idiomas)**:
    *   Selector de idiomas arriba a la derecha.
    *   Soporte para: Español, Inglés, Italiano, Chino, Árabe, Ruso, Alemán, Francés, Japonés, Portugués y Ucraniano.
    *   Clases `.language` y clases específicas por idioma (ej. `.spanish`, `.ukrainian`) para control dinámico.

2.  **Sistema Visual (base.css)**:
    *   Fondo con partículas (`effects-canvas`).
    *   Uso de `backdrop-filter: blur()` para elementos flotantes.
    *   Tipografía premium (Montserrat, Philosophers, Caveat para letra manuscrita).
    *   Tarjetas de música (`album-card`) con efectos hover 3D.

3.  **Lógica Interactiva (base.js)**:
    *   Gestión de idiomas con persistencia (opcional).
    *   `IntersectionObserver` para revelar estrofas al hacer scroll (`reveal`).
    *   Mapeo dinámico de Spotify según el idioma.

4.  **Sección Musical Localizada**:
    *   Las canciones se muestran en iframes estáticos al final.
    *   Las etiquetas de cada álbum (ej. "Versión Castellano", "Versión Rusa") deben estar envueltas en `<span>` con clases de idioma para que cambien según el selector general.

## Proceso de Aplicación

Para aplicar este diseño a un nuevo poema:

1.  **Generación de Activos**:
    *   Generar una imagen de fondo 8k (`background.png`) temática del poema.
    *   Generar "album chips" (portadas de 1:1) para las versiones musicales disponibles.

2.  **Preparación de Archivos**:
    *   Copiar la plantilla de `base.css` ajustando el color principal (ej. verde para naturaleza, rojo para pasión, azul para misticismo).
    *   Copiar la plantilla de `base.js` con las URLs de Spotify correspondientes.
    *   Reescribir `index.html` siguiendo la jerarquía de secciones establecida.

3.  **Traducciones**:
    *   Asegurarse de incluir los 11 idiomas en los encabezados y el cuerpo del poema.

## Ejemplos de Referencia

*   `forestry/placersoledad/` (Tema Naturaleza Verde)
*   `forestry/grito-por-la-paz/` (Tema Dramático/Paz)
*   `forestry/columpio-del-extasis/` (Tema Místico/Gozo)

---
*Nota: Siempre usa rutas absolutas al referenciar los archivos base.*
