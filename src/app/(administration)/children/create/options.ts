import { GenderEnum, NeedStatusEnum } from '@/api/generated';
import { Options } from '@/types';
import { t } from '@/utils';

export const genderOptions: Options<GenderEnum> = [
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

export const needStatusOptions: Options<NeedStatusEnum> = [
  {
    label: t.needStatus[NeedStatusEnum.MODERATE],
    value: NeedStatusEnum.MODERATE,
  },
  {
    label: t.needStatus[NeedStatusEnum.VERY],
    value: NeedStatusEnum.VERY,
  },
];
