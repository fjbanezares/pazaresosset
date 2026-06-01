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

## ⚡ LÍMITES DE CARACTERES DE SUNO

Suno tiene límites ESTRICTOS que DEBEN respetarse:

| Campo | Límite |
|-------|--------|
| **Style of Music** | **1000 caracteres** máximo |
| **Lyrics** | **5000 caracteres** máximo |

### Estrategia de Distribución
Cuando un prompt dirigido verso-a-verso es muy largo:
1. **Mover la dirección instrumental y de producción al campo Style** (ej: "oud enters mysteriously in philosophical verse, hang drum for meditation, abrupt silence before final verse")
2. **Dejar en Lyrics solo**: etiquetas de sección `[Intro]`, indicaciones vocales compactas `(Voz íntima)`, y la letra con sus separaciones silábicas
3. **SIEMPRE verificar** el recuento de caracteres antes de entregar

---

## 🏆 NIVEL PREMIUM: DIRECCIÓN VERSO A VERSO

Para canciones que aspiren al máximo nivel de calidad (Style 2), utilizar esta técnica avanzada validada en **Atardecer**:

### Principio
Cada verso del poema recibe instrucciones explícitas de:
- **Qué instrumentos suenan** en ese momento específico
- **Cómo debe cantar la voz** (susurro, grito, temblor, sonrisa)
- **Qué vocales se alargan** y durante cuántos tiempos
- **Dónde hay silencios absolutos** (2-4 segundos de NADA)

### Arco Emocional Obligatorio
Toda canción premium DEBE tener estas 5 fases:

1. **INTIMIDAD** → Entrada a capella o con 1 solo instrumento. Voz desnuda.
2. **CONSTRUCCIÓN** → Instrumentos se suman uno a uno. Tensión creciente.
3. **ÉXTASIS** → Drop ibicenco / orquestal. TODOS los instrumentos. Moment "Hands in the Air".
4. **RUPTURA** → Silencio abrupto. Corte total. 3-4 segundos de nada.
5. **VERDAD DESNUDA** → Solo voz (o voz + piano). El verso más importante. Susurrado.

### 🎨 INSTRUMENTACIÓN TEMÁTICA (Regla Crítica)

**Los instrumentos deben ENCARNAR el tema del poema, no solo sonar bonitos.** Esta es la diferencia entre una canción genérica y una obra maestra.

#### Proceso de 2 pasos:
1. **Primero**: ¿De qué habla el poema? → Elige instrumentos que SEAN esa temática
2. **Después**: ¿En qué idioma? → Filtra por la paleta cultural del idioma

#### Ejemplos validados:

| Poema | Tema | Instrumentos temáticos elegidos |
|-------|------|---------------------------------|
| **Latido Verde** | Naturaleza, árboles, protesta ecológica | Taiko (latido tierra), didgeridoo (voz primigenia), kora/mbira (África orgánica), bamboo flute, rain stick, bird samples REALES en el beat |
| **Atardecer** | Amor, espiritualidad, fugacidad | Glass harmonica (pureza efímera), oud (misterio del alma), hang drum (meditación) |
| **Optimismo y Positividad** | Amanecer, luz, esperanza, fuego interior | Glockenspiel/celesta (cristal de la mañana), trumpet fanfares (heroísmo), marimba (calidez solar), gospel choir (celebración colectiva) |

#### Paleta adicional por idioma (para añadir sabor cultural):

| Idioma | Sabor cultural |
|--------|----------------|
| Español | Cajón flamenco, palmas, guitarra española, castañuelas sutiles |
| Inglés | Steel drums, fingerpicked acoustic, church organ, gospel choir |
| Francés | Accordion musette, harpe, saxo soprano, flûte traversière |
| Italiano | Mandolina, fisarmonica, órgano de iglesia, brass section operática |
| Portugués | Berimbau, cavaquinho, flauta de pan |
| Japonés | Koto, shakuhachi, taiko |

#### Regla de oro: NUNCA usar los mismos instrumentos en dos poemas diferentes. Cada poema tiene su ADN sonoro único.

### Anti-Patrones (EVITAR)
- ❌ Verse / Chorus / Verse / Chorus genérico
- ❌ Misma intensidad durante toda la canción
- ❌ Acabar sin contraste — sin el "momento de silencio"
- ❌ Agradecimiento final plano o genérico
- ❌ Incluir "NOT generic NOT strident NOT typical AI" solo en Style, pero luego no dirigir verso a verso en Lyrics (incongruente)

---

## 🎁 CIERRE CON AGRADECIMIENTO (CLIMAX HUMANO) Y SOLO ACÚSTICO

El agradecimiento final a **María Paz Arés Osset** es el **CLÍMAX EMOCIONAL** de cada canción. Debe seguir estas reglas:

1. **Uso Obligatorio del Nombre Completo**: NUNCA abrevies el nombre. Siempre debe decir "María Paz Arés Osset".
2. **Inventivo y único**: Cada agradecimiento debe ser diferente, original, y basarse en el tema central del poema, elevando la figura de la artista.
3. **Inclusión de Cita (50% de las veces)**: En la mitad de los prompts generados, incluye en el agradecimiento una cita directa del poema que lo realce.
4. **Solo Acústico Final**: DESPUÉS del agradecimiento hablado, SIEMPRE añade un bloque para un hermoso y maravilloso solo acústico final de un instrumento que encaje con el poema. Este cierre es detallado y exquisito.
5. **Límites de Texto al Máximo**: Aprovecha la expresividad detallada hasta 1000 caracteres en Style y 5000 en Lyrics.

### Ejemplos de referencia (probados y validados):

**Atardecer (ES):**
```
[Spoken - sobre últimas notas de cello]
Estas palabras nacieron del corazón de María Paz Arés Osset
en mil novecientos noventa y dos.
Su plegaria sigue encendida
como una llama que ningún viento puede apagar.
Gracias, Paz,
por enseñarnos que en la brevedad está la grandeza.
(Susurro final) Que quien sueña con amar... sea amada.
```

**Sunset (EN):**
```
[Spoken - warm voice over dissolving cello]
She didn't ask for the moon.
She asked for something far greater:
that those who dream of love would not dream in vain.
(Whisper, voice breaking) Let her... be loved.
```

**Crépuscule (FR):**
```
[Spoken - sur dernières notes]
Sa supplique voyage dans le vent,
traverse les océans, parle toutes les langues,
parce que l'amour n'a pas besoin de traduction.
(Murmure) Merci, Paz...
Que celle qui rêve d'aimer... soit aimée.
```

---

## 🎨 VARIACIÓN VISUAL DE ESTROFAS EN EL PORTAL WEB

Técnica validada en **Latido Verde**: Aplicar estilos CSS diferentes a cada estrofa del poema web para reflejar su tono emocional. Esto da una profundidad visual única — el lector no solo lee sino que *siente* el cambio de emoción a través de colores y bordes sutiles.

### Clases CSS por Tipo de Estrofa

| Clase CSS | Uso | Estilo Visual |
|-----------|-----|---------------|
| `.embrace-stanza` | Versos de abrazo, unión con la naturaleza | `border-left` verde suave, fondo verde tenue |
| `.call-stanza` | Llamadas a la acción, convocatorias | `border` dorado completo, itálica, fondo cálido |
| `.protest-stanza` | Denuncia, protesta poética | `border-left` naranja, fondo naranja tenue |
| `.salvation-stanza` | Resolución, esperanza, salvación | Tipografía `Caveat` más grande, color claro |
| `.coda-stanza` | Epílogos personales, notas del poeta | `border` completo verde-teal, itálica, fondo turquesa tenue |
| `.prayer-stanza` | Momentos espirituales, oración | Itálica, borde dorado, fondo dorado tenue |
| `.aggression-stanza` | Tensión, conflicto | Borde rojo, fondo rojo tenue |
| `.realization-stanza` | Revelaciones, verdades finales | Tipografía `Caveat` grande, color blanco puro |

### Regla Importante
- **No abusar**: No todas las estrofas necesitan un estilo especial. Dejar algunas sin clase para crear contraste.
- **Coherencia**: Los colores deben armonizar con la paleta general del poema (verde para naturaleza, azul para misticismo, etc.).
- **Sutileza**: Los efectos deben ser suaves — fondos con opacidad 0.03-0.05, bordes con opacidad 0.2-0.3. El poema es el protagonista, no la decoración.

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
poetry/{nombre_poema}/
├── songs/
│   ├── prompt_es_style1.md   # Español - Estilo base
│   ├── prompt_es_style2.md   # Español - Estilo premium verso-a-verso
│   ├── prompt_en_style1.md   # Inglés - Estilo base
│   ├── prompt_en_style2.md   # Inglés - Estilo premium verso-a-verso
│   ├── prompt_fr_style1.md   # Francés (u otro idioma elegido) - Base
│   ├── prompt_fr_style2.md   # Francés - Premium verso-a-verso
│   ├── album_es.png          # Portada generada
│   ├── album_en.png
│   └── album_fr.png
```

## Regla de Oro
La filosofía es **no reinventar la rueda**. Genera los resultados directamente en archivos `.md` dentro de la carpeta `songs/` del poema. Que sean fáciles de copiar y pegar en Suno. Incluye el poema COMPLETO en los lyrics — no resumas ni cortes estrofas. **Verifica SIEMPRE** que Style ≤ 1000 chars y Lyrics ≤ 5000 chars antes de entregar.

