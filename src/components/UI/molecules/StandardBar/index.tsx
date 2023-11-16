import { cls } from '@/utils';
import { StandardBarFC } from './types';

const StandardBar: StandardBarFC = ({ className, children }) => (
  <div className={cls('mb-4 flex items-center justify-between', className)}>{children}</div>
);

export default StandardBar;
