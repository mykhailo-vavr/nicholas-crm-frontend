'use client';

import { Dialog, Form } from '@/components/UI/molecules';
import { FCWithId } from './types';
import { Button, Input, SubmitButton, TextArea } from '@/components/UI/atoms';
import { useModal, useServerActionForm } from '@/hooks';
import { deactivateChildAction } from './actions';
import { deactivateChildSchema } from './schemas';

const DeactivateChildForm: FCWithId = ({ id }) => {
  const [isOpen, openDialog, closeDialog] = useModal();

  const [{ errors }, action] = useServerActionForm(deactivateChildAction, deactivateChildSchema);

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

export default DeactivateChildForm;
