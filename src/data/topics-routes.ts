import type { Topic } from './topic-types';

/** E. Necesidades del visitante y rutas (25–30, P1). */
export const TOPICS_ROUTES: Topic[] = [
  {
    num: 25,
    slug: 'ruta-30-minutos',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Ruta de 30 minutos',
    cardText: 'Solo el espacio de la plaza: monumento, fuentes y fachadas inmediatas.',
    title: 'Qué ver en 30 minutos desde la Plaza de la Liberación',
    description: 'Un recorrido breve de 30 minutos centrado en la propia Plaza de la Liberación, sus fuentes, el monumento y las fachadas inmediatas.',
    h1: 'Qué ver en 30 minutos desde la Plaza de la Liberación',
    lead: 'Si solo tienes media hora, no intentes abarcar el centro: quédate en la plaza y en lo que se ve desde ella.',
    keywords: 'Plaza de la Liberación en 30 minutos, visita corta, qué ver rápido Guadalajara',
    startPoint: 'Centro de la Plaza de la Liberación, junto al monumento',
    sections: [
      {
        heading: 'En qué se diferencia de las otras rutas',
        paragraphs: [
          'Esta propuesta no sale del espacio abierto. La de una hora añade las plazas inmediatas y la de medio día incorpora más nodos, pausas y una visita opcional a un recinto.',
          'Al no depender de horarios de interiores, es la opción más flexible si estás de paso o si el tiempo es incierto.'
        ]
      },
      {
        heading: 'Orden sugerido',
        steps: [
          'Minutos 1–5: ubícate en el centro de la plaza y localiza las salidas.',
          'Minutos 5–15: observa el monumento a Miguel Hidalgo y su contexto conmemorativo.',
          'Minutos 15–22: acércate a las dos fuentes que dieron el nombre de las Dos Copas.',
          'Minutos 22–30: mira hacia la Catedral y hacia el Teatro Degollado y elige por dónde salir.'
        ],
        note: 'Es una propuesta editorial de distribución del tiempo, no un itinerario oficial ni una garantía de que cada elemento esté accesible.'
      },
      {
        heading: 'Qué llevar en cuenta',
        bullets: [
          'Identifica primero las salidas: facilita continuar o retirarse sin rodeos.',
          'No subas a monumentos, fuentes ni barreras.',
          'Si hay un evento, puede haber zonas acordonadas que acorten el recorrido.',
          'No hemos verificado bancos, sombra ni baños en cada tramo.'
        ]
      },
      {
        heading: 'Si te sobra tiempo',
        paragraphs: [
          'Añade la Catedral por fuera o el borde del Teatro Degollado y pasa a la ruta de una hora. Para comer o descansar, consulta las guías de comida y cafés: no publicamos locales concretos.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Bastan 30 minutos para la plaza?',
        a: 'Sí, para recorrer el espacio abierto, ver el monumento y las fuentes y observar las fachadas. Para los alrededores conviene una hora.'
      },
      {
        q: '¿Esta ruta incluye entrar a la Catedral?',
        a: 'No. Se limita al espacio público; los interiores dependen de sus propios horarios y condiciones.'
      },
      {
        q: '¿Es una ruta accesible?',
        a: 'No la certificamos como ruta sin escalones. Consulta la guía de accesibilidad y ajusta el recorrido a tu movilidad.'
      }
    ],
    related: ['ruta-una-hora', 'que-ver', 'monumento-miguel-hidalgo', 'fuentes-dos-copas', 'catedral-guadalajara-a-pie'],
    sources: ['turismoPlaza', 'maps', 'rutaCentro']
  },
  {
    num: 26,
    slug: 'ruta-una-hora',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Ruta a pie de una hora',
    cardText: 'La plaza más los espacios inmediatos del centro, sin depender de horarios de interiores.',
    title: 'Ruta a pie de una hora por los alrededores de la plaza',
    description: 'Ruta de una hora desde la Plaza de la Liberación que añade los espacios inmediatos del centro histórico sin entrar a recintos con horario.',
    h1: 'Ruta a pie de una hora por los alrededores',
    lead: 'Un paso más allá de la plaza: Catedral, Plaza de Armas, Rotonda y regreso, todo por espacio público.',
    keywords: 'ruta una hora Plaza de la Liberación, paseo centro histórico Guadalajara, caminar una hora',
    startPoint: 'Plaza de la Liberación, centro del espacio abierto',
    sections: [
      {
        heading: 'Qué añade respecto a los 30 minutos',
        paragraphs: [
          'La ruta corta se queda dentro de la plaza. Esta incorpora el corredor hacia la Catedral y Plaza de Armas, la Rotonda de los Jaliscienses Ilustres y el Palacio de Gobierno por fuera.',
          'Sigue sin entrar a ningún interior, de modo que no depende de horarios de apertura ni de boletos.'
        ]
      },
      {
        heading: 'Orden sugerido',
        steps: [
          'Empieza en el monumento y las dos fuentes de la plaza.',
          'Sal hacia la Catedral y rodea su entorno por zonas de paso.',
          'Continúa a Plaza de Armas y observa el Palacio de Gobierno.',
          'Pasa por la Rotonda de los Jaliscienses Ilustres.',
          'Vuelve hacia el Teatro Degollado y cierra el circuito en la plaza.'
        ],
        note: 'Distribución editorial del tiempo, no un itinerario oficial. Confirma desvíos por obras o eventos antes de salir.'
      },
      {
        heading: 'Pausas y ritmo',
        paragraphs: [
          'No garantizamos bancos, sombra ni bebederos en cada tramo. Lleva agua si la necesitas y ajusta el paso al grupo.',
          'Si viajas con niños o con adultos mayores, las guías específicas proponen adaptaciones y puntos de encuentro.'
        ]
      },
      {
        heading: 'Cómo continuar',
        paragraphs: [
          'Si aún tienes tiempo, añade Plaza Tapatía y convierte el paseo en el plan de medio día. Si quieres entrar a un recinto, consulta antes su agenda y sus condiciones.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿La ruta de una hora entra a algún edificio?',
        a: 'No. Está pensada para espacio público; los interiores quedan para cuando confirmes sus horarios y condiciones.'
      },
      {
        q: '¿Se puede hacer con niños?',
        a: 'Sí, acortando paradas. Acuerda un punto de encuentro y lleva agua; consulta la guía de visita con niños.'
      },
      {
        q: '¿Es la misma que la ruta de medio día?',
        a: 'No. La de medio día añade Plaza Tapatía, más nodos del centro, pausas y una visita opcional a un recinto.'
      }
    ],
    related: ['ruta-30-minutos', 'ruta-medio-dia', 'plaza-de-armas-a-pie', 'rotonda-jaliscienses-ilustres', 'cruz-de-plazas'],
    sources: ['rutaCentro', 'turismoPlaza', 'guiaArquitectonica']
  },
  {
    num: 27,
    slug: 'ruta-medio-dia',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Medio día desde la plaza',
    cardText: 'Varios nodos del centro histórico, pausas y una visita opcional a un recinto con horario propio.',
    title: 'Medio día desde Plaza de la Liberación | Centro Histórico',
    description: 'Plan de medio día desde la Plaza de la Liberación con varios nodos del centro histórico, pausas y una visita opcional a un recinto.',
    h1: 'Medio día desde la Plaza de la Liberación',
    lead: 'La opción más completa de esta guía: recorre la Cruz de Plazas, deja margen para descansar y reserva un interior como decisión de última hora.',
    keywords: 'medio día Plaza de la Liberación, itinerario centro histórico Guadalajara, qué hacer media jornada',
    startPoint: 'Plaza de la Liberación, centro del espacio abierto',
    sections: [
      {
        heading: 'Estructura del plan',
        paragraphs: [
          'Tres bloques: primero la plaza y sus elementos, después el corredor hacia la Catedral, Plaza de Armas y la Rotonda, y por último la prolongación hacia el Teatro Degollado y Plaza Tapatía.',
          'La diferencia con la ruta de una hora no es solo la distancia: hay pausas deliberadas y una parada opcional en un recinto, que solo se hace si sus condiciones lo permiten.'
        ]
      },
      {
        heading: 'Orden sugerido',
        steps: [
          'Bloque 1: monumento a Hidalgo, dos fuentes y vistas desde la plaza.',
          'Bloque 2: Catedral por fuera, Plaza de Armas, Palacio de Gobierno y Rotonda.',
          'Pausa: busca un lugar de descanso verificado ese día; no damos por hecho bancos ni sombra.',
          'Bloque 3: Teatro Degollado y corredor hacia Plaza Tapatía.',
          'Opcional: un interior con horario propio, solo tras confirmar agenda y acceso.'
        ],
        note: 'No publicamos horarios, precios ni una cartelera. Un plan de medio día no garantiza que un recinto esté abierto.'
      },
      {
        heading: 'Comer y descansar',
        paragraphs: [
          'El centro tiene opciones de comida y cafés, pero no enumeramos locales ni horarios: cambian y requieren verificación. Las guías de dónde comer y de cafés explican cómo elegir sin depender de un listado desactualizado.',
          'Lleva agua si la necesitas y no cuentes con baños o bebederos en cada tramo.'
        ]
      },
      {
        heading: 'Cómo terminar',
        paragraphs: [
          'Vuelve por el mismo eje a la plaza o acuerda un punto de descenso cercano. Si vas de noche, revisa antes la guía de visita nocturna: esta guía no garantiza iluminación ni seguridad del recorrido.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿El plan de medio día incluye boletos?',
        a: 'No. La visita a interiores es opcional y depende de cada recinto; confirma agenda, horarios y posibles costos antes de contar con ella.'
      },
      {
        q: '¿Dónde se come durante la ruta?',
        a: 'No recomendamos locales concretos. Consulta las guías de comida y cafés y verifica horarios y disponibilidad el mismo día.'
      },
      {
        q: '¿Es apto para cualquier ritmo?',
        a: 'Es el plan más largo de esta guía. Si necesitas un recorrido más corto, usa la ruta de una hora o la de 30 minutos.'
      }
    ],
    related: ['ruta-una-hora', 'plaza-tapatia', 'palacio-de-gobierno', 'catedral-guadalajara-a-pie', 'donde-comer-cerca'],
    sources: ['rutaCentro', 'guiaArquitectonica', 'turismoPlaza']
  },
  {
    num: 28,
    slug: 'con-ninos',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Visitar con niños',
    cardText: 'Punto de encuentro, agua, sombra y servicios que deben confirmarse antes de ir.',
    title: 'Visitar la Plaza de la Liberación con niños',
    description: 'Consejos para visitar la Plaza de la Liberación con niñas y niños: punto de encuentro, agua, sombra y servicios que deben confirmarse.',
    h1: 'Visitar la Plaza de la Liberación con niños',
    lead: 'Un espacio abierto es cómodo para una visita corta, pero no sustituye a un área de juegos ni a servicios verificados.',
    keywords: 'Plaza de la Liberación con niños, familia Guadalajara centro, visita en familia',
    sections: [
      {
        heading: 'Antes de llegar',
        bullets: [
          'Acuerda un punto de encuentro visible dentro de la plaza.',
          'Lleva agua y protección solar si el pronóstico lo aconseja.',
          'Identifica las salidas hacia la Catedral y hacia el Teatro Degollado.',
          'Explica que no se sube a monumentos, fuentes ni barreras.'
        ],
        note: 'No hemos confirmado bebederos, baños operativos, zonas de sombra ni áreas de juego en cada tramo.'
      },
      {
        heading: 'Un recorrido corto funciona mejor',
        paragraphs: [
          'La ruta de 30 minutos es la más adecuada: permite ver el monumento, las fuentes y las fachadas sin exigir demasiado tiempo de atención. Si el grupo va bien, se puede alargar hacia Plaza de Armas.',
          'Evita convertir la visita en una lista de paradas: en un espacio abierto, el descanso y la orientación importan más que completar un circuito.'
        ]
      },
      {
        heading: 'Fuentes, monumentos y seguridad',
        paragraphs: [
          'Las dos fuentes son un punto de interés, pero no confirmamos que estén en funcionamiento ni que se pueda acceder a su entorno inmediato. Observa la señalización del día.',
          'Durante eventos puede haber vallas, cableado y zonas de montaje: mantén al grupo junto y rodea las áreas acordonadas.'
        ]
      },
      {
        heading: 'Comer y descansar',
        paragraphs: [
          'No enumeramos locales, precios ni horarios. Las guías de dónde comer y de cafés explican cómo verificar opciones en el centro. Si el plan se alarga, pasa a la ruta de medio día con pausas.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay juegos infantiles en la plaza?',
        a: 'No lo hemos verificado. No damos por hecho áreas de juego, bebederos ni baños operativos; confírmalo en sitio.'
      },
      {
        q: '¿Es seguro acercarse a las fuentes?',
        a: 'Respeta barreras y señalización. No confirmamos su funcionamiento ni el estado del pavimento a su alrededor.'
      },
      {
        q: '¿Qué ruta conviene con niños pequeños?',
        a: 'La de 30 minutos, centrada en la plaza. Si el grupo resiste bien, amplía hacia la Catedral o Plaza de Armas.'
      }
    ],
    related: ['para-adultos-mayores', 'accesibilidad', 'ruta-30-minutos', 'donde-comer-cerca', 'preguntas-frecuentes'],
    sources: ['turismoPlaza', 'maps', 'rutaCentro']
  },
  {
    num: 29,
    slug: 'para-adultos-mayores',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Para adultos mayores',
    cardText: 'Descansos, pavimento y recorridos cortos, sin prometer una ruta totalmente accesible.',
    title: 'Plaza de la Liberación para adultos mayores',
    description: 'Cómo planear una visita tranquila a la Plaza de la Liberación: descansos, pavimento y recorridos cortos, sin prometer accesibilidad total.',
    h1: 'Plaza de la Liberación para adultos mayores',
    lead: 'La clave está en elegir un recorrido corto y dejar margen para descansar, no en completar todo el centro histórico.',
    keywords: 'Plaza de la Liberación adultos mayores, visita tranquila, bancos, descanso Guadalajara',
    sections: [
      {
        heading: 'Qué conviene comprobar',
        bullets: [
          'Pavimento y desniveles en el tramo desde el punto de descenso.',
          'Existencia y ubicación de bancos o zonas de sombra ese día.',
          'Rampas y cruces habilitados hacia la Catedral y el Teatro Degollado.',
          'Baños: no garantizamos sanitarios ni su horario.',
          'Desvíos por eventos, obras o zonas acordonadas.'
        ],
        note: 'No hemos verificado una ruta completa sin escalones. Si necesitas un requisito concreto de movilidad, consulta la guía de accesibilidad y confirma con la autoridad.'
      },
      {
        heading: 'Un plan con pausas',
        paragraphs: [
          'La ruta de 30 minutos permite ver el monumento, las fuentes y las fachadas sin alejarse de las salidas. Si el grupo quiere continuar, añade solo la Catedral por fuera y vuelve al mismo punto.',
          'Es preferible repetir un tramo cómodo que encadenar las cuatro plazas de la Cruz en una sola caminata.'
        ],
        steps: [
          'Empieza por el centro de la plaza y localiza las salidas.',
          'Observa el monumento y las dos fuentes con calma.',
          'Busca un punto de descanso verificado en sitio.',
          'Decide sobre la marcha si añades la Catedral o regresas.'
        ]
      },
      {
        heading: 'Horario y clima',
        paragraphs: [
          'Elegir una hora de menos afluencia y revisar el pronóstico del día ayuda más que una tabla climática genérica. La guía de mejor hora para visitar distingue patrones de clima de la previsión en tiempo real.',
          'Si vas de noche, consulta antes la guía de visita nocturna: no garantizamos iluminación completa ni seguridad del recorrido.'
        ]
      },
      {
        heading: 'Comer y terminar',
        paragraphs: [
          'Para una pausa más larga, la guía de cafés explica cómo verificar terraza, horario y accesibilidad antes de elegir un lugar. Acuerda el punto de regreso o de descenso antes de empezar.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay bancos y sombra en la plaza?',
        a: 'No garantizamos su número ni su ubicación. Identifícalos al llegar y ajusta el recorrido a lo que encuentres.'
      },
      {
        q: '¿Es una visita accesible para movilidad reducida?',
        a: 'No certificamos una ruta sin escalones. Consulta la guía de accesibilidad para la lista de puntos que hay que verificar.'
      },
      {
        q: '¿Qué ruta recomendáis?',
        a: 'La de 30 minutos, con pausas y sin salir del espacio abierto. Añade solo una parada si el grupo se encuentra cómodo.'
      }
    ],
    related: ['accesibilidad', 'con-ninos', 'ruta-30-minutos', 'cafes-cerca', 'mejor-hora-para-visitar'],
    sources: ['turismoPlaza', 'rutaCentro', 'maps']
  },
  {
    num: 30,
    slug: 'fotografia',
    group: 'routes',
    priority: 'P1',
    cardTitle: 'Dónde tomar fotos',
    cardText: 'Fuentes, monumento y fachadas como motivos, con límites claros para equipos y drones.',
    title: 'Dónde tomar fotos en la Plaza de la Liberación',
    description: 'Encuadres y motivos fotográficos en la Plaza de la Liberación: fuentes, monumento y fachadas, con límites para equipos profesionales y drones.',
    h1: 'Dónde tomar fotos en la Plaza de la Liberación',
    lead: 'La plaza ofrece algo difícil de encontrar en el centro: vistas abiertas hacia dos edificios emblemáticos desde un mismo punto.',
    keywords: 'fotos Plaza de la Liberación, fotografía Guadalajara centro, monumento Hidalgo fotos, drones',
    sections: [
      {
        heading: 'Motivos documentados',
        bullets: [
          'El monumento a Miguel Hidalgo y su contexto conmemorativo.',
          'Las dos fuentes que dieron el apodo de las Dos Copas.',
          'La Catedral Metropolitana vista desde el espacio abierto.',
          'La fachada del Teatro Degollado desde el borde opuesto.',
          'La lectura de conjunto de la Cruz de Plazas.'
        ],
        paragraphs: [
          'No damos por hecho el estado de las fuentes ni la presencia de elementos temporales: la composición cambia con eventos y mantenimiento.'
        ]
      },
      {
        heading: 'Cómo ordenar las tomas',
        paragraphs: [
          'Empieza por el centro de la plaza para situar el monumento, desplázate hacia las fuentes y termina en los bordes mirando hacia cada fachada. Así aprovechas la apertura del espacio sin cruzar zonas acordonadas.',
          'La ilustración de esta guía es una composición geométrica original, no una fotografía del lugar ni una referencia de encuadre.'
        ],
        steps: [
          'Identifica la luz del momento y las zonas de paso permitidas.',
          'Toma el conjunto desde el centro y desde los bordes.',
          'Acércate a los elementos solo si la señalización lo permite.',
          'Revisa el entorno antes de incluir a otras personas.'
        ]
      },
      {
        heading: 'Fotografía de visitante y fotografía comercial',
        paragraphs: [
          'La fotografía habitual de visita no debe confundirse con sesiones con trípode, iluminación, equipo voluminoso, uso de drones o rodajes. Estos últimos pueden requerir permisos y están sujetos a la normativa y a los avisos del lugar.',
          'No interpretamos la autorización como automática. Consulta al Ayuntamiento o al responsable del espacio antes de planear una sesión.'
        ],
        note: 'Tampoco garantizamos iluminación nocturna ni el funcionamiento de las fuentes como elemento de la toma.'
      },
      {
        heading: 'Conviviencia',
        paragraphs: [
          'Respeta a las personas, sus fotografías, los espacios de trabajo y de culto y la señalización. No subas a monumentos, fuentes ni barreras para conseguir un ángulo.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Se puede usar dron en la plaza?',
        a: 'No lo damos por permitido. Los drones y los rodajes están sujetos a normativa y permisos; consulta a la autoridad antes de volar.'
      },
      {
        q: '¿Se necesita permiso para fotografiar?',
        a: 'La fotografía de visitante es habitual, pero equipos profesionales, trípodes o sesiones comerciales pueden requerir autorización. Verifícalo antes.'
      },
      {
        q: '¿Cuál es la mejor luz?',
        a: 'No prometemos una hora óptima. Consulta la guía de mejor hora para visitar y el pronóstico del día; la luz cambia con la estación y el clima.'
      }
    ],
    related: ['que-ver', 'visitar-de-noche', 'mejor-hora-para-visitar', 'monumento-miguel-hidalgo', 'catedral-guadalajara-a-pie'],
    sources: ['turismoPlaza', 'gacetaPlazas', 'maps']
  }
];
