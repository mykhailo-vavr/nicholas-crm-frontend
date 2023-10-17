import { FormFC } from './types';

const Form: FormFC = ({ children, ...props }) => (
  <form className="flex flex-col gap-4" {...props}>
    {children}
  </form>
);

export default Form;
