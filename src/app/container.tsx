import { Link, Typography } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { LandingContainerFC } from './types';
import { StandardContainer } from '@/components/UI/organisms';

const LandingContainer: LandingContainerFC = () => (
  <StandardContainer
    classes={{ title: 'text-lg', content: 'flex flex-col gap-2.5 text-md' }}
    title="Миколай про тебе не забуде"
  >
    <Typography>
      Вже маєте профіль? <Link href={webRoutes.public.SIGN_IN}>Ввійти</Link>
    </Typography>
  </StandardContainer>
);

export default LandingContainer;
