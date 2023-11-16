import { GenderEnum, GiftSubtypeEnum, GiftTypeEnum, NeedStatusEnum, RolesEnum } from '@/api/generated';

export const t = {
  roles: {
    [RolesEnum.ADMIN]: 'Адмін',
    [RolesEnum.SUPER_ADMIN]: 'Супер адмін',
  },
  gender: {
    [GenderEnum.FEMALE]: 'Дівчинка',
    [GenderEnum.MALE]: 'Хлопчик',
    [GenderEnum.UNIVERSAL]: 'Універсальний',
  },
  needStatus: {
    [NeedStatusEnum.MODERATE]: 'Потребує',
    [NeedStatusEnum.VERY]: 'Дуже потребує',
  },
  gift: {
    type: {
      [GiftTypeEnum.CLOTHES]: 'Одяг',
      [GiftTypeEnum.HYGIENE_PRODUCT]: 'Гігієна',
      [GiftTypeEnum.OTHER]: 'Інше',
      [GiftTypeEnum.STATIONERY]: 'Канцелярія',
      [GiftTypeEnum.TOY]: 'Іграшки',
    },
    subtype: {
      [GiftSubtypeEnum.ALBUM]: 'Альбом',
      [GiftSubtypeEnum.ART]: 'Мистецтво',
      [GiftSubtypeEnum.BOOK]: 'Книжка',
      [GiftSubtypeEnum.COLORED]: 'Кольорове',
      [GiftSubtypeEnum.NOTEBOOK]: 'Зошит',
    },
  },
};
