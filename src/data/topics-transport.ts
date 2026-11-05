import type { Topic } from './topic-types';

/** B. Transporte y llegada (07–12, P0). */
export const TOPICS_TRANSPORT: Topic[] = [
  {
    num: 7,
    slug: 'transporte-publico',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Transporte público',
    cardText: 'Panorama de tren ligero y autobús, y por qué hay que reconfirmar líneas, paradas y obras.',
    title: 'Cómo llegar en transporte público a la Plaza de la Liberación',
    description: 'Opciones de transporte público para llegar a la Plaza de la Liberación: tren ligero, autobús y último tramo a pie, con verificación de líneas y obras.',
    h1: 'Llegar en transporte público a la Plaza de la Liberación',
    lead: 'La plaza está dentro del centro histórico: el transporte te deja cerca y el último tramo se hace caminando.',
    keywords: 'transporte público Plaza de la Liberación, SITEUR, tren ligero, autobús Guadalajara Centro',
    sections: [
      {
        heading: 'Tren ligero y estaciones próximas',
        paragraphs: [
          'Las fichas turísticas de Visit Jalisco mencionan estaciones como Guadalajara Centro y Plaza Universidad como referencias del centro histórico. Desde cualquiera de ellas, el acceso final a la plaza es peatonal.',
          'No publicamos números de línea, correspondencias, horarios de primera y última salida ni tarifas: son datos operativos que cambian y que deben consultarse en el planificador oficial de SITEUR el día del viaje.'
        ],
        note: 'Verifica también el estado de las salidas de la estación: las obras y los cierres viales del centro pueden modificar el tramo peatonal.'
      },
      {
        heading: 'Autobús urbano',
        paragraphs: [
          'Las rutas que atraviesan la Zona Centro dejan puntos de descenso desde los que se llega a pie a la plaza. Conviene usar el planificador oficial o la aplicación del operador para elegir la parada, en lugar de fiarse de una ruta recordada de otra visita.',
          'Si viajas con personas con movilidad reducida, confirma además las condiciones de la parada y del trayecto hasta la plaza.'
        ]
      },
      {
        heading: 'El tramo final a pie',
        paragraphs: [
          'Una vez en el centro, la Catedral y el Teatro Degollado sirven como referencias visuales: la plaza se encuentra entre ambos. Orientarse por esos dos edificios suele ser más fiable que buscar un número de calle concreto.',
          'Calcula unos minutos adicionales si hay un evento o un desvío peatonal. La guía «Desde Guadalajara Centro» detalla ese último tramo.'
        ]
      },
      {
        heading: 'Comprobaciones antes de salir',
        bullets: [
          'Confirma líneas, paradas y horarios en la fuente oficial del operador.',
          'Revisa avisos de obras, cierres y eventos en el centro histórico.',
          'Lleva el Plus Code MMG3+RM o la referencia de Maps para orientarte al bajar.',
          'Si el grupo necesita una ruta sin escalones, consulta primero la guía de accesibilidad.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué estación queda más cerca de la Plaza de la Liberación?',
        a: 'Las fichas turísticas mencionan Guadalajara Centro y Plaza Universidad como referencias del centro. No fijamos una «estación oficial» ni distancias exactas: confirma líneas y salidas en el planificador de SITEUR.'
      },
      {
        q: '¿Cuánto cuesta el transporte público?',
        a: 'No publicamos tarifas. Los precios y las formas de pago cambian; consúltalos en los canales oficiales del operador antes de viajar.'
      },
      {
        q: '¿El autobús llega hasta la puerta de la plaza?',
        a: 'No hay una puerta única verificada. El transporte deja en puntos cercanos del centro y el tramo final se hace a pie.'
      }
    ],
    related: ['desde-guadalajara-centro', 'como-llegar', 'accesibilidad', 'llegar-en-taxi-o-app', 'estacionamiento'],
    sources: ['visitJalisco', 'turismoPlaza', 'maps']
  },
  {
    num: 8,
    slug: 'desde-guadalajara-centro',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Desde Guadalajara Centro',
    cardText: 'El último tramo desde la estación: salidas, orientación por la Catedral y obras a confirmar.',
    title: 'De Guadalajara Centro a la Plaza de la Liberación a pie',
    description: 'Cómo hacer el último tramo desde la estación Guadalajara Centro hasta la Plaza de la Liberación: salidas, orientación y obras que conviene confirmar.',
    h1: 'De Guadalajara Centro a la Plaza de la Liberación',
    lead: 'Esta página resuelve una sola cosa: el último tramo entre la estación Guadalajara Centro y la plaza.',
    keywords: 'Guadalajara Centro a Plaza de la Liberación, estación Guadalajara Centro, caminar desde la estación',
    startPoint: 'Salida de la estación Guadalajara Centro, en la Zona Centro',
    sections: [
      {
        heading: 'La estación como punto de partida',
        paragraphs: [
          'Las fichas de turismo estatal citan Guadalajara Centro entre las estaciones de referencia del centro histórico. Es un punto de llegada práctico porque sitúa al visitante ya dentro de la zona peatonal de interés.',
          'No indicamos un número de salida concreto: las salidas habilitadas, sus nombres y su estado pueden cambiar por obras. Consulta el plano de la estación y la señalización el día de la visita.'
        ],
        note: 'Las líneas, los horarios y el estado de las salidas no se verifican en esta guía. Confírmalos en el planificador oficial de SITEUR.'
      },
      {
        heading: 'Orientarse al salir',
        paragraphs: [
          'En lugar de buscar de entrada C. Pedro Loza 27A, conviene orientarse por los dos grandes volúmenes del conjunto: la Catedral Metropolitana y el Teatro Degollado. La Plaza de la Liberación está entre ambos.',
          'Si usas un mapa, el Plus Code MMG3+RM y las coordenadas 20.677015, −103.3457694 ayudan a fijar el punto, pero no identifican una entrada verificada.'
        ],
        steps: [
          'Al salir, identifica la dirección general de la Catedral y del Teatro Degollado.',
          'Avanza por las calles del centro hacia el espacio abierto situado entre ambos.',
          'Localiza el monumento a Miguel Hidalgo y las dos fuentes como confirmación de que estás en la plaza.',
          'Elige después si continúas hacia Plaza de Armas o hacia Plaza Tapatía.'
        ]
      },
      {
        heading: 'Obras, eventos y desvíos',
        paragraphs: [
          'El centro histórico tiene obras viales y montajes de eventos con frecuencia. Un desvío puede alargar el tramo peatonal o cambiar la calle por la que se accede a la plaza, sin que ello signifique que la plaza esté cerrada.',
          'Revisa los avisos municipales si tu visita depende de un horario ajustado.'
        ]
      },
      {
        heading: 'Si prefieres otra referencia de llegada',
        paragraphs: [
          'Plaza Universidad aparece también en las fichas turísticas del centro. Comparar ambas opciones en el planificador oficial puede ser útil según desde dónde vengas. Para el panorama completo de transporte, consulta la guía general de transporte público.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto se camina desde Guadalajara Centro?',
        a: 'No publicamos minutos exactos: dependen de la salida, del paso y de los desvíos. El tramo es peatonal y corto dentro del centro histórico.'
      },
      {
        q: '¿Qué salida de la estación debo usar?',
        a: 'No la indicamos. Las salidas habilitadas pueden cambiar por obras; consulta el plano oficial de la estación y la señalización del día.'
      },
      {
        q: '¿Es la mejor estación para llegar?',
        a: 'Es una referencia habitual en las fichas de turismo, pero no la única. Plaza Universidad también se cita; compara ambas en el planificador oficial según tu punto de partida.'
      }
    ],
    related: ['transporte-publico', 'como-llegar', 'accesibilidad', 'ruta-30-minutos', 'llegar-en-taxi-o-app'],
    sources: ['visitJalisco', 'maps', 'rutaCentro']
  },
  {
    num: 9,
    slug: 'estacionamiento',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Estacionamiento',
    cardText: 'Cómo buscar lugar cerca del centro y por qué no damos tarifas, cupo ni horarios como vigentes.',
    title: 'Dónde estacionar cerca de la Plaza de la Liberación',
    description: 'Cómo buscar estacionamiento cerca de la Plaza de la Liberación en el centro de Guadalajara y por qué no publicamos tarifas ni cupo confirmados.',
    h1: 'Dónde estacionar cerca de la Plaza de la Liberación',
    lead: 'Llegar en auto al centro exige decidir antes dónde dejarlo. Esta guía explica cómo verificarlo, no promete un lugar disponible.',
    keywords: 'estacionamiento Plaza de la Liberación, parking centro Guadalajara, estacionamiento Tres Poderes',
    sections: [
      {
        heading: 'Empieza por el directorio municipal',
        paragraphs: [
          'El Gobierno de Guadalajara publica un directorio de estacionamientos municipales con fichas por zona, incluida la del Centro. Es la referencia más adecuada para identificar qué inmuebles existen y dónde se ubican.',
          'Ese directorio no equivale a una confirmación de cupo, tarifa u horario del día de tu visita. Verifica cada dato con el operador antes de conducir hasta allí.'
        ],
        note: 'No publicamos precios, número de cajones ni horarios de apertura: son datos que cambian y que una ficha antigua puede mostrar desactualizados.'
      },
      {
        heading: 'El caso del estacionamiento Tres Poderes',
        paragraphs: [
          'CoST-Jalisco documenta una obra de refuerzo estructural del estacionamiento subterráneo Tres Poderes, con una actualización de ficha del 21 de octubre de 2026. El nombre coincide con uno de los apodos históricos de la plaza, pero eso no acredita su operación.',
          'Una ficha de obra no confirma que el estacionamiento esté abierto hoy, ni su tarifa, ni su capacidad, ni cuál de sus entradas está habilitada. Confírmalo directamente con el operador.'
        ]
      },
      {
        heading: 'Antes de conducir al centro',
        bullets: [
          'Elige el estacionamiento por su ubicación y verifica la entrada habilitada.',
          'Confirma tarifa, horario, formas de pago y cupo el mismo día.',
          'Revisa avisos de cierres viales y eventos en la Zona Centro.',
          'Ten en cuenta que del estacionamiento a la plaza habrá un tramo a pie.'
        ]
      },
      {
        heading: 'Alternativas sin auto',
        paragraphs: [
          'Si no quieres depender de un cajón, el tren ligero, el autobús o un taxi/app evitan la búsqueda de lugar y dejan el recorrido final a pie. Son las opciones que desarrollan las guías de transporte público y de llegada en taxi o aplicación.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay estacionamiento debajo de la Plaza de la Liberación?',
        a: 'Existe un estacionamiento subterráneo asociado al nombre Tres Poderes, documentado en una ficha de obra de CoST-Jalisco. No confirmamos que esté operando, ni su tarifa, ni sus accesos.'
      },
      {
        q: '¿Cuánto cuesta estacionar en el centro?',
        a: 'No publicamos tarifas. Consulta el directorio municipal y confirma el precio vigente con el operador el día de la visita.'
      },
      {
        q: '¿Puedo dejar el auto junto a la plaza?',
        a: 'No lo garantizamos. La Zona Centro tiene restricciones y cierres por eventos; identifica un estacionamiento concreto antes de llegar.'
      }
    ],
    related: ['como-llegar', 'llegar-en-taxi-o-app', 'transporte-publico', 'accesibilidad', 'desde-aeropuerto'],
    sources: ['estacionamientos', 'costEstacionamiento', 'maps']
  },
  {
    num: 10,
    slug: 'desde-aeropuerto',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Desde el aeropuerto',
    cardText: 'Opciones de traslado desde el aeropuerto de Guadalajara y qué confirmar sobre tiempos y tarifas.',
    title: 'Del aeropuerto de Guadalajara a la Plaza de la Liberación',
    description: 'Opciones para ir del Aeropuerto Internacional de Guadalajara a la Plaza de la Liberación y qué confirmar sobre traslados, tarifas y horarios.',
    h1: 'Del aeropuerto de Guadalajara a la Plaza de la Liberación',
    lead: 'El aeropuerto está fuera del centro histórico: conviene elegir el traslado antes de aterrizar y dejar margen para el tráfico.',
    keywords: 'aeropuerto de Guadalajara a Plaza de la Liberación, GDL al centro, traslado aeropuerto Guadalajara',
    sections: [
      {
        heading: 'Dónde está el aeropuerto',
        paragraphs: [
          'El Aeropuerto Internacional de Guadalajara «Miguel Hidalgo y Costilla» (GDL) se encuentra en el área metropolitana, en el municipio de Tlajomulco, al sur de la ciudad. No está en la Zona Centro.',
          'No publicamos distancias exactas ni tiempos de traslado: dependen del tráfico, de la hora y de la opción elegida. Consulta el estado del trayecto el día del vuelo.'
        ],
        note: 'No damos tarifas de taxi, aplicaciones ni transporte público. Todas son variables y deben confirmarse en los puntos oficiales del aeropuerto.'
      },
      {
        heading: 'Opciones de traslado',
        bullets: [
          'Taxi autorizado del aeropuerto: se contrata en los módulos oficiales de la terminal.',
          'Transporte por aplicación: requiere confirmar el punto de recogida habilitado en la terminal.',
          'Transporte público: puede implicar transbordos y un tramo final a pie; verifica rutas y horarios.',
          'Auto de alquiler: implica resolver además el estacionamiento en el centro.'
        ]
      },
      {
        heading: 'Si llegas de noche o con poco margen',
        paragraphs: [
          'Los horarios de última salida y la disponibilidad de servicios cambian. Si tu llegada es nocturna, confirma antes qué opciones operan a esa hora y cómo llegarás desde el punto de descenso hasta la plaza.',
          'Para la visita nocturna en sí, consulta la guía correspondiente: esta guía no garantiza iluminación ni seguridad del recorrido.'
        ]
      },
      {
        heading: 'Al llegar al centro',
        paragraphs: [
          'Pide como referencia la Plaza de la Liberación, el Plus Code MMG3+RM o la zona entre la Catedral y el Teatro Degollado. No existe una puerta única verificada: acuerda con el conductor un punto de descenso y termina a pie.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo se tarda del aeropuerto a la plaza?',
        a: 'No damos una cifra fija. El tiempo depende del tráfico, la hora y el medio elegido; consulta una ruta en tiempo real antes de salir.'
      },
      {
        q: '¿Hay transporte público directo a la Plaza de la Liberación?',
        a: 'No lo confirmamos. Las opciones pueden requerir transbordos y un tramo peatonal final; verifica rutas y horarios en los canales oficiales.'
      },
      {
        q: '¿Dónde se toma el taxi autorizado?',
        a: 'En los módulos oficiales de la terminal. Confirma allí tarifas y zonas de servicio; esta guía no publica precios.'
      }
    ],
    related: ['llegar-en-taxi-o-app', 'transporte-publico', 'como-llegar', 'estacionamiento', 'visitar-de-noche'],
    sources: ['visitJalisco', 'secturJalisco', 'maps']
  },
  {
    num: 11,
    slug: 'llegar-en-taxi-o-app',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Taxi o aplicación',
    cardText: 'Qué referencia dar al conductor y cómo elegir un punto de descenso sin depender de una puerta única.',
    title: 'Llegar en taxi o app a la Plaza de la Liberación',
    description: 'Qué referencia dar al conductor y dónde conviene bajarse para llegar a la Plaza de la Liberación sin depender de una puerta única.',
    h1: 'Llegar en taxi o aplicación a la Plaza de la Liberación',
    lead: 'El problema habitual no es encontrar la plaza, sino acordar dónde termina el viaje: el espacio es abierto y no tiene una entrada única verificada.',
    keywords: 'taxi Plaza de la Liberación, Uber Plaza Liberación, punto de descenso Guadalajara Centro',
    sections: [
      {
        heading: 'La referencia que sí conocemos',
        paragraphs: [
          'Puedes indicar «Plaza de la Liberación, entre la Catedral y el Teatro Degollado», el Plus Code MMG3+RM o la referencia de Maps C. Pedro Loza 27A, Zona Centro, 44100. Las coordenadas aproximadas son 20.677015, −103.3457694.',
          'La dirección de Maps es una referencia de ubicación, no una puerta verificada. Si la aplicación propone un punto de descenso, revísalo en el mapa antes de confirmar el viaje.'
        ],
        note: 'No hay una «entrada principal» acreditada por esta guía. Un punto de descenso concreto puede quedar a varias calles del centro del espacio.'
      },
      {
        heading: 'Dónde pedir la bajada',
        paragraphs: [
          'Conviene elegir una vía transitada del borde del conjunto desde la que se vea la plaza, en lugar de intentar llegar hasta el monumento. Desde ahí el tramo final es peatonal y permite orientarse con calma.',
          'Si viajas con personas con movilidad reducida, consulta antes la guía de accesibilidad: no hemos verificado una ruta sin escalones.'
        ],
        steps: [
          'Comparte la referencia o el Plus Code en la aplicación.',
          'Revisa el punto de descenso propuesto y muévelo a una vía del borde si hace falta.',
          'Al bajar, identifica la Catedral y el Teatro Degollado.',
          'Camina hacia el espacio abierto situado entre ambos.'
        ]
      },
      {
        heading: 'Eventos y vialidades',
        paragraphs: [
          'Durante actos públicos, obras o cierres, es habitual que el vehículo no pueda acercarse tanto como indica el mapa. Acepta un descenso algo más lejano y calcula el tramo a pie.',
          'Revisa los avisos municipales si tu visita tiene un horario ajustado; esta guía no confirma cierres en tiempo real.'
        ]
      },
      {
        heading: 'Tarifas y servicios',
        paragraphs: [
          'No publicamos precios ni comparamos operadores. Las tarifas, los puntos de recogida y las condiciones del servicio los define cada operador o la autoridad correspondiente.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué dirección le doy al conductor?',
        a: '«Plaza de la Liberación, entre la Catedral y el Teatro Degollado» suele ser más útil que un número de calle. Como apoyo, el Plus Code MMG3+RM o la referencia C. Pedro Loza 27A.'
      },
      {
        q: '¿El taxi puede dejarme en la misma plaza?',
        a: 'No lo garantizamos. Es un espacio abierto sin una entrada única verificada y puede haber cierres por eventos u obras; cuenta con un tramo final a pie.'
      },
      {
        q: '¿Cuánto cuesta el viaje desde el aeropuerto?',
        a: 'No publicamos tarifas. Consúltalas en los módulos autorizados de la terminal o en la aplicación antes de confirmar.'
      }
    ],
    related: ['como-llegar', 'estacionamiento', 'accesibilidad', 'desde-aeropuerto', 'transporte-publico'],
    sources: ['maps', 'visitJalisco', 'turismoPlaza']
  },
  {
    num: 12,
    slug: 'accesibilidad',
    group: 'transport',
    priority: 'P0',
    cardTitle: 'Accesibilidad',
    cardText: 'Pavimento, rampas, bancos y baños: qué revisar y por qué no afirmamos una ruta totalmente accesible.',
    title: 'Accesibilidad de la Plaza de la Liberación | Guadalajara',
    description: 'Qué verificar sobre pavimento, rampas, bancos y baños en la Plaza de la Liberación; no afirmamos una ruta completamente accesible.',
    h1: 'Accesibilidad de la Plaza de la Liberación',
    lead: 'Un espacio abierto no es automáticamente accesible. Esta guía explica qué comprobar antes de ir, sin certificar una ruta.',
    keywords: 'accesibilidad Plaza de la Liberación, silla de ruedas, rampas, movilidad reducida Guadalajara',
    sections: [
      {
        heading: 'Por qué no damos una garantía',
        paragraphs: [
          'No hemos verificado una ruta completa sin escalones ni el estado actual de rampas, bancos, baños accesibles o pavimento en todo el perímetro. Publicar «totalmente accesible» sin esa comprobación sería engañoso.',
          'Además, una plaza en el centro histórico puede tener desniveles, bordillos y obras temporales que cambian de un tramo a otro.'
        ],
        note: 'Si tu visita depende de un requisito concreto de movilidad, consulta directamente con el Ayuntamiento o con el recinto que quieras visitar antes de desplazarte.'
      },
      {
        heading: 'Lista de verificación en sitio',
        bullets: [
          'Pavimento: continuidad, desniveles, bordillos y posibles obras.',
          'Rampas y cruces: dónde están y si están habilitados ese día.',
          'Descanso: existencia y ubicación de bancos o zonas de sombra.',
          'Baños: no garantizamos sanitarios accesibles ni su horario.',
          'Señalización y barreras durante eventos o mantenimiento.'
        ]
      },
      {
        heading: 'Los recintos tienen sus propias condiciones',
        paragraphs: [
          'Catedral, Teatro Degollado y otros edificios del entorno gestionan sus accesos, rampas y visitas de forma independiente. Que la plaza sea un espacio público no implica que todos sus interiores sean accesibles.',
          'Para una función teatral o una visita cultural, pregunta por accesos, asientos y asistencia concretos al organizador.'
        ]
      },
      {
        heading: 'Llegada y transporte',
        paragraphs: [
          'Revisa también el tramo desde la estación o el punto de descenso hasta la plaza: es ahí donde suelen aparecer los obstáculos menos previstos. Las guías de transporte público y de taxi o aplicación recogen ese último tramo.',
          'Un recorrido corto con pausas suele ser más cómodo que intentar cubrir todo el centro histórico de una vez.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La Plaza de la Liberación es accesible en silla de ruedas?',
        a: 'No lo certificamos. No hemos verificado una ruta completa sin escalones ni el estado de rampas, pavimento y baños. Consulta cada tramo antes de salir.'
      },
      {
        q: '¿Hay baños accesibles y bancos?',
        a: 'No garantizamos su existencia, ubicación ni disponibilidad. Identifícalos al llegar y ajusta el paseo a lo que encuentres.'
      },
      {
        q: '¿Los edificios del entorno son accesibles?',
        a: 'Cada recinto define sus propias condiciones. Pregunta al organizador o al responsable de la visita por rampas, accesos y apoyos disponibles.'
      }
    ],
    related: ['para-adultos-mayores', 'con-ninos', 'transporte-publico', 'como-llegar', 'horarios-y-acceso'],
    sources: ['turismoPlaza', 'rutaCentro', 'visitJalisco']
  }
];
