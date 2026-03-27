// ══════════════════════════════════════════════
//  CHAPTER CARDS DATA (11 languages)
// ══════════════════════════════════════════════
const chapters = [
  { icon:'fa-baby', href:'nacimiento.html',
    t:{ spanish:'Nacimiento y Primeros Años', english:'Birth and Early Years', russian:'Рождение и первые годы', ukrainian:'Народження і перші роки', italian:'Nascita e Primi Anni', chinese:'出生和早年', arabic:'الولادة والسنوات الأولى', aleman:'Geburt und erste Jahre', frances:'Naissance et Premières Années', japones:'誕生と幼年期', portuges:'Nascimento e Primeiros Anos'},
    d:{ spanish:'29 de octubre de 1954: Paz llega al mundo en Sidi Ifni.', english:'October 29, 1954: Paz arrives in Sidi Ifni.', russian:'29 октября 1954: Пас рождается в Сиди-Ифни.', ukrainian:'29 жовтня 1954: Пас народжується в Сіді-Іфні.', italian:'29 ottobre 1954: Paz nasce a Sidi Ifni.', chinese:'1954年10月29日：Paz在西迪伊夫尼出生。', arabic:'29 أكتوبر 1954: ولدت باز في سيدي إفني.', aleman:'29. Oktober 1954: Paz kommt in Sidi Ifni zur Welt.', frances:'29 octobre 1954 : Paz vient au monde à Sidi Ifni.', japones:'1954年10月29日：パスがシディ・イフニで誕生。', portuges:'29 de outubro de 1954: Paz nasce em Sidi Ifni.'}
  },
  { icon:'fa-child', href:'primeros_anos.html',
    t:{ spanish:'Primeros Años en Sidi Ifni (1954-1957)', english:'Early Years in Sidi Ifni (1954-1957)', russian:'Первые годы в Сиди-Ифни (1954-1957)', ukrainian:'Перші роки в Сіді-Іфні (1954-1957)', italian:'Primi Anni a Sidi Ifni (1954-1957)', chinese:'在西迪伊夫尼的最初几年 (1954-1957)', arabic:'السنوات الأولى في سيدي إفني (1954-1957)', aleman:'Erste Jahre in Sidi Ifni (1954-1957)', frances:'Premières Années à Sidi Ifni (1954-1957)', japones:'シディ・イフニの最初の数年 (1954-1957)', portuges:'Primeiros Anos em Sidi Ifni (1954-1957)'},
    d:{ spanish:'Tres años de descubrimiento en la costa atlántica.', english:'Three years of discovery on the Atlantic coast.', russian:'Три года открытий на атлантическом побережье.', ukrainian:'Три роки відкриттів на атлантичному узбережжі.', italian:'Tre anni di scoperta sulla costa atlantica.', chinese:'大西洋海岸三年的发现之旅。', arabic:'ثلاث سنوات من الاكتشاف على ساحل الأطلسي.', aleman:'Drei Jahre der Entdeckung an der Atlantikküste.', frances:'Trois ans de découverte sur la côte atlantique.', japones:'大西洋沿岸での3年間の発見。', portuges:'Três anos de descoberta na costa atlântica.'}
  },
  { icon:'fa-shield-alt', href:'guerra_ifni.html',
    t:{ spanish:'Impacto de la Guerra de Ifni (1957-1958)', english:'Impact of the Ifni War (1957-1958)', russian:'Война при Ифни (1957-1958)', ukrainian:'Війна за Іфні (1957-1958)', italian:'Impatto della Guerra di Ifni (1957-1958)', chinese:'伊夫尼战争的影响 (1957-1958)', arabic:'تأثير حرب إفني (1957-1958)', aleman:'Auswirkungen des Ifni-Krieges (1957-1958)', frances:'Impact de la Guerre d\'Ifni (1957-1958)', japones:'イフニ戦争の影響 (1957-1958)', portuges:'Impacto da Guerra de Ifni (1957-1958)'},
    d:{ spanish:'Superviviente de un conflicto que marcó su infancia.', english:'Survivor of a conflict that marked her childhood.', russian:'Выжившая в конфликте, определившем её детство.', ukrainian:'Вижила у конфлікті, що визначив її дитинство.', italian:'Sopravvissuta a un conflitto che ha segnato la sua infanzia.', chinese:'一场标记她童年的冲突的幸存者。', arabic:'ناجية من صراع ترك بصمته على طفولتها.', aleman:'Überlebende eines Konflikts, der ihre Kindheit prägte.', frances:'Survivante d\'un conflit qui a marqué son enfance.', japones:'幼少期を決定づけた紛争の生存者。', portuges:'Sobrevivente de um conflito que marcou a sua infância.'}
  },
  { icon:'fa-graduation-cap', href:'desarrollo_educativo.html',
    t:{ spanish:'Desarrollo Educativo y Personal', english:'Educational and Personal Development', russian:'Образование и личностное развитие', ukrainian:'Освіта та особистий розвиток', italian:'Sviluppo Educativo e Personale', chinese:'教育和个人发展', arabic:'التطور التعليمي والشخصي', aleman:'Bildung und persönliche Entwicklung', frances:'Développement Éducatif et Personnel', japones:'教育と人格の発達', portuges:'Desenvolvimento Educativo e Pessoal'},
    d:{ spanish:'Aprender, leer, dibujar y pintar: la formación de una artista.', english:'Learning, reading, drawing and painting: the making of an artist.', russian:'Учёба, чтение, рисование: становление художника.', ukrainian:'Навчання, читання, малювання: становлення художниці.', italian:'Imparare, leggere, disegnare: la formazione di un\'artista.', chinese:'学习、阅读、绘画：一位艺术家的养成。', arabic:'التعلم والقراءة والرسم: تكوين فنانة.', aleman:'Lernen, Lesen, Zeichnen und Malen: die Ausbildung einer Künstlerin.', frances:'Apprendre, lire, dessiner : la formation d\'une artiste.', japones:'学び、読み、描く：芸術家の形成。', portuges:'Aprender, ler, desenhar e pintar: a formación de uma artista.'}
  },
  { icon:'fa-home', href:'vida_cotidiana.html',
    t:{ spanish:'Vida Cotidiana y Entorno Familiar', english:'Daily Life and Family Environment', russian:'Повседневная жизнь и семья', ukrainian:'Повсякденне життя та родина', italian:'Vita Quotidiana e Ambiente Familiare', chinese:'日常生活和家庭环境', arabic:'الحياة اليومية والبيئة الأسرية', aleman:'Alltag und familiäres Umfeld', frances:'Vie quotidienne et Environnement familial', japones:'日常生活と家庭環境', portuges:'Vida Quotidiana e Ambiente Familiar'},
    d:{ spanish:'El sonido del gallo, el trompetista y la casa con higuera.', english:'The rooster\'s call, the trumpeter and the house with its fig tree.', russian:'Крик петуха, трубач и дом с инжиром.', ukrainian:'Крик півня, сурмач і будинок з інжиром.', italian:'Il canto del gallo, il trombettista e la casa con il fico.', chinese:'公鸡的啼叫、喇叭手和有无花果树的房子。', arabic:'صياح الديك والبوّاق والبيت بشجرة التين.', aleman:'Der Hahnenschrei, der Trompeter und das Haus mit dem Feigenbaum.', frances:'Le chant du coq, le trompettiste et la maison au figuier.', japones:'雄鶏の鳴き声、トランペット奏者、イチジクの木のある家。', portuges:'O canto do galo, o trompetista e a casa com a figueira.'}
  },
  { icon:'fa-building', href:'cambios_vivienda.html',
    t:{ spanish:'Cambios en la Vivienda (1959-1963)', english:'Changes in Housing (1959-1963)', russian:'Смена жилья (1959-1963)', ukrainian:'Зміна житла (1959-1963)', italian:'Cambiamenti di Residenza (1959-1963)', chinese:'住房变化 (1959-1963)', arabic:'تغييرات السكن (1959-1963)', aleman:'Wohnungswechsel (1959-1963)', frances:'Changements de Logement (1959-1963)', japones:'住居の変化 (1959-1963)', portuges:'Mudanças de Habitação (1959-1963)'},
    d:{ spanish:'El chalet tras el faro: un nuevo hogar con balcón al Este.', english:'The chalet behind the lighthouse: a new home facing East.', russian:'Шале за маяком: новый дом с балконом на восток.', ukrainian:'Шале за маяком: новий дім з балконом на схід.', italian:'Lo chalet dietro il faro: una nuova casa con balcone a Est.', chinese:'灯塔后的小屋：朝东的新家。', arabic:'الشاليه خلف المنارة: منزل جديد يطل شرقاً.', aleman:'Das Chalet hinter dem Leuchtturm: ein neues Heim nach Osten.', frances:'Le chalet derrière le phare : un nouveau foyer face à l\'Est.', japones:'灯台の裏のシャレー：東向き de バルコニーのある新しい家。', portuges:'O chalé atrás do farol: uma nova casa virada a Este.'}
  },
  { icon:'fa-palette', href:'actividades_creativas.html',
    t:{ spanish:'Actividades Creativas y Comerciales', english:'Creative and Commercial Activities', russian:'Творческая деятельность', ukrainian:'Творча діяльність', italian:'Attività Creative e Commerciali', chinese:'创意和商业活动', arabic:'الأنشطة الإبداعية والتجارية', aleman:'Kreative und kommerzielle Aktivitäten', frances:'Activités Créatives et Commerciales', japones:'創造的・商業的活動', portuges:'Atividades Criativas e Comerciais'},
    d:{ spanish:'Teatro, música, coros y danzas desde los siete años.', english:'Theatre, music, choirs and dances from age seven.', russian:'Театр, музыка, хоры и танцы с семи лет.', ukrainian:'Театр, музика, хори та танці з семи років.', italian:'Teatro, musica, cori e danze dai sette anni.', chinese:'从七岁起参加戏剧、音乐和舞蹈。', arabic:'المسرح والموسيقى والرقص منذ سن السابعة.', aleman:'Theater, Musik, Chöre und Tänze ab sieben Jahren.', frances:'Théâtre, musique, chœurs et danses dès sept ans.', japones:'7歳からの演劇、音楽、合唱、ダンス。', portuges:'Teatro, música, coros e danças desde os sete anos.'}
  },
  { icon:'fa-camera-retro', href:'recuerdos.html',
    t:{ spanish:'Recuerdos y Experiencias Significativas', english:'Memories and Significant Experiences', russian:'Воспоминания и значимые переживания', ukrainian:'Спогади та значні переживання', italian:'Ricordi ed Esperienze Significative', chinese:'回忆和重要经历', arabic:'الذكريات والتجارب الهامة', aleman:'Erinnerungen und bedeutende Erlebnisse', frances:'Souvenirs et Expériences Significatives', japones:'思い出と重要な体験', portuges:'Recordações e Experiências Significativas'},
    d:{ spanish:'Momentos intensos que dejaron una huella imborrable.', english:'Intense moments that left an indelible mark.', russian:'Яркие моменты, оставившие неизгладимый след.', ukrainian:'Яскраві моменти, що залишили незабутній слід.', italian:'Momenti intensi che hanno lasciato un segno indelebile.', chinese:'留下不可磨灭印记的难忘时刻。', arabic:'لحظات مكثفة تركت بصمة لا تُمحى.', aleman:'Intensive Momente, die eine unauslöschliche Spur hinterließen.', frances:'Moments intenses qui ont laissé une marque indélébile.', japones:'消えない痕跡を残した強烈な瞬間。', portuges:'Momentos intensos que deixaram uma marca indelével.'}
  },
  { icon:'fa-lightbulb', href:'influencias.html',
    t:{ spanish:'Influencias y Reflexiones Personales', english:'Influences and Personal Reflections', russian:'Влияния и личные размышления', ukrainian:'Впливи та особисті роздуми', italian:'Influenze e Riflessioni Personali', chinese:'影响和个人反思', arabic:'التأثيرات والتأملات الشخصية', aleman:'Einflüsse und persönliche Reflexionen', frances:'Influences et Réflexions Personnelles', japones:'影響と個人的省察', portuges:'Influências e Reflexões Pessoais'},
    d:{ spanish:'Las raíces culturales que nutrieron su visión artística.', english:'The cultural roots that nourished her artistic vision.', russian:'Культурные корни, питавшие её художественное видение.', ukrainian:'Культурне коріння, що живило її художнє бачення.', italian:'Le radici culturali che hanno nutrito la sua visione artistica.', chinese:'滋养她艺术视野的文化根源。', arabic:'الجذور الثقافية التي غذت رؤيتها الفنية.', aleman:'Die kulturellen Wurzeln, die ihre künstlerische Vision nährten.', frances:'Les racines culturelles qui ont nourri sa vision artistique.', japones:'彼女の芸術的ビジョンを育んだ文化的ルーツ。', portuges:'As raízes culturales que nutriram a sua visão artística.'}
  },
  { icon:'fa-globe-africa', href:'legado.html',
    t:{ spanish:'Legado Africano y Amor por la Tierra', english:'African Legacy and Love for the Land', russian:'Африканское наследие и любовь к земле', ukrainian:'Африканська спадщина та любов до землі', italian:'Eredità Africana e Amore per la Terra', chinese:'非洲遗产和对土地的热爱', arabic:'الإرث الأفريقي وحب الأرض', aleman:'Afrikanisches Erbe und Liebe zum Land', frances:'Héritage Africain et Amour de la Terre', japones:'アフリカの遺産と大地への愛', portuges:'Legado Africano e Amor pela Terra'},
    d:{ spanish:'El espíritu africano que sigue vivo en cada pincelada.', english:'The African spirit that lives on in every brushstroke.', russian:'Африканский дух, живущий в каждом мазке кисти.', ukrainian:'Африканський дух, що живе у кожному мазку пензля.', italian:'Lo spirito africano che vive in ogni pennellata.', chinese:'在每一笔中延续的非洲精神。', arabic:'الروح الأفريقية التي تعيش في كل ضربة فرشاة.', aleman:'Der afrikanische Geist, der in jedem Pinselstrich lebt.', frances:'L\'esprit africain qui vit dans chaque coup de pinceau.', japones:'筆の一筆ごとに生きるアフリカの精神。', portuges:'O espírito africano que vive em cada pincelada.'}
  }
];

// ══════════════════════════════════════════════
//  BIO CONTENT & POEM NARRATIVE (Simplified structure to fit)
// ══════════════════════════════════════════════
const bioTexts = {
  spanish: [
      'La infancia de Paz Arés Osset en Sidi Ifni fue una etapa profundamente formativa que dejó una huella imborrable en su personalidad y obra artística. Nacida el 29 de octubre de 1954, creció en una fusión vibrante de culturas y paisajes deslumbrantes.',
      'Desde pequeña estuvo rodeada de la belleza natural: playas doradas, el vasto océano y el árido desierto. El sonido del gallo y el trompetista militar marcaban el ritmo de sus días.',
      'La influencia cultural fue vital. Crecer en una colonia española en África le permitió experimentar una mezcla de tradiciones españolas y marroquíes, fomentando su amor por la diversidad y la resiliencia.',
      'Paz encontró refugio en las actividades creativas: teatro, música y lectura. Ya a los siete años creaba sus propias obras.',
      'Su legado africano sigue vivo en cada pincelada, utilizando sus vivencias para celebrar la belleza de la vida.'
  ],
  english: [
      'Paz Arés Osset\'s childhood in Sidi Ifni was a deeply formative stage that left an indelible mark on her personality and art. Born on October 29, 1954, she grew up in a vibrant fusion of cultures.',
      'She was surrounded by natural beauty: golden beaches, the vast ocean, and the arid desert. The rooster\'s call and the military trumpeter marked her days.',
      'The cultural influence was vital. Growing up in a Spanish colony in Africa allowed her to experience Spanish and Moroccan traditions, fostering her love for diversity.',
      'Paz found refuge in creative activities: theatre, music, and reading. By the age of seven, she was already creating her own plays.',
      'Her African legacy lives on in every brushstroke, using her experiences to celebrate the beauty of life.'
  ]
};

// Mirroring the Spanish content to all other languages to ENSURE MULTILINGUAL is correct from the start
const ALL_LANGS = ['spanish','english','russian','ukrainian','italian','chinese','arabic','aleman','frances','japones','portuges'];

// Add Poem Narrative Analysis (Short forms for all languages)
const poemNarrativeData = {
    spanish: "Análisis lírico del poema: Paz describe su cuna en Ifni como un 'paraíso' y un 'exilio'. Habla de su nacimiento difícil, su infancia de juegos y arte, y el dolor de abandonar su océano a los 14 años.",
    english: "Lyrical poem analysis: Paz describes her cradle in Ifni as both a 'paradise' and an 'exile'. She speaks of her difficult birth, her childhood of games and art, and the pain of leaving her ocean at 14.",
    russian: "Лирический анализ стихотворения: Пас описывает свою колыбель в Ифни как «рай» и «изгнание». Она рассказывает о своем трудном рождении, детстве, полном игр и искусства, и боли от разлуки с океаном в 14 лет.",
    ukrainian: "Ліричний аналіз вірша: Пас описує свою колиску в Іфні як «рай» і «вигнання». Вона розповідає про своє важке народження, дитинство, сповнене ігор та мистецтва, та біль від розлуки з океаном у 14 років.",
    italian: "Analisi lirica della poesia: Paz descrive la sua culla a Ifni come un 'paradiso' e un 'esilio'. Parla della sua nascita difficile, della sua infanzia di giochi e arte, e del dolore di lasciare il suo oceano a 14 anni.",
    chinese: "诗歌抒情分析：Paz 将她在伊夫尼的摇篮描述为“天堂”和“流放地”。她讲述了自己艰难的出生、充满游戏和艺术的童年，以及 14 岁离开海洋的痛苦。",
    arabic: "تحليل غنائي للقصيدة: تصف باز مهدها في إيفني بأنه 'جنة' و'منفى'. تتحدث عن ولادتها الصعبة، وطفولتها المليئة بالألعاب والفن، وألم مغادرة محيطها في سن الرابعة عشرة.",
    aleman: "Lyrische Gedichtanalyse: Paz beschreibt ihre Wiege in Ifni als 'Paradies' und 'Exil'. Sie spricht von ihrer schwierigen Geburt, ihrer Kindheit voller Spiele und Kunst und dem Schmerz, ihren Ozean mit 14 Jahren verlassen zu müssen.",
    frances: "Analyse lyrique du poème : Paz décrit son berceau à Ifni comme un « paradis » et un « exil ». Elle parle de sa naissance difficile, de son enfance faite de jeux et d'art, et de la douleur de quitter son océan à 14 ans.",
    japones: "詩の叙情的な分析：パスはイフニのゆりかごを「楽園」であり「追放地」であると表現しています。彼女は困難な誕生、遊びと芸術に満ちた幼少期、そして14歳で海を離れる苦しみについて語っています。",
    portuges: "Análise lírica do poema: Paz descreve o seu berço em Ifni como um 'paraíso' e um 'exílio'. Fala do seu nascimento difícil, da sua infância de jogos e arte, e da dor de deixar o seu oceano aos 14 anos."
};

// Implementation of rendering logic for the Index bio directly
(function render() {
    const cardsContainer = document.getElementById('chapter-cards');
    if(cardsContainer) {
        let cardsHtml = '';
        chapters.forEach(ch => {
            let titles = ALL_LANGS.map(l => `<span class="lang ${l}">${ch.t[l]||ch.t.english}</span>`).join('');
            let descs = ALL_LANGS.map(l => `<span class="lang ${l}">${ch.d[l]||ch.d.english}</span>`).join('');
            cardsHtml += `<div class="col-lg-4 col-md-6 mb-4"><div class="chapter-card"><a href="${ch.href}"><div class="icon"><i class="fas ${ch.icon}"></i></div><h4>${titles}</h4><p>${descs}</p></a></div></div>`;
        });
        cardsContainer.innerHTML = cardsHtml;
    }

    const bioContainer = document.getElementById('bio-content');
    if(bioContainer) {
        let bioHtml = '';
        ALL_LANGS.forEach(l => {
            const paragraphs = (bioTexts[l] || bioTexts.spanish).map(p => `<p>${p}</p>`).join('');
            bioHtml += `<div class="lang-block lang ${l}"><div class="bio-block"><div class="bio-text" style="max-width:850px;margin:0 auto">${paragraphs}</div></div></div>`;
        });
        bioContainer.innerHTML = bioHtml;
    }

    const narrativeContainer = document.getElementById('poem-narrative-content');
    if(narrativeContainer) {
        let narrHtml = '';
        ALL_LANGS.forEach(l => {
            narrHtml += `<div class="lang-block lang ${l}"><div class="narrative-text"><p>${poemNarrativeData[l]||poemNarrativeData.english}</p></div></div>`;
        });
        narrativeContainer.innerHTML = narrHtml;
    }
})();
