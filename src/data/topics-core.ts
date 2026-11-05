import type { Topic } from './topic-types';

/** A. Información esencial (01–06, P0). */
export const TOPICS_CORE: Topic[] = [
  {
    num: 1,
    slug: 'historia',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Historia de la plaza',
    cardText: 'Origen del nombre, el proyecto urbano de mediados del siglo XX y las fechas que hay que distinguir.',
    title: 'Historia de la Plaza de la Liberación | Guadalajara',
    description: 'Origen del nombre, el proyecto urbano del siglo XX y los nombres históricos de la Plaza de la Liberación en Guadalajara, con fuentes municipales.',
    h1: 'Historia de la Plaza de la Liberación',
    lead: 'La plaza no pertenece a la traza colonial de Guadalajara: las fuentes oficiales la sitúan en la transformación urbana de mediados del siglo XX.',
    keywords: 'historia Plaza de la Liberación, origen del nombre, Ignacio Díaz Morales, Cruz de Plazas, Guadalajara',
    sections: [
      {
        heading: 'De qué periodo estamos hablando',
        paragraphs: [
          'Turismo Guadalajara y la guía arquitectónica de Cultura Jalisco relacionan este espacio con la apertura de la Cruz de Plazas, cuando se sustituyeron dos manzanas entre la Catedral y el Teatro Degollado por un espacio público abierto. El diseño del conjunto se atribuye a Ignacio Díaz Morales.',
          'Por eso conviene leer la plaza como una pieza de urbanismo del siglo XX y no como la Plaza de Armas colonial con otro nombre. Son espacios distintos dentro del mismo centro histórico.'
        ],
        note: 'Las fichas oficiales no coinciden en una sola fecha: se mencionan 1947 para el proyecto, 1952 para la etapa de construcción y 1953 para la terminación. Distinguimos proyecto, obra y conclusión, y no fijamos una fecha única de inauguración.'
      },
      {
        heading: 'Por qué se llama «Liberación»',
        paragraphs: [
          'La ficha municipal vincula el nombre y el monumento dedicado a Miguel Hidalgo con el decreto de abolición de la esclavitud emitido en Guadalajara en 1810. El sentido de la plaza es conmemorativo: recuerda ese hecho histórico, no es el lugar donde se firmó el decreto ni una construcción de esa época.',
          'La fecha del decreto y la construcción de la plaza son, por tanto, dos hechos separados por más de un siglo. Confundirlos es uno de los errores más habituales al contar la historia del lugar.'
        ]
      },
      {
        heading: 'Los otros nombres del espacio',
        paragraphs: [
          'El mismo portal municipal recoge denominaciones locales que siguen apareciendo en mapas, textos y conversaciones. Ninguna de ellas sustituye al nombre oficial; ayudan a entender de qué plaza se habla.'
        ],
        bullets: [
          'Plaza de las Dos Copas: por las dos fuentes del conjunto.',
          'Plaza de los Tres Poderes: por los edificios de gobierno del entorno.',
          'Plaza Liberación GDL: forma abreviada frecuente en búsquedas locales.'
        ]
      },
      {
        heading: 'Qué no dice la documentación',
        paragraphs: [
          'Los antecedentes históricos no acreditan el estado actual de las fuentes, de todos los accesos ni de las instalaciones. Un hecho documentado en 1953 no demuestra que un servicio funcione hoy. Para eso están los avisos municipales y la señalización en sitio.',
          'Esta guía es independiente y no sustituye a la información del Ayuntamiento ni a la de los recintos del entorno.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La Plaza de la Liberación es una plaza colonial?',
        a: 'No. Las fuentes municipales la sitúan en la remodelación urbana de mediados del siglo XX, dentro del proyecto de la Cruz de Plazas. Plaza de Armas, en cambio, sí pertenece al trazo colonial.'
      },
      {
        q: '¿En qué año se inauguró la plaza?',
        a: 'No damos una fecha única. Las fichas oficiales mencionan 1947 para el proyecto, 1952 para la construcción y 1953 para la terminación; son etapas distintas y conviene verificar cada una en la fuente original.'
      },
      {
        q: '¿Miguel Hidalgo diseñó la plaza?',
        a: 'No. El monumento y el nombre lo conmemoran a él y al decreto de abolición de la esclavitud de 1810. El diseño urbano del siglo XX se atribuye a Ignacio Díaz Morales.'
      }
    ],
    related: ['monumento-miguel-hidalgo', 'miguel-hidalgo-abolition', 'plaza-tres-poderes', 'cruz-de-plazas', 'arquitectura-urbana'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'guiaArquitectonica']
  },
  {
    num: 2,
    slug: 'como-llegar',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Cómo llegar',
    cardText: 'Punto de referencia, Plus Code y panorama de las opciones de llegada al centro histórico.',
    title: 'Cómo llegar a la Plaza de la Liberación | Guadalajara',
    description: 'Guía general para llegar a la Plaza de la Liberación: punto de referencia, Plus Code, coordenadas y opciones de transporte que conviene verificar.',
    h1: 'Cómo llegar a la Plaza de la Liberación',
    lead: 'La plaza está en la Zona Centro de Guadalajara, entre la Catedral y el Teatro Degollado. Esta página ordena las opciones de llegada; cada modalidad tiene su propia guía.',
    keywords: 'cómo llegar a Plaza de la Liberación, dónde está, Plus Code MMG3+RM, Guadalajara Centro',
    sections: [
      {
        heading: 'La referencia que sí conocemos',
        paragraphs: [
          'Google Maps lista C. Pedro Loza 27A, Zona Centro, 44100 Guadalajara, Jal., como referencia de ubicación, con Plus Code MMG3+RM y coordenadas aproximadas 20.677015, −103.3457694.',
          'La plaza es un espacio abierto de grandes dimensiones, y las fuentes municipales describen su ámbito por las calles que lo rodean. No tratamos ese número de calle como puerta única, taquilla ni entrada verificada.'
        ],
        note: 'Usa la dirección y el Plus Code como punto de orientación en el mapa, no como garantía de un acceso concreto abierto.'
      },
      {
        heading: 'Opciones de llegada',
        paragraphs: [
          'El centro histórico se recorre bien a pie una vez que estás en él. La elección real está en cómo llegar hasta la zona y dónde terminar el trayecto.'
        ],
        bullets: [
          'Transporte público: tren ligero y autobús, con estaciones y paradas próximas que deben reconfirmarse.',
          'A pie desde la estación Guadalajara Centro: el último tramo se hace por las calles del centro.',
          'Taxi o aplicación: conviene acordar un punto de descenso, no una «entrada principal».',
          'Auto particular: requiere elegir y verificar un estacionamiento antes de entrar al centro.',
          'Desde el aeropuerto: traslado más largo, con opciones autorizadas y transporte público.'
        ]
      },
      {
        heading: 'El último tramo siempre es a pie',
        paragraphs: [
          'Sea cual sea el medio, la plaza se cruza caminando. Calcula tiempo para orientarte, localizar las salidas y decidir qué recinto visitar después. Si el grupo tiene necesidades de movilidad, revisa antes la guía de accesibilidad: no hemos verificado una ruta completa sin escalones.'
        ]
      },
      {
        heading: 'Antes de salir',
        paragraphs: [
          'Confirma el estado de vialidades, obras y eventos: un acto público o un cierre temporal puede cambiar el punto de descenso y el tramo peatonal. Esta guía no confirma en tiempo real cierres, horarios de transporte ni disponibilidad de estacionamiento.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuál es la dirección exacta de la Plaza de la Liberación?',
        a: 'Maps lista C. Pedro Loza 27A, Zona Centro, 44100 Guadalajara, Jal., con Plus Code MMG3+RM. Es una referencia de ubicación: no verificamos ese número como entrada única ni como taquilla.'
      },
      {
        q: '¿Hay una estación de tren ligero en la plaza?',
        a: 'No hay una estación dentro de la plaza. Las fichas turísticas mencionan estaciones próximas como Guadalajara Centro y Plaza Universidad; confirma líneas, salidas y obras en el planificador oficial de SITEUR.'
      },
      {
        q: '¿Se puede llegar caminando desde el centro?',
        a: 'Sí. Si ya estás en la Zona Centro, el trayecto es peatonal. La plaza forma parte del recorrido habitual entre la Catedral y el Teatro Degollado.'
      }
    ],
    related: ['transporte-publico', 'desde-guadalajara-centro', 'estacionamiento', 'llegar-en-taxi-o-app', 'accesibilidad'],
    sources: ['maps', 'visitJalisco', 'turismoPlaza']
  },
  {
    num: 3,
    slug: 'horarios-y-acceso',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Horarios y acceso',
    cardText: 'Espacio público, el dato de 24 horas en Maps y por qué el acceso puede cambiar durante eventos.',
    title: 'Horarios y acceso a la Plaza de la Liberación | Guadalajara',
    description: 'Qué se sabe y qué no sobre horarios, entrada y accesos de la Plaza de la Liberación: espacio público, dato de Maps y cambios durante eventos.',
    h1: 'Horarios y acceso a la Plaza de la Liberación',
    lead: 'Es un espacio público, no un recinto con taquilla. Eso cambia la forma de responder a la pregunta por el horario.',
    keywords: 'horarios Plaza de la Liberación, horario de apertura, entrada, acceso, abierto 24 horas',
    sections: [
      {
        heading: 'Espacio público, no recinto con taquilla',
        paragraphs: [
          'La fuente municipal describe una plaza pública del centro histórico. No hemos verificado una tarifa general de entrada vigente, ni un horario oficial de apertura y cierre publicado por la autoridad para el conjunto del espacio.',
          'Eso no significa que todo esté disponible en todo momento: fuentes, zonas acordonadas, servicios y edificios del entorno tienen condiciones propias.'
        ],
        note: 'No presentamos «abierto 24 horas» como un hecho garantizado. Es un dato de una ficha de terceros, no una confirmación de cada acceso o servicio.'
      },
      {
        heading: 'Qué mostraba Maps en la consulta',
        paragraphs: [
          'En la consulta del 29 de octubre de 2026, la ficha de Google Maps mostraba 24 horas. La calificación agregada de 4,7/5 y 14.451 reseñas se revisó el 4 de noviembre de 2026. Ambos son datos de terceros, fechados y no sincronizados automáticamente.',
          'Un mapa puede mantener un horario genérico aunque una zona esté cerrada por mantenimiento, montaje de un evento o una obra. Para decisiones concretas, consulta los avisos del Ayuntamiento y la señalización en sitio.'
        ]
      },
      {
        heading: 'Cuándo puede cambiar el acceso',
        paragraphs: [
          'La plaza se usa como escenario de actividades culturales y actos públicos. Durante un montaje o un evento pueden aparecer vallas, zonas reservadas o desvíos peatonales.',
          'Tampoco podemos garantizar que las fuentes estén en funcionamiento, que haya baños operativos o que todos los accesos estén abiertos. Verifica cada elemento por separado.'
        ]
      },
      {
        heading: 'Los edificios del entorno son otro asunto',
        paragraphs: [
          'Catedral, Teatro Degollado, Palacio de Gobierno y otros recintos no comparten necesariamente el horario de la plaza. Una función, una visita cultural o un acto religioso pueden requerir boleto, reserva o ajustarse a un calendario propio.',
          'Ver una fachada desde el espacio público no equivale a acceder al interior.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La Plaza de la Liberación abre 24 horas?',
        a: 'Maps mostraba 24 horas en la consulta del 29 de octubre de 2026. Es un dato de terceros, no una garantía de acceso a todas las zonas, fuentes o servicios. Consulta avisos locales antes de ir.'
      },
      {
        q: '¿Se paga entrada?',
        a: 'La fuente municipal describe una plaza pública. No verificamos una tarifa general vigente ni cobros de actividades. Confirma cualquier cobro con el organizador; recintos, estacionamiento y transporte tienen condiciones independientes.'
      },
      {
        q: '¿Puedo visitarla durante un evento?',
        a: 'Depende del montaje y de las zonas acordonadas. Revisa la agenda municipal y la señalización del momento; esta guía no confirma accesos en tiempo real.'
      }
    ],
    related: ['eventos', 'visitar-de-noche', 'mejor-hora-para-visitar', 'preguntas-frecuentes', 'accesibilidad'],
    sources: ['maps', 'turismoPlaza', 'visitJalisco']
  },
  {
    num: 4,
    slug: 'que-ver',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Qué ver en la plaza',
    cardText: 'Monumento a Hidalgo, las dos fuentes y las fachadas inmediatas, con un orden de visita sencillo.',
    title: 'Qué ver en la Plaza de la Liberación | Guadalajara',
    description: 'Recorrido por lo que puede verse en la Plaza de la Liberación: el monumento a Miguel Hidalgo, las dos fuentes y las fachadas de la Catedral y el Teatro Degollado.',
    h1: 'Qué ver en la Plaza de la Liberación',
    lead: 'La visita se resuelve en tres planos: lo que hay dentro de la plaza, lo que la rodea y lo que puede visitarse después con horario propio.',
    keywords: 'qué ver en Plaza de la Liberación, monumento Hidalgo, fuentes Dos Copas, Catedral, Teatro Degollado',
    sections: [
      {
        heading: 'Dentro de la plaza',
        paragraphs: [
          'El monumento a Miguel Hidalgo es el elemento conmemorativo central y da sentido al nombre del espacio. Las dos fuentes son el otro rasgo reconocible: de ellas viene el apodo local de Plaza de las Dos Copas.',
          'El espacio abierto en sí es parte de la experiencia: permite leer de una sola mirada la relación entre la Catedral y el Teatro Degollado, que es justamente lo que buscaba el proyecto urbano de la Cruz de Plazas.'
        ],
        note: 'No confirmamos que las fuentes estén en funcionamiento ni que todos los elementos sean accesibles en toda circunstancia. Observa la señalización y no subas a monumentos, fuentes o barreras.'
      },
      {
        heading: 'En el borde inmediato',
        paragraphs: [
          'Hacia un lado se distingue la Catedral Metropolitana; hacia el otro, la fachada del Teatro Degollado, incluido en el catálogo de monumentos históricos del INAH. Son referencias de orientación y motivos fotográficos habituales.',
          'El Palacio de Gobierno y otros edificios de gobierno aparecen en el entorno cercano, razón por la que también se usa el nombre de Plaza de los Tres Poderes.'
        ]
      },
      {
        heading: 'Un orden de visita sencillo',
        paragraphs: [
          'Si tienes poco tiempo, empieza por el centro del espacio, identifica las salidas y recorre después el perímetro. Así distinguirás la plaza de los recintos que la rodean sin depender de un horario de apertura.'
        ],
        steps: [
          'Ubica el monumento y las dos fuentes desde una zona de paso permitida.',
          'Mira hacia la Catedral y hacia el Teatro Degollado para orientarte.',
          'Recorre el perímetro y localiza las salidas hacia Plaza de Armas y Plaza Tapatía.',
          'Decide después si entras a algún recinto, consultando antes sus propias condiciones.'
        ]
      },
      {
        heading: 'Lo que esta página no promete',
        paragraphs: [
          'No enumeramos un número total de esculturas, no atribuimos autorías sin ficha verificable y no damos por hecho el estado del mobiliario, la iluminación o las fuentes. La ilustración de esta guía es una composición geométrica original y no representa instalaciones reales.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo basta para ver la plaza?',
        a: 'Con 30 minutos se puede recorrer el espacio, ver el monumento y las fuentes y observar las fachadas inmediatas. Para añadir los alrededores conviene reservar una hora o más.'
      },
      {
        q: '¿Se puede entrar a la Catedral o al Teatro Degollado desde la plaza?',
        a: 'Son recintos con condiciones propias. Ver la fachada no incluye el acceso al interior: consulta horarios de visita, agenda y posibles boletos antes de ir.'
      },
      {
        q: '¿Las dos fuentes siempre están en funcionamiento?',
        a: 'No lo hemos verificado. El funcionamiento puede depender de mantenimiento o de un evento; confirma en los avisos locales y en la señalización del lugar.'
      }
    ],
    related: ['monumento-miguel-hidalgo', 'fuentes-dos-copas', 'esculturas-y-monumentos', 'catedral-guadalajara-a-pie', 'ruta-30-minutos'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'inahTeatro']
  },
  {
    num: 5,
    slug: 'monumento-miguel-hidalgo',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Monumento a Miguel Hidalgo',
    cardText: 'Qué conmemora la escultura, su vínculo con el decreto de 1810 y cómo acercarse con respeto.',
    title: 'Monumento a Miguel Hidalgo | Plaza de la Liberación',
    description: 'Qué representa el monumento a Miguel Hidalgo de la Plaza de la Liberación, su relación con la abolición de la esclavitud y cómo observarlo durante la visita.',
    h1: 'Monumento a Miguel Hidalgo en la Plaza de la Liberación',
    lead: 'Es el elemento que explica el nombre de la plaza: un monumento conmemorativo vinculado al decreto contra la esclavitud de 1810.',
    keywords: 'monumento Miguel Hidalgo Plaza de la Liberación, escultura Hidalgo Guadalajara, abolición esclavitud',
    sections: [
      {
        heading: 'Un monumento conmemorativo',
        paragraphs: [
          'La ficha de Turismo Guadalajara relaciona la escultura de Miguel Hidalgo con el decreto de abolición de la esclavitud emitido en Guadalajara en 1810. Por eso la plaza se llama «de la Liberación»: el conjunto recuerda ese hecho, no lo escenifica en el lugar donde ocurrió.',
          'Es un monumento público dentro de un espacio abierto. Se observa desde las zonas de paso y forma parte del recorrido peatonal habitual del centro histórico.'
        ]
      },
      {
        heading: 'El decreto y la plaza son dos momentos distintos',
        paragraphs: [
          'El decreto pertenece a la guerra de independencia, a comienzos del siglo XIX. La plaza y su monumento pertenecen a la remodelación urbana de mediados del siglo XX.',
          'Mantener esa separación evita un error frecuente: presentar la plaza como un escenario de 1810 o atribuir su diseño al propio Hidalgo. El proyecto urbano se atribuye a Ignacio Díaz Morales.'
        ],
        note: 'No publicamos autoría, altura, materiales ni año de instalación de la escultura sin una ficha verificable. Si necesitas esos datos, consúltalos en el catálogo oficial correspondiente.'
      },
      {
        heading: 'Cómo incluirlo en la visita',
        paragraphs: [
          'Un acercamiento breve funciona bien: identificar el monumento desde el espacio abierto, leer el contexto histórico y continuar hacia las fuentes o hacia la fachada del Teatro Degollado. Si vas con niños, acuerda un punto de encuentro antes de separaros.'
        ],
        steps: [
          'Observa el conjunto desde una zona de paso permitida.',
          'Relaciona el monumento con el nombre de la plaza y con la historia de 1810.',
          'Continúa hacia las dos fuentes o hacia el borde de la Catedral.',
          'Respeta barreras, señalización y el paso de otras personas.'
        ]
      },
      {
        heading: 'Convivencia y fotografía',
        paragraphs: [
          'No subas al monumento ni a su base. Para fotografía comercial, trípodes, equipos voluminosos o drones, consulta antes la normativa y los permisos aplicables: esta guía no interpreta la autorización como algo automático.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Por qué hay un monumento a Miguel Hidalgo en esta plaza?',
        a: 'La fuente municipal lo vincula con el decreto de abolición de la esclavitud emitido en Guadalajara en 1810. El nombre «Liberación» y el monumento comparten ese sentido conmemorativo.'
      },
      {
        q: '¿Quién esculpió el monumento y de qué año es?',
        a: 'No lo afirmamos: no contamos con una ficha verificable que acredite autoría, fecha o dimensiones. Consulta los catálogos oficiales de patrimonio si necesitas esos datos.'
      },
      {
        q: '¿Se puede tocar o subir al monumento?',
        a: 'No. Sigue la señalización, respeta las barreras y no escales monumentos, fuentes ni elementos del mobiliario urbano.'
      }
    ],
    related: ['historia', 'miguel-hidalgo-abolition', 'fuentes-dos-copas', 'esculturas-y-monumentos', 'que-ver'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'rutaCentro']
  },
  {
    num: 6,
    slug: 'fuentes-dos-copas',
    group: 'core',
    priority: 'P0',
    cardTitle: 'Las Dos Copas',
    cardText: 'Las dos fuentes que dieron el apodo local y qué se puede —y no se puede— confirmar sobre ellas.',
    title: 'Las Dos Copas: fuentes de la Plaza de la Liberación',
    description: 'Por qué la Plaza de la Liberación también se conoce como Plaza de las Dos Copas, dónde se citan sus fuentes y qué debe confirmarse antes de la visita.',
    h1: 'Las Dos Copas: las fuentes de la Plaza de la Liberación',
    lead: 'Dos fuentes dieron lugar a uno de los nombres locales más citados del espacio: Plaza de las Dos Copas.',
    keywords: 'Plaza de las Dos Copas, fuentes Plaza de la Liberación, Dos Copas Guadalajara',
    sections: [
      {
        heading: 'Un apodo nacido de las fuentes',
        paragraphs: [
          'Turismo Guadalajara y los documentos municipales sobre plazas y fuentes recogen la denominación «Plaza de las Dos Copas». El nombre alude a las dos fuentes del conjunto y sigue siendo una forma habitual de referirse al lugar en textos y conversaciones locales.',
          'Junto con «Plaza de los Tres Poderes», es un nombre histórico y coloquial, no una denominación que sustituya a Plaza de la Liberación.'
        ]
      },
      {
        heading: 'Qué dicen las fuentes oficiales',
        paragraphs: [
          'La Gaceta municipal de marzo de 2021 y la guía arquitectónica de Cultura Jalisco tratan el conjunto de plazas y fuentes del centro histórico como parte de una misma lectura urbana. Las fuentes se mencionan como elementos del diseño del espacio, dentro de la remodelación de mediados del siglo XX.',
          'Ese contexto explica por qué aparecen juntas: no son dos elementos aislados, sino parte de la composición de la plaza.'
        ]
      },
      {
        heading: 'Qué no podemos confirmar',
        paragraphs: [
          'No verificamos que ambas fuentes estén en funcionamiento, que haya agua en ellas en un día concreto, ni un horario de operación. Tampoco confirmamos el estado de las barreras o del pavimento a su alrededor.',
          'Un evento, una obra de mantenimiento o un cierre parcial puede cambiar el acceso a esa zona sin que esta guía lo refleje de inmediato.'
        ],
        note: 'Si las fuentes son el motivo principal de tu visita, consulta avisos municipales recientes y la señalización en sitio antes de desplazarte.'
      },
      {
        heading: 'Cómo incluirlas en el paseo',
        paragraphs: [
          'Funcionan bien como segundo punto de un recorrido breve: primero el monumento a Hidalgo, después las fuentes y, por último, las vistas hacia la Catedral y el Teatro Degollado. Es el esquema de la ruta de 30 minutos de esta guía.',
          'Respeta las barreras: observar las fuentes no implica acercarse al agua ni subir a sus bordes.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Por qué se llama Plaza de las Dos Copas?',
        a: 'Por las dos fuentes del conjunto, recogidas en las fichas municipales como rasgo característico del espacio. Es un nombre local e histórico, no el nombre oficial.'
      },
      {
        q: '¿Las fuentes están siempre en funcionamiento?',
        a: 'No lo hemos verificado. El funcionamiento puede variar por mantenimiento o eventos; confirma en los avisos locales y en la señalización del lugar.'
      },
      {
        q: '¿Plaza de las Dos Copas y Plaza de la Liberación son lugares distintos?',
        a: 'No. Son dos formas de referirse al mismo espacio del centro histórico de Guadalajara, igual que Plaza de los Tres Poderes.'
      }
    ],
    related: ['que-ver', 'plaza-tres-poderes', 'historia', 'arquitectura-urbana', 'ruta-30-minutos'],
    sources: ['gacetaPlazas', 'turismoPlaza', 'guiaArquitectonica']
  }
];
