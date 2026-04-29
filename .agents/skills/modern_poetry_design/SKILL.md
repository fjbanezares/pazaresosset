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

3.  **Lógica Interactiva (script.js)**:
    *   Gestión de idiomas con persistencia mediante `data-lang` en el `body`.
    *   Uso de un selector de idiomas premium con banderas (emojis) y dropdown dinámico.
    *   `IntersectionObserver` para revelar estrofas y secciones al hacer scroll (`reveal` e `visible`).
    *   Control centralizado de la visibilidad de idiomas vía CSS: `[data-lang="idioma"] .idioma { display: block; }`.

4.  **Sección de Identidad y Navegación**:
    *   Logo de la marca (`logopazares.png`) fijo arriba a la izquierda.
    *   Botón de Linktree arriba a la derecha, junto al selector de idiomas.
    *   Uso de FontAwesome para iconos.

5.  **Sección Musical y de Inspiración Localizada**:
    *   Las canciones se muestran en tarjetas de álbum (`album-card`) con efectos hover 3D y rotación sutil.
    *   Sección de "Inspiración" al final del poema con un texto refinado y profundo, traducido a todos los idiomas.

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

## 🎨 Técnica: Variación Visual de Estrofas

Técnica validada en **Latido Verde**: Aplicar clases CSS diferentes a cada estrofa del poema para reflejar su tono emocional. Crea profundidad visual — el lector *siente* el cambio de emoción a través de colores y bordes sutiles.

**Clases disponibles:**
- `.embrace-stanza` → Unión, abrazo (verde suave, borde izquierdo)
- `.call-stanza` → Llamada a la acción (dorado, itálica, borde completo)
- `.protest-stanza` → Denuncia (naranja, borde izquierdo)
- `.salvation-stanza` → Esperanza, salvación (tipografía Caveat grande)
- `.coda-stanza` → Epílogos personales (verde-teal, itálica)
- `.prayer-stanza` → Momentos espirituales (dorado, itálica)
- `.aggression-stanza` → Tensión (rojo tenue)
- `.realization-stanza` → Revelaciones (Caveat, blanco puro)

**Regla:** No todas las estrofas necesitan estilo especial. Dejar algunas neutras para crear contraste. Opacidades bajas siempre (0.03-0.05 fondos, 0.2-0.3 bordes).

## 🖼️ Técnica: Enmarcado de Imágenes Personales

Técnica validada en **Latido Verde**: Mostrar imágenes del autor en marcos elegantes con glassmorfismo, efecto hover suave y pies de foto multilingües.

### CSS Clave
```css
.art-frame {
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    border: 1px solid rgba(color, 0.15);  /* color = acento del poema */
    box-shadow: 0 30px 80px rgba(0,0,0,0.5);
    max-width: 650px;  /* CLAVE: no superar esto para laptops */
    width: 100%;
}

.art-frame::before {  /* Marco exterior decorativo */
    border: 2px solid rgba(color, 0.15);
    border-radius: 30px;
    /* posición absoluta con offset -8px */
}

.img-fluid { width: 100%; height: auto; display: block; }

.personal-art:hover {
    transform: scale(1.015);  /* sutil, no agresivo */
}
```

### Reglas
- **`max-width: 650px`** para que nunca se salgan de pantalla en laptop
- Los marcos van en una columna vertical con `gap: 3rem`
- Cada imagen lleva un `.art-caption` con texto en itálica corto y poético (no descriptivo)
- Hover muy sutil: `scale(1.015)` — casi imperceptible pero satisfactorio
