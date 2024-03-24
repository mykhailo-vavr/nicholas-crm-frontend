import { FC } from 'react';
import { Link } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { StandardContainer } from '@/components/UI/organisms';

const HomeContainer: FC = () => (
  <StandardContainer title="Миколай про тебе не забуде">
    <p className="flex gap-1">
      Вже маєте профіль? <Link href={WEB_ROUTES.PUBLIC.SIGN_IN}>Ввійти</Link>
    </p>
  </StandardContainer>
);

export default HomeContainer;
