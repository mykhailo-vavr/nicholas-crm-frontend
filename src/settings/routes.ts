export const webRoutes = {
  public: {
    LANDING_PAGE: '/',
    SIGN_IN: '/auth/sign-in',
  },
  private: {
    PROFILE: '/profile',

    ADMINS: '/admins',
    CREATE_ADMIN: '/admins/create',
    ADMIN: '/admins/[id]',

    CHILDREN: '/children',
    CREATE_CHILD: '/children/create',
    CHILD: '/children/[id]',

    GIFTS: '/gifts',
    CREATE_GIFT: '/gifts/create',
    GIFT: '/gift/[id]',
  },
} as const;
