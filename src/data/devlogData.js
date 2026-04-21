/**
 * DevLog Data
 * This file contains the data for the weekly developer logs.
 * It's structured by weeks, containing an array of exactly 3 cards each week.
 * Adding new weeks is as easy as adding a new object to this array.
 */
export const devlogData = [
  {
    week: 1,
    title: "The Awakening",
    cards: [
      {
        id: "w1-c1",
        title: "Initial Concepts",
        description: "Exploring the dark, mystical atmosphere for the starting zone. We wanted a feeling of isolation and ancient magic.",
        image: "/images/devlog/week1/card1.jpg",
        fullText: "The initial concepts focused on creating a cold, unwelcoming environment that still felt deeply magical. The forgotten god awakens here, surrounded by the remnants of a once-great civilization. We used heavy purple and blue tones to set the mood."
      },
      {
        id: "w1-c2",
        title: "Memory Fragments",
        description: "Designing the visual language for memory recovery mechanics.",
        image: "/images/devlog/week1/card2.jpg",
        fullText: "Memory fragments are the core collectible. We designed them to look like shattered glass that glows from within, representing the broken mind of our protagonist. Picking them up triggers a flash of past events."
      },
      {
        id: "w1-c3",
        title: "Movement Prototypes",
        description: "Testing weight and momentum of a god who has lost their power.",
        image: "/images/devlog/week1/card3.jpg",
        fullText: "We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game."
      },
      {
        id: "w1-c4",
        title: "MACHU",
        description: "Testing weight and momentum of a god who has lost their power.",
        image: "/images/devlog/week1/card3.jpg",
        fullText: "We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game."
      },
      {
        id: "w1-c5",
        title: "Valentina",
        description: "Testing weight and momentum of a god who has lost their power.",
        image: "/images/devlog/week1/card3.jpg",
        fullText: "We want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powWe want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game.We want the player to feel powerful yet constrained. The initial movement prototype features heavy, impactful animations but lacks the swiftness that the character will regain later in the game."
      }

    ]
  },
  {
    week: 2,
    title: "The Dungeons",
    cards: [
      {
        id: "w2-c1",
        title: "Environment Art",
        description: "Creating the eerie, crimson-lit dungeons where the first enemies await.",
        image: "/images/devlog/week2/card1.jpg",
        fullText: "The first major dungeon shifts the palette towards reds and deep blacks. This contrast helps highlight dangers and creates a sense of dread."
      },
      {
        id: "w2-c2",
        title: "Enemy AI: The Shades",
        description: "Programming the behavior of formless enemies that lurk in the shadows.",
        image: "/images/devlog/week2/card2.jpg",
        fullText: "The Shades are programmed to avoid direct light sources and attempt to flank the player. They are weak individually but dangerous in groups, representing the protagonist's forgotten fears."
      },
      {
        id: "w2-c3",
        title: "Combat Mechanics",
        description: "Refining the dodge and counter-attack systems.",
        image: "/images/devlog/week2/card3.jpg",
        fullText: "Combat is deliberate and punishing. We spent this week refining the timing windows for perfect dodges, ensuring that skillful play is properly rewarded with slow-motion counter opportunities."
      }
    ]
  },
  {
    week: 3,
    title: "The First Artifact",
    cards: [
      {
        id: "w3-c1",
        title: "The Purple Sphere",
        description: "Modeling the first major artifact that grants the player a new ability.",
        image: "/images/devlog/week3/card1.jpg",
        fullText: "The Purple Sphere is not just an item, but a piece of the protagonist's original divine power. Acquiring it unlocks the 'Shadow Step' ability."
      },
      {
        id: "w3-c2",
        title: "VFX Pass",
        description: "Adding particle effects and trails to the new abilities.",
        image: "/images/devlog/week3/card2.jpg",
        fullText: "A significant VFX pass was done to make the magic feel impactful. Every use of the new ability leaves a dissipating trail of glowing ash."
      },
      {
        id: "w3-c3",
        title: "Boss Teaser",
        description: "A glimpse at the guardian of the first artifact.",
        image: "/images/devlog/week3/card3.jpg",
        fullText: "The guardian is a massive, corrupted entity that tests all the skills the player has learned so far. It uses sweeping attacks that require precise use of the newly acquired dodge mechanic."
      }
    ]
  }
];
