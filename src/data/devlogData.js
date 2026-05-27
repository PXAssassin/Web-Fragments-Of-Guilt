/**
 * DevLog Data
 * This file contains the data for the weekly developer logs.
 * It's structured by weeks, containing an array of exactly 3 cards each week.
 * Adding new weeks is as easy as adding a new object to this array.
 */
export const devlogData = [
  {
    week: 8,
    title: "Asignación de responsabilidades",
    cards: [
      {
        id: "w8-c1",
        title: "Animación",
        description: "Definición del trabajo visual y animaciones del juego.",
        image: "/images/devlog/week8/card12.png",
        fullText: `
                    Se asigna el área de animación para desarrollar el apartado visual de los personajes:

                    - Dibujo del personaje principal  
                    - Animación del personaje principal  
                    - Diseño de enemigos  
                    - Animación de enemigos  

                    El objetivo es establecer una base visual coherente para el desarrollo del juego.
                    `
      },

      {
        id: "w8-c2",
        title: "Programación",
        description: "Planificación de la lógica central del juego.",
        image: "/images/devlog/week8/card2.png",
        fullText: `
              Se asigna al equipo de programadores la definición de los sistemas principales del juego:

              **Sistema del personaje**
              - Vida y stamina  
              - Inventario  
              - Habilidades  

              **Sistema de guardado**
              - Guardado de progreso del jugador  
              - Carga desde el último punto de guardado  

              **Lógica del juego**
              - Cambio entre escenas  
              - Comportamiento de enemigos:
                - Patrullaje  
                - Ataque  

              **UI**
              - Interacción con la interfaz  

              Esto permitirá construir la base técnica del proyecto.
                    `
      },

      {
        id: "w8-c4",
        title: "Arte conceptual-Diseño y animación",
        description: "Base visual del estilo artístico del juego.",
        image: "/images/devlog/week8/card1.jpg",
        fullText: `
          Con base en el GDD, se asigna la creación del arte conceptual del proyecto:

          - Diseño de la protagonista  
          - Diseño de su arma  
          - Diseño de un enemigo promedio  
          - Concepto del escenario  

          Todo esto utilizando la paleta de colores definida para establecer la identidad visual del juego.
                `
      },

      {
        id: "w8-c5",
        title: "Diseño de nivel - Soporte en programación",
        description: "Planificación de la progresión del jugador.",
        image: "/images/devlog/week8/paper1.png",
        images: [
          "/images/devlog/week8/paper1.jpeg",
          "/images/devlog/week8/paper2.jpeg",
          "/images/devlog/week8/paper3.jpeg"
        ],
        fullText: `
        Se plantea el diseño de nivel en papel para definir la experiencia del jugador:

        - Planificación de la ruta del jugador  
        - Ubicación estratégica de enemigos y trampas  

        Se propone dividir el Nivel 1 en tres escenas independientes para:

        - Segmentar el aprendizaje de mecánicas  
        - Optimizar la carga de recursos  

        Cada escena funcionará como un bloque progresivo donde el jugador aprende habilidades de forma gradual, estableciendo una curva de dificultad controlada.
              `
      }
    ]
  },
  {
    week: 9,
    title: "Primeros avances del desarrollo",
    cards: [

      {
        id: "w9-c1",
        title: "Animación",
        description: "Ilustración y preparación del sistema de animaciones.",
        image: "/images/devlog/week9/card4.jpg",
        images: [
          "/images/devlog/week9/card4.png",
          "/images/devlog/week9/Rigging.png",
          "/images/devlog/week9/card12.png",
        ],

        fullText: `
          Durante esta semana se desarrollaron las bases visuales del personaje:

          -Diseño del sprite final   
          - Creación del animator del personaje  
          - Implementación de técnica de rig  

          El animator se estructuró para definir el flujo de animaciones, permitiendo en futuras semanas integrar animaciones personalizadas y facilitar la programación del movimiento.
        `
      },

      {
        id: "w9-c2",
        title: "Creación Repo Github",
        description: "Configuración del repositorio y bases del sistema.",
        image: "/images/devlog/week9/card2.png",
        fullText: `
          Se establecieron las primeras bases técnicas del proyecto:

          **Control de versiones**
          - Creación del repositorio en GitHub  
          - Implementación de ramas de trabajo para el equipo  

          **Arquitectura del sistema**
          - Abstracción de atributos del personaje principal  

          Esta estructura permite gestionar el guardado de datos y facilita la modificación o expansión de propiedades del jugador en el futuro.
                `
      },

      {
        id: "w9-c3",
        title: "Diseño de entorno",
        description: "Visualización del nivel mediante referencia audiovisual.",
        image: "/images/devlog/week9/vidScenario.mp4",
        fullText: `
          Se desarrolló una propuesta visual del entorno del juego mediante material audiovisual.

          🎥 **Video de referencia**
          - Representación del diseño del nivel  
          - Exploración de la ambientación  
          - Primera aproximación a la experiencia del jugador  

          Este recurso sirve como guía para futuras implementaciones dentro del motor de juego.
                `
      }
    ]
  },
  {
    week: 10,
    title: "Desarrollo de sistemas y animaciones",
    cards: [
      {
        id: "w10-c1",
        title: "Animación",
        description: "Creación de animaciones del personaje y enemigos.",
       image: "/images/devlog/week10/Animacion.mp4",
        fullText: `
        Se dio inicio al desarrollo de animaciones del personaje principal:

        - Animación idle  
        - Correr  
        - Saltar  
        - Caída  
        - Ataque  

        En paralelo, se trabajó en los enemigos, desarrollando animaciones clave:

        - Patrullaje  
        - Movimiento hacia el jugador  
        - Ataque  
        - Animación de muerte  

        Estas animaciones permiten dar vida a los personajes y preparar su integración con la lógica del juego.
              `
      },

      {
        id: "w10-c2",
        title: "Programación / UI",
        description: "Implementación de sistemas y diseño del menú.",
        image: "/images/devlog/week10/menu.png",
        fullText: `
        Se avanzó tanto en diseño de interfaz como en programación de sistemas:

        **Menú principal**
        - Definición estética con tonalidades frías (azul y morado)  
        - Diseño de una interfaz simple alineada al estilo del juego  

        **Implementación de scripts**
        Basados en la abstracción definida anteriormente:

        - Sistema de inventario  
        - Movimiento del personaje  
        - Persistencia de datos:
          - GameManager  
          - GameSession  
          - UI_Manager  
        - Clases en C# para guardado de objetos  
        - IA de enemigos  
        - Manejo de la UI  

        Esto consolida la base funcional del juego.
              `
      },

      {
        id: "w10-c3",
        title: "Arte Conceptual-Diseño y Animación",
        description: "Creación visual de enemigos y jefe del nivel.",
        image: "/images/devlog/week10/Enemigo1.png",
        images: [
          "/images/devlog/week10/Enemigo1.png",
          "/images/devlog/week10/Jefe.png",
        ],
        fullText: `
        Se desarrolló el apartado visual de los enemigos del juego:

        - Creación de sprites de enemigos básicos  
        - Diseño final del jefe del primer nivel  

        Estos elementos refuerzan la identidad visual y la variedad de desafíos para el jugador.
              `
      },

      {
        id: "w10-c4",
        title: "Diseño de Nivel-Soporte en Programación",
        description: "Estructuración de niveles y configuración del movimiento del personaje.",
        image: "/images/devlog/week10/card4m.png",
        fullText: `
          Se avanzó tanto en el diseño de niveles como en la programación de los sistemas del personaje:

          **Diseño de niveles**
          - Estructura de los tres niveles del juego  

          **Programación**
          - Implementación del movimiento del personaje  
          - Configuración del Animator  
          - Conexión con el sistema de estados  

          Estos avances sientan las bases para la integración completa del personaje en el entorno.
                `
      }
    ]
  },
  {
    week: 11,
    title: "Pruebas, integración y ajustes",
    cards: [
      {
        id: "w11-c1",
        title: "Programación / UI",
        description: "Pruebas funcionales y ajustes de sistemas.",
        image: "/images/devlog/week11/Scripts.png",
        fullText: `
        Se iniciaron las primeras pruebas funcionales del proyecto:

        **Persistencia**
        - Verificación del funcionamiento del GameManager entre escenas  
        - Obtención de referencias al protagonista en cada escena  

        **Movimiento**
        - Pruebas del sistema de movimiento del personaje  
        - Ajustes en scripts debido a conflictos con animaciones  

        **Inventario**
        - Testeo del sistema de inventario  
        - Validación del almacenamiento de objetos  

        Estas pruebas permitieron detectar errores y mejorar la estabilidad del sistema base.
              `
      },

      {
        id: "w11-c2",
        title: "Animación y arte",
        description: "Desarrollo de animaciones y diseño de arma.",
        image: "/images/devlog/week11/card2.png",
        fullText: `
        Se avanzó en el apartado visual y de animación:

        - Diseño de la lanza principal de la protagonista  
        - Creación de animaciones para enemigos básicos  

        Estos elementos fortalecen tanto la identidad visual como la respuesta del juego en combate.
              `
      },

      {
        id: "w11-c3",
        title: "Integración de nivel",
        description: "Paso del diseño conceptual al entorno digital.",
        image: "/images/devlog/week11/Yen_S11.png",
        fullText: `
          Se trasladó el diseño de nivel al entorno del motor:

          - Ubicación del protagonista en escena  
          - Posicionamiento de enemigos en el nivel  
          - Organización de escenas del juego  

          Esto marca la transición de planificación a implementación jugable.
                `
      },

      {
        id: "w11-c4",
        title: "Sistema y depuración",
        description: "Optimización y estabilidad del código.",
        image: "/images/devlog/week11/Yen_S11.png",
        fullText: `
        Se trabajó en la integración técnica y mejora del sistema:

        - Configuración del sistema de cámaras  
        - Estructuración del flujo global mediante GameManager  
        - Ajustes en la lógica de salud  
        - Corrección de errores en la comunicación entre scripts  

        Estos cambios permiten una base más estable antes de iniciar el balance del juego.
              `
      }
    ]
  },
{
    week: 13,
    title: "Sistemas de combate, audio y planificación de mapas",
    cards: [
      {
        id: "w13-c1",
        title: "Sistemas de combate y lógica de jefe",
        description: "Integración de hitboxes en enemigos tipo uga y programación del jefe final.",
        image: "/images/devlog/week13/Jefe.png",
        images: [
          "/images/devlog/week13/Jefe.png",
          "/images/devlog/week10/Semana13Y.png",
          "/images/devlog/week10/Semana13.2Y.png",
        ],
        
        
        fullText: `
          Nos enfocamos en robustecer los sistemas de combate y la interactividad del juego:
          
          - Mejoramos el ataque de los enemigos tipo uga al integrarles sus respectivas hitboxes.
          - Vinculamos animaciones provisionales, lo que nos facilita realizar pruebas de colisión mucho más precisas.
          - En cuanto al jefe final, programamos tanto su lógica de aparición en escena como su secuencia de ataques base.
        `
      },
      {
        id: "w13-c2",
        title: "Gestión centralizada de audio",
        description: "Creación e implementación del AudioManager para música y efectos.",
        image: "/images/devlog/week17/card1.jpg",
        fullText: `
          Creamos e implementamos el AudioManager para centralizar el control de los efectos de sonido y la música, dejando el sistema listo para la futura integración de los recursos de audio.
        `
      },
      {
        id: "w13-c3",
        title: "Estructuración conceptual de mapas",
        description: "Planeación e inicio de la estructura de nuevos escenarios.",
        image: "/images/devlog/week13/Semana13Mapas.png",
        fullText: `
          Durante esta semana se planeó el agregar nuevos mapas y iniciamos la estructura conceptual de los mismos.
        `
      }
    ]
  },
  {
    week: 14,
    title: "Diseño de mapas",
    cards: [
      {
        id: "w14-c1",
        title: "Diseño de mapas 4 y 5",
        description: "Inicio del diseño para los mapas 4 y 5.",
        image: "/images/devlog/week15/fase4.png",
        images: [
          "/images/devlog/week14/fase4.png",
          "/images/devlog/week14/fase4.1.png",
          "/images/devlog/week14/fase5.png",
          "/images/devlog/week14/fase5.1.png"
        ],
        fullText: `
          Durante esta semana se inicia el diseño de los mapas 4 y 5.
        `
      },
      {
        id: "w14-ui",
        title: "Conclusión de Interfaces de Usuario (UI)",
        description: "Finalización de los menús principales, ingame y de muerte del juego.",
        image: "/images/devlog/week14/semana14.mp4",
        fullText: `
          Se retomó un apartado fundamental que hace parte de nuestro videojuego, logrando concluir con todas las interfaces que se ven en el mismo:
          
          - **Menú de inicio:** Incluye el menú de opciones.
          - **Interfaz InGame:** Contiene el Hotbar de acceso y uso rápido de ítems, junto al inventario que incluye los fragmentos recolectados a lo largo del juego.
          - **Interfaz de muerte:** Pantalla que visualiza el jugador al morir.
        `
      }
    ]
  },
  {
    week: 15,
    title: "Finalización y agregación de mapas",
    cards: [
      {
        id: "w15-c1",
        title: "Mapas 4, 5 y 6",
        description: "Se terminan los mapas 4 y 5 y se agrega el 6 completo.",
        image: "/images/devlog/week15/card1.png",
        images: [
          "/images/devlog/week15/card1.png",
          "/images/devlog/week15/card1.1.png",
        ],
        fullText: `
          Durante esta semana se terminan los mapas 4 y 5 y se agrega el 6 completo.
        `
      },
      {
        id: "w15-ui-prog",
        title: "Lógica de Inventario, Hotbar y Depuración",
        description: "Programación del script UI_Inventario y reescritura de clases puras.",
        image: "/images/devlog/week15/Semana15.mp4",
        fullText: `
          Se completaron scripts faltantes como **UI_Inventario**, el cual controla toda la lógica de la interfaz InGame y el inventario propiamente. 
          
          Debido a la funcionalidad extra agregada en la semana 14 (el hotbar para acceso rápido a ítems), se tuvo que reescribir algo más de código en las clases puras declaradas en el inicio. Además, se analizó minuciosamente el resto de los scripts presentes en el videojuego para evitar errores en la ejecución y pruebas de nuestro videojuego.
        `
      }
    ]
  },
  {
    week: 16,
    title: "Implementación de proyectiles, pulido de enemigos y efectos visuales avanzados",
    cards: [
      {
        id: "w16-c1",
        title: "Combate del jugador y pulido de enemigos",
        description: "Desarrollo del proyectil de magia, sincronización de audio y lógica de muerte.",
        image: "/images/devlog/week16/Yen_Enemy.mp4",
        fullText: `
          Avanzamos significativamente en las mecánicas de combate y la ambientación estética del proyecto:
          
          - Desarrollamos el proyectil de magia del jugador junto a toda su lógica de disparo y comportamiento en el entorno.
          - Sincronizamos los efectos de audio de los enemigos con sus animaciones de ataque.
          - Estructuramos la lógica de muerte de los enemigos, programando un tiempo de espera para que se ejecuten las animaciones correspondientes seguido de un efecto visual de parpadeo antes de desaparecer de la escena.
          - Optimizamos el sistema de detección para que los enemigos reaccionen de forma más natural a la presencia del jugador.
        `
      },
      {
        id: "w16-c2",
        title: "Habilidades del jefe e iluminación",
        description: "Diseño de onda expansiva mediante shaders y ajuste de atmósfera.",
        image: "/images/devlog/week16/Jefe.png",
        
        fullText: `
          - Robustecimos el repertorio del jefe final al diseñar una habilidad de onda expansiva implementada mediante shaders y sistemas de partículas.
          - Realizamos un ajuste completo de la iluminación de los mapas para consolidar esa atmósfera sombría y oscura que requiere el juego.
        `
      },
      {
      id: "w16-prog-cierre",
      title: "Pruebas de Uso y Cierre del Player",
      description: "Detección y corrección definitiva de errores en las mecánicas del personaje.",
      image: "/images/devlog/week17/card1.jpg",
      fullText: `
        Se hicieron pruebas de uso para ver funcionalidades ya realizadas en semanas anteriores. Durante este proceso se detectaron errores minúsculos por parte del player, los cuales fueron corregidos definitivamente.
        
        Con este último punto se dio por concluido el desarrollo por parte de la programación del personaje.
      `
    }
    ]
  },
  {
    week: 17,
    title: "Ajuste fino del jefe final y sincronización de audio",
    cards: [
      {
        id: "w17-c1",
        title: "Pulido del jefe final y sincronización de audio",
        description: "Refinamiento de mecánicas de combate e integración precisa de recursos de audio.",
        image: "/images/devlog/week17/card1.jpg",
        fullText: `
          Nos enfocamos en el pulido definitivo del enfrentamiento principal del nivel. Refinamos las mecánicas de combate del jefe final para asegurar que sus patrones de ataque sean justos y desafiantes.
          
          Además integramos los recursos de audio restantes y los sincronizamos con precisión milimétrica a las animaciones del jefe, logrando que cada movimiento de impacto y habilidad especial tenga una respuesta sonora contundente que potencie la inmersión en la batalla.
        `
      },
      {
        id: "w17-c2",
        title: "Gameplay - Fragments of Guilty",
        description: "Revive el viaje oscuro de la diosa en este gameplay del juego completo.",
        youtubeId: "XNNJ7IVUd9M",
        fullText: `
          Aquí presentamos el gameplay completo de **Fragments of Guilty**, donde podrás ver cómo juega la protagonista a través de los diferentes niveles y enfrentamientos que hemos desarrollado.
          
          🎮 **Descubre:**
          - Los sistemas de combate en acción
          - La progresión a través de los mapas
          - Las cinemáticas y transiciones del juego
          - El desafiante enfrentamiento con el jefe final
          
          ¡Sumérgete en el mundo de la diosa olvidada!
        `
      }
    ]
  }
];
