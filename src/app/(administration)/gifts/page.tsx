import GiftsContainer from './container';
import { GiftsPageFC } from './types';

const GiftsPage: GiftsPageFC = ({ searchParams }) => <GiftsContainer searchParams={searchParams} />;

export default GiftsPage;
