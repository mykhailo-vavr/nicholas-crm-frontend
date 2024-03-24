import { cls } from '@/utils';
import { StandardContainerFC } from './types';
import { RenderIf } from '@/components/helpers';

// TODO: Rename to SectionContainer?

const StandardContainer: StandardContainerFC = ({ title, children, className, classes }) => (
  <section className={cls('container', className, classes?.root)}>
    <RenderIf condition={title}>
      <h3 className={cls('mb-2 text-lg', classes?.title)}>{title}</h3>
    </RenderIf>
    <div className={cls('rounded-lg p-4 shadow shadow-slate-300', classes?.container)}>{children}</div>
  </section>
);

export default StandardContainer;
