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
        image: "/images/devlog/week8/card1.jpg",
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
        image: "/images/devlog/week8/card2.jpg",
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
        id: "w8-c3",
        title: "Diseño de Entorno",
        description: "Estructuración de niveles, interacción y ambientación.",
        image: "/images/devlog/week8/card3.jpg",
        fullText: `
          Se asigna a los diseñadores de entorno la construcción del mundo del juego:

          **Niveles**
          - Nivel 1  
          - Nivel 2  
          - Nivel 3  

          **Interacción**
          - Diseño de objetos interactivos  

          **Sonido**
          - Ambientación  
          - Feedback  
          - Interacciones  

          Estos elementos definirán la experiencia del jugador.
                `
      },

      {
        id: "w8-c4",
        title: "Arte conceptual-Diseño y animación",
        description: "Base visual del estilo artístico del juego.",
        image: "/images/devlog/week8/card4.jpg",
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
        image: "/images/devlog/week8/card5.jpg",
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
        image: "/images/devlog/week9/card1.jpg",
        fullText: `
          Durante esta semana se desarrollaron las bases visuales del personaje:

          - Ilustración del personaje principal  
          - Creación del animator del personaje  
          - Implementación de técnica de rig  

          El animator se estructuró para definir el flujo de animaciones, permitiendo en futuras semanas integrar animaciones personalizadas y facilitar la programación del movimiento.

          También se inició la creación visual de un enemigo.
                `
      },

      {
        id: "w9-c2",
        title: "Programación / UI",
        description: "Configuración del repositorio y bases del sistema.",
        image: "/images/devlog/week9/card2.jpg",
        fullText: `
          Se establecieron las primeras bases técnicas del proyecto:

          🔹 **Control de versiones**
          - Creación del repositorio en GitHub  
          - Implementación de ramas de trabajo para el equipo  

          🔹 **Arquitectura del sistema**
          - Abstracción de atributos del personaje principal  

          Esta estructura permite gestionar el guardado de datos y facilita la modificación o expansión de propiedades del jugador en el futuro.
                `
      },

      {
        id: "w9-c3",
        title: "Diseño de entorno",
        description: "Visualización del nivel mediante referencia audiovisual.",
        image: "/images/devlog/week9/card3.jpg",
        fullText: `
          Se desarrolló una propuesta visual del entorno del juego mediante material audiovisual.

          🎥 **Video de referencia**
          - Representación del diseño del nivel  
          - Exploración de la ambientación  
          - Primera aproximación a la experiencia del jugador  

          Este recurso sirve como guía para futuras implementaciones dentro del motor de juego.
                `
      },

      {
        id: "w9-c4",
        title: "Arte Conceptual-Diseño y Animación",
        description: "Sprite de la protagonista:Creación visual y primeras animaciones del personaje.",
        image: "/images/devlog/week9/card4.jpg",
        fullText: `
            A partir del arte conceptual, se desarrolló el sprite de la protagonista:

            - Diseño del sprite final  
            - Creación de animaciones básicas de movimiento  

            Además, se realizaron ajustes en el animator base dentro de Unity para facilitar su futura integración con la lógica del juego.
                  `
      },

      {
        id: "w9-c5",
        title: "Diseño de Nivel-Soporte en Programación",
        description: "Implementación inicial del combate y daño.",
        image: "/images/devlog/week9/card5.jpg",
        fullText: `
          Se comenzó la programación de los sistemas de combate:

          - Desarrollo de la lógica de ataque  
          - Implementación de parámetros de salud en enemigos  
          - Definición de daño para enemigos y jefe final  

          Esto establece una base sólida para futuras pruebas de balance y ajustes en la jugabilidad.
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
        image: "/images/devlog/week10/card1.jpg",
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
        image: "/images/devlog/week10/card2.jpg",
        fullText: `
        Se avanzó tanto en diseño de interfaz como en programación de sistemas:

        🔹 **Menú principal**
        - Definición estética con tonalidades frías (azul y morado)  
        - Diseño de una interfaz simple alineada al estilo del juego  

        🔹 **Implementación de scripts**
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
        image: "/images/devlog/week10/card3.jpg",
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
        image: "/images/devlog/week10/card4.jpg",
        fullText: `
          Se avanzó tanto en el diseño de niveles como en la programación de los sistemas del personaje:

          🔹 **Diseño de niveles**
          - Estructura de los tres niveles del juego  

          🔹 **Programación**
          - Implementación del movimiento del personaje  
          - Configuración del Animator  
          - Conexión con el sistema de estados  

          Estos avances sientan las bases para la integración completa del personaje en el entorno.
                `
      }
    ]
  }
];
