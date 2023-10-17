'use client';

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import Button from '../Button';
import { SubmitButtonFC } from './types';
import Spinner from '../Spinner';

const SubmitButton: SubmitButtonFC = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} variant="contained" className="h-10">
      {pending ? <Spinner size="2rem" /> : children}
    </Button>
  );
};

export default SubmitButton;
