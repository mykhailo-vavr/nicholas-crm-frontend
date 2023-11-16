import NextLink from 'next/link';
import { LinkFC } from './types';
import { cls } from '@/utils';

const Link: LinkFC = ({ className, ...props }) => (
  <NextLink
    className={cls('flex items-center gap-1 text-sky-800 no-underline transition hover:text-sky-500', className)}
    {...props}
  />
);

export default Link;
