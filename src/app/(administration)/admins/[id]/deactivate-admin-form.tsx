'use client';

import { Dialog, Form } from '@/components/UI/molecules';
import { Button, Input, SubmitButton, TextArea } from '@/components/UI/atoms';
import { useModal, useServerActionForm } from '@/hooks';
import { FCWithId } from '@/types';
import { deactivateAdminAction } from './actions';
import { deactivateAdminSchema } from './schemas';

const DeactivateAdminForm: FCWithId = ({ id }) => {
  const [isOpen, openDialog, closeDialog] = useModal();

  const [{ errors }, action] = useServerActionForm(deactivateAdminAction, deactivateAdminSchema);

  return (
    <>
      <Button color="error" onClick={openDialog}>
        Деактивувати
      </Button>
      <Dialog title="Ви впевнені, що хочете деактивувати?" open={isOpen} onClose={closeDialog}>
        <Form action={action}>
          <Input name="id" type="hidden" value={id} />
          <TextArea
            permanentHelperText={false}
            label="Причина деактивації"
            name="deactivationReason"
            errorText={errors?.deactivationReason}
          />
          <SubmitButton color="error">Деактивувати</SubmitButton>
          <Button onClick={closeDialog}>Відмінити</Button>
        </Form>
      </Dialog>
    </>
  );
};

export default DeactivateAdminForm;
