export default {
  recipes: [
    {
      id: 1,
      name: "Bol protéiné à la mexicaine",
      src: "https://www.chefcookit.com/recipes/bol_proteines_mexicain",
      time: "40",
      category: "keto",
      img: "./assets/img/bol_mexicain.jpg",
      ingredients: [
        {
          name: "quinoa blanc",
          quantity: "150g",
        },
        {
          name: "fromage halloumi",
          quantity: "235g",
        },
        {
          name: "boite de conserve de pois chiches",
          quantity: 1,
        },
        {
          name: "oignon",
          quantity: 1,
        },
        {
          name: "tomate",
          quantity: 1,
        },
        {
          name: "coriandre",
          quantity: 1,
        },
        {
          name: "mélange d'épices (poudre d'ail, chipotle, cumin)",
          quantity: "15ml",
        },
        {
          name: "lime",
          quantity: 1,
        },
        {
          name: "crème sure",
          quantity: "35ml",
        },
      ],
      tools: ["Plaque de cuisson", "bols", "casserole", "poêle"],
      steps: [
        {
          order: 1,
          title: "Faire les pois chiches croustillants",
          image: "./assets/img/bol_mexicain_1.jpg",
          text:
            "Préchauffer le four à 425°F et amener une casserole d'eau à ébullition. Étendre les pois chiches sur une plaque de cuisson. Ajouter le mélange d'épices, au goût (attention! épicé) et un filet d'huile d'olive. Si désiré, utiliser une épice appréciée des enfants pour une partie des pois chiche. Saler et poivrer et cuire au four 20-25 minutes.",
        },
        {
          order: 2,
          title: "Cuire le quinoa",
          image: "./assets/img/bol_mexicain_2.jpg",
          text: "Rincer le quinoa. Une fois l'eau bouillante, ajouter le quinoa et cuire 14-15 minutes jusqu'à tendreté. Égoutter et réserver.",
        },
        {
          order: 3,
          title: "Mise en place",
          image: "./assets/img/bol_mexicain_3.jpg",
          text: "Hacher la coriandre et l'oignon. Couper la tomate en dés. Zester la lime et couper en deux. Trancher le halloumi.",
        },
        {
          order: 4,
          title: "Cuire le halloumi",
          image: "./assets/img/bol_mexicain_4.jpg",
          text: "Dans un poêle, à feu moyen-élevé, cuire les tranches de halloumi environ 2-3 minutes de chaque côté jusqu'à coloration.",
        },
        {
          order: 5,
          title: "Faire le pico de gallo et la sauce",
          image: "./assets/img/bol_mexicain_5.jpg",
          text:
            "Dans un bol, mélanger les tomates, les oignons, la coriandre et le jus d'une demi-lime. Bien mélanger et saler et poivrer. Dans un autre bol, mélanger la crème sure avec le zeste de lime, le jus d'une demi-lime et un filet d'huile d'olive. Saler et poivrer et bien mélanger.",
        },
        {
          order: 6,
          title: "Monter l'assiette",
          image: "./assets/img/bol_mexicain_6.jpg",
          text: "Servir le quinoa avec les pois chiches croustillants, le halloumi et le pico de gallo. Garnir avec la sauce. Bon appétit!",
        },
      ],
    },
    {
      id: 2,
      name: "Boeuf croustillant coréen",
      src: "https://chefcookit.com/recipe/boeuf-croustillant-coreen",
      time: "25",
      category: "keto",
      img: "./assets/img/boeuf_coreen.jpg",
      ingredients: [
        {
          name: "bavette de boeuf",
          quantity: 2,
        },
        {
          name: "fécule de maïs",
          quantity: "30ml",
        },
        {
          name: "riz jasmin",
          quantity: "140g",
        },
        {
          name: "oignon vert",
          quantity: 1,
        },
        {
          name: "gousses d'ail",
          quantity: 2,
        },
        {
          name: "gingembre",
          quantity: 1,
        },
        {
          name: "graines de sésame grillées",
          quantity: "15ml",
        },
        {
          name: "huile de sésame",
          quantity: "15ml",
        },
        {
          name: "gochujang",
          quantity: "30ml",
        },
        {
          name: "courgette verte",
          quantity: 1,
        },
        {
          name: "miel",
          quantity: 1,
        },
        {
          name: "sauce soya",
          quantity: "15ml",
        },
      ],
      tools: ["poêle", "casserole", "bols", "papier absorbant"],
      steps: [
        {
          order: 1,
          title: "Mise en place",
          image: "./assets/img/boeuf_coreen_1.jpg",
          text:
            "Couper les oignons verts en long morceaux et ensuite en juliennes, sur la longueur. Placer dans un bol d'eau froide pour obtenir un effet bouclé. Hacher l'ail et le gingembre. Couper les courgettes en tranches. Sur une planche séparée, couper les lanières de boeuf en plus petite lanières, si désiré.",
        },
        {
          order: 2,
          title: "Cuire le riz",
          image: "./assets/img/boeuf_coreen_2.jpg",
          text:
            "Rincer le riz. Dans une casserole, ajouter le riz et 2 tasses d'eau. Amener à ébullition. Baisser le feu et couvrir. Cuire 10-12 minutes.",
        },
        {
          order: 3,
          title: "Faire la sauce",
          image: "./assets/img/boeuf_coreen_3.jpg",
          text:
            "Dans un bol, mélanger la pâte de gochujang, l'huile de sésame, l'ail, le gingembre, le miel, la sauce soya et la moitié de graines de sésame. Bien mélanger et réserver. La pâte de gochujang est piquante. Pour les enfants qui n'y sont pas habitués, il est possible d'ajouter la pâte au mélange de sauce graduellement.",
        },
        {
          order: 4,
          title: "Cuire les lanières de boeuf",
          image: "./assets/img/boeuf_coreen_4.jpg",
          text:
            "Dans un bol, mélanger les lanières de boeuf avec la fécule de maïs. Dans une poêle profonde, à feu moyen-élevé, ajouter un généreux filet d'huile. Cuire les lanières de boeuf 3-4 minutes ou jusqu'à ce qu'elles soient croustillantes. Retirer de l'huile et placer sur du papier absorbant. Retirer l'huile de la poêle et remettre les lanières de boeuf et ajouter la sauce. Bien mélanger et cuire 1-2 minutes.",
        },
        {
          order: 5,
          title: "Cuire les courgettes",
          image: "./assets/img/boeuf_coreen_5.jpg",
          text:
            "Dans une poêle, à feu moyen-élevé, ajouter une filet d'huile. Cuire les courgettes 4-5 minutes. Saler et poivrer et ajouter le reste des graines de sésame.",
        },
        {
          order: 6,
          title: "Monter l'assiette",
          image: "./assets/img/boeuf_coreen_6.jpg",
          text:
            "Servir les lanières de boeuf croustillantes dans la sauce au gochujang avec le riz et les courgettes. Garnir avec les oignons verts. Bon appétit",
        },
      ],
    },
    {
      id: 3,
      name: "Pizza Hawaiienne au bacon",
      src: "https://chefcookit.com/recipe/pizza-hawaiienne-au-bacon",
      time: "30",
      category: "mediterraneen",
      img: "./assets/img/pizza_hawaiienne.jpg",
      ingredients: [
        {
          name: "farine non-blanche",
          quantity: "30ml",
        },
        {
          name: "pâtes à pizza",
          quantity: 2,
        },
        {
          name: "boite de conserve de pois chiches",
          quantity: 1,
        },
        {
          name: "bacon",
          quantity: 6,
        },
        {
          name: "ananas en tranches",
          quantity: 0.5,
        },
        {
          name: "poivron orange",
          quantity: 0.5,
        },
        {
          name: "mozzarella",
          quantity: "80g",
        },
        {
          name: "persil italien fais",
          quantity: 1,
        },
        {
          name: "pâte de tomate",
          quantity: "60ml",
        },
      ],
      tools: ["poêle", "plaque de cuisson", "rouleau à pâte"],
      steps: [
        {
          order: 1,
          title: "Adapter la recette pour vos enfants",
          image: "./assets/img/pizza_hawaiienne_1.jpg",
          text:
            "Afin de respecter l'apprentissage alimentaire de nos enfants, il est aussi possible de faire une recette différemment. Laisser les enfants étirer la pâte avec leurs mains avec un peu de farine, les pizzas seront imparfaites, mais encore meilleures! Aussi, ils pourront la garnir avec les éléments désirés.",
        },
        {
          order: 2,
          title: "Cuire le bacon",
          image: "./assets/img/pizza_hawaiienne_2.jpg",
          text:
            "Préchauffer le four à 425°F. Mettre les tranches de bacon dans une poêle et chauffer à feu moyen-élevé. Cuire les tranches 3-5 minutes de chaque côté jusqu’à ce qu’il soit croustillant. Déposer sur un papier absorbant.",
        },
        {
          order: 3,
          title: "Mise en place",
          image: "./assets/img/pizza_hawaiienne_3.jpg",
          text: "Trancher finement le poivron. Hacher le persil. Égoutter l'ananas et le couper en plus petits cubes au choix.",
        },
        {
          order: 4,
          title: "Rouler la pâte",
          image: "./assets/img/pizza_hawaiienne_4.jpg",
          text:
            "Rouler la pâte avec la farine pour faire une grosse pizza ou de plus petites pizzas individuelles. Mettre sur une plaque recouverte de papier de cuisson.",
        },
        {
          order: 5,
          title: "Garnir la pâte",
          image: "./assets/img/pizza_hawaiienne_5.jpg",
          text:
            "Mélanger la pâte de tomate avec un filet d'huile, sel et poivre. Badigeonner la pizza avec la pâte de tomate. Ajouter le poivron, les ananas, le bacon émietté et la mozzarella. Cuire dans le four 12-15 minutes.",
        },
        {
          order: 6,
          title: "Monter l'assiette",
          image: "./assets/img/pizza_hawaiienne_6.jpg",
          text: "Servir et garnir de persil. Ajuster le sel et le poivre au goût. Bon appétit!",
        },
      ],
    },
    {
      id: 4,
      name: "Tofu croustillant Tonkatsu",
      src: "https://chefcookit.com/recipe/tofu-croustillant-tonkatsu/",
      time: "30",
      category: "vegetarien",
      img: "./assets/img/tofu_tonkatsu.jpg",
      ingredients: [
        {
          name: "tofu",
          quantity: "300g",
        },
        {
          name: "oeuf liquide",
          quantity: "120ml",
        },
        {
          name: "chapelure panko",
          quantity: "120ml",
        },
        {
          name: "sauce tonkatsu",
          quantity: "120ml",
        },
        {
          name: "riz basmati",
          quantity: "140g",
        },
        {
          name: "carottes nantaises bio",
          quantity: 4,
        },
        {
          name: "bok choy shanghai",
          quantity: 1,
        },
        {
          name: "oignon(s) vert(s)",
          quantity: 2,
        },
        {
          name: "oignon(s) rouge(s)",
          quantity: 0.5,
        },
      ],
      tools: ["poêle", "casserole", "bols", "pinces"],
      steps: [
        {
          order: 1,
          title: "Cuire le riz",
          image: "./assets/img/tofu_tonkatsu_1.jpg",
          text: "Amener une casserole avec 2 tasses d'eau à ébullition. Rincer le riz. Verser le riz, couvrir et cuire à feu doux 10-12 minutes.",
        },
        {
          order: 2,
          title: "Mise en place",
          image: "./assets/img/tofu_tonkatsu_2.jpg",
          text:
            "Trancher finement les carottes en rondelles. Couper le pied des bok choy Trancher finement l'oignon rouge et l'oignon vert Couper 1 tranche épaisse de tofu par personne.",
        },
        {
          order: 3,
          title: "Mariner l'oignon",
          image: "./assets/img/tofu_tonkatsu_3.jpg",
          text:
            "Mettre l'oignon dans un bol avec 1/4 tasse d'eau, 1-2 c. à s. de vinaigre de cidre ou de vin, 1 c. à s. de sucre et une pincée de sel. Laisser mariner.",
        },
        {
          order: 4,
          title: "Cuire les légumes",
          image: "./assets/img/tofu_tonkatsu_4.jpg",
          text:
            "Chauffer un filet d'huile avec 1 c. à s. de beurre dans une poêle à feu moyen-élevé. Cuire les carottes __3-4 minutes__. Saler et poivrer. Ajouter le bok choy et cuire __2 minutes__ de plus. Retirer de la poêle.",
        },
        {
          order: 5,
          title: "Paner et cuire le tofu",
          image: "./assets/img/tofu_tonkatsu_5.jpg",
          text:
            "Pendant ce temps, mettre l'oeuf dans un bol et le panko dans un autre bol. Tremper le tofu dans l'oeuf puis enrober de panko. Ajouter un filet d'huile à la poêle. Cuire les tranches de tofu 2-3 minutes de chaque coté jusqu'à coloration. Saler et poivrer. Pour ajouter une touche ludique pour les enfants, vous pouvez couper le tofu en bâtonnets avant de le paner. Au service, servez la sauce dans un petit bol pour tremper",
        },
        {
          order: 6,
          title: "Monter l'assiette",
          image: "./assets/img/tofu_tonkatsu_6.jpg",
          text: "Servir le riz dans un bol avec les légumes et le tofu. Garnir avec la sauce tonkatsu et les oignons Bon appétit!",
        },
      ],
    },
    {
      id: 5,
      name: "Risotto aux champignons sauvages",
      src: "https://chefcookit.com/recipe/risotto-aux-champignons-sauvages",
      time: "30",
      category: "mediterraneen",
      img: "./assets/img/risotto.jpg",
      ingredients: [
        {
          name: "fromage grana padano",
          quantity: "45g",
        },
        {
          name: "oigon(s) vert(s)",
          quantity: 2,
        },
        {
          name: "champignons café",
          quantity: "150g",
        },
        {
          name: "poireau(x)",
          quantity: 0.5,
        },
        {
          name: "mélange de champignons sauvages séchés",
          quantity: "15g",
        },
        {
          name: "riz calrose",
          quantity: "140g",
        },
        {
          name: "noisettes",
          quantity: "30ml",
        },
        {
          name: "gousse(s) d'ail",
          quantity: 1,
        },
        {
          name: "cube de bouillon de légumes",
          quantity: 1,
        },
      ],
      tools: ["plaque de cuisson", "papier parchemin", "poêle", "cuillère en bois", "casserole", "bols"],
      steps: [
        {
          order: 1,
          title: "Hydrater les champignons",
          image: "./assets/img/risotto_1.jpg",
          text:
            "Préchauffer le four à 400°F. Mettre les champignons séchés dans une casserole avec 2 tasses d'eau. Chauffer à feu moyen 6-8 minutes Retirer de la casserole avec une cuillère trouée. Mélanger l'eau de cuisson des champignons avec 3 tasses d'eau et le cube de bouillon.",
        },
        {
          order: 2,
          title: "Mise en place",
          image: "./assets/img/risotto_2.jpg",
          text: "Trancher finement les champignons café, le poireau et l'oignon vert. Hacher l'ail. Écraser les noisettes grossièrement.",
        },
        {
          order: 3,
          title: "Cuire les champignons",
          image: "./assets/img/risotto_3.jpg",
          text:
            "Chauffer un filet d'huile à feu moyen-élevé. Cuire les champignons café 3-4 minutes jusqu'à coloration. Saler et poivrer. Retirer de la poêle.",
        },
        {
          order: 4,
          title: "Cuire les chips (optionnel)",
          image: "./assets/img/risotto_4.jpg",
          text:
            "Tapisser une plaque de cuisson avec du papier parchemin. Déposer le Grana Padano en 2 grosses rondelles ou plusieurs petites sur la plaque. Cuire au four 5 minutes jusqu'à ce que le fromage soit doré et croustillant. Retirer du four. Réserver.",
        },
        {
          order: 5,
          title: "Cuire le risotto",
          image: "./assets/img/risotto_5.jpg",
          text:
            "Ajouter l'ail et le poireau à la poêle à feu moyen-élevé. Cuire 2 minutes. Ajouter le riz et les champignons sauvages et mélanger. Ajouter le bouillon petit à petit en mélangeant constamment jusqu'à ce que le riz soit tendre et crémeux, environ 20 minutes. Ajouter de l'eau au besoin. Ajouter l'oignon vert, les champignons café et une noisette de beurre. Cuire 1-2 minutes.",
        },
        {
          order: 6,
          title: "Monter l'assiette",
          image: "./assets/img/risotto_6.jpg",
          text:
            "Rectifier l'assaisonnement au goût. Servir le risotto avec la chip de Grana Padano et les noisettes. Sinon, servir le tout au centre de la table et laisser chacun préparer son assiette.Bon appétit!",
        },
      ],
    },
  ],
};
