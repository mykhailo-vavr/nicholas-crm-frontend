import { Link, SignOutButton } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { HeaderFC } from './types';
import StandardContainer from '../StandardContainer';
import { getServerUser } from '@/utils';
import { RenderIf } from '@/components/helpers';

const Header: HeaderFC = async () => {
  const { isAuthenticated } = await getServerUser();

  return (
    <StandardContainer
      classes={{ root: 'rounded-t-none', content: 'flex items-center justify-between rounded-t-none' }}
    >
      <RenderIf condition={isAuthenticated}>
        <div className="flex gap-4">
          <Link href={webRoutes.private.PROFILE}>Профіль</Link>
        </div>
        <SignOutButton />
      </RenderIf>
      <RenderIf condition={!isAuthenticated}>
        <div className="flex gap-4">
          <Link href={webRoutes.public.SIGN_IN}>Ввійти</Link>
        </div>
      </RenderIf>
    </StandardContainer>
  );
};

export default Header;