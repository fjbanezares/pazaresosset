---
name: suno_prompts
description: Generar prompts musicales para la herramienta Suno AI adaptados a poemas.
---

# Generación de Prompts para Suno AI

Esta skill debe usarse cada vez que THE USER pida crear canciones o "prompts para Suno" a partir de sus poemas.

## Contexto
El objetivo es transformar los poemas multilingües de Paz Arés Osset en instrucciones efectivas (prompts) que puedan pegarse directamente en la interfaz de **Suno AI** para obtener canciones acordes al sentimiento del poema.

## Instrucciones Paso a Paso

### 1. Analizar el Poema
Lee el poema proporcionado (o búscalo en el código fuente de la web) para entender su tono, métrica y mensaje central.

### 2. Seleccionar Idiomas
Además de español e inglés (que suelen ser básicos), elige 1 o 2 idiomas adicionales que encajen muy bien con el poema de forma estilística (ej. Francés rústico para baladas, Portugués para ritmos cálidos o "bossa nova", Japonés para lo-fi o ambiente delicado, Italiano para drama operístico).

### 3. Estructurar el Prompt
Suno utiliza "Style of Music" (Estilos) y "Lyrics" (Letra). Crea un archivo `.md` por cada idioma/estilo que contenga:

- **`Style of Music`**: Descripción en INGLÉS del estilo musical (Suno los entiende mejor en inglés). Debe ser una frase larga y descriptiva, no solo 3-4 palabras.
- **`Lyrics`**: La letra del poema con directivas de producción.

### 4. Formato de Salida
Guardar cada prompt como `prompt_{lang}_style{N}.md` dentro de la carpeta `songs/` del poema correspondiente.

---

## ⚠️ REGLAS CRÍTICAS DE PRONUNCIACIÓN Y VOCALIZACIÓN

Estas reglas se han aprendido a base de pruebas con Suno y son FUNDAMENTALES para obtener buenos resultados:

### Números como Palabras
Suno pronuncia MAL los números grandes escritos en cifras. **SIEMPRE** escribirlos como palabras:

| ❌ MAL | ✅ BIEN |
|--------|---------|
| `2015` | `dos mil quince` (ES) |
| `2015` | `two thousand and fifteen` (EN) |
| `2015` | `duemilaquindici` (IT) |
| `14` | `catorce` / `fourteenth` / `quattordici` |

### Separación de Sílabas para Énfasis
Usar guiones entre sílabas **en los momentos clave** del poema fuerza a Suno a vocalizar con claridad extrema. NO abusar — usarlo solo para las frases más impactantes:

```
✅ Uso correcto (momento dramático):
pe-tri-fi-ca-da... y mu-da...
des-a-mor
te per-do-na-ba

❌ Uso incorrecto (exceso, pierde impacto):
un-re-cuer-do-re-cu-rren-te (NO separar TODO)
```

**Criterio:** Separar sílabas solo en:
- La frase/palabra más emotiva de cada estrofa
- Palabras que Suno tiende a pronunciar mal
- Momentos de catarsis o clímax musical

### Directivas de Producción en Lyrics
Incluir acotaciones entre paréntesis `()` para dirigir la interpretación vocal:

```
(Voz cálida, íntima, perfecta pronunciación, DOMINANTE en el mix)
(Vocalización separando sílabas, SUSURRO claro)
(Voz POTENTE, gritando con belleza sobre el drop)
(Voz etérea, como una oración)
(Voz DESNUDA, la verdad más importante)
```

### Secciones Estructurales
Usar etiquetas de Suno para estructura:

```
[Intro - 8 bars]
[Verse 1 - Intimate, vocals FRONT and center]
[Pre-Chorus - Piano arpeggio, cello swells]
[Chorus - EUPHORIC BUILDUP then DROP]
[Break - 4 bars djembe solo]
[Bridge - Mystical, spiritual]
[Build - Synth ascending, tension maximum]
[Breakdown - Solo voz y piano, catarsis]
[Outro - Piano fading, silence]
[Spoken - Voz suave sobre última nota]
```

---

## 🎵 REGLAS DE ESTILO MUSICAL

### Voces SIEMPRE al Frente
En el campo "Style of Music", SIEMPRE incluir frases como:
```
beautiful clear female vocals ALWAYS IN FRONT AND DOMINANT
crystal clear [language] pronunciation
vocal-driven
```

### Percusión Natural (si se usa)
Si THE USER quiere percusión orgánica/afro, especificar:
```
subtle live djembe underneath at low volume
acoustic shakers
```
**NUNCA** dejar que la percusión suene como "banda africana" ni "chumba chumba". La percusión es textura de fondo, no protagonista.

### Momentos "Hands in the Air"
Son buildups emocionales que explotan en drops euforicos. Indicarlos así:
```
[Drop 1 - Synth explodes, djembe accent, HANDS IN THE AIR]
euphoric hands-in-the-air synth lifts
```

### Instrumentación Elegante
Combinaciones probadas que funcionan bien:
- **Piano + Cello + Synth pads** → Base emocional
- **Arpegiadores analógicos** → Movimiento y energía
- **Djembé discreto + shakers** → Textura orgánica sin agresividad
- **No kicks agresivos** → Especificar `no aggressive kicks` o `no aggressive beats`

---

## 🎁 CIERRE CON AGRADECIMIENTO

Cada canción debe cerrar con una sección `[Spoken]` o `[Final]` que incluya:
1. Un **agradecimiento a María Paz Arés Osset**
2. Una **conexión temática** con el contenido del poema (ej: "por transformar el dolor en danza y perdón")
3. Una **cita de un pensador** relevante (San Agustín es recurrente)

Ejemplo:
```
[Spoken - Voz suave sobre última nota de piano]
Gracias, María Paz Arés Osset,
por transformar el dolor en danza y perdón.
Como decía San Agustín:
"La medida del amor es amar sin medida."
```

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
poetry/{nombre_poema}/
├── songs/
│   ├── prompt_es_style1.md   # Español - Estilo 1
│   ├── prompt_es_style2.md   # Español - Estilo 2
│   ├── prompt_en_style1.md   # Inglés - Estilo 1
│   ├── prompt_en_style2.md   # Inglés - Estilo 2
│   ├── prompt_it_style1.md   # Italiano (u otro idioma elegido)
│   ├── album_es.png          # Portada generada
│   ├── album_en.png
│   └── album_it.png
```

## Regla de Oro
La filosofía es **no reinventar la rueda**. Genera los resultados directamente en archivos `.md` dentro de la carpeta `songs/` del poema. Que sean fáciles de copiar y pegar en Suno. Incluye el poema COMPLETO en los lyrics — no resumas ni cortes estrofas.
