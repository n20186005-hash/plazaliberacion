import type { Topic } from './topic-types';

/** C. Plaza, historia y cultura (13–18, P1). */
export const TOPICS_HISTORY: Topic[] = [
  {
    num: 13,
    slug: 'plaza-tres-poderes',
    group: 'history',
    priority: 'P1',
    cardTitle: 'Plaza de los Tres Poderes',
    cardText: 'Origen del nombre, su relación con los edificios de gobierno y su valor como referencia local.',
    title: 'Por qué se llama Plaza de los Tres Poderes | Guadalajara',
    description: 'Origen del nombre Plaza de los Tres Poderes, su relación con los edificios de gobierno del centro de Guadalajara y su uso como denominación local.',
    h1: 'Por qué se llama Plaza de los Tres Poderes',
    lead: 'Es otro de los nombres que las fuentes municipales atribuyen al mismo espacio: una denominación que describe su entorno, no un lugar distinto.',
    keywords: 'Plaza de los Tres Poderes, nombre Plaza de la Liberación, poderes de Jalisco, Guadalajara',
    sections: [
      {
        heading: 'Un nombre que describe el entorno',
        paragraphs: [
          'Turismo Guadalajara recoge «Plaza de los Tres Poderes» entre las denominaciones del espacio. El nombre alude a la concentración de sedes de los poderes públicos en el centro histórico, en particular del Poder Ejecutivo estatal.',
          'Junto a Plaza de las Dos Copas, es una forma local de referirse al lugar. La denominación oficial y la que aparece en esta guía es Plaza de la Liberación.'
        ],
        note: 'No enumeramos qué edificio corresponde hoy a cada poder ni afirmamos que las tres sedes estén exactamente frente a la plaza. Esa atribución requiere una ficha oficial actualizada.'
      },
      {
        heading: 'Los edificios de gobierno del centro',
        paragraphs: [
          'El Palacio de Gobierno de Jalisco es la referencia más visible del conjunto y aparece en las rutas oficiales del centro histórico. A su alrededor se concentran otros inmuebles administrativos y culturales de distintas épocas.',
          'Esa vecindad explica por qué una plaza del siglo XX acabó recibiendo un nombre de lectura política, además del conmemorativo ligado a Miguel Hidalgo.'
        ]
      },
      {
        heading: 'Un nombre, no una dirección',
        paragraphs: [
          'Si un mapa, un texto o un conductor menciona «Plaza de los Tres Poderes», se refiere al mismo espacio abierto entre la Catedral y el Teatro Degollado. No busques una segunda plaza.',
          'Tampoco lo uses como dirección postal: para ubicarte, conviene el Plus Code MMG3+RM o la referencia de Maps C. Pedro Loza 27A.'
        ]
      },
      {
        heading: 'Cómo incluirlo en la visita',
        paragraphs: [
          'Leer la plaza desde sus nombres sucesivos ayuda a ordenar el paseo: el monumento y las fuentes por un lado, los edificios de gobierno por otro y la Cruz de Plazas como marco general. Es un buen complemento de la ruta de una hora.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Plaza de los Tres Poderes y Plaza de la Liberación son la misma?',
        a: 'Sí. Es una denominación local e histórica del mismo espacio del centro de Guadalajara, recogida por Turismo Guadalajara.'
      },
      {
        q: '¿Qué tres poderes menciona el nombre?',
        a: 'El nombre alude a los poderes públicos asentados en el entorno del centro histórico. No atribuimos una sede concreta a cada uno sin una ficha oficial verificada.'
      },
      {
        q: '¿Es el nombre oficial actual?',
        a: 'No. La denominación que usa esta guía y las fichas de turismo es Plaza de la Liberación; Tres Poderes y Dos Copas son nombres históricos o locales.'
      }
    ],
    related: ['historia', 'cruz-de-plazas', 'palacio-de-gobierno', 'fuentes-dos-copas', 'arquitectura-urbana'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'guiaArquitectonica']
  },
  {
    num: 14,
    slug: 'cruz-de-plazas',
    group: 'history',
    priority: 'P1',
    cardTitle: 'La Cruz de Plazas',
    cardText: 'Qué es el conjunto de plazas en torno a la Catedral y cómo recorrerlo desde la Liberación.',
    title: 'La Cruz de Plazas de Guadalajara desde la Plaza de la Liberación',
    description: 'Qué es la Cruz de Plazas del centro histórico de Guadalajara y cómo recorrerla teniendo como punto de partida la Plaza de la Liberación.',
    h1: 'La Cruz de Plazas de Guadalajara',
    lead: 'La Plaza de la Liberación no se entiende sola: forma parte de un conjunto de espacios públicos articulados en torno a la Catedral.',
    keywords: 'Cruz de Plazas Guadalajara, Plaza de Armas, Plaza Guadalajara, Plaza Tapatía, Ignacio Díaz Morales',
    sections: [
      {
        heading: 'Un conjunto, no una sola plaza',
        paragraphs: [
          'La guía arquitectónica de Cultura Jalisco y las fichas municipales describen la Cruz de Plazas como una lectura urbana del centro: una serie de espacios abiertos dispuestos en torno a la Catedral Metropolitana, resultado de la transformación del siglo XX.',
          'La Plaza de la Liberación surgió en ese contexto, al sustituir dos manzanas entre la Catedral y el Teatro Degollado por un espacio público. El proyecto del conjunto se atribuye a Ignacio Díaz Morales.'
        ],
        note: 'No fijamos una fecha única de realización del conjunto: las fuentes distinguen el proyecto, la etapa de construcción y la terminación de cada plaza.'
      },
      {
        heading: 'Las plazas que se citan',
        paragraphs: [
          'En las rutas oficiales del centro histórico aparecen, además de la Liberación, la Plaza de Armas, la Plaza Guadalajara y la Plaza Tapatía. No son el mismo lugar y conviene nombrarlas bien al pedir indicaciones.'
        ],
        bullets: [
          'Plaza de Armas: espacio colonial, junto al Palacio de Gobierno.',
          'Plaza de la Liberación: entre la Catedral y el Teatro Degollado.',
          'Plaza Guadalajara: otro de los espacios del conjunto, distinto de los anteriores.',
          'Plaza Tapatía: prolongación peatonal hacia el oriente del centro.'
        ]
      },
      {
        heading: 'Recorrer el conjunto a pie',
        paragraphs: [
          'La forma más sencilla de entender la Cruz es caminarla: empezar en la Liberación, pasar por el borde de la Catedral, acercarse a Plaza de Armas y continuar después hacia Plaza Tapatía.',
          'Una hora basta para las plazas más próximas; si quieres incluir algún interior o una pausa, pasa al plan de medio día.'
        ],
        steps: [
          'Sal de la Plaza de la Liberación en dirección a la Catedral.',
          'Identifica Plaza de Armas y el Palacio de Gobierno como conjunto aparte.',
          'Continúa hacia el Teatro Degollado y la Plaza Tapatía.',
          'Vuelve por el mismo corredor o enlaza con la ruta de medio día.'
        ]
      },
      {
        heading: 'Cómo no confundirlas',
        paragraphs: [
          'El error más común es tratar a la Liberación como la Plaza de Armas «renombrada». Son espacios distintos con historias distintas. Si un conductor o un mapa te lleva a la plaza equivocada, pide como referencia la Catedral y el Teatro Degollado.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuántas plazas forman la Cruz de Plazas?',
        a: 'Las fuentes describen un conjunto de cuatro espacios en torno a la Catedral; entre ellos se citan Plaza de Armas, Plaza de la Liberación, Plaza Guadalajara y Plaza Tapatía.'
      },
      {
        q: '¿La Plaza de la Liberación es la antigua Plaza de Armas?',
        a: 'No. La fuente municipal fecha la terminación de la Liberación en el siglo XX y no la describe como la plaza colonial renombrada.'
      },
      {
        q: '¿Se pueden recorrer todas a pie?',
        a: 'Sí, es un recorrido peatonal del centro histórico. Calcula al menos una hora para las más cercanas y confirma desvíos por obras o eventos.'
      }
    ],
    related: ['historia', 'arquitectura-urbana', 'plaza-de-armas-a-pie', 'plaza-tapatia', 'ruta-una-hora'],
    sources: ['guiaArquitectonica', 'turismoPlaza', 'rutaCentro']
  },
  {
    num: 15,
    slug: 'arquitectura-urbana',
    group: 'history',
    priority: 'P1',
    cardTitle: 'Arquitectura y diseño urbano',
    cardText: 'Cómo se abrió el espacio, qué papel juegan las fuentes y qué límites tiene esa lectura.',
    title: 'Arquitectura y diseño urbano de la Plaza de la Liberación',
    description: 'Cómo se explica el diseño de la Plaza de la Liberación: apertura del espacio, Cruz de Plazas, Ignacio Díaz Morales y el centro del siglo XX.',
    h1: 'Arquitectura y diseño urbano de la Plaza de la Liberación',
    lead: 'Más que un objeto aislado, la plaza es una decisión urbanística: abrir espacio en un centro histórico denso.',
    keywords: 'arquitectura Plaza de la Liberación, diseño urbano Guadalajara, Ignacio Díaz Morales, siglo XX',
    sections: [
      {
        heading: 'Abrir un espacio en el centro',
        paragraphs: [
          'Las fuentes municipales y la guía arquitectónica de Cultura Jalisco describen la sustitución de dos manzanas entre la Catedral y el Teatro Degollado por un espacio público. Esa operación permitió una vista continua entre dos de los edificios más reconocibles del centro.',
          'El proyecto del conjunto de la Cruz de Plazas se atribuye a Ignacio Díaz Morales. Las fichas oficiales no coinciden en una única fecha, por lo que distinguimos proyecto, construcción y terminación.'
        ]
      },
      {
        heading: 'Un proyecto de conjunto',
        paragraphs: [
          'La plaza se pensó junto con otros espacios del centro: no se explica sin Plaza de Armas, sin la Catedral ni sin la prolongación hacia Plaza Tapatía. De ahí que las guías oficiales la presenten dentro de una ruta y no como una atracción autónoma.',
          'Las dos fuentes y el monumento a Miguel Hidalgo ordenan el espacio y le dan escala; el apodo de las Dos Copas nace precisamente de esos elementos.'
        ]
      },
      {
        heading: 'Qué se ve hoy',
        paragraphs: [
          'Un plano abierto, pavimentado, con monumento, fuentes y vistas hacia fachadas de épocas muy distintas: la Catedral, el Teatro Degollado del siglo XIX y los edificios de gobierno del entorno.',
          'Esa mezcla es el resultado de la intervención del siglo XX sobre una traza anterior, no un conjunto construido de una sola vez.'
        ],
        note: 'No describimos materiales, dimensiones ni autorías de cada elemento sin una ficha verificable. Tampoco damos por hecho el estado actual de fuentes o pavimento.'
      },
      {
        heading: 'Límites de la interpretación',
        paragraphs: [
          'Leer el diseño no equivale a conocer las condiciones de visita de hoy: cierres, mantenimiento, mobiliario y eventos cambian. Para la parte práctica están las guías de horarios y acceso, accesibilidad y qué ver.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Quién diseñó la Plaza de la Liberación?',
        a: 'Las fuentes municipales atribuyen el proyecto del conjunto de la Cruz de Plazas a Ignacio Díaz Morales. No asignamos autorías individuales a cada elemento sin ficha oficial.'
      },
      {
        q: '¿La plaza sustituyó a edificios anteriores?',
        a: 'Sí. Las fuentes describen la sustitución de dos manzanas entre la Catedral y el Teatro Degollado como parte de la transformación urbana del siglo XX.'
      },
      {
        q: '¿Es de estilo colonial?',
        a: 'No. Es una intervención urbana de mediados del siglo XX, aunque conviva con edificios coloniales y decimonónicos en su entorno.'
      }
    ],
    related: ['historia', 'cruz-de-plazas', 'que-ver', 'fuentes-dos-copas', 'plaza-tapatia'],
    sources: ['guiaArquitectonica', 'turismoPlaza', 'gacetaPlazas']
  },
  {
    num: 16,
    slug: 'miguel-hidalgo-abolition',
    group: 'history',
    priority: 'P1',
    cardTitle: 'Hidalgo y la abolición',
    cardText: 'El decreto de 1810 que da sentido al nombre, y por qué no debe confundirse con la obra de la plaza.',
    title: 'Miguel Hidalgo y la abolición de la esclavitud en Guadalajara',
    description: 'Contexto histórico del decreto de abolición de la esclavitud de 1810 que da sentido al nombre y al monumento de la Plaza de la Liberación.',
    h1: 'Miguel Hidalgo y la abolición de la esclavitud',
    lead: 'Esta página explica el hecho histórico que la plaza conmemora, no la historia de su construcción.',
    keywords: 'Miguel Hidalgo abolición esclavitud 1810, decreto Guadalajara, nombre Plaza de la Liberación',
    sections: [
      {
        heading: 'El hecho histórico',
        paragraphs: [
          'Durante la guerra de independencia, en 1810, Miguel Hidalgo emitió en Guadalajara un decreto contra la esclavitud. La ficha de Turismo Guadalajara relaciona ese hecho con el nombre de la plaza y con el monumento dedicado al insurgente.',
          'Es un acontecimiento del siglo XIX, anterior en más de un siglo a la apertura del espacio urbano que hoy conocemos.'
        ],
        note: 'Esta guía no interpreta el decreto como un acto ocurrido en el solar de la plaza ni fija aquí una fecha conmemorativa oficial; para eso consulta las fuentes históricas y la agenda institucional.'
      },
      {
        heading: 'Del decreto al nombre de la plaza',
        paragraphs: [
          'El nombre «Liberación» y la escultura funcionan como recordatorio conmemorativo: trasladan al espacio público la memoria de aquel decreto. Por eso la plaza reúne, en un mismo lugar, un nombre de lectura política del siglo XX y una referencia histórica de 1810.',
          'La otra denominación local, Plaza de los Tres Poderes, pertenece en cambio al vocabulario institucional del entorno.'
        ]
      },
      {
        heading: 'Dos tiempos que no hay que confundir',
        bullets: [
          '1810: decreto contra la esclavitud, en el contexto de la independencia.',
          'Mediados del siglo XX: proyecto, construcción y terminación de la plaza y la Cruz de Plazas.',
          'Hoy: uso del espacio como plaza pública, con eventos y servicios que cambian.'
        ]
      },
      {
        heading: 'Dónde ampliar la lectura',
        paragraphs: [
          'Si te interesa el monumento en sí, la guía dedicada describe cómo incluirlo en la visita. Si buscas el origen del conjunto urbano, la guía de historia y la de la Cruz de Plazas sitúan las fechas con sus matices.',
          'Las fuentes de esta página son institucionales; no presentamos interpretaciones sin respaldo documental.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué tiene que ver Miguel Hidalgo con esta plaza?',
        a: 'La ficha municipal vincula el nombre y el monumento con el decreto de abolición de la esclavitud emitido en Guadalajara en 1810. La plaza lo conmemora.'
      },
      {
        q: '¿El decreto se firmó en la Plaza de la Liberación?',
        a: 'No. La plaza es una intervención urbana del siglo XX; el decreto pertenece a 1810. El espacio conmemora el hecho, no fue su escenario.'
      },
      {
        q: '¿Por qué la plaza tiene también un nombre político?',
        a: 'Por la presencia de sedes de los poderes públicos en el entorno, que dio lugar a la denominación local Plaza de los Tres Poderes.'
      }
    ],
    related: ['monumento-miguel-hidalgo', 'historia', 'plaza-tres-poderes', 'esculturas-y-monumentos', 'ruta-medio-dia'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'rutaCentro']
  },
  {
    num: 17,
    slug: 'historia-centro-guadalajara',
    group: 'history',
    priority: 'P1',
    cardTitle: 'La plaza y el centro histórico',
    cardText: 'Cómo se inserta la plaza en la evolución del centro y en sus recorridos peatonales actuales.',
    title: 'La Plaza de la Liberación y el Centro Histórico de Guadalajara',
    description: 'Cómo se inserta la Plaza de la Liberación en la transformación del Centro Histórico de Guadalajara y en sus recorridos peatonales.',
    h1: 'La Plaza de la Liberación y el Centro Histórico',
    lead: 'La plaza funciona como un nodo: ayuda a conectar la Catedral, el Teatro Degollado, Plaza de Armas y Plaza Tapatía.',
    keywords: 'Centro Histórico de Guadalajara, Plaza de la Liberación, ruta centro histórico, transformación urbana',
    sections: [
      {
        heading: 'Un centro que cambió en el siglo XX',
        paragraphs: [
          'El centro histórico de Guadalajara no es una fotografía de la ciudad colonial. Las guías arquitectónicas y las fichas municipales documentan intervenciones de mediados del siglo XX que reordenaron manzanas, abrieron plazas y crearon corredores peatonales.',
          'La Plaza de la Liberación pertenece a esa etapa. Por eso convive con edificios de siglos anteriores sin compartir su cronología.'
        ]
      },
      {
        heading: 'La plaza como nodo peatonal',
        paragraphs: [
          'Situada entre la Catedral y el Teatro Degollado, la plaza permite enlazar a pie varios de los puntos que las rutas oficiales del centro incluyen en un mismo recorrido.',
          'Ese papel de conexión explica por qué aparece en tantos itinerarios distintos: es un lugar de paso tanto como un destino.'
        ],
        steps: [
          'Catedral y Plaza de Armas, hacia un lado del conjunto.',
          'Teatro Degollado y Plaza Tapatía, hacia el otro.',
          'Rotonda de los Jaliscienses Ilustres y Palacio de Gobierno, en recorridos algo más amplios.'
        ]
      },
      {
        heading: 'Edificios de otras épocas',
        paragraphs: [
          'La Catedral Metropolitana, el Teatro Degollado —incluido en el catálogo de monumentos del INAH— y el Palacio de Gobierno de Jalisco pertenecen a momentos históricos diferentes. Las fechas de los edificios, del monumento y de la plaza no deben confundirse.',
          'Una ruta de medio día permite verlos por fuera y dejar la visita a interiores para cuando sus horarios lo permitan.'
        ]
      },
      {
        heading: 'Leer el centro con fuentes',
        paragraphs: [
          'Turismo Guadalajara publica una ruta del Centro Histórico y Cultura Jalisco una guía arquitectónica; ambas son la base de esta página. Los horarios, accesos y programación actuales, en cambio, deben verificarse el día de la visita.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La plaza está dentro del Centro Histórico?',
        a: 'Sí. Está en la Zona Centro de Guadalajara, entre la Catedral y el Teatro Degollado, y forma parte de las rutas oficiales del centro histórico.'
      },
      {
        q: '¿Todos los edificios del entorno son de la misma época?',
        a: 'No. La plaza es del siglo XX, mientras que la Catedral y el Teatro Degollado pertenecen a periodos anteriores. Confundir sus fechas es un error frecuente.'
      },
      {
        q: '¿Qué puedo ver en una mañana?',
        a: 'Las plazas próximas y las fachadas principales caben en un plan de medio día; los interiores dependen de sus propios horarios y condiciones.'
      }
    ],
    related: ['historia', 'cruz-de-plazas', 'ruta-medio-dia', 'arquitectura-urbana', 'catedral-guadalajara-a-pie'],
    sources: ['rutaCentro', 'guiaArquitectonica', 'turismoPlaza']
  },
  {
    num: 18,
    slug: 'esculturas-y-monumentos',
    group: 'history',
    priority: 'P1',
    cardTitle: 'Esculturas y monumentos',
    cardText: 'Arte público documentado y un paseo de observación, sin inventar un catálogo cerrado de obras.',
    title: 'Esculturas y monumentos de la Plaza de la Liberación',
    description: 'Recorrido por el arte público documentado de la Plaza de la Liberación: el monumento a Hidalgo y las fuentes, sin inventar un catálogo cerrado.',
    h1: 'Esculturas y monumentos de la Plaza de la Liberación',
    lead: 'Hay elementos bien documentados y otros que no deben darse por supuestos. Esta guía se queda con los primeros.',
    keywords: 'esculturas Plaza de la Liberación, monumentos Guadalajara centro, arte público plaza',
    sections: [
      {
        heading: 'Lo que las fuentes documentan',
        paragraphs: [
          'Las fichas municipales mencionan el monumento a Miguel Hidalgo y las dos fuentes que dieron lugar al apodo de Plaza de las Dos Copas. Son los dos referentes de arte y diseño que esta guía puede citar con respaldo.',
          'El propio espacio abierto y sus vistas hacia la Catedral y el Teatro Degollado completan el conjunto visible.'
        ],
        note: 'No publicamos un número total de esculturas, ni listados de autores y años, porque no contamos con un catálogo verificable. Un recuento inventado sería peor que una omisión.'
      },
      {
        heading: 'Un paseo de arte público',
        paragraphs: [
          'El recorrido puede hacerse en pocos minutos y no requiere entrar a ningún recinto. Está pensado para observar, no para invadir zonas acordonadas.'
        ],
        steps: [
          'Empieza por el monumento a Hidalgo y su contexto conmemorativo.',
          'Continúa hacia las dos fuentes y observa su papel en la composición.',
          'Mira después el conjunto desde el borde de la plaza, hacia ambas fachadas.',
          'Termina con las vistas hacia Plaza de Armas o Plaza Tapatía.'
        ]
      },
      {
        heading: 'Por qué no damos un número total',
        paragraphs: [
          'El arte público de un centro histórico cambia: aparecen piezas temporales, se retiran elementos por mantenimiento y se instalan montajes de eventos. Una cifra fija quedaría desactualizada y podría inducir a error.',
          'Si necesitas un inventario, consulta los catálogos de patrimonio y las fichas del Ayuntamiento.'
        ]
      },
      {
        heading: 'Normas de convivencia',
        paragraphs: [
          'No subas a monumentos, fuentes ni barreras. Respeta el paso de otras personas y sus fotografías, y consulta la normativa antes de usar trípodes, equipos profesionales o drones.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuántas esculturas hay en la plaza?',
        a: 'No damos una cifra. Solo citamos los elementos documentados por las fuentes municipales —el monumento a Hidalgo y las dos fuentes— y evitamos un recuento sin catálogo verificable.'
      },
      {
        q: '¿Hay visitas guiadas de arte público?',
        a: 'No las anunciamos. Consulta la agenda cultural del Ayuntamiento y de las instituciones del centro si buscas una visita con horario.'
      },
      {
        q: '¿Puedo fotografiar los monumentos?',
        a: 'La fotografía de visitante es habitual, pero respeta personas, señalización y zonas restringidas. Para equipos profesionales o drones, verifica antes los permisos.'
      }
    ],
    related: ['monumento-miguel-hidalgo', 'fuentes-dos-copas', 'que-ver', 'fotografia', 'ruta-30-minutos'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'rutaCentro']
  }
];
