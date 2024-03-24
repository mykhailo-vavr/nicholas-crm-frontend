import LinkOriginal from 'next/link';
import { LinkFC } from './types';
import { cls } from '@/utils';

const Link: LinkFC = ({ className, ...props }) => (
  <LinkOriginal className={cls('text-sky-800 transition hover:text-sky-600', className)} {...props} />
);

export default Link;
