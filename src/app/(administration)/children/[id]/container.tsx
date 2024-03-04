import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { FCWithId } from './types';
import { ChildService } from '@/api/__generated__';
import { StandardContainer } from '@/components/UI/organisms';
import ActivateChildForm from './activate-child-form';
import DeactivateChildForm from './deactivate-child-form';
import { RenderIf } from '@/components/helpers';
import { Link } from '@/components/UI/atoms';
import { WEB_ROUTES } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';

const ChildContainer: FCWithId = async ({ id }) => {
  const child = await ChildService.childControllerGetByPk({ id });

  return (
    <StandardContainer title={`${child.firstName} ${child.lastName}`}>
      <StandardBar>
        <Link href={WEB_ROUTES.PRIVATE.CHILDREN}>
          <ArrowBackIcon />
          До списку
        </Link>
        <RenderIf condition={!child.isActive}>
          <ActivateChildForm id={id} />
        </RenderIf>
        <RenderIf condition={child.isActive}>
          <DeactivateChildForm id={id} />
        </RenderIf>
      </StandardBar>
      <div>
        <pre>{JSON.stringify(child, null, 2)}</pre>
      </div>
    </StandardContainer>
  );
};

export default ChildContainer;
