import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { UserService } from '@/api/generated';
import { StandardContainer } from '@/components/UI/organisms';
import ActivateAdminForm from './activate-admin-form';
import DeactivateAdminForm from './deactivate-admin-form';
import { RenderIf, RenderIfSuperAdmin } from '@/components/helpers';
import { Link } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { StandardBar } from '@/components/UI/molecules';
import { FCWithId } from '@/types';

const AdminContainer: FCWithId = async ({ id }) => {
  const admin = await UserService.userControllerGetByPk({ id });

  return (
    <StandardContainer title={`${admin.firstName} ${admin.lastName}`}>
      <StandardBar>
        <Link href={webRoutes.private.CHILDREN}>
          <ArrowBackIcon />
          До списку
        </Link>
        <RenderIfSuperAdmin>
          <RenderIf condition={!admin.isActive}>
            <ActivateAdminForm id={id} />
          </RenderIf>
          <RenderIf condition={admin.isActive}>
            <DeactivateAdminForm id={id} />
          </RenderIf>
        </RenderIfSuperAdmin>
      </StandardBar>
      <div>
        <pre>{JSON.stringify(admin, null, 2)}</pre>
      </div>
    </StandardContainer>
  );
};

export default AdminContainer;
