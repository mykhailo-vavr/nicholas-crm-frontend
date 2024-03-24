import { FC } from 'react';
import { Spinner } from '@/components/UI/atoms';

const RootLoading: FC = () => <Spinner className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />;

export default RootLoading;
