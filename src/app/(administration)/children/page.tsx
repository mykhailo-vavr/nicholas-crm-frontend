import ChildrenContainer from './container';
import { ChildrenPageFC } from './types';

const ChildrenPage: ChildrenPageFC = ({ searchParams }) => <ChildrenContainer searchParams={searchParams} />;

export default ChildrenPage;
