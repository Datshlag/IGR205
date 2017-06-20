import { Action } from './action';

export const ACTIONS: Action[] = [
/* ANIMALS */
  {
    modifier: 'ctrl',
    shortcut: 'a',
    label: 'bat',
    imageUrl: './assets/svgs/animals/bat.svg',
    audioUrl: 'http://hydra-images.cursecdn.com/dota2.gamepedia.com/2/26/Doom_ability_doom_05.mp3'
  },
  {
    modifier: 'ctrl',
    shortcut: 'z',
    label: 'camel',
    imageUrl: './assets/svgs/animals/camel.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'cat',
    imageUrl: './assets/svgs/animals/cat.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'dinosaur',
    imageUrl: './assets/svgs/animals/dinosaur.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'dog',
    imageUrl: './assets/svgs/animals/dog.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'dolphin',
    imageUrl: './assets/svgs/animals/dolphin.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'duck',
    imageUrl: './assets/svgs/animals/duck.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'fish',
    imageUrl: './assets/svgs/animals/fish.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'frog',
    imageUrl: './assets/svgs/animals/frog.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 'mouse',
    imageUrl: './assets/svgs/animals/mouse.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'penguin',
    imageUrl: './assets/svgs/animals/penguin.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'r',
    label: 'zebra',
    imageUrl: './assets/svgs/animals/zebra.svg',
    audioUrl: ''
  },

/* FRUITS */
  {
    modifier: 'ctrl',
    shortcut: 'a',
    label: 'apple',
    imageUrl: './assets/svgs/fruits/apple.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'z',
    label: 'banana',
    imageUrl: './assets/svgs/fruits/banana.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'cherry',
    imageUrl: './assets/svgs/fruits/cherry.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'grapes',
    imageUrl: './assets/svgs/fruits/grapes.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'kiwi',
    imageUrl: './assets/svgs/fruits/kiwi.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'lemon',
    imageUrl: './assets/svgs/fruits/lemon.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'peach',
    imageUrl: './assets/svgs/fruits/peach.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'pear',
    imageUrl: './assets/svgs/fruits/pear.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'pineapple',
    imageUrl: './assets/svgs/fruits/pineapple.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 'strawberry',
    imageUrl: './assets/svgs/fruits/strawberry.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'watermelon',
    imageUrl: './assets/svgs/fruits/watermelon.svg',
    audioUrl: ''
  },

/* VEGETABLES */

  {
    modifier: 'ctrl',
    shortcut: 'z',
    label: 'artichoke',
    imageUrl: './assets/svgs/vegetables/artichoke.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'broccoli',
    imageUrl: './assets/svgs/vegetables/broccoli.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'carrot',
    imageUrl: './assets/svgs/vegetables/carrot.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'corn',
    imageUrl: './assets/svgs/vegetables/corn.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'garlic',
    imageUrl: './assets/svgs/vegetables/garlic.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'lettuce',
    imageUrl: './assets/svgs/vegetables/lettuce.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'mushrooms',
    imageUrl: './assets/svgs/vegetables/mushrooms.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'onion',
    imageUrl: './assets/svgs/vegetables/onion.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 'potato',
    imageUrl: './assets/svgs/vegetables/potato.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'pumpkin',
    imageUrl: './assets/svgs/vegetables/pumpkin.svg',
    audioUrl: ''
  },

/* CLOTHING */

  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'boots',
    imageUrl: './assets/svgs/clothing/boots.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'bowtie',
    imageUrl: './assets/svgs/clothing/bowtie.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'coat',
    imageUrl: './assets/svgs/clothing/coat.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'gloves',
    imageUrl: './assets/svgs/clothing/gloves.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'hat',
    imageUrl: './assets/svgs/clothing/hat.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'skirt',
    imageUrl: './assets/svgs/clothing/skirt.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'socks',
    imageUrl: './assets/svgs/clothing/socks.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 't-shirt',
    imageUrl: './assets/svgs/clothing/t-shirt.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'trousers',
    imageUrl: './assets/svgs/clothing/trousers.svg',
    audioUrl: ''
  },

/* OFFICE */

  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'chair',
    imageUrl: './assets/svgs/office/chair.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'clock',
    imageUrl: './assets/svgs/office/clock.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'enveloppe',
    imageUrl: './assets/svgs/office/enveloppe.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'keyboard',
    imageUrl: './assets/svgs/office/keyboard.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'paperclip',
    imageUrl: './assets/svgs/office/paperclip.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'pencil',
    imageUrl: './assets/svgs/office/pencil.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'printer',
    imageUrl: './assets/svgs/office/printer.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'z',
    label: 'telephone',
    imageUrl: './assets/svgs/office/telephone.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'e',
    label: 'trash',
    imageUrl: './assets/svgs/office/trash.svg',
    audioUrl: ''
  },

/* RECREATION */

  {
    modifier: 'ctrl',
    shortcut: 'e',
    label: 'baseball',
    imageUrl: './assets/svgs/recreation/baseball.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'r',
    label: 'basketball',
    imageUrl: './assets/svgs/recreation/basketball.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'q',
    label: 'cards',
    imageUrl: './assets/svgs/recreation/cards.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 's',
    label: 'darts',
    imageUrl: './assets/svgs/recreation/darts.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'd',
    label: 'dice',
    imageUrl: './assets/svgs/recreation/dice.svg',
    audioUrl: ''
  },
  {
    modifier: 'ctrl',
    shortcut: 'f',
    label: 'pool',
    imageUrl: './assets/svgs/recreation/pool.svg',
    audioUrl: ''
  },
  {
    modifier: 'shift',
    shortcut: 'a',
    label: 'rubikscube',
    imageUrl: './assets/svgs/recreation/rubikscube.svg',
    audioUrl: ''
  }
]
