'use client';

import { useFormStatus } from 'react-dom';
import Button from '../Button';
import { SubmitButtonFC } from './types';
import Spinner from '../Spinner';
import { cls } from '@/utils';
import { RenderIf } from '@/components/helpers';

const SubmitButton: SubmitButtonFC = ({ disabled, className, classes, children, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      classes={{ root: cls('h-10', className, classes?.root) }}
      {...props}
    >
      <RenderIf condition={pending}>
        <Spinner size="2rem" />
      </RenderIf>
      <RenderIf condition={!pending}>{children}</RenderIf>
    </Button>
  );
};

export default SubmitButton;
