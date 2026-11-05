import type { Topic } from './topic-types';

/** F. Comida, eventos y preguntas (31–36, P2). */
export const TOPICS_PRACTICAL: Topic[] = [
  {
    num: 31,
    slug: 'donde-comer-cerca',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Dónde comer cerca',
    cardText: 'Cómo elegir zona en el centro sin inventar locales, precios ni horarios.',
    title: 'Dónde comer cerca de la Plaza de la Liberación',
    description: 'Cómo elegir dónde comer cerca de la Plaza de la Liberación en el centro de Guadalajara sin inventar locales, precios ni horarios.',
    h1: 'Dónde comer cerca de la Plaza de la Liberación',
    lead: 'El centro tiene muchas opciones, pero cambian constantemente. Esta guía ayuda a elegir zona y a verificar, no a dar una lista cerrada.',
    keywords: 'dónde comer cerca de Plaza de la Liberación, restaurantes centro Guadalajara, comida centro histórico',
    sections: [
      {
        heading: 'Zonas a considerar',
        paragraphs: [
          'En lugar de buscar un local por su nombre, conviene decidir primero por dónde vas a caminar: el corredor entre la plaza y la Catedral, el entorno de Plaza de Armas, la zona del Teatro Degollado o la prolongación hacia Plaza Tapatía.',
          'Elegir por zona permite ajustar la comida al plan que ya tienes, sin desviarte ni depender de un establecimiento que pudo cerrar.'
        ],
        bullets: [
          'Hacia Plaza de Armas y el Palacio de Gobierno: útil si vienes de la ruta de una hora.',
          'Hacia el Teatro Degollado y Plaza Tapatía: encaja con la ruta de medio día.',
          'Calles del borde de la Zona Centro: opciones a pocos pasos de la plaza.'
        ],
        note: 'No nombramos restaurantes, no damos calificaciones ni precios y no publicamos horarios: son datos que cambian y que no hemos verificado en sitio.'
      },
      {
        heading: 'Cómo verificar un local',
        bullets: [
          'Consulta la ficha actualizada en un mapa y su fecha de información.',
          'Confirma horario, días de cierre y si requiere reserva.',
          'Comprueba el precio y las formas de pago directamente con el establecimiento.',
          'Si necesitas accesibilidad, terraza o menú específico, pregunta antes.',
          'Revisa que la ubicación esté realmente en tu recorrido a pie.'
        ]
      },
      {
        heading: 'Comer con niños o con poco tiempo',
        paragraphs: [
          'Si vas con niños, prioriza un lugar cercano al punto de encuentro y evita alargar el trayecto. Si tienes solo 30 minutos, come antes o después de la ruta corta en lugar de interrumpirla.',
          'Para una pausa más breve, la guía de cafés se centra en descanso y verificaciones de terraza y horario.'
        ]
      },
      {
        heading: 'Lo que esta guía no publica',
        paragraphs: [
          'No elaboramos rankings, no reproducimos opiniones de terceros y no afirmamos que un local esté abierto. La calificación de 4,7/5 y 14.451 reseñas que aparece en esta web corresponde a la ficha de Google Maps de la plaza, no a ningún establecimiento.',
          'Verifica siempre con el propio negocio o con fuentes oficiales antes de desplazarte.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Recomendáis algún restaurante concreto?',
        a: 'No. No nombramos locales ni damos precios, horarios o calificaciones, porque no los hemos verificado y cambian con frecuencia.'
      },
      {
        q: '¿Hay opciones a poca distancia a pie?',
        a: 'El centro histórico concentra opciones de comida en varias de las zonas del recorrido. Elige por zona y confirma la ficha del local el mismo día.'
      },
      {
        q: '¿Los precios y horarios de la web sirven para comer?',
        a: 'No. Los únicos datos numéricos de esta guía se refieren a la ficha de Maps de la plaza; no son información de restaurantes.'
      }
    ],
    related: ['cafes-cerca', 'ruta-medio-dia', 'con-ninos', 'plaza-tapatia', 'preguntas-frecuentes'],
    sources: ['rutaCentro', 'visitJalisco', 'maps']
  },
  {
    num: 32,
    slug: 'cafes-cerca',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Cafés cerca',
    cardText: 'Cómo encontrar una pausa con terraza, horario y acceso verificados antes de ir.',
    title: 'Cafés cerca de la Plaza de la Liberación',
    description: 'Cómo encontrar un café para descansar cerca de la Plaza de la Liberación y verificar terraza, horario y accesibilidad antes de ir.',
    h1: 'Cafés cerca de la Plaza de la Liberación',
    lead: 'Una pausa a media ruta suele depender de tres cosas: que el local esté abierto, que tenga sitio y que quede en tu camino.',
    keywords: 'cafés cerca Plaza de la Liberación, café centro histórico Guadalajara, descansar terraza',
    sections: [
      {
        heading: 'Elegir por cercanía al recorrido',
        paragraphs: [
          'La Zona Centro cuenta con opciones de café en varias de las calles que rodean el conjunto de plazas. En lugar de desplazarte a un local lejano, busca uno en el eje que ya estás recorriendo: hacia Plaza de Armas, hacia el Teatro Degollado o hacia Plaza Tapatía.',
          'Así la pausa no rompe el itinerario y resulta más fácil volver al punto de encuentro.'
        ],
        note: 'No nombramos cafés ni publicamos horarios, precios o calificaciones. Verifica la ficha actualizada de cada local antes de ir.'
      },
      {
        heading: 'Qué confirmar antes de sentarte',
        bullets: [
          'Horario del día y posibles cierres por temporada.',
          'Si hay terraza o espacio interior suficiente para tu grupo.',
          'Acceso sin escalones, si alguien lo necesita.',
          'Formas de pago y precio actualizado.',
          'Si se permite permanecer con equipaje o con carreola.'
        ]
      },
      {
        heading: 'Pausas por perfil',
        paragraphs: [
          'Para una visita con adultos mayores, conviene que la pausa esté cerca de las salidas de la plaza y no al final de un tramo largo. Para una visita con niños, acuerda antes el punto de reencuentro.',
          'La ruta de medio día ya incluye una pausa deliberada; la de 30 minutos no la necesita.'
        ]
      },
      {
        heading: 'Si no encuentras sitio',
        paragraphs: [
          'Vuelve al espacio público: la plaza permite descansar sin consumir, aunque no garantizamos bancos ni sombra en cada tramo. Lleva agua si la necesitas y consulta la guía de dónde comer para una comida completa.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Recomendáis algún café en concreto?',
        a: 'No. No verificamos locales, horarios ni precios; consulta un mapa actualizado y confirma directamente con el establecimiento.'
      },
      {
        q: '¿Hay terrazas cerca de la plaza?',
        a: 'Es habitual encontrarlas en el centro, pero no garantizamos disponibilidad ni que estén operativas el día de tu visita.'
      },
      {
        q: '¿Hay baños para clientes?',
        a: 'No lo hemos verificado. Cada local define sus servicios; pregúntalo antes de contar con ellos.'
      }
    ],
    related: ['donde-comer-cerca', 'para-adultos-mayores', 'ruta-medio-dia', 'mejor-hora-para-visitar', 'accesibilidad'],
    sources: ['rutaCentro', 'visitJalisco', 'maps']
  },
  {
    num: 33,
    slug: 'eventos',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Eventos en la plaza',
    cardText: 'Dónde consultar la agenda y por qué no anunciamos actividades próximas sin confirmación.',
    title: 'Eventos en Plaza de la Liberación Guadalajara',
    description: 'Cómo consultar la agenda de eventos de la Plaza de la Liberación y por qué esta guía no anuncia actividades próximas sin confirmación.',
    h1: 'Eventos en la Plaza de la Liberación',
    lead: 'La plaza se usa con frecuencia como escenario público. Esta página explica cómo informarse, no anuncia una programación.',
    keywords: 'eventos Plaza de la Liberación Guadalajara, agenda Plaza Liberación, actividades centro histórico',
    sections: [
      {
        heading: 'Una página que hay que verificar',
        paragraphs: [
          'Las fichas de turismo estatal y municipal documentan que la plaza ha sido escenario de actividades culturales, celebraciones y actos públicos de gran formato. Eso no significa que haya un evento el día de tu visita.',
          'No publicamos fechas próximas, carteleras ni convocatorias sin una confirmación oficial fechada. Una actividad ya terminada se menciona aquí solo como antecedente general, nunca como algo por venir.'
        ],
        note: 'Contenido revisado el 4 de noviembre de 2026. Esta página no se actualiza en tiempo real: consulta siempre la agenda oficial antes de organizar el viaje.'
      },
      {
        heading: 'Dónde consultar la agenda',
        bullets: [
          'Turismo Guadalajara y su portal de rutas y lugares.',
          'Agenda cultural del Gobierno de Jalisco y Visit Jalisco.',
          'Avisos y comunicados del Ayuntamiento sobre cierres o montajes.',
          'Programación propia del Teatro Degollado para actos en el recinto.'
        ]
      },
      {
        heading: 'Tipos de actividades que suelen aparecer',
        paragraphs: [
          'Actos cívicos, programación cultural, ferias, instalaciones temporales y concentraciones. Cada una tiene un organizador distinto y condiciones de acceso propias.',
          'Si una actividad cobra entrada, la define el organizador; esta guía no confirma tarifas, aforos ni horarios.'
        ]
      },
      {
        heading: 'Cómo afectan al acceso',
        paragraphs: [
          'Un montaje puede implicar vallas, zonas reservadas, desvíos peatonales y cambios en el punto de descenso de taxis. La plaza puede seguir abierta en parte y tener áreas inaccesibles.',
          'Para decidir a qué hora ir ese día, combina la agenda oficial con la guía de mejor hora para visitar. Si el plan es nocturno, revisa también la guía de visita de noche.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay un evento en la plaza este fin de semana?',
        a: 'No lo confirmamos. Consulta la agenda de Turismo Guadalajara, del Gobierno de Jalisco y los avisos del Ayuntamiento para la fecha concreta.'
      },
      {
        q: '¿Los eventos son gratuitos?',
        a: 'No lo garantizamos. Cada actividad tiene su organizador y sus condiciones; confirma cualquier cobro antes de asistir.'
      },
      {
        q: '¿La plaza se cierra durante un evento?',
        a: 'Puede haber zonas acordonadas y desvíos sin que el espacio entero esté cerrado. Revisa la señalización y los avisos municipales del día.'
      }
    ],
    related: ['horarios-y-acceso', 'visitar-de-noche', 'mejor-hora-para-visitar', 'preguntas-frecuentes', 'teatro-degollado-a-pie'],
    sources: ['turismoPlaza', 'visitJalisco', 'secturJalisco']
  },
  {
    num: 34,
    slug: 'visitar-de-noche',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Visitar de noche',
    cardText: 'Iluminación, recintos y transporte de regreso, sin garantizar seguridad ni apertura.',
    title: 'Visitar la Plaza de la Liberación de noche',
    description: 'Qué tener en cuenta al visitar la Plaza de la Liberación de noche: iluminación, recintos, transporte de regreso y avisos, sin garantías de seguridad.',
    h1: 'Visitar la Plaza de la Liberación de noche',
    lead: 'La ficha de Maps mostraba un horario de 24 horas, pero eso no describe las condiciones reales de una visita nocturna.',
    keywords: 'Plaza de la Liberación de noche, iluminación, seguridad centro Guadalajara, horario nocturno',
    sections: [
      {
        heading: 'Qué dice —y qué no dice— el dato de 24 horas',
        paragraphs: [
          'En la consulta del 29 de octubre de 2026, Google Maps mostraba 24 horas. Es un dato de terceros sobre un espacio público, no una confirmación de iluminación, vigilancia, servicios ni de que todas las zonas estén abiertas.',
          'Esta guía no ha verificado un dispositivo policial permanente ni una iluminación completa del perímetro.'
        ],
        note: 'No garantizamos la seguridad del recorrido nocturno. Evalúa el entorno, los avisos y tu transporte de regreso antes de decidir.'
      },
      {
        heading: 'Qué cambia de noche',
        bullets: [
          'Los recintos del entorno tienen horarios propios; una fachada iluminada no implica acceso al interior.',
          'Las fuentes pueden no estar en funcionamiento.',
          'Puede haber menos servicios y menos lugares abiertos para una pausa.',
          'El punto de descenso y la ruta de regreso conviene acordarlos antes.'
        ]
      },
      {
        heading: 'Fotografía nocturna',
        paragraphs: [
          'Las fachadas de la Catedral y del Teatro Degollado son motivos habituales, pero la iluminación depende de la programación y de avisos del momento. No prometemos una hora de mejor luz.',
          'Para trípodes, equipos profesionales o drones, consulta la normativa; la guía de fotografía separa la foto de visitante de la sesión comercial.'
        ]
      },
      {
        heading: 'Planifica el regreso',
        paragraphs: [
          'Confirma horarios de transporte y, si usas taxi o aplicación, fija un punto de recogida en una vía conocida del borde de la plaza. No hay una puerta única verificada.',
          'Si hay un evento nocturno, puede haber desvíos o zonas acordonadas: revisa la agenda y los avisos municipales.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La plaza está abierta de noche?',
        a: 'Maps mostraba 24 horas en la consulta del 29 de octubre de 2026, pero es un dato de terceros. No confirmamos el acceso a todas las zonas ni los servicios nocturnos.'
      },
      {
        q: '¿Es seguro visitarla de noche?',
        a: 'No podemos garantizarlo. No hemos verificado iluminación completa ni vigilancia permanente; evalúa el entorno y planifica el regreso.'
      },
      {
        q: '¿Se puede entrar a la Catedral o al teatro por la noche?',
        a: 'Depende de cada recinto y de su agenda. Ver una fachada iluminada no equivale a acceder al interior.'
      }
    ],
    related: ['eventos', 'mejor-hora-para-visitar', 'fotografia', 'horarios-y-acceso', 'llegar-en-taxi-o-app'],
    sources: ['turismoPlaza', 'rutaCentro', 'maps']
  },
  {
    num: 35,
    slug: 'mejor-hora-para-visitar',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Mejor hora para visitar',
    cardText: 'Cómo combinar clima, afluencia y luz, distinguiendo patrones climáticos del pronóstico real.',
    title: 'Mejor hora para visitar la Plaza de la Liberación',
    description: 'Cómo elegir la hora de visita a la Plaza de la Liberación combinando clima, afluencia y luz, distinguiendo patrones climáticos del pronóstico.',
    h1: 'Mejor hora para visitar la Plaza de la Liberación',
    lead: 'No hay una hora universalmente mejor: hay tres factores que conviene separar antes de decidir.',
    keywords: 'mejor hora Plaza de la Liberación, cuándo ir Guadalajara, clima, afluencia, luz',
    sections: [
      {
        heading: 'Patrón climático y pronóstico son cosas distintas',
        paragraphs: [
          'Como orientación general, Guadalajara tiene una temporada de lluvias concentrada en los meses de verano y un resto del año más seco. Es un patrón climático, no una predicción para tu visita.',
          'Para decidir el día concreto usa el módulo de previsión de esta guía, que muestra un pronóstico de modelo para el punto fijo de la plaza, y combínalo con los avisos meteorológicos oficiales.'
        ],
        note: 'Esta guía no publica tablas de «normales de 30 años» sin estación, periodo y conjunto de datos verificables. La previsión es de un modelo, no de una estación instalada en la plaza.'
      },
      {
        heading: 'Afluencia y eventos',
        paragraphs: [
          'La afluencia cambia con fines de semana, días festivos, actos cívicos y programación cultural. Un evento puede llenar la plaza o, al contrario, acordonar parte de ella.',
          'Consulta la agenda oficial antes de elegir la hora: es más fiable que suponer que un día de diario siempre será tranquilo.'
        ]
      },
      {
        heading: 'Luz y fotografía',
        paragraphs: [
          'Si te interesa fotografiar las fachadas de la Catedral y del Teatro Degollado, la dirección de la luz cambia según la hora y la estación. No prometemos una «hora dorada» concreta.',
          'La guía de fotografía recoge los motivos y los límites; la de visita nocturna, las precauciones específicas.'
        ]
      },
      {
        heading: 'Según el tipo de visita',
        bullets: [
          'Con poco tiempo: cualquier hora con buen clima sirve para la ruta de 30 minutos.',
          'Con niños o adultos mayores: evita las horas de más calor y de mayor afluencia.',
          'Con cámara: revisa el pronóstico de nubosidad y la agenda de eventos.',
          'De noche: confirma antes transporte de regreso y condiciones del entorno.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuál es la mejor hora del día?',
        a: 'No hay una respuesta fija. Combina clima del día, afluencia prevista y luz; consulta el pronóstico y la agenda oficial antes de salir.'
      },
      {
        q: '¿Cuándo es la temporada de lluvias?',
        a: 'Como patrón general se concentran en los meses de verano, pero eso no predice un día concreto. Usa la previsión y los avisos oficiales.'
      },
      {
        q: '¿El clima de la web es una medición en la plaza?',
        a: 'No. Es una previsión de modelo para las coordenadas del lugar, no datos de una estación meteorológica instalada allí.'
      }
    ],
    related: ['visitar-de-noche', 'fotografia', 'horarios-y-acceso', 'eventos', 'ruta-30-minutos'],
    sources: ['openMeteo', 'turismoPlaza', 'maps']
  },
  {
    num: 36,
    slug: 'preguntas-frecuentes',
    group: 'practical',
    priority: 'P2',
    cardTitle: 'Preguntas frecuentes',
    cardText: 'Dudas breves que no merecen página propia: baños, mascotas, bicicletas, sombra y servicios.',
    title: 'Preguntas frecuentes sobre la Plaza de la Liberación',
    description: 'Respuestas breves a dudas prácticas sobre la Plaza de la Liberación: baños, mascotas, bicicletas, sombra y servicios, con enlaces a las guías.',
    h1: 'Preguntas frecuentes sobre la Plaza de la Liberación',
    lead: 'Reunimos aquí las dudas cortas que no tienen una guía propia. Las preguntas de fondo enlazan con su página correspondiente.',
    keywords: 'preguntas frecuentes Plaza de la Liberación, baños, mascotas, bicicletas, sombra, WiFi',
    sections: [
      {
        heading: 'Servicios y comodidades',
        paragraphs: [
          'Estas son las consultas que más se repiten y cuya respuesta honesta suele ser «verifícalo en sitio». No fabricamos servicios para que la página parezca más completa.'
        ],
        bullets: [
          'Baños: no garantizamos sanitarios públicos ni su horario.',
          'Agua y bebederos: no los hemos verificado; lleva agua si la necesitas.',
          'Bancos y sombra: no confirmamos su número ni su ubicación.',
          'WiFi público: no lo damos por disponible.',
          'Bebederos para mascotas o áreas de juego: sin verificación.'
        ]
      },
      {
        heading: 'Normas de convivencia',
        paragraphs: [
          'Sigue la señalización, respeta el paso de otras personas y no subas a monumentos, fuentes ni barreras. Para bicicletas, patinetas o equipos de filmación, consulta la normativa y los avisos del lugar antes de usarlos.',
          'La fotografía de visitante es habitual; los equipos profesionales y los drones son otro asunto y se tratan en la guía de fotografía.'
        ]
      },
      {
        heading: 'Dónde está cada respuesta larga',
        paragraphs: [
          'Esta página evita duplicar contenido: cada tema con suficiente fondo tiene su propia guía. Si tu duda es de horarios, llegada, accesibilidad o qué ver, sigue el enlace correspondiente.'
        ],
        bullets: [
          'Horarios, entrada y cierres: Horarios y acceso.',
          'Dirección, Plus Code y transporte: Cómo llegar.',
          'Movilidad, rampas y baños: Accesibilidad.',
          'Monumento y fuentes: Qué ver y sus páginas dedicadas.',
          'Comida, cafés, eventos y visita nocturna: sus guías específicas.'
        ]
      },
      {
        heading: 'Sobre esta guía',
        paragraphs: [
          'Es un proyecto editorial independiente y sin ánimo de lucro. No pertenece al Ayuntamiento ni a los recintos del entorno, y no confirma en tiempo real cierres, eventos ni servicios.',
          'La calificación de 4,7/5 y 14.451 reseñas es una consulta fechada de Google Maps del 4 de noviembre de 2026; no son reseñas recopiladas por esta web.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay baños públicos en la plaza?',
        a: 'No lo hemos verificado. No garantizamos sanitarios, su horario ni su accesibilidad; identifica el servicio concreto antes de salir.'
      },
      {
        q: '¿Se puede ir con mascotas o en bicicleta?',
        a: 'No confirmamos una normativa específica para este espacio. Respeta la señalización del día y consulta los avisos municipales si tienes una necesidad concreta.'
      },
      {
        q: '¿Hay sombra y bancos para descansar?',
        a: 'No damos por hecho su número ni su estado. Ajústate a lo que encuentres en sitio; las guías para adultos mayores y de accesibilidad indican qué comprobar.'
      },
      {
        q: '¿La plaza tiene WiFi o bebederos?',
        a: 'No lo damos por disponible. Esta guía no ha verificado esos servicios.'
      }
    ],
    related: ['horarios-y-acceso', 'como-llegar', 'accesibilidad', 'que-ver', 'donde-comer-cerca'],
    sources: ['turismoPlaza', 'maps', 'visitJalisco']
  }
];
