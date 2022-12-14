import { ICollection, IButtonLink } from '../../types';

export const dataMenuCostum: Array<IButtonLink> = [
  {
    _id: '0',
    title: 'Gants custom',
    link: '',
  },
  {
    _id: '1',
    title: 'Kits personnalisés',
    link: '',
  },
  {
    _id: '2',
    title: 'Kits fighters',
    link: '',
  },
];

export const dataCustom: Array<ICollection> = [
  {
    _id: '0',
    imageDesk:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802130/Venum/Groupe_de_masques_130_kbr0di.jpg',
    imageMobile:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802299/Venum/Mobile/Gants-Custom_Mobile_ne1ltu.jpg',
    title: 'Gants Custom',
    description:
      "8 modèles de gants, jusqu'à 20 zones personnalisables, près de 20 couleurs, 3 matières…",
    link: '',
    listButtons: [
      {
        _id: '0',
        title: 'Decouvrir',
        link: '',
      },
    ],
  },
  {
    _id: '1',
    imageDesk:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802130/Venum/Groupe_de_masques_129_vrdzyv.jpg',
    imageMobile:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802301/Venum/Mobile/Kits-Personnalise%CC%81-Custom_Mobile_btxqee.jpg',
    title: 'Kits personnalisés',
    description:
      "8 modèles de gants, jusqu'à 20 zones personnalisables, près de 20 couleurs, 3 matières…",
    link: '',
    listButtons: [
      {
        _id: '0',
        title: 'Decouvrir',
        link: '',
      },
    ],
  },
  {
    _id: '2',
    imageDesk:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802129/Venum/Groupe_de_masques_128_b0jalm.jpg',
    imageMobile:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1669802301/Venum/Mobile/Kits-Fighter-Custom_Mobile_qif2fb.jpg',
    title: 'Kits fighters',
    description:
      "8 modèles de gants, jusqu'à 20 zones personnalisables, près de 20 couleurs, 3 matières…",
    link: '',
    listButtons: [
      {
        _id: '0',
        title: 'Decouvrir',
        link: '',
      },
    ],
  },
];
