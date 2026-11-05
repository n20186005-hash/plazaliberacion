import type { Topic } from './topic-types';

/** D. Periferia y exploración a pie (19–24, P1). */
export const TOPICS_NEARBY: Topic[] = [
  {
    num: 19,
    slug: 'catedral-guadalajara-a-pie',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'A la Catedral a pie',
    cardText: 'Desde qué punto de la plaza salir, qué ver en el trayecto y qué confirmar antes de entrar.',
    title: 'De la Plaza de la Liberación a la Catedral a pie',
    description: 'Cómo ir caminando de la Plaza de la Liberación a la Catedral de Guadalajara, qué ver en el trayecto y qué confirmar antes de entrar al recinto.',
    h1: 'De la Plaza de la Liberación a la Catedral de Guadalajara',
    lead: 'Es el trayecto más corto del conjunto: la Catedral Metropolitana es una de las dos referencias que delimitan la plaza.',
    keywords: 'Plaza de la Liberación a Catedral de Guadalajara, caminar a la Catedral, centro histórico',
    startPoint: 'Borde de la Plaza de la Liberación orientado hacia la Catedral',
    sections: [
      {
        heading: 'Desde dónde salir',
        paragraphs: [
          'Colócate en el borde de la plaza desde el que se ve la Catedral y toma ese volumen como referencia. No hace falta buscar una calle concreta: el espacio abierto permite orientarse de un vistazo.',
          'Si llegaste en transporte público o en taxi, este mismo punto sirve para confirmar que estás en la plaza correcta y no en Plaza de Armas.'
        ]
      },
      {
        heading: 'Qué ver en el trayecto',
        paragraphs: [
          'El recorrido permite apreciar cómo la apertura del siglo XX dejó una vista continua hacia la Catedral. Es una de las lecturas urbanísticas más claras de la Cruz de Plazas.',
          'Fíjate también en el contraste de épocas: la plaza y su monumento pertenecen al siglo XX, mientras que el templo y el Teatro Degollado son anteriores.'
        ],
        steps: [
          'Identifica la Catedral desde el centro de la plaza.',
          'Avanza hacia su borde por una zona de paso permitida.',
          'Observa el conjunto desde la distancia antes de acercarte al pórtico.',
          'Decide si continúas hacia Plaza de Armas o vuelves hacia el Teatro Degollado.'
        ]
      },
      {
        heading: 'Acceso al interior',
        paragraphs: [
          'La Catedral es un recinto religioso con condiciones propias: horarios de visita, normas de vestimenta, actos litúrgicos y posibles restricciones fotográficas. Ver la fachada desde la plaza no equivale a entrar.',
          'Confirma esas condiciones en los canales de la parroquia o en la señalización del lugar. Esta guía no publica horarios ni garantiza el acceso a todas las zonas.'
        ],
        note: 'No afirmamos que la entrada sea gratuita ni que el templo esté abierto a una hora determinada. Verifica antes de organizar la visita.'
      },
      {
        heading: 'Cómo volver o continuar',
        paragraphs: [
          'El regreso a la plaza es inmediato. Desde ahí puedes enlazar con la ruta de una hora, con la guía de Plaza de Armas o con el paseo hacia el Teatro Degollado.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto se tarda de la plaza a la Catedral?',
        a: 'Es un trayecto muy breve a pie, pero no damos minutos exactos: dependen del punto de partida, del paso y de posibles desvíos por eventos.'
      },
      {
        q: '¿Se puede entrar a la Catedral desde la plaza?',
        a: 'El acceso depende de sus propios horarios y normas. Consulta la señalización y los canales de la parroquia antes de ir.'
      },
      {
        q: '¿La Catedral y la plaza son de la misma época?',
        a: 'No. La plaza es una intervención urbana del siglo XX; el templo es anterior. Esa diferencia es parte del interés del conjunto.'
      }
    ],
    related: ['teatro-degollado-a-pie', 'plaza-de-armas-a-pie', 'cruz-de-plazas', 'ruta-30-minutos', 'que-ver'],
    sources: ['rutaCentro', 'turismoPlaza', 'maps']
  },
  {
    num: 20,
    slug: 'teatro-degollado-a-pie',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'Teatro Degollado a pie',
    cardText: 'La fachada desde la plaza, su ficha de patrimonio y dónde consultar agenda y boletos.',
    title: 'Plaza de la Liberación y Teatro Degollado a pie',
    description: 'Relación entre la Plaza de la Liberación y el Teatro Degollado: cómo acercarse, qué observar en la fachada y dónde consultar agenda y boletos.',
    h1: 'Plaza de la Liberación y Teatro Degollado',
    lead: 'El Teatro Degollado es la otra referencia que enmarca la plaza y una de las fachadas más reconocibles del centro.',
    keywords: 'Teatro Degollado desde Plaza de la Liberación, INAH, agenda Teatro Degollado, Guadalajara',
    startPoint: 'Borde de la plaza orientado hacia el Teatro Degollado',
    sections: [
      {
        heading: 'La plaza y el teatro',
        paragraphs: [
          'Las fuentes municipales sitúan la Plaza de la Liberación entre la Catedral y el Teatro Degollado. Esa posición no es casual: forma parte de la composición de la Cruz de Plazas y explica el valor de las vistas desde el espacio abierto.',
          'El Teatro Degollado cuenta con ficha en el Catálogo Nacional de Monumentos Históricos Inmuebles del INAH, una referencia adecuada para consultar datos de patrimonio.'
        ]
      },
      {
        heading: 'Qué observar desde la plaza',
        paragraphs: [
          'La fachada, el pórtico y la relación del edificio con el espacio abierto son los motivos principales. Observarlos desde la plaza permite entender la escala del conjunto sin depender de un horario de apertura.',
          'La ilustración de esta guía es una composición geométrica original y no representa el edificio ni sus detalles.'
        ],
        note: 'Ver la fachada no incluye el acceso al vestíbulo, a un ensayo, a una visita guiada ni a una función.'
      },
      {
        heading: 'Agenda, boletos y visitas',
        paragraphs: [
          'La programación, las funciones, las visitas y sus condiciones las define la institución responsable, y cambian por temporada. Consulta la agenda oficial de Cultura Jalisco o del propio teatro antes de desplazarte.',
          'No publicamos precios, horarios de taquilla ni una cartelera: una fecha festiva no garantiza que haya función ese día.'
        ]
      },
      {
        heading: 'Continuar el paseo',
        paragraphs: [
          'Desde el teatro puedes seguir hacia Plaza Tapatía o volver por la plaza hacia la Catedral. La ruta de una hora une ambos lados del conjunto y la de medio día añade más paradas.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Puedo entrar al Teatro Degollado desde la plaza?',
        a: 'El acceso al interior depende de la agenda y de las condiciones de visita. Consulta los canales oficiales antes de ir; ver la fachada no equivale a entrar.'
      },
      {
        q: '¿Hay función todos los días?',
        a: 'No lo garantizamos. La programación es estacional: revisa la agenda oficial y, si la hay, las condiciones de boleto.'
      },
      {
        q: '¿Dónde consulto datos históricos del edificio?',
        a: 'El Catálogo Nacional de Monumentos Históricos Inmuebles del INAH tiene una ficha del Teatro Degollado; también aparece en las rutas oficiales del centro histórico.'
      }
    ],
    related: ['catedral-guadalajara-a-pie', 'plaza-tapatia', 'ruta-una-hora', 'eventos', 'que-ver'],
    sources: ['inahTeatro', 'rutaCentro', 'turismoPlaza']
  },
  {
    num: 21,
    slug: 'plaza-de-armas-a-pie',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'A Plaza de Armas a pie',
    cardText: 'Cómo llegar y por qué son dos espacios distintos dentro de la Cruz de Plazas.',
    title: 'De la Plaza de la Liberación a Plaza de Armas caminando',
    description: 'Cómo ir de la Plaza de la Liberación a la Plaza de Armas de Guadalajara y por qué son dos espacios distintos de la Cruz de Plazas.',
    h1: 'De la Plaza de la Liberación a Plaza de Armas',
    lead: 'Son dos plazas diferentes del mismo centro histórico. Distinguirlas evita gran parte de las confusiones al pedir indicaciones.',
    keywords: 'Plaza de la Liberación a Plaza de Armas, diferencia entre plazas, Guadalajara centro',
    startPoint: 'Borde de la Plaza de la Liberación hacia la Catedral',
    sections: [
      {
        heading: 'Dos plazas, dos historias',
        paragraphs: [
          'La Plaza de Armas pertenece al trazo colonial y se asocia con el Palacio de Gobierno. La Plaza de la Liberación es una intervención urbana de mediados del siglo XX, vinculada al monumento a Miguel Hidalgo y a las dos fuentes.',
          'La fuente municipal no describe a la Liberación como la plaza colonial renombrada. Ambas forman parte de la Cruz de Plazas, pero no son el mismo lugar.'
        ]
      },
      {
        heading: 'El trayecto',
        paragraphs: [
          'Desde el borde de la plaza orientado hacia la Catedral, rodea el entorno del templo y dirígete al espacio donde se ubica el Palacio de Gobierno. El recorrido es peatonal y forma parte de las rutas oficiales del centro histórico.',
          'Orientarse por los edificios suele ser más fiable que por los nombres de las calles: pide «junto al Palacio de Gobierno» si necesitas confirmar el destino.'
        ],
        steps: [
          'Sal de la plaza en dirección a la Catedral.',
          'Rodea el entorno del templo por zonas de paso permitidas.',
          'Localiza el Palacio de Gobierno y la Plaza de Armas.',
          'Regresa por el mismo corredor o enlaza con la Rotonda de los Jaliscienses Ilustres.'
        ]
      },
      {
        heading: 'Qué ver al llegar',
        paragraphs: [
          'La Plaza de Armas y su entorno concentran edificios de gobierno y son una parada habitual de las rutas del centro. Al igual que con la Liberación, observar el espacio público no implica acceder a los interiores.',
          'Consulta las condiciones de visita del Palacio de Gobierno antes de contar con él como parte del plan.'
        ]
      },
      {
        heading: 'Volver a la plaza',
        paragraphs: [
          'El regreso se hace por el mismo corredor. Si quieres alargar el paseo, la ruta de una hora une estas dos plazas y la Rotonda; la de medio día añade Plaza Tapatía.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Plaza de Armas y Plaza de la Liberación son la misma?',
        a: 'No. La primera es colonial y la segunda es una intervención del siglo XX. Ambas están en la Cruz de Plazas, pero son espacios distintos.'
      },
      {
        q: '¿Se llega caminando?',
        a: 'Sí. Es un trayecto peatonal corto dentro del centro histórico; confirma desvíos por obras o eventos.'
      },
      {
        q: '¿Qué más hay cerca?',
        a: 'El Palacio de Gobierno y la Rotonda de los Jaliscienses Ilustres aparecen en las rutas oficiales de esta zona del centro.'
      }
    ],
    related: ['cruz-de-plazas', 'palacio-de-gobierno', 'catedral-guadalajara-a-pie', 'ruta-una-hora', 'historia'],
    sources: ['rutaCentro', 'turismoPlaza', 'guiaArquitectonica']
  },
  {
    num: 22,
    slug: 'rotonda-jaliscienses-ilustres',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'Rotonda de los Ilustres',
    cardText: 'Cómo incluir la Rotonda de los Jaliscienses Ilustres en un paseo desde la plaza.',
    title: 'Ruta a la Rotonda de los Jaliscienses Ilustres desde la plaza',
    description: 'Cómo incluir la Rotonda de los Jaliscienses Ilustres en un paseo desde la Plaza de la Liberación por el centro histórico de Guadalajara.',
    h1: 'Ruta a la Rotonda de los Jaliscienses Ilustres',
    lead: 'Una parada de lectura cívica que encaja bien en un recorrido de una hora por el centro histórico.',
    keywords: 'Rotonda de los Jaliscienses Ilustres, ruta desde Plaza de la Liberación, Guadalajara centro',
    startPoint: 'Plaza de la Liberación, borde hacia la Catedral',
    sections: [
      {
        heading: 'Qué es la Rotonda',
        paragraphs: [
          'La Rotonda de los Jaliscienses Ilustres es un conjunto conmemorativo del centro de Guadalajara dedicado a personajes destacados de Jalisco. Aparece en las rutas oficiales del Centro Histórico junto a la Catedral, Plaza de Armas y el Palacio de Gobierno.',
          'No enumeramos aquí las esculturas ni su número: para un inventario conviene consultar las fichas de patrimonio y la señalización del lugar.'
        ]
      },
      {
        heading: 'Cómo llegar desde la plaza',
        paragraphs: [
          'El recorrido se hace por el mismo corredor peatonal que lleva a la Catedral y a Plaza de Armas. Toma el templo como primera referencia y continúa hacia el conjunto de gobierno; la Rotonda se integra en esa zona.',
          'Si hay un evento o una obra, puede aparecer un desvío. Acepta un rodeo breve en lugar de cruzar zonas acordonadas.'
        ],
        steps: [
          'Sal de la plaza en dirección a la Catedral.',
          'Avanza hacia el entorno de Plaza de Armas y el Palacio de Gobierno.',
          'Localiza la Rotonda y recorre su perímetro.',
          'Vuelve por la plaza o continúa hacia el Teatro Degollado.'
        ]
      },
      {
        heading: 'Cómo visitarla',
        paragraphs: [
          'Es un espacio de observación exterior y de paso: no requiere boleto según el recorrido peatonal habitual, pero no garantizamos el acceso a todas las zonas en todo momento.',
          'Respeta las barreras y no subas a los monumentos. Para fotografía con equipo profesional, consulta antes la normativa.'
        ],
        note: 'No confirmamos horarios, cierres ni el estado de cada elemento. Verifica la señalización en sitio.'
      },
      {
        heading: 'Encajarla en un plan',
        paragraphs: [
          'Funciona como segunda o tercera parada de la ruta de una hora. Si además quieres ver Plaza Tapatía y algún interior, pasa al plan de medio día.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La Rotonda está dentro de la Plaza de la Liberación?',
        a: 'No. Es otro punto del centro histórico, cercano pero independiente, incluido en las rutas oficiales de la zona.'
      },
      {
        q: '¿Cuántas esculturas hay?',
        a: 'No damos una cifra. Consulta las fichas de patrimonio y la señalización del conjunto para un inventario fiable.'
      },
      {
        q: '¿Se puede combinar con la plaza en una sola visita?',
        a: 'Sí. La ruta de una hora une la plaza, la Catedral, Plaza de Armas y la Rotonda sin depender de horarios de interiores.'
      }
    ],
    related: ['catedral-guadalajara-a-pie', 'plaza-de-armas-a-pie', 'ruta-una-hora', 'esculturas-y-monumentos', 'ruta-medio-dia'],
    sources: ['rutaCentro', 'turismoPlaza', 'visitJalisco']
  },
  {
    num: 23,
    slug: 'palacio-de-gobierno',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'Palacio de Gobierno',
    cardText: 'Relación entre el edificio y los nombres de la plaza, y cómo acercarse desde el espacio abierto.',
    title: 'Plaza de la Liberación y Palacio de Gobierno de Jalisco',
    description: 'Qué relación hay entre la Plaza de la Liberación y el Palacio de Gobierno de Jalisco, y cómo acercarse al edificio desde la plaza.',
    h1: 'Plaza de la Liberación y Palacio de Gobierno de Jalisco',
    lead: 'Es el edificio que mejor explica la denominación local de Plaza de los Tres Poderes.',
    keywords: 'Palacio de Gobierno de Jalisco, Plaza de la Liberación, Tres Poderes, Guadalajara',
    startPoint: 'Plaza de la Liberación, borde hacia la Catedral y Plaza de Armas',
    sections: [
      {
        heading: 'Por qué aparece aquí',
        paragraphs: [
          'El Palacio de Gobierno de Jalisco es la sede visible del Poder Ejecutivo estatal en el centro histórico. Su proximidad al conjunto de plazas explica que la Liberación recibiera también el nombre de Plaza de los Tres Poderes.',
          'Aparece de forma constante en las rutas oficiales del centro histórico junto con la Catedral, Plaza de Armas y la Rotonda de los Jaliscienses Ilustres.'
        ],
        note: 'No afirmamos qué otros edificios corresponden a los poderes Legislativo y Judicial sin una ficha oficial actualizada.'
      },
      {
        heading: 'Cómo acercarse desde la plaza',
        paragraphs: [
          'El acceso se hace por el corredor peatonal que rodea la Catedral en dirección a Plaza de Armas. Es el mismo trayecto de la guía hacia Plaza de Armas, por lo que ambas paradas se combinan sin rodeos.',
          'Orientarse por el edificio de gobierno es una buena forma de confirmar que no estás en la plaza equivocada.'
        ],
        steps: [
          'Sal de la plaza hacia la Catedral.',
          'Continúa hacia Plaza de Armas.',
          'Identifica el Palacio de Gobierno desde el espacio público.',
          'Regresa a la plaza o enlaza con la Rotonda de los Ilustres.'
        ]
      },
      {
        heading: 'Visitar el interior',
        paragraphs: [
          'Las condiciones de acceso a un edificio de gobierno —horarios, recorridos visitables, restricciones y requisitos— las define la institución responsable. Esta guía no las da por supuestas.',
          'Confirma antes de incluir el interior en tu plan; la ruta de medio día deja esa parada como opcional precisamente por este motivo.'
        ]
      },
      {
        heading: 'Qué se ve desde fuera',
        paragraphs: [
          'La fachada y su relación con la Plaza de Armas bastan para entender el papel del edificio en el conjunto. Es una parada de observación, no una visita guiada.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿El Palacio de Gobierno está junto a la Plaza de la Liberación?',
        a: 'Está en el entorno inmediato del conjunto de plazas del centro, más asociado a Plaza de Armas. Se llega a pie en pocos minutos desde la Liberación.'
      },
      {
        q: '¿Se puede entrar libremente?',
        a: 'No lo garantizamos. El acceso a interiores depende de las condiciones que defina la institución; consúltalas antes de ir.'
      },
      {
        q: '¿Por eso se habla de «Tres Poderes»?',
        a: 'El nombre alude a la concentración de sedes de los poderes públicos en el centro histórico, con el Palacio de Gobierno como referencia más visible.'
      }
    ],
    related: ['plaza-tres-poderes', 'plaza-de-armas-a-pie', 'historia', 'ruta-medio-dia', 'fotografia'],
    sources: ['rutaCentro', 'turismoPlaza', 'visitJalisco']
  },
  {
    num: 24,
    slug: 'plaza-tapatia',
    group: 'nearby',
    priority: 'P1',
    cardTitle: 'A Plaza Tapatía a pie',
    cardText: 'Cómo continuar por el corredor peatonal hacia el oriente del centro histórico.',
    title: 'De la Plaza de la Liberación a Plaza Tapatía a pie',
    description: 'Cómo continuar el paseo desde la Plaza de la Liberación hacia Plaza Tapatía por el corredor peatonal del centro histórico.',
    h1: 'De la Plaza de la Liberación a Plaza Tapatía',
    lead: 'Es la prolongación natural del paseo hacia el oriente del conjunto, más allá del Teatro Degollado.',
    keywords: 'Plaza de la Liberación a Plaza Tapatía, corredor peatonal, centro histórico Guadalajara',
    startPoint: 'Borde de la plaza orientado hacia el Teatro Degollado',
    sections: [
      {
        heading: 'Un corredor, no otra plaza aislada',
        paragraphs: [
          'La guía arquitectónica de Cultura Jalisco y las rutas oficiales describen la Plaza Tapatía como parte de la misma lectura urbana de la Cruz de Plazas: una prolongación peatonal que continúa el espacio abierto hacia el oriente del centro.',
          'Recorrerla ayuda a entender que la Liberación no termina en sí misma, sino que conecta varios nodos del centro histórico.'
        ]
      },
      {
        heading: 'El trayecto desde la plaza',
        paragraphs: [
          'Toma como referencia el Teatro Degollado y continúa más allá de su fachada por el corredor peatonal. El recorrido es llano y se hace a pie; no requiere transporte.',
          'Confirma desvíos si hay un evento o una obra: las zonas acordonadas pueden obligar a rodear parte del corredor.'
        ],
        steps: [
          'Sal de la plaza en dirección al Teatro Degollado.',
          'Observa la fachada y continúa por el corredor peatonal.',
          'Avanza hacia Plaza Tapatía sin depender de horarios de recintos.',
          'Vuelve por el mismo eje o enlaza con la ruta de medio día.'
        ]
      },
      {
        heading: 'Qué encontrarás',
        paragraphs: [
          'Espacio público, vistas de edificios del centro y un recorrido que suele combinarse con el teatro y con la propia plaza. No enumeramos comercios, fuentes en funcionamiento ni instalaciones concretas: su estado cambia.',
          'Si buscas dónde comer o descansar, las guías de comida y cafés explican cómo verificar opciones sin depender de un listado desactualizado.'
        ],
        note: 'No damos por hecho el funcionamiento de fuentes ni la disponibilidad de servicios a lo largo del corredor.'
      },
      {
        heading: 'Cómo volver',
        paragraphs: [
          'El regreso se hace por el mismo eje hasta la plaza. Desde ahí puedes retomar la ruta de una hora, acercarte a la Catedral o terminar en el punto de descenso acordado.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Plaza Tapatía forma parte de la Cruz de Plazas?',
        a: 'Sí, aparece en las descripciones del conjunto de plazas del centro histórico como prolongación peatonal del mismo proyecto urbano.'
      },
      {
        q: '¿Se llega caminando desde la Plaza de la Liberación?',
        a: 'Sí. Se continúa a pie pasando por el entorno del Teatro Degollado; es un recorrido peatonal del centro.'
      },
      {
        q: '¿Hay que pagar para recorrerla?',
        a: 'El espacio público se recorre a pie; no publicamos tarifas de ninguna actividad concreta. Confirma cualquier cobro con su organizador.'
      }
    ],
    related: ['teatro-degollado-a-pie', 'cruz-de-plazas', 'arquitectura-urbana', 'ruta-medio-dia', 'donde-comer-cerca'],
    sources: ['guiaArquitectonica', 'rutaCentro', 'turismoPlaza']
  }
];
