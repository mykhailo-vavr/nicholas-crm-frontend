'use client';

import { FC, useMemo } from 'react';
import { Button, Link } from '@/components/UI/atoms';
import { RenderIf } from '@/components/helpers';
import { RolesEnum } from '@/api/__generated__';
import { useSignOut, useUser } from '@/hooks';
import { adminLinks, publicLinks } from './links';

const Header: FC = () => {
  const signOut = useSignOut();
  const { isAuthenticated, role } = useUser();

  const links = useMemo(
    () =>
      ({
        public: publicLinks,
        [RolesEnum.VOLUNTEER]: adminLinks,
        [RolesEnum.ADMIN]: adminLinks,
        [RolesEnum.SUPER_ADMIN]: adminLinks,
      })[role || 'public'],
    [role],
  );

  return (
    <header className="container mb-8 flex items-center justify-between rounded-b-lg p-4 shadow">
      <nav>
        <ul className="flex gap-4">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <RenderIf condition={isAuthenticated}>
        <Button onClick={signOut}>Вийти</Button>
      </RenderIf>
    </header>
  );
};

export default Header;
