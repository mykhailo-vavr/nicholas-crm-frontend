import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { GiftService } from '@/api/generated';
import { StandardContainer } from '@/components/UI/organisms';
import { Link } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';
import { FCWithId } from '@/types';

const GiftContainer: FCWithId = async ({ id }) => {
  const gift = await GiftService.giftControllerGetByPk({ id });

  return (
    <StandardContainer title={gift.name}>
      <StandardBar>
        <Link href={webRoutes.private.GIFTS}>
          <ArrowBackIcon />
          До списку
        </Link>
      </StandardBar>
      <div>
        <pre>{JSON.stringify(gift, null, 2)}</pre>
      </div>
    </StandardContainer>
  );
};

export default GiftContainer;
