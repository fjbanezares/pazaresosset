---
name: suno_prompts
description: Generar prompts musicales para la herramienta Suno AI adaptados a poemas.
---

# Generación de Prompts para Suno AI

Esta skill debe usarse cada vez que THE USER pida crear canciones o "prompts para Suno" a partir de sus poemas.

## Contexto
El objetivo es transformar los poemas multilingües de Paz Arés Osset en instrucciones efectivas (prompts) que puedan pegarse directamente en la interfaz de **Suno AI** para obtener canciones acordes al sentimiento del poema.

## Instrucciones Paso a Paso
1. **Analizar el Poema:** Lee el poema proporcionado (o búscalo en el código fuente de la web) para entender su tono, métrica y mensaje central.
2. **Seleccionar Idiomas:** Además de español e inglés (que suelen ser básicos), elige 1 o 2 idiomas adicionales que encajen muy bien con el poema de forma estilística (ej. Francés rústico para baladas, Portugués para ritmos cálidos o "bossa nova", Japonés para lo-fi o ambiente delicado).
3. **Estructurar el Prompt:** Suno utiliza "Style of Music" (Estilos) y el "Lyrics" (Letra). Debes crear una tarjeta o bloque por cada idioma que contenga:
   - `[Style of Music / Genero]`: 3 o 4 palabras clave musicales (ej. "acoustic indie folk", "upbeat pop synth", "melancholic bossa nova"). **Es fundamental usar términos musicales en INGLÉS para esta sección** ya que Suno los entiende mejor, independientemente del idioma de la letra.
   - `[Lyrics / Letras]`: Pega la letra del poema en el idioma correspondiente.
   - **Metadatos Musicales Recomendados (opcional)**: Suno acepta etiquetas en las letras. Puedes añadir etiquetas como `[Verse]`, `[Chorus]`, y `[Outro]` incrustadas en el bloque de las letras para indicarle a la IA la estructura de la canción.

## Regla de Oro
La filosofía es **no reinventar la rueda**. Genera los resultados directamente en tu respuesta o en un artefacto visual limpio usando tablas o bloques de código que faciliten copiar y pegar al usuario.
