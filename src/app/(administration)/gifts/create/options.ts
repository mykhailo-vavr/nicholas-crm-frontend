import { GenderEnum, GiftTypeEnum, GiftSubtypeEnum } from '@/api/__generated__';
import { Options } from '@/types';
import { t } from '@/utils';

export const giftTypeOptions: Options<GiftTypeEnum> = [
  {
    label: t.gift.type[GiftTypeEnum.HYGIENE_PRODUCT],
    value: GiftTypeEnum.HYGIENE_PRODUCT,
  },
  {
    label: t.gift.type[GiftTypeEnum.STATIONERY],
    value: GiftTypeEnum.STATIONERY,
  },
  {
    label: t.gift.type[GiftTypeEnum.TOY],
    value: GiftTypeEnum.TOY,
  },
  {
    label: t.gift.type[GiftTypeEnum.CLOTHES],
    value: GiftTypeEnum.CLOTHES,
  },
  {
    label: t.gift.type[GiftTypeEnum.OTHER],
    value: GiftTypeEnum.OTHER,
  },
];

export const giftSubtypeOptions: Options<GiftSubtypeEnum> = [
  {
    label: t.gift.subtype[GiftSubtypeEnum.NOTEBOOK],
    value: GiftSubtypeEnum.NOTEBOOK,
  },
  {
    label: t.gift.subtype[GiftSubtypeEnum.COLORED],
    value: GiftSubtypeEnum.COLORED,
  },
  {
    label: t.gift.subtype[GiftSubtypeEnum.BOOK],
    value: GiftSubtypeEnum.BOOK,
  },
  {
    label: t.gift.subtype[GiftSubtypeEnum.ART],
    value: GiftSubtypeEnum.ART,
  },
  {
    label: t.gift.subtype[GiftSubtypeEnum.ALBUM],
    value: GiftSubtypeEnum.ALBUM,
  },
];

export const genderOptions = [
  {
    label: t.gender[GenderEnum.MALE],
    value: GenderEnum.MALE,
  },
  {
    label: t.gender[GenderEnum.FEMALE],
    value: GenderEnum.FEMALE,
  },
  {
    label: t.gender[GenderEnum.UNIVERSAL],
    value: GenderEnum.UNIVERSAL,
  },
];
