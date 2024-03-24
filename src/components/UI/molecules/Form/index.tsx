import { cls } from '@/utils';
import { FormFC } from './types';

const Form: FormFC = ({ className, classes, disabled, children, ...props }) => (
  <form className={cls(className, classes?.root)} {...props}>
    <fieldset className={cls('flex flex-col gap-2', classes?.container)} disabled={disabled}>
      {children}
    </fieldset>
  </form>
);

export default Form;
