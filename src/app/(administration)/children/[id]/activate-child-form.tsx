'use client';

import { Dialog, Form } from '@/components/UI/molecules';
import { FCWithId } from './types';
import { Button, Input, SubmitButton } from '@/components/UI/atoms';
import { useModal, useServerActionForm } from '@/hooks';
import { activateChildAction } from './actions';
import { activateChildSchema } from './schemas';

const ActivateChildForm: FCWithId = ({ id }) => {
  const [isOpen, openDialog, closeDialog] = useModal();

  const [, action] = useServerActionForm(activateChildAction, activateChildSchema);

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

export default ActivateChildForm;
