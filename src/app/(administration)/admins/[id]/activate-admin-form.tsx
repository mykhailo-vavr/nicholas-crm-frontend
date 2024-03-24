'use client';

import { Dialog, Form } from '@/components/UI/molecules';
import { Button, Input, SubmitButton } from '@/components/UI/atoms';
import { useModal, useServerActionForm } from '@/hooks';
import { activateAdminAction } from './actions';
import { activateAdminSchema } from './schemas';
import { FCWithId } from '@/types';

const ActivateAdminForm: FCWithId = ({ id }) => {
  const [isOpen, openDialog, closeDialog] = useModal();

  const [, action] = useServerActionForm(activateAdminAction, activateAdminSchema);

  return (
    <>
      <Button color="success" onClick={openDialog}>
        Активувати
      </Button>
      <Dialog title="Ви впевнені, що хочете  активувати?" open={isOpen} onClose={closeDialog}>
        <Form action={action}>
          <Input name="id" type="hidden" value={id} />
          <SubmitButton color="success">Активувати</SubmitButton>
          <Button onClick={closeDialog}>Відмінити</Button>
        </Form>
      </Dialog>
    </>
  );
};

export default ActivateAdminForm;
