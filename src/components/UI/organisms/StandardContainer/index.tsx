import { cls } from '@/utils';
import { StandardContainerFC } from './types';
import { Typography } from '../../atoms';

const StandardContainer: StandardContainerFC = ({ title, children, classes }) => (
  <div className={cls('flex w-full flex-col gap-1.5 rounded-lg', classes?.root)}>
    {title && (
      <Typography variant="h6" className={cls(classes?.title)}>
        {title}
      </Typography>
    )}
    <div className={cls('rounded-lg p-4 shadow-lg shadow-slate-300', classes?.content)}>{children}</div>
  </div>
);

export default StandardContainer;
