import { Action } from './action';

export const ACTIONS: Action[] = [
/* ANIMALS */
  {
    modifier: 'ctrl',
    shortcut: 'z',
    label: 'bat',
    imageUrl: './assets/svgs/animals/bat.svg',
    audioUrl: './assets/sounds/animals/bat.wav'
  },
  {
    modifier: 'shift',
    shortcut: 'r',
    label: 'camel',
    imageUrl: './assets/svgs/animals/camel.svg',
    audioUrl: './assets/sounds/animals/camel.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'cat',
    imageUrl: './assets/svgs/animals/cat.svg',
    audioUrl: './assets/sounds/animals/cat.wav'
  },
  {
    modifier: 'alt',
    shortcut: 't',
    label: 'dinosaur',
    imageUrl: './assets/svgs/animals/dinosaur.svg',
    audioUrl: './assets/sounds/animals/dinosaur.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'dog',
    imageUrl: './assets/svgs/animals/dog.svg',
    audioUrl: './assets/sounds/animals/dog.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'dolphin',
    imageUrl: './assets/svgs/animals/dolphin.svg',
    audioUrl: './assets/sounds/animals/dolphin.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'duck',
    imageUrl: './assets/svgs/animals/duck.svg',
    audioUrl: './assets/sounds/animals/duck.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'fish',
    imageUrl: './assets/svgs/animals/fish.svg',
    audioUrl: './assets/sounds/animals/fish.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'frog',
    imageUrl: './assets/svgs/animals/frog.svg',
    audioUrl: './assets/sounds/animals/frog.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'mouse',
    imageUrl: './assets/svgs/animals/mouse.svg',
    audioUrl: './assets/sounds/animals/mouse.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'penguin',
    imageUrl: './assets/svgs/animals/penguin.svg',
    audioUrl: './assets/sounds/animals/penguin.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'zebra',
    imageUrl: './assets/svgs/animals/zebra.svg',
    audioUrl: './assets/sounds/animals/zebra.wav'
  },

/* FRUITS */
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 'apple',
    imageUrl: './assets/svgs/fruits/apple.svg',
    audioUrl: './assets/sounds/fruits/apple.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'd',
    label: 'banana',
    imageUrl: './assets/svgs/fruits/banana.svg',
    audioUrl: './assets/sounds/fruits/banana.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'cherry',
    imageUrl: './assets/svgs/fruits/cherry.svg',
    audioUrl: './assets/sounds/fruits/cherry.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 't',
    label: 'grapes',
    imageUrl: './assets/svgs/fruits/grapes.svg',
    audioUrl: './assets/sounds/fruits/grapes.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'kiwi',
    imageUrl: './assets/svgs/fruits/kiwi.svg',
    audioUrl: './assets/sounds/fruits/kiwi.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'lemon',
    imageUrl: './assets/svgs/fruits/lemon.svg',
    audioUrl: './assets/sounds/fruits/lemon.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'peach',
    imageUrl: './assets/svgs/fruits/peach.svg',
    audioUrl: './assets/sounds/fruits/peach.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'pear',
    imageUrl: './assets/svgs/fruits/pear.svg',
    audioUrl: './assets/sounds/fruits/pear.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'pineapple',
    imageUrl: './assets/svgs/fruits/pineapple.svg',
    audioUrl: './assets/sounds/fruits/pineapple.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'strawberry',
    imageUrl: './assets/svgs/fruits/strawberry.svg',
    audioUrl: './assets/sounds/fruits/strawberry.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'watermelon',
    imageUrl: './assets/svgs/fruits/watermelon.svg',
    audioUrl: './assets/sounds/fruits/watermelon.wav'
  },

/* VEGETABLES */

  {
    modifier: 'alt',
    shortcut: 'f',
    label: 'artichoke',
    imageUrl: './assets/svgs/vegetables/artichoke.svg',
    audioUrl: './assets/sounds/vegetables/artichoke.wav'
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'broccoli',
    imageUrl: './assets/svgs/vegetables/broccoli.svg',
    audioUrl: './assets/sounds/vegetables/broccoli.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'e',
    label: 'carrot',
    imageUrl: './assets/svgs/vegetables/carrot.svg',
    audioUrl: './assets/sounds/vegetables/carrot.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'corn',
    imageUrl: './assets/svgs/vegetables/corn.svg',
    audioUrl: './assets/sounds/vegetables/corn.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'garlic',
    imageUrl: './assets/svgs/vegetables/garlic.svg',
    audioUrl: './assets/sounds/vegetables/garlic.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'lettuce',
    imageUrl: './assets/svgs/vegetables/lettuce.svg',
    audioUrl: './assets/sounds/vegetables/lettuce.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'mushrooms',
    imageUrl: './assets/svgs/vegetables/mushrooms.svg',
    audioUrl: './assets/sounds/vegetables/mushrooms.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'onion',
    imageUrl: './assets/svgs/vegetables/onion.svg',
    audioUrl: './assets/sounds/vegetables/onion.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'potato',
    imageUrl: './assets/svgs/vegetables/potato.svg',
    audioUrl: './assets/sounds/vegetables/potato.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'pumpkin',
    imageUrl: './assets/svgs/vegetables/pumpkin.svg',
    audioUrl: './assets/sounds/vegetables/pumpkin.wav'
  },

/* CLOTHING */

  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'boots',
    imageUrl: './assets/svgs/clothing/boots.svg',
    audioUrl: './assets/sounds/clothing/boots.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 'a',
    label: 'bowtie',
    imageUrl: './assets/svgs/clothing/bowtie.svg',
    audioUrl: './assets/sounds/clothing/bowtie.wav'
  },
  {
    modifier: 'ctrl',
    shortcut: 'g',
    label: 'coat',
    imageUrl: './assets/svgs/clothing/coat.svg',
    audioUrl: './assets/sounds/clothing/coat.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'a',
    label: 'gloves',
    imageUrl: './assets/svgs/clothing/gloves.svg',
    audioUrl: './assets/sounds/clothing/gloves.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'hat',
    imageUrl: './assets/svgs/clothing/hat.svg',
    audioUrl: './assets/sounds/clothing/hat.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'skirt',
    imageUrl: './assets/svgs/clothing/skirt.svg',
    audioUrl: './assets/sounds/clothing/skirt.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'socks',
    imageUrl: './assets/svgs/clothing/socks.svg',
    audioUrl: './assets/sounds/clothing/socks.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 't-shirt',
    imageUrl: './assets/svgs/clothing/t-shirt.svg',
    audioUrl: './assets/sounds/clothing/t-wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'trousers',
    imageUrl: './assets/svgs/clothing/trousers.svg',
    audioUrl: './assets/sounds/clothing/trousers.wav'
  },

/* OFFICE */

  {
    modifier: 'shift',
    shortcut: 't',
    label: 'chair',
    imageUrl: './assets/svgs/office/chair.svg',
    audioUrl: './assets/sounds/office/chair.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'z',
    label: 'clock',
    imageUrl: './assets/svgs/office/clock.svg',
    audioUrl: './assets/sounds/office/clock.wav'
  },
  {
    modifier: 'shift',
    shortcut: 'f',
    label: 'enveloppe',
    imageUrl: './assets/svgs/office/enveloppe.svg',
    audioUrl: './assets/sounds/office/enveloppe.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'g',
    label: 'keyboard',
    imageUrl: './assets/svgs/office/keyboard.svg',
    audioUrl: './assets/sounds/office/keyboard.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'paperclip',
    imageUrl: './assets/svgs/office/paperclip.svg',
    audioUrl: './assets/sounds/office/paperclip.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'pencil',
    imageUrl: './assets/svgs/office/pencil.svg',
    audioUrl: './assets/sounds/office/pencil.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'printer',
    imageUrl: './assets/svgs/office/printer.svg',
    audioUrl: './assets/sounds/office/printer.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'telephone',
    imageUrl: './assets/svgs/office/telephone.svg',
    audioUrl: './assets/sounds/office/telephone.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'trash',
    imageUrl: './assets/svgs/office/trash.svg',
    audioUrl: './assets/sounds/office/trash.wav'
  },

/* RECREATION */

  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'baseball',
    imageUrl: './assets/svgs/recreation/baseball.svg',
    audioUrl: './assets/sounds/recreation/baseball.wav'
  },
  {
    modifier: 'alt',
    shortcut: 'r',
    label: 'basketball',
    imageUrl: './assets/svgs/recreation/basketball.svg',
    audioUrl: './assets/sounds/recreation/basketball.wav'
  },
  {
    modifier: 'shift',
    shortcut: 'd',
    label: 'cards',
    imageUrl: './assets/svgs/recreation/cards.svg',
    audioUrl: './assets/sounds/recreation/cards.wav'
  },
  {
    modifier: 'shift',
    shortcut: 'g',
    label: 'darts',
    imageUrl: './assets/svgs/recreation/darts.svg',
    audioUrl: './assets/sounds/recreation/darts.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'dice',
    imageUrl: './assets/svgs/recreation/dice.svg',
    audioUrl: './assets/sounds/recreation/dice.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'pool',
    imageUrl: './assets/svgs/recreation/pool.svg',
    audioUrl: './assets/sounds/recreation/pool.wav'
  },
  {
    modifier: '',
    shortcut: '',
    label: 'rubikscube',
    imageUrl: './assets/svgs/recreation/rubikscube.svg',
    audioUrl: './assets/sounds/recreation/rubikscube.wav'
  }
]
