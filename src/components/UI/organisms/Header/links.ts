import { WEB_ROUTES } from '@/settings';

export const publicLinks = [
  {
    label: 'Ввійти',
    href: WEB_ROUTES.PUBLIC.SIGN_IN,
  },
];

export const adminLinks = [
  {
    label: 'Профіль',
    href: WEB_ROUTES.PRIVATE.PROFILE,
  },
  {
    label: 'Адміни',
    href: WEB_ROUTES.PRIVATE.ADMINS,
  },
  {
    label: 'Діти',
    href: WEB_ROUTES.PRIVATE.CHILDREN,
  },
  {
    label: 'Подарунки',
    href: WEB_ROUTES.PRIVATE.GIFTS,
  },
];
