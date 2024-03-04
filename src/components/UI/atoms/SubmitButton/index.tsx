'use client';

import { useFormStatus } from 'react-dom';
import Button from '../Button';
import { SubmitButtonFC } from './types';
import Spinner from '../Spinner';
import { cls } from '@/utils';

const SubmitButton: SubmitButtonFC = ({ disabled, classes, className, children, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      classes={{ root: cls('h-10', classes?.root, className) }}
      {...props}
    >
      {pending ? <Spinner size="2rem" /> : children}
    </Button>
  );
};

export default SubmitButton;
