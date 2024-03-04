import { Link, Typography } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { LandingContainerFC } from './types';
import { StandardContainer } from '@/components/UI/organisms';

const LandingContainer: LandingContainerFC = () => (
  <StandardContainer
    classes={{ title: 'text-lg', content: 'flex flex-col gap-2.5 text-md' }}
    title="Миколай про тебе не забуде"
  >
    <Typography className="flex gap-1">
      Вже маєте профіль? <Link href={WEB_ROUTES.PUBLIC.SIGN_IN}>Ввійти</Link>
    </Typography>
  </StandardContainer>
);

export default LandingContainer;
