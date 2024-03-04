import { Link, SignOutButton } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { HeaderFC } from './types';
import StandardContainer from '../StandardContainer';
import { getServerUser } from '@/utils';
import { RenderIf } from '@/components/helpers';

const headerLinks = [
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

const Header: HeaderFC = async () => {
  const { isAuthenticated } = await getServerUser();

  return (
    <StandardContainer
      classes={{ root: 'rounded-t-none', content: 'flex items-center justify-between rounded-t-none' }}
    >
      <RenderIf condition={isAuthenticated}>
        <div className="flex gap-4">
          {headerLinks.map(({ label, href }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <SignOutButton />
      </RenderIf>
      <RenderIf condition={!isAuthenticated}>
        <div className="flex gap-4">
          <Link href={WEB_ROUTES.PUBLIC.SIGN_IN}>Ввійти</Link>
        </div>
      </RenderIf>
    </StandardContainer>
  );
};

export default Header;
