import NextLink from 'next/link';
import { LinkFC } from './types';

const Link: LinkFC = (props) => <NextLink className="text-sky-800 no-underline" {...props} />;

export default Link;
