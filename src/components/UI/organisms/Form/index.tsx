import { cls } from '@/utils';
import { FormFC } from './types';

const Form: FormFC = ({ children, classes, className, ...props }) => (
  <form className={cls('flex flex-col gap-4', classes?.root, className)} {...props}>
    {children}
  </form>
);

export default Form;
