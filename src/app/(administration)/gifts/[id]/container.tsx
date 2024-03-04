import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { GiftService } from '@/api/__generated__';
import { StandardContainer } from '@/components/UI/organisms';
import { Link } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';
import { FCWithId } from '@/types';

const GiftContainer: FCWithId = async ({ id }) => {
  const gift = await GiftService.giftControllerGetByPk({ id });

  return (
    <StandardContainer title={gift.name}>
      <StandardBar>
        <Link href={WEB_ROUTES.PRIVATE.GIFTS}>
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
