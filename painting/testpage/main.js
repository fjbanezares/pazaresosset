var translations = {
    "artwork-description": {
        "es": 'Presentamos una obra maestra de arte contemporáneo: "Paz en el Fuego", creada por la renombrada artista Paz Arés Osset. Con sus raíces en el expresionismo abstracto, este cuadro es un testimonio conmovedor del triunfo de la paz y el amor a través de los tiempos tumultuosos, y del persistente anhelo de la artista de cultivar y preservar su serenidad interna. /n' +
            'La pintura, un fuego visual de 50 x 65 cm, está impregnada de tonos rojos y amarillos, colores que evocan la intensidad y la energía del fuego, la fuerza ardiente de la lucha y la pasión, así como la necesidad de cambio y transformación.Esta algarabía de colores contrasta maravillosamente con el núcleo de la obra, donde encontramos la palabra "Paz" inscrita en tonos celestiales de azul. /n' +
            'El espectador es guiado hacia el centro, donde el corazón de la obra – y quizás también el corazón de la artista – reside.Aquí, la "a" del nombre de la artista se transforma en un corazón azul sereno, un baluarte de amor y serenidad en medio de la conflagración.El corazón azul es una metáfora visual de la paz interna de la artista, su refugio y su escudo contra las pruebas de la vida.' +
            'Esta yuxtaposición de colores es también un reflejo del nombre de la artista, Paz Arés Osset, un nombre que vincula la diosa de la paz con el dios de la guerra, en un vívido contraste que es explorado y reconciliado en esta poderosa obra de arte.' +
            '"Paz en el Fuego" es un recordatorio visual y emocional de la importancia de mantener la paz en tiempos de caos.Como tal, es una obra que resuena con aquellos que están familiarizados con los altibajos de la vida y que buscan, como la artista, la paz y la tranquilidad a pesar de las dificultades.' +
            'En última instancia, "Paz en el Fuego" es una celebración del espíritu humano, de nuestra capacidad para mantener la calma y la serenidad en medio del fuego de los desafíos.Es un homenaje a la resistencia, a la capacidad de transformar los momentos de lucha en momentos de amor, y a la convicción de que, incluso en las circunstancias más desafiantes, podemos encontrar y mantener la paz.' +




            'En un mundo a menudo lleno de conflictos y tensiones, "Paz en el Fuego" es un llamado poderoso a la armonía y la unidad.En su deseo de ver un mundo sin guerras, Paz Arés Osset trae un mensaje de esperanza y amor, encapsulado en la vibrante paleta de su obra.La pintura es un espejo de nuestras sociedades, un lienzo en el que se reflejan nuestras esperanzas más profundas, nuestros miedos más oscuros y nuestro constante anhelo de paz.' +






            'Esta obra no es solo un objeto de belleza, sino también un símbolo de resistencia y un manifiesto pacifista.En el contraste de los tonos azules y los fuegos rojos y amarillos, vemos un deseo de equilibrio, de una coexistencia pacífica entre fuerzas opuestas.En la figura central de la paz y el amor, encontramos un símbolo de resistencia al conflicto y a la división.' +
            '"Paz en el Fuego" es más que una simple obra de arte, es un mensaje universal que trasciende las barreras del lenguaje y la cultura.Su mensaje es sencillo pero poderoso: aunque las guerras puedan parecer inevitables, la paz y el amor siempre tienen el poder de prevalecer.Este es un mensaje que todos necesitamos escuchar en estos tiempos de incertidumbre.' +
            'A través de su arte, Paz Arés Osset nos insta a buscar la paz en nuestras propias vidas, a enfrentar nuestros propios conflictos internos y a construir un mundo donde el amor y la paz sean la norma y no la excepción.En última instancia, su obra es un recordatorio de que cada uno de nosotros tiene el poder de hacer un cambio, y de que a través de nuestro amor y compasión podemos ayudar a crear un mundo más pacífico.'
        ,
        "en": "Artwork Description"
    },
    "explanation-text": {
        "es": "Texto explicativo",
        "en": "Explanation Text"
    }
};

document.querySelector("#language-select").addEventListener("change", function () {
    var selectedLanguage = this.value;

    Object.keys(translations).forEach(function (key) {
        var element = document.querySelector("#" + key);
        if (element) {
            element.textContent = translations[key][selectedLanguage];
        }
    });
});

// guardar todo el texto de la explicación
var fullText = document.querySelector("#explanation-text").textContent;

// Mostrar solo las primeras tres líneas por defecto
document.querySelector("#explanation-text").textContent = fullText.split("\n").slice(0, 3).join("\n");

document.querySelector("#explanation-button").addEventListener("click", function () {
    var explanationText = document.querySelector("#explanation-text");

    if (explanationText.textContent === fullText) {
        // Si todo el texto ya se muestra, volver a mostrar solo las primeras tres líneas
        explanationText.textContent = fullText.split("\n").slice(0, 3).join("\n");
        this.textContent = "Ver más";
    } else {
        // Si no, mostrar todo el texto
        explanationText.textContent = fullText;
        this.textContent = "Ver menos";
    }
});
