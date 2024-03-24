import GoogleMapsProvider from '@/components/providers/google-maps';
import { FCWithChildren } from '@/types';

const Lay: FCWithChildren = ({ children }) => <GoogleMapsProvider>{children}</GoogleMapsProvider>;

export default Lay;
